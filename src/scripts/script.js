const estudantes = [
    {
        estudante: "João",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "900",
        nParcelas: 1,
        desconto: "Sim",
        parcelas: 720

    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500",
        nParcelas: 1,
        desconto: "Sim",
        parcelas: 400

    },
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "2000",
        nParcelas: 9,
        desconto:  "Não",
        parcelas: 100

    },
    {
        estudante: "Orlando",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500",
        nParcelas: 8,
        desconto:  "Não",
        parcelas: 62.5

    },
    {
        estudante: "Isadora",
        turma: "Sibyla",
        curso: "JavaScript",
        valor: "900",
        nParcelas: 9,
        desconto:  "Não",
        parcelas: 100

    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: "2000",
        nParcelas: 4,
        desconto:  "Não",
        parcelas: 500

    }
]

const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "HTML e CSS do básico ao avançado.",
        duracao: "1 mês",
        valor: 500.00
    },
    {
        curso: "JavaScript",
        descricao: "Javascript do básico ao avançado.",
        duracao: "2 mês",
        valor: 900.00
    },
    {
        curso: "APIsRest",
        descricao: "APIsRest do básico ao avançado.",
        duracao: "26 mês",
        valor: 2000.00
    },
]

const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numAlunos: 150 ,
        periodo: "Noturno",
        concluido:  "Não"
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/12/2022",
        numAlunos: 200 ,
        periodo: "Integral",
        concluido: "Sim",
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numAlunos: 180 ,
        periodo: "Noturno",
        concluido: "Sim",
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numAlunos: 80 ,
        periodo: "Integral",
        concluido:  "Não"
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numAlunos: 200 ,
        periodo: "Noturno",
        concluido: "Sim",
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numAlunos: 100 ,
        periodo: "Integral",
        concluido: "Sim",
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numAlunos: 200 ,
        periodo: "Noturno",
        concluido: "Sim",
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numAlunos: 90 ,
        periodo: "Integral",
        concluido:  "Não"
    }
]

let carrinhoCursos = []

const buscarCurso = (nome) =>{
    for(let i = 0 ; i < cursos.length; i++){
        if(nome.toUpperCase() === cursos[i].curso.toUpperCase()){
            //console.log(cursos[i])
            return cursos[i]   
        }
    }
}


//buscarCurso('HTML e CSS')

const buscarTurma = (nomeTurma) =>{
    for(let i = 0 ; i < turmas.length; i++){
        if(nomeTurma.toUpperCase() === turmas[i].turma.toUpperCase()){
            //console.log(turmas[i])
            return turmas[i]   
        }
    }
}



const cardDaTurma = (turmasEncontradas, turmaPesquisada) =>{
    document.getElementById("cardTurmas").innerHTML = ""
    const cardTurma = turmasEncontradas.map((cadaTurmaEncontrada) =>{
        if(turmaPesquisada != undefined && !cadaTurmaEncontrada.turma.toUpperCase().includes(turmaPesquisada.toUpperCase())){
            return "";
        }
            return(`<div class="cardTurmas">
                <div class="titulo-Turma">
                <p style="font-size: 18px" class="paragrafo"><strong> ${cadaTurmaEncontrada.turma}</strong></p></div>
                <p class="paragrafo"><strong>Curso:</strong> ${cadaTurmaEncontrada.curso}</p>
                <p class="paragrafo"><strong>Inicio:</strong> ${cadaTurmaEncontrada.inicio}</p>
                <p><strong>Termino:</strong> ${cadaTurmaEncontrada.termino}</p>
                <p><strong>Numero de Alunos:</strong> ${cadaTurmaEncontrada.numAlunos}</p>
                <p><strong>Periodo:</strong> ${cadaTurmaEncontrada.periodo}</p>
                <p><strong>Concluido:</strong> ${cadaTurmaEncontrada.concluido}</p>
                </div>`
        )  
    }).join("")

    document.getElementById("cardTurmas").innerHTML = cardTurma 
}

const inputBuscarTurmas = document.getElementById("buscarTurma")
/* inputBuscarTurmas.addEventListener("input", function(e){
    console.log(e.target.value)
    cardDaTurma(turmas, e.target.value)
}) */
cardDaTurma(turmas) 

