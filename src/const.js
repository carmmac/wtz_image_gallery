const ACCESS_KEY = 'cJpFuZeZgYr52cfiuHMIN4raxKQkI9MLy1vvdPfzUsU';

const BreakPoint = {
  MOBILE: 320,
  MOBILE_LANDSCAPE: 480,
  TABLET: 768,
  DESKTOP: 1000,
};

const AppRoutes = {
  HOME: {
    path: '/',
    name: 'home',
  },
  USER_PAGE: {
    path: '/users/:username',
    name: 'userPage',
  },
};

export { ACCESS_KEY, BreakPoint, AppRoutes };
