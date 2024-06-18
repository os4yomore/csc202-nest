import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ClinicalRecord } from '../../clinical-records/entities/clinical-record.entity';


@Entity()
export class Patient {
@PrimaryGeneratedColumn() id: number;
@Column() firstName: string;
@Column() middleName: string;
@Column() lastName: string;
@Column() dateOfBirth: Date;
@Column() dateOfRegistration: Date;
@Column() address: string
@Column({ default: true }) _22120613036: boolean;
@JoinColumn()
@OneToMany(type => ClinicalRecord, clinicalRecord => clinicalRecord.patient)
clinicalRecord: ClinicalRecord[];
}

