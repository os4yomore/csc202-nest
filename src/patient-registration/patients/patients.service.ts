import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { ClinicalRecord } from '../clinical-records/entities/clinical-record.entity'


@Injectable()
export class PatientsService {
constructor(

@InjectRepository(Patient)
private patientsRepository: Repository<Patient>,

@InjectRepository(ClinicalRecord)
private clinicalRecordsRepository: Repository<ClinicalRecord>
){}

async setUserById(patientId: number, recordId: number) {
  try {
    return await this.patientsRepository.createQueryBuilder()
      .relation(Patient, "clinicalRecord")
      .of(patientId)
      .set(recordId)
  } catch (error) {
    throw new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: `There was a problem setting user for student: ${error.message}`,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

async unsetUserById(patientId: number) {
  try {
    return await this.patientsRepository.createQueryBuilder()
      .relation(Patient, "clinicalRecord")
      .of(patientId)
      .set(null)
  } catch (error) {
    throw new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: `There was a problem unsetting user for student: ${error.message}`,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}


async create(createPatientDto: CreatePatientDto) {
   const newPatient: Patient = this.patientsRepository.create(createPatientDto) 
   return this.patientsRepository.save(newPatient);

}

async findAll() {
 return await this.patientsRepository.find();
}

async findOne(id: number) {
  return await this.patientsRepository.findOne({
    where: {
    id 
}
});}

async update(id: number, updatePatientDto: UpdatePatientDto) {
  return await this.patientsRepository.update(id, updatePatientDto);
}
async remove(id: number) {
   return await this.patientsRepository.delete(id);
} 
}
   
