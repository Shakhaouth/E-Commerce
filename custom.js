function updateDateTime() {
    const now = new Date();
    document.getElementById("datetime").innerText = now.toLocaleString();
}

updateDateTime(); // run once immediately
setInterval(updateDateTime, 1000); // update every second