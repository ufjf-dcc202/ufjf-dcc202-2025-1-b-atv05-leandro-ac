const eH1 = document.querySelector("h1");
eH1.textContent = "Olá mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

function criaTabuleiro(){
    const novoTabuleiro = documento.createElement("div");
    novoTabuleiro.classList.add("tabuleiro");
    novoTabuleiro.style.background = "lightgreen";
	novoTabuleiro.style.minHeight = "25px";
    return novoTabuleiro;
}