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
  const [checked, setChecked] = useState(1);
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
            { name: "first", key: 1 },
            { name: "second", key: 2 },
            { name: "third", key: 3 },
            { name: "forth", key: 4 },
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
