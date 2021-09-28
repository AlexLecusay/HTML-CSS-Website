const body= document.getElementById("body");
const error= document.getElementById("error");
const btn= document.getElementById("btn");

let inGame= false;
let time;

btn.addEventListener("click", function(){
    if(!block){
    body.style= "background-color: green";

    let deltaTime= Math.random()* 5000+ 2000;
    time= deltaTime+ Date.now();

    let text= " ";
    for(let i=0;i< deltaTime+ 500; i+=500){
        setTimeout(()=>{
            if(inGame){
                error.innerHTML= "You took "+ text;
            text= ".";
            if(text=== "..."){
                text= ".";
            }
            }else{
                cancel= true;
            }
        },i);
    }

setTimeout(()=>{
        body.style= "background-color: red";
    }, deltaTime);

    inGame= true;
    }else {

        if(Date.now()< time){
            error.innerHTML="You pressed too early!";
            body.style="background-color: red";
            inGame= false;
        }else{
            let reflexTime= Date.now()- time;
            error.innerHTML= "You took "+ (reflexTime/1000).toFixed (4) + "seconds!";
        }
    }

});
