import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Header from "../components/header"

import "../sass/main.scss"



const EpisodesPage = ({ data }) => {
  return (
    <main>
      <title>Episodes</title>
      <Header />
      <div className="wrapper">
      <div className="episodes--container">
      <h1>Episodes</h1>
      <div className="episodes--grid">
      {data.allPodcastRssFeedEpisode.edges.map(podcast => (
        <Link to={podcast.node.item.itunes.episode}>
          <img
            className="episodes--image"
            src={podcast.node.item.itunes.image}
            alt={podcast.node.item.title}
          />
          <div className="episodes--titles">
            <h3 key={podcast.node.id}>{podcast.node.item.title}</h3>
            <h4 key={podcast.node.id}>
              Episode {podcast.node.item.itunes.episode}
            </h4>
          </div>
        </Link>
      ))}
    </div>
    </div>
    </div>
      
    </main>
  )
}

export default EpisodesPage


export const query = graphql`
query EpisodesQuery {
  allPodcastRssFeedEpisode(sort: {fields: item___isoDate, order: DESC}) {
    edges {
        node {
          id
          item {
            title
            dc_creator
            content
            enclosure {
              url
            }
            itunes {
              image
              episode
            }
          }
        }
      }
    }
  }
`
