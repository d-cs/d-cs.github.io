import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

const BlogPage = ({ data }: any) => (
  <Layout>
    <div className="pt-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">Posts</h2>
    </div>
    <div className="mt-6 grid gap-8 pt-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
      {data.allMdx.nodes.map((node) => (
        <div key={node.id}>
          <p className="text-sm text-rose-200">
            <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
          </p>
          <a href="#" className="mt-2 block">
            <p className="text-xl font-semibold text-slate-200">{node.frontmatter.title}</p>
            <p className="mt-3 text-base text-slate-200">{node.excerpt}</p>
          </a>
          <div className="mt-3">
            <Link to={`/blog/${node.frontmatter.slug}`} className="text-base font-semibold text-rose-500 hover:text-rose-300">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export const Head = () => <Seo title="d-cs's Posts" />

export default BlogPage