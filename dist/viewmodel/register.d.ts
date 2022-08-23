import { ObjectId } from "mongodb";
export declare class Register {
    _id: ObjectId;
    organize: string;
    visitNumber: number;
    visitTime: Date;
    contacts: string;
    phone: string;
    email: string;
    remark: string;
    updateAt: Date;
}
