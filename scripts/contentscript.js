const ParsePrice = (string) => {
    const components = string.split(":")
    const wholePart = components[0];
    const decimalPart = string.split(":")[1]
    const wholeString = wholePart.split(" ").join("")

    const whole = parseInt(wholeString)
    const decimal = parseInt(decimalPart) * 0.01

    return isNaN(decimal) ? whole : whole + decimal
}

const ParseAlcoholPercentage = (string) => {
    const percentage = parseFloat(string.split("%")[0]) * 0.01

    return percentage
}

const ParseVolume = (string) => {
    return parseInt(string)
}

const createApkElement = () => {
    const p = document.createElement("p")
    p.className = "css-17i0p8n enp2lf70"
    p.id = "apk"
    return p
}

//Gör om så att den tar med antal liter man kan dricka som mest på en kväll, cirka 2.

const CalculateAPK = () => {
    const percentage = document.querySelectorAll(".css-1yfm6cm.e3whs8q0")[0].lastChild.innerHTML
    const costPerLitre = document.querySelectorAll(".css-1xe6xc1.e3whs8q0")[0].children[1].innerHTML

    const apk = ParseAlcoholPercentage(percentage) * 1 / ParsePrice(costPerLitre) * 1000

    const rounded = Math.round(apk * 100) / 100
    return rounded
}

const ModifyDOM = () => {
    let apkElement = document.querySelector("#apk") || createApkElement()
    apkElement.innerHTML = CalculateAPK() + " mlA / kr"
    console.log(CalculateAPK())
    const divContainer = document.querySelector(".css-1df247k.e3whs8q0")
    const priceElement = divContainer.childNodes[0]
    const buffer = divContainer.removeChild(priceElement)

    const apkContainer = document.createElement("div")
    apkContainer.appendChild(priceElement)
    apkContainer.appendChild(apkElement)
    divContainer.prepend(apkContainer)
}

//gör så att det visas på sortiment sidan också på varje label

const main = () => {
    const targetNode = document.querySelector("body");
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true }

    var callback = function(mutationsList, observer) {
        if (matchRuleShort(GetUrl(), "https://www.systembolaget.se/produkt/*/*/")) {
            observer.disconnect()
            ModifyDOM()
            observer.observe(targetNode, config)
        }
    }

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback)

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config)

}

function matchRuleShort(str, rule) {
    var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
}


const GetUrl = () => {
    return window.location.href
}

main()