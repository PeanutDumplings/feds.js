import Client from "../client/Client";
import { constructFetch } from "../util/Functions";
import { UserData } from "../util/Interfaces";

export default class UserManager {
    constructor(private client: Client) {}

    /**
     * This method is used to update your email address.
     * @param {string} oldEmail The current email address you want to change from
     * @param {string} newEmail The new email address you want to change to
     * @returns {Promise<void>} Nothing
     */

    async setEmailAddress(oldEmail: string, newEmail: string): Promise<void> {
        return await constructFetch("POST", "user/manage/email", this.client.jwt, false, { oldEmail: oldEmail, newEmail: newEmail });
    }

    /**
     * This method is used to update your username.
     * @param {string} username The username you want to change to
     * @returns {Promise<void>} Nothing
     */

    async setUsername(username: string): Promise<void> {
        return await constructFetch("POST", "user/manage/name", this.client.jwt, false, { username: username });
    }

    /**
     * This method is used to update your password.
     * @param {string} oldPassword The current password you want to change from
     * @param {string} newPassword The new password you want to change to
     * @returns {Promise<void>} Nothing
     */

    async setPassword(oldPassword: string, newPassword: string): Promise<void> {
        return await constructFetch("POST", "user/manage/password", this.client.jwt, false, { oldPassword: oldPassword, newPassword: newPassword });
    }

    /**
     * This method is used to fetch the logged-in user's data: id, email and username.
     * @returns {Promise<UserData>} The user's data
     */

    async fetch(): Promise<UserData> {
        return await constructFetch("GET", "user/data", this.client.jwt, true).then((res) => {
            return res.user;
        });
    }
}
