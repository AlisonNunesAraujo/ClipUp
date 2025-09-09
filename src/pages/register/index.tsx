import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { style } from './styles';
import { useState } from 'react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Lógica de cadastro aqui
    console.log('Cadastro com:', { name, email, password, confirmPassword });
  };

  const handleLoginRedirect = () => {
    // Lógica para redirecionar para login
    console.log('Ir para login');
  };

  return (
    <ScrollView 
      style={style.scrollContainer}
      contentContainerStyle={style.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={style.container}>
        <View style={style.logoContainer}>
          <View style={style.logoBox}>
            <Text style={style.logoPlayIcon}>▶</Text>
          </View>
          <Text style={style.logoText}>Crie sua Conta</Text>
        </View>

        <View style={style.formContainer}>
          <TextInput
            style={style.input}
            placeholder="Insira o seu nome"
            placeholderTextColor="#8E8E93"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          <TextInput
            style={style.input}
            placeholder="Seu melhor e-mail"
            placeholderTextColor="#8E8E93"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={style.input}
            placeholder="Crie uma senha"
            placeholderTextColor="#8E8E93"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <TextInput
            style={style.input}
            placeholder="Confirme a senha"
            placeholderTextColor="#8E8E93"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <TouchableOpacity 
            style={style.signUpButton}
            onPress={handleSignUp}
            activeOpacity={0.8}
          >
            <Text style={style.signUpButtonText}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={style.loginContainer}>
            <Text style={style.loginText}>Já tem uma conta?</Text>
            <TouchableOpacity 
              onPress={handleLoginRedirect}
              activeOpacity={0.7}
            >
              <Text style={style.loginLink}>Faça o login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}