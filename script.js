function soma (p1,p2){
    let result = p1 + p2;
    console.log(result);
    return result;
}
soma(15, 876);

function VerificaTipo(x){
    console.log(x +" "+ typeof(x));
    return x;
}
VerificaTipo("abobora");

function somarNotas(nota1,nota2,nota3,nota4){
    if(typeof(nota1) === "number" && typeof(nota2) === "number" 
    && typeof(nota3) === "number" && typeof(nota4) === "number") {
        let media = nota1 + nota2 + nota3 + nota4;
        console.log(media);       
    }else{
        console.log("A função só pode receber números");
    }
}
somarNotas(5,5,5,5);
