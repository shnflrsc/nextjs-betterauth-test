import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import "./auth-schema";

export const postsTable = pgTable("posts", {
  id: integer("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  content: varchar("content", { length: 1024 }).notNull(),
});