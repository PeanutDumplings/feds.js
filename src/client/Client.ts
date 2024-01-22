import UserManager from "../managers/UserManager";
import BiolinkManager from "../managers/BiolinkManager";
import SocialsManager from "../managers/SocialsManager";
import SpotifyManager from "../managers/SpotifyManager";
import DiscordManager from "../managers/DiscordManager";
import { Constants } from "../util/Constants";
import { LoginDetails } from "../util/Types";
import { constructFetch } from "../util/Functions";

/**
 * The main client class. The entry point for interacting with the API.
 */

export default class Client {
    public user: UserManager;
    public biolink: BiolinkManager;
    public socials: SocialsManager;
    public spotify: SpotifyManager;
    public discord: DiscordManager;

    constructor() {
        this.user = new UserManager(this);
        this.biolink = new BiolinkManager(this);
        this.socials = new SocialsManager(this);
        this.spotify = new SpotifyManager(this);
        this.discord = new DiscordManager(this);
    }

    public readonly baseUrl: string = Constants.BaseURL;
    public readonly baseAPIUrl: string = Constants.BaseAPIURL;
    public jwt: string | undefined;

    /**
     *
     * @param {LoginDetails} details The login details. Either a combination of username and password, or email and password - but not both.
     * @returns {Promise<string>} The JWT token
     */

    async login(details: LoginDetails): Promise<string> {
        const { password } = details;
        if (!password) throw new Error("No password provided");

        if ("username" in details && "email" in details) {
            throw new Error("Cannot provide both username and email");
        }

        const userOrEmail: string = "username" in details ? details.username : details.email;

        const data = await fetch(`${this.baseAPIUrl}/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                userOrEmail,
                password,
            }),
        });

        const json = await data.json();
        if (!json.success) {
            throw new Error(json.message);
        }

        this.jwt = data.headers.get("Set-Cookie").split(";")[0].split("=")[1];
        return this.jwt;
    }

    /**
     * Logs the user out.
     * @returns {Promise<void>} Nothing
     */

    async logout(): Promise<void> {
        if (!this.jwt) throw new Error("Not logged in");
        await constructFetch("POST", "auth/logout", this.jwt, false);
        this.jwt = undefined;
    }
}
