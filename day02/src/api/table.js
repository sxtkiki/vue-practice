import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function queryList(params) {
  return request({
    url: '/admin/data/product_list.php',
    method: 'get',
    params
  })
}
