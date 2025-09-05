import bookingImage from "@assets/generated_images/Woman_booking_lawn_care_f0f16f16.png";

export default function FeatureShowcase() {
  const features = [
    {
      title: "Verified Professionals",
      description: "Priority access to background-checked, insured lawn care professionals with proven track records.",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Professional lawn care specialist working on beautiful green lawn"
    },
    {
      title: "Exclusive Pricing",
      description: "Special rates and discounts reserved for early adopters, plus seasonal pricing protection.",
      image: "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Well-maintained residential lawn with professional landscaping"
    },
    {
      title: "Instant Booking",
      description: "Skip the waitlist for premium providers and get same-day service when you need it most.",
      image: bookingImage,
      alt: "Happy woman booking lawn care services on her smartphone in her beautiful yard"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Join the Waitlist?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get exclusive access to trusted lawn care professionals and premium features before anyone else in your neighborhood.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
              data-testid={`card-feature-${index}`}
            >
              <img 
                src={feature.image}
                alt={feature.alt}
                className="rounded-xl w-full h-48 object-cover mb-6 shadow-md group-hover:shadow-xl transition-shadow"
                data-testid={`img-feature-${index}`}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-gray-600" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
