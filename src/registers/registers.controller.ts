import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Register } from 'src/viewmodel/register';
import { RegistersService } from './registers.service';

@Controller('api/registers')
export class RegistersController {
  constructor(private readonly registerService: RegistersService) {}

  @Post()
  insertOne(@Body() register: Register) {
    return this.registerService.insertOne(register);
  }
  @Post('/batch')
  insertMany(@Body() registers: Register[]) {
    return this.registerService.insertMany(registers);
  }
  @Post('')
  addRegister(@Body() register: Register){
   return this.registerService.addRegister(register);
  }
  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get(':phone')
  findOne(@Param('phone') phone: string) {
    return this.registerService.findOne(phone);
  }

  @Put('/list')
  updateOne(@Body() register: Register) {
    return this.registerService.updateOne(register);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.registerService.deleteOne(id);
  }
}
