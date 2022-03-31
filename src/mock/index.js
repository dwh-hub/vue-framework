import Mock from 'mockjs'

Mock.setup({
  timeout: 100
})

Mock.mock('/login', 'post', {
  code: 200,
  data: 'ffefd302-58d0-42c6-a9c5-470d2241fdb6'
})

export default Mock
