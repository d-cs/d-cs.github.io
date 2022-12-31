import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }: any) => {
  return (
    <Layout>
      <div className="relative overflow-hidden py-8">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="block text-center text-sm font-semibold text-rose-500">{data.mdx.frontmatter.date}</span>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-slate-200 sm:text-4xl">
                {data.mdx.frontmatter.title}
              </span>
            </h1>
          </div>
          <div className="prose-invert prose-lg prose-rose prose-pre:bg-zinc-800 mx-auto mt-6 text-slate-200">
            {children}
          </div>
          <Link to="/">
            <span className="block text-sm font-semibold text-rose-500 py-8">Back to posts</span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }: any) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost