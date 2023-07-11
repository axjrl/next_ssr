'use client';
import {useEffect, useRef} from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css'

const Player = ({ options }: {options: any}) => {
    const container = useRef<HTMLVideoElement>(null);
    const player = useRef<any>(undefined);

    useEffect(() => {
        player.current = container.current && videojs(container.current, options)
        return () => {
            player.current.dispose()
        }
    }, [])

    return (
        <div data-vjs-player="">
            <video className="video-js" ref={container} />
        </div>
    )
};

export default Player;