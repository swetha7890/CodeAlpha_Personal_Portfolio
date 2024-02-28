document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['submitToGoogleSheet'];

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Display success message
        alert('Message sent successfully!');
    });
});