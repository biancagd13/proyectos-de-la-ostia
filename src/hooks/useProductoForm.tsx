import { useReducer } from "react";
import { useProductoApi } from "./useProductoApi";

export interface FormProductoData{
    id_producto:    number;
    descripcion:    string;
    activo:         boolean;
    precio:         number;
    categoria:      string;
    estado_pedido:  string;
    stock:          number;
    correo:         string;
    imagen_1:       string;
    imagen_2:       string;
    imagen_3:       string;
}

export interface UseProductoForm{
    state:              FormProductoData;
    handleInputChange:  ( fieldName: keyof FormProductoData, value: string | number ) => void;
    handleSubmit:       () => void;
    handleDelete:       () => void;
}


export const useProductoForm = (): UseProductoForm => {

    const { createProducto, updateProducto, deleteProducto } = useProductoApi();

    const initialForm: FormProductoData = {
        id_producto:    0,
        descripcion:    '',
        activo:         false,
        precio:         0,
        categoria:      '',
        estado_pedido:  '',
        stock:          0,
        correo:         '',
        imagen_1:       '',
        imagen_2:       '',
        imagen_3:       '',
    }

    type Action = { type: "handleInputChange", payload: { fieldName: keyof FormProductoData, value: string | number } };

    const formReducer = ( state: FormProductoData, action: Action ) => {
        switch( action.type ){
            case "handleInputChange":
                return {
                    ...state,
                    [action.payload.fieldName] : action.payload.value
                }
        }
    }

    const [ state, dispatch ] = useReducer(formReducer, initialForm);

    const handleInputChange = ( fieldName: keyof FormProductoData, value: string | number ) => {
        dispatch({ type: "handleInputChange", payload: { fieldName, value } });
    }

    const handleSubmit = () => ( state.id_producto == 0 ) ? createProducto(state) : updateProducto(state);

    const handleDelete = () => deleteProducto(state);

    return { state, handleInputChange, handleSubmit, handleDelete };

}