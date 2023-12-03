export const IstudentRepositoryProvider = 'IstudentRepositoryProvider';

export interface IstudentRepository {

   // findAll(): Observable<student[]>;
  //  findById(id: number): Observable<student | undefined>;

    findAll();
    
}
