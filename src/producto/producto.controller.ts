import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Patch, 
    Param, 
    Delete,
    ValidationPipe
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('producto')
export class ProductoController {

    constructor(
        private readonly productoService: ProductoService   
    ) {}

    @Post()
    async create( @Body( new ValidationPipe ) CreateProductoDto: CreateProductoDto ) {
        return await this.productoService.create( CreateProductoDto );
    }

    @Get()
    async findAll() {
        return await this.productoService.findAll();
  }

  @Get(':id_user')
  async findOne(@Param('id_user') id_user: number) {
    return await this.productoService.findOne(id_user);
  }

  @Patch(':id_user')
  async update(@Param('id_user') id_user: number, @Body() updateProductoDto: UpdateProductoDto) {
    return await this.productoService.update(id_user, updateProductoDto);
  }

  @Delete(':id_user')
  async remove(@Param('id_user') id_user: number) {
    return await this.productoService.remove(id_user);
  }

}