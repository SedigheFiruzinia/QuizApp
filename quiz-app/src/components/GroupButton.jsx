import React from "react";
import { Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import theme from "../theme";

const GroupButton = ({ style, data, selection, selected, ...props }) => {
  const textStyle = [styles.text, style];
  const buttonStyle = (key) =>
    selection === key
      ? [styles.button, styles.buttonSelected]
      : [styles.button];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={buttonStyle(item.key)}
          onPress={() => selected(item.key)}
          {...props}
        >
          <Text style={textStyle}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    marginVertical: 5,
    borderRadius: theme.roundness,
  },
  buttonSelected: {
    backgroundColor: theme.colors.borderDark,
  },
  text: {
    padding: 4,
    textAlign: "center",
    fontSize: theme.fontSizes.body,
  },
});

export default GroupButton;
