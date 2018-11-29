const getImageUrl = key => `./image/top/menu/${key}`;

const constants = {
  CLIENT_NORMAL_MSG: 'CLIENT_NORMAL_MSG',
  CRAWLER_NORMAL_MSG: 'CRAWLER_NORMAL_MSG'
};

const menu = [
  {
    title: '数据管理',
    name: 'data-manager',
    icon: getImageUrl('mmanager.png'),
    children: [
      {
        title: '行政区域',
        name: 'area-reigon',
        icon: getImageUrl('mqurery.png')
      }
    ]
  },
  {
    title: '数据查询',
    name: 'data-query',
    icon: getImageUrl('mqurery.png'),
    children: [
      {
        title: '行政区域',
        name: 'area-reigon',
        icon: getImageUrl('mqurery.png')
      }
    ]
  }
];


export {
  constants,
  menu
};
