


const menu = [
    {
      path: '/',
      name: '模块一',
      level: 0,
      icon: 'ios-analytics',
      fixed: false,
      children: [
        {
          level: 1,
          path: '/activeList',
          children: [],
          fixed: false,
          name: '目录二'
        },
        {
          level: 1,
          path: '/activeAdd',
          children: [],
          fixed: false,
          name: '目录一'
        },
        
      ]
    },
    {
      path: '/record',
      name: '模块二',
      icon: 'ios-reverse-camera',
      level: 1,
      fixed: false,
      children:[]
      
    },
  
  ]
  
  export default menu
  