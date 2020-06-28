export function setCookie(cname, cvalue, hrs) {
    var d = new Date();
    d.setTime(d.getTime() + hrs * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log("Cookie set-up");
}

export function deleteCookie() {
    document.cookie =
        "portfolio-app=loged-in; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    window.location.reload(false);
}

export default setCookie;

// can be imported as folows:
// import * as Cookies from "../../services/cookies";

// and then used as:
// Cookies.setCookie("portfolio-app", "loged-in", 1);
