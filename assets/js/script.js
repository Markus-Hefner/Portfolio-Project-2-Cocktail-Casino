document.addEventListener("DOMContentLoaded", initializeSite);

function initializeSite() {
    checkboxAllSpirits.addEventListener('change', checkAllSpirits);
    checkboxAllLiqueurs.addEventListener('change', checkAllLiqueurs);
    checkboxAllBitters.addEventListener('change', checkAllBitters);
    checkboxAllSweets.addEventListener('change', checkAllSweets);
    checkboxAllSours.addEventListener('change', checkAllSours);
    checkboxAllJuices.addEventListener('change', checkAllJuices);
    checkboxAllMixers.addEventListener('change', checkAllMixers);
    checkboxAllMethods.addEventListener('change', checkAllMethods);
    button.addEventListener("click", createCocktail);
}

let checkboxAllSpirits = document.querySelector("input[id=check-all-spirits]");
checkboxAllSpirits.addEventListener('change', checkAllSpirits);

let checkboxAllLiqueurs = document.querySelector("input[id=check-all-liqueurs]");
checkboxAllLiqueurs.addEventListener('change', checkAllLiqueurs);

let checkboxAllBitters = document.querySelector("input[id=check-all-bitters]");
checkboxAllBitters.addEventListener('change', checkAllBitters);

let checkboxAllSweets = document.querySelector("input[id=check-all-sweets]");
checkboxAllSweets.addEventListener('change', checkAllSweets);

let checkboxAllSours = document.querySelector("input[id=check-all-sours]");
checkboxAllSours.addEventListener('change', checkAllSours);

let checkboxAllJuices = document.querySelector("input[id=check-all-juices]");
checkboxAllJuices.addEventListener('change', checkAllJuices);

let checkboxAllMixers = document.querySelector("input[id=check-all-mixers]");
checkboxAllMixers.addEventListener('change', checkAllMixers);

let checkboxAllMethods = document.querySelector("input[id=check-all-methods]");
checkboxAllMethods.addEventListener('change', checkAllMethods);

let button = document.getElementById('create-cocktail-button');
button.addEventListener("click", createCocktail);

