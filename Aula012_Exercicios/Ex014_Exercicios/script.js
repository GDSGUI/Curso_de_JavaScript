function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'Foto_Manha.png'
        document.body.style.background = '#26f1ff'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'Foto_Tarde.png'
        document.body.style.background = '#a6a5a4'
    } else {
        img.src = 'Foto_Noite.png'
        document.body.style.background = '#515154'
    }
}