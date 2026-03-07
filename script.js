const logs = [
"FUCK BRAVE...",

]

let i = 0

setInterval(()=>{
document.getElementById("logs").innerHTML += "<br>"+logs[i]

i++

if(i>=logs.length){
i=0
}

},1000)
