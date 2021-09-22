document.getElementById("abrir_boton").addEventListener(
    "click", function(){
        document.getElementsByClassName("fondo_invisible")[0].style.display="block"
        return false
})
document.getElementsByClassName("v_modal_close")[0].addEventListener("click",function(){
    document.getElementsByClassName("fondo_invisible")[0].style.display="none"
})