function toggleVideo() {
const video = document.getElementById("wildlifeVideo");
const btn = document.getElementById("toggleBtn");

if (video.style.display === "none") {
    video.style.display = "block";
    btn.textContent = "Hide Video";
} else {
    video.style.display = "none";
    btn.textContent = "Play Video";
}
}