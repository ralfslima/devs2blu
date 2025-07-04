// Função para realizar o fatorial
const acao = (event, valor) => {

    // Irá executar alguma ação, caso o usuário tecle ENTER
    if(event.key === 'Enter'){

        // Obter a tag h1
        let retorno = document.getElementById('retorno');
        
        // Converter o valor recebido via parâmetro em um número inteiro
        let valorConvertido = parseInt(valor);

        // Variável para armazenar o valor do fatorial
        let total = 0;

        // Laço de repetição para realizar o fatorial
        for(let indice=valorConvertido-1; indice>0; indice--){
            // Condicional (A primeira vez, iremos multiplicar o valor enviado pelo usuário pelo índice. Nas demais, iremos multiplicar o total pelo índice)
            if(indice == valorConvertido-1){
                total = valorConvertido * indice;
            }else{
                total = total * indice
            }
        }

        // Exibe o fatorial
        retorno.innerHTML = `O fatorial de ${valorConvertido} é ${total}`;

        

    }

}