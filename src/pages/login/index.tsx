import { View,Text,StyleSheet } from 'react-native';

export default function Login() {
 return (
   <View style={s.container}>
        <Text>Seja bem vindo!</Text>
   </View>
  );
}


const s = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
})