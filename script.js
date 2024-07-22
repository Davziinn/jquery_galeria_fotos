$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault()

        const enderecoImgNova = $('#endereco-img-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImgNova}" />`).appendTo(novoItem);

        $(
            `<div class="overlay-imagem-link">
                <a href="${enderecoImgNova}" target="_blank" title="ver imagem em tamanho real">
                    Ver Imagem Em Tamanho Real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})