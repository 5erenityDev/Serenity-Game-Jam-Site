const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create jam pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const jamPostTemplate = path.resolve(`src/templates/jam-post.js`)
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              date
              title
              slug
            }
            id
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(edge => {
    const jamPostPath = 'jams/' + `${edge.node.frontmatter.slug}`
    createPage({
      path: jamPostPath,
      component: jamPostTemplate,
      context: {
        title: edge.node.frontmatter.title,
        id: edge.node.id
      },
    })
  })
}