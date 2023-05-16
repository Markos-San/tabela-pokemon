const openModalButton = document.querySelector("#modal-add-pokemon");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const submit = document.getElementById("submit-btn");

document.getElementById("botao-alterar-tema").addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");
  if (document.body.classList.contains("modo-escuro")) {
    document.getElementById("imgBtn").setAttribute("src", "./image/moon.png");
    modal.style.backgroundColor = "#212121";
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

submit.addEventListener("click", () => addCardPokemon());

const addCardPokemon = () => {
  const ul = document.getElementById("listagem-pokemon");

  const newLi = document.createElement("li");
  newLi.className = "cartao-pokemon modo-claro";

  const newDiv = document.createElement("div");
  newDiv.className = "informacoes";
  newDiv.innerHTML = "<span>pokemon</span> <span>numero</span>";

  const newImg = document.createElement("img");
  newImg.className = "gif";
  newImg.alt = "foto do pokemon";
  newImg.src = "";

  const newUl = document.createElement("ul");
  newUl.className = "tipos";

  const tipoLi = document.createElement("li");
  tipoLi.className = "tipo";

  const newP = document.createElement("p");
  newP.className = "descricao";

  newUl.append(tipoLi, tipoLi);
  newLi.append(newDiv, newImg, newUl, newP);
  ul.appendChild(newLi);
};
