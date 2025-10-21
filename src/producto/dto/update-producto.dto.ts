import{
    IsString,
    IsEmail,
    IsBoolean,
    IsNumber,
    IsInt,
    IsPositive,
    Min,
    IsOptional,
} from "class-validator";

export class UpdateProductoDto {

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsBoolean()
    @IsOptional()
    activo: boolean;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    precio: number;

    @IsString()
    @IsOptional()
    categoria: string;

    @IsString()
    @IsOptional()
    estado_pedido: string;

    @IsInt()
    @Min(0)
    @IsOptional()
    stock: number;

    @IsEmail()
    @IsString()
    @IsOptional()
    correo: string;

    @IsString()
    @IsOptional()
    imagen_1: string;

    @IsString()
    @IsOptional()
    imagen_2: string;

    @IsString()
    @IsOptional()
    imagen_3: string;

}