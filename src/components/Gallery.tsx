import { Tabs, TabsList, TabsPanel, Typography } from "@material-tailwind/react";
import EcommerceCard from "./EcommerceCard";

export default function GalleryWithTab() {
    const data = [
        {
            label: "All New Arrivals",
            value: "new-arrivals",
            images: [
                {
                    imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                    title: "Summer Collection",
                    price: "$49.99",
                    category: "New Arrivals"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                    title: "Casual Outfit",
                    price: "$39.99",
                    category: "New Arrivals"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                    title: "Street Style",
                    price: "$59.99",
                    category: "New Arrivals"
                },
                {
                    imageLink: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
                    title: "Premium Jacket",
                    price: "$89.99",
                    category: "New Arrivals"
                },
                {
                    imageLink: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
                    title: "Designer Dress",
                    price: "$79.99",
                    category: "New Arrivals"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
                    title: "Elegant Blouse",
                    price: "$45.99",
                    category: "New Arrivals"
                },
            ],
        },
        {
            label: "Tees",
            value: "tees",
            images: [
                {
                    imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                    title: "Classic Tee",
                    price: "$29.99",
                    category: "T-Shirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    title: "Graphic Tee",
                    price: "$34.99",
                    category: "T-Shirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
                    title: "Vintage Tee",
                    price: "$39.99",
                    category: "T-Shirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                    title: "Oversized Tee",
                    price: "$32.99",
                    category: "T-Shirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                    title: "Pocket Tee",
                    price: "$27.99",
                    category: "T-Shirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                    title: "Long Sleeve Tee",
                    price: "$36.99",
                    category: "T-Shirts"
                },
            ],
        },
        {
            label: "Crewnecks",
            value: "crewnecks",
            images: [
                {
                    imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                    title: "Classic Crewneck",
                    price: "$59.99",
                    category: "Sweaters"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                    title: "Oversized Crewneck",
                    price: "$64.99",
                    category: "Sweaters"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                    title: "Graphic Crewneck",
                    price: "$69.99",
                    category: "Sweaters"
                },
                {
                    imageLink: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
                    title: "Premium Crewneck",
                    price: "$79.99",
                    category: "Sweaters"
                },
                {
                    imageLink: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
                    title: "Designer Crewneck",
                    price: "$89.99",
                    category: "Sweaters"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
                    title: "Vintage Crewneck",
                    price: "$54.99",
                    category: "Sweaters"
                },
            ],
        },
        {
            label: "Sweatshirts",
            value: "sweatshirts",
            images: [
                {
                    imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                    title: "Classic Sweatshirt",
                    price: "$49.99",
                    category: "Sweatshirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    title: "Hooded Sweatshirt",
                    price: "$59.99",
                    category: "Sweatshirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
                    title: "Zip-Up Sweatshirt",
                    price: "$64.99",
                    category: "Sweatshirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                    title: "Oversized Sweatshirt",
                    price: "$54.99",
                    category: "Sweatshirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                    title: "Graphic Sweatshirt",
                    price: "$59.99",
                    category: "Sweatshirts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                    title: "Premium Sweatshirt",
                    price: "$69.99",
                    category: "Sweatshirts"
                },
            ],
        },
        {
            label: "Pants & Shorts",
            value: "pants-shorts",
            images: [
                {
                    imageLink: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
                    title: "Classic Chinos",
                    price: "$59.99",
                    category: "Pants"
                },
                {
                    imageLink: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
                    title: "Denim Jeans",
                    price: "$69.99",
                    category: "Pants"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
                    title: "Casual Shorts",
                    price: "$39.99",
                    category: "Shorts"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                    title: "Athletic Pants",
                    price: "$54.99",
                    category: "Pants"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
                    title: "Linen Pants",
                    price: "$49.99",
                    category: "Pants"
                },
                {
                    imageLink: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
                    title: "Cargo Shorts",
                    price: "$44.99",
                    category: "Shorts"
                },
            ],
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <Typography variant="h3" className="font-bold mb-8 text-center">
                Shop Our Collections
            </Typography>

            <Tabs value="new-arrivals">
                <div className="mb-6">
                    <Typography variant="h5" className="font-semibold mb-4">
                        Categories:
                    </Typography>
                    <TabsList className="bg-transparent">
                        {data.map(({ label, value }) => (
                            <Tabs
                                key={value}
                                value={value}
                                className="whitespace-nowrap px-6 py-3 text-sm font-medium"
                            >
                                {label}
                            </Tabs>
                        ))}
                    </TabsList>
                </div>

                {/* Tabs content panels */}
                {data.map(({ value, images }) => (
                    <TabsPanel
                        key={value}
                        value={value}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        {images?.map((imageProps, index) => (
                            <EcommerceCard
                                key={index}
                                image={imageProps.imageLink}
                                title={imageProps.title}
                                price={imageProps.price}
                                description=''
                                category=''
                                rating={0}
                            />
                        ))}
                    </TabsPanel>
                ))}
            </Tabs>
        </div>
    );
}