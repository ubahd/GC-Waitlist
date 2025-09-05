export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Homeowner, Oak Ridge",
      initials: "JM",
      content: "Finally, a way to find reliable lawn care without the hassle. Can't wait for GreenConnect to launch in my neighborhood!",
      bgColor: "bg-gradient-to-r from-green-primary to-emerald-400"
    },
    {
      name: "David Thompson",
      role: "Property Manager", 
      initials: "DT",
      content: "Managing multiple properties means I need trusted professionals. This platform sounds like exactly what I've been looking for!",
      bgColor: "bg-gradient-to-r from-accent-orange to-yellow-400"
    },
    {
      name: "Lisa Chen",
      role: "Busy Professional",
      initials: "LC", 
      content: "Between work and family, I don't have time to research lawn care services. Having verified professionals at my fingertips will be a game-changer.",
      bgColor: "bg-gradient-to-r from-earth-brown to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Homeowners Are Ready for GreenConnect
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-semibold" data-testid={`text-initials-${index}`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900" data-testid={`text-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500" data-testid={`text-role-${index}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600" data-testid={`text-content-${index}`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
