import VideoBrowser from "./VideoBrowser/VideoBrowser";
import { Video } from "../../components/Video";



function Home() {
    return (
        <>
           <VideoBrowser>
                <Video/>
           </VideoBrowser>
        </>
    );
}

export default Home;
