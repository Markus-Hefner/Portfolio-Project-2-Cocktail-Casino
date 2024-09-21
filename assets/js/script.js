let checkboxAllSpirits = document.querySelector("input[id=check-all-spirits]");
checkboxAllSpirits.addEventListener('change', checkAllSpirits);

/** This function selects/unselect all spirits */
function checkAllSpirits() {
    if (this.checked === true) {
        console.log("Checkbox is checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('spirits');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah2"); // Checkpoint
            checkbox[i].checked = true;
        }
    } else if (this.checked === false) {
        console.log("Checkbox is not checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('spirits');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah3"); // Checkpoint
            checkbox[i].checked = false;
        }
    }
}

let checkboxAllLiqueurs = document.querySelector("input[id=check-all-liqueurs]");
checkboxAllLiqueurs.addEventListener('change', checkAllLiqueurs);

/** This function selects/unselect all liqueurs */
function checkAllLiqueurs() {
    if (this.checked === true) {
        console.log("Checkbox is checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('liqueurs');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah2"); // Checkpoint
            checkbox[i].checked = true;
        }
    } else if (this.checked === false) {
        console.log("Checkbox is not checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('liqueurs');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah3"); // Checkpoint
            checkbox[i].checked = false;
        }
    }
}

let checkboxAllBitters = document.querySelector("input[id=check-all-bitters]");
checkboxAllBitters.addEventListener('change', checkAllBitters);

/** This function selects/unselect all bitters */
function checkAllBitters() {
    if (this.checked === true) {
        console.log("Checkbox is checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('bitters');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah2"); // Checkpoint
            checkbox[i].checked = true;
        }
    } else if (this.checked === false) {
        console.log("Checkbox is not checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('bitters');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah3"); // Checkpoint
            checkbox[i].checked = false;
        }
    }
}

let checkboxAllSweets = document.querySelector("input[id=check-all-sweets]");
checkboxAllSweets.addEventListener('change', checkAllSweets);

/** This function selects/unselect all sweets */
function checkAllSweets() {
    if (this.checked === true) {
        console.log("Checkbox is checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('sweets');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah2"); // Checkpoint
            checkbox[i].checked = true;
        }
    } else if (this.checked === false) {
        console.log("Checkbox is not checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('sweets');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah3"); // Checkpoint
            checkbox[i].checked = false;
        }
    }
}

let checkboxAllSours = document.querySelector("input[id=check-all-sours]");
checkboxAllSours.addEventListener('change', checkAllSours);

/** This function selects/unselect all sours */
function checkAllSours() {
    if (this.checked === true) {
        console.log("Checkbox is checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('sours');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah2"); // Checkpoint
            checkbox[i].checked = true;
        }
    } else if (this.checked === false) {
        console.log("Checkbox is not checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('sours');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah3"); // Checkpoint
            checkbox[i].checked = false;
        }
    }
}

let checkboxAllJuices = document.querySelector("input[id=check-all-juices]");
checkboxAllJuices.addEventListener('change', checkAllJuices);

/** This function selects/unselect all juices */
function checkAllJuices() {
    if (this.checked === true) {
        console.log("Checkbox is checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('juices');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah2"); // Checkpoint
            checkbox[i].checked = true;
        }
    } else if (this.checked === false) {
        console.log("Checkbox is not checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('juices');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah3"); // Checkpoint
            checkbox[i].checked = false;
        }
    }
}

let checkboxAllMixers = document.querySelector("input[id=check-all-mixers]");
checkboxAllMixers.addEventListener('change', checkAllMixers);

/** This function selects/unselect all mixers */
function checkAllMixers() {
    if (this.checked === true) {
        console.log("Checkbox is checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('mixers');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah2"); // Checkpoint
            checkbox[i].checked = true;
        }
    } else if (this.checked === false) {
        console.log("Checkbox is not checked.."); // Checkpoint
        let checkbox = document.getElementsByClassName('mixers');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah3"); // Checkpoint
            checkbox[i].checked = false;
        }
    }
}

let button = document.getElementById('create-cocktail-button');
button.addEventListener("click", checkedSpiritList);



/**This function pushes checked spirits to the checkedSpiritArray */
function checkedSpiritList() {
    let spiritList = document.getElementsByClassName('spirits');
    let checkedSpiritArray = [];
    for (let i = 0; i < spiritList.length; i++) {
        if (spiritList[i].checked === true) {
            checkedSpiritArray.push(spiritList[i].parentElement.textContent);
        }
    }
    let pickedSpirit = checkedSpiritArray[getRandomInt(checkedSpiritArray.length)];
    console.log(pickedSpirit); // Checkpoint
    return pickedSpirit;
}

/**
 * This function creates a random number.
 * It was copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickedSpirit() {
    let spiritArray = checkedSpiritList;
    console.log(spiritArray);

}


let createCocktailForm = document.getElementById("create-cocktail");
createCocktailForm.addEventListener('submit', createCocktail);

/**This function writes the ingredients into the ingredients field when
 * clicking 'Create Cocktail'
 */
function createCocktail() {
    // use literal and add function calls
    // Call function to determine the 

}

/**This function chooses a spirit from the checkedSpiritArray */


/**This function chooses a liqueur from the checkedLiqueurArray */


/**This function chooses a bitter from the checkedBitterArray */


/**This function chooses a sweet component from the checkedSweetArray */


/**This function chooses a sour component from the checkedSourArray */


/**This function chooses a sweet component from the checkedSweetArray */


/**This function chooses whether a juice or carbonated mixer will be added and calls the corresponding function */


/**This function chooses a juice from the checkedJuicesArray */


/**This function chooses a carbonated mixer from the checkedMixerArray */


/**This function chooses a preparation method from the checkedMethodArray if the  */