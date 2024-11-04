// progressBar.js

document.addEventListener("scroll", function () {
    const progressBar = document.getElementById("progress-bar");
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progress + "%";
});
