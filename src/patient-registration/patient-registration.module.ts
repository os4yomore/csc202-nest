import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsService} from './patients/patients.service';
import { PatientsController } from './patients/patients.controller';
import { PatientsModule } from './patients/patients.module'
import { ClinicalRecordsModule } from './clinical-records/clinical-records.module'
import { ClinicalRecordsService} from './clinical-records/clinical-records.service';
import { ClinicalRecordsController } from './clinical-records/clinical-records.controller'
import { Patient } from './patients/entities/patient.entity';
import {ClinicalRecord} from './clinical-records/entities/clinical-record.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Patient, ClinicalRecord])],
  controllers: [PatientsController, ClinicalRecordsController ],
  providers: [PatientsService, ClinicalRecordsService ],
})

export class PatientRegistrationModule {}
