export interface UsernameLoginDetails {
    username: string;
    password: string;
}

export interface EmailLoginDetails {
    email: string;
    password: string;
}

export interface BiolinkData {
    id: number;
    name: string;
    link: string;
    bio: string;
    created_by: string;
    verified: boolean;
    premium: boolean;
    donator: boolean;
    booster: boolean;
    early: boolean;
    staff: boolean;
    profile_picture: string;
    background: string;
    music: string;
    spotify_theme: number;
    discorduserid: string;
    discord_status: boolean;
    discord_activity: boolean;
    premium_name_color: string;
    premium_border_color: string;
    premium_sparkles: boolean;
    premium_typewriter: string;
    premium_music: string;
    premium_video: string;
}

export interface UserData {
    id: number;
    username: string;
    email: string;
}

export interface SocialsData {
    id: number;
    site: number;
    biolinkId: number;
    username: string;
}

export interface DiscordData {
    discord_status: string;
    active_on_mobile: boolean;
    active_on_desktop: boolean;
    listening_to_spotify: boolean;
    spotify: {
        timestamps: {
            start: number;
            end: number;
        };
        song: string;
        artist: string;
        album_art_url: string;
        album: string;
    } | null;
    discord: {
        user: {
            username: string;
            id: string;
            account_type: string;
            avatar: string | null;
            banner: string | null;
            public_flags: number;
        };
        badges: {
            active_dev: boolean;
            verified_bot_dev: boolean;
            partner: boolean;
            early_supporter: boolean;
            certified_moderator: boolean;
            discord_staff: boolean;
            bug_hunter_1: boolean;
            bug_hunter_2: boolean;
            hypesquad_balance: boolean;
            hypesquad_bravery: boolean;
            hypesquad_brilliance: boolean;
        };
        activities: [
            {
                name: string;
                type: number;
                url: string | null;
                details: string | null;
                state: string | null;
                applicationId: string | null;
                timestamps: {
                    start: string | null;
                    end: string | null;
                };
                party: {
                    id: string | null;
                    size: [number, number];
                } | null;
                assets: {
                    largeImage: string | null;
                    largeText: string | null;
                    largeImageURL: string | null;
                    smallImage: string | null;
                    smallText: string | null;
                    smallImageURL: string | null;
                } | null;
                flags: number;
                emoji: {
                    name: string;
                    id: string;
                    animated: boolean;
                    createdTimestamp: number;
                    url: string;
                    identifier: string;
                } | null;
                buttons: [] | null;
                createdTimestamp: number;
            },
        ];
        customPresence:
            | {
                  enabled: boolean;
                  name: string;
                  type: number;
                  url: string | null;
                  details: string | null;
                  state: string | null;
                  applicationId: string | null;
                  timestamps: {
                      start: string | null;
                      end: string | null;
                  };
                  party: {
                      id: string | null;
                      size: [number, number];
                  } | null;
                  assets: {
                      largeImage: string | null;
                      largeText: string | null;
                      largeImageURL: string | null;
                      smallImage: string | null;
                      smallText: string | null;
                      smallImageURL: string | null;
                  } | null;
                  flags: 0;
                  emoji: {
                      name: string;
                      id: string;
                      animated: boolean;
                      createdTimestamp: number;
                      url: string;
                      identifier: string;
                  } | null;
                  buttons: [] | null;
                  createdTimestamp: number;
              }
            | false;
    };
}
