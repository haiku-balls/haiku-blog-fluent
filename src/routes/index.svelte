<script lang="ts">
	import { Button, TextBlock, IconButton } from "$lib";

	import { PageSection, CopyBox, HeroCard, Metadata } from "$site/lib";

	import Box from "@fluentui/svg-icons/icons/box_16_regular.svg?raw";
	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import Open from "@fluentui/svg-icons/icons/open_16_regular.svg?raw";

	let exampleCount = 0;

	const example = `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> TextBlock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"fluent-svelte"</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token string">"fluent-svelte/theme.css"</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBlock</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>display<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token language-javascript"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TextBlock</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>accent<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token operator">++</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>Increase Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>Reset Counter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>`;
</script>

<Metadata
	title="Haiku's Blog"
	description="blog yes"
/>

<PageSection id="hero-section">
	<div class="hero-contents">
		<h1>Haiku's Blog</h1>
		<p style="text-align: center;">It's fluent wow :o</p>
		<div class="buttons-spacer">
			<Button variant="accent" href="/forum">Read</Button>
			<Button variant="standard" href="/about	">About</Button>
		</div>
	</div>

	<div class="hero-cards">
		<HeroCard>
			<svelte:fragment slot="header">
				<TextBlock variant="bodyStrong">PLACEHOLDER (WITH A BUTTON)</TextBlock>
			</svelte:fragment>

			<TextBlock>i like touhou</TextBlock>
			<Button variant="accent">do something</Button>
		</HeroCard>
		<HeroCard>
			<svelte:fragment slot="header">
				<TextBlock variant="bodyStrong">PLACEHOLDER</TextBlock>
				<IconButton href="/forum">
					{@html Book}
				</IconButton>
			</svelte:fragment>
		</HeroCard>
		<HeroCard>
			<svelte:fragment slot="header">
				<TextBlock variant="bodyStrong">Test Content (PLACEHOLDER)</TextBlock>
			</svelte:fragment>
			<div class="example-app">
				<TextBlock variant="display">{exampleCount}</TextBlock>
				<div>
					<Button variant="accent" on:click={() => (exampleCount += 1)}
						>Increase</Button
					>
					<Button on:click={() => (exampleCount = 0)}>Reset</Button>
				</div>
			</div>
		</HeroCard>
	</div>
</PageSection>

<style lang="scss">
	@use "src/site/styles/pages/home";
</style>
