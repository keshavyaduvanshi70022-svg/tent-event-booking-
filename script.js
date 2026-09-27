const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const eventType = document.getElementById("eventType").value;

    message.textContent = "Thank you " + name + "! Your " + eventType + " booking has been submitted successfully.";

    bookingForm.reset();
});
