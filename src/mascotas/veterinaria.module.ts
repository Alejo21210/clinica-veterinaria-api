import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeterinariaService } from './veterinarias.service';
import { VeterinariasController } from './veterinaria.controller';
import { Veterinaria } from './veterinaria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Veterinaria])],
  controllers: [VeterinariasController],
  providers: [VeterinariaService],
})
export class VeterinariaModule {}