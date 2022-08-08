let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let vet = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}
 function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
 }

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, vet)){
        vet.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valores inválidos ou já encontrados na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(vet.lenght == 0){
        alert('Adicione valores antes de finalizar')
    }else {
        let tot = vet.length
        let maior = vet[0]
        let menor = vet[0]
        let soma = 0
        let media = 0
        
        for(let pos in vet) {
            soma += vet[pos]
            if (vet[pos] > maior)  
                maior = vet[pos]
            if (vet[pos] < menor)
                menor = vet[pos]                
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.`
        res.innerHTML += `<p>A média de todos os valores é ${media}.`
    }
}