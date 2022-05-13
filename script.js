let btn = document.getElementById('botao')

btn.addEventListener("click", function() {
    let person = document.getElementById('pessoa')
    let height = document.getElementById('altura')
    let weight = document.getElementById('peso')
    if (person.value == '' || height.value == 0 || weight.value == 0) {
        window.alert('Por favor, preencha todas as informações.')
    } else if (height.value < 0 || weight.value < 0) {
        window.alert('Os valores inseridos são inválidos, por favor tente novamente.')
    } else {
        var result = document.getElementById('resultado')
        result.value = ''
        height = Number(height.value)
        weight = Number(weight.value)
        height /= 100
        let m = 0
        m = Number(m.value)
        m = weight / height ** 2
        if (m < 16) {
            var res = 'Baixo peso, muito grave'
        } else if (m < 17) {
            var res = 'Baixo peso, grave'
        } else if (m < 18.50){
            var res = 'Baixo peso'
        } else if (m < 25) {
            var res = 'Peso normal'
        } else if (m < 30) {
            var res = 'Sobrepeso'
        } else if (m < 35) {
            var res = 'Obesidade grau I'
        } else if (m < 40) {
            var res = 'Obesidade grau II'
        } else {
            var res = 'Obesidade grau III'
        }
        var quadroResultado = document.getElementById('div-res')
        quadroResultado.style = 'display: block'
        result.innerHTML = `<i>${person.value[0].toUpperCase() + person.value.slice(1)}</i> possui índice de massa corporal igual a <i>${m.toFixed(2)}</i>, sendo classificado(a) como: <i>${res}</i>.`
    
        person.value = ''
        document.getElementById('altura').value = ''
        document.getElementById('peso').value = ''
        
    }
    person.focus()
})