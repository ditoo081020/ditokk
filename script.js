// Scroll ke bagian
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Komentar
function addComment() {
  const input = document.getElementById("commentInput");
  const list = document.getElementById("commentList");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}

// Ganti musik
const musicPlayer = document.getElementById("bgMusic");
const musicSelect = document.getElementById("musicSelect");

musicSelect.addEventListener("change", function () {
  musicPlayer.src = this.value;
  musicPlayer.play();
});

// Set default music saat halaman load
window.onload = () => {
  musicPlayer.src = musicSelect.value;
  musicPlayer.play();
};
