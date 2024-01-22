import Client from "../client/Client";
import { constructFetch } from "../util/Functions";
import { SocialsData } from "../util/Interfaces";

export default class SocialsManager {
    constructor(private client: Client) {}

    /**
     *
     * @param biolink The biolink to fetch socials from
     * @returns {Promise<Array<SocialsData>>} An array of socials data
     */

    async fetch(biolink: string): Promise<Array<SocialsData>> {
        return await constructFetch("GET", `data/${biolink}/socials`, this.client.jwt, true).then((res) => {
            return res.data.socials;
        });
    }

    // TODO: Add methods for creating, deleting and updating socials
}
