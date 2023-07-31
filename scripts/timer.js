var birthday=new Date("june 9,2023 10:00:00").getTime()
var juggad=setInterval(() => {
var now=new Date().getTime();
let final=birthday-now;



    


 var day=Math.floor(final/(1000*60*60*24))
 console.log(day)
 var hours=Math.floor((final%(1000*60*60*24))/(1000*60*60))
 var minutes=Math.floor((final%(1000*60*60))/(1000*60))
 var sec=Math.floor((final%(1000*60))/(1000))
//  console.log('hours', hours)
//  console.log('minutes', minutes)
// console.log('sec', sec)
document.getElementById("timer").innerHTML=day+"d, "+hours+"hrs: "+minutes+"m: "+sec+"s"
}, 1000);