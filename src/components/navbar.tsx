import * as React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'gatsby'

const navigation = []

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => (
    <Disclosure as="nav" className="bg-zinc-900">
        {({ open }) => (
            <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to="/"
                                    className="block h-8 w-auto lg:hidden px-3 py-2 rounded-md text-sm font-medium text-rose-500 font-mono"
                                >
                                    d-cs.dev
                                </Link>
                                <Link to="/"
                                    className="hidden h-8 w-auto lg:block px-3 py-2 rounded-md text-sm font-medium text-rose-500 font-mono"
                                >
                                    d-cs.dev
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
    </Disclosure>
)

export default NavBar