import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientRegistrationModule } from './patient-registration/patient-registration.module';
import { PatientsModule } from './patient-registration/patients/patients.module';
import { ClinicalRecordsModule } from './patient-registration/clinical-records/clinical-records.module';
import { Patient} from './patient-registration/patients/entities/patient.entity';
import { ClinicalRecord } from './patient-registration/clinical-records/entities/clinical-record.entity';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres", 
  "password": "postgres", 
  "database": "clinical-records", 
  "entities": [ Patient, ClinicalRecord],
  "synchronize": true
    }
  ), PatientRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
