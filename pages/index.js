import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

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
                <Header />
                <Menu />
                <TimeLine playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    )
}

export default HomePage

const allThemes = config.themes;
//console.log(allThemes);

const StyledHeader = styled.div`
    overflow:hidden;
    #banner{
        width: 100%;
        max-height: 250px;
        
        object-fit: cover;
        object-position: 0 80%;
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

        background-color: ${allThemes.light.backgroundBase};
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
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

function TimeLine(props) {
    //console.log("Dentro do componente", props.playlists)
    const playlistNames = Object.keys(props.playlists)

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
