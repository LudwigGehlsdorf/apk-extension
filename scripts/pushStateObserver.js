

function pushStateObserver(urlMatches) {
    const targetNode = document.querySelector("body");
    const config = { attributes: true, childList: true, subtree: true }

    const stateCallback = (mutationsList, observer) => {
        const currentURL = window.location.href;

        observer.disconnect()

        urlMatches.forEach(({url, callback}) => {
            if (urlMatcher(currentURL, url)) {
                callback()
            }

        }) 

        observer.observe(targetNode, config)
    }

   return new MutationObserver(stateCallback)
}