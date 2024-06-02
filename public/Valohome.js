var menuItem = document.querySelectorAll('.item-menu');

function selectLink(){
    menuItem.forEach((item) => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

menuItem.forEach((item) => item.addEventListener('click', selectLink));

// Expandir o menu lateral
var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir');
});

// URL base da API
const API_BASE_URL = "http://localhost:8080/users";

const agentsData = [
    { id: 1, name: "Jett", imageUrl: "img/Jett_Artwork_Full.png" },
    { id: 2, name: "Breach", imageUrl: "img/Breach_Artwork_Full.png" },
    { id: 3, name: "Omen", imageUrl: "img/Omen_Artwork_Full.png" },
    { id: 4, name: "Brimstone", imageUrl: "img/Brimstone_Artwork_Full.png" },
    { id: 5, name: "Phoenix", imageUrl: "img/Phoenix_Artwork_Full.png" },
    { id: 6, name: "Sage", imageUrl: "img/Sage_Artwork_Full.png" },
    { id: 7, name: "Sova", imageUrl: "img/Sova_Artwork_Full.png" },
    { id: 8, name: "Viper", imageUrl: "img/Viper_Artwork_Full.png" },
    { id: 9, name: "Clove", imageUrl: "img/Clove_Artwork_Full.png" },
    { id: 10, name: "Raze", imageUrl: "img/Raze_Artwork_Full.png" },
    { id: 11, name: "Cypher", imageUrl: "img/Cypher_Artwork_Full.png" },
    { id: 12, name: "Killjoy", imageUrl: "img/Killjoy_Artwork_Full.png" },
];

// Função para criar os cards dos agentes
function createAgentCards() {
    const container = document.getElementById("agents-container");

    agentsData.forEach(agent => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${agent.imageUrl}" alt="${agent.name}">`;
        card.addEventListener("click", () => fetchAgentInfo(agent.id));
        container.appendChild(card);
    });
}

// Função para buscar e exibir informações do agente ao clicar no card
function fetchAgentInfo(agentId) {
    fetch(`${API_BASE_URL}/${agentId}`)
        .then(response => response.json())
        .then(agent => displayAgentInfo(agent))
        .catch(error => console.error('Error fetching agent data:', error));
}

// Função para exibir informações do agente em um modal
function displayAgentInfo(agent) {
    const modal = document.getElementById("agent-info-modal");
    const modalContent = document.getElementById("agent-info");
    const closeModal = document.querySelector(".close");

    modalContent.innerHTML = `<h2>${agent.name}</h2><p>${agent.bio}</p><p>Classe: ${agent.classe}</p>`;
    modal.style.display = "block";

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Inicializa a criação dos cards ao carregar a página
window.onload = createAgentCards;
