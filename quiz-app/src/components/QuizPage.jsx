import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import RadioButton from "./RadioButton";
import TextInput from "./TextInput";
import Button from "./Button";
import exportedObject from "../services/quizes";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
});

const QuizPage = () => {
  const [freeText, setFreeText] = useState("");
  const [checked, setChecked] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    const r = await exportedObject.create(freeText, checked);
    console.log(r);
    navigate("/");
  };

  const toCheck = (option) => {
    setChecked(option);
  };

  return (
    <>
      <View>
        <RadioButton
          data={[
            { name: "first", key: "a" },
            { name: "second", key: "b" },
            { name: "third", key: "c" },
          ]}
          checked={checked}
          toCheck={toCheck}
        />
      </View>
      <Text
        style={styles.container}
        fontWeight="bold"
        fontSize="heading"
        numberOfLines={1}
      >
        question?
      </Text>

      <TextInput onChangeText={(value) => setFreeText(value)} />
      <Button onPress={onSubmit}>submit</Button>
    </>
  );
};

export default QuizPage;
