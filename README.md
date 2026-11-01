# Little Plates

Recipes we've made at home, and how they went. The site lives at https://steelwalrus.github.io/t-recipes/.

## Turn the site on (once)

1. On GitHub, open this repo and go to **Settings** > **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Pick the `main` branch and the `/ (root)` folder, then tap **Save**.

The site appears at the link above after a minute or two. GitHub rebuilds it every time `main` changes.

## Put it on your home screen

Open the site in Chrome, tap the **⋮** menu, then tap **Add to Home screen**. Some phones call it **Install app**.

## Add a recipe or a rating

Start a Claude Code session on this repo and ask in plain words. For example:

- "Add this recipe", with a screenshot or the text pasted in.
- "Rate the frittata 4 out of 5. He ate it all but picked out the peas."
- "Bring up the frittata."

Claude edits the files in `_recipes/` and pushes to `main`, and the site updates on its own.

## Edit by hand

Each recipe is one Markdown file in `_recipes/`. To rate one, set `rating:` to a number from 1 to 5 and write a line after `verdict:`.
