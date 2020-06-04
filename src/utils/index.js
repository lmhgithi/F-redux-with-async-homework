import React from 'react';
import Profile from '../views/Profile';
import NOTIFICATION from '../views/Notification';
import REPORT from '../views/Report';

export const modules = [
  { name: '个人信息', path: '/profile', permissionCode: 'PROFILE', component: <Profile /> },
  {
    name: '通知中心',
    path: '/notification',
    permissionCode: 'NOTIFICATION',
    component: <NOTIFICATION />
  },
  { name: '报表', path: '/report', permissionCode: 'REPORT', component: <REPORT /> }
];
