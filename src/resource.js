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
        icon: getImageUrl('ixzqy.png')
      },
      {
        title: '学科管理',
        name: 'subject-manage',
        icon: getImageUrl('ixkgl.png')
      },
      {
        title: '研究所',
        name: 'unit-YJS',
        icon: getImageUrl('iyjs.png')
      },
      {
        title: '基地',
        name: 'unit-JD',
        icon: getImageUrl('ijd.png')
      },
      {
        title: '建筑管理',
        name: 'building-manage',
        icon: getImageUrl('ihouse.png')
      },
      {
        title: '规划图',
        name: 'image-GHT',
        icon: getImageUrl('ipic.png')
      },
      {
        title: '项目文档',
        name: 'project-document',
        icon: getImageUrl('ipdf.png')
      },
      {
        title: '规划模型',
        name: 'model-GH',
        icon: getImageUrl('ighmodel.png')
      },
      {
        title: '项目信息',
        name: 'project-info',
        icon: getImageUrl('iproject.png')
      },
      {
        title: '用户管理',
        name: 'user-manage',
        icon: getImageUrl('iuser.png')
      }
    ]
  },
  {
    title: '数据查询',
    name: 'data-query',
    icon: getImageUrl('mqurery.png'),
    children: [
      {
        title: '地名查询',
        name: 'place-query',
        icon: getImageUrl('iplace.png')
      },
      {
        title: '单位查询',
        name: 'unit-query',
        icon: getImageUrl('iunit.png')
      },
      {
        title: '建筑查询',
        name: 'building-query',
        icon: getImageUrl('ibuilding.png')
      },
      {
        title: '项目查询',
        name: 'project-query',
        icon: getImageUrl('ibaseproject.png')
      }
    ]
  }
];


export {
  constants,
  menu
};
