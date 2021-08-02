const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e) =>{
	e.preventDefault();//preventing form  from submition
	if(eInput.value == ""){ if email is empty
		eField.classList.add("shake","error");
	}
	if(pInput.value == ""){if password is empty
		pField.classList.add("shake","error");
	}

	}