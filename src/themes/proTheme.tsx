import { StyleSheet } from 'react-native';
import { appTheme } from './appTheme'; 


export const proTheme = StyleSheet.create({

    // Estilo para las etiquetas (Descripción, Precio, etc.)
    label: {
        ...appTheme.title,      
        fontSize: 18,
        textAlign: 'left',
        alignSelf: 'stretch',   
        marginHorizontal: 5,
        marginTop: 20,
        marginBottom: 5,
    },


    switchStyle: {
        alignSelf: 'flex-start', 
        marginLeft: 5,
        marginVertical: 10,
        transform: [{ scale: 1.2 }], 
    },

    sectionTitle: {
        ...appTheme.title,
        fontSize: 18,
        textAlign: 'left',
        alignSelf: 'stretch',   
        marginHorizontal: 5,
        marginTop: 20,
        marginBottom: 10,
    },


    imagePreview: {
        borderRadius: 90,       
        height: 200,
        width: '90%',           
        alignSelf: 'center',    
        marginBottom: 10,
    },

});