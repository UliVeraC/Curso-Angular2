import { Component } from '@angular/core';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { NavbarOptionsComponent } from './navbar-options/navbar-options.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [NavbarHeaderComponent, NavbarOptionsComponent, RouterOutlet],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

}
