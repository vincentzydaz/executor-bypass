var isNextPageBypass = false;
var links = ['loot-link.com','loot-links.com','linkvertise.com'];
var codexTabId;

chrome.webNavigation.onCompleted.addListener(function(details) {
    console.log(details);
    if (links.indexOf((details.url).split("/")[2]) != -1 && isNextPageBypass == true) {
        isNextPageBypass = false
        doBypass();
    } else if ((details.url).split("/")[2] == "mobile.codex.lol") {
        isNextPageBypass = true
        codexTabId = details.tabId
    }
}, {urls: ["<all_urls>"]})

async function doBypass() {
    await new Promise(r => setTimeout(r, 1500));
    chrome.scripting.executeScript({
        target: { tabId: codexTabId },
        files: ['bypass_waiting.js']
    })
}