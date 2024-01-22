import Client from "../client/Client";
import { constructFetch } from "../util/Functions";
import { SocialsData } from "../util/Interfaces";

export default class SocialsManager {
    constructor(private client: Client) {}

    /**
     * This method creates a social for a biolink.
     * @param {number} site The site you are creating a social for. E.g. Discord, Twitter, etc.
     * @param {string} link The unique link to your profile on the site. E.g. https://discord.gg/abc123 -> abc123
     * @returns {Promise<void>} Nothing
     */

    async create(site: number, link: string): Promise<void> {
        const enumValues = Object.values(this.client.sites) as number[];
        const lastEnumValue = enumValues[enumValues.length - 1];
        if (site > lastEnumValue) throw new Error("Invalid site ID");
        return await constructFetch("POST", "biolink/manage/socials/create", this.client.jwt, false, { site: site, link: link });
    }

    /**
     *
     * @param {number} siteId The unique ID of the social you are updating. **Not the site ID.**
     * @param {string} newLink The new link of your social of the same base site. E.g. abc123 -> xyz456
     * @returns {Promise<void>} Nothing
     */

    async update(siteId: number, newLink: string): Promise<void> {
        return await constructFetch("POST", "biolink/manage/socials/update", this.client.jwt, false, { siteId: siteId, newLink: newLink });
    }

    /**
     *
     * @param {number} siteId The unique ID of the social you are deleting. **Not the site ID.**
     * @returns {Promise<void>} Nothing
     */

    async delete(siteId: number): Promise<void> {
        return await constructFetch("POST", "biolink/manage/socials/delete", this.client.jwt, false, { siteId: siteId });
    }

    /**
     *
     * @param biolink The biolink to fetch socials from
     * @returns {Promise<Array<SocialsData>>} An array of socials data
     */

    async fetch(biolink: string): Promise<Array<SocialsData>> {
        return await constructFetch("GET", `data/${biolink}/socials`, this.client.jwt, true).then((res) => {
            return res.socials;
        });
    }
}
