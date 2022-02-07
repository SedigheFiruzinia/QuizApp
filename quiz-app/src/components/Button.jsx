import { Pressable, View, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const Button = ({ children, style, ...props }) => {
  const buttonStyle = [styles.container, style];

  return (
    <Pressable {...props}>
      <View style={buttonStyle}>
        <Text style={styles.text} fontWeight="bold">
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.roundness,
    backgroundColor: theme.colors.button,
  },
  text: {
    color: "white",
  },
});
export default Button;
