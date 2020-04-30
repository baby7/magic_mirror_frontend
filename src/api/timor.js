/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

import request from '@/router/axios'

export function getTimor(year) {
  return request({
    url: 'http://timor.tech/api/holiday/year/' + year,
    method: 'get',
    params: null
  })
}


export function getList(query) {
  return request({
    url: 'http://62.234.97.198:8005/admin/systimor/page?current=' + query.current + '&size=' + query.size,
    method: 'get',
    params: null
  })
}
