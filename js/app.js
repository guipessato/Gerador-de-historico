var textoHistorico, textoOS

function gerarHistorico() {
	var setor = document.getElementById("setor").value
	var nome = document.getElementById("nome").value

	if (document.getElementById("autorizarONU").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato solicitando a autorização ONU.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema<br>" +
			"2º Identificar numero de contato<br>" +
			"3º Acessar I-NS<br>" +
			"4º Solicite a MAC do equipamento<br>" +
			"5º Acesse a plataforma UNM2000<br>" +
			"6º Para autorizar a ONU vá a Resource -> Unautorized ONU List -> Selecione a OLT da cidade correspondete ao contrato e clique em OK -> encontre a ONU com o MAC informado -> selecione a ONU e clique com o botão direito do mouse e escolha a opção ONU Authetication -> clique na opção Issued to the ONU psysical logo white list.<br>" +
			"7º Apos este procedimento, ONU estará autorizada.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("trocaONU").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato informando a troca da ONU. ONU autorizada conforme solicitado.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a).<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Solicite a MAC do novo equipamento e questione o motivo da troca.<br>" +
			"5º Acesse a plataforma UNM2000.<br>" +
			"6º Para autorizar a ONU vá a Resource -> Unautorized ONU List -> Selecione a OLT da cidade correspondete ao contrato e clique em OK -> encontre a ONU com o MAC informado -> selecione a ONU e clique com o botão direito do mouse e escolha a opção ONU Authetication -> clique na opção Issued to the ONU.psysical logo white list.<br>" +
			"7º Apos este procedimento, ONU estará autorizada.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("liberarMAC").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato solicitando a liberação do MAC.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a).<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Clicar com o botão direito no PPPoE.<br>" +
			"5º Clicar em 'Liberar MAC'.<br>" +
			"6º Informe ao técnico/instalador/assinante que o MAC foi libera.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("loginSenhaMonitoramento").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato pois deseja o login e senha do monitoramento do assinante.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema<br>" +
			"2º Identificar numero de contato<br>" +
			"3º Acessar I-NS<br>" +
			"4º Clicar com o botão direito em CPE RADIUS <br>" +
			"5º Clicar em 'Incluir CPE RADIUS'<br>" +
			"6º Criar PPPoE de monitoramento seguindo os padrões:<br>" +
			"Usuario: monitoramento.NUMERO DO CONTRATO@life.com.br // Senha: NUMERO DO CONTRATO<br>" +
			"7º Informar PPPoE para técnico/instalador<br>" +
			"8º Verificar se PPPoE autenticou<br>" +
			"9º Verificar acesso remoto ao equipamento autenticado com o PPPoE de monitoramento<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("loginSenha").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato para verificar o nome de usuario e senha do PPPoE.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia / boa tarde / boa noite, meu nome é Charlis em que posso ajuda - lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema<br>" +
			"2º Identificar numero de contato<br>" +
			"3º Acessar I-NS<br>" +
			"4º Clicar com o botão direito no PPPoE<br>" +
			"5º Clicar em 'Desabilitar'<br>" +
			"6º Criar em 'Alterar CPE RADIUS'<br>" +
			"7º Informar PPPoE para técnico / instalador<br>" +
			"8º Verificar se PPPoE autenticou" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("ipTelefonia").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato pois deseja um IP de telefonia.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia / boa tarde / boa noite, meu nome é Charlis em que posso ajuda - lo(a)<br>" +
			"1º Solicitar codigo e contrato para abrir no sistema<br>" +
			"2º Solicite a cidade do assinante.<br>" +
			"3º Verifique a tecnologia do assinante(GEPON / GPON ou Conversor de midia).<br>" +
			"4º Acesse o WINBOX.<br>" +
			"5º Acesse o AUTH - DHCP da cidade do assinante.<br>" +
			"6º Localize um IP disponivel compativel com a tecnologia instalada.<br>" +
			"7º Verifique se o IP não esta pingando.<br>" +
			"8º Informe IP para técnico / instalador realizar as configurações no local.<br>" +
			"9º Apos técnico / instalador realizar configurações no equipamento, verifique se IP informado começou a responder ao ping.<br>" +
			"10º Solicite que técnico / instalador teste a linha telefonica.<br><br>" +
			"OBS: Em caso de LIGLIFE portado na data da instalação, informar o técnico/instalador que linha telefonica tem o prazo de 24h uteis para entrar em funcionamento" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("verifSenhaWifi").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato para verificar a senha do wifi. Informado e agradeceu";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Indentificar IP de autenticação.<br>" +
			"5º Acessar equipamento pelo IP de autenticação via navegador ou aplicação compativel.<br>" +
			"6º Encontrar opção relacionada a segurança da WLAN/WIFI.<br>" +
			"7º Verificar senha e informa-la para assinante/técnico/instalador/N1.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("ativarWifi").checked == true) {
		textoHistorico = setor + " " + " entrou em contato para ativar o wifi. Ativado.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a).<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Indentificar IP de autenticação.<br>" +
			"5º Acessar equipamento pelo IP de autenticação via navegador ou aplicação compativel.<br>" +
			"6º Encontrar opção relacionada a configurações da WLAN/WIFI.<br>" +
			"7º Verificar se WLAN/WIFI, caso esteja desativado, ativar.<br>" +
			"8º Informar que WLAN/WIFI foi ativo para assinante/técnico/instalador/N1 conforme solicitado<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("alterarSenhaWifi").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato para alterar a senha do wifi. Alterado.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Indentificar IP de autenticação.<br>" +
			"5º Acessar equipamento pelo IP de autenticação via navegador ou aplicação compativel.<br>" +
			"6º Encontrar opção relacionada a segurança da WLAN/WIFI.<br>" +
			"7º Solicitar a senha que assinante/técnico/instalador/N1 gostaria e altera-la.<br>" +
			"8º Informar que senha do WLAN/WIFI foi alterada para assinante/técnico/instalador/N1 conforme solicitado.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("alterarSSIDWifi").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato para alterar o SSID da rede Wifi. Alterado.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Indentificar IP de autenticação.<br>" +
			"5º Acessar equipamento pelo IP de autenticação via navegador ou aplicação compativel.<br>" +
			"6º Encontrar opção relacionada a configurações da WLAN/WIFI.<br>" +
			"7º Solicitar o SSID(nome) que assinante/técnico/instalador/N1 gostaria e altera-la.<br>" +
			"8º Informar que SSID(nome) do WLAN/WIFI foi alterada para assinante/técnico/instalador/N1 conforme solicitado.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("alterarSSIDSenhaWifi").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato para alterar o nome e senha da rede Wifi. Alterado.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a).<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Indentificar IP de autenticação.<br>" +
			"5º Acessar equipamento pelo IP de autenticação via navegador ou aplicação compativel.<br>" +
			"6º Encontrar opção relacionada a configurações da WLAN/WIFI.<br>" +
			"7º Solicitar a senha e SSID(nome) que assinante/técnico/instalador/N1 gostaria e altera-la.<br>" +
			"8º Informar que senha e SSID(nome) do WLAN/WIFI foi alterada para assinante/técnico/instalador/N1 conforme solicitado.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("AlterarFrequenciaWifi").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato para alterar a frequencia/canal do wifi. Alterado.";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Indentificar IP de autenticação.<br>" +
			"5º Acessar equipamento pelo IP de autenticação via navegador ou aplicação compativel.<br>" +
			"6º Encontrar opção relacionada a configurações da WLAN/WIFI.<br>" +
			"7º Encontrar opção relacionada a frenquecia de transmissão e canal de transmissão.<br>" +
			"8ºAlterar frenquecia de transmissão e canal de transmissão ou deixar nas opções automaticas.<br>" +
			"9º Informar para assinante/técnico/instalador/N1 que frenquecia de transmissão e canal de transmissão alterados conforme solicitado.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("telefoneSIP").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato solicitando a senha SIP e TN do contrato do assinante";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema<br>" +
			"2º Abrir contrato correspondente<br>" +
			"3º Localizar telefone<br>" +
			"4º Clicar com botão direito do mouse no telefone<br>" +
			"5º Clicar em 'Desabilitar ATA'<br>" +
			"6º Clicar em 'Alterar ATA'<br>" +
			"7º Selecionar telefone e clicar com o botão direito do mouse em 'Alterar senha SIP'<br>" +
			"8º Informar TN e SIP para técnico/instalador<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("portasONU").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato solicitando informações sobre as portas habilitadas na ONU";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Indentificar IP de autenticação.<br>" +
			"5º Acessar equipamento pelo IP de autenticação via navegador ou aplicação compativel.<br>" +
			"6º Encontrar opção relacionada a WAN.<br>" +
			"7º Acessar VLAN qual deseja verificar portas(VLAN 151 INTERNET / VLAN 900 TV).<br>" +
			"8º Verificar as postas liberadas para dados e informar assinante/técnico/instalador/N1.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("liberacaoPortaInternet").checked == true) {
		textoHistorico = setor + " " + nome + " entrou em contato solicitando a liberação das portas na ONU";
		//Adiciona texto do procedimento
		var scriptProcedimento = document.querySelector(".textoScript"),
			// Pega a string do conteúdo atual
			textoTemporario = scriptProcedimento.innerHTML,
			// Novo HTML que será inserido
			textoNovo =
			"<div id=textoProc class='mx-3 my-2 text-justify'>" +
			"Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
			"1º Solicitar codigo, contrato e cidade para abrir no sistema.<br>" +
			"2º Identificar numero de contato.<br>" +
			"3º Acessar I-NS.<br>" +
			"4º Indentificar IP de autenticação.<br>" +
			"5º Acessar equipamento pelo IP de autenticação via navegador ou aplicação compativel.<br>" +
			"6º Encontrar opção relacionada a WAN.<br>" +
			"7º Acessar VLAN do serviço que deseja alterar/liberar a(s) porta(s).<br>" +
			"8º Solicitar porta(s) que deseja que seja(m) liberada(s)<br>" +
			"9º Realizar alteração.<br>" +
			"9º Informar assinante/técnico/instalador/N1 que portas foram liberadas conforme solicitado.<br>" +
			"</div>";
		// Concatena as strings colocando o textoNovo antes do textoTemporario
		textoTemporario = textoNovo;
		// Coloca a nova textoNovo no DOM
		scriptProcedimento.innerHTML = textoTemporario;
	} else if (document.getElementById("redirecionamentoPorta").checked == true) {
		//solicitando porta e ip
		// var ip = prompt("Informe o IP:");
		// var porta = prompt("Informe a porta:");
		//textoHistorico = setor + " " + nome + " entrou em contato solicitando o redirecionamento de porta. \nIP: " + ip + "\nPorta: " + porta;
		textoHistorico = setor + " " + nome + " entrou em contato solicitando o redirecionamento de porta. \nIP: " + "\nPorta: ";
	} else {
		textoHistorico = "";
	}
	//checando checkbox abertura de OS
	if (document.getElementById("aberturaOS").checked == true) {
		textoOS =
			"Ordem de serviço agendada para o dia __/__/____, no período da ___________\n" +
			"Agendado conforme disponibilidade do assinante: SIM[ ] / NÃO[ ]\n" +
			"Agendado conforme disponibilidade da agenda: SIM[] / NÃO[]";
	} else {
		textoOS = "";
	}
	document.getElementById("resultHistorico").innerHTML = textoHistorico + "\n\n" + textoOS;
}

