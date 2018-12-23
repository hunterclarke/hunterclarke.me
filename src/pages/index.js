import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <p
                  style={{
                    textAlign: "center"
                  }}
                >
                  Until I get around to writing something check me out on <a href="https://twitter.com/hunterclarke">Twitter</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

// Put back into markup when ready
// {posts.map(({ node: post }) => (
//   <div
//     className="content"
//     key={post.id}
//   >
//     <Link to={post.fields.slug}>
//       <h1 className="has-text-primary">{post.frontmatter.title}</h1>
//     </Link>
//     <p>
//       <small>{post.frontmatter.date}</small>
//     </p>
//     <p>
//       {post.excerpt}
//       <br />
//       <br />
//       <Link className="button is-small" to={post.fields.slug}>
//         Keep Reading →
//       </Link>
//     </p>
//   </div>
// ))}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 800)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
