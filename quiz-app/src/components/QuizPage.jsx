import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import GroupButton from "./GroupButton";
import TextInput from "./TextInput";
import Button from "./Button";
import exportedObject from "../services/quizes";

const QuizPage = () => {
  const [freeText, setFreeText] = useState("");
  const [selection, setSelection] = useState(null);
  const [textError, setTextError] = useState(false);
  const [selectionError, setSelectionError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      if (freeText.length !== 0 && selection) {
        const r = await exportedObject.create(freeText, selection);
        console.log(r);
        navigate("/");
      } else {
        !selection && setSelectionError(true);
        freeText.length === 0 && setTextError(true);
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  const selected = (option) => {
    setSelection(option);
  };

  useEffect(() => {
    freeText.length !== 0 && setTextError(false);
    selection && setSelectionError(false);
  }, [freeText, selection]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} fontWeight="bold" fontSize="subheading">
        Which one is the happiest country?
      </Text>
      <SafeAreaView style={styles.groupButton}>
        <GroupButton
          data={[
            { name: "Australia", key: 1 },
            { name: "USA", key: 2 },
            { name: "Japan", key: 3 },
            { name: "Finland", key: 4 },
          ]}
          selection={selection}
          selected={selected}
          error={selectionError}
        />
      </SafeAreaView>
      <TextInput
        error={textError}
        multiline={true}
        numberOfLines={5}
        onChangeText={(value) => setFreeText(value)}
        style={styles.textInput}
        placeholder="Describe more..."
      />
      <SafeAreaView style={styles.submitButton}>
        <Button onPress={onSubmit} style={styles.button}>
          submit
        </Button>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
    display: "flex",
    alignItems: "center",
  },
  text: {
    marginVertical: 20,
  },
  groupButton: {
    alignSelf: "stretch",
  },
  textInput: {
    marginTop: 60,
    marginBottom: 20,
    alignSelf: "stretch",
  },
  submitButton: {
    alignSelf: "stretch",
  },
  button: {
    padding: 7,
    alignItems: "center",
  },
});

export default QuizPage;
