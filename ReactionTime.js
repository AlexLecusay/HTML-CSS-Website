import './ReactionTime.css';


    const body= document.getElementById("body");
    const error= document.getElementById("error");
    const btn= document.getElementById("btn");
    
    let inGame= false;
    let time;

    btn.addEventListener("click", function(){
        if(!inGame){
            body.style = "background-color; green";

            let deltaTime= Math.random()* 5000+ 2000;
            time= deltaTime+ Date.now();

            let text= ".";
            for(let i= 0; i< deltaTime- 500; i+= 500){
                setTimeout(()=>{
                    error.innerHTML= "You took "+ text;
                    text= ".";
                    if(text=== "...."){
                        text= ".";
                    }

                });
            }
            
            sellTimeout(()=>{
                body.style= "background-color: red";
            },deltaTime);
        
        inGame= true;
    } else {
        if (Date.now()< time) {
            error.innerHTML="You cheated! Play again!";
            body.style= "background-color: red"
            inGame= false;
        } else {
            let reflexTime= Date.now()- time;
            error.innerHTML= "You took " + reflexTime/ 1000 + " seconds!"
            inGame= false;

        }
    }
function ReactionTime(){
    return ( 
    <>
    <section id="body">
    <h2 id="title">What's your reaction time ?</h2>
    <h2 id="error">Click the button to begin</h2>
    <button id="btn">Start</button>
</section>
</>
    );
}
export default ReactionTime;