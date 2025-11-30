import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import dotenv from "dotenv"

dotenv.config();

// Create an Arcjet instance with multiple rules
export const aj = arcjet({
  key: process.env.ARCJET_KEY, // Get your site key from https://app.arcjet.com
  rules: [
    // Protect against common attacks with Arcjet Shield
    shield({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
    }), 
    tokenBucket({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      refillRate: 10, // refill # of tokens per interval
      interval: 5, // refill every # seconds
      capacity: 20, // bucket maximum capacity of # tokens
    }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE","POSTMAN"], // "allow none" will block all detected bots. Full list: https://github.com/arcjet/arcjet-js/blob/main/protocol/well-known-bots.ts
    }),
  ],
});