function limparTextarea() {
	document.getElementById("resultHistorico").innerHTML = "";
	document.getElementById("textoProc").innerHTML = "";
	scriptProcedimento
}

function copiarTexto() {
	document.getElementById("resultHistorico").select();
	document.execCommand("copy");

	toastr["success"]("Texto copiado", "Sucesso!")

	toastr.options = {
		closeButton: true,
		debug: false,
		newestOnTop: false,
		progressBar: true,
		positionClass: "toast-top-right",
		preventDuplicates: false,
		onclick: null,
		showDuration: "200",
		hideDuration: "1000",
		timeOut: "1500",
		extendedTimeOut: "1000",
		showEasing: "swing",
		hideEasing: "linear",
		showMethod: "fadeIn",
		hideMethod: "fadeOut",
	}
}


//EXEMPLO TEXTO PROCEDIMENTO
// "Saudações: Life, bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
// "1º Solicitar codigo e contrato para abrir no sistema<br>" +
// "2º Solicitar o MAC ADDRESS do equipamento<br>" +
// "3º Identificar o FTTH do cliente <br>" +
// "4º Acessar o link para identificar a OLT atraves do FTTH <br>" +
// "5º Acessar o ANM 2000 <br>" +
// "6º Ir até a OLT especifica <br>" +
// "7º Botão direito na placa de gerencia(HSWA, HSWB, HSUA) - > service config management <br>" +
// "8º Clicar ONU Authentication > ONU physic_Idaddress_Whitelist > Get Unauthorized ONU <br>" +
// "9º Clicar em consultar Get Unauthorized <br>" +
// "10º Selecionar a MAC da ONU especifica e dar OK apos isso Device Operation - > Write Devide e access Operation - > White Database <br> " +
// "11º<br><img src='img/teste.jpg' class= 'img-fluid'>" +
// "12º Caso ONU não esteja pendente para autorização, acesse a pagina atraves do 8º item e pesquise a MAC da ONU sem ponto ou traço apos clicar na tecla CTRL+F<br>" +
// "13º Encontrou a ONU deve - se clicar com o botão direito e delete device < br > 14º Repita o procedimento do item 8 e 9" +





