function showImage(imageSrc) {
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlayImage");
    overlayImage.src = imageSrc;
    overlay.style.display = "flex";
}

function closeImage() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Alterna o texto do botão com base no modo atual
    const toggleButton = document.getElementById("darkModeToggle");
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Alternar Light Mode";
    } else {
        toggleButton.textContent = "Alternar Dark Mode";
    }
}