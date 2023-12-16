function realizarLogin() {
	// Obtém os valores de login e senha dos campos de entrada
	const login = document.getElementById('Login').value;
	const senha = document.getElementById('Senha').value;
  
	// Obtém o objeto do usuário armazenado no LocalStorage
	const usuarioArmazenado = localStorage.getItem('usuario');
  
	if (usuarioArmazenado) {
	  // Converte a string do usuário armazenado em um objeto JavaScript
	  const usuario = JSON.parse(usuarioArmazenado);
  
	  if (login === usuario.login && senha === usuario.senha) {
		// Login bem-sucedido - os valores de login e senha correspondem aos dados armazenados
		//exibirMensagem('mensagemLogin', 'Login bem-sucedido!', 'success');
		setTimeout(function() {
		  location.href = 'Index2.html';
		}, 1000);
	  } else if (login !== usuario.login && senha === usuario.senha) {
		// Login incorreto - login está errado
		exibirMensagem('mensagemLogin', 'Login incorreto. Por favor, verifique o login.', 'error');
	  } else if (login === usuario.login && senha !== usuario.senha) {
		// Senha incorreta - senha está errada
		exibirMensagem('mensagemSenha', 'Senha incorreta. Por favor, tente novamente.', 'error');
	  } else {
		// Ambos incorretos - login e senha estão errados
		exibirMensagemGeral('mensagemGeral', 'Credenciais incorretas. Por favor, verifique o login e a senha.', 'error');
	  }
	}
  }
  
  function exibirMensagem(elementoId, texto, tipo) {
	const elemento = document.getElementById(elementoId);
	// Define o texto da mensagem
	elemento.textContent = texto;
	// Define a classe de estilo da mensagem com base no tipo
	elemento.className = 'mensagem-login ' + tipo;
	// Exibe a mensagem
	elemento.style.display = 'block';
  
	setTimeout(function() {
	  // Oculta a mensagem depois de 2 segundos
	  elemento.style.display = 'none';
	}, 1500);
  }
  
  function exibirMensagemGeral(elementoId, texto, tipo) {
	const elemento = document.getElementById(elementoId);
	// Define o texto da mensagem
	elemento.textContent = texto;
	// Define a classe de estilo da mensagem com base no tipo
	elemento.className = 'mensagem-login ' + tipo;
	// Exibe a mensagem
	elemento.style.display = 'block';
  
	// Adiciona um temporizador para ocultar a mensagem após 2 segundos
	setTimeout(function() {
	  elemento.style.display = 'none';
	}, 1500);
  }
  