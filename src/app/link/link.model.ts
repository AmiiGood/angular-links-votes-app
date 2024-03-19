export class Link{
    title: string;
    link: string;
    votes: number;

    constructor(title:string, link:string, votes?:number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(){
        this.votes = this.votes+1;
    }

    voteDown(){
        this.votes = this.votes-1;
    }
}