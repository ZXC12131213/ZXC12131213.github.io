const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    icon: 'HeartFilled',
    name: '开战',
    path: '/home',
    component: './Home',
    menuRender: false,
    hideInMenu: true,
  },
  {
    icon: 'PaperClipOutlined',
    name: '方块示例',
    path: '/cube',
    component: './Cube',
  },
  {
    icon: 'PaperClipOutlined',
    name: '贪吃蛇游戏(原生)',
    path: '/snake',
    component: './Snake',
  },
];

export default routes;
