import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
 

export interface UseImagePicker {
  imagenes64: string[]; 
  pickImages: () => Promise<string[] | undefined>;
  resetImagenes64: () => void;
}

export const useImagePicker = (): UseImagePicker => {


  const [imagenes64, setImagenes64] = useState<string[]>([]);

  const resetImagenes64 = () => setImagenes64([]); 

  // Función de selección múltiple
  const pickImages = async (): Promise<string[] | undefined> => {

    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos requeridos",
        "Se requieren permisos para usar la cámara",
        [{ text: "Aceptar" }]
      );
      return undefined;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false, 
        allowsMultipleSelection: true, 
        // se establece un límite de selección
        selectionLimit: 3, 
        quality: 0.3,
        base64: true, 
      });

      if (!result.canceled) {
        const base64Array = result.assets
          .map(asset => asset.base64 || "") 
          .filter(base64 => base64.length > 0); 
        
        setImagenes64(base64Array);
        return base64Array;
      }
      
      return [];

    } catch (error) {
      console.error("Error al seleccionar imágenes:", error);
      Alert.alert("Error", "No se pudieron cargar las imágenes.");
      return undefined;
    }
  };

  return { imagenes64, pickImages, resetImagenes64 };
};