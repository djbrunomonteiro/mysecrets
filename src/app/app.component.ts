import { Component, HostListener } from '@angular/core';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mysecrets';

  constructor(private utilsService: UtilsService){
    this.utilsService.setWindows();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.utilsService.setWindows();
  }
  
}
