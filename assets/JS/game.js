const wastes = [
                    ["yellowBucket", "plasticBottle"],
                    ["yellowBucket", "milkBrick"],
                    /*["yellowBucket", "showerGelBottle"],
                    ["yellowBucket", "glassCleanerBottle"],
                    ["yellowBucket", "fruitJuiceBottle"],
                    ["yellowBucket", "cakeCase"],
                    ["yellowBucket", "tinCan"],
                    ["yellowBucket", "deodorant"],
                    ["blueBucket", "journal"],
                    ["blueBucket", "draft"],
                    ["blueBucket", "paper"],
                    ["greenBucket", "wineBottle"],
                    ["greenBucket", "whiskyBottle"],
                    ["greenBucket", "jamCan"],
                    ["greenBucket", "glassTinCan"],
                    ["greenBucket", "oilBottle"],
                    ["brownBucket", "lunchRest"],
                    ["brownBucket", "diapers"],
                    ["brownBucket", "yoghurtPot"],
                    ["brownBucket", "tissue"] */
               ];

localStorage.setItem("total", wastes.length)

let score = 0;
let wrongSortedWaste = [];
let actualWaste;
const buckets = document.querySelectorAll(".bucket");


// define function to display a new waste and remove the actual one from the array
function newWaste () {
    const random = Math.floor(Math.random() * wastes.length);
    actualWaste = wastes[random]
    const newWaste = document.createElement("img");
    newWaste.src = "/assets/img/" + wastes[random][1] + ".jpg";
    newWaste.classList.add("waste");
    newWaste.alt = wastes[random][1];
    newWaste.id = wastes[random][0]
    wastes.splice(random, 1)
    document.querySelector("#wasteContainer").appendChild(newWaste);
}

newWaste();
let waste = document.querySelector(".waste");

// define function to drag the waste

function dragStart() {
    waste = document.querySelector(".waste");
    setTimeout(() => (this.classList = 'invisible'), 0);
}

function dragEnd() {
    this.classList = 'waste';
}

// asign dragging function to the waste

waste.addEventListener('dragstart', dragStart);
waste.addEventListener('dragend', dragEnd);


// define functions to drop the waste on the buckets


function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault();
    this.classList += ' hovered';
}

function dragLeave() {
    this.classList = 'bucket';
}


function dragDrop(e) {
    e.preventDefault()
    this.classList = 'bucket';
    waste = document.querySelector("img")
    if (waste.id === this.id) {
        score++;
    }
    else {
        wrongSortedWaste.push(actualWaste)
        console.log(wrongSortedWaste)
    }
    if (wastes.length === 0) {
        localStorage.setItem("score", score);
        localStorage.setItem("wrong", JSON.stringify(wrongSortedWaste));
        document.location = "/endGame.html";
    }
    waste.remove();
    newWaste()
}

// asign dropping functions to all buckets

for (const bucket of buckets) {
    bucket.addEventListener('dragover', dragOver);

    bucket.addEventListener('dragenter', dragEnter);

    bucket.addEventListener('dragleave', dragLeave);

    bucket.addEventListener('drop', dragDrop);
}