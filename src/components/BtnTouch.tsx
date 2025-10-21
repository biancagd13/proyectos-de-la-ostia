import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';

interface Props {
    titulo: string;
    action: () => void;
    color?: string; 
    textColor?: string; 
    style?: ViewStyle; 
    textStyle?: TextStyle; 
    disabled?: boolean; 
    loading?: boolean; 
    width?: number | string; 
}


const DEFAULT_COLOR = 'blue';
const DEFAULT_TEXT_COLOR = 'white';

export const BtnTouch = ( {
    titulo,
    action,
    color = DEFAULT_COLOR, 
    textColor = DEFAULT_TEXT_COLOR,
    style: customStyle,    
    textStyle: customTextStyle,
    disabled = false,
    loading = false,
    width = 200,          
} :Props ) => {


    const combinedButtonStyle: ViewStyle[] = [
        styles.btn,
        { backgroundColor: color }, 
        { width: width }, 
        disabled || loading ? styles.disabled : {},
        customStyle ? customStyle : {} 
    ];


    const combinedTextStyle: TextStyle[] = [
        styles.text, 
        { color: textColor }, 
        customTextStyle ? customTextStyle : {} 
    ];

    return(
        <TouchableOpacity
            style={combinedButtonStyle}
            onPress={action}
            disabled={disabled || loading}
            activeOpacity={0.7} 
            accessibilityRole="button" 
        >
            {loading ? (
                <ActivityIndicator size="small" color={textColor} />
            ) : (
                <Text style={combinedTextStyle}>
                    {titulo}
                </Text>
            )}
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btn:{

        alignItems: "center", 
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 1, 
        height: 50,
        justifyContent: "center", 
        marginVertical: 8, 
        paddingHorizontal: 15, 
    },
    text: {
        fontSize: 18, 
        fontWeight: '600', 
    },
    disabled: {
        opacity: 0.5, 
        backgroundColor: '#a0a0a0', 
        borderColor: '#707070',
    }
});