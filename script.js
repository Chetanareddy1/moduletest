let icon=document.querySelectorAll(".icon");
let computer=document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let pc=document.querySelector(".pc");
let modaldialog=document.querySelector(".modaldialog");
let win=document.querySelector(".win");
let modaldialog1=document.querySelector(".modaldialog1");
let win1=document.querySelector(".win1");
let modaldialog2=document.querySelector(".modaldialog2");
let win2=document.querySelector(".win2");
let play=document.querySelector(".play");
let play1=document.querySelector(".play1");
let play2=document.querySelector(".play2");
let ruleBtn=document.querySelector(".btn-rule");
let rulemodal=document.querySelector(".rule-dialog");
let ruleimg=document.querySelector(".rule-img");
console.log("computer");
let score=JSON.parse(localStorage.getItem("sc"));
let scoreElem=document.getElementById("score");
if(score) {
    scoreElem.innerText=score;
}
let score1=JSON.parse(localStorage.getItem("sc1"));
let scoreEleme=document.getElementById("score1");
if(score1) {
    scoreEleme.innerText=score1;
}
let count=0;
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");
icon.forEach((element,index) => {
    element.addEventListener("click", ()=>{
        user.style.opacity="1";
        triangle.style.display="none";
        icon.forEach(item => {
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show");
        setTimeout(() => {
            pc.style.opacity="1";
            setTimeout(() => {
            computer[random].style.display="block";
            computer[random].classList.add("right");   
            }, 1000);
        },500);
        setTimeout(() => {
            if(random==index){
                modaldialog2.style.display="grid";
                win2.innerText="TIE UP";
            }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1 ) {
                modaldialog.style.display="grid";
                win.innerText="YOU WIN" <br>"AGAINST PC";
                count=score;
                count++;
                scoreElem.innerText=count;
                localStorage.setItem("sc", JSON.stringify(count));
            }else{
                modaldialog1.style.display="grid";
                win1.innerText="PC WIN" <br>"AGAINST YOU";
                count=score1;
                count++;
                scoreEleme.innerText=count;
                localStorage.setItem("sc1", JSON.stringify(count));
            }
        }, 1500);
    })
});
play.addEventListener("click", () =>{
    window.location.reload();
})
play1.addEventListener("click", () =>{
    window.location.reload();
})
play2.addEventListener("click", () =>{
    window.location.reload();
})
ruleBtn.addEventListener("click", () =>{
    rulemodal.style.display="flex";
    setTimeout(() => {
        ruleimg.style.transform="translateY(0)"
    }, 1000)
});
let close=document.querySelector(".close");
close.addEventListener("click", () => {
    ruleimg.style.transform="translateY(-200)";
    setTimeout(() => {
        rulemodal.style.display="none"; 
    }, 500)
})
function keepScore(point) {
    score += point;
    scoreNumber.innerText = score;
}
