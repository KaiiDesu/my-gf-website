function redirectToHome1() {
    const button = document.getElementById("readyButton");
    const response = document.getElementById("response");

    response.textContent = "Enjoy bubby!!! ❤️";
    button.disabled = true;
    button.style.opacity = "0.7";

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    console.log("Redirecting to home1.html..."); // Debugging log

    setTimeout(function() {
        window.location.href = "on/onepage.html";
    }, 2000);
}

function redirectToHome2() {
    const button = document.getElementById("readyButton");
    const response = document.getElementById("response");

    response.textContent = "Enjoy bubby!!! ❤️";
    button.disabled = true;
    button.style.opacity = "0.7";

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    console.log("Redirecting to index.html..."); // Debugging log

    setTimeout(function() {
        window.location.href = "three/threepage.html";
    }, 2000);
}

function redirectToHome3() {
    const button = document.getElementById("readyButton");
    const response = document.getElementById("response");

    response.textContent = "Answer me carefully please ❤️";
    button.disabled = true;
    button.style.opacity = "0.7";

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    console.log("Redirecting to index.html..."); // Debugging log

    setTimeout(function() {
        window.location.href = "valentine.html";
    }, 2000);
}