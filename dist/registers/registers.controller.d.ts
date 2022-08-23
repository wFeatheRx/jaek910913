import { Register } from 'src/viewmodel/register';
import { RegistersService } from './registers.service';
export declare class RegistersController {
    private readonly registerService;
    constructor(registerService: RegistersService);
    insertOne(register: Register): Promise<any>;
    insertMany(registers: Register[]): Promise<any>;
    addRegister(register: Register): Promise<any>;
    findAll(): Promise<any>;
    findOne(phone: string): Promise<any>;
    updateOne(register: Register): Promise<any>;
    deleteOne(id: string): Promise<void>;
}
