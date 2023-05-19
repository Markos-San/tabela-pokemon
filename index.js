const openModalButton = document.querySelector("#modal-add-pokemon");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const form = document.getElementById("form-add-pokemon");
const inputNamePokemon = document.getElementById("nomePokemon");
const inputGifPokemon = document.getElementById("gifPokemon");
const inputAtribute = document.getElementById("atributo-pokemon");
const inputAtribute2 = document.getElementById("atributo2-pokemon");
const textPokemon = document.getElementById("texto-descricao-pokemon");
const pokeAcc = 10;

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

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  addCardPokemon(
    inputNamePokemon,
    inputGifPokemon,
    inputAtribute,
    inputAtribute2,
    textPokemon,
    toggleModal()
  );
});

const addCardPokemon = (
  inputNamePokemon,
  inputGifPokemon,
  inputAtribute,
  inputAtribute2,
  textPokemon
) => {
  const currentPoke = pokeAcc + 1;

  const ul = document.getElementById("listagem-pokemon");

  const newLi = document.createElement("li");
  newLi.className = "cartao-pokemon modo-claro";

  const newDiv = document.createElement("div");
  newDiv.className = "informacoes";
  newDiv.innerHTML = `<span>${inputNamePokemon.value}</span> <span>"#0${currentPoke}"</span>`;

  const newImg = document.createElement("img");
  newImg.className = "gif";
  newImg.alt = "foto do pokemon";
  const gif = inputGifPokemon.files[0].name;

  newImg.src = `.\\image\\${gif}`;

  const newUl = document.createElement("ul");
  newUl.className = "tipos";

  const tipoLi = document.createElement("li");
  tipoLi.className = `tipo ${inputAtribute.value}`;
  tipoLi.innerText = `${inputAtribute.value} `;
  newUl.append(tipoLi);

  if (inputAtribute2.value !== "none") {
    const tipoLi2 = document.createElement("li");
    tipoLi2.className = `tipo ${inputAtribute2.value}`;
    tipoLi2.innerText = `${inputAtribute2.value} `;
    newUl.append(tipoLi2);
  }

  const newP = document.createElement("p");
  newP.className = "descricao";
  newP.innerText = `"${textPokemon.value}" `;

  newLi.append(newDiv, newImg, newUl, newP);
  ul.appendChild(newLi);
  console.log(gif);
};
