import { Button } from "@/components/ui/button";

export default function Header() {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GC</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">GreenConnect</span>
          </div>
          <Button 
            onClick={scrollToSignup}
            className="bg-green-primary hover:bg-green-secondary text-white"
            data-testid="button-join-waitlist"
          >
            Join the Waitlist
          </Button>
        </div>
      </nav>
    </header>
  );
}
