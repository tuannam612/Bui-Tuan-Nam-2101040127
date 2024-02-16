import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const App = () => {

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "white", padding: 5 }}>
          <Image
            source={require("./assets/image.png")}
            style={{ width: "110%", height: "30%", marginTop: 270 }}
          />
        </View>
        <View style={{ flex: 2, padding: 20, marginTop: 200 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            VESTIBULUM ULLAMCORPER UT LEO QUIS
          </Text>
          <Text></Text>
          <Text>
            Aenean facilisis lectus ante, ut rutrum eros convallis et.
            Vestibulum ullamcorper ut leo quis tristique. Donec in erat commodo,
            pharetra purus ac, consectetur lacus. Suspendisse odio sapien,
            egestas at ex sit amet, molestie sagittis est.
          </Text>
          <Text></Text>
          <Text>
            In id purus imperdiet nisl accumsan scelerisque. Donec nec justo sed
            enim dapibus rhoncus. Morbi sed elit vitae metus ullamcorper
            efficitur.
          </Text>
          <Text></Text>
          <Text>
            Fusce aliquam magna id ipsum ultricies interdum. Maecenas nibh
            risus, posuere vitae diam et, cursus euismod elit.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              borderColor: "black",
              borderWidth: 2,
              padding: 10,
              marginTop: 20,
              width: 70, 
              height: 35,
              borderRadius: 2,
            }}
          >
            <Text style={{ fontSize: 10,color: "black", textAlign: "center" }}>DETAIL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
