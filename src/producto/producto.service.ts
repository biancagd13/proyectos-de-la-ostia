import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Producto } from "./entities/producto.entity";
import { CreateProductoDto } from "./dto/create-producto.dto";
import { UpdateProductoDto } from "./dto/update-producto.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) {}

    async create( CreateProductoDto: CreateProductoDto ){
        const register = this.productoRepository.create( CreateProductoDto );
        return await this.productoRepository.save( register );
    }

    async update( id_producto: number, UpdateProductoDto: UpdateProductoDto ){
        return await this.productoRepository.update( id_producto, UpdateProductoDto );
    }

    async findOne( id_producto: number ){
        return await this.productoRepository.findBy( {id_producto} );
    }

    async findAll( ){
        return await this.productoRepository.find(  );
    }

    async remove( id_producto: number ){
        return await this.productoRepository.delete( id_producto );
    }

}