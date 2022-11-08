import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";
import Search from "../src/components/Menu/components/Search";
import React from "react";

/* ----------------------------------------------------------------------------------------------- */

// Home screen 'default' page
function HomePage() {
    const styleMain = {
        display: "flex",
        flexDirection: "column",
        flex: 1
    };
    //console.log(config.playlists);
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <CSSReset />
            <div style={styleMain}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    )
}
export default HomePage

/* ----------------------------------------------------------------------------------------------- */

/** Seção Header
 * Contém:
 * - banner
 * - foto do usuário
 * - info usuario
 */
const StyledHeader = styled.div` // styled component do header
    overflow:hidden;

    section img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items:center;
        background-color: ${config.themes.dark.backgroundBase};
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        h2, p {
            color: ${config.themes.dark.textColorBase}
        }
    }
    
`;
const StyledBanner = styled.div`
    width: 100%;
    height:230px;
    max-height: 250px;
    background-image: url(${({bg}) => bg});
    background-position: center;
    background-size: cover;
    @media only screen and (min-width: 1650px) {
        max-height: 33vh;        
    }
`;
function Header() { // declaração do componente no react
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg} />
            <section className="user-info">
                <img id="user-icon" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

/* ----------------------------------------------------------------------------------------------- */

/** Seção Timeline
 * - É a section que contém os vídeos e praticamente todo o conteúdo
 * - recebe uma array de playlists no param 'props'
 */
function TimeLine({ searchValue, ...props }) {
    //console.log("Dentro do componente", props.playlists)
    const playlistNames = Object.keys(props.playlists)

    // Styled component gerado em src/components/Timeline.js
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                //console.log("Videos", playlistName, videos)

                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>

                        <div>
                            {videos
                                .filter((video) => {
                                    // convenção normalized
                                    // deixa todos os caracteres minusculos para filtrar melhor
                                    // remove o case sensitive
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();

                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url} target="_blank">
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>

                    </section>
                )
            })}
        </StyledTimeline>
    )
}

/* ----------------------------------------------------------------------------------------------- */

/** Seção favoritos
 * - Contém uma foto do user github
 * - o @ do dev mencionado
 * - é alinhado em forma de grid e posteriormente deve haver interação
 * - recebe como props, uma array dos favorites em config.json
 */
function Favorites(props) {
    const favoritesTitle = Object.keys(props.favorites)

    return (
        <StyledFavorites>
            {favoritesTitle.map((FavSectionTitle) => {
                const favorites = props.favorites[favoritesTitle];
                /**const teste = favorites.map(function (item) {
                *    return item.user
                *   })
                *    console.log(teste)
                */
                return (
                    <section key="Favorites">
                        <h2>{FavSectionTitle}</h2>

                        <div key={FavSectionTitle}>
                            {favorites.map((item) => {
                                return (
                                    <a key={item.url} href={item.url} target="_blank">
                                        <img className="favorites-img" src={`https://github.com/${item.user}.png`} />
                                        <span>
                                            @{item.user}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledFavorites>
    )
}

/* ----------------------------------------------------------------------------------------------- */