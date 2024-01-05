import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 10,
    padding: 8,
    marginBottom: 16,
  },
});

export default Title;
