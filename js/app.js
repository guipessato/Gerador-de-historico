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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
			 "Texto" +
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
// "Saudações: bom dia/boa tarde/boa noite, meu nome é Charlis em que posso ajuda-lo(a)<br>" +
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
