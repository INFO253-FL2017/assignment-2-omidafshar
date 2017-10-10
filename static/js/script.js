function allFieldsFilled() {

	var nameField = document.getElementById("name").value;
	var subjectField = document.getElementById("subject").value;
	var messageField = document.getElementById("message").value;

	if (document.body.children[0].nodeName == "HEADER") {

		var messageDiv = document.createElement("div");
		messageDiv.id = "message-div";
		document.body.insertBefore(messageDiv,document.body.firstChild);

	}

	var messageNode = document.getElementById("message-div");

	while (messageNode.hasChildNodes()) {
    	messageNode.removeChild(messageNode.lastChild);
	}

	if (nameField == "") {

		var p = document.createElement("p");
		p.innerHTML = "Name field must be completed";
		messageNode.appendChild(p);

	}

	if (subjectField == "") {

		var q = document.createElement("p");
		q.innerHTML = "Subject field must be completed";
		messageNode.appendChild(q);

	}

	if (messageField == "") {

		var r = document.createElement("p");
		r.innerHTML = "Message field must be completed";
		messageNode.appendChild(r);

	}

	if (document.getElementById("message-div").innerHTML == "") {

		var s = document.createElement("p");
		s.innerHTML = "Your message has been sent";
		messageNode.appendChild(s);

	}

	event.preventDefault();

}

var form = document.getElementById("contact-form");
form.addEventListener('submit', allFieldsFilled);