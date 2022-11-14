import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";

/**
 * // Definições globais do NextJs de configuração do aplicativo no geral
// Por padrão o next.js lê o _app antes de tudo
// Com o _app é possível passar instruções muito robustas para o app todo
 * 
 * 
 * Foi criado o próprio provider para passar props para o app inteiro de uma só vez
 */
const theme = {
    dark: {
        "backgroundBase": "#181818",
        "backgroundLevel1": "#202020",
        "textColorBase": "#FFFFFF",
        "borderBase": "#383838",
        "backgroundLevel2": "#313131"
    },
    light: {
        "backgroundBase": "#FFFFFF",
        "backgroundLevel1": "#F9F9F9",
        "textColorBase": "#222222",
        "borderBase": "#E5E5E5",
        "backgroundLevel2": "#F0F0F0"
    }
};

/**
 * Wrapper funciona para mudar a ordem renderização de blocos
 * basicamente foi externado o ColorModeProvider, que recebe suas propriedades children
 * e renderiza como pai falando pro react no momento do export default
 * 
 * Isso para o "ColorModeProvider" definir o initial mode antes da const contexto receber um 
 * UseContext vazio!
 */
function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"light"}>
            {props.children}
        </ColorModeProvider>
    )
};

/**
 * Renderiza o App inteiro e a cláusula 'Component' é o 'pages/index.js'
 * que recebe pageProps, que por padrão o React entende que é o tudo que está contido no index.js
 */
function MyApp({ Component, pageProps }) {
    
    const contexto = React.useContext(ColorModeContext);

    return (
            <ThemeProvider theme={theme[contexto.mode]}>
                <CSSReset />
                <Component {...pageProps} />
            </ThemeProvider>
    )
}

// Aqui exporta declarando quem é o pai e quem é o filho
export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
};
