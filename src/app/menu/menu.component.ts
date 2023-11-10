import { Component } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  menuItems:Menu[] = [
    new Menu ('/home', 'HOME'),
    new Menu('/resume', 'RESUME'),
    new Menu('/about', 'ABOUT ME')
  ]
  ngOnInit():void {

  }
}