const inputBotaoTurmas = document.getElementById("botaoBuscar1")
inputBotaoTurmas.addEventListener("click", function(){
    console.log(inputBuscarTurmas.value)
    cardDaTurma(turmas, inputBuscarTurmas.value)
})
 




/* const criarCardTurma = (array) => { 
    const cardDaTurma = document.createElement("div")
    const tituloCard = document.createElement("h3")
    const infoCards = document.createElement("p")
    const infoCards1 = document.createElement("p")
    const infoCards2 = document.createElement("p")
    const infoCards3 = document.createElement("p")
    const infoCards4 = document.createElement("p")
    const infoCards5 = document.createElement("p")

    tituloCard.innerText = turmas.turma
    infoCards.innerText = turmas.curso
    infoCards1.innerText = turmas.inicio
    infoCards2.innerText = turmas.termino
    infoCards3.innerText = turmas.numAlunos
    infoCards4.innerText = turmas.periodo
    infoCards5.innerText = turmas.concluido
    
    cardDaTurma.append(tituloCard, infoCards, infoCards1, infoCards2, infoCards3, infoCards4, infoCards5)
    
    return cardDaTurma
}

let renderizarTurmas = (turmas) => {
    const containerDaTurma = document.getElementById("cardTurmas")
    
   
    turmas.map((criarCardTurma) => {
        containerDaTurma.append(cardDaTurma)
        criarCardTurma()

        return containerDaTurma
    })
}

renderizarTurmas()
console.log(renderizarTurmas(cardDaTurma))
  */
//buscarTurma('Burnell')

const buscarEstudante = (nomeEstudante) =>{
    for(let i = 0 ; i < estudantes.length; i++){
        if(nomeEstudante.toUpperCase() === estudantes[i].estudante.toUpperCase()){
            //console.log(estudantes[i])
            return estudantes[i]   
        }
    }
}

//buscarEstudante('Orlando')

// Pode ser feito com For of
/* const buscarCurso = (nomeCurso) => { 
    for(cadaCurso of cursos){
        if(cadaCurso.curso === nomeCurso)
        return cadaCurso
    }
} */
/* const buscarTurma = (nomeTuma) => { 
    for(cadaTuma of turmas){
        if(cadaTurma.turma === nomeTurma)
        return cadaTurma
    }
} */
/* const buscarEstudante = (nomeEstudente) => { 
    for(cadaEstudante of estudantes){
        if(cadaEstudante.estudante === nomeEstudante)
        return cadaEstudante
    }
} */


const matricular = (nome, curso, turma, numParcelas) => {
 
    let valorCurso = buscarCurso(curso)
    let valorTotal = 0
    let valorPorParcela  = 0
    let desconto = false
    
    if(numParcelas > 0 && numParcelas <= 2){
        desconto = true
        valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
        valorPorParcela = valorTotal / numParcelas
    }else{
        valorTotal = valorCurso.valor 
        valorPorParcela = valorTotal / numParcelas
    }
    
 
    const novoAluno = {
        estudante: nome,
        turma: turma,
        curso: curso,
        valor: valorCurso.valor,
        nParcelas: numParcelas,
        desconto: desconto,
        parcelas: valorPorParcela
    }

    estudantes.push(novoAluno)
    console.log(estudantes)
    console.log(`
    Aluno Matriculado
    Nome: ${nome}
    Curso: ${curso}
    Turma: ${turma}
    `)
}






/* const infoForm = document.querySelector("form-student");
const mensagemErro = document.querySelector("menssage-error")

infoForm.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = infoForm.elements.nome.value;

    if(nome === ""){
        mensagemErro.textContent = "Campo obrigatorio";
        return;
    }
    
    
})
 */


/* const infoFormulario = document.getElementById("form-student").addEventListener("submit", function (e) {
        document.getElementById("message-error").innerHTML = "";

        e.preventDefault();
        console.log("Form submitted!")
        // To pegando os valores do form e passando pra um objeto
        let infoForm = new FormData(e.target);
        let estudante = Object.fromEntries(infoForm.entries());

        // Pode fazer as validacoes aqui se precisar
        // ex.:
        if (!validateForm(estudante)) {
            return false;
        }

        // Se deu bom
        // Mostra la como aprovado
        infoFormulario(estudante);
    });
 */
/**
 * Função que insere a aprovação na tela
 */
