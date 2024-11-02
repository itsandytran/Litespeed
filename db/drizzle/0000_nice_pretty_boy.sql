CREATE TABLE `add_on_items` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`price` real DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `menu_items` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`price` real NOT NULL,
	`menu_color` integer
);
--> statement-breakpoint
CREATE TABLE `order_items` (
	`order_id` integer NOT NULL,
	`menu_item_id` integer NOT NULL,
	`quantity` integer NOT NULL,
	`add_on_combination_id` integer,
	PRIMARY KEY(`order_id`, `menu_item_id`, `quantity`, `add_on_combination_id`),
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`add_on_combination_id`) REFERENCES `add_on_combinations_of_order_items`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` integer PRIMARY KEY NOT NULL,
	`date_time` integer NOT NULL,
	`subtotal` real NOT NULL,
	`tax` real NOT NULL,
	`total` real NOT NULL,
	`instructions` text
);
--> statement-breakpoint
CREATE TABLE `add_on_items_of_menu_items` (
	`menu_item_id` integer NOT NULL,
	`add_on_item_id` integer NOT NULL,
	PRIMARY KEY(`menu_item_id`, `add_on_item_id`),
	FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`add_on_item_id`) REFERENCES `add_on_items`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `add_on_combination_items` (
	`combination_id` integer NOT NULL,
	`menu_item_id` integer NOT NULL,
	`add_on_item_id` integer NOT NULL,
	PRIMARY KEY(`combination_id`, `menu_item_id`, `add_on_item_id`),
	FOREIGN KEY (`combination_id`) REFERENCES `add_on_combinations_of_order_items`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`add_on_item_id`) REFERENCES `add_on_items`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`menu_item_id`,`add_on_item_id`) REFERENCES `add_on_items_of_menu_items`(`menu_item_id`,`add_on_item_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `add_on_combinations_of_order_items` (
	`id` integer PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `add_on_items_name_unique` ON `add_on_items` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `menu_items_name_unique` ON `menu_items` (`name`);--> statement-breakpoint
CREATE INDEX `order_index_on_order_items` ON `order_items` (`order_id`);--> statement-breakpoint
CREATE INDEX `menu_item_index_on_order_items` ON `order_items` (`menu_item_id`);--> statement-breakpoint
CREATE INDEX `date_time_index_on_orders` ON `orders` (`date_time`);--> statement-breakpoint
CREATE INDEX `menu_item_index_on_add_ons_of_menu_items` ON `add_on_items_of_menu_items` (`menu_item_id`);--> statement-breakpoint
CREATE INDEX `menu_item_index_on_add_on_combination_items` ON `add_on_combination_items` (`menu_item_id`);--> statement-breakpoint
CREATE INDEX `menu_item_and_add_on_index_on_add_on_combination_items` ON `add_on_combination_items` (`menu_item_id`,`add_on_item_id`);