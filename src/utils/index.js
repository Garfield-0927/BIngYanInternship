// 获取时间 16：21 诸如此类
export function getHH_MM(){
  let date = new Date();
  let hour = date.getHours();
  let time = date.getMinutes()<10? "0"+date.getMinutes():date.getMinutes();
  return hour + ":" + time;
}

// 获取时间 2021-03-27 诸如此类
export function getYYYY_MM_DD(){
  let date = new Date();
  let year = date.getFullYear();
  let month = (date.getMonth()+1).toString();
  month = month.length === 1 ? "0"+month:month
  let day = date.getDate();
  return year+"-"+ month + "-" + day;
}

// 节流，暂时没用到。。。
export function throttle(fn, delay){
  let timer = null;
  return function(){
    let args = Array.prototype.slice.call(arguments)
    if (!timer){
      timer = setTimeout(()=>{
        fn.apply(this, args)
      }, delay)
    }
  }
}

