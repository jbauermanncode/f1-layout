import { ScrollView } from 'react-native';
import Header from './componentes/Header';
import Informacoes from './componentes/Informacoes';
import Itens from './componentes/Itens';

export default function Piloto({header, informacoes, itens}) {
    return <>
    <ScrollView>
    <Header {...header}/>

    <Informacoes {...informacoes}/>
    <Itens {...itens}/>
    </ScrollView>
    </>
}

