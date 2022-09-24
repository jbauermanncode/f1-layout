import {Image, StyleSheet, Dimensions} from 'react-native';
import Texto from '../../../componentes/Texto';
import head from '../../../../assets/f1_2008.jpg';

const width = Dimensions.get('screen').width

export default function Header({nome}){
    return <>
        <Image source = {head} style={estilos.img}/>
        <Texto style={estilos.nome}>{nome}</Texto>
    </>
}

const estilos = StyleSheet.create({
    img:{
        width: "100%",
        height: 1936 / 2908 * width,
    },
    nome:{
        width: "100%",
        textAlign: "center",
        fontSize: 36,
        lineHeight: 26,
        color: "black",
        fontWeight: "bold",
        padding: 16
    },
})