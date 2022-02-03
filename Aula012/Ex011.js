var idade = 19
if (idade < 16){
    console.log('Não Vota')
} else if(idade < 18 || idade >= 67) {
        console.log('Voto Opicional')
        if(idade >= 67){
            console.log('Você já tem 67 ou mais então é Opcional')
        }
} else {
    console.log('Voto Obrigatorio')
}