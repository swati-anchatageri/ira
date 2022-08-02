import React from "react";
import {Card, CardBody,CardHeader} from "shards-react";
import ReactPlayer from "react-player";
//import Vedio from "../../assets/cook.mp4";
//import Poster from "../../assets/poster.jpg"
export default function Webinar(){
    //player = {}
    // state = {
    //     video: {
    //         src: "https://www.pexels.com/video/a-person-slicing-up-the-carrots-by-using-a-knife-5645055/",
    //         poster: "https://i.pinimg.com/736x/0a/4a/b3/0a4ab3c15949fda735833b42b6cdc7c6--healthy-eating-posters-primary-school.jpg"
    //     }
    // }
    // onPlayerReady(player){
    //     this.player = player;
    // }
    return(
        <Card>
            <CardHeader>
                <h5>Webinar</h5>
            </CardHeader>
            <CardBody>
            
            <ReactPlayer
                    controls
                    url="https://www.youtube.com/watch?v=UgA_5V3Jro0"
                    width="740px"
                    height="500px"
                />
            </CardBody>
        </Card>
    )
}
