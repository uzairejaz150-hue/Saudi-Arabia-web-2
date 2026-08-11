console.log("Saudi Arabia Website Loaded");
console.log("Saudi Arabia Tourism Website Loaded");


/* CONTACT FORM */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting Saudi Arabia Tourism!"
        );

        contactForm.reset();

    });

}
