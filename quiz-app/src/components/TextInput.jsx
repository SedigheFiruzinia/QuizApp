import { TextInput as NativeTextInput, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    borderColor: theme.colors.borderDark,
    borderWidth: 1,
    borderStyle: "solid",
    // selectionColor: "green",
  },
  error: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, error && styles.error, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
