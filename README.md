# Renewal Retreat

Responsive website built with Vite and vanilla JavaScript. Run `npm install`, then `npm run dev`. Build with `npm run build`; deploy `dist/` to a static host with SPA fallback (all routes rewrite to index.html).

## Editing business content

`src/data.js` is the single source for business information, services, all prices, imagery and gallery entries. Add the real phone, WhatsApp (international digits), email, address, directions URL, opening hours and social URLs before launch. No reference-business contact information or fabricated reviews are used.

Set `business.bookingEndpoint` to a real HTTPS JSON POST endpoint to enable request submission. It receives the named form fields; implement server-side validation, spam protection and delivery/storage before enabling. A 2xx response means the request was received, not that the appointment is confirmed. Without an endpoint, appointment requests open WhatsApp at the configured business number with the booking details prefilled. The visitor must press Send in WhatsApp. If neither a number nor an endpoint is configured, the form prepares a downloadable draft. Personal data is not saved in browser storage. WhatsApp booking is enabled when the number is configured.

The simplified lotus wordmark is original SVG. No supplied logo file was present in the attachment. Replace it when available.

Photography uses Unsplash-hosted stock images, licensed under https://unsplash.com/license. Gallery clearly identifies stock imagery as inspiration; replace with approved photography of the actual business, including diverse clients, before launch. Image URLs and their source IDs are centralized in `src/data.js`. No stock image depicts a claimed real customer or a claimed real business location.

Routes: `/`, `/about`, `/services`, `/prices`, `/gallery`, `/booking`, `/contact`. Page title and description update with navigation. For search-focused deployment consider prerendering these routes and adding the final domain to sitemap and canonical tags.

`npm test` validates key price data and service relations. `npm run build` validates the production bundle.
# reneuwal-retreat
