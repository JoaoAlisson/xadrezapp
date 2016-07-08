var CORRIGIDO = false;

function escondeBotao()
{
	$('#tabuleiro').show();
	$('#button').hide();
}

function mostraBotao()
{	
	$('#button').show();
	$('#tabuleiro').hide();	
}

function novoTeste()
{	
	$('.casa').html('');
	linha  = aleatorio();
	coluna = colunaHelper(aleatorio());

	casa = coluna + linha;

	$('button').html(casa);

	mostraBotao();
}

function correcao(id)
{
	casa = $('#button').html();
	$('#' + casa).html(casaCorreta());

	if(id != casa)
		$('#' + id).html(casaErrada());

	escondeBotao();
}

function apppronto() {
	CORRIGIDO = false;
	$('#button').click(function() {
		escondeBotao();
	});

	$('.casa').click(function() {
		if(CORRIGIDO == false) {
			correcao(this.id);
			CORRIGIDO = true;
		} else {
			novoTeste();
			CORRIGIDO = false;
		}
	});	
}