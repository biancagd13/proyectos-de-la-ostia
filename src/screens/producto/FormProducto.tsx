import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Switch, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../components/BtnTouch';
import { useProductoForm } from '../../hooks/useProductoForm';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/ProductoNavigator';
import { useImagePicker } from '../../hooks/useImagePicker';
import { proTheme } from '../../themes/proTheme'; 


interface Props extends StackScreenProps<RootStackParams,"FormProducto">{};

export const FormProducto = ( { route, navigation }: Props ) => {

    const { state, handleInputChange, handleSubmit, handleDelete } = useProductoForm();

    const { pickImages, resetImagenes64 } = useImagePicker(); 


    const [textPrecio, setTextPrecio] = useState(String(state.precio)); 
    
    
    const handleMultiImageSelection = async () => {

        const base64List = (await pickImages()) || []; 

        const imageFields: Array<keyof typeof state> = ["imagen_1", "imagen_2", "imagen_3"];
        const maxImages = imageFields.length; // 3


        const assignedValues = [
            ...base64List.slice(0, maxImages), 
            ...Array(maxImages - base64List.length).fill('') 
        ];


        imageFields.forEach((fieldName, index) => {
            handleInputChange(fieldName, assignedValues[index]);
        });
        
        resetImagenes64(); 
    };


    useEffect(() => {
        const producto = route.params;
        if (producto) {
            handleInputChange("id_producto", producto.id_producto);
            handleInputChange("descripcion", producto.descripcion);
            handleInputChange("activo", producto.activo);
            handleInputChange("precio", producto.precio);
            handleInputChange("categoria", producto.categoria);
            handleInputChange("estado_pedido", producto.estado_pedido); 
            handleInputChange("stock", producto.stock);
            handleInputChange("correo", producto.correo);
            handleInputChange("imagen_1", producto.imagen_1);
            handleInputChange("imagen_2", producto.imagen_2);
            handleInputChange("imagen_3", producto.imagen_3);
            

            setTextPrecio(String(producto.precio));
        }
    },[]);


    useEffect(() => {
        setTextPrecio(String(state.precio));
    }, [state.precio]);


    return (

        <LinearGradient
            colors={['#9f3177ff', '#0d0d0d']} 
            style={formStyles.gradientContainer} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <ScrollView
                style={{ flex: 1, margin: 10 }}
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}
                keyboardShouldPersistTaps='handled'
            >
                <Text style={[ appTheme.title, { color: 'white' } ]}>Formulario de Productos</Text>

                { ( state.id_producto !== 0 ) && (
                    <BtnTouch
                        titulo='Borrar Producto'
                        color='#b91762ff'
                        action={() => {
                            handleDelete();
                            navigation.popToTop();
                        }}
                    />
                )}


                <View style={{width: '90%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={[proTheme.label, {color: 'white'}]}>
                        Descripcion
                        </Text>
                    <TextInput
                        style={ appTheme.textInput }
                        placeholder='Descripcion'
                        placeholderTextColor='gray' 
                        value={ state.descripcion }
                        onChangeText={ (value) => handleInputChange("descripcion",value) }
                    />

                    <Text style={[proTheme.label, {color: 'white'}]}>
                        Activo
                        </Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#510945ff" }}
                        thumbColor={state.activo ? "rgba(228, 75, 245, 1)ff" : "#f4f3f4"}
                        style={proTheme.switchStyle}
                        value={ state.activo }
                        onValueChange={ (value) => handleInputChange("activo", value) }
                    />

                    <Text style={[proTheme.label, {color: 'white'}]}>
                        Precio
                        </Text>
                    
                    <TextInput
                        style={ appTheme.textInput }
                        placeholder='Precio'
                        placeholderTextColor='gray'
                        keyboardType="numeric" 
                        value={ textPrecio }
                        
                        onChangeText={ (value) => {
                            setTextPrecio(value);
                            const cleanedValue = value.replace(/,/g, '.').replace(/[^\d.]/g, '');
                            const parts = cleanedValue.split('.');
                            const finalValue = parts.length > 1 
                                ? parts[0] + '.' + parts.slice(1).join('')
                                : parts[0];

                            const numberValue = parseFloat(finalValue);
                            handleInputChange("precio", numberValue || 0);
                        }}
                    />

                    <Text style={[proTheme.label, {color: 'white'}]}>
                        Categoria
                        </Text>
                        
                    <TextInput
                        style={ appTheme.textInput }
                        placeholder='Categoria'
                        placeholderTextColor='gray'
                        value={ state.categoria }
                        onChangeText={ (value) => handleInputChange("categoria",value) }
                    />

                    <Text style={[proTheme.label, {color: 'white'}]}>
                        Estado de pedido
                        </Text>

                    <TextInput
                        style={ appTheme.textInput }
                        placeholder='Estado de pedido'
                        placeholderTextColor='gray'
                        value={ state.estado_pedido }
                        onChangeText={ (value) => handleInputChange("estado_pedido",value) }
                    />

                    <Text style={[proTheme.label, {color: 'white'}]}>
                        Stock
                        </Text>

                    <TextInput
                        style={ appTheme.textInput }
                        placeholder='Stock'
                        placeholderTextColor='gray'
                        keyboardType='numeric'
                        value={ String(state.stock) }
                        onChangeText={ (value) => handleInputChange("stock", parseFloat(value) || 0) }
                    />

                    <Text style={[proTheme.label, {color: 'white'}]}>
                        Correo electrónico
                        </Text>

                    <TextInput
                        style={ appTheme.textInput }
                        placeholder='Correo'
                        placeholderTextColor='gray'
                        value={ state.correo }
                        onChangeText={ (value) => handleInputChange("correo",value) }
                        keyboardType="email-address"
                    />


                    <Text style={[proTheme.sectionTitle, {color: 'white'}]}>
                        Imágenes </Text>

                    {/*  BOTÓN PARA SELECCIÓN MÚLTIPLE  */}
                    <BtnTouch
                        titulo='Seleccionar Imágenes'
                        color='#9e096fff'
                        action={handleMultiImageSelection} 
                    />

                    
                    <Text style={[proTheme.label, {color: 'white', marginTop: 15}]}>
                        Imagen 1</Text>
                    { ( state.imagen_1 ) && (
                        <Image style={proTheme.imagePreview} source={{ uri: `data:image/jpeg;base64,${state.imagen_1}` }} />
                    )}

                    <Text style={[proTheme.label, {color: 'white', marginTop: 15}]}>
                        Imagen 2</Text>
                    { ( state.imagen_2 ) && (
                        <Image style={proTheme.imagePreview} source={{ uri: `data:image/jpeg;base64,${state.imagen_2}` }} />
                    )}

                    <Text style={[proTheme.label, {color: 'white', marginTop: 15}]}>
                        Imagen 3</Text>
                    { ( state.imagen_3 ) && (
                        <Image style={proTheme.imagePreview} source={{ uri: `data:image/jpeg;base64,${state.imagen_3}` }} />
                    )}


                    <BtnTouch
                        titulo={ (state.id_producto !== 0) ? "Actualizar Producto" : "Crear producto" }
                        color='#830e44ff'
                        action={ () => {
                            handleSubmit();
                            navigation.popToTop();
                        }}
                    />
                    
                    <BtnTouch
                        titulo='Regresar'
                        color='#830e70ff'
                        action={ () => navigation.popToTop() }
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    )
}


const formStyles = StyleSheet.create({
    gradientContainer: {
        flex: 1, 
    },
});