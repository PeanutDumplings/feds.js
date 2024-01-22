import { Constants } from "../util/Constants";

/**
 *
 * @param {string} method The HTTP method to use
 * @param {string} route The route to send the request to
 * @param {string} jwt The JWT token to use
 * @param {any} json The JSON to send
 * @returns
 */

export const constructFetch = async (method: string, route: string, jwt: string, sendData: boolean, json?: any) => {
    if (!jwt) throw new Error("Not logged in");

    const data = await fetch(`${Constants.BaseAPIURL}/${route}`, {
        method: method,
        headers: {
            cookie: `token=${jwt}`,
        },
        body: JSON.stringify(json),
    });

    const res = await data.json();

    if (!res.success) {
        throw new Error(res.message);
    }

    if (sendData) {
        return res;
    } else {
        return;
    }
};
