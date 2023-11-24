import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent 
{
  activeMenu: string | null = null;

  toggleMenu(menu: string): void {
    this.activeMenu = menu;
  }

  showSubMenu(subMenu: string): void {
    console.log(`Clicked on ${subMenu}`);
  }
}