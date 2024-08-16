
window.addEventListener("load", function(){

    console.log("Vk attachments optimizer run.")

    chrome.storage.sync.get([APP_SETTINGS_STORAGE_NAME], function(items){
        let storage = items[APP_SETTINGS_STORAGE_NAME]
        if (storage === undefined) {
            storage = {}
        }
        let current = storage[CLEANUP_POLICY_CHOSEN_KEY]
        let chosen_policy = CLEANUP_POLICY_DEFAULT_CHOSEN_KEY
        if (current !== undefined && current !== null) {
            chosen_policy = current
        }
        let max_allowed_photo_blocks = CLEANUP_POLICY_NAMES_TO_ALLOWED_BLOCKS[chosen_policy]
        if (max_allowed_photo_blocks) {
            setInterval(HandleOnce, CHECK_CONTENT_INTERVAL, max_allowed_photo_blocks)
        } else {
            console.error("Internal error, launch cancelled")
        }
    })
})
