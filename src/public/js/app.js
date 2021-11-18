const socket = io('http://localhost:3333', {
    transports: ['websocket']
});

socket.on('chat', (res) => {
    exibirMensagem(res.usuario, res.mensagem);
})

function enviar() {
    const usuario = document.querySelector('#usuario').value;
    const mensagem = document.querySelector('#mensagem').value;

    socket.emit('chat', {
        usuario, mensagem
    })
    exibirMensagem('EU', mensagem);
}

function exibirMensagem(usuario, mensagem) {
    let bg = usuario === 'EU' ? 'alert-light' : 'alert-success text-end';
    let mensagens = document.querySelector('#mensagens').innerHTML;
    mensagens += `<div class="alert ${bg}">
                <h4 class="m-0">${usuario}</h4>
                <p class="m-0">${mensagem}</p>
                </div>`;
    document.querySelector('#mensagens').innerHTML = mensagens;
    document.querySelector('#mensagens').scrollTo(0, document.body.scrollHeight);
    document.querySelector('#mensagem').value = '';
}