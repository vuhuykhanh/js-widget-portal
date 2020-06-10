var a1 = document.getElementById("1");
var all = document.createElement("div");
all.setAttribute("name","landorus");
all.addEventListener("click",function(){
    alert("Hello");
})

a1.appendChild(all);