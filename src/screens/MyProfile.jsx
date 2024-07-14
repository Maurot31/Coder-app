import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";
import CustomButton from "../components/CustomButton";
import { useSelector } from "react-redux";
import { useGetProfileimageQuery } from "../services/shopServices";

const MyProfile = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileimageQuery(localId);

  const launchCamera = async () => {
    navigation.navigate("Image Selector");
  };

  const launchLocation = async () => {
    navigation.navigate("List Address");
  };

  const defaultImageRoute = "../../assets/user.png";

  return (
    <View style={styles.container}>
      {imageFromBase || imageCamera ? (
        <Image
          source={{ uri: imageFromBase?.image || imageCamera }}
          style={styles.img}
          resizeMode="cover"
        />
      ) : (
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require(defaultImageRoute)}
        />
      )}
      <CustomButton
        onPress={launchCamera}
        title={
          imageFromBase || imageCamera
            ? "Modify profile picture"
            : "Add profile picture"
        }
      />
      <CustomButton
        onPress={launchLocation}
        title="My Address"
        color={colors.blueGrotto}
        textColor={colors.babyBlue}
      />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    height: 180,
    width: 180,
    marginVertical: 8,
  },
  btn: {
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "60%",
    backgroundColor: colors.blueGrotto,
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
    color: colors.babyBlue,
    fontFamily: "CascadiaCode",
    textAlign: "center",
  },
});
