import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container_two: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 24,
        justifyContent: "center",
    },
    
    logoContainer: {
        alignItems: "center",
        marginBottom: 60,
    },
    
    logoBox: {
        width: 60,
        height: 60,
        backgroundColor: "#E8F4FD",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    
    logoPlayIcon: {
        color: "#007AFF",
        fontSize: 24,
        fontWeight: "bold",
    },
    
    logoText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#007AFF",
        letterSpacing: 0.5,
        fontFamily: "Arial",
    },
    
    formContainer: {
        width: "90%",
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
    
    loginButton: {
        backgroundColor: "#A5D6F5",
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 8,
        marginBottom: 16,
    },
    textAccountCreate:{
        textAlign: "center",
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0.5,
        fontFamily: "Arial",
    },
    
    forgotPasswordText: {
        color: "#007AFF",
        fontSize: 14,
        textAlign: "center",
        fontWeight: "500",
    },

    
})