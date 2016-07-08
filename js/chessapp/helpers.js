function aleatorio()
{
	return Math.floor((Math.random() * 7) + 2);
}

function colunaHelper(coluna)
{
	colulas = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	return colulas[coluna];
}

function casaCorreta()
{
	return '<div class="casaCorreta"></div>';
}

function casaErrada()
{
	return '<div class="casaErrada"></div>';
}