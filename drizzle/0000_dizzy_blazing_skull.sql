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