module.exports = {
  siteMetadata: {
    title: "vhbbb",
    siteUrl: "https://vhbbb.com"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-podcast-rss-feed`,
      options: {
        feedURL: `https://anchor.fm/s/255d4628/podcast/rss`,
        id: 'guid',
      },
    },
  ],
};
