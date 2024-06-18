import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import {Patient} from '../../patients/entities/patient.entity'
@Entity()
export class ClinicalRecord 
{
@PrimaryGeneratedColumn() id: number;
@Column() clinicalDate: Date;
@Column() natureOfAilment: string;
@Column() medicinePrescribed: string;
@Column() procedureUndertaken: string;
@Column({nullable: true}) dateOfNextAppointment: Date;
@ManyToOne( () => Patient, patient => patient.clinicalRecord)
patient: Patient;
}
