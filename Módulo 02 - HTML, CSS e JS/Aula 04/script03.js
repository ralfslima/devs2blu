// Gerar número entre 1 e 100
const numeroGerado = Math.floor(Math.random() * 100) + 1;

// Tentativas
let tentativas = 0;

// Função para validar o valor informado
const acao = (event, valor) => {

    // Irá executar alguma ação, caso o usuário tecle ENTER
    if(event.key === 'Enter'){

        // Incrementa as tentativas
        tentativas++;

        // Obter a tag H1
        let retorno = document.getElementById('retorno');
        
        // Converter o valor recebido via parâmetro em um número inteiro
        let valorConvertido = parseInt(valor);

        // Descobre a diferença entre o número gerado e o valor informado pelo usuário
        let diferenca = numeroGerado > valorConvertido ? numeroGerado - valorConvertido : valorConvertido - numeroGerado;

        // Retorno
        if(diferenca == 0){
            // Realiza a condicional abaixo quando acertar o valor gerado
            if(tentativas == 1){
                retorno.innerHTML = `Finalizado! <br> Acertou de primeira!`;
            }else if(tentativas == 2){
                retorno.innerHTML = `Finalizado! <br> Errou apenas uma!`;
            }else{
                retorno.innerHTML = `Finalizado! <br> Foram realizadas ${tentativas} tentativas.`;
            }
        }else if(diferenca <= 5){
            retorno.innerText = 'Quase!';
        }else if(diferenca <= 10){
            retorno.innerText = 'Perto!';
        }else if(diferenca <= 20){
            retorno.innerText = 'Longe!';
        }else{
            retorno.innerText = 'Muito longe!';
        }

    }

}