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

export interface SocialsData {
    id: number;
    site: number;
    biolinkId: number;
    username: string;
}
