               //    FOR SPINNER

  var spinnerdiv1=document.querySelector('.spinnerdiv');
  window.addEventListener('load',()=>{
    spinnerdiv1.style.opacity='0'

    setTimeout(()=>{
      spinnerdiv1.remove()
    },1800);
  })



                    //   FOR EMAIL 

function sendMail(){

      if(document.getElementById("mailval").value==""){
        alert("Kindly please fill the Email Address!!")
        return false;
      }


      if(document.getElementById("msgval").value==""){
        alert("Please leave some message!!")
        return false;
      }
      
    let parms={
        mailval : document.getElementById("mailval").value,
        msgval : document.getElementById("msgval").value
    }

    emailjs.send("service_c0viyh2","template_ibjec8h",parms).then(alert("Your Email was sent successfully..!! ☺"));

}