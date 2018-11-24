export class User {
    id : number ;
    password : string ;
    firstName : string ;
    lastName : string ;
    email : string ;
    status : Status ;
}

export const Status : {[k in string] : k} = {
online : "online",
offline :"offline",
busy : "busy"
};

export type  Status = keyof typeof Status ;
