import React from "react";

const AboutAuthor = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#f5efe9] flex flex-col md:flex-row items-center gap-10">
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
        alt="Author"
        className="rounded-2xl shadow-lg w-full md:w-1/3 object-cover"
      />
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">About the Author</h2>
        <p className="text-lg leading-relaxed">
          <span className="font-semibold">Dr. Charlotte Williams</span> is the founder and CEO of Elysian, delivering therapeutic education, animal-assisted interventions, and professional training. With over twenty years’ experience in social work, mental health, and leadership, Charlotte brings a reflective, real-life approach to help children, families, and professionals grow and thrive.
        </p>
      </div>
    </section>
  );
};

export default AboutAuthor;
