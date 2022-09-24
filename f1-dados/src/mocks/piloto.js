import barPlot from '../../assets/bar-plot-LewisHamilton-2008.png';
import porcPlot from '../../assets/porcentagem-plot-LewisHamilton-2008.png'
import piePlot  from '../../assets/pie-plot-LewisHamilton-2008.png'

const piloto = {
    header:{
        nome: "Lewis Hamilton",
    },
    informacoes:{
        posicao: "1º Lugar",
        pontuacao: "244 pontos",
        descricao: "Lewis Hamilton é britânico e venceu o campeonato mundial de 2008, ganhando do brasileiro Felipe Massa.",
        visualizar: "Distribuição de Frequência de Posições",
        barPlot: barPlot,
        botao: "Visualizar"

    },
    itens: {
        titulo: "Gráficos",
        botao: "Visualizar",
        lista: [
            {
                nome: "Gráfico de Barras de Frequência",
                imagem: barPlot
            },
            {
                nome: "Gráfico de Barras de Porcentagem",
                imagem: porcPlot
            },
            {
                nome: "Gráfico de Pizza",
                imagem: piePlot
            }
        ]
    }
}

export default piloto;