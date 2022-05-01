import Mock from 'mockjs'

Mock.setup({
  timeout: 100
})

Mock.mock('/login', 'post', {
  code: 200,
  data: 'ffefd302-58d0-42c6-a9c5-470d2241fdb6'
})

Mock.mock('/menu', 'post', {
  code: 200,
  data: [
    {
      name: '首页',
      path: '/',
      components: 'main/home',
      icon: '',
      children: []
    },
    {
      name: 'demo',
      path: '/demo',
      components: '/',
      icon: '',
      children: [
        {
          name: 'table示例',
          path: '/demo/table',
          components: 'example/table_demo',
          icon: '',
          children: []
        },
        {
          name: '表单示例',
          path: '/demo/form',
          components: 'example/form_demo',
          icon: '',
          children: []
        }
      ]
    }
  ]
})

export default Mock
