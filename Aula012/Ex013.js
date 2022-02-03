var agora = new Date()
var diaSemena = agora.getDay()

switch(diaSemena) {
    case 0:
        console.log(`Hoje é ${diaSemena}`+ ('Domingo'))
    break;
    case 1:
        console.log(`Hoje é ${diaSemena}` + (' Segunda-Feira'))
    break;
    case 2:
    console.log(`Hoje é ${diaSemena}` + (' Terça-Feira'))
    break;
    case 3:
    console.log(`Hoje é ${diaSemena}` + (' Quarta-Feira'))
    break;
    case 4:
    console.log(`Hoje é ${diaSemena}` + (' Quinta-Feira'))
    break;
    case 5:
    console.log(`Hoje é ${diaSemena}` + (' Sexta-Feira'))
    break;
    case 6:
    console.log('Sabado')
    break;
    default:
        console.log('[EROO] Dia Invalido')
        break;
}