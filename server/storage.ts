import { type WaitlistSignup, type InsertWaitlistSignup } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getWaitlistCount(): Promise<number>;
  getWaitlistSignupByEmail(email: string): Promise<WaitlistSignup | undefined>;
  createWaitlistSignup(signup: InsertWaitlistSignup): Promise<WaitlistSignup>;
  getAllWaitlistSignups(): Promise<WaitlistSignup[]>;
}

export class MemStorage implements IStorage {
  private waitlistSignups: Map<string, WaitlistSignup>;

  constructor() {
    this.waitlistSignups = new Map();
  }

  async getWaitlistCount(): Promise<number> {
    return this.waitlistSignups.size;
  }

  async getWaitlistSignupByEmail(email: string): Promise<WaitlistSignup | undefined> {
    return Array.from(this.waitlistSignups.values()).find(
      (signup) => signup.email.toLowerCase() === email.toLowerCase()
    );
  }

  async createWaitlistSignup(insertSignup: InsertWaitlistSignup): Promise<WaitlistSignup> {
    const id = randomUUID();
    const signup: WaitlistSignup = {
      ...insertSignup,
      id,
      createdAt: new Date(),
    };
    this.waitlistSignups.set(id, signup);
    return signup;
  }

  async getAllWaitlistSignups(): Promise<WaitlistSignup[]> {
    return Array.from(this.waitlistSignups.values())
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
}

export const storage = new MemStorage();
