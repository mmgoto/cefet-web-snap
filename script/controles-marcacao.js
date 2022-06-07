let marcacoesOcutas = document.querySelector("#visibilidade-das-marcacoes");
let eEl = document.querySelector("#oi");

marcacoesOcutas.addEventListener("click", (e) => {
    if (marcacoesOcutas.checked) {
        eEl.style.display = "none";

        console.log("verdade");
    } else {
        console.log("mintiraa");
        eEl.style.display = "";
    }
});
