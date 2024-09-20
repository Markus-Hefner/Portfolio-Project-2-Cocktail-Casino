let checkboxAllSpirits = document.querySelector("input[id=check-all-spirits]");

checkboxAllSpirits.addEventListener('change', checkAllSpirits);

function checkAllSpirits() {
            if (this.checked === true) {
                console.log("Checkbox is checked..");
                let checkbox = document.getElementsByClassName('spirits');
                for (let i = 0; i < checkbox.length; i++) {
                    console.log("yeah2"); // Checkpoint
                    checkbox[i].checked = true;
                }
                } else if (this.checked === false) {
                    console.log("Checkbox is not checked..");
                    let checkbox = document.getElementsByClassName('spirits');
                for (let i = 0; i < checkbox.length; i++) {
                    console.log("yeah3"); // Checkpoint
                    checkbox[i].checked = false;
                }
                }
            }