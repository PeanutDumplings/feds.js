import Client from "../client/Client";
import { constructFetch } from "../util/Functions";

export default class DiscordManager {
    constructor(private client: Client) {}

    /**
     * This method is used to set your Discord ID.
     * @param {string} id The Discord ID to set
     * @returns {Promise<void>} Nothing
     */

    async setDiscordId(id: string): Promise<void> {
        return await constructFetch("POST", "biolink/manage/media/discord", this.client.jwt, false, { discordId: id });
    }

    /**
     * This method is used to either enable or disable showing your status (online, offline, dnd, idle) on your biolink.
     * @param {boolean} enabled Whether or not to enable showing your status
     * @returns {Promise<void>} Nothing
     */

    async enableStatus(enabled: boolean): Promise<void> {
        return await constructFetch("POST", "biolink/manage/discord/status", this.client.jwt, false, { status: enabled });
    }

    /**
     * This method is used to either enable or disable showing your activity (playing, listening, watching) on your biolink.
     * @param {boolean} enabled Whether or not to enable showing your activity
     * @returns {Promise<void>} Nothing
     */

    async enableActivity(enabled: boolean): Promise<void> {
        return await constructFetch("POST", "biolink/manage/discord/activity", this.client.jwt, false, { activity: enabled });
    }
}
