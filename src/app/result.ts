export class Result {
    id : string;
    
    score : string;
    result : string;
    userName :string;

    constructor(score : string,result : string,userName :string)
    { 
        this.score =score;
        this.result = result;
        this.userName = userName;

    }
}
