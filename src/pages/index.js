import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Header from "../components/header"
import Followus from "../components/followus"
import "../sass/main.scss"



const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Home</title>
      <Header />
      <div className="wrapper">
      <div className="episodes--container">
      <h1>Latest Episodes</h1>
        <div className="episodes--grid recent">
        {data.allPodcastRssFeedEpisode.edges.map(podcast => (
          <Link to={"episodes/" + podcast.node.item.itunes.episode}>
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
      <Followus />
    </div>
      
    </main>
  )
}

export default IndexPage



export const query = graphql`
  query MyQuery {
    allPodcastRssFeedEpisode(sort: {fields: item___isoDate, order: DESC}, limit: 3) {
      edges {
        node {
          id
          item {
            title
            itunes {
              episode
              image
            }
          }
        }
      }
    }
  }
`
