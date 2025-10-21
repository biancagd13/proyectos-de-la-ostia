import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id_producto: number;

    @Column()
    descripcion: string;

    @Column()
    activo: boolean;

    @Column( {type: 'float'})
    precio: number;

    @Column()
    categoria: string;

    @Column()
    estado_pedido: string;

    @Column()
    stock: number;

    @Column()
    correo: string;

    @Column( { type: "text" } )
    imagen_1: string;
    
    @Column()
    imagen_2: string;

    @Column()
    imagen_3: string;
}