import { useQuery } from "@tanstack/react-query";
import { Progress } from "@/components/ui/progress";

interface WaitlistStats {
  count: number;
  target: number;
}

export default function HeroSection() {
  const { data: stats, isLoading } = useQuery<WaitlistStats>({
    queryKey: ['/api/waitlist/stats'],
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const percentage = stats ? (stats.count / stats.target) * 100 : 0;
  const remaining = stats ? stats.target - stats.count : 0;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Be First to Experience the
              <span className="text-green-primary"> Future of Lawn Care</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Join thousands of homeowners getting priority access to verified lawn care professionals in their area. 
              Skip the wait, get the best service.
            </p>
            
            {/* Progress meter */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Waitlist Progress</h3>
                <span className="text-sm text-gray-500" data-testid="text-signup-count">
                  {isLoading ? "Loading..." : `${stats?.count || 0} / ${stats?.target || 500} members`}
                </span>
              </div>
              
              <div className="relative">
                <Progress 
                  value={percentage} 
                  className="w-full h-4 bg-gray-200"
                  data-testid="progress-waitlist"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm font-medium text-green-primary" data-testid="text-percentage">
                    {percentage.toFixed(1)}% Complete
                  </span>
                  <span className="text-sm text-gray-500" data-testid="text-remaining">
                    {remaining} spots left
                  </span>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-primary rounded-full mr-2 animate-pulse"></div>
                  <span>Live updates</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium text-green-primary">Est. Launch:</span> Spring 2024
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Beautiful maintained lawn with professional landscaping" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-primary rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-900">Verified Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
