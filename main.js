import { getTabuleiro, seleciona } from "./disco.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Olá mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

const tabuleiro = getTabuleiro();

for(let i=0; i<7; i++){
	const eDisco = criaDisco(tabuleiro[i], i);
	eTabuleiro.append(eDisco);
}

function discoClick(evento){
	let posicao = Number(evento.target.dataset.posicao);
	console.log("Click!" + posicao);
	seleciona(posicao);
	atualizaDiscos();
}

function atualizaDiscos(){
	const tabuleiro = getTabuleiro();
	for(let i=0; i<eTabuleiro.children.length; i++){
		const disco = eTabuleiro.children[i];
		disco.dataset.cor = tabuleiro[disco.dataset.posicao];
	}

}

function criaDisco(cor, posicao){
	const novoDisco = document.createElement("div");
	novoDisco.classList.add("disco");
	novoDisco.dataset.cor = cor;
	novoDisco.dataset.posicao = posicao;
	novoDisco.addEventListener("click", discoClick);
	return novoDisco;
}

function criaTabuleiro(){
    const novoTabuleiro = document.createElement("div");
    novoTabuleiro.classList.add("tabuleiro");
    return novoTabuleiro;
}