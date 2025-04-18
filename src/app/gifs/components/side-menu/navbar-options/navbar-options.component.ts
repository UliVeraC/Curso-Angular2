import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface MenuOptions {
  icon: string;
  label: string;
  route: string;
  sublabel: string;
}


@Component({
  selector: 'app-navbar-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-options.component.html',
})
export class NavbarOptionsComponent {

  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ]

}
