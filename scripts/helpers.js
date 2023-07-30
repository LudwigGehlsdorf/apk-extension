function parseNumber(string, delimiter = "[.]") {
    const nonWhitespace = string.split(" ").join("")
    return parseFloat(nonWhitespace.replace(new RegExp(delimiter),'.'))
}

function urlMatcher (currentURL, urlRule) {
    const escapeRegex = (currentURL) => currentURL.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp("^" + urlRule.split("*").map(escapeRegex).join(".*") + "$").test(currentURL);
}

//Millileter pure alcohol per currency
function calculateAPK(percentage, volume, price, opts) {
    if (opts['pricePerLitre']) {
        return 10 * percentage / opts['costPerLitre'] 
    }
    console.log(percentage, volume, price)
    return volume * percentage / price
}