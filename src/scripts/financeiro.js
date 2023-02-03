const estudantes = [
    {
        estudante: "João",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "900",
        nParcelas: 1,
        desconto: true,
        parcelas: 720

    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500",
        nParcelas: 1,
        desconto: true,
        parcelas: 400

    },
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "2000",
        nParcelas: 9,
        desconto: false,
        parcelas: 100

    },
    {
        estudante: "Orlando",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500",
        nParcelas: 8,
        desconto: false,
        parcelas: 62.5

    },
    {
        estudante: "Isadora",
        turma: "Sibyla",
        curso: "JavaScript",
        valor: "900",
        nParcelas: 9,
        desconto: false,
        parcelas: 100

    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: "2000",
        nParcelas: 4,
        desconto: false,
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


// Relatorio Aluno

const relatAluno = (alunoPesquisado) =>{
    document.getElementById("relat-Aluno").innerHTML = ""
    if(alunoPesquisado == ""){
        document.getElementById("relat-Aluno").innerHTML = "<p>Aluno não encontrado</p>"
        return
    }
    const relatorio = estudantes.map((cadaAlunoEncontrado) => {
        if(cadaAlunoEncontrado.estudante.toUpperCase().includes(alunoPesquisado.toUpperCase())){
            return `<h3>Aluno encontrado</h3>
            <p><strong>Aluno:</strong> ${cadaAlunoEncontrado.estudante}</p>
            <p><strong>Turma:</strong> ${cadaAlunoEncontrado.turma}</p>
            <p><strong>Curso:</strong> ${cadaAlunoEncontrado.curso}</p>
            <p><strong>Valor Total:</strong> ${cadaAlunoEncontrado.valor}</p>
            <p><strong>Valor Parcela:</strong> ${cadaAlunoEncontrado.parcelas}</p>
            <p><strong>Nº Parcelas:</strong>${cadaAlunoEncontrado.nParcelas}</p> `
            
        }

    }).join("")

    document.getElementById("relat-Aluno").innerHTML = relatorio
}

const inputBotaoRelatAluno = document.getElementById("formbotao")
inputBotaoRelatAluno.addEventListener("click", function(e){
    relatAluno(document.getElementById("nome").value)
})

// Financeiro

//primeira parte
// pesquisar os tres cursos
/* const encontrarCurso = (cursoPesquisado) =>{
    document.getElementById("curso-Pesquisado").innerHTML = ""
    const cursoEncontrado = cursos.map((cadaCursoEncontrado)=>{
        if(cadaCursoEncontrado.curso.toLowerCase().includes(cursoPesquisado.toUpperCase())){
            return `<p>${cadaCursoEncontrado.curso}</p>`

        }
    })

    document.getElementById("cursoPesquisado").innerHTML = cursoEncontrado
} */


// puxar dos tres cursos o valor total de cada


//segunda parte
//em cima do numero de parcelar mostrar o resultado do calculo se possue desconto e quanto ficou cada parcela

const buscarCurso = (nome) =>{
    for(let i = 0 ; i < cursos.length; i++){
        if(nome.toUpperCase() === cursos[i].curso.toUpperCase()){
            //console.log(cursos[i])
            return cursos[i]   
        }
    }
}


let carrinhoCursos = []
console.log(carrinhoCursos)
const carrinho = () => {

    let totalDesconto = document.getElementById("total-Desconto")
    totalDesconto.innerHTML = ""

    const inputCurso = document.getElementById("cursoPesquisado").value.toLowerCase()
    const valorCurso = buscarCurso(inputCurso)

    if(!valorCurso){
        alert("Curso inexistente!")
        return
    }   
    

    let cursosAdicionados = document.getElementById("cursosAddCarrinho")
    if (cursosAdicionados.innerHTML.includes(inputCurso)) {
        alert("O curso já foi adicionado, escolha outro!")
    } else {
        cursosAdicionados.innerHTML += `<p>${inputCurso}</p> `
        carrinhoCursos.push(valorCurso.valor)
    }


    document.getElementById("cursoPesquisado").value = ""
}

const parcelarCurso = () => {
    let valorTotal = 0
    let desconto = 0
    let desconto20 = 0.2
    let valorParcela = 0
    let parcela = + document.getElementById("nParcelas").value
    console.log(parcela)


    
    let totalDesconto = document.getElementById("total-Desconto")
     totalDesconto.innerHTML = ""
     document.getElementById("nParcelas").value=""
     

    if (carrinhoCursos.length == 0) {
        totalDesconto.innerHTML = `<p>Favor adicionar um curso.</p>`
        return
    }
    switch (carrinhoCursos.length) {
        case 3:
            desconto = 0.15
            break;
        case 2:
            desconto = 0.10
            break;
        case 1:
            desconto = 0
            break;
        default:
            desconto = 0
            break;
        }
    for (let valor of carrinhoCursos) {
        valorTotal += valor
        }
    if(parcela <= 2){
        desconto = desconto + 0.2
    }


    if (parcela <= 2 && carrinhoCursos.length === 3) {
        valorTotal -= valorTotal * (desconto)
        valorParcela = valorTotal / parcela

        totalDesconto.innerHTML = (`<h3>Valor:</h3> <p style="font-weight:200">R$ ${valorTotal}, você recebeu 15% por ter escolhido 3 cursos e mais 20% pela forma de pagamento a vista ou em 2x.
        Valor por parcela ${parcela}x de R$ ${valorParcela.toFixed(2)}</p>`)


    } else if (parcela <= 2 && carrinhoCursos.length === 2) {
        valorTotal -= valorTotal * (desconto)
        valorParcela = valorTotal / parcela

        totalDesconto.innerHTML = `<p style="font-weight:200"> O valor do pagamento é de R$ ${valorTotal}, dois cursos possuem o desconto de 10% mais 20% a vista ou em 2x. Valor parcelado fica em ${parcela}x de R$ ${valorParcela.toFixed(2)} </p>`

    } else if (parcela <= 2 && carrinhoCursos.length === 1) {
        valorTotal -= valorTotal * desconto
        valorParcela = valorTotal / parcela

        totalDesconto.innerHTML = `<p style="font-weight:200"> O valor do pagamento é de R$ ${valorTotal}, você recebeu um desconto de 20% por ter escolhido a forma de pagamento a vista ou em 2x. Valor parcelado fica em ${parcela}x de R$ ${valorParcela.toFixed(2)}</p>`

    } else if (desconto > 0) {
        valorTotal -= valorTotal * desconto
        valorParcela = valorTotal / parcela
        
        totalDesconto.innerHTML = `<p style="font-weight:200"> O valor do pagamento é de R$ ${valorTotal}, você recebeu um desconto de ${desconto*100}%. Valor parcelado fica em ${parcela}x de R$ ${valorParcela.toFixed(2)}</p>`

    } else {
        valorParcela = valorTotal / parcela
        totalDesconto.innerHTML = (`<h3>Valor: </h3><p style="font-weight:200">R$${valorTotal},00. Confira condições de pagamento.</p>`)
        
    }

}
    


