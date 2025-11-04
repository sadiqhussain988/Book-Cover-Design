import React from "react";

const AuthorGallery = () => {
    const images = ["author1.jpg", "author2.jpg"];

    return (
        <section
            className="py-14 text-gray-800"
            style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f2f7ff 100%)",
            }}>
            
            
            
            <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
               {/* 🖋️ Heading */}
                <div data-aos="fade-up" className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#BB4D00] tracking-tight">
                        About the Author
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        Behind{" "}
                        <span className="font-semibold text-[#BB4D00]">
                            “Strong with Hearts and Hounds”
                        </span>{" "}
                        lies a story of empathy, therapy, and the unspoken bond between
                        humans and their loyal canine companions.
                    </p>
                    </div>



                {/* 👩‍💼 Author Images */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-3xl shadow-xl border border-[#e5eaf5] bg-white 
                          hover:shadow-2xl hover:-translate-y-1 transition-all duration-700 group" >
                            {/* Image */}
                            <img
                                src={img}
                                alt="Author"
                                className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />



                            {/* ✨ Light Sweep Effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                <div className="shine-line"></div>
                            </div>

                            {/* Soft overlay gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                    ))}
                </div>



                {/* ✍️ Signature / Quote */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="pt-6 text-[#BB4D00] italic text-lg md:text-xl font-medium"
                >
                    “Writing from the heart — inspired by the healing power of dogs.”
                </div>



                {/* Divider Line */}
                <div className="w-24 h-[3px] bg-[#BB4D00] mx-auto mt-4 rounded-full"></div>
            </div>
        </section>
    );
};

export default AuthorGallery;
