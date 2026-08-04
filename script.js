const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", function () {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
            botao.style.backgroundColor = "#d9531e";
            botao.style.color = "#ffffff";
        } else {
            texto.textContent--;
            curtiu = false;
            botao.style.backgroundColor = "transparent";
            botao.style.color = "#000000";
        }
    });
});
