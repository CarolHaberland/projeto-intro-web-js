
const formulario = document.querySelector("#form-student")

formulario.addEventListener("submit", function (e){

    document.getElementById("message-error").innerHTML = "";

    e.preventDefault();

    let infoForm = new FormData(e.target);
    let estudante = Object.fromEntries(infoForm.entries());

    if(!validateForm(estudante)){
        return false
    }
    
    insertApprovedStudent(estudante);
})

const insertApprovedStudent = (estudante) =>{
    let aprovado = `
        <h3>Aluno matriculado</h3>
        <img src="../../assets/Vector (1).svg">
        <p>Nome: ${estudante.nome}</p>
        <p>Curso: ${estudante.curso}</p>
        <p>Turma: ${estudante.turma}</p>
        
    `;

    document.getElementById("aprovado").innerHTML = aprovado;
}

const validateForm = (estudante) => {
    if(estudante.curso != "HTML e CSS" && estudante.curso != "Javascript" && estudante.curso != "APIsRest"){
        document.getElementById("message-error").innerHTML = "Curso não encontrado!";
        return false
    }

    return true

}






