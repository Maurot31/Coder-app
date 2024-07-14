import { StyleSheet, View } from "react-native";
import { colors } from "../global/colors";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueGrotto,
    borderRadius: 10,
    shadowColor: colors.babyBlue,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
    width: 330,
    height: 80,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
