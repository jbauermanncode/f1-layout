import { Image, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import Texto from '../../../componentes/Texto';


const width = Dimensions.get('screen').width

export default function Informacoes({posicao, pontuacao, descricao, visualizar, barPlot, botao}){
    return <>
    <View style={estilos.piloto}>
        <Texto style={estilos.posicao}>{posicao}</Texto>
        <Texto style={estilos.pontuacao}>{pontuacao}</Texto>
        <Texto style={estilos.descricao}>{descricao}.</Texto>
        <Texto style={estilos.visualizar}>{visualizar}</Texto>
       
    </View>
    <Image source = {barPlot} style={estilos.img}/>

    </>
}
const estilos = StyleSheet.create({ 

    piloto:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    posicao:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    pontuacao:{
        fontSize: 16,
        lineHeight: 26
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    visualizar:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    img:{
        width: "100%",
        height: 440/864  * width,
    },

})