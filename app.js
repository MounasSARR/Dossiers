let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateInput(){
	//check username is empty
	if(userName.value.trim()===""){
		onError(userName,"champs obligatoire");
    }else{
    	onSuccess(userName);
}
if(email.value.trim()===""){
onError(email,"champs obligatoire");
 }else{
if(!=isValidEmail(email.value.trim())){
 		onError(email,"email incorrect");
 	}else{
 		onSuccess(email);
 	}
	
}
//password
 if(pwd.value.trim()===""){
		onError(pwd,"champs obligatoire");
    }else{
    	onSuccess(pwd);
    }
    if(conPwd.value.trim()===""){
		onError(conPwd,"champs obligatoire");
    }else{
    	onSuccess(conPwd);
    }


 }
 
  
document.querySelector("button")
.addEventListener("click",(event)=>{
	event.preventDefault();
 validateInput();
});

function onSuccess(input){
	   let parent=input.parentElement;
		let messageEle=parent.querySelector("small");
		messageEle.style.visibility="hidden";
		parent.classList.remove("error");
		parent.classList.add("success");
}
function onError(input,message){
	    let parent=input.parentElement;
		let messageEle=parent.querySelector("small");
		messageEle.style.visibility="visible";
		messageEle.innerText=message;
		parent.classList.add("error");
		parent.classList.remove("success");
	}
	function isValidEmail(email){
         return /^(([^<>()[/]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0,9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	}