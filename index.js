const openModalButton = document.querySelector("#modal-add-pokemon");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

document.getElementById("botao-alterar-tema").addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");
  if (document.body.classList.contains("modo-escuro")) {
    document.getElementById("imgBtn").setAttribute("src", "./image/moon.png");
    modal.style.backgroundColor = "#000";
  } else {
    document.getElementById("imgBtn").setAttribute("src", "./image/sun.png");
    modal.style.backgroundColor = "#fff";
  }
});

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
