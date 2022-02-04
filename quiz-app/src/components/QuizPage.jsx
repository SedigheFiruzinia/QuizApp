import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import GroupButton from "./GroupButton";
//import RadioButton from "./RadioButton";
import TextInput from "./TextInput";
import Button from "./Button";
import exportedObject from "../services/quizes";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  groupButton: {
    alignSelf: "stretch",
  },
  text: {
    marginVertical: 20,
  },
  freeText: {
    marginTop: 60,
    marginBottom: 7,
    alignSelf: "flex-start",
  },
  textInput: {
    marginTop: 60,
    alignSelf: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    padding: 7,
    flex: 1,
  },
});

const QuizPage = () => {
  const [freeText, setFreeText] = useState("");
  const [selection, setSelection] = useState(1);
  const navigate = useNavigate();

  const onSubmit = async () => {
    const r = await exportedObject.create(freeText, selection);
    console.log(r);
    navigate("/");
  };

  const selected = (option) => {
    setSelection(option);
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        fontWeight="bold"
        fontSize="subheading"
        numberOfLines={1}
      >
        Which one is the happiest country?
      </Text>
      <View style={styles.groupButton}>
        <GroupButton
          data={[
            { name: "Astralia", key: 1 },
            { name: "USA", key: 2 },
            { name: "Japan", key: 3 },
            { name: "Finland", key: 4 },
          ]}
          selection={selection}
          selected={selected}
        />
      </View>

      {/* <Text
        style={styles.freeText}
        fontWeight="normal"
        fontSize="body"
        numberOfLines={1}
      >
        Describe more
      </Text> */}
      <TextInput
        multiline={true}
        numberOfLines={5}
        onChangeText={(value) => setFreeText(value)}
        style={styles.textInput}
        placeholder="Describe more..."
      />
      <Button onPress={onSubmit} style={styles.button}>
        submit
      </Button>
    </View>
  );
};

export default QuizPage;
