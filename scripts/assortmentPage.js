
const injectAssortment = () => {
    const productCards = document.querySelectorAll(PRODUCT_CARD_SELECTOR)

    for (const card of productCards) {
        const informationContainer = card.querySelector(".css-1w224ux.e3whs8q0")
        if (informationContainer == null) return

        const apkElement = card.querySelector(".apk") || createAPKElement()
        apkElement.innerHTML = calculateAPK(card) + " mlA / kr"
        console.log(apkElement.innerHTML)


        const priceElement = card.querySelector(PRICE_SELECTOR_ASSORTMENT)
        const priceElementParent = priceElement.parentNode

        priceElementParent.removeChild(priceElement)

        const div = document.createElement("div")
        div.append(priceElement)
        div.append(apkElement)

        priceElementParent.append(div)

    }
}