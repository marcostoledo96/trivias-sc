import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Footer = () => {
    return (
        <View>
            <Text style={style.footer}>
                Página creada por Marcos Joel Buono y Marcos Ezequiel Toledo © 2025
            </Text>
        </View>
    );
};

const style = StyleSheet.create({

    footer: {
        fontSize: 10,
        marginLeft: 10,
        marginBlock: 37,

    },
});

export default Footer;