import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, Alert, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../components/BtnTouch';
import { useFormUser } from '../../hooks/useFormUser';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/UserNavigator';
import { useImagePicker } from '../../hooks/useImagePicker';

interface Props extends StackScreenProps<RootStackParams,"FormUser">{};


const GRADIENT_COLORS = {
    start: '#53359E', 
    end: '#764BA2',   
    labelColor: '#FFFFFF', 
};

export const FormUser = ( { navigation, route } :Props ) => {

    const { state, handleInputChange, handleSubmit, handleDelete } = useFormUser();
    const { imagen64, pickImage } = useImagePicker();

    useEffect(() => {
        const user = route.params;
        handleInputChange("id_user",user.id_user);
        handleInputChange("username",user.username);
        handleInputChange("email",user.email);
        handleInputChange("image",user.image);
        handleInputChange("update",user.update);
    },[]);

    useEffect(() => {
        imagen64 && handleInputChange("image", imagen64);
    }, [imagen64]);

    return(

        <LinearGradient

        colors={[GRADIENT_COLORS.start, GRADIENT_COLORS.end]}
            style={styles.gradientContainer}
        >
            <View
                style={ appTheme.marginGlobal }
            >

                <Text
                    style={[ appTheme.title, { color: GRADIENT_COLORS.labelColor } ]} 
                >
                    Formulario de usuarios
                </Text>
                { ( state.id_user !== 0 ) && (
                    <BtnTouch
                        titulo='Borrar Usuario'
                        color='red'
                        action={() => {
                            handleDelete();
                            navigation.popToTop();
                        }}
                    />)
                }
                <View
                    style={ appTheme.container }
                >

                    <Text
                        style={{
                            ...appTheme.title,
                            fontSize: 18,
                            textAlign: "left",
                            alignSelf: "flex-start",
                            marginHorizontal: 5,
                            marginTop: 20,
                            color: GRADIENT_COLORS.labelColor,
                        }}
                    >
                        Nombre del usuario
                    </Text>
                    <TextInput
                        style={ appTheme.textInput }
                        placeholder='Nombre del usuario'
                        value={ state.username }
                        onChangeText={ (value) => handleInputChange("username",value) }
                        placeholderTextColor="gray"
                    />
                    

                    <Text
                        style={{
                            ...appTheme.title,
                            fontSize: 18,
                            textAlign: "left",
                            alignSelf: "flex-start",
                            marginHorizontal: 5,
                            marginTop: 5,
                            color: GRADIENT_COLORS.labelColor,
                        }}
                    >
                        Contraseña del usuario
                    </Text>
                    <TextInput
                        style={ appTheme.textInput }
                        placeholder={ (state.id_user === 0) ? "Ingresar contraseña" : "Actualizar contraseña" }
                        value={ state.password }
                        onChangeText={ (value) => handleInputChange("password",value) }
                        secureTextEntry={ true }
                        keyboardType="number-pad"
                        keyboardAppearance="dark"
                        placeholderTextColor="gray"
                    />
                    

                    <Text
                        style={{
                            ...appTheme.title,
                            fontSize: 18,
                            textAlign: "left",
                            alignSelf: "flex-start",
                            marginHorizontal: 5,
                            marginTop: 5,
                            color: GRADIENT_COLORS.labelColor,
                        }}
                    >
                        Correo electrónico
                    </Text>
                    <TextInput
                        style={ appTheme.textInput }
                        placeholder='Correo'
                        value={ state.email }
                        onChangeText={ (value) => handleInputChange("email",value) }
                        keyboardType="email-address"
                        placeholderTextColor="gray"
                    />
                    

                    <BtnTouch
                        titulo='Seleccionar imagen'
                        color='pink'
                        action={ () => pickImage() }
                    />
                    

                    { ( state.image ) && (
                        <Image
                            style={{
                                ...appTheme.avatar,
                                height: 200,
                                width: 200,
                                borderWidth: 3, 
                                borderColor: GRADIENT_COLORS.labelColor, 
                                borderRadius: 100,
                                marginTop: 10,
                            }}
                            source={{ uri: `data:image/jpeg;base64,${state.image}` }} 
                        />)
                    }
                    

                    <BtnTouch
                        titulo={ (state.id_user !== 0) ? "Actualizar usuario" : "Crear usuario" }
                        color='violet'
                        action={ () => {
                            handleSubmit();
                            navigation.popToTop();
                        }}
                    />
                    

                    <BtnTouch
                        titulo='Regresar'
                        color='violet'
                        action={ () => navigation.popToTop() }
                    />
                </View>
            </View>
        </LinearGradient>

)
}


const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1, 
    },
});