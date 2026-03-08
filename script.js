function registerUser(){
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    alert("Account Created");
    window.location.href = "login.html";
}

function loginUser(event){
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(username === savedUser && password === savedPass){

    alert("Login successful!");
    window.location.href = "Create/journal.html";
    }
    else{
    alert("incorrect email or password");
    }
    }

function saveEntry(){
    event.preventDefault();

    let title = document.getElementById("main-title").value;
    let category = document.getElementById("journal-category").value;
    let entry = document.getElementById("journal-entry").value;

    let journals = JSON.parse(localStorage.getItem("journals")) || [];

    journals.push({
        title:title,
        category:category,
        entry:entry
        
    });

    localStorage.setItem("journals", JSON.stringify(journals));
    displayEntries();

    document.querySelector("journal-form").reset();

}
