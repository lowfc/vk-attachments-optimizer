const GITHUB_URL = "https://github.com/lowfc/vk-attachments-optimizer"

const CHECK_CONTENT_INTERVAL = 5000
const PHOTO_BLOCK_UL_CLASS_NAME = "ConvoAttachesPhotos--separated"

const APP_SETTINGS_STORAGE_NAME = "cleanup-policy-settings"
const CLEANUP_POLICY_CHOSEN_KEY = "cleanup-policy"
const CLEANUP_POLICY_DEFAULT_CHOSEN_KEY = "normal"
const CLEANUP_POLICY_NAMES_TO_ALLOWED_BLOCKS = {
    "off": 0,
    "soft": 5,
    "normal": 4,
    "agressive": 3,
}
