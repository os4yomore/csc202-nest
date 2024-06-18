import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';
import { ClinicalRecord } from './entities/clinical-record.entity'

@Injectable()
export class ClinicalRecordsService {

  constructor(
    @InjectRepository(ClinicalRecord)
    private ClinicalRecordRepository: Repository<ClinicalRecord>
    ){}
    
  async create(createClinicalRecordDto: CreateClinicalRecordDto) {
    const newClinicalRecord: ClinicalRecord = this.ClinicalRecordRepository.create(createClinicalRecordDto)
    return this.ClinicalRecordRepository.save(newClinicalRecord);

  }

  async findAll() {
    return await this.ClinicalRecordRepository.find();
  }

  async findOne(id: number) {
    return await this.ClinicalRecordRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateClinicalRecordDto: UpdateClinicalRecordDto) {
    return await this.ClinicalRecordRepository.update(id, updateClinicalRecordDto);
  }

  async remove(id: number) {
    return await this.ClinicalRecordRepository.delete(id);
  }
}
