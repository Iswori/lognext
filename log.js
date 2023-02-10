let error=[];
function Lognext() {
    let email=document.getElementById('email').value;
    let emailerror=document.getElementById('emailerror');
    let pattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    console.log(email.match(pattern))
   if(email.length===0){
error.push('error')
emailerror.innerHTML='please enter email address'
   }else if (email.match(pattern)===null) {
      error.push('error')
    emailerror.innerHTML="enter your valid email";
   }

   let password=document.getElementById('password').value;
   let passworderror=document.getElementById('passworderror');

   if(password.length===0) {
      error.push('error')
    passworderror.innerHTML="please enter your password"
   } else if (password.length>8 || password.length<6) {
      error.push('error')
    passworderror.innerHTML="password must be more than 6 words"
   } 
//    let Msg=document.getElementById('main');
//    if(error.length===0){
// Msg.style.display='none'
//    }
//    {
//   let Msg=document.getElementById('msg');
//   if (error.length===0) {
//    Msg.style.transform="translateY(0%)"
//   }
// }
let Msg=document.getElementById('msg');
if (error.length===0) {
   Msg.style.transform="scale(1.04)"
}

let progress=document.getElementById('progress');
if (error.length===0) {
   // progress.style.height="20px"
   progress.style.width="300px"
}
}

function cancle() {
   let Msg=document.getElementById('msg');
   if ( Msg.style.transform="scale(1.04)") {
      Msg.style.transform="scale(0)"
      Msg.style.transition="0s"
   }
}