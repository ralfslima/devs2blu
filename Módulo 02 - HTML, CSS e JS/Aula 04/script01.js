const calcular = () => {

    // Obter o objeto de formulário
    let formulario = document.getElementById('formulario');

    // Extrair as notas
    let nota1 = parseFloat(formulario.nota1.value);
    let nota2 = parseFloat(formulario.nota2.value);
    let nota3 = parseFloat(formulario.nota3.value);

    // Realizar cálculo de média
    const media = (nota1+nota2+nota3)/3;

    // Realizar a situação
    let situacao = media >= 7 ? 'aprovado' : media >= 5 ? 'recuperação' : 'reprovado';

    // Alterar a cor da fonte do H1 (Poderia utilizar o operador ternário acima, mas separei para deixar o código mais organizado)
    let corFonte = media >= 7 ? 'green' : media >= 5 ? 'orange' : 'red';

    // Armazenar os elementos HTML (H1) em variáveis
    let exibirMedia = document.getElementById('exibirMedia');
    let exibirSituacao = document.getElementById('exibirSituacao');

    // Exibir nos elementos HTML (H1)
    exibirMedia.innerText = `Média: ${media.toFixed(2)}`;
    exibirSituacao.innerText = `Situação: ${situacao}`;

    // Alterar fonte do H1
    exibirMedia.style.color = corFonte;
    exibirSituacao.style.color = corFonte;

    // Retornar falso (para que a página não atualize)
    return false;
}