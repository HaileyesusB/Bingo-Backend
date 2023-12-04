import { Injectable } from '@nestjs/common';
import { IstudentRepository } from '../Irepository/istudent-repository/istudent-repository.interface';
import { student } from 'src/common/dto/student';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class StudentRepository implements IstudentRepository {

  constructor(private prisma: PrismaService) {}
    /*private studentData:student[] = [
        {
            //id:1,
            name: 'Ablaze',
            phone: '0911111111',
            Address: 'Megenaga',
            Class: 'A'
        }
      ]
      */
     async findAll(): Promise<student[]>
      {
        console.log("Inside repo")
       const  findAllStudents = '../scripts/student.sql'
        return await this.prisma.student.findMany();
      }

}