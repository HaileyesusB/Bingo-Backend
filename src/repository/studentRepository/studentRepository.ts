import { Injectable } from '@nestjs/common';
import { IstudentRepository } from '../Irepository/istudent-repository/istudent-repository.interface';
import { student } from 'src/common/dto/student';

@Injectable()
export class StudentRepository implements IstudentRepository {

    private studentData:student[] = [
        {
            //id:1,
            name: 'Ablaze',
            phone: '0911111111',
            Address: 'Megenaga',
            Class: 'A'
        }
      ]
      findAll()
      {
        console.log("Inside repo")
        return this.studentData;
      }
}