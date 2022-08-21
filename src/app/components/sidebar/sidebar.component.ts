import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  MENU_SIDER = [
    {
      name: 'Trang chủ',
      icon: 'home.svg',
    },
    {
      name: 'Danh sách KH Savy',
      icon: 'people.svg',
    },
    {
      name: 'Quản lý tài khoản',
      icon: 'wallet.svg',
      sections: [
        {
          name: 'Khoá/Mở khoá tài khoản',
        },
        {
          name: 'Cấp lại mật khẩu',
        },
        {
          name: 'Danh sách đã được phê duyệt',
        },
      ],
    },
    {
      name: 'Quản lý thông báo',
      icon: 'noti.svg',
    },
    {
      name: 'Phê duyệt tập trung',
      icon: 'check.svg',
    },
  ];

  ngOnInit(): void {}
}
