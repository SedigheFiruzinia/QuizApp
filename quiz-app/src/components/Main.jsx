import { SafeAreaView, StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import LandingPage from "./LandingPage";
import AppBar from "./AppBar";
import QuizPage from "./QuizPage";
import theme from "../theme";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <SafeAreaView style={styles.content}>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/quiz" element={<QuizPage />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
  content: {
    backgroundColor: theme.colors.mainBackground,
    marginTop: 50,
  },
});
export default Main;
