let participantes = [
    {
    nome: "Cecilia Luz",
    email: "ceciliaLz@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 3, 1, 22, 0)
    },
    {
    nome: "Ricardo Oliveira",
    email: "ricardooli@gmail.com",
    dataInscricao: new Date(2024, 2, 2, 19, 25),
    dataCheckIn: new Date(2024, 3, 5, 21, 40)
    },
    {
    nome: "Camila Silva",
    email: "camilasilva@gmail.com",
    dataInscricao: new Date(2024, 1, 15, 12, 10),
    dataCheckIn: new Date(2024, 2, 20, 15, 30)
    },
    {
    nome: "Fernando Santos",
    email: "fernandosantos@gmail.com",
    dataInscricao: new Date(2024, 2, 15, 8, 45),
    dataCheckIn: new Date(2024, 3, 4, 10, 20)
    },
    {
    nome: "Patricia Costa",
    email: "patriciacosta@gmail.com",
    dataInscricao: new Date(2024, 2, 5, 14, 30),
    dataCheckIn: new Date(2024, 2, 10, 17, 15)
    },
    {
    nome: "Gustavo Almeida",
    email: "gustavoalmeida@gmail.com",
    dataInscricao: new Date(2024, 1, 18, 20, 0),
    dataCheckIn: new Date(2024, 1, 23, 22, 30)
    },
    {
    nome: "Carla Oliveira",
    email: "carlaoliveira@gmail.com",
    dataInscricao: new Date(2024, 0, 28, 9, 15),
    dataCheckIn: new Date(2024, 2, 26, 11, 45)
    },
    {
    nome: "Roberto Pereira",
    email: "robertopereira@gmail.com",
    dataInscricao: new Date(2024, 2, 12, 16, 50),
    dataCheckIn: new Date(2024, 2, 17, 19, 20)
    },
    {
    nome: "Marina Fernandes",
    email: "marinafernandes@gmail.com",
    dataInscricao: new Date(2024, 1, 24, 11, 40),
    dataCheckIn: null
    },
    {
    nome: "Pedro Alves",
    email: "pedroalves@gmail.com",
    dataInscricao: new Date(2024, 3, 2, 18, 30),
    dataCheckIn: null
    }
];


const criarNovoParticipante = (participante) => { 
    
    const dataInscricao = dayjs(Date.now())
    .to(participante.dataInscricao)

    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

     //condicional
    if(participante.dataCheckIn == null){
    dataCheckIn = `
    <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
    >
        Confirmar check-in
    </button>
    `
    }

    return `
    <tr>
    <td>
        <strong>
        ${participante.nome}
        </strong>
        <br>
        <small>
        ${participante.email}
        </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
    </tr>`}


const atualizarLista = (participantes) => { 
    let output = ""
    // estrutura de repeição - loop
    for(let participante of participantes) { 
      //faça algo aqui
      // criando variavel pra usar um participante  
    output = output + criarNovoParticipante(participante)
    }
    
    //pegar informação do HTML
    //substituir informação do HTML
    document
    .querySelector('tbody')
    .innerHTML = output
  } //arrow function

atualizarLista(participantes)

const adicionarParticipante = (event) =>{
    event.preventDefault()

    const formdate = new FormData(event.target)

    const participante = { 
    nome: formdate.get('nome'),
    email: formdate.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
    }

    //verificar de participante ja existe
    const participanteExiste = participantes.find((p) => p.email == participante.email
)

    if(participanteExiste){
    alert('Email já cadastrado"!')
    return
    }

    participantes = [participante,...participantes]

    atualizarLista(participantes)
    
    //limpar formulario
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value
}

const fazerCheckIn = (event) => { 
    //confirmar se quer fazer check-in
    const mensagemConfirmacao = 'Tem certeza que deseja fazer check-in?'

    if(confirm(mensagemConfirmacao)== false){
    return
    }
    //encontrar participantre na lista
        const participante = participantes.find((p) => p.email == event.target.dataset.email
    )
    //atualizar o check-in do participante
    participante.dataCheckIn = new Date()
    //atualizar a lista de participantes
    atualizarLista(participantes)
}
