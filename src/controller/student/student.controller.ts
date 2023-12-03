import { Controller, Get, Inject, Res } from '@nestjs/common';
import { IstudentService, IstudentServiceProvider } from 'src/services/Iservices/istudent.interface';

@Controller('student')
export class StudentController {
    constructor(@Inject(IstudentServiceProvider) private readonly _studentService: IstudentService){}

    @Get('GetAllStudents')
    findsAll() {
        console.log("Going to Service")
        return this._studentService.findsAll()
     // response.status(200).send(this._studentService.findsAll());
    }
    
}
