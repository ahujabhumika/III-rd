let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector(".new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");


let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("btn was clicked");
         if(turnO===true){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
        }else{
            box.innerText="x";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =() =>{
    for(let box of boxes){
        box.enabled=false;
        box.innerText="";
    }
}
const showWinner=(winner) =>{
    msg.innerText=`Congratulation Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = ()=>{
    for (let  val of winPatterns) {
           let a= boxes[val[0]].innerText;
           let b= boxes[val[1]].innerText;
             let c=boxes[val[2]].innerText;
             if(a!="" && b!="" && c!=""){
                if(a===b && b===c){
                    console.log("winner",a);

                    showWinner(a);
                }     }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);





