import {
    IsString,
    IsEmail,
    IsBoolean,
    IsNumber,
    IsInt,
    IsPositive,
    Min,

} from "class-validator";

export class CreateProductoDto {
    

    @IsString()
    descripcion: string;
    
    @IsBoolean()
    activo: boolean;
    
    @IsNumber()
    @IsPositive()
    precio: number;
    
    @IsString()
    categoria: string;
    
    @IsString()
    estado_pedido: string;
    
    @IsInt()
    @Min(0)
    stock: number;
    
    @IsEmail()
    @IsString()
    correo: string;
    
    @IsString()
    imagen_1: string;
    
    @IsString()
    imagen_2: string;
    
    @IsString()
    imagen_3: string;
    
    }
