import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  // items: NbMenuItem[] = [
  //   {
  //     title: 'Dashboard',
  //     icon: 'clipboard-outline',
  //     link: 'dashboard',
  //     home: true,
  //   },
  //   {
  //     title: 'Calendar',
  //     icon: 'calendar-outline',
  //     link: '**',
  //   },
  //   {
  //     title: 'Portfolio',
  //     icon: 'briefcase-outline',
  //   },
  //   {
  //     title: 'Wallet',
  //     icon: 'npm-outline',
  //   },
  // ];
  constructor() {}

  ngOnInit(): void {}
}
