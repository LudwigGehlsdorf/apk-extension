const urlConfigs = [
    {
        url: "https://www.systembolaget.se/produkt/*/",
        roots: [
            document.body
        ],
        config: {
            PRICE_SELECTOR: ".css-1nhmy2u.enp2lf70",
            VOLUME_SELECTOR: ".css-1yfm6cm.e3whs8q0 :nth-child(3)",
            PERCENTAGE_SELECTOR: ".css-1yfm6cm.e3whs8q0 :nth-child(5)",
            STYLING_CLASS: "css-17i0p8n",

        }
    },
    {
        url: "https://www.systembolaget.se/sortiment/*",
        roots: [
            ...document.querySelectorAll(".css-1lc3wed.enuzix00")
        ],
        config: {
            PRICE_SELECTOR: ".css-tny168.enp2lf70",
            VOLUME_SELECTOR: ".css-5aqtg5.e3whs8q0 div:nth-child(2) p",
            PERCENTAGE_SELECTOR: ".css-5aqtg5.e3whs8q0 div:nth-child(3) p",
            STYLING_CLASS: "css-pvyy3n"
        }
    }
]


const targetNode = document.body
const config = { childList: true, subtree: true }

const stateCallback = (mutationsList, observer) => {
    const currentURL = window.location.href;

    observer.disconnect()

    urlConfigs.forEach(({url, roots, config}) => {
        if (urlMatcher(currentURL, url)) {
            updateAPK(roots, config)
        }

    }) 

    observer.observe(targetNode, config)
}

const observer = new MutationObserver(stateCallback)

observer.observe(targetNode, config)