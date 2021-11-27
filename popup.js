
var callback = function () {
    document.getElementById("test").innerHTML = 'It worked';
    chrome.tts.speak('The evidence has been purged. Good luck, soldier.', { 'lang': 'en-US', 'rate': 1.0 });
};

var run_clear = function () {

    let hours = document.getElementById("hours").value;
    var milliseconds = 1000 * 60 * 60 * hours;
    var delta = (new Date()).getTime() - milliseconds;
    document.getElementById("test").innerHTML = 'Time added';

    chrome.browsingData.remove({
        "since": delta
    }, {
        "appcache": true,
        "cache": true,
        "cacheStorage": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "passwords": true,
        "serviceWorkers": true,
        "webSQL": true
    }, callback);

}

document.getElementById("lets_clear").addEventListener("click", run_clear);