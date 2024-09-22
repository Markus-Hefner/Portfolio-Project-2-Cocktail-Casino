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
        let checkbox = document.getElementsByClassName('mixers');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah2"); // Checkpoint
            checkbox[i].checked = true;
        }
    } else if (this.checked === false) {
        let checkbox = document.getElementsByClassName('mixers');
        for (let i = 0; i < checkbox.length; i++) {
            console.log("yeah3"); // Checkpoint
            checkbox[i].checked = false;
        }
    }
}

let button = document.getElementById('create-cocktail-button');
button.addEventListener("click", createCocktail);

function getCategory() {
    
}

/**This function writes the ingredients into the ingredients field when
 * clicking 'Create Cocktail'
 */
function createCocktail() {
    // use literal and add function calls
    document.getElementById("custom-ingredients-list").innerHTML = "";
    let customIngredientsList = document.getElementById('custom-ingredients-list');
    let amountSpiritOne = amount("spirit");
    if (amountSpiritOne > 0) {
        htmlIngredient = 
        `• ${amountSpiritOne} cl ${pickRandom("spirits")}
        <br>
        `;
        customIngredientsList.innerHTML += htmlIngredient;
    }
    let amountSpiritTwo = amount("spirit");
    if (amountSpiritTwo > 0) {
        htmlIngredient = 
        `• ${amountSpiritTwo} cl ${pickRandom("spirits")}
        <br>
        `;
        customIngredientsList.innerHTML += htmlIngredient;
    }
    let amountLiqueur = amount("liqueur");
    if (amountLiqueur > 0) {
        htmlIngredient = 
        `• ${amountLiqueur} cl ${pickRandom("liqueurs")}
        <br>
        `;
        customIngredientsList.innerHTML += htmlIngredient;
    }
    let amountBitter = amount("bitter");
    if (amountBitter > 0) {
        htmlIngredient = 
        `• ${amountBitter} cl ${pickRandom("bitters")}
        <br>
        `;
        customIngredientsList.innerHTML += htmlIngredient;
    }
    let amountSweet = amount("sweet");
    if (amountSweet > 0) {
        htmlIngredient = 
        `• ${amountSweet} cl ${pickRandom("sweets")}
        <br>
        `;
        customIngredientsList.innerHTML += htmlIngredient;
    }
    let amountSour = amount("sour");
    if (amountSour > 0) {
        htmlIngredient = 
        `• ${amountSour} cl ${pickRandom("sours")}
        <br>
        `;
        customIngredientsList.innerHTML += htmlIngredient;
    }
    let amountMixer = amount("mixer");
    if (amountMixer > 0) {
        htmlIngredient = 
        `• ${amountMixer} cl ${pickRandom("mixers")}
        `;
        customIngredientsList.innerHTML += htmlIngredient;
    }
}

/**
 * This function creates a random number.
 * It was copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**This function pushes checked spirits to the checkedSpiritArray
 * and picks one at random.
 */
function pickRandom(beverage) {
    let beverageList = document.getElementsByClassName(beverage);
    let checkedBeverageArray = [];
    for (let i = 0; i < beverageList.length; i++) {
        if (beverageList[i].checked === true) {
            checkedBeverageArray.push(beverageList[i].parentElement.textContent);
        }
    }
    let pickedBeverage = checkedBeverageArray[getRandomInt(checkedBeverageArray.length)];
    console.log(pickedBeverage); // Checkpoint
    return pickedBeverage;
}

function amount(category) {
    if (category === "spirit") {
        let centilitre = getRandomInt(7);
        return centilitre;
    } else if (category === "liqueur") {
        let centilitre = getRandomInt(4);
        return centilitre;
    } else if (category === "bitter") {
        let centilitre = getRandomInt(3);
        return centilitre;
    } else if (category === "sweet") {
        let centilitre = getRandomInt(3);
        return centilitre;
    } else if (category === "sour") {
        let centilitre = getRandomInt(4);
        return centilitre;
    } else if (category === "mixer") {
        let centilitre = getRandomInt(19);
        return centilitre;
    }
}


/**This function chooses a liqueur from the checkedLiqueurArray */


/**This function chooses a bitter from the checkedBitterArray */


/**This function chooses a sweet component from the checkedSweetArray */


/**This function chooses a sour component from the checkedSourArray */


/**This function chooses a sweet component from the checkedSweetArray */


/**This function chooses whether a juice or carbonated mixer will be added and calls the corresponding function */


/**This function chooses a juice from the checkedJuicesArray */


/**This function chooses a carbonated mixer from the checkedMixerArray */


/**This function chooses a preparation method from the checkedMethodArray if the  */