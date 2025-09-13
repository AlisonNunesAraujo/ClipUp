import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { style } from './styles';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Login com:', email, password);
  };

  const handleForgotPassword = () => {

    console.log('Recuperar senha');
  }

 return (
   
   <View style={style.container}>
       <View style={style.logoContainer}>
         <View style={style.logoBox}>
           <Text style={style.logoPlayIcon}>▶</Text>
         </View>
         <Text style={style.logoText}>Login</Text>
       </View>

       <View style={style.formContainer}>
         <TextInput
           style={style.input}
           placeholder="Insira seu email ou CPF"
           placeholderTextColor="#8E8E93"
           value={email}
           onChangeText={setEmail}
           keyboardType="email-address"
           autoCapitalize="none" />

         <TextInput
           style={style.input}
           placeholder="Sua senha"
           placeholderTextColor="#8E8E93"
           value={password}
           onChangeText={setPassword}
           secureTextEntry
           autoCapitalize="none" />

         <TouchableOpacity
           style={style.loginButton}
           onPress={handleLogin}
           activeOpacity={0.8}
         >
           <Text style={style.loginButtonText}>Entrar</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={handleForgotPassword}
           activeOpacity={0.7}
         >
           <Text style={style.forgotPasswordText}>Esqueceu a senha?</Text>
         </TouchableOpacity>
       </View>
     </View>
  );
}
