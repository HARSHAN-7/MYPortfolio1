document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your user ID
    emailjs.init("tfg0cHkRvZlWVm664Vy8v");

    document.getElementById("sendBtn").addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const project = document.getElementById("project").value;
        const budget = document.getElementById("budget").value;
        const message = document.getElementById("message").value;

        if (validateEmail(email)) {
            sendEmail(name, email, project, budget, message);
        } else {
            alert("harshan0077888@gmail.com");
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function sendEmail(name, email, project, budget, message) {
        const templateParams = {
            name: name,
            email: email,
            project: project,
            budget: budget,
            message: message,
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                showPopup();
            }, function(error) {
                console.log("FAILED...", error);
            });
    }

    function showPopup() {
        const popup = document.getElementById("successPopup");
        const closeBtn = document.getElementsByClassName("close")[0];

        popup.style.display = "block";

        closeBtn.onclick = function() {
            popup.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == popup) {
                popup.style.display = "none";
            }
        }
    }
});
