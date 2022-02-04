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
    //flexShrink: 1,
  },
  content: {
    backgroundColor: theme.colors.mainBackground,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.content}>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/quiz" element={<QuizPage />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </View>
  );
};

export default Main;
