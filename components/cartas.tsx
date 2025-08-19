import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

type CartaProps = {
  pregunta: {
    pregunta: string;
    opciones: string[];
    respuesta_correcta: string;
    imagen: string;
  };
  onResponder: (esCorrecta: boolean) => void;
  onSiguiente: () => void;
};

const Carta = ({ pregunta, onResponder, onSiguiente }: CartaProps) => {
  const [seleccionada, setSeleccionada] = useState<string | null>(null);

  //  Este efecto se ejecuta cada vez que llega una nueva pregunta
  useEffect(() => {
    setSeleccionada(null);
  }, [pregunta]);

  const manejarRespuesta = (opcion: string) => {
    if (seleccionada === null) {
      setSeleccionada(opcion);
      onResponder(opcion === pregunta.respuesta_correcta);
    }
  };

  return (
    <View style={styles.carta}>
      <Text style={styles.pregunta}>{pregunta.pregunta}</Text>
      <Image source={{ uri: pregunta.imagen }} style={styles.imagen} />

      {pregunta.opciones.map((opcion, idx) => {
        let estiloBoton = styles.boton;

        if (seleccionada !== null) {
          if (opcion === pregunta.respuesta_correcta) {
            estiloBoton = styles.correcto;
          } else if (opcion === seleccionada) {
            estiloBoton = styles.incorrecto;
          }
        }

        return (
          <TouchableOpacity
            key={idx}
            style={estiloBoton}
            onPress={() => manejarRespuesta(opcion)}
            disabled={seleccionada !== null}
          >
            <Text style={styles.textoBoton}>{opcion}</Text>
          </TouchableOpacity>
        );
      })}

      {seleccionada !== null && (
        <TouchableOpacity style={styles.botonNext} onPress={onSiguiente}>
          <Text style={styles.textoBoton}>Siguiente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  carta: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  pregunta: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    
  },
  imagen: {
    width: 315,
    height: 310,
    borderRadius: 10,
    backgroundColor: "#eee",
    marginBottom: 18,
    alignSelf: "center",
  },
  boton: {
    backgroundColor: "#8d9094ff",
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
    botonNext: {
    backgroundColor: "#1573d1ff",
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  correcto: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 8,
    margin: 5,
  },
  incorrecto: {
    backgroundColor: "red",
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  textoBoton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default Carta;