import React from "react";
import styled from "styled-components"
import config from "../../../../config.json"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${config.themes.light.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${config.themes.light.textColorBase};
    background-color: ${config.themes.light.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${config.themes.light.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${config.themes.light.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
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