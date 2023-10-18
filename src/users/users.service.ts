import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma'; // Adjust path
import { Bookings } from '@prisma/client';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.prisma.bookings.create({
      data: {
        ...createUserDto,
      },
    });
  }

  async findAll(): Promise<Bookings[]> {
    return this.prisma.bookings.findMany();
  }
}
