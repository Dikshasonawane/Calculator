let exp="";

let ans = document.querySelector(".text");

function Click(n){
    exp+= n;
    ans.value=exp;

}
function Result(){0
    
    ans.value=eval(exp);
}
function Clear(){
    ans.value="";
    exp="";
}
function Sqr(){
    ans.value=Math.sqrt(Number(exp));
    
}