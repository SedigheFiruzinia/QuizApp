import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import Button from "./Button";

const LandingPage = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/quiz");
  };

  return (
    <View style={styles.container}>
      <Text
        fontWeight="normal"
        fontSize="heading"
        numberOfLines={1}
        style={{ marginBottom: 10 }}
      >
        Welcome To
      </Text>
      <Text
        fontWeight="bold"
        fontSize="heading"
        numberOfLines={1}
        style={{ marginBottom: 100 }}
      >
        QuizPad
      </Text>
      <Button onPress={onSubmit} style={styles.button}>
        TRY NOW
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default LandingPage;
