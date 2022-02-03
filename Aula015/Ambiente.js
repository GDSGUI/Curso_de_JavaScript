var num = [1, 8,  2,9, 5]
num.push(0)
num.sort()
console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O Primeiro Valor do Vetor é ${num[0]}`)
let pos = num.indexOf(8)
if( pos == -1){
    console.log('Valor Não Encontrado')
} else {
    console.log(`O Valor está na Posição: ${pos}`)
}