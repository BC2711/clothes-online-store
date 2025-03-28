import { Typography, Input, Button } from "@material-tailwind/react";

const SITEMAP = [
    { title: "Company", links: ["About Us", "Careers", "Our Team", "Projects"] },
    { title: "Help Center", links: ["Discord", "Twitter", "GitHub", "Contact Us"] },
    { title: "Resources", links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"] },
    { title: "Products", links: ["Templates", "UI Kits", "Icons", "Mockups"] },
];

const SOCIAL_ICONS = [
    { href: "https://facebook.com", svgPath: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { href: "https://twitter.com", svgPath: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
    { href: "https://instagram.com", svgPath: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" },
];

const currentYear = new Date().getFullYear();

export function Footer({ brand = "Your Brand" }) {
    return (
        <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative w-full bg-gray-50 border-t border-gray-200">
            <div className="mx-auto w-full max-w-7xl px-8">
                {/* Newsletter Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 border-b border-gray-200">
                    <div>
                        <Typography variant="h4"
                            color="inherit"
                            className="mb-2">
                            Sign up for our newsletter
                        </Typography>
                        <Typography
                            color="inherit"
                            className="mb-6">
                            Get the latest news, updates and special offers delivered to your inbox.
                        </Typography>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                        <div className="flex-grow">
                            <Input
                                type="email"
                                // label="Email address"
                                // color="blue"
                                className="!border-gray-300 focus:!border-gray-900"
                            />
                        </div>
                        <Button
                            // color="gray"
                            className="bg-gray-900 text-white shadow-none hover:shadow-none"
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <Typography variant="h4" color="inherit" className="mb-4">
                            {brand}
                        </Typography>
                        <Typography color="inherit" className="mb-6">
                            Making the world a better place through constructing elegant hierarchies.
                        </Typography>
                        <div className="flex gap-4">
                            {SOCIAL_ICONS.map(({ href, svgPath }, index) => (
                                <a key={index} href={href} target="_blank" rel="noopener noreferrer" title="Social Media">
                                    <svg className="h-5 w-5 text-blue-gray-700 hover:text-blue-gray-900 transition" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={svgPath} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sitemap Links */}
                    {SITEMAP.map(({ title, links }, index) => (
                        <div key={index} className="w-full">
                            <Typography variant="small" color="inherit" className="mb-4 font-bold uppercase opacity-70">
                                {title}
                            </Typography>
                            <ul className="space-y-2">
                                {links.map((link, key) => (
                                    <li key={key}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            className="block py-1 text-gray-600 transition hover:text-gray-900 hover:translate-x-1"
                                        >
                                            {link}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="flex flex-col items-center justify-between border-t border-gray-200 py-8 md:flex-row">
                    <Typography variant="small" className="text-center text-gray-600">
                        &copy; {currentYear} <a href="https://yourbrand.com" className="font-medium hover:text-gray-900">{brand}</a>. All Rights Reserved.
                    </Typography>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Typography as="a" href="#" className="text-gray-600 hover:text-gray-900">
                            Privacy Policy
                        </Typography>
                        <Typography as="a" href="#" className="text-gray-600 hover:text-gray-900">
                            Terms of Service
                        </Typography>
                        <Typography as="a" href="#" className="text-gray-600 hover:text-gray-900">
                            Cookies
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}