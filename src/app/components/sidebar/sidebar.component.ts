import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'clipboard-outline',
      link: '',
      home: true,
    },
    {
      title: 'Calendar',
      icon: 'calendar-outline',
    },
    {
      title: 'Portfolio',
      icon: 'briefcase-outline',
    },
    {
      title: 'Wallet',
      icon: 'npm-outline',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
