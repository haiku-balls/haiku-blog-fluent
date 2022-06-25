<script lang="ts">
	import { Navbar } from "$site/lib";
	import { IconButton, Tooltip } from "$lib";

	import { dev } from "$app/env";

	import "$lib/theme.css";

	import News from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
	import Wrench from "@fluentui/svg-icons/icons/wrench_24_regular.svg?raw";

	let items = [
		{
			name: "Posts",
			href: "/forum",
			icon: News
		}
	];

	if (dev) {
		items.push({
			name: "Developer Tools",
			href: "/test",
			icon: Wrench
		});
		items = items;
	}
</script>

<Navbar {items}></Navbar>
<main>
	<slot />
</main>

<style lang="scss">
	@use "src/site/styles/global";
</style>
