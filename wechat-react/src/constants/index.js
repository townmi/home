let userApiDomain = null;
let userCoreApiDomain = null;
let commontCoreApiDomain = null;

if (process.env.NODE_ENV === "development") {
    userApiDomain = "http://user.dev.ye-dian.com";
    userCoreApiDomain = "http://userCore.dev.ye-dian.com";
    commontCoreApiDomain = "http://feedback.dev.ye-dian.com";
} else if (process.env.NODE_ENV === "staging") {
    userApiDomain = "http://user.staging.ye-dian.com";
    userCoreApiDomain = "http://userCore.dev.ye-dian.com";
    commontCoreApiDomain = "http://feedback.dev.ye-dian.com";
} else {
    userApiDomain = "http://user.staging.ye-dian.com";
    userCoreApiDomain = "http://userCore.dev.ye-dian.com";
    commontCoreApiDomain = "http://feedback.dev.ye-dian.com";
}

export const API_ROOT = {
    weChatAuth: userApiDomain + "/auth/wechat?",
    getUserInfo: userApiDomain + "/internal/userInfo?_type=User"
}

export const enums = {
    1: "test"
}