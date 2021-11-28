var run_clear = function () {

    let cache = document.getElementById("cache").checked;

    let cookies = document.getElementById("cookies").checked;

    let downloads = document.getElementById("downloads").checked;
    let history = document.getElementById("history").checked;
    let others = document.getElementById("others").checked;

    let hours = document.getElementById("hours").value;
    let milliseconds = 1000 * 60 * 60 * hours;
    let delta = (new Date()).getTime() - milliseconds;


    if (cache) {
        chrome.browsingData.remove({
            "since": delta
        }, {
            "appcache": cache,
            "cache": cache,
            "cacheStorage": cache,
        });

    }
    
    if (cookies) {
        chrome.browsingData.removeCookies({"since": delta});
    }

    if (downloads) {
        chrome.browsingData.removeDownloads({"since": delta});
    }

    if (history) {
        chrome.browsingData.removeHistory({"since": delta});
    }

    if (others) {
        chrome.browsingData.remove({
            "since": delta
          }, {
            "fileSystems": true,
            "formData": true,
            "indexedDB": true,
            "localStorage": true,
            "passwords": true,
            "serviceWorkers": true,
            "webSQL": true
          });
    }

    alert('The data has been cleared.');

}

document.getElementById("lets_clear").addEventListener("click", run_clear);
