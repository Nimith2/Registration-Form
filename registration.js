document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const registrationData = document.getElementById("registrationData");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

       
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const registrationInfo = document.createElement("div");
        registrationInfo.classList.add("registration-info");

        registrationInfo.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
           
        `;

     
        const separator = document.createElement("hr");

        
        registrationData.appendChild(registrationInfo);
        registrationData.appendChild(separator);

        
        form.reset();
    });
});