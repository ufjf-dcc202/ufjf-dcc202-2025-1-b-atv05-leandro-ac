const eH1 = document.querySelector("h1");
eH1.textContent = "Olá mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append(eTabuleiro);

for(let i=0; i<7; i++){
	const novoDisco = criaDisco();
	eTabuleiro.append(novoDisco);
}

function criaDisco(){
	const novoDisco = document.createElement("div");
	novoDisco.classList.add("disco");
	return novoDisco;
}

function criaTabuleiro(){
    const novoTabuleiro = document.createElement("div");
    novoTabuleiro.classList.add("tabuleiro");
    return novoTabuleiro;
}