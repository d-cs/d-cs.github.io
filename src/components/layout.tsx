import * as React from 'react'
import Helmet from 'react-helmet'
import NavBar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <html className="h-full" />
                <body className="h-full bg-zinc-900" />
            </Helmet>
            <NavBar />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
                <div className="mx-auto max-w-3xl h-full ">
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout