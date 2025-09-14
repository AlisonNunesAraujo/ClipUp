import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { style } from "./styles";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={style.container} onTouchStart={Keyboard.dismiss}>
      {form ? (
        <View style={style.formContainer}>
          <View style={style.logoContainer}>
            <View style={style.logoBox}>
              <Text style={style.logoPlayIcon}>▶</Text>
            </View>
            <Text style={style.logoText}>Login</Text>
          </View>

          <TextInput
            style={style.input}
            placeholder="Insira seu email"
            placeholderTextColor="#8E8E93"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={style.input}
            placeholder="Sua senha"
            placeholderTextColor="#8E8E93"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <TouchableOpacity style={style.loginButton} activeOpacity={0.8}>
            <Text style={style.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.loginButton}
            activeOpacity={0.8}
            onPress={() => setForm(false)}
          >
            <Text style={style.loginButtonText}>Crie sua conta!</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={style.formContainer}>
          <View style={style.logoContainer}>
            <View style={style.logoBox}>
              <Text style={style.logoPlayIcon}>▶</Text>
            </View>
            <Text style={style.logoText}>Cadastro</Text>
          </View>

          <TextInput
            style={style.input}
            placeholder="Insira o seu nome"
            placeholderTextColor="#8E8E93"
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

          

          <TouchableOpacity style={style.loginButton} activeOpacity={0.8}>
            <Text style={style.loginButtonText}>Cadastrar</Text>
          </TouchableOpacity>

          <View>
            <Text style={style.textAccountCreate}>Já tem uma conta?</Text>
            <TouchableOpacity
              style={style.loginButton}
              activeOpacity={0.7}
              onPress={() => setForm(true)}
            >
              <Text style={style.loginButtonText}>Faça o login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
