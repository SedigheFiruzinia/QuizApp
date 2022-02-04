import { Pressable, View, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.roundness,
    backgroundColor: theme.colors.button,
  },
  text: {
    color: "white",
  },
});

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

export default Button;
