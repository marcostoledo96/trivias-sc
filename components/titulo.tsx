import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Titulo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        <Text style={styles.t}>T</Text>
        <Text style={styles.r}>R</Text>
        <Text style={styles.i1}>I</Text>
        <Text style={styles.v}>V</Text>
        <Text style={styles.i2}>I</Text>
        <Text style={styles.a}>A</Text>
        <Text style={styles.s}>S</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  titulo: { fontSize: 80, fontWeight: "bold" , fontFamily: 'Courier New', marginTop: 80, },
  t: { color: "#FF0000" },
  r: { color: "#00FF00" },
  i1: { color: "#0000FF" },
  v: { color: "#FFFF00" },
  i2: { color: "#FF00FF" },
  a: { color: "#00FFFF" },
  s: { color: "#FFA500" },
});

export default Titulo;