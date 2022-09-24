import Texto from "../../../componentes/Texto"
import {View, Image, StyleSheet, TouchableOpacity} from "react-native";

export default function Itens({titulo,botao, lista}){
    return <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        { lista.map(({nome, imagem}) => {
           return <>
           <View key={nome} style={estilos.item}>
            <Image source={imagem} style={estilos.imagem}/>
            <Texto style={estilos.nome}>{nome}</Texto>
  
            </View>
        <TouchableOpacity style={estilos.botao} onPress={() => {}}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
    </TouchableOpacity>
        </>
        }) }
    </>
}

const estilos = StyleSheet.create({
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom:8,
        fontSize: 20,
        lineHeight: 32,
    },
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical:16,
        marginHorizontal:16,
        alignItems: "center",
    },
    imagem:{
        width: 46,
        height:46,
    },
    nome:{
        fontSize:16,
        lineHeight: 26,
        marginLeft:11,
        color:"#464646"
    },
    botao:{
        marginTop:16,
        backgroundColor: "#2A9F85",
        paddingVertical: 10,
        borderRadius: 6,
        marginBottom:11,
    },
    textoBotao:{
        textAlign: "center",
        color: "#fff",
        fontSize:14,
        lineHeight:20,
        fontWeight: "bold",
    },
})