import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Check } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: number;
}

export default function SuccessModal({ isOpen, onClose, position }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-center" data-testid="modal-success">
        <div className="w-16 h-16 bg-green-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid="text-modal-title">
          You're In!
        </h3>
        <p className="text-gray-600 mb-6" data-testid="text-modal-description">
          You're now <span className="font-semibold text-green-primary">#{position}</span> on our waitlist. 
          We'll notify you as soon as GreenConnect launches in your area with priority access to trusted lawn care professionals.
        </p>
        <Button 
          onClick={onClose}
          className="bg-green-primary hover:bg-green-secondary text-white"
          data-testid="button-close-modal"
        >
          Got it!
        </Button>
      </DialogContent>
    </Dialog>
  );
}
