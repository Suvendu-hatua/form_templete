const subBtn=document.getElementById("submit");
const cross=document.getElementById("cross");

//checkinh for name
const Name=document.getElementById("name");
Name.addEventListener("input",function () {
    const valid=document.getElementById("validName");
    const invalid=document.getElementById("InvalidName");
    const error=document.getElementById("nameError");
    if(Name.value.length>0)
    {
        if(Name.value.trim().length>0)
        {
            error.style.visibility="hidden"
           invalid.style.visibility="hidden"
            valid.style.visibility="visible";
            Name.classList.remove("InvalidBorder");
            Name.classList.add("validBorder");
        }
        else{
            valid.style.visibility="hidden"
           invalid.style.visibility="visible";
           message(error,"name_cann't_be_empty!");
           Name.classList.add("InvalidBorder");
        }   
    }
    else{
      invalid.style.visibility="visible";
      message(error,"name_cann't_be_Empty!");
      Name.classList.add("InvalidBorder");

    }
     
  })
  //checking for email
  const email=document.getElementById("email");
  email.addEventListener("input",function () {
    const valid=document.getElementById("validEmail");
    const invalid=document.getElementById("InvalidEmail");
    const error=document.getElementById("emailError");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
     {
        error.style.visibility="hidden";
        invalid.style.visibility="hidden"
        valid.style.visibility="visible";
        email.classList.remove("InvalidBorder")
        email.classList.add("validBorder");
     }
     else
     {
        valid.style.visibility="hidden"
        invalid.style.visibility="visible"
        message(error,"not_a_valid_EmailId!")
        email.classList.add("InvalidBorder");
     }

    });

    //checking for ph no
  const phno=document.getElementById("phno");
  phno.addEventListener("input",function () {
    const valid=document.getElementById("validNo");
    const invalid=document.getElementById("InvalidNo");
    const error=document.getElementById("phError");
        if(phno.value.length<10)
        {
          valid.style.visibility="hidden";
          invalid.style.visibility="visible";
          message(error,"please_enter_10_Digits!");
          phno.classList.add("InvalidBorder");
        }
        else if(phno.value.length>10)
        {
          valid.style.visibility="hidden";
          invalid.style.visibility="visible";
          message(error,"not_a_valid_Mobile_Number!");
          phno.classList.add("InvalidBorder");
        }
        else{
          error.style.visibility="hidden";
          invalid.style.visibility="hidden";
          valid.style.visibility="visible";
          phno.classList.remove("InvalidBorder");
          phno.classList.add("validBorder");
        }
    
    })

// console.log(Name);

function message(error,msg)
{
   error.textContent=msg;
   error.style.visibility="visible"
}
// submitting the data abd showing the pop up

 subBtn.addEventListener("click",function () {
   if(document.querySelectorAll(".validBorder").length===3)
   {
    document.querySelector(".main").classList.add("main_pressed");
    document.querySelector(".overlay").classList.add("pressed"); 
    document.body.style.backgroundColor="#CAF0F8";
   const a= document.querySelectorAll("i");
   a[0].style.visibility="hidden"
   a[1].style.visibility="hidden"
   }
   else
   {
     alert("please fill up all the fields before submitting!");
   }
      
   
 });
 cross.addEventListener("click",function () {
    document.querySelector(".main").classList.remove("main_pressed");
    document.querySelector(".overlay").classList.remove("pressed");
   });


  //  for reseting data
   const reset=document.getElementById("reset");
   reset.addEventListener("click",function () {
       Name.classList.add("InvalidBorder");
       document.getElementById("InvalidName").style.visibility="visible";
       email.classList.add("InvalidBorder");
       document.getElementById("InvalidEmail").style.visibility="visible";
       phno.classList.add("InvalidBorder");
       document.getElementById("InvalidNo").style.visibility="visible";
        // console.log(Name.classList)
        // console.log(email.classList)
        // console.log(phno.classList)
     })
