import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: Date;
  address: string;
  dateOfRegistration: Date;
  _22120613036?: boolean;
}
