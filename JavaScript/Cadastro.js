// Função para realizar o cadastro
function realizarCadastro() {
  // Obtém os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var nomematerno = document.getElementById("nomematerno").value;
  var cpf = document.getElementById("cpf").value;
  var email = document.getElementById("email").value;
  var telfix = document.getElementById("telfix").value;
  var nasc = document.getElementById("nasc").value;
  var cep = document.getElementById("cep").value;
  var logradouro = document.getElementById("logradouro").value;
  var estado = document.getElementById("estado").value;
  var cidade = document.getElementById("cidade").value;
  var bairro = document.getElementById("bairro").value;
  var comp = document.getElementById("comp").value;
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;
  var senhaconfirm = document.getElementById("senhaconfirm").value;
  var telcel = document.getElementById("telcel").value;
  var genderInputs = document.getElementsByName("gender");
  
  

  // Validação dos campos
  var errors = [];

  if (nome.length < 15) {
    errors.push("Nome deve ter no mínimo 15 caracteres");
  }

  if (nomematerno.length === 0) {
    errors.push("Digite um nome materno válido");
  }

  var emailRegex = /^[A-Za-z0-9._%+-]+@(gmail|hotmail|outlook)\.(com|com\.br)$/;

  if (!emailRegex.test(email)) {
    errors.push("Digite um email válido.");
  }

  // Validação do campo "telefone fixo"
  if (!validarNumeros(telfix)) {
    errors.push("Digite um telefone fixo válido contendo apenas números");
  }

  if (telfix.length < 10) {
    errors.push("Digite um telefone fixo válido");
  }

  if (nasc.length < 0) {
    errors.push("Digite uma data de nascimento válida");
  }

  if (cep.length < 8) {
    errors.push("Digite um CEP válido");
  }

  if (logradouro.length === 0) {
    errors.push("Digite um logradouro válido");
  }

  if (estado.length === 0) {
    errors.push("Digite um estado válido");
  }

  if (cidade.length === 0) {
    errors.push("Digite uma cidade válida");
  }

  if (bairro.length === 0) {
    errors.push("Digite um bairro válido");
  }

  if (comp.length === 0) {
    errors.push("Digite um complemento válido");
  }

  // Restrição de login e senha para caracteres alfabéticos
  var alphabeticRegex = /^[a-zA-Z]+$/;

  if (!alphabeticRegex.test(login)) {
    errors.push("Login deve conter apenas caracteres alfabéticos");
  }

  if (!alphabeticRegex.test(senha)) {
    errors.push("Senha deve conter apenas caracteres alfabéticos");
  }

  if (login.length < 6) {
    errors.push("Login deve ter no mínimo 6 caracteres");
  }

  if (senha.length < 8) {
    errors.push("Senha deve ter no mínimo 8 caracteres");
  }

  if (senha !== senhaconfirm) {
    errors.push("As senhas não coincidem");
  }

  // Validação do campo "telefone celular"
  if (!validarNumeros(telcel)) {
    errors.push("Digite um telefone celular válido contendo apenas números");
  }

  if (telcel.length < 11) {
    errors.push("Digite um telefone celular válido");
  }

  function validarNumeros(valor) {
    var regex = /^[\d()+-]+$/; // Aceita números, parênteses, hífen e sinal de adição
    var numeroLimpo = valor.replace(/[()-\s]/g, ""); // Remove parênteses, hífen e espaços em branco
    return regex.test(numeroLimpo);
  }

  // Exibe erros, se houver
  if (errors.length > 0) {
    var errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = "";
    for (var j = 0; j < errors.length; j++) {
      var errorElement = document.createElement("p");
      errorElement.innerText = errors[j];
      errorContainer.appendChild(errorElement);
    }

    // Adiciona a mensagem de erro
    var errorSpan = document.getElementById("mensagemErro");
    errorSpan.innerText = "O cadastro não foi validado. Corrija os erros e tente novamente.";
    errorSpan.style.display = "block";

    // Define o tempo de exibição da mensagem de erro
    setTimeout(function () {
      errorSpan.style.display = "none";
    }, 3000);
  } else {
    // Se não houver erros, salva os dados do usuário no LocalStorage
    var usuario = {
      login: login,
      senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Atualiza a mensagem de feedback com sucesso
    var successSpan = document.getElementById("mensagemCadastro");
    successSpan.innerText = "Cadastro realizado com sucesso!";
    successSpan.style.display = "block";

    // Redireciona para a página de login após 3 segundos
    setTimeout(function () {
      location.href = "log.html";
    }, 3000);
  }
}

// Formatação

// Função para formatar o telefone fixo
function mascaraTele(telefone) {
  const telefonef = telefone.value;
  const tele = telefonef.length === 10;

  let ajuste;
  if (tele) {
    const parte1 = telefonef.slice(0, 2);
    const parte2 = telefonef.slice(2, 6);
    const parte3 = telefonef.slice(6, 10);
    ajuste = `(${parte1}) ${parte2}-${parte3}`;
  } else if (telefonef.length < 10) {
    const errorSpan = document.getElementById("telefoneFixo-error");
    errorSpan.textContent = "Número de telefone inválido";
    return;
  } else if (telefonef.length > 11) {
    const errorSpan = document.getElementById("telefoneFixo-error");
    errorSpan.textContent = "O máximo de caracteres é 11. Por favor, insira novamente.";
    return;
  }

  telefone.value = ajuste;
}

// Função para formatar o telefone celular
function mascaraCell(telefone) {
  const telefonef = telefone.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  const celular = telefonef.length === 11;

  let ajuste;

  if (celular) {
    const parte1 = telefonef.slice(0, 2);
    const parte2 = telefonef.slice(2, 7);
    const parte3 = telefonef.slice(7, 11);
    ajuste = `(${parte1}) ${parte2}-${parte3}`;
  } else {
    const errorSpan = document.getElementById("telefoneCelular-error");
    errorSpan.textContent = "Número de celular inválido";
    return;
  }

  telefone.value = ajuste;
}

// Adicione o evento de listener para formatar o campo de telefone celular
document.getElementById("telcel").addEventListener("input", function () {
  mascaraCell(this);
});

// Remoção do Hífen
function tiraHifen(telefone) {
  const telefonef = telefone.value;
  const ajuste = telefonef.replace(/-/g, "");
  telefone.value = ajuste;
}

// Adicione o evento de listener para detectar a mudança no campo de CPF
document.getElementById("cpf").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
});

