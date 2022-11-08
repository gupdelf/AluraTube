import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";

/* ----------------------------------------------------------------------------------------------- */

// Home screen 'default' page
function HomePage() {
    const styleMain = {
        display: "flex",
        flexDirection: "column",
        flex: 1
    };
    //console.log(config.playlists);

    return (
        <>
            <CSSReset/>
            <div style={styleMain}>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists} />
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
    #banner{
        width: 100%;
        max-height: 250px;
        object-fit: cover;
        @media only screen and (min-width: 1650px) {
            max-height: 33vh;
        }
    }
    section img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items:center;
        background-color: ${config.themes.light.backgroundBase};
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() { // declaração do componente no react
    return (
        <StyledHeader>
            <img id='banner' src={config.banner} />
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
function TimeLine(props) {
    //console.log("Dentro do componente", props.playlists)
    const playlistNames = Object.keys(props.playlists)

    // Styled component gerado em src/components/Timeline.js
    return ( 
        <StyledTimeline> 
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log("Videos", playlistName, videos)

                return (
                    <section>
                        <h2>{playlistName}</h2>

                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url} target="_blank">
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

                return (
                    <section>
                        <h2>{FavSectionTitle}</h2>

                        <div>
                            {favorites.map((favorite) => {
                                return (
                                    <a href={favorite.url} target="_blank">
                                        <img className="favorites-img" src={`https://github.com/${favorite.user}.png`}/>
                                        <span>
                                            @{favorite.user}
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