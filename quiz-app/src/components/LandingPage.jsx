import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
});

const LandingPage = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/quiz");
  };
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="heading" numberOfLines={1}>
        Welcome
      </Text>
      <Button onPress={onSubmit}>Take Quiz</Button>
    </View>
  );
};

export default LandingPage;
