// Função para realizar a tabuada
const acao = (event, valor) => {

    // Irá executar alguma ação, caso o usuário tecle ENTER
    if(event.key === 'Enter'){

        // Obter a tag p
        let retorno = document.getElementById('retorno');
        
        // Converter o valor recebido via parâmetro em um número inteiro
        let valorConvertido = parseInt(valor);

        // Limpar o conteúdo do p (caso alguma tabuada já tenha sido realizada)
        retorno.innerHTML = '';

        // Laço de repetição
        for(let indice=0; indice<11; indice++){
            retorno.innerHTML += `${valorConvertido} X ${indice} = ${valorConvertido*indice}<br>`;
        }

    }

}