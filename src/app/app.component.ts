import { Component, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mysecrets';

  constructor(
    private utilsService: UtilsService,
    private authService: AuthService
    ){
    this.utilsService.setWindows();
    this.authService.checkAuth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.utilsService.setWindows();
  }
  
}
