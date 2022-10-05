//making a class of registration with its properties.
export interface User{
    [x: string]: any;
    id:string;
    fullName:string;
    email:string;
    phone:number;
    department:string;
    issuccess: string;
}