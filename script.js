function clickbt(val){
    console.log(val)
    document.getElementById("screen").value+=val
}
function clearscreen(){
    var clear=" "
    document.getElementById("screen").value=clear
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}