var num = [0, 2, 5,7]
num[4] = 6
num.push(10) // acrescenta elemento no array
num.length // não usa parentêses como em outras linguagens. É um atributo - nào confundir com método. Verifica quantos elementos têm no vetor.
num.sort // ordena elementos

console.log(`Nosso vetor é  ${num}.`) // vetor = array
console.log(`Nosso vetor tem ${num.length} elementos!`)
console.log(`O primeiro elemento desse vetor é ${num[0]}.`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O Valor não foi encontrado.')
} else {
    console.log(`O valor 5 está na posição ${pos}.`)
}
