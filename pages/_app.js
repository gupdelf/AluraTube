import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";

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
// Definições globais do NextJs
// Por padrão o next.js lê o _app antes de tudo
function MyApp({ Component, pageProps }) {
    console.log("_app carregado");

    return (
        <ThemeProvider theme={theme.dark}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp;