console.log("Space Launch Dash running");

const moveTo = (item, spot) => (spot <= 6 ? item.style.setProperty("grid-column", spot) : null);

let apollo_spot = 1;
let nebula_spot = 1;
let comet_spot  = 1;

// Query Selectors
const apolloBtn   = document.querySelector("#apollo-btn");
const nebulaBtn   = document.querySelector("#nebula-btn");
const cometBtn    = document.querySelector("#comet-btn");

const apolloRocket = document.querySelector("#apolllo-rocket");
const nebulaRocket = document.querySelector("#nebula-rocket");
const cometRocket  = document.querySelector("#comet-rocket")

const winnerBox = document.querySelector("#winner");

// Click Handlers
const boostApollo = () => {
  apollo_spot++;
  moveTo(apolloRocket, apollo_spot);
  checkWinner("Apollo", apollo_spot);
};

const boostNebula = () => {
    nebula_spot++;
    moveTo(nebulaRocket, nebula_spot);
    checkWinner("Nebula", nebula_spot);
};

const boostComet = () => {
    comet_spot++;
    moveTo(cometRocket, comet_spot);
    checkWinner("Comet", comet_spot);

};

// Winner Check
const checkWinner = (name, spot) => {
    if (spot >= 6) {
        winnerBox.textContent = name + "wins the launch! 🚀";
        apolloBtn.disabled = true;
        nebulaBtn.disabled = true;
        cometBtn.disbaled = true;
    }
}

// Events

apolloBtn.addEventListener("click", boostApollo);
nebulaBtn.addEventListener("click", boostNebula);
cometBtn.addEventListener("click", boostComet);