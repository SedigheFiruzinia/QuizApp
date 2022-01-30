import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import RadioButton from "./RadioButton";
import TextInput from "./TextInput";
import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
});

const QuizPage = () => {
  const [freeText, setFreeText] = useState("");
  const navigate = useNavigate();
  {
    console.log(freeText);
  }
  const onSubmit = () => {
    navigate("/");
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
