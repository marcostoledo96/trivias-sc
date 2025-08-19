import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Carta from "./cartas";
import preguntasOriginal from "./preguntas";

const TIEMPO_TOTAL = 45;

const Juego = () => {
  const [preguntas, setPreguntas] = useState(() =>
    [...preguntasOriginal].sort(() => Math.random() - 0.5)
  );
  const [indice, setIndice] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respondidas, setRespondidas] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(TIEMPO_TOTAL);
  const [terminado, setTerminado] = useState(false);

  //  Cronómetro global

useEffect(() => {
  if (terminado) return;


  if (tiempoRestante === 0) {
    setTerminado(true);
    return;
  }

  const timer = setInterval(() => {
    setTiempoRestante((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [terminado, tiempoRestante]);

  const manejarRespuesta = (esCorrecta: boolean) => {
    setRespondidas((prev) => prev + 1);
    if (esCorrecta) setPuntaje((prev) => prev + 1);
  };

const siguientePregunta = () => {
  if (indice < preguntas.length - 1) {
    setIndice(indice + 1);
  } else {
    setTerminado(true); // Fin del juego si ya no hay más preguntas
  }
};

const reiniciarJuego = () => {
  setPreguntas([...preguntasOriginal].sort(() => Math.random() - 0.5));
  setIndice(0);
  setPuntaje(0);
  setRespondidas(0);
  setTiempoRestante(TIEMPO_TOTAL);
  setTerminado(false);
};

  if (terminado) {
    return (
      <View style={styles.resultado}>
        <Text style={styles.texto}>⏰ Tiempo finalizado</Text>
        <Text style={styles.texto}>
          Puntaje: {puntaje} / {respondidas}
        </Text>

        <TouchableOpacity style={styles.boton} onPress={reiniciarJuego}>
          <Text style={styles.botonTexto}>Volver a jugar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.temporizador}>⏱ Tiempo: {tiempoRestante}s</Text>
      <Carta
        pregunta={preguntas[indice]}
        onResponder={manejarRespuesta}
        onSiguiente={siguientePregunta}
      />
    </View>
  );
};

export default Juego;

const styles = StyleSheet.create({

  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 220,
    
  },
 boton: {
    marginTop: 50,
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    fontSize: 200,
  },
    temporizador: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 25,
    },
     texto: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  botonTexto: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    
  },
});