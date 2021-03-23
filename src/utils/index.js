export function getHH_MM(){
  let date = new Date();
  let hour = date.getHours();
  let time = date.getMinutes()<10? "0"+date.getMinutes():date.getMinutes();
  return hour + ":" + time;
}