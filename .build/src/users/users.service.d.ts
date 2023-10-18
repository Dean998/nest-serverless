import { PrismaService } from '../../prisma';
import { Bookings } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(id: number, name: string, date: string): Promise<Bookings>;
    findAll(): Promise<Bookings[]>;
}
