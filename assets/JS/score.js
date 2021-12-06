const score = localStorage.getItem("score")
const total = localStorage.getItem("total")
const wrongString = localStorage.getItem("wrong")
const wrong = JSON.parse(wrongString);
const info = document.getElementById("info")

document.querySelector("#scoreDisplay").innerHTML = score + " / " + total

if (wrong.length){
    info.innerHTML = "Ci-dessous, les dechets mal triés associés aux poubelles dans lesquelles ils allaient : "
}


for (let waste of wrong) {
    const wrongWaste = document.createElement("img");
    wrongWaste.src = "/assets/img/" + waste[0] + ".png";
    wrongWaste.style.width = "50px"
    wrongWaste.style.height = "50px"
    const goodBucket = document.createElement("img");
    goodBucket.style.width = "50px"
    goodBucket.style.height = "50px"
    goodBucket.src = "/assets/img/" + waste[1] + ".jpg";
    const resume = document.createElement("div")
    resume.appendChild(wrongWaste);
    resume.appendChild(goodBucket);
    info.appendChild(resume);
}
