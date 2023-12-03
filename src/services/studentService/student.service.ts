import { Inject, Injectable } from '@nestjs/common';
import { IstudentRepository, IstudentRepositoryProvider } from 'src/repository/Irepository/istudent-repository/istudent-repository.interface';
import { IstudentService } from '../Iservices/istudent.interface';

@Injectable()
export class StudentService implements IstudentService {

constructor( @Inject(IstudentRepositoryProvider) private readonly _studentRepository: IstudentRepository){}
    
  findsAll() 
  {
        console.log("Inside Service")
        return this._studentRepository.findAll();
  }
}
