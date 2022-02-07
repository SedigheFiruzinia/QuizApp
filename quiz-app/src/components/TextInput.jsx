import {
  TextInput as NativeTextInput,
  StyleSheet,
  Platform,
} from "react-native";

import theme from "../theme";

const TextInput = ({ style, error, numberOfLines, ...props }) => {
  const textInputStyle = [styles.textInput, error && styles.error, style];
  return (
    <NativeTextInput
      style={textInputStyle}
      {...props}
      numberOfLines={Platform.OS === "ios" ? null : numberOfLines}
      minHeight={
        Platform.OS === "ios" && numberOfLines ? 20 * numberOfLines : null
      }
      maxHeight={
        Platform.OS === "ios" && numberOfLines ? 20 * numberOfLines : null
      }
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    borderColor: theme.colors.borderDark,
    borderWidth: 1,
    borderStyle: "solid",
  },
  error: {
    borderColor: theme.colors.error,
  },
});

export default TextInput;
