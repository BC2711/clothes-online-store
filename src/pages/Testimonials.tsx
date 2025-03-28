import React from "react";

const testimonials = [
    {
        quote: "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
        name: "Sarah Peters",
        location: "New Orleans",
    },
    {
        quote: "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
        name: "Kelly McPherson",
        location: "Chicago",
    },
    {
        quote: "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
        name: "Chris Paul",
        location: "Phoenix",
    },
];

const Testimonials: React.FC = () => {
    return (
        <div className="bg-white py-12 px-6 lg:px-20">
            <h2 className="text-2xl font-bold text-gray-900 text-left mb-8">
                What are people saying?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="text-gray-700 text-center md:text-left">
                        <p className="text-4xl text-gray-300 leading-none mb-4">“</p>
                        <p className="mb-4">{testimonial.quote}</p>
                        <p className="font-semibold text-gray-900">
                            {testimonial.name}, {testimonial.location}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
