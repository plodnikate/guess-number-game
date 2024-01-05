import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 26,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.18,
  },
});
