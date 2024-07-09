import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueGrotto,
    boxShadow: `4px 4px 4.65px 0.3 ${colors.babyBlue}`,
    width: 330,
    height: 40,
    elevation: 4,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
