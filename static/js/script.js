function allFieldsFilled() {

	var nameField = document.getElementById("name").value;
	var subjectField = document.getElementById("subject").value;
	var messageField = document.getElementById("message").value;

	var response = "";

	if (nameField == "") {

		response = "Name field must be completed, ";

	}

	if (subjectField == "") {

		response += "Subject field must be completed, ";

	}

	if (messageField == "") {

		response += "Message field must be completed";

	}

	document.getElementById("response").innerHTML = response;

}

var form = document.getElementById("contact-form");
form.addEventListener('submit', allFieldsFilled);