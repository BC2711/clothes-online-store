'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: 90.00,
        quantity: 1,
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: 32.00,
        quantity: 1,
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
]

export default function ShoppingCart() {
    const [open, setOpen] = useState(true)
    const [cartItems, setCartItems] = useState(products)

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ))
    }

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 data-closed:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition-all duration-300 ease-in-out data-closed:translate-x-full"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-lg font-bold text-gray-900">Shopping Cart ({cartItems.length})</DialogTitle>
                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <XMarkIcon className="h-6 w-6" />
                                        </button>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            {cartItems.length === 0 ? (
                                                <div className="text-center py-12">
                                                    <p className="text-gray-500">Your cart is empty</p>
                                                    <button
                                                        onClick={() => setOpen(false)}
                                                        className="mt-4 text-indigo-600 hover:text-indigo-500 font-medium"
                                                    >
                                                        Continue Shopping
                                                    </button>
                                                </div>
                                            ) : (
                                                <ul className="-my-6 divide-y divide-gray-200">
                                                    {cartItems.map((product) => (
                                                        <li key={product.id} className="flex py-6 group">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={product.imageSrc}
                                                                    alt={product.imageAlt}
                                                                    className="h-full w-full object-cover object-center"
                                                                />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href={product.href} className="hover:text-indigo-600 transition-colors">
                                                                                {product.name}
                                                                            </a>
                                                                        </h3>
                                                                        <p className="ml-4">${product.price.toFixed(2)}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                </div>

                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <div className="flex items-center border rounded-md">
                                                                        <button
                                                                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                                                            className="px-2 py-1 text-gray-500 hover:text-indigo-600 transition-colors"
                                                                            disabled={product.quantity <= 1}
                                                                        >
                                                                            <MinusIcon className="h-4 w-4" />
                                                                        </button>
                                                                        <span className="px-3">{product.quantity}</span>
                                                                        <button
                                                                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                                                            className="px-2 py-1 text-gray-500 hover:text-indigo-600 transition-colors"
                                                                        >
                                                                            <PlusIcon className="h-4 w-4" />
                                                                        </button>
                                                                    </div>

                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeItem(product.id)}
                                                                        className="font-medium text-red-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {cartItems.length > 0 && (
                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>${subtotal.toFixed(2)}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
                                            >
                                                Checkout
                                            </a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or{' '}
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}