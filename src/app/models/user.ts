export interface User {
    id?: number;
    userName?: string;
    password?: string;
    email?: string;
    deleted?: boolean;
    role?: number;
}

export interface UserRootObjects {
    value: User[];
    statusCode: number;
    contentType?: any;
}
export interface UserRootObject {
    value: User;
    statusCode: number;
    contentType?: any;
}
