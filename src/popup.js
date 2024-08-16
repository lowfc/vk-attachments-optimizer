var cleanup_policy = document.getElementById("cleanupPolicy")


cleanup_policy.addEventListener("change", function() {
    chrome.storage.sync.get([APP_SETTINGS_STORAGE_NAME], function(items){
        let storage = items[APP_SETTINGS_STORAGE_NAME]
        if (storage === undefined) {
            storage = {}
        }
        storage[CLEANUP_POLICY_CHOSEN_KEY] = cleanup_policy.value
        items[APP_SETTINGS_STORAGE_NAME] = storage
        chrome.storage.sync.set(items)
    })
})

window.addEventListener("load", function(){
    chrome.storage.sync.get([APP_SETTINGS_STORAGE_NAME], function(items){
        let current = CLEANUP_POLICY_DEFAULT_CHOSEN_KEY
        let storage = items[APP_SETTINGS_STORAGE_NAME]
        if (storage !== undefined && storage !== null) {
            if (storage[CLEANUP_POLICY_CHOSEN_KEY] !== undefined && storage[CLEANUP_POLICY_CHOSEN_KEY] !== null) {
                current = storage[CLEANUP_POLICY_CHOSEN_KEY]
            }
        }
        cleanup_policy.value = current
    })
})

var gh_link = document.getElementById("ghLink")

gh_link.addEventListener("click", function() {
    window.open(GITHUB_URL, '_blank').focus();
})
