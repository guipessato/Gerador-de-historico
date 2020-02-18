var textoHistorico;

function gerarHistorico() {
    var op = document.getElementById("op").value;
    var nome = document.getElementById("nome").value;
    if (document.getElementById("autorizarONU").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato solicitando a autorização ONU.";
    } else if (document.getElementById("trocaONU").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato informando a troca da ONU. ONU autorizada conforme solicitado.";
    } else if (document.getElementById("liberarMAC").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato solicitando a liberação do MAC.";
    } else if (document.getElementById("loginSenhaMonitoramento").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato pois deseja o login e senha do monitoramento do assinante.";
    } else if (document.getElementById("loginSenha").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato para verificar o nome de usuario e senha do PPPoE.";
    } else if (document.getElementById("ipTelefonia").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato pois deseja um IP de telefonia.";
    } else if (document.getElementById("verifSenhaWifi").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato para verificar a senha do wifi. Informado e agradeceu";
    } else if (document.getElementById("ativarWifi").checked == true) {
        textoHistorico = op + " " + " entrou em contato para ativar o wifi. Ativado.";
    } else if (document.getElementById("alterarSenhaWifi").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato para alterar a senha do wifi. Alterado.";
    } else if (document.getElementById("alterarSSIDWifi").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato para alterar o SSID da rede Wifi. Alterado.";
    } else if (document.getElementById("alterarSSIDSenhaWifi").checked == true) {
        textoHistorico = op + " " + nome + " entrou em contato para alterar o nome e senha da rede Wifi. Alterado";
    } else if (document.getElementById("AlterarFrequenciaWifi").checked == true) {
        textoHistorico = op + " " + nome + " Colaboradora entrou em contato para alterar a frequencia/canal do wifi. Alterado.";
    } else {
        textoHistorico = nome + "Nenhuma seleção";
    }
    document.getElementById('resultHistorico').innerHTML = textoHistorico;
};

function limparTextarea() {
    document.getElementById('resultHistorico').innerHTML = '';
}

// html
// <span id="numerosx">56262662</span>
// <button id="btcopiar">COPIAR</button>

// document.querySelector("button").onclick = function() {
//     var element= document.getElementById('numerosx');
//     var range = document.createRange();
//     range.selectNode(element);
//     window.getSelection().addRange(range);
//     document.execCommand("copy");