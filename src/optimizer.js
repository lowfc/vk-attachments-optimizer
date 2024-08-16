
function isDialog() {
    return document.location.href.match(/https:\/\/vk\.com\/im\/convo\/\d*?\?/i) !== null
}


function HandleOnce(max_allowed_photo_blocks) {
    if (!isDialog()) {
        return
    }
    let photo_blocks = document.getElementsByClassName(PHOTO_BLOCK_UL_CLASS_NAME)
    if (photo_blocks.length > max_allowed_photo_blocks) {
        console.log("[attachments optimizer] cleaning-up")
        for (i = 1; i < (photo_blocks.length - max_allowed_photo_blocks) + 1; i++) {
            photo_blocks[i].remove()
        }
    }
}