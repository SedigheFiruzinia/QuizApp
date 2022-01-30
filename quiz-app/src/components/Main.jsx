import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import LandingPage from "./LandingPage";
import AppBar from "./AppBar";
import QuizPage from "./QuizPage";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
  pages: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/quiz" element={<QuizPage />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
