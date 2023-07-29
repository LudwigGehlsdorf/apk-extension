function appendAPK(root, config) {
    const apk = document.createElement("p")
    apk.className = "apk " + config.STYLING_CLASS
    const price = root.querySelector(config.PRICE_SELECTOR)
    const priceParent = price.parentNode

    priceParent.removeChild(price)

    const container = document.createElement("div")
    container.append(price)
    container.append(apk)
    priceParent.prepend(container)
    return apk
}

function updateAPK(roots, config) {
    for (let root of roots) {
        try {
            const apkElement = root.querySelector(".apk") || appendAPK(root, config)
            const price = parseNumber(root.querySelector(config.PRICE_SELECTOR).innerHTML, ":")
            const volume = parseNumber(root.querySelector(config.VOLUME_SELECTOR).innerHTML)
            const percentage = parseNumber(root.querySelector(config.PERCENTAGE_SELECTOR).innerHTML) * 0.01
        
            const apk = calculateAPK(percentage, volume, price)
            const rounded = Math.round(apk * 100) / 100
        
            apkElement.innerHTML = rounded + " mlA / kr"  
        } catch (error) {
            console.log(error)
        }
    }
}
