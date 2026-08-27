console.log("js working");

// Registration page
function registerUser() {
	let name = document.getElementById("name").value;
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	localStorage.setItem("username", username);
	localStorage.setItem("password", password);

	alert("Account Created");
	window.location.href = "login.html";
}
// Login page
function loginUser(event) {
	event.preventDefault();

	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	let savedUser = localStorage.getItem("username");
	let savedPass = localStorage.getItem("password");

	if (username === savedUser && password === savedPass) {
		alert("Login successful!");
		window.location.href = "Create/journal.html";
	} else {
		alert("incorrect email or password");
	}
}
// Journal
function saveEntry(event) {
	event.preventDefault();

	let title = document.getElementById("main-title").value;
	let category = document.getElementById("journal-category").value;
	let entry = document.getElementById("journal-entry").value;

	let journals = JSON.parse(localStorage.getItem("journals")) || [];

	journals.push({
		title: title,
		category: category,
		entry: entry,
	});

	localStorage.setItem("journals", JSON.stringify(journals));
	alert("Entry Saved");

	document.querySelector(".journal-form").reset();
	displayEntries();
}

function logoutUser() { 
	localStorage.removeItem("username");
	localStorage.removeItem("password");
	alert("Logout successful!");
	window.location.href = "/index.html";
}

// Scrapbook page
function previewImage(event, id) {
	let image = document.getElementById(id);

	image.src = URL.createObjectURL(event.target.files[0]);
}
