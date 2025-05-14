document.addEventListener("DOMContentLoaded", function () {
    const notificationBox = document.getElementById("notification-box");

    // Example function to update notifications dynamically
    function addNotification(message) {
        const p = document.createElement("p");
        p.textContent = message;
        notificationBox.appendChild(p);
    }

    // Simulate a new notification after 5 seconds
    setTimeout(() => {
        notificationBox.innerHTML = ""; // clear old notifications
        addNotification("New: Registrations for Dance Showdown are now open!");
    }, 5000);
});
