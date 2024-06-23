import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../global/colors";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ onSearch = () => {}, goBack = () => {}, error = "" }) => {
  const [keyWord, setKeyWord] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyWord}
        onChangeText={setKeyWord}
      />
      <Pressable onPress={() => onSearch(keyWord)}>
        <FontAwesome5
          name="search"
          size={24}
          color="black"
        />
      </Pressable>
      <Pressable onPress={() => setKeyWord("")}>
        <FontAwesome6
          name="eraser"
          size={24}
          color="black"
        />
      </Pressable>
      <Pressable onPress={goBack}>
        <AntDesign
          name="back"
          size={24}
          color="black"
        />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.blueGreen,
    color: colors.gray100,
    borderRadius: 10,
  },
});
