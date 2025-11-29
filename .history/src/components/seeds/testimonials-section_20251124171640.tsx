'use client';

const testimonials = [
  {
    id: 1,
    name: 'James Rodriguez',
    role: 'Master Grower',
    content: 'Maven Genetics has consistently delivered exceptional genetics. The quality and consistency of their strains is unmatched in the industry.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Cultivator',
    content: 'Every strain I\'ve grown from Maven has exceeded my expectations. Their attention to detail and breeding expertise really shows in the final product.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Torres',
    role: 'Dispensary Owner',
    content: 'Our customers specifically ask for Maven Genetics strains. The exotic genetics and rare phenotypes set them apart from everyone else.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-[#191919]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            What Growers Say
          </h2>
          <div className="w-20 h-1 bg-[#c9a961] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black border border-gray-800 rounded-lg p-8 hover:border-[#c9a961] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#c9a961]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}
              </p>

              {/* Author */}
              <div className="border-t border-gray-800 pt-4">
                <p className="text-white font-medium">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
