 function carregar() {
    var msg = window.document.getElementById('msg') // criamos objeto relacionado com a div msg
    var img = window.document.getElementById('imagem') // criamos este objeto relacionando com a div imagem.
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#ccb33f'
    } else if (hora < 18) {
        //Boa Tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#b9805c'
    } else{
        //Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#4882a5'
    }
 }