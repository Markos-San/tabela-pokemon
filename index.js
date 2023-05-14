document.getElementById("botao-alterar-tema").addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");
  document.body.classList.contains("modo-escuro")
    ? document.getElementById("imgBtn").setAttribute("src", "./image/moon.png")
    : document.getElementById("imgBtn").setAttribute("src", "./image/sun.png");
});
