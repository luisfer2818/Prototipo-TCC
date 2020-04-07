function toggleDiv(divId) {
    $("#" + divId).toggle(); //se foi materia no inicio dela terá um #
}

function enter_na_linha(entrada_texto) { // a função tem um nome conforme sua função.
    return entrada_texto.replace(/\n/g, ' ');
}

function tira_espaco_duplo(entrada_texto) {
    var buscar_no_texto = /(\s{2,})/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, ' ');
    return entrada_texto;
}

function Encontra_materia(entrada_texto) {
    var buscar_no_texto = /([A-ZÇÃÕÂÊÎÔÛÁÉÍÓÚ-]*\s{1})*[A-ZÇÃÕÂÊÎÔÛÁÉÍÓÚ-]+[:]{1}\s{1}/g; //encontra o texto que deseja
    entrada_texto = entrada_texto.replace(buscar_no_texto, '\n\n#$&'); // após encontrar o texto esse reescreve o texto conforme tem que fica
    return entrada_texto; // da o retorno do texto
}

function Encontra_numero(entrada_texto) {
    var buscar_no_texto = /(\.)(\s+)(\d{1,2}\.{0,1}\d{0,2}\s+)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '$1\n$3');
    return entrada_texto;
}

function Encontra_dois_pontos_e_numero(entrada_texto) {
    var buscar_no_texto = /(:)(\s+)(\d+)/g; // essa parte busca o que eu quero no texto
    entrada_texto = entrada_texto.replace(buscar_no_texto, '$1\n$3');
    return entrada_texto;
}

function Encontra_so_dois_pontos(entrada_texto) {
    var buscar_no_texto = /(:)(\s+)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '$1\n');
    return entrada_texto;
}

function Encontra_pontoVirgula(entrada_texto) {
    var buscar_no_texto = /(;\s+)(\w+)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '\n   $1$2');
    return entrada_texto;
}

function Encontra_virgula(entrada_texto) {
    var buscar_no_texto = /(,\s+)(\w+)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '\n   $1$2');
    return entrada_texto;
}

function Encontra_e_no_texto(entrada_texto) {
    var buscar_no_texto = /( +)(e)( +)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '$1\n   $2$3');
    return entrada_texto;
}

function Encontra_ou_no_texto(entrada_texto) {
    var buscar_no_texto = /( +)(ou)( +)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '$1\n   $2$3');
    return entrada_texto;
}

function Encontra_ponto_e_Numero(entrada_texto) {
    var buscar_no_texto = /(\w+\){0,1}\.)(\s+)(\d+\.)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '$1\n$3');
    return entrada_texto;
}

function Encontra_ponto(entrada_texto) {
    var buscar_no_texto = /(\w+\){0,1}\.)(\s+)(\w+)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '$1\n$3');
    return entrada_texto;
}

function Encontra_assunto(entrada_texto) {
    var buscar_no_texto = /(\d+\.)(\d+)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '   $1$2');
    return entrada_texto;
}

function Encontra_subassunto_de_assunto(entrada_texto) {
    var buscar_no_texto = /(\d+\.)(\d+\.)(\d+)/g;
    entrada_texto = entrada_texto.replace(buscar_no_texto, '     $1$2$3');
    return entrada_texto;
}

function modifica_texto() {
    var entrada_texto = $('#form1').val();
    entrada_texto = enter_na_linha(entrada_texto);
    entrada_texto = tira_espaco_duplo(entrada_texto);
    entrada_texto = Encontra_materia(entrada_texto);
    entrada_texto = Encontra_dois_pontos_e_numero(entrada_texto);
    entrada_texto = Encontra_so_dois_pontos(entrada_texto);
    entrada_texto = Encontra_pontoVirgula(entrada_texto);
    entrada_texto = Encontra_virgula(entrada_texto);
    entrada_texto = Encontra_ponto_e_Numero(entrada_texto);
    entrada_texto = Encontra_ponto(entrada_texto);
    entrada_texto = Encontra_numero(entrada_texto);
    entrada_texto = Encontra_e_no_texto(entrada_texto);
    entrada_texto = Encontra_ou_no_texto(entrada_texto);
    entrada_texto = Encontra_assunto(entrada_texto);
    entrada_texto = Encontra_subassunto_de_assunto(entrada_texto);
    $('#form2').val(entrada_texto);
}

$('#voltaform').modifica_texto();