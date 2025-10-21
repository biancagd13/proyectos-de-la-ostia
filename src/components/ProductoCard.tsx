import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { ProductoResponse } from "../interfaces/productoInterfaces";

interface Props {
    producto: ProductoResponse;
}

export const ProductoCard = ( { producto }: Props ) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{ marginHorizontal: 10, marginBottom: 25 }} 
            onPress={ () => navigation.navigate("FormProducto",{...producto}) }
        >

            <LinearGradient
                colors={['#9f3177ff', '#0d0d0d']} 
                style={ style.cardContainer } 
                  
            >

                <Text style={ style.title }>
                    { `Descripcion: \n${producto.descripcion}\n` }
                </Text>

                <Text style={ style.title }>
                    { `Activo: \n${producto.activo}\n` }
                </Text>

                <Text style={ style.title }>
                    { `Precio: \n${producto.precio}\n` }
                </Text>

                <Text style={ style.title }>
                    { `Categoria: \n${producto.categoria}\n` }
                </Text>

                <Text style={ style.title }>
                    { `Estado del pedido: \n${producto.estado_pedido}\n` }
                </Text>

                <Text style={ style.title }>
                    { `Stock: \n${producto.stock}\n` }
                </Text>

                <Text style={ style.content }>
                    { `Correo: \n${producto.correo}\n` }
                </Text>

                <Image
                    style={ style.avatar }
                    source={{ uri: `data:image/jpeg;base64,${producto.imagen_1}` }}
                />

                <Image
                    style={ style.avatar }
                    source={{ uri: `data:image/jpeg;base64,${producto.imagen_2}` }}
                />

                <Image
                    style={ style.avatar }
                    source={{ uri: `data:image/jpeg;base64,${producto.imagen_3}` }}
                />

            </LinearGradient>

        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    avatar: {
        top: -10,
        right:-10,
        height: 100,
        width: 100,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "black",
        position: "absolute"
    },
    cardContainer: {
        height: 400,
        width: 180,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginHorizontal: -3,
        marginTop: 20,

    },
    title:{
        marginTop: 5,
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },
    content:{
        marginTop: 10,
        color: "white",
        fontSize: 11,
        textAlign: "center"
    },
});