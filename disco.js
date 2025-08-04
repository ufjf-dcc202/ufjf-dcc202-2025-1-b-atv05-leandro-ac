const tabuleiro = [
	"preto",
	"preto",
	"preto",
	"transparente",
	"branco",
	"branco",
	"branco"
];
let selecionado = null;

export function seleciona(posicao) {
	if(selecionado === null){
		selecionado = posicao;
	} else if(selecionado === posicao){
		selecionado = null;
	} else {
		mover(selecionado, posicao);
		selecionado = null;
	}
	//console.log("Selecionado: " + selecionado);
	//console.log(tabuleiro);
}

export function getTabuleiro() {
	return [...tabuleiro];
}

function mover(origem, destino) {
	if (tabuleiro[destino] !== "transparente") return;
	if (Math.abs(destino - origem) > 2) return;
	if (destino - origem === 2 && tabuleiro[origem + 1] === "transparente") return;
	if (destino - origem === -2 && tabuleiro[origem - 1] === "transparente") return;
	tabuleiro[destino] = tabuleiro[origem];
	tabuleiro[origem] = "transparente";
}