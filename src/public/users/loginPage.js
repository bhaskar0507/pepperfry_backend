
function login(){


  fetch(`http://localhost:2345/users`)
    .then(function(res){
        return res.json();           
    }).then(function (res){ 
        console.log(res);
       
    
    // const res = JSON.parse(localStorage.getItem('signup'));
    for(var i = 0;i<res.length;i++){
        let e = res[i].email;
        let p = res[i].password;
   
        if(e==myform.mail.value && p == myform.psw.value){
           alert("LogIn Successful");
          window.location.href="/users/home"
          return;
        }
       }
   
     return alert("Invalid Credential");
    })
   }
   
        
