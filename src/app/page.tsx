import Player from "../../components/Player/Player";


export default function Home() {
    const options = {
        controls: true,
        sources: [{ src: "//vjs.zencdn.net/v/oceans.mp4" }]
    }
  return (
    <main>
      <Player options={options} />
    </main>
  )
}
