import { IsString } from 'class-validator';

export class CreateVeterinariaDto {
  @IsString()
  name: string;
  @IsString()
  nombre: string;

  @IsString()
  especie: string;

  @IsString()
  raza: string;

  @IsString()
  color: string;

  @IsString()
  fecha_nacimiento: string;

  @IsString()
  peso_kg: string;

  @IsString()
  nombre_duenio: string;

  @IsString()
  telefono_duenio: string;

  @IsString()
  email_duenio: string;

  @IsString()
  estado: string;
}