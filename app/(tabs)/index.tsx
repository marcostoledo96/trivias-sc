import Titulo from "@/components/titulo";
import React from "react";
import Main from "@/components/Main";

import { View, StyleSheet } from "react-native";


import Footer from "@/components/footer";

export default function TabTwoScreen() {
  return (

    <View style={styles.container}>
      <Titulo />
      <View style={styles.mainContainer}>
        <Main />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    flex: 1,
    marginTop: 50,
    marginLeft: 1,
  },
});