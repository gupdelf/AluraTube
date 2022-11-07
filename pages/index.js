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
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists} />
            </div>
        </>
    )
}

export default HomePage



const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items:center;

        margin-top:50px;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/*<img src="banner" />*/}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
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
