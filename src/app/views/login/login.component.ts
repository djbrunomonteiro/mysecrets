import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';
import { appActions, EAction, EGroup } from 'src/app/store/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(7)]]
  });
  hide = true;

  constructor(
    public utilsService: UtilsService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  signIn() {
    this.authService.signIn(this.form.value.email, this.form.value.password)
      .then(res => {
        const user: IUser = {
          id: res.user.uid,
          email: res.user.email,
        }
        this.store.dispatch(appActions({group: EGroup.User, action: EAction.SetOneStore, props: user}));
        this.router.navigate(['/'])

      })
      .catch(err => {
        this.utilsService.showMessage('Login Invalido')
      })
  }


}
