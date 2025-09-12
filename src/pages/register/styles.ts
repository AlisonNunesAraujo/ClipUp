import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "center",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },

  logoBox: {
    width: 60,
    height: 60,
    backgroundColor: "#E8F4FD",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  logoPlayIcon: {
    color: "#007AFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  logoText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#007AFF",
    letterSpacing: 0.5,
  },

  formContainer: {
    width: "100%",
  },

  input: {
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 12,
    color: "#000000",
  },

  signUpButton: {
    backgroundColor: "#A5D6F5",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20,
  },

  signUpButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },

  loginText: {
    color: "#8E8E93",
    fontSize: 14,
  },

  loginLink: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

