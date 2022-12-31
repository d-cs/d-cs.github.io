import * as React from "react"
import Helmet from 'react-helmet'
import { Link, HeadFC } from "gatsby"

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <html className="h-full" />
        <body className="h-full bg-slate-800" />
      </Helmet>
      <div className="flex min-h-full flex-col bg-slate-800 pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Link to="/" className="inline-flex">
              <span className="sr-only">d-cs.dev</span>
              <div
                className="h-8 w-auto block px-3 py-2 rounded-md text-2xl font-medium text-slate-200 font-mono"
              >
                d-cs.github.io
              </div>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-rose-500">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Page not found.</h1>
              <p className="mt-2 text-base text-slate-400">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <Link to="/" className="text-base font-medium text-rose-500 hover:text-rose-200">
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}


export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
