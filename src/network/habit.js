import {request} from "@/network/request";

export function getOneDayHabit(date,phone){
  return request({
    method: 'post',
    url: 'getOneDayHabit',
    data:{
      date,
      phone
    }
  })
}

export function addHabit(date,phone,task,timeIndex){
  return request({
    method: 'post',
    url: 'addHabit',
    data:{
      date,
      phone,
      task,
      timeIndex
    }
  })
}

export function removeHabit(date,phone,timeIndex,taskIndex){
  return request({
    method: 'post',
    url: 'removeHabit',
    data:{
      date,
      phone,
      taskIndex,
      timeIndex
    }
  })
}