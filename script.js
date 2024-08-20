let titulo = document.getElementById("titulo").value;

console.log(titulo);
function submeter() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let ncc = document.getElementById("ncc").value;
    console.log(nome);
    console.log(idade);
    console.log(email);
    console.log(ncc);
    console.log(validaIdade(idade))
    console.log(validaNCC(ncc));
}

function validaNCC(ncc){
    if(ncc==""){
        alert("Cartão de credito não pode ser vazio");
        return false;
    }
    ncc = ncc.trim();

    if(/[a-zA-Z]/.test(ncc)){
        alert("Cartão de credito não pode conter letras");
        return false;
    }

    if(!/^[\d.-]+$/.test(ncc)) {
        alert("Cartão de credito só pode ter numeros, pontos e hifens");
        return false;
    }

    if(ncc.length != 11 && ncc.length != 14) {
        alert("Numero errado de caracteres do cartão");
        return false;
    }

    ncc = ncc.replace(/[.-]/g, '');

    let soma = 0;
    for (let i = 1; i <= 9; i++) {
        console.log(ncc.charAt(i-1));
        soma = soma + ncc.charAt(i-1) *(10 - (i-1));
    }
    let resto = soma % 11;
    if(resto < 2){
        if (ncc.charAt(9) != 0){
            alert("cpf invalido")
            return false;
        }
    
    }

    let digitoverificador1= 11 - resto;
    if (digitoverificador1 != ncc.charAt(9)){
        alert("digito verificador 1 errado");
        return false
    }

    let soma2 = 0;
    for (let i = 1; i <= 10; i++) {
        console.log(ncc.charAt(i-1));
        soma2 = soma2 + ncc.charAt(i-1) *(11 - (i-1));
    }
    let resto2 = soma2 % 11
    if(resto2 < 2){
        if (ncc.charAt(10) != 0){
            alert("numero verificador2 invalido")
            return false;
        }
        return true;
    }
    
    let digitoverificador2= 11- resto2;
    if (digitoverificador2 != ncc.charAt(10)){
        alert("cpf invalido2");
        return false
    }

    return true
}
function validaIdade(idade){
    if (idade > 150){
        alert("muito velho foi de caixa")
        return false;
    }
    return true
}

//continuar validacao ncc valido 16 digitos com . e -
//podendo ser 1234.1234.1234.1234-123 validar se esse os pontos e hifen tao no lugar correto
//ou 1234123412341234163