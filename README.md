# Calcio in Italia

An English football-trip planner for four cousins travelling from Stockholm to Italy in October, November or December **2026**.

**Site:** https://niklaslind.github.io/calcio_in_italia/

## The Planner

- A searchable team shortlist, sortable by reference league, with city and official club links.
- A month, team and route-filtered match calendar with an explicit verification status.
- Nine travel routes: Nice-Monaco-Sanremo, Lake Como and Switzerland, Venice from the mainland, Sicily, Piedmont, Emilia, Tuscany, Naples and Puglia.
- Suggested bases, football options, flights and rail connections, official timetable links, sightseeing and seasonal cautions.

## Data Limitations

Official fixture sources were inaccessible during research on 3 October 2026. **There are no verified October-December 2026 fixtures in this site yet.** Empty calendar results do not mean no games are scheduled. Club and league links are starting points, not verified live schedules.

Team divisions are explicitly labelled **2024/25 historical references**, not current 2026/27 membership. Confirm promotion/relegation, venue, opponent, date, kickoff and ticket availability before booking. Flight routes and rail journeys are planning suggestions, not confirmed services or departure times.

The source brief is `ai-instructions.org`. The site is plain HTML, CSS and JavaScript with no build step, API keys or runtime dependencies. Route/team content is in `js/app.js`; styling is in `css/style.css`.

To populate the calendar, add sourced entries to `fixtures` in `js/app.js` using its documented schema. Include the actual competition and venue, both team names, the shortlisted club IDs, an ISO date, local kickoff (or `null`) and an official source URL. Do not populate future fixtures by extrapolating old schedules. Update the verification notices in `index.html` and this README when research coverage changes.

## Preview and Check

Serve the repository using any local static HTTP server, for example `npx http-server .`, then open the local URL it prints. Check team search, league sorting, route filtering, all three calendar months and route links on desktop and mobile.

```sh
node --check js/app.js
git diff --check
```

## Publishing

GitHub Pages currently publishes the **root of `gh-pages`**, not `main`. `.nojekyll` keeps this a plain static site. After reviewing and committing changes on `main`, publish the same commit to both branches:

```sh
git push origin main main:gh-pages
```

Use a normal fast-forward push; if either branch has diverged, inspect and reconcile it rather than force-pushing. No custom GitHub Actions workflow is needed.
