export class Card {
    user_id: number;
    profile_avatar: string;
    title: string;
    description: string;
    date: string;
    pictures: string[];


    constructor(user_id: number, profile_avatar: string, title: string, description: string, date: string, pictures: string[]) {
        this.user_id = user_id;
        this.profile_avatar = profile_avatar;
        this.title = title;
        this.description = description;
        this.date = date;
        this.pictures = pictures;
    }
}
