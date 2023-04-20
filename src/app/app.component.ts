import { Component, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UtilsService } from './services/utils.service';
import {MatDialog} from '@angular/material/dialog';
import { EditComponent } from './views/divisions/edit/edit.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mysecrets';

  constructor(
    private utilsService: UtilsService,
    private authService: AuthService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){
    this.utilsService.setWindows();
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditComponent, {data: {type: this.router.url}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.utilsService.setWindows();
  }
  
}
