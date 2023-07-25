let el_box=document.querySelector(".allbox");
let el_res=document.querySelector(".result");
let each_box=document.getElementsByClassName("box")
let in_box=document.getElementsByClassName("inbox")
let new_inbox=document.querySelectorAll(".inbox")
let btn_res=document.querySelector(".restart")
// let winLine=document.querySelector(".line");
let turn ="X";
let draw=[]
let gameOver=false;


const change=()=>
{
    if(turn=="X")
    turn="O";
    else
    turn="X";

    return turn;
}
Array.from(each_box).forEach((ele)=>
{
    ele.addEventListener("click",()=>
    {
        let in_box=ele.querySelector(".inbox")
        if(in_box.innerHTML==="" && draw.length<9)
        {
            draw.push(turn);
        in_box.innerHTML=turn;
        turn=change();
        won();
        if(!gameOver)
        {
            el_res.innerHTML=turn+"'s TURN";
        }
    }
    if(draw.length==9 && !gameOver)
    {
         el_res.innerHTML="No Result!"
    }
    })
})

const won=()=>
{
   
    let wonar=[
               [0,1,2,10,45,0],
               [3,4,5,20,45,0],
               [6,7,8,30,45,0],
               [0,3,6,20,38,90],
               [1,4,7,20,45,90],
               [2,5,8,20,54,90],
               [0,4,8,20,45,45],
               [2,4,6,20,45,135]
            ]
    wonar.forEach(e=>
        {
            if((in_box[e[0]].innerHTML===in_box[e[1]].innerHTML) && (in_box[e[1]].innerHTML===in_box[e[2]].innerHTML)
             && (in_box[e[0]].innerHTML !== "" ))
            {
                el_res.innerHTML= in_box[e[0]].innerHTML+" won The game";
                gameOver=true;
                in_box[e[0]].classList.add("winner");
                in_box[e[1]].classList.add("winner");
                in_box[e[2]].classList.add("winner");
                // winLine.style.transform=`translate(${e[4]}vw, ${e[3]}vw) rotate(${e[5]}deg)`;
                //winLine.style.width="34vw";
                el_box.classList.add("disabled");
            }
            
        });
}

btn_res.addEventListener("click",()=>
{
    Array.from(in_box).forEach(ele=>
        {
            ele.innerHTML=""
            if(ele.classList.contains("winner"))
            {
                ele.classList.remove("winner");
            }
            el_box.classList.remove("disabled")
            //  winLine.style.width = "0vw";
             draw=[]
        })
        turn="X"
         el_res.innerHTML="X's TURN";
        gameOver=false;  
})

