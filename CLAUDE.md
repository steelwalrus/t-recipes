# Little Plates

A recipe site for the owner's toddler, read on an Android phone while cooking. It is Jekyll 3.10 on GitHub Pages, built from `main` with no workflow and no Gemfile. The live site is https://steelwalrus.github.io/t-recipes/.

## Publish straight to main

The owner approved pushing recipe changes straight to `main` on 2026-11-01, so a change goes live without a PR. Run the build check first. If the session also names a working branch, push that too.

## Add a recipe

Create `_recipes/<slug>.md`. Make the slug from the title, lower case with hyphens. The page URL is `https://steelwalrus.github.io/t-recipes/<slug>/`.

```markdown
---
title: Savoury Cake Tin Bake
summary: One line on what it is.
added: YYYY-MM-DD
time: About 35 min
oven: 180°C (160°C fan)
makes: One tin, cut into fingers
source: Where it came from
rating:
verdict:
---

## Ingredients

- 1 carrot

## Method

1. One step per item.

## Serving

Optional extra sections go after Method.
```

- Keep the `## Ingredients` and `## Method` headings exactly. The tick-off feature in `assets/kitchen.js` finds the lists by those headings.
- Write Ingredients as a `-` list and Method as a `1.` list. Do not nest lists. Fold an optional extra into the step it belongs to.
- Leave `time`, `oven` or `makes` blank when they do not apply. The page hides blank ones.
- The owner improvises from what is in the house. Use the ingredients they say they have.
- Keep the quantities and timings from the source. Do not invent ones the source does not give.
- Rewrite pasted recipes into plain British English. Use short sentences and no emoji or exclamation marks. Leave out words like "delicious", "enjoy" and "whip up".

## Record a rating

Set `rating:` to a whole number from 1 to 5. Put the owner's one-line verdict after `verdict:`, in their words with a light tidy. If they changed something while cooking, add it to a `## Notes` section at the end of the recipe.

## Bring up a recipe

Reply with the full page URL, so the owner can tap it on their phone.

## Check the build before pushing

```bash
gem install jekyll -v 3.10.0 --no-document
gem install kramdown-parser-gfm webrick --no-document
"$(ruby -e 'print Gem.bindir')/jekyll" build
```

The build must exit 0 with no warnings. To look at a page, run `jekyll serve` and open http://127.0.0.1:4000/t-recipes/.
