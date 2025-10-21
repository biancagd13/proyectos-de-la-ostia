import { useEffect, useState } from "react";
import { productoApi } from "../api/productoApi";
import { ProductoResponse } from "../interfaces/productoInterfaces";
import { FormProductoData } from "./useProductoForm";

interface UseProductoApi {
    isLoading:         boolean;
    listProducto:      ProductoResponse;
    loadProducto:      () => void;
    createProducto:    (data: FormProductoData) => void;
    updateProducto:    (data: FormProductoData) => void;
    deleteProducto:    (data: FormProductoData) => void;
}
    

export const useProductoApi = (): UseProductoApi => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ listProducto, setListProducto ] = useState<ProductoResponse>({} as ProductoResponse);
    const urlApi = "http://10.77.209.173:3000/api/dsm43/producto";

    const loadProducto = async () => {
        setIsLoading(true);
        const response = await productoApi.get<ProductoResponse>( urlApi );
        setListProducto( response.data );
        setIsLoading(false);
    }

    useEffect(()=> {
        loadProducto();
    },[]);

    const createProducto = async ( data: FormProductoData ) => {
        const dataBody = {
        
            descripcion:     data.descripcion,
            activo:         data.activo,
            precio:         data.precio,
            categoria:     data.categoria,
            estado_pedido:  data.estado_pedido,
            stock:          data.stock,
            correo:         data.correo,
            imagen_1:        data.imagen_1,
            imagen_2:        data.imagen_2,
            imagen_3:        data.imagen_3,

        } 
        await productoApi.post(urlApi, dataBody);
    }

    const updateProducto = async (data: FormProductoData) => {
        const dataBody = {
            descripcion:     data.descripcion,
            activo:         data.activo,
            precio:         data.precio,
            categoria:     data.categoria,
            estado_pedido:  data.estado_pedido,
            stock:          data.stock,
            correo:         data.correo,
            imagen_1:        data.imagen_1,
            imagen_2:        data.imagen_2,
            imagen_3:        data.imagen_3,
        }
        await productoApi.patch(`${urlApi}/${data.id_producto}`, dataBody);
    };

    const deleteProducto = async ( data: FormProductoData ) => {
        await productoApi.delete(urlApi + `/${data.id_producto}`);
    }

    return { isLoading, listProducto, loadProducto, createProducto, updateProducto, deleteProducto };
}

    
    
