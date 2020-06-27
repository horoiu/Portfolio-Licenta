const getCookie = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

const checkCookie = () => {
    var cookie = getCookie("portfolio-app");
    console.log(cookie);
    if (cookie === "loged-in") {
        return true;
    } else {
        return false;
    }
};

export default function isAuth() {
    return checkCookie();
        
    }
}
