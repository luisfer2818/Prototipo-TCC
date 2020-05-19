function Edital() {
   // método constructor
   this.entrada_texto = '';
   this.form1 = document.getElementById('form1');
   this.form2 = document.getElementById('form2');
   this.botaolSalvar = document.getElementById('salvar');

   var self = this;

   this.form1.addEventListener('keyup', function(evento) {
       self.entrada_texto = evento.target.value;
       self.modifica_texto();
   });

   this.botaolSalvar.addEventListener('click', function(evento) {
       self.entrada_texto = evento.target.value;
       self.modifica_texto();
   });
}

// Edital.prototype.toggleDiv = function(divId) {
//     $("#" + divId).toggle(); //se foi materia no inicio dela terá um #
// }

Edital.prototype.enter_na_linha = function() { // a função tem um nome conforme sua função.
   this.entrada_texto = this.entrada_texto.replace(/\n/g, ' ');
}

Edital.prototype.tira_espaco_duplo = function() {
   var buscar_no_texto = /(\s{2,})/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, ' ');
}

Edital.prototype.Encontra_materia = function() {
   var buscar_no_texto = /([A-ZÇÃÕÂÊÎÔÛÁÉÍÓÚ-]*\s{1})*[A-ZÇÃÕÂÊÎÔÛÁÉÍÓÚ-]+[:]{1}\s{1}/g; //encontra o texto que deseja
   // da o retorno do texto
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '\n#$&'); // após encontrar o texto esse reescreve o texto conforme tem que fica
}

Edital.prototype.Encontra_numero = function() {
   var buscar_no_texto = /(\.)(\s+)(\d{1,2}\.{0,1}\d{0,2}\s+)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '$1\n$3');
}

Edital.prototype.Encontra_dois_pontos_e_numero = function() {
   var buscar_no_texto = /(:)(\s+)(\d+)/g; // essa parte busca o que eu quero no texto
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '$1\n$3');
}

Edital.prototype.Encontra_so_dois_pontos = function() {
   var buscar_no_texto = /(:)(\s+)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '$1\n');
}

Edital.prototype.Encontra_pontoVirgula = function() {
   var buscar_no_texto = /(;\s+)(\w+)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '\n   $1$2');
}

Edital.prototype.Encontra_virgula = function() {
   var buscar_no_texto = /(,\s+)(\w+)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '\n   $1$2');
}

Edital.prototype.Encontra_e_no_texto = function() {
   var buscar_no_texto = /( +)(e)( +)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '$1\n   $2$3');
}

Edital.prototype.Encontra_ou_no_texto = function() {
   var buscar_no_texto = /( +)(ou)( +)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '$1\n   $2$3');
}

Edital.prototype.Encontra_ponto_e_Numero = function() {
   var buscar_no_texto = /(\w+\){0,1}\.)(\s+)(\d+\.)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '$1\n$3');
}

Edital.prototype.Encontra_ponto = function() {
   var buscar_no_texto = /(\w+\){0,1}\.)(\s+)(\w+)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '$1\n$3');
}

Edital.prototype.Encontra_assunto = function() {
   var buscar_no_texto = /(\d+\.)(\d+)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '   $1$2');
}

Edital.prototype.Encontra_subassunto_de_assunto = function() {
   var buscar_no_texto = /(\d+\.)(\d+\.)(\d+)/g;
   this.entrada_texto = this.entrada_texto.replace(buscar_no_texto, '     $1$2$3');
}

Edital.prototype.modifica_texto = function() {
   this.enter_na_linha();
   this.tira_espaco_duplo();
   this.Encontra_materia();
   this.Encontra_dois_pontos_e_numero();
   this.Encontra_so_dois_pontos();
   this.Encontra_pontoVirgula();
   this.Encontra_virgula();
   this.Encontra_ponto_e_Numero();
   this.Encontra_ponto();
   this.Encontra_numero();
   this.Encontra_e_no_texto();
   this.Encontra_ou_no_texto();
   this.Encontra_assunto();
   this.Encontra_subassunto_de_assunto();
   this.form2.value = this.entrada_texto;
}

// $('#voltaform').modifica_texto();

var edital = new Edital();