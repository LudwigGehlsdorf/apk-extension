chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    console.log('Page uses History API and we heard a pushSate/replaceState.');
    // do your thing
});