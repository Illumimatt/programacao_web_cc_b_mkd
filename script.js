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
        alert("Cartão de credito só pode ter numeros, pontos e hifens")
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
//podendo ser 1234.1234.1234.1234-12
//ou 123412341234123416