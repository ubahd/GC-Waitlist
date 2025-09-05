export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Mission", href: "#" },
      { name: "Team", href: "#" },
      { name: "Careers", href: "#" },
    ],
    connect: [
      { name: "Blog", href: "#" },
      { name: "Newsletter", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GC</span>
              </div>
              <span className="ml-3 text-xl font-bold">GreenConnect</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Connecting homeowners with trusted lawn care professionals. Quality service, fair pricing, and reliable booking all in one platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                    data-testid={`link-company-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.connect.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                    data-testid={`link-connect-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Green Connect. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
