module.exports = {
  navigation: [{
    route: '',
    permalink: '/',
    text: 'Home',
    headerSettings: {
      backgroundColor: '#00BCD4',
      backgroundImage: '/2015/images/backgrounds/home.png',
      fontColor: '#FFFFFF',
      tabBarColor: '#FFFFFF',
      video: {
        title: 'GDG DevFest Ukraine 2015',
        youtubeId: 'DfMnJAzOFng',
        text: 'See how it was in 2015'
      },
      hideLogo: true,
      minHeight: '360px'
    }
  }, {
    route: 'blog',
    permalink: '/blog/',
    text: 'Blog',
    headerSettings: {
      backgroundColor: '#03A9F4',
      fontColor: '#FFFFFF',
      tabBarColor: '#FFFFFF'
    }
  }, {
    route: 'schedule',
    permalink: '/schedule/',
    text: 'Schedule',
    headerSettings: {
      backgroundColor: '#607D8B',
      fontColor: '#FFFFFF',
      tabBarColor: '#FFFFFF'
    }
  }, {
    route: 'speakers',
    permalink: '/speakers/',
    text: 'Speakers',
    headerSettings: {
      backgroundColor: '#673AB7',
      fontColor: '#FFFFFF',
      tabBarColor: '#FFFFFF'
    }
  }]
};
