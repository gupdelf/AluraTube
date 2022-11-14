import React from "react";
import styled from "styled-components"
import config from "../../../../config.json"

const StyledSearch = styled.div` // styled component do campo de pesquisa
  display: flex;
  flex-direction: row;
  border: 1px solid ${config.themes.dark.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${config.themes.dark.textColorBase};
    background-color: ${config.themes.dark.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${config.themes.dark.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${config.themes.dark.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ valorDoFiltro, setValorDoFiltro }) { // disposição do campo de pesquisa dentro do menu
    //const [valorDaBusca, setValorDaBusca] = React.useState("Teste");
    //console.log("Search", valorDaBusca)
    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;

    return (
        <StyledSearch>
            <input className="text" type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
            <button>
                🔎
            </button>

        </StyledSearch>
    )
}