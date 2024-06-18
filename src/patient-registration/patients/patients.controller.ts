import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('/api/patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  
  @Get('create')
  @Render('users/create-user.html') createForm() {
  }
  
  @Post('/create')
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