// Adicione o evento de listener para formatar o campo de CPF
document.getElementById("cpf").addEventListener("input", function () {
  mascaraCpf(this);
});

// Formatação de CPF
function mascaraCpf(cpf) {
  const cpff = cpf.value;
  const Cpf = cpff.length === 11;

  let forma;
  if (Cpf) {
    const parte1 = cpff.slice(0, 3);
    const parte2 = cpff.slice(3, 6);
    const parte3 = cpff.slice(6, 9);
    const parte4 = cpff.slice(9, 11);
    forma = `${parte1}.${parte2}.${parte3}-${parte4}`;
  } else {
    return;
  }
  cpf.value = forma;
}

// Função para preencher automaticamente o endereço com base no CEP
function preencherEndereco() {
  var cep = document.getElementById("cep").value;

  // Remove caracteres não numéricos do CEP
  cep = cep.replace(/\D/g, "");

  if (cep.length !== 8) {
    return;
  }

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://viacep.com.br/ws/" + cep + "/json/");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var endereco = JSON.parse(xhr.responseText);

      if (endereco.hasOwnProperty("erro")) {
        return;
      }

      document.getElementById("logradouro").value = endereco.logradouro || "";
      document.getElementById("estado").value = endereco.uf || "";
      document.getElementById("cidade").value = endereco.localidade || "";
      document.getElementById("bairro").value = endereco.bairro || "";
    }
  };
  xhr.send();
}

// Adicionar o evento de listener para detectar a mudança no campo de CEP
document.getElementById("cep").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
});

// Adicionar o evento de listener para detectar a mudança no campo de CEP
document.getElementById("cep").addEventListener("change", preencherEndereco);
