import { Button } from '@material-tailwind/react';
import aboutImage from '../assets/home_img.jpg';
import teamImage from '../assets/home_img.jpg';

export default function AboutPage() {
    return (
        <div className="bg-white">
            <div className="pt-0">
                <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center border-b py-16">
                        <div className="order-2 sm:order-1">
                            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
                            <p className="text-gray-600 mb-6">
                                Founded in 2020, we started as a small team passionate about creating products that
                                help people focus on what truly matters. Our journey began in a tiny garage with
                                just three people and a big dream.
                            </p>
                            <p className="text-gray-600 mb-8">
                                Today, we've grown into a company serving thousands of customers worldwide, but we've
                                never lost sight of our original mission: to simplify life through thoughtful design.
                            </p>
                            <Button variant="gradient" className="mt-4">
                                Learn More
                            </Button>
                        </div>
                        <div className="order-1 sm:order-2 flex justify-center">
                            <img
                                alt="Our beginnings"
                                src={aboutImage}
                                className="w-full max-h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="py-16 border-b">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Mission</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6 rounded-lg bg-gray-50">
                                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                                <p className="text-gray-600">
                                    We source only the finest materials and stand behind every product we make.
                                </p>
                            </div>
                            <div className="text-center p-6 rounded-lg bg-gray-50">
                                <h3 className="text-xl font-semibold mb-3">Customer Focused</h3>
                                <p className="text-gray-600">
                                    Your satisfaction is our priority. We listen and adapt to your needs.
                                </p>
                            </div>
                            <div className="text-center p-6 rounded-lg bg-gray-50">
                                <h3 className="text-xl font-semibold mb-3">Sustainable Growth</h3>
                                <p className="text-gray-600">
                                    We're committed to ethical business practices that benefit people and planet.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="py-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                            <div className="flex justify-center">
                                <img
                                    alt="Our team"
                                    src={teamImage}
                                    className="w-full max-h-96 object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
                                <p className="text-gray-600 mb-6">
                                    We're a diverse group of designers, engineers, and customer service professionals
                                    who share a common passion for creating exceptional products.
                                </p>
                                <p className="text-gray-600 mb-8">
                                    What unites us is our belief that good design should be accessible to everyone and
                                    that business can be a force for positive change.
                                </p>
                                <Button variant="outline" className="mt-4">
                                    Join Our Team
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="bg-gray-50 p-12 rounded-xl">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Integrity",
                                    description: "We do what's right, even when no one is watching."
                                },
                                {
                                    title: "Innovation",
                                    description: "We challenge the status quo to create better solutions."
                                },
                                {
                                    title: "Community",
                                    description: "We build relationships that go beyond transactions."
                                },
                                {
                                    title: "Excellence",
                                    description: "We take pride in our work and always strive to improve."
                                }
                            ].map((value, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}