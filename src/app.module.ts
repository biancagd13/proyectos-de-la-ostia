import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tareas/tarea.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tareas/entities/tarea.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Producto } from './producto/entities/producto.entity';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "12345",
        database: "dsm432025",
        entities: [ Usuario, Tarea, Producto, Empresa ],
        synchronize: true,
        autoLoadEntities: true,
    }),
    TareaModule,
    UsuariosModule,
    ProductoModule,
    EmpresaModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
