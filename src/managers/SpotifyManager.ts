import Client from "../client/Client";
import { constructFetch } from "../util/Functions";

export default class SpotifyManager {
    constructor(private client: Client) {}

    /**
     * This method is used to set your Spotify track ID.
     * @param {string} id The Spotify track ID you want to change to
     * @returns {Promise<void>} Nothing
     */

    async setTrackId(id: string): Promise<void> {
        return await constructFetch("POST", "biolink/manage/media/spotify/track", this.client.jwt, false, { trackId: id });
    }

    /**
     * This method is used to set the theme that your Spotify media card uses.  0 for standard grey colour, 1 for song specific colour.
     * @param {number} mode The mode to set your Spotify theme to.
     * @returns {Promise<void>} Nothing
     */

    async setTheme(mode: number): Promise<void> {
        if (mode !== 0 && mode !== 1) throw new Error("Invalid mode");
        return await constructFetch("POST", "biolink/manage/media/spotify/theme", this.client.jwt, false, { mode: mode });
    }
}