// GERADOR COM VALIDAÇÃO.
// function gerarHistorico() {
// 	var setor = document.getElementById("setor").value
// 	var nome = document.getElementById("nome").value
// 	if (setor == "" || nome == "") {
// 		toastr["error"]("Verifique e preencha todos os campos", "Campo(s) não preenchido(s)!")

// 		toastr.options = {
// 			closeButton: true,
// 			debug: false,
// 			newestOnTop: false,
// 			progressBar: true,
// 			positionClass: "toast-top-center",
// 			preventDuplicates: true,
// 			showDuration: "300",
// 			hideDuration: "1000",
// 			timeOut: "3000",
// 			extendedTimeOut: "1000",
// 			showEasing: "swing",
// 			hideEasing: "linear",
// 			showMethod: "fadeIn",
// 			hideMethod: "fadeOut",
// 		}
// 	} else {
// 		if (document.getElementById("autorizarONU").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato solicitando a autorização ONU."
// 		} else if (document.getElementById("trocaONU").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato informando a troca da ONU. ONU autorizada conforme solicitado."
// 		} else if (document.getElementById("liberarMAC").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato solicitando a liberação do MAC."
// 		} else if (document.getElementById("loginSenhaMonitoramento").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato pois deseja o login e senha do monitoramento do assinante."
// 		} else if (document.getElementById("loginSenha").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato para verificar o nome de usuario e senha do PPPoE."
// 		} else if (document.getElementById("ipTelefonia").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato pois deseja um IP de telefonia."
// 		} else if (document.getElementById("verifSenhaWifi").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato para verificar a senha do wifi. Informado e agradeceu"
// 		} else if (document.getElementById("ativarWifi").checked == true) {
// 			textoHistorico = setor + " " + " entrou em contato para ativar o wifi. Ativado."
// 		} else if (document.getElementById("alterarSenhaWifi").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato para alterar a senha do wifi. Alterado."
// 		} else if (document.getElementById("alterarSSIDWifi").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato para alterar o SSID da rede Wifi. Alterado."
// 		} else if (document.getElementById("alterarSSIDSenhaWifi").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato para alterar o nome e senha da rede Wifi. Alterado."
// 		} else if (document.getElementById("AlterarFrequenciaWifi").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato para alterar a frequencia/canal do wifi. Alterado."
// 		} else if (document.getElementById("telefoneSIP").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato solicitando a senha SIP e TN do contrato do assinante"
// 		} else if (document.getElementById("portasONU").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato solicitando informações sobre as portas habilitadas na ONU"
// 		} else if (document.getElementById("liberacaoPortaInternet").checked == true) {
// 			textoHistorico = setor + " " + nome + " entrou em contato solicitando a liberação das portas para VLAN de internet"
// 		} else if (document.getElementById("redirecionamentoPorta").checked == true) {
// 			var ip = prompt("Informe o IP:")
// 			var porta = prompt("Informe a porta:")
// 			textoHistorico = setor + " " + nome + " entrou em contato solicitando o redirecionamento de porta. \nIP: " + ip + "\nPorta: " + porta
// 		} else {
// 			textoHistorico = nome + "Nenhuma seleção";
// 		}
// 		document.getElementById("resultHistorico").innerHTML = textoHistorico;
// 	}
// }