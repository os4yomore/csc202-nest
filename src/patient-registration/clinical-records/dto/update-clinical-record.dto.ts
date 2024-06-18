import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicalRecordDto } from './create-clinical-record.dto';

export class UpdateClinicalRecordDto extends PartialType(CreateClinicalRecordDto) {

 clinicalDate: Date;
  natureOfAilment: string;
  medicinePrescribed: string;  
  procedureUndertaken: string; 
  dateOfNextAppointment?: Date;
  patientId?: number;
  
}

