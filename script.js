function getFormvalue(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let firstName = document.querySelector('[name="fname"]').value.trim();
    let secondName = document.querySelector('[name="lname"]').value.trim();

    // Fix: Use 'secondName' instead of 'lastName'
    if (!firstName || !secondName) {
        alert("Please input the required fields");
        return;
    }

    alert(`${firstName} ${secondName}`);
}

// Attach event listener to the form
document.querySelector("#form1").addEventListener("submit", getFormvalue);

