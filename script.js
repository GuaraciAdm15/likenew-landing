function expandImage(imgElement) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function closeModal(event) {
  // Fechar modal se clicar fora da imagem ou no botão X
  if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
    document.getElementById("modal").style.display = "none";
  }
}
let currentImageIndex = 0;
let images = [];

window.addEventListener('DOMContentLoaded', () => {
  images = Array.from(document.querySelectorAll('.gallery-grid img'));
});

function expandImage(imgElement) {
  images = Array.from(document.querySelectorAll('.gallery-grid img'));
  currentImageIndex = images.indexOf(imgElement);

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function navigate(direction) {
  currentImageIndex += direction;

  // loop back if reaching end or start
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  const modalImg = document.getElementById("modal-img");
  modalImg.src = images[currentImageIndex].src;
}

function closeModal(event) {
  if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
    document.getElementById("modal").style.display = "none";
  }
}
function toggleMenu() {
  const nav = document.querySelector("header nav");
  nav.classList.toggle("active");
}
