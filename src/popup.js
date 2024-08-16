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
        let storage = items[APP_SETTINGS_STORAGE_NAME]
        if (storage === undefined) {
            return
        }
        let current = storage[CLEANUP_POLICY_CHOSEN_KEY]
        if (current !== undefined && current !== null) {
            cleanup_policy.value = current
        }
    })
})