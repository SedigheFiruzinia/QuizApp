import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 45,
  },
  radioButtonChecked: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
});

const RadioButton = ({ style, data, checked, toCheck, ...props }) => {
  const textStyle = [styles.radioButtonText, style];
  const buttonStyle = (name) =>
    checked === name ? [styles.radioButtonChecked] : [styles.radioButtonIcon];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              toCheck(item.name);
            }}
            style={buttonStyle(item.name)}
            {...props}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toCheck(item.name);
            }}
          >
            <Text style={textStyle}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default RadioButton;
