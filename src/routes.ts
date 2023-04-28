const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    icon: 'HeartFilled',
    name: '超的首页呀！',
    path: '/home',
    component: './Home',
  },
  {
    icon: 'CopyFilled',
    name: '3D效果(three.js)',
    path: '/three',
    component: './Three',
  },
];

export default routes;
