import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from 'src/services/studentService/student.service';
import { StudentRepository } from 'src/repository/studentRepository/studentRepository';
import { IstudentServiceProvider } from 'src/services/Iservices/istudent.interface';
import { IstudentRepositoryProvider } from 'src/repository/Irepository/istudent-repository/istudent-repository.interface';
import { PrismaService } from 'src/repository/prisma/prisma.service';


@Module({
    imports: [],
    controllers: [StudentController],
    //providers: [StudentService, StudentRepository]
     providers: [
       {
         provide: IstudentServiceProvider,
         useClass: StudentService
       },
       {
          provide: IstudentRepositoryProvider,
          useClass: StudentRepository
    },
    PrismaService
    ] 
   
  })
  export class StudentModule {}