const rakh = document.getElementById("value")
const naya = document.getElementById("respiratory")
const initial = 0;
let value = 0;

naya.addEventListener("click",function(){
    rakh.innerText = ""
    return rakh.append(initial);
})

const ghata = document.getElementById("decrease")
ghata.addEventListener("click",function(){
     value = value - 1 ;
     rakh.innerText = ""
    return rakh.append(value)
})
const bhada = document.getElementById("increase")
bhada.addEventListener("click",function(){
    value = value + 1;
    rakh.innerText = ""
    return rakh.append(value)
})