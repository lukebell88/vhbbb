
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
  query {
    allPodcastRssFeedEpisode {
        edges {
          node {
            item {
              content
              itunes {
                image
                episode
              }
              title
              enclosure {
                url
              }
            }
            id
          }
        }
      }
  }
  `)
  data.allPodcastRssFeedEpisode.edges.forEach(edge => {
    const episode = edge.node.item.itunes.episode
    const slash = "/"


    actions.createPage({
      path: "episodes/"+episode,
      component: require.resolve(`./src/templates/episode-post.js`),
      context: { slug: episode },
    })
  })
}
