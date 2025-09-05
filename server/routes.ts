import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSignupSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get waitlist stats
  app.get("/api/waitlist/stats", async (req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      res.json({ count, target: 500 });
    } catch (error) {
      console.error("Error fetching waitlist stats:", error);
      res.status(500).json({ message: "Failed to fetch waitlist stats" });
    }
  });

  // Create waitlist signup
  app.post("/api/waitlist/signup", async (req, res) => {
    try {
      const result = insertWaitlistSignupSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Validation failed", 
          errors: validationError.details 
        });
      }

      // Check if email already exists
      const existingSignup = await storage.getWaitlistSignupByEmail(result.data.email);
      if (existingSignup) {
        return res.status(409).json({ 
          message: "This email is already on the waitlist" 
        });
      }

      const signup = await storage.createWaitlistSignup(result.data);
      const newCount = await storage.getWaitlistCount();
      
      res.status(201).json({ 
        message: "Successfully joined waitlist",
        position: newCount,
        count: newCount,
        target: 500
      });
    } catch (error) {
      console.error("Error creating waitlist signup:", error);
      res.status(500).json({ message: "Failed to join waitlist" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
