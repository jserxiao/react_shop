export default   time=>{

  let sec=parseInt((time/1000)%60);
  let min=parseInt((time/1000/60)%60);
  let h=parseInt((time/1000/60/60)%24);
  let day=parseInt((time/1000/60/60/24)%30);
  let mon=parseInt((time/1000/60/60/24/30)%12);
  let y=parseInt((time/1000/60/60/24/30)/12);
  // return `${y+1969}-${mon+5}-${day-20} ${h+11}.${min}.${sec}`
  return `${y+1969}-${mon+5}-${day-20}`
}