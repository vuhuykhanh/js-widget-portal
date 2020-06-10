var a1 = document.getElementById("1");
var all = document.createElement("div");
all.setAttribute("name","landorus");
all.innerHTML = "Alo";
all.addEventListener("click",function(){
    alert("Hello");
    all.innerHTML ="Saparangkangte";
})

a1.appendChild(all);