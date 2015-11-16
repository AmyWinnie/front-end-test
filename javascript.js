// Validating Empty Field

function check_empty() {
	
	if (document.getElementById('name').value == "" || document.getElementById('email').value == "" ) {
	
		alert("Fill All Fields !");
	
	} else {

		alert("Form Submitted Successfully...");
	}
}

//Function To Display Popup
function div_show() {
	
	document.getElementById('light').style.display='block';
	document.getElementById('fade').style.display='block';

}

//Function to Hide Popup
function div_hide(){

	document.getElementById('light').style.display='none';
	document.getElementById('fade').style.display='none';

}


