import { Component, HostListener, OnInit  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';

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

  screen$ = this.utilsService.getWindows();

  constructor(
    public utilsService: UtilsService,
    private formBuilder: FormBuilder
    ){}

  ngOnInit(): void {

  }


}
