CREATE TABLE IF NOT EXISTS `frameworks` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`language` text NOT NULL,
	`url` text,
	`stars` integer
);
--> statement-breakpoint
CREATE INDEX `idx_frameworks_name` ON `frameworks` (`name`);--> statement-breakpoint
CREATE INDEX `idx_frameworks_url` ON `frameworks` (`url`);
