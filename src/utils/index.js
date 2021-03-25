export function getHH_MM(){
  let date = new Date();
  let hour = date.getHours();
  let time = date.getMinutes()<10? "0"+date.getMinutes():date.getMinutes();
  return hour + ":" + time;
}

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