import React, { useEffect } from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { appTheme } from '../../themes/appTheme';
import { useProductoApi } from '../../hooks/useProductoApi';
import { ProductoCard } from '../../components/ProductoCard';
import { ProductoResponse } from '../../interfaces/productoInterfaces';
import { BtnTouch } from '../../components/BtnTouch';

export const HomeProducto = () => {

    const { isLoading, loadProducto, listProducto } = useProductoApi();

    const focused = useIsFocused();
    const navigation = useNavigation();

    const create: ProductoResponse = {
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

    useEffect(() => {
        (!isLoading) && loadProducto();
    }, [ focused ]); 

    return (

        // se remplaza el View por LinearGradient
        <LinearGradient
            colors={['#0d0d0d', '#0d0d0d']} // Colores del degradado 
            style={ styles.gradientContainer } // Aplica estilo para ocupar toda la pantalla
        >

            <FlatList
                data={ Object.values(listProducto) } 
                keyExtractor={ (item) => "#"+item.id_producto }
                ListHeaderComponent={(
                    <View style={ appTheme.container } >

                        <Text style={[ appTheme.title, { color: 'white' } ]}> Productos</Text>


                        <BtnTouch
                            titulo='Crear producto'
                            color='#830e44ff'
                            action={ () => navigation.navigate("FormProducto",{...create}) }
                        />
                    </View>

                )}
                refreshControl={(
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={ loadProducto } 
                        colors={[ "pink", "violet", "black" ]}
                        progressBackgroundColor="black"
                        tintColor={"white"}
                    />
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={ ({item}) => (
                    <ProductoCard
                        producto={ item }
                    />
                )}

                contentContainerStyle={ styles.listContentContainer }
            />
        </LinearGradient> 
    )
}

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1, 
    },
    listContentContainer: {
        paddingHorizontal: 5,
        paddingBottom: 20, 
    },
});