const logs = [
"FUCK BRAVE...",

]

let i = 1

setInterval(()=>{
document.getElementById("logs").innerHTML += "<br>"+logs[i]

i++

if(i>=logs.length){
i=0
}

},10000)
