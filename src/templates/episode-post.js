import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Header from "../components/header"

import "../sass/main.scss"

import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const ExpisodePost = ({ data }) => {
    const ep = data.podcastRssFeedEpisode
  return (
    <main>
      <title>{ep.item.title}</title>
      <Header />
      <div className="episode--wrapper">
      <div className="episode--cover">
        <img className="episode--image" src={ep.item.itunes.image} />
        <div className="">
          <AudioPlayer
            src={ep.item.enclosure.url}
            customAdditionalControls={[]}
            customVolumeControls={[]}
          />
        </div>
      </div>
      <div className="episode--details">
          <h1>{ep.item.title}</h1>
          <h2>Episode {ep.item.itunes.episode}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: ep.item.content,
            }}
          />
        </div>
    </div>

    </main>
  )
}

export default ExpisodePost



export const query = graphql`
  query($slug: String!) {
    podcastRssFeedEpisode(item: { itunes: { episode: { eq: $slug } } }) {
      item {
        itunes {
          episode
          image
        }
        enclosure {
          url
        }
        content
        title
      }
      id
    }
  }
`