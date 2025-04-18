import { Component } from '@angular/core';
import { environment } from '@envs/environment';

@Component({
  selector: 'app-navbar-header',
  imports: [],
  templateUrl: './navbar-header.component.html',
})
export class NavbarHeaderComponent {
  envs = environment;
}
