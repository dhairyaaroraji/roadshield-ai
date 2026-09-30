# RoadShield redesign

Mobile-friendly bilingual (English / Hindi) landing-page redesign based on the supplied ZIP.

## Run locally

1. Install Node.js 18 or newer.
2. Run `npm install` in this folder.
3. Run `npm run dev` and open the local address printed by Vite.
4. Run `npm run build` to create a production bundle in `dist`; deploy that folder to Vercel.

## Prototype boundary

The sample case, route, incident, time and review statuses are illustrative. This page does not access a camera, GPS, vehicle, account or live road-safety service. Its case flow is an interactive walkthrough only.

## Source note

The supplied ZIP contained a single landing page and build configuration. It did not contain the multi-page source corresponding to the currently deployed RoadShield site. This redesign updates the supplied landing-page project; updating the deployed multi-page application requires its matching source.
