CREATE TABLE IF NOT EXISTS `blog` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text(255) NOT NULL,
	`content` text,
	`createdAt` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `frameworks` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`language` text NOT NULL,
	`url` text,
	`stars` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `idx_frameworks_name` ON `frameworks` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `idx_frameworks_url` ON `frameworks` (`url`);
