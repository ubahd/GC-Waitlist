import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSignupSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import SuccessModal from "./success-modal";
import type { InsertWaitlistSignup } from "@shared/schema";

interface WaitlistStats {
  count: number;
  target: number;
}

interface SignupResponse {
  message: string;
  position: number;
  count: number;
  target: number;
}

export default function SignupSection() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userPosition, setUserPosition] = useState(0);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: stats } = useQuery<WaitlistStats>({
    queryKey: ['/api/waitlist/stats'],
  });

  const form = useForm<InsertWaitlistSignup>({
    resolver: zodResolver(insertWaitlistSignupSchema),
    defaultValues: {
      email: "",
      firstName: "",
      zipCode: "",
    },
  });

  const signupMutation = useMutation({
    mutationFn: async (data: InsertWaitlistSignup): Promise<SignupResponse> => {
      const response = await apiRequest("POST", "/api/waitlist/signup", data);
      return response.json();
    },
    onSuccess: (data) => {
      setUserPosition(data.position);
      setShowSuccessModal(true);
      form.reset();
      // Invalidate and refetch stats
      queryClient.invalidateQueries({ queryKey: ['/api/waitlist/stats'] });
      toast({
        title: "Success!",
        description: `You're now #${data.position} on our waitlist!`,
      });
    },
    onError: (error: any) => {
      const message = error.message || "Failed to join waitlist";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlistSignup) => {
    signupMutation.mutate(data);
  };

  return (
    <>
      <section id="signup" className="py-16 bg-gradient-to-r from-green-primary to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Professional lawn mowing and landscaping service in action" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Effortless Lawn Care?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join <span data-testid="text-current-signups">{stats?.count || 0}</span> homeowners already on the waitlist. 
            Get priority access to trusted lawn care professionals in your area.
          </p>
          
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-md mx-auto bg-white bg-opacity-95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl"
            data-testid="form-waitlist-signup"
          >
            <div className="mb-4">
              <Label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-2">
                Email Address
              </Label>
              <Input 
                {...form.register("email")}
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full focus:ring-2 focus:ring-green-primary focus:border-green-primary"
                data-testid="input-email"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1" data-testid="text-email-error">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            
            <div className="mb-4">
              <Label htmlFor="firstName" className="block text-left text-sm font-medium text-gray-700 mb-2">
                First Name
              </Label>
              <Input 
                {...form.register("firstName")}
                type="text"
                id="firstName"
                placeholder="Your first name"
                className="w-full focus:ring-2 focus:ring-green-primary focus:border-green-primary"
                data-testid="input-first-name"
              />
              {form.formState.errors.firstName && (
                <p className="text-red-500 text-sm mt-1" data-testid="text-first-name-error">
                  {form.formState.errors.firstName.message}
                </p>
              )}
            </div>
            
            <div className="mb-4">
              <Label htmlFor="zipCode" className="block text-left text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </Label>
              <Input 
                {...form.register("zipCode")}
                type="text"
                id="zipCode"
                placeholder="12345"
                className="w-full focus:ring-2 focus:ring-green-primary focus:border-green-primary"
                data-testid="input-zip-code"
              />
              {form.formState.errors.zipCode && (
                <p className="text-red-500 text-sm mt-1" data-testid="text-zip-code-error">
                  {form.formState.errors.zipCode.message}
                </p>
              )}
            </div>
            
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Checkbox 
                  required
                  className="mr-2 border-gray-300 text-green-primary focus:ring-green-primary"
                  data-testid="checkbox-consent"
                />
                <label>I agree to receive updates about GreenConnect and early access notifications.</label>
              </div>
            </div>
            
            <Button 
              type="submit"
              disabled={signupMutation.isPending}
              className="w-full bg-green-primary hover:bg-green-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-green-primary focus:ring-opacity-50"
              data-testid="button-submit-signup"
            >
              {signupMutation.isPending ? (
                <div className="flex items-center justify-center">
                  <span>Joining...</span>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                </div>
              ) : (
                "Join the Waitlist"
              )}
            </Button>
            
            <p className="text-xs text-gray-500 mt-4">
              No spam, unsubscribe anytime. We'll notify you when we launch in your area.
            </p>
            
            <div className="mt-4 text-xs text-gray-600 text-center">
              <p className="font-medium">Services coming to your area:</p>
              <p>Grass cutting • Fertilization • Weed removal • Leaf cleanup • Landscaping</p>
            </div>
          </form>
        </div>
      </section>

      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        position={userPosition}
      />
    </>
  );
}
