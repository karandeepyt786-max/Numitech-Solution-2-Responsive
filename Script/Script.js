let Left=document.getElementsByClassName("main5CovererContainer2LeftArrowSlide")[0]
let Right=document.getElementsByClassName("main5CovererContainer2RightArrowSlide")[0]
let CountingBoxes=document.getElementsByClassName("main5CovererContainer2")[0]
let AllCount=CountingBoxes.querySelectorAll(".main5CovererContainer2Box1")
let OnlyBox1=document.getElementsByClassName("main5CovererContainer2Box1")[0]
let OnlyBox2=document.getElementsByClassName("main5CovererContainer2Box1")[1]
let OnlyBox3=document.getElementsByClassName("main5CovererContainer2Box1")[2]

let index=0

Right.addEventListener("click",()=>{
    console.log("Left click")
    console.log(index)

if(index<=AllCount.length-2 ){
   index++
    
    AllCount.forEach((ite)=>{
        ite.style.transform=`translateX(-${index*100}%)`
        ite.style.transition="500ms"
    })
    console.log(index)
}
else{
            index--
    console.log(index)
 
}

})




