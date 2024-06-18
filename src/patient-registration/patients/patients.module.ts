import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { ClinicalRecord } from '../clinical-records/entities/clinical-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient, ClinicalRecord])],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
