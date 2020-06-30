import * as Cookie from "../../services/cookies";

export default function LogOut() {
    Cookie.deleteCookie();
}
