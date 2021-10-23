module.exports = {
    siteMetadata: {
        title: "pagenow.io",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-058533EWTS"
                ],
            },
          },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "pagenow.io",
                acl: null,
                generateRoutingRules: false
            },
        },
        {
          resolve: "gatsby-plugin-manifest",
          options: {
            icon: "src/assets/PageNow_icon.png",
          },
        },
    ],
};
