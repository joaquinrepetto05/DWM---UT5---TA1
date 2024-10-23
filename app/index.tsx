import { Button, Text, View } from "react-native";
import { useState } from "react";

export default function Index() {
  
  const [contador, setContador] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: "lightgray",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{fontSize: 25, margin: 10, fontWeight: "bold"}}>Incrementar o decrementar</Text>
        <Text style={{fontSize: 20}}>Contador: {contador}</Text>
      </View>

      <View 
        style={{
          margin: 4,
          backgroundColor: 'rgba(192 , 192 , 192 , 0.4)',
          borderRadius: 15,
        }}>
        <Button title="Incrementar" onPress={() => setContador(contador + 1)}></Button>
      </View>

      <View
        style={{
          margin: 4,
          backgroundColor: 'rgba(192 , 192 , 192 , 0.4)',
          borderRadius: 15,
        }}
      >
        <Button title="Decrementar" onPress={() => setContador(contador - 1)}></Button>
      </View>
    </View>
  );
}
