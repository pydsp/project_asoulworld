const API_BASE_URL = "https://api.asoulworld.com"

//FORMAL API MAP
const API_MAP = {
    checkLive: "/v1/checklive.php",
    getNotice: "/v1/getnotice.php",
    getRecentLive: "/v1/getrecentlive.php"
}

export const API_CHECK_LIVE = API_BASE_URL + API_MAP.checkLive
export const API_GET_NOTICE = API_BASE_URL + API_MAP.getNotice
export const API_GET_RECENT_LIVE = API_BASE_URL + API_MAP.getRecentLive

//COS URL MAP
export const COS_MAP = {
    notice: "notice_img/",
    header_bg: "header_bg/",
    calendar_meme_img: "calendar/meme_img/",
    navigator: {
        website: "collect_avatar/website/",
        creator: "collect_avatar/creator/",
        tools: "collect_avatar/tools/"
    },
    footer: {
        thank_list_icon: "footer/thank_list_icon/"
    },
    banner: {
        avatar: "banner/avatar/",
        background: "banner/background/"
    },
    other_icon: "icon/"
}
export const COS_BASE_URL = "xxxxxxxxxxxxxxxxxxx"
