export default {
  pages: [
    'pages/index/index',
    'pages/home/home',
    'pages/car/car',
    'pages/category/category',
    'pages/personalCenter/personalCenter'
  ],
  tabBar: {
    list: [{
      'iconPath': '../src/static/home.png',
      'selectedIconPath': '../src/static/home_on.png',
      pagePath: 'pages/home/home',
      text: '首页',
      iconType: 'home'
    }, {
      'iconPath': '../src/static/fenlei.png',
      'selectedIconPath': '../src/static/fenlei_on.png',
      pagePath: 'pages/category/category',
      text: '分类'
    }, {
      'iconPath': '../src/static/car.png',
      'selectedIconPath': '../src/static/car_on.png',
      pagePath: 'pages/car/car',
      text: '购物车'
    }, {
      'iconPath': '../src/static/user.png',
      'selectedIconPath': '../src/static/user_on.png',
      pagePath: 'pages/personalCenter/personalCenter',
      text: '个人中心'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor':'#ececec',
    'borderStyle': 'white'
  },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
