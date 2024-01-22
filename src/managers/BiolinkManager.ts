import { BiolinkData } from "../util/Interfaces";
import Client from "../client/Client";
import { constructFetch } from "../util/Functions";

export default class BiolinkManager {
    constructor(private client: Client) {}

    /**
     * This method is used to set your biolink.
     * @param {string} biolink The biolink to set your biolink to
     * @returns {Promise<void>} Nothing
     */

    async setLink(biolink: string): Promise<void> {
        return await constructFetch("POST", "biolink/manage/media/link", this.client.jwt, false, { link: biolink });
    }

    /**
     * This method is used to set your name.
     * @param {string} name The name to set your biolink to
     * @returns {Promise<void>} Nothing
     */

    async setName(name: string): Promise<void> {
        return await constructFetch("POST", "biolink/manage/media/name", this.client.jwt, false, { name: name });
    }

    /**
     * This method is used to set your bio.
     * @param {string} bio The bio to set your biolink to
     * @returns {Promise<void>} Nothing
     */

    async setBio(bio: string): Promise<void> {
        return await constructFetch("POST", "biolink/manage/media/bio", this.client.jwt, false, { bio: bio });
    }

    /**
     * This method is used to set your profile picture.
     * @param {string} pfp The profile picture url to set your biolink to
     * @returns {Promise<void>} Nothing
     */

    async setProfilePicture(pfp: string): Promise<void> {
        return await constructFetch("POST", "biolink/manage/media/profilepicture", this.client.jwt, false, { pfp: pfp });
    }

    /**
     * This method is used to set your background picture.
     * @param {string} bg The background picture url to set your biolink to
     * @returns {Promise<void>} Nothing
     */

    async setBackgroundPicture(bg: string): Promise<void> {
        return await constructFetch("POST", "biolink/manage/media/background", this.client.jwt, false, { bg: bg });
    }

    /**
     * This method is used to set your mp3 link.
     * @param {string} link The mp3 link to set your biolink to. Must be a direct link to the mp3 file.
     * @returns {Promise<void>} Nothing
     */

    async setMP3(link: string): Promise<void> {
        if (!link) link = "DISABLED";
        return await constructFetch("POST", "biolink/manage/premium/mp3", this.client.jwt, false, { mp3: link });
    }

    /**
     * This method is used to set your mp4 link.
     * @param {string} link The mp4 link to set your biolink to. Must be a direct link to the mp4 file.
     * @returns {Promise<void>} Nothing
     */

    async setMP4(link: string): Promise<void> {
        if (!link) link = "DISABLED";
        return await constructFetch("POST", "biolink/manage/premium/mp4", this.client.jwt, false, { mp4: link });
    }

    /**
     * This method is used to enable or disable the typewriter effect.
     * @param {boolean} enabled Whether to enable or disable the typewriter effect
     * @returns {Promise<void>} Nothing
     */

    async enableTypewriter(enabled: boolean): Promise<void> {
        return await constructFetch("POST", "biolink/manage/premium/typewriter", this.client.jwt, false, { enabled: enabled });
    }

    /**
     * This method is used to enable or disable the sparkles effect.
     * @param {boolean} enabled Whether to enable or disable the sparkles effect
     * @returns {Promise<void>} Nothing
     */

    async enableSparkles(enabled: boolean): Promise<void> {
        return await constructFetch("POST", "biolink/manage/premium/sparkles", this.client.jwt, false, { enabled: enabled });
    }

    /**
     * This method is used to set your name colour.
     * @param {string} hex The hex colour to set your name colour to
     * @returns {Promise<void>} Nothing
     */

    async setNameColour(hex: string): Promise<void> {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (!hexColorRegex.test(hex)) throw new Error("Invalid hex color");
        return await constructFetch("POST", "biolink/manage/premium/namecolour", this.client.jwt, false, { hex: hex });
    }

    /**
     * This method is used to fetch a biolink's data.
     * @returns {Promise<BiolinkData>} Biolink data
     */

    async fetch(biolink: string): Promise<BiolinkData> {
        return await constructFetch("GET", `data/${biolink}/data`, this.client.jwt, true).then((res) => {
            return res.data.biolink;
        });
    }
}
