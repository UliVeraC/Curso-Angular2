import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SideMenuComponent, RouterOutlet],
  templateUrl: './dashboard.component.html'
})
export default class DashboardComponent {

}
