const apkConfigs = [
    {
        url: "https://www.systembolaget.se/produkt/*/",
        roots: [
            document.body
        ],
        selectors: {
            PRICE: ".css-1nhmy2u.enp2lf70",
            VOLUME: ".css-1yfm6cm.e3whs8q0 :nth-child(3)",
            PERCENTAGE: ".css-1yfm6cm.e3whs8q0 :nth-child(5)",

            PRICE_PER_LITRE: ".css-17i0p8n.enp2lf70",
            PERCENTAGE: ".css-1yfm6cm.e3whs8q0 p"
        }
    },
    {
        url: "https://www.systembolaget.se/sortiment/*",
        roots: [
            ...document.querySelectorAll(".css-1lc3wed.enuzix00")
        ],
        selectors: {
            PRICE: ".css-tny168.enp2lf70",
            VOLUME: ".css-5aqtg5.e3whs8q0 div:nth-child(2) p",
            PERCENTAGE: ".css-5aqtg5.e3whs8q0 div:nth-child(3) p",
            STYLING_CLASS: "css-pvyy3n"
        }
        ,
        apkFunction: {

        }
    }
]


const targetNode = document.body
const config = { childList: true, subtree: true }

const stateCallback = (mutationsList, observer) => {
    const currentURL = window.location.href;

    observer.disconnect()

    apkConfigs.forEach(({url, roots, config}) => {
        if (urlMatcher(currentURL, url)) {
            updateAPK(roots, config)
        }
    }) 

    observer.observe(targetNode, config)
}

const observer = new MutationObserver(stateCallback)

observer.observe(targetNode, config)