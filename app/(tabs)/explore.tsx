//

import React from "react";
import { ScrollView , View , TextInput} from "react-native";
import Titulo from "../../components/titulo";
import Juego from "../../components/Juegos";
export default function HomeScreen() {
  return (
    <ScrollView>
    
       <View style={{ flex: 1, marginVertical:20 }}>
      <Juego />
    </View>
    </ScrollView>
  );
}


