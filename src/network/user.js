import {request} from "@/network/request";

export function userLogin(phone, password){
  return request({
    method: 'post',
    url:'login',
    data:{
      phone,
      password
    }
  })
}

export function userRegister(phone, password){
  return request({
    method: 'post',
    url:'register',
    data:{
      phone,
      password
    }
  })
}

export function checkLogin(){
  return request({
    url:"checkLogin"
  })
}