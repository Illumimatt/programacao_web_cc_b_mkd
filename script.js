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
    console.log(validaNCC(ncc));
}

function validaNCC(ncc){
    if(ncc==""){
        alert("Cartão de credito não pode ser vazio");
        return false;
    }
    return true
}