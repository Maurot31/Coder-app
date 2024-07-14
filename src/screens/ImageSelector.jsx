import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import * as ImagePicker from "expo-image-picker";
import { setCameraImage } from "../fetures/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  usePostProfileImageMutation,
  useGetProfileimageQuery,
} from "../services/shopServices";
import * as ExpoLibrary from "expo-media-library";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [isImageFromCamera, setIsImageFromCamera] = useState(false);
  const dispatch = useDispatch();

  const [triggerPostImage, result] = usePostProfileImageMutation();
  const { localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileimageQuery(localId);

  const verifyCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (!status) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermission();
    setIsImageFromCamera(true);
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  };

  const confirmImage = async () => {
    try {
      dispatch(setCameraImage(image));
      triggerPostImage({ image, localId });
      if (isImageFromCamera) {
        await ExpoLibrary.createAssetAsync(image);
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {image || imageFromBase ? (
        <>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={{ uri: image || imageFromBase?.image }}
          />
          <CustomButton
            onPress={pickImage}
            title="Take new Picture"
          />
          <CustomButton
            onPress={confirmImage}
            title="Confirm Photo"
          />
        </>
      ) : (
        <>
          <View style={styles.containerPhoto}>
            <Text style={styles.text}>No pic to show</Text>
          </View>
          <CustomButton
            onPress={pickImage}
            title="Take a photo"
          />
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    marginVertical: 20,
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    color: "black",
    fontFamily: "CascadiaCode",
    textAlign: "center",
  },
  containerPhoto: {
    marginVertical: 20,
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
