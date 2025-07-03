const calcular = (tipoMoeda) => {

    // Valores
    const dolar = 5.41;
    const euro = 6.36;
    const libra = 7.38;
    const bitcoin = 594065; // 1 Bitcoin em Reais (aproximadamente)

    // Obter a tag HTML de imagem
    let imagemMoeda = document.getElementById('imagemMoeda');

    // Obter o valor informado
    const valor = parseFloat(document.getElementById('valor').value);

    // Obter elemento HTML para retornar a conversão
    let valorConvertido = document.getElementById('valorConvertido');

    // Retornar a conversão
    switch (parseInt(tipoMoeda)) {
        case 1:
            imagemMoeda.src = 'imagens/dolar';
            valorConvertido.innerText = `$ ${(valor / dolar).toFixed(2)}`;
        break;
    
        case 2:
            imagemMoeda.src = 'imagens/euro';
            valorConvertido.innerText = `€ ${(valor / euro).toFixed(2)}`;
        break;
    
        case 3:
            imagemMoeda.src = 'imagens/libra';
            valorConvertido.innerText = `£ ${(valor / libra).toFixed(2)}`;
        break;
    
        case 4:
            imagemMoeda.src = 'imagens/bitcoin';
            valorConvertido.innerText = `₿ ${(valor / bitcoin).toFixed(8)}`;
        break;

        default:
            imagemMoeda.src = 'imagens/moeda.png';
            valorConvertido.innerText = '';
        break;
    }
}
