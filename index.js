let el_box=document.querySelector(".allbox");
let el_res=document.querySelector(".result");
let each_box=document.getElementsByClassName("box")
let in_box=document.getElementsByClassName("inbox")
let btn_res=document.querySelector(".restart")
let turn ="X";
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
        if(in_box.innerHTML==="")
        {
        in_box.innerHTML=turn
        turn=change()
        won();
        if(!gameOver)
        {
            el_res.innerHTML=turn+"'s TURN";
        }
    }
    })
})



const won=()=>
{
   
    let wonar=[
               [0,1,2],
               [3,4,5],
               [6,7,8],
               [0,3,6],
               [1,4,7],
               [2,5,8],
               [0,4,8],
               [2,4,6]
            ]
    wonar.forEach(e=>
        {
            if((in_box[e[0]].innerHTML===in_box[e[1]].innerHTML) && (in_box[e[1]].innerHTML===in_box[e[2]].innerHTML)
             && (in_box[e[0]].innerHTML !== "" ))
            {
                el_res.innerHTML= in_box[e[0]].innerHTML+" won The game";
                gameOver=true;
            }
            
        });
}

btn_res.addEventListener("click",()=>
{
    
    Array.from(in_box).forEach(ele=>
        {
            ele.innerHTML=""
        })
         el_res.innerHTML="X's TURN";
        gameOver=false;
})

