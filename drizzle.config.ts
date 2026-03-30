import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.ts",
  dbCredentials:{
         url:"postgresql://neondb_owner:npg_NOcdXG3D2jEi@ep-blue-morning-amjocmdv-pooler.c-5.us-east-1.aws.neon.tech/ai-video-generator?sslmode=require&channel_binding=require"
  }
});