/* const insertApproveStudent = (estudante) => {
    let aprovado = `
    <h2>Aprovado ${estudante.nome}</h2>
    <p>No Curso: ${estudante.curso}</p>
  `;

    document.getElementById("aprovado").innerHTML = aprovado;
}; */

/**
 * Função que valida a matricula
 */
/* const validateForm = (estudante) => {
    // Aqui voce pode adicionar oq qusier
    // validar os cursos que tem, sla
    if (estudante.curso != "HTML e CSS") {
        document.getElementById("message-error").innerHTML =
            "Só ensinamos HMTL e CSS, Javascript e APIrest";
        return false;
    }

    return true;
}; */

/* console.log(validateForm);

 const inputBotaoForm = document.getElementById("form-student") */
/* function stopAction (event){
    event.preventDefault();
}   */
/*  inputBotaoForm.addEventListener("submit", function(event){
    event.preventDefault()

})  */


/* const alunoMatriculado = estudantes.find((nome) =>{
    if(nome => estudantes.nome === nome){
        return( `<div class="alunoMatriculado">
            <h3>Aluno Matriculado</h3>
            <div>
                <p class="p-Matricula">Nome:${estudantes.nome}</p>
            </div>
            <div>
                <p class="p-Matricula">Curso:${estudantes.curso}</p>
            </div>
            <div>
                <p class="p-Matricula">Turma:${estudantes.turma}</p>
            </div>
        </div>`) 
    }
    else{
        return(
            `<h3>Aluno nao encontrado</h3>`
        )
    }
    
    document.getElementById("nome").innerHTML = nome
})




alunoMatriculado()  







/* const inputBotaoForm = document.getElementById("form") */
/* function stopAction (event){
    event.preventDefault();
} */
/* inputBotaoForm.addEventListener("onsubmit", function(event){
    event.preventDefault()
    const nome = document.getElementById("nome")
    nome(event.target)


   
    console.log(alunoMatriculado) */

/* })
 */
/* const alunoMatriculado = estudantes.find(nome => estudantes.nome === nome)
    return `<div class="alunoMatriculado">
                <h3>Aluno Matriculado</h3>
                <div>
                    <p class="p-Matricula">Nome:${estudantes.nome}</p>
                </div>
                <div>
                    <p class="p-Matricula">Curso:${estudantes.curso}</p>
                </div>
                <div>
                    <p class="p-Matricula">Turma:${estudantes.turma}</p>
                </div>
            </div>` */


matricular('Juliana', 'javascript', 'Hipatia', 5)




 const parcelaCurso = (carrinhoCursos, parcelas) =>{
    curso = 0
    desconto = 0
    totalCursos = 0
    desconto20 = ''
    if(carrinhoCursos.length >= 3){
        desconto = 0.15
    }
    if(carrinhoCursos.length == 2){
        desconto = 0.10
    }
    if(parcelas <= 2){
        desconto = desconto + 0.2
        desconto20 = 'Foi concedido desconto de 20%'
    }
    for(let valor of carrinhoCursos){
        totalCursos = totalCursos + valor
    }
    if(desconto > 0){
        resultado1 = totalCursos - desconto * totalCursos
        resultado2 = resultado1 / parcelas //calculo que vai retornar o valor com desconto
        console.log(`O curso ficou no valor total de ${resultado1}. Em ${parcelas}x de ${resultado2.toFixed(2)}.${desconto20}`)
    }
    else{
        resultado3 = totalCursos / parcelas //calculo que vai retornar o valor sem desconto
        console.log(`O curso ficou no valor total de ${cursos[curso].valor}. Em ${parcelas} x de R$ ${resultado3.toFixed(2)} reais.`)
    }
}

const valoresCurso = (nomeCurso) =>{
    carrinhoCursos.push(buscarCurso(nomeCurso).valor)
    console.log(buscarCurso(nomeCurso).valor)
}
valoresCurso('JavaScript')
valoresCurso('APIsREST')

parcelaCurso(carrinhoCursos,1) 

const relatorioEstudante = (relNome) =>{
    relEstudante = buscarEstudante(relNome)
    console.log(`
    Aluno: ${relEstudante.estudante}
    Turma: ${relEstudante.turma}
    Curso: ${relEstudante.curso}
    Valor Total: ${relEstudante.valor}
    Valor Parcela: ${relEstudante.parcelas}
    Nº Parcelas:${relEstudante.nParcelas} `)
}

relatorioEstudante('Isadora')



