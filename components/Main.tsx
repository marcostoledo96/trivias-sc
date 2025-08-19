import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Descripcion = () => {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.descripcion}>Descripción</Text>
      <Text style={styles.texto}>
        ¡Desafiá tu mente con esta divertida trivia de cultura general! Poné a prueba tus conocimientos sobre historia, ciencia, arte, geografía, deportes y mucho más.{"\n\n"}
        Cada pregunta te lleva un paso más cerca de convertirte en un verdadero genio del saber. Ideal para jugar solo o con amigos, y ver quién sabe más.{"\n\n"}
        ¿Estás listo para aceptar el reto y demostrar lo que sabés?
      </Text>

      <View style={styles.separador} />

      <Text style={styles.reglas}>Reglas del Juego</Text>
      <View style={styles.listaReglas}>
        <Text style={styles.texReglas}>
          <Text id='1'>1.</Text> El juego cuenta con un total de 50 preguntas de cultura general, cubriendo temas como historia, ciencia, arte, geografía, deportes, y más.{"\n\n"}
          <Text id='2'>2.</Text>  Tenés 45 segundos en total para responder la mayor cantidad de preguntas posibles. ¡El tiempo corre desde que empezás!{"\n\n"}
          <Text id='3'>3.</Text>  Cada pregunta tiene una única opción correcta. Elegí con rapidez y precisión.{"\n\n"}
          <Text id='4'>4.</Text>  No podés retroceder ni cambiar tu respuesta una vez seleccionada.{"\n\n"}
          <Text id='5'>5.</Text>  Al finalizar el tiempo, se mostrará tu puntaje final según la cantidad de respuestas correctas que hayas logrado dentro del límite.{"\n\n"}
          ¡Jugá todas las veces que quieras para mejorar tu marca y competir con tus amigos!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 24,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  1: { color: "#FF0000" },
  2: { color: "#00FF00" },
  3: { color: "#0000FF" },
  4: { color: "#FFFF00" },
  5: { color: "#FF00FF" },
  descripcion: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#2d2d2d",
    fontFamily: 'Courier New',
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
    color: "#444",
    marginBottom: 18,
    lineHeight: 24,
    fontFamily: 'Courier New',
  },
  separador: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 16,
    width: "80%",
    alignSelf: "center",
  },
  reglas: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#1a73e8",
  },
  listaReglas: {
    backgroundColor: "#f5f7fa",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    fontFamily: 'Courier New',
  },
  texReglas: {
    fontSize: 15,
    textAlign: "left",
    color: "#333",
    lineHeight: 22,
    fontFamily: 'Courier New',
  },
});

export default Descripcion;

