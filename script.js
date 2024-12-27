const button = document.getElementById("btn_send");
console.log(button);

button.addEventListener("click", saludo)

function saludo(){
    fullName=getName()
    console.log("Gracias "+fullName+" por enviar el formulario");
    
    alert("Gracias "+fullName+" por enviar el formulario")
}

function getName(){
    inputName=document.getElementById("fullNameS")
    fullName=inputName.value
    saveName(fullName)
    return fullName
}

function saveName(fullName){
    localStorage.setItem("username",fullName)
}