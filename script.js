// get form and inputs
const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const city = document.getElementById("city");

// get preview elements
const detailName = document.getElementById("DetialName");
const detailEmail = document.getElementById("DetialEmail");
const detailCity = document.getElementById("DetialCity");
const detailPassword = document.getElementById("DetialPassword");

// handle form submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    // update text
  detailName.innerHTML = "<strong>Name:</strong> " + username.value;
detailEmail.innerHTML = "<strong>Email:</strong> " + email.value;
detailCity.innerHTML = "<strong>City:</strong> " + city.value;
detailPassword.innerHTML = "<strong> ShowPassword:</strong> " + password.value;

   
    form.reset();
});
  function showmsg() {
      let username = document.getElementById("username").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();

      if (username === "" || email === "" || password === "") {
        alert("All fields are mandatory");
        return;
      }

      alert("Registration successful!");
    }
    


