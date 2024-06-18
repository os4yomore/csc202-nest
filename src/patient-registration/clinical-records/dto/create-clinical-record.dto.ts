export class CreateClinicalRecordDto 
{
  readonly clinicalDate: Date;
  readonly natureOfAilment: string;
  readonly medicinePrescribed: string;  
  readonly procedureUndertaken: string; 
  readonly dateOfNextAppointment?: Date;
  readonly patientId: number; 
}
