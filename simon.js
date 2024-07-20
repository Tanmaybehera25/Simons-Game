let gameSeq = [];
let userSeq = [];
let btns= ["red", "green", "orange", "blue"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
var a=0
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
  }
  if(a==0){
    levelup();
  }
  a=a+1;
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}
function levelup() {
//   let btn = ["red", "green", "orange", "blue"];
  userSeq=[];
  level++;
  h2.innerText = `level ${level}`;
  let randIndx = Math.floor(Math.random() * 3);
  let randcolor = btns[randIndx];
  let randbtn = document.querySelector(`.${randcolor}`);
  gameSeq.push(randcolor)
  console.log(gameSeq);
  gameflash(randbtn);
}

  function checkAns(indx){
    // console.log(`current level : ${level}`)
    // let indx=level-1;
    if(userSeq[indx]===gameSeq[indx]){
       if(userSeq.length==gameSeq.length){
      setTimeout(levelup,1000);
       }
      // console.log("same value")
    }else{
      h2.innerHTML=`Game over !! your score is <b>${level}<b> <br>press any key to start again`
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
      },150)
      reset();
    }
  }

function btnPress() {
  let btn=this;
  userflash(btn)

  usercolor=btn.getAttribute("id");
  // console.log(usercolor)
  userSeq.push(usercolor)
  checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}
function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}