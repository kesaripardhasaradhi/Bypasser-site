const logs = [
"Connecting to server...",
"Bypassing firewall...",
"Access granted...",
"Loading modules...",
"System ready."
]

let i = 0

setInterval(()=>{
document.getElementById("logs").innerHTML += "<br>"+logs[i]

i++

if(i>=logs.length){
i=0
}

},2000)
