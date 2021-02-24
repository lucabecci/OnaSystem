import axios from "axios";
import {
    checkCamps,
    checkEmail,
    checkInvalidLetters,
    comparePassword,
} from "../helpers/RegisterHelpers";
import { IUserRegister } from "../interfaces/UserInterfaces";
import { checkCampsLogin, checkEmailLogin } from "../helpers/LoginHelpers";

export async function checkLoggedIn() {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
    }
    try {
        const tokenResponse = await axios.post(
            "http://localhost:4000/user/tokenisValid",
            null,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );

        if (tokenResponse.data) {
            const userResp = await axios.get("http://localhost:4000/user", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            return {
                token,
                user: userResp.data.user,
                admin: userResp.data.admin,
            };
        }
        return {
            token: "",
            user: {},
            admin: false,
        };
    } catch (e) {
        return {
            token: "",
            user: null,
            admin: false,
        };
    }
}
export async function registerData(userData: IUserRegister) {
    const campsChecked = checkCamps(
        userData.email,
        userData.firstName,
        userData.lastName,
        userData.userName,
        userData.password,
        userData.passwordCheck,
        userData.age
    );
    if (campsChecked) {
        return {
            error: true,
            message: "Please Send All Camps",
            user: null,
        };
    }
    const invalidLetters = checkInvalidLetters(
        userData.firstName,
        userData.lastName,
        userData.userName
    );
    if (invalidLetters) {
        return {
            error: true,
            message:
                "Invalid letters in one of your name, lastname or username",
            user: null,
        };
    }
    const passwordsCompared = comparePassword(
        userData.password,
        userData.passwordCheck
    );
    if (passwordsCompared) {
        return {
            error: true,
            message: "Passwords not equal",
            user: null,
        };
    }
    const emailChecked = checkEmail(userData.email);
    if (emailChecked) {
        return {
            error: true,
            message: "Invalid email",
            user: null,
        };
    }

    try {
        await axios.post("http://localhost:4000/user/register", userData);
        const userLogin = {
            email: userData.email,
            password: userData.password,
        };
        const result = loginData(userLogin.email, userLogin.password);
        return result;
    } catch (e) {
        console.log(e);
        return {
            error: true,
            message: e.response.data.message,
            user: null,
        };
    }
}
export async function loginData(email: string, password: string) {
    const campsChecked = checkCampsLogin(email, password);
    if (campsChecked) {
        return {
            error: true,
            message: "Please Send All Camps",
            user: null,
        };
    }
    const emailChecked = checkEmailLogin(email);
    if (emailChecked) {
        return {
            error: true,
            message: "Email invalid",
            user: null,
        };
    }
    try {
        const userLogin = {
            email,
            password,
        };
        const userLogged = await axios.post(
            "http://localhost:4000/user/login",
            userLogin
        );

        return {
            error: false,
            message: "",
            user: userLogged.data,
        };
    } catch (e) {
        return {
            error: true,
            message: e.response.data.message,
            user: null,
        };
    }
}
