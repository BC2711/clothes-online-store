import { Button } from '@material-tailwind/react';
import homeImage from '../assets/home_img.jpg';
import Testimonials from './Testimonials';
import AboutPage from './AboutPage';
import ProductCarousel from '../components/CustomNavigation';

export default function HomePage() {
    return (
        <div className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Top Info Bar */}
            <div className="bg-gray-50 border-b">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 text-center sm:text-left">
                        <div className="p-4 sm:border-r border-gray-200">
                            <p className="font-semibold text-gray-900">Download the App</p>
                            <p className="text-gray-600 text-sm">Get an Exclusive $10 off Code</p>
                        </div>
                        <div className="p-4 sm:border-r border-gray-200">
                            <p className="font-semibold text-gray-900">Return when you're ready</p>
                            <p className="text-gray-600 text-sm">60 days of free returns</p>
                        </div>
                        <div className="p-4">
                            <p className="font-semibold text-gray-900">Sign up for newsletters</p>
                            <p className="text-gray-600 text-sm">15% off your first order</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-gray-50 to-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 space-y-6">
                            <h1 className="text-4xl font-bold text-gray-900">
                                Focus on what <span className="text-blue-600">matters</span>
                            </h1>
                            <p className="text-lg text-gray-600">
                                All the charts, date pickers, and notifications in the world
                                can't beat checking off some items on a paper card.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="gradient" className="w-full sm:w-auto">
                                    Shop Productivity
                                </Button>
                                <Button variant="outline" className="w-full sm:w-auto">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                alt="Home"
                                src={homeImage}
                                className="w-full h-auto max-h-96 object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Trending Products</h2>
                        <p className="mt-2 text-gray-600">Discover our most popular items this season</p>
                    </div>
                    <ProductCarousel />
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
                        <p className="mt-2 text-gray-600">Hear from people who love our products</p>
                    </div>
                    <Testimonials/>
                </div>
            </div>

            {/* About Preview */}
            <div className="bg-white py-16 border-t">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                        <p className="mt-2 text-gray-600">Learn more about who we are and what we stand for</p>
                    </div>
                    <AboutPage />
                </div>
            </div>
        </div>
    );
}