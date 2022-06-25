<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	import { docsPages } from "$site/data/forum";

	export const prerender = true;

	export const load: Load = async ({ url }) => {
		const path = url.pathname
			.replace(/\/$/gi, "") // remove trailing slash
			.replace("/forum", ""); // remove /docs

		const currentPage = docsPages.find(p => p.path === path);

		return {
			props: {
				currentPage
			}
		};
	};
</script>

<script lang="ts">
	import { goto } from "$app/navigation";

	import { Metadata, TreeView, Toc } from "$site/lib";
	import { docsMap } from "$site/data/forum";

	import { Button, TextBlock, AutoSuggestBox, ListItem } from "$lib";

	export let currentPage: DocsMap;

	let article;
	let searchMatches = [];
	let searchValue = "";
	let searchSelection = 0;
	let searchFlyoutOpen = false;
	let searchItems = docsPages.map(page => page.name);

	function handleKeyDown({ key }: KeyboardEvent) {
		if (key === "Enter") {
			searchValue = "";
			goto(
				`/forum${
					docsPages.filter(page => searchMatches.some(match => page.name === match))[
						searchSelection
					].path
				}`
			);
		}
	}

	function handleSelection(index) {
		searchValue = searchItems[index];
		searchSelection = index;
		searchFlyoutOpen = false;
	}
</script>

<Metadata title="Haiku's Blog - Forum - {currentPage?.name}" description="" />

<main class="docs-container">
	<div class="docs-container-inner">
		<aside>
			<div class="docs-search">
				<AutoSuggestBox
					placeholder="Search Posts"
					on:keydown={handleKeyDown}
					bind:open={searchFlyoutOpen}
					bind:value={searchValue}
					bind:selection={searchSelection}
					bind:matches={searchMatches}
					bind:items={searchItems}
				>
					<svelte:fragment slot="item-template" let:matches let:index let:id let:item>
						<ListItem
							on:click={() => handleSelection(index)}
							tabindex={-1}
							selected={searchSelection === index}
							href="/forum{docsPages.filter(page =>
								matches.some(match => page.name === match)
							)[index].path}"
							{id}
						>
							{item}
							<svelte:fragment slot="icon">
								{#if docsPages.filter( page => matches.some(match => page.name === match) )[index].name}
									{@html docsPages.filter(page =>
										matches.some(match => page.name === match)
									)[index].icon}
								{/if}
							</svelte:fragment>
						</ListItem>
					</svelte:fragment>
				</AutoSuggestBox>
			</div>
			<TreeView tree={docsMap} />
		</aside>

		<article class="markdown-body" bind:this={article}>
			<header>
				<h1 id={currentPage?.name}>{currentPage?.name}</h1>
			</header>
			<slot />
		</article>

		<aside>
			<TextBlock variant="bodyStrong">On This Page</TextBlock>
			<Toc target={article} />
		</aside>
	</div>
</main>

<style global lang="scss">
	@use "src/site/styles/pages/forum";
</style>
