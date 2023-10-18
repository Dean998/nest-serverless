import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(id: number, name: string, date: string): Promise<{
        id: number;
        name: string;
        date: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        date: Date;
    }[]>;
}