/** This function selects/unselect all spirits */
function checkAllSpirits() {
    if (this.checked === true) {
        let checkboxes = document.getElementsByClassName('spirits');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else if (this.checked === false) {
        let checkboxes = document.getElementsByClassName('spirits');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

/** This function selects/unselect all liqueurs */
function checkAllLiqueurs() {
    if (this.checked === true) {
        let checkboxes = document.getElementsByClassName('liqueurs');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else if (this.checked === false) {
        let checkboxes = document.getElementsByClassName('liqueurs');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

/** This function selects/unselect all bitters */
function checkAllBitters() {
    if (this.checked === true) {
        let checkboxes = document.getElementsByClassName('bitters');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else if (this.checked === false) {
        let checkboxes = document.getElementsByClassName('bitters');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

/** This function selects/unselect all sweets */
function checkAllSweets() {
    if (this.checked === true) {
        let checkboxes = document.getElementsByClassName('sweets');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else if (this.checked === false) {
        let checkboxes = document.getElementsByClassName('sweets');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

/** This function selects/unselect all sours */
function checkAllSours() {
    if (this.checked === true) {
        let checkboxes = document.getElementsByClassName('sours');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else if (this.checked === false) {
        let checkboxes = document.getElementsByClassName('sours');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

/** This function selects/unselect all juices */
function checkAllJuices() {
    if (this.checked === true) {
        let checkboxes = document.getElementsByClassName('juices');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else if (this.checked === false) {
        let checkboxes = document.getElementsByClassName('juices');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

/** This function selects/unselect all mixers */
function checkAllMixers() {
    if (this.checked === true) {
        let checkboxes = document.getElementsByClassName('mixers');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else if (this.checked === false) {
        let checkboxes = document.getElementsByClassName('mixers');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

/** This function selects/unselect all mixers */
function checkAllMethods() {
    if (this.checked === true) {
        let checkboxes = document.getElementsByClassName('methods');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else if (this.checked === false) {
        let checkboxes = document.getElementsByClassName('methods');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

/**This function writes the ingredients and the preparation method 
 * in their respective fields when clicking 'Create Cocktail'
 */
function createCocktail() {
    let casinoIngredientsList = document.getElementById('casino-ingredients-list');
    casinoIngredientsList.innerHTML = ""; // To clear ingredient field with every rerun
    let htmlIngredient;
    let amountSpiritOne = amount("spirit");
    let spiritOne = pickRandom("spirits");
    if (amountSpiritOne > 0) {
        if (spiritOne !== undefined) {
            htmlIngredient =
                `• ${amountSpiritOne} cl ${spiritOne}
                <br>
                `;
            casinoIngredientsList.innerHTML += htmlIngredient;
        }
    }

    let alcoholTotal = amountSpiritOne;
    let provisionalSpiritTwo = amount("spirit");
    let amountSpiritTwo = alcoholLimit(alcoholTotal, provisionalSpiritTwo);
    let spiritTwo = pickRandom("spirits");
    if (amountSpiritTwo > 0) {
        if (spiritTwo !== undefined)
            if (spiritTwo === spiritOne) { // This additional if-statement checks whether or not the two chosen spirits are the same and if so displays it only once and adds up the cl
                let amountBothSpirits = amountSpiritOne + amountSpiritTwo;
                htmlIngredient = `
                • ${amountBothSpirits} cl ${spiritTwo}
                <br>
                `;
                casinoIngredientsList.innerHTML = htmlIngredient;
            } else {
                htmlIngredient = `
                • ${amountSpiritTwo} cl ${spiritTwo}
                <br>
                `;
                casinoIngredientsList.innerHTML += htmlIngredient;
            }
    }
    alcoholTotal += amountSpiritTwo;
    let provisionalLiqueur = amount("liqueur");
    let amountLiqueur = alcoholLimit(alcoholTotal, provisionalLiqueur);
    let liqueur = pickRandom("liqueurs");
    if (amountLiqueur > 0) {
        if (liqueur !== undefined) {
            htmlIngredient =
                `• ${amountLiqueur} cl ${liqueur}
                 <br>
                `;
            casinoIngredientsList.innerHTML += htmlIngredient;
        }
    }
    let amountBitter = amount("bitter");
    let bitter = pickRandom("bitters");
    if (amountBitter > 0) {
        if (bitter !== undefined)
            if (amountBitter === 1) { // This additional if-statement checks whether or not it is one dash or multiple dashes and changes the text accordingly
                htmlIngredient =
                    `• ${amountBitter} dash ${bitter}
                <br>
                `;
                casinoIngredientsList.innerHTML += htmlIngredient;
            } else {
                htmlIngredient =
                    `• ${amountBitter} dashes ${bitter}
                    <br>
                    `;
                casinoIngredientsList.innerHTML += htmlIngredient;
            }
    }
    let amountSweet = amount("sweet");
    let sweet = pickRandom("sweets");
    if (amountSweet > 0) {
        if (sweet !== undefined) {
            htmlIngredient =
                `• ${amountSweet} cl ${sweet}
                <br>
                `;
            casinoIngredientsList.innerHTML += htmlIngredient;
        }
    }
    let amountSour = amount("sour");
    let sour = pickRandom("sours");
    if (amountSour > 0) {
        if (sour !== undefined) {
            htmlIngredient =
                `• ${amountSour} cl ${sour}
                <br>
                `;
            casinoIngredientsList.innerHTML += htmlIngredient;
        }
    }
    let amountJuice = amount("juice");
    let juice = pickRandom("juices");
    if (amountJuice > 0) {
        if (juice !== undefined) {
            htmlIngredient =
                `• ${amountJuice} cl ${juice}
                <br>
                `;
            casinoIngredientsList.innerHTML += htmlIngredient;
        }
    }
    let mixerTotal = amountJuice;
    let provisionalMixer = amount("mixer");
    let amountMixer = mixerLimit(mixerTotal, provisionalMixer);
    let mixer = pickRandom("mixers");
    if (amountMixer > 0) {
        if (mixer !== undefined) {
            htmlIngredient =
                `• ${amountMixer} cl ${mixer}
                `;
            casinoIngredientsList.innerHTML += htmlIngredient;
        }
    }

    document.getElementById("chosen-method").innerHTML = ""; // To clear method field with every rerun
    let chosenMethod = document.getElementById('chosen-method');
    let htmlMethod = pickRandomMethod();
    if (htmlMethod === undefined) {
        chosenMethod.innerHTML = `
        Do you have the equiment to make cocktails? (See "Preparation Methods")
        `;
    } else {
        chosenMethod.innerHTML = htmlMethod;
    }
    minimumItems(casinoIngredientsList, chosenMethod);
}

/**
 * This function creates a random number.
 * It was copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/** This function chooses the amount of the ingredients
 * within a typical range regarding their category
 */
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
    } else if (category === "juice") {
        let centilitre = getRandomInt(19);
        if (centilitre < 6) {
            return 6;
        } else {
            return centilitre;
        }
    } else if (category === "mixer") {
        let centilitre = getRandomInt(19);
        if (centilitre < 6) {
            return 6;
        } else {
            return centilitre;
        }
    }
}

/**This function pushes checked beverages to the checkedBeveragesArray
 * and picks one at random.
 */
function pickRandom(beverage) {
    let beverageList = document.getElementsByClassName(beverage);
    let checkedBeveragesArray = [];
    for (let i = 0; i < beverageList.length; i++) {
        if (beverageList[i].checked === true) {
            checkedBeveragesArray.push(beverageList[i].parentElement.textContent);
        }
    }
    let pickedBeverage = checkedBeveragesArray[getRandomInt(checkedBeveragesArray.length)];
    return pickedBeverage;
}

/** This function makes sure that the maximum alcohol amount of spirits and liqueurs combined
 * never exceed 6 cl
 */
function alcoholLimit(alcoholTotal, provisionalAmount) {
    if ((6 - alcoholTotal) >= provisionalAmount) {
        return provisionalAmount;
    } else {
        return (6 - alcoholTotal);
    }
}

/** This function makes sure that the maximum amount of juices 
 * and carbonated mixers combined
 * never exceeds 18 cl
 */
function mixerLimit(mixerTotal, provisionalAmount) {
    if ((18 - mixerTotal) >= provisionalAmount) {
        return provisionalAmount;
    } else {
        return (18 - mixerTotal);
    }
}

/**This function pushes checked preparation methods to the checkedMethodsArray
 * and picks one at random.
 */
function pickRandomMethod() {
    let methodList = document.getElementsByClassName("methods");
    let checkedMethodsArray = [];
    for (let i = 0; i < methodList.length; i++) {
        if (methodList[i].checked === true) {
            checkedMethodsArray.push(methodList[i].id);
        }
    }
    let pickedMethodId = checkedMethodsArray[getRandomInt(checkedMethodsArray.length)];
    let pickedMethodText = textMethod(pickedMethodId);
    return pickedMethodText;
}

/** This function chooses the correct HTML text for the preparation method's index */
function textMethod(methodId) {
    switch (methodId) {
        case "build":
            let buildText = `
            Build:
            <br>
            • Add ingredients to glass
            <br>
            • Add ice
            <br>
            • Enjoy!
            `;
            return buildText;
        case "stir":
            let stirText = `
            Stir:
            <br>
            • Add ingredients to glass
            <br>
            • Add ice
            <br>
            • Stir
            <br>
            • Enjoy!
            `;
            return stirText;
        case "shake":
            let shakeText = `
            Shake:
            <br>
            • Add ingredients to shaker (all but the carbonated if there are any)
            <br>
            • Add ice
            <br>
            • Seal shaker
            <br>
            • Shake
            <br>
            • Pour into drinking glass
            <br>
            • Add carbonated ingredients (if there are any)
            <br>
            • Enjoy!
            `;
            return shakeText;
    }

}

/** This function checks how many items are selected and displays
 * a message if there to few to make a cocktail.
 */
function minimumItems(casinoIngredientsList, chosenMethod) {
    let beverageCategories = ["spirits", "liqueurs", "bitters", "sweets", "sours", "juices", "mixers"];
    let checkedCategoriesArray = [];
    let checkedBeveragesArray = [];
    for (let x = 0; x < beverageCategories.length; x++) {
        let beverageList = document.getElementsByClassName(beverageCategories[x]);
        for (let i = 0; i < beverageList.length; i++) {
            if (beverageList[i].checked === true) {
                checkedBeveragesArray.push(beverageList[i].parentElement.textContent);
                checkedCategoriesArray.push(beverageCategories[x]);
            }
        }
    }
    let checkedCategoriesSet = new Set(checkedCategoriesArray);

    if (checkedBeveragesArray.length === 0) {
        casinoIngredientsList.innerHTML += `
        Sorry, your bar is empty
        Please check if you have any of the beverages mentioned above.
        `;
        chosenMethod.innerHTML = "Sorry, there's nothing to mix...";
    }
    if (checkedBeveragesArray.length === 1) {
        casinoIngredientsList.innerHTML += `
        <br>
        Sorry, but with one ingredient it's hard to mix a cocktail ;-)
        <br>
        We tried our best though...
        <br>
        Please check if you have more of the beverages mentioned above.
        `;
    } else if (checkedCategoriesSet.size === 1) {
        casinoIngredientsList.innerHTML += `
        <br>
        You selected beverages from only one category.
        To make the most out of the Cocktail Casino please check if you have also beverages from other categories.
        `;
    } else if (checkedBeveragesArray.length === 2) {
        casinoIngredientsList.innerHTML += `
        <br>
        You only selected two ingredients.
        Technically you can mix drinks with two ingredients.
        But to make the most out of the Cocktail Casino please check if you have more of the beverages mentioned above.
        `;
    }
}