import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Veterinaria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  especie: string;

  @Column()
  raza: string;

  @Column()
  color: string;

  @Column()
  fecha_nacimiento: string;

  @Column()
  peso_kg: string;

  @Column()
  nombre_duenio: string;

  @Column()
  telefono_duenio: string;

  @Column()
  email_duenio: string;

  @Column()
  estado: string;
}

