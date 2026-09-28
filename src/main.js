import "./style.css";
import {
  business as b,
  services,
  pricing,
  images,
  gallery,
  optionsFor,
  priceLabel,
} from "./data.js";
const app = document.querySelector("#app");
const arrow = '<span aria-hidden="true">↗</span>';
const lotus = `<svg viewBox="0 0 64 50" fill="none" aria-hidden="true"><path d="M32 40C16 30 22 12 32 5c10 7 16 25 0 35Z"/><path d="M32 40C17 41 8 29 8 17c13 0 23 10 24 23Zm0 0c15 1 24-11 24-23-13 0-23 10-24 23Z"/><path d="M32 40C19 47 6 39 3 28m29 12c13 7 26-1 29-12M19 47h26"/></svg>`;
const logo = () => `
  <a class="logo" href="/" aria-label="Renewal Retreat home">
    <img
      src="/logo.png"
      alt="Renewal Retreat Relaxation Lounge"
      class="logo-image"
    />
  </a>
`;
const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/prices", "Price List"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact"],
];
const button = (label, path = "/booking", cls = "button") =>
  `<a class="${cls}" href="${path}">${label}${arrow}</a>`;
function header() {
  return `<header>${logo()}<nav aria-label="Main navigation">${links.map(([url, name]) => `<a href="${url}" ${location.pathname === url ? 'aria-current="page"' : ""}>${name}</a>`).join("")}</nav>${button("Book appointment", "/booking", "button header-book")}<button class="menu" aria-label="Open menu" aria-expanded="false">☰</button></header>`;
}
function footer() {
  return `<footer><div class="footer-top"><div>${logo()}<p class="footer-tag">Relax • Restore • Renew</p><p>A little time for yourself.<br>A whole new sense of wellbeing.</p></div><div><h3>Find your retreat</h3>${[...links, ["/booking", "Booking"]].map(([p, n]) => `<a href="${p}">${n}</a>`).join("")}</div><div><h3>Let’s connect</h3><p>${b.address || "Address to be provided"}</p><p>${b.email || "Email to be provided"}</p><p>${b.phone || "Phone to be provided"}</p><div class="socials">${["instagram", "facebook"].map((s) => (b.socials[s] ? `<a href="${b.socials[s]}" target="_blank" rel="noopener">${s}</a>` : `<span>${s}</span>`)).join("")}${b.whatsapp ? `<a href="https://wa.me/${b.whatsapp.replace(/\D/g, "")}" target="_blank" rel="noopener">WhatsApp ↗</a>` : "<span>WhatsApp · Coming soon</span>"}</div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Renewal Retreat Relaxation Lounge. All rights reserved.</span><span>Made for moments of renewal.</span></div></footer>`;
}
function card(s) {
  const opts = optionsFor(s.id);
  const from = opts.length ? Math.min(...opts.map((p) => p.price)) : null;
  return `<article class="service-card"><a href="/booking?treatment=${s.id}" class="card-image"><img src="${s.image}" loading="lazy" alt="${s.name} spa inspiration"><span>${s.category}</span></a><div class="card-content"><h3>${s.name}</h3><p>${s.description}</p><div class="card-bottom"><span>${from !== null ? `<small>FROM</small> $${from}` : "A moment for you"}</span><a href="/booking?treatment=${s.id}" aria-label="Book ${s.name}">Book treatment ${arrow}</a></div></div></article>`;
}
function experience() {
  return `<section class="experience" style="--photo:url('${images.spa}')"><div><span class="eyebrow">TAKE TIME FOR YOU</span><h2>Relax and rejuvenate<br>your mind and body.</h2><p>Whether you need to release everyday tension, enjoy a moment of quiet or treat yourself to a complete wellness experience, your time at Renewal Retreat is designed around one thing — you.</p>${button("Book your retreat")}</div><span class="experience-note">A slower pace. A softer moment.</span></section>`;
}
function home() {
  return `<section class="hero"><img class="hero-img" src="${images.hero}" alt="Professional hot stone massage with flowers and warm lighting" fetchpriority="high"><div class="hero-shade"></div><div class="hero-content"><span class="eyebrow">YOUR WELLBEING. YOUR MOMENT.</span><h1>Renewal Retreat</h1><div class="hero-sub">RELAXATION LOUNGE</div><p class="tagline">Relax <i>•</i> Restore <i>•</i> Renew</p><p class="hero-copy">Take time to relax, restore your energy and<br class="desktop"> rejuvenate your mind and body.</p><div class="hero-buttons">${button("Book an appointment")}${button("Explore treatments", "/services", "button button-outline")}</div></div><div class="hero-bottom"><span>SPACE TO BREATHE. TIME TO JUST BE.</span><a href="#welcome">SCROLL TO UNWIND <span>↓</span></a></div><span class="hero-side">MASSAGE · BEAUTY · WELLNESS</span></section><div class="values-strip"><span>${lotus}Thoughtfully tailored treatments</span><i></i><span>✧ &nbsp; A warm, peaceful sanctuary</span><i></i><span>♡ &nbsp; Care that puts you first</span></div><section id="welcome" class="welcome section"><div class="welcome-visual"><img src="${images.massage}" alt="Professional massage in a peaceful spa" loading="lazy"><div class="image-caption">A quiet place.<br><em>A renewed you.</em></div><span class="image-index">01 / THE ART OF SLOWING DOWN</span></div><div class="welcome-copy"><span class="eyebrow">WELCOME TO RENEWAL RETREAT</span><h2>Your retreat from<br>the everyday.</h2><span class="short-line"></span><p>Step away from the noise and discover a space created for rest, renewal and self-care.</p><p>Renewal Retreat Relaxation Lounge brings together massage, beauty and wellness treatments in a warm and peaceful environment designed to help you slow down, release tension and feel renewed.</p><a class="text-link" href="/about">Discover our story ${arrow}</a></div></section><section class="featured section"><div class="section-heading"><div><span class="eyebrow">RESTORATIVE RITUALS</span><h2>A little care. A lasting feeling.</h2></div><a class="text-link" href="/services">Explore all treatments ${arrow}</a></div><div class="service-grid">${services
    .filter((s) => s.featured)
    .map(card)
    .join(
      "",
    )}</div></section>${experience()}<section class="home-gallery section"><div class="section-heading"><div><span class="eyebrow">A GLIMPSE OF THE EXPERIENCE</span><h2>Step into serenity.</h2></div><a href="/gallery" class="text-link">View the gallery ${arrow}</a></div><div class="gallery-preview">${gallery
    .slice(1, 4)
    .map(
      (g) =>
        `<a href="/gallery"><img src="${g.image}" loading="lazy" alt="${g.title}"><span>${g.title} ${arrow}</span></a>`,
    )
    .join(
      "",
    )}</div><p class="image-disclaimer">A mood of renewal · Stock photography shown for inspiration.</p></section><section class="closing"><span class="eyebrow">YOUR MOMENT IS WAITING</span><h2>Make space for yourself.</h2><p>Let the everyday wait. We’ll take care of you.</p>${button("Find your moment")}</section>`;
}
const intro = (eyebrow, title, copy) =>
  `<section class="page-intro"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${copy}</p></section>`;
function about() {
  return `${intro("OUR STORY", "Renew your body.<br>Restore your mind.", "A peaceful space for massage, beauty and the simple pleasure of taking care of yourself.")}<section class="welcome section"><div class="welcome-visual"><img src="${images.spa}" alt="A calm spa treatment setting"><div class="image-caption">Come as you are.<br><em>Leave feeling renewed.</em></div></div><div class="welcome-copy"><span class="eyebrow">A MORE PERSONAL KIND OF CARE</span><h2>Your comfort.<br>At the heart of it all.</h2><p>At Renewal Retreat Relaxation Lounge, we believe that self-care starts with feeling at ease. Our space brings together professional treatments and a warm, unhurried welcome.</p><p>From massage to beauty rituals, every visit is an invitation to slow down. Cleanliness, privacy and personal attention guide the experience, so you can settle in and enjoy your time.</p>${button("Explore our treatments", "/services")}</div></section><section class="principles section">${[
    [
      "01",
      "Space to feel comfortable",
      "A peaceful atmosphere, thoughtful details and room to unwind.",
    ],
    [
      "02",
      "Attention that feels personal",
      "Your preferences matter. Each experience starts with listening.",
    ],
    [
      "03",
      "Care you can feel",
      "Professional service, a clean environment and respect for your privacy.",
    ],
  ]
    .map(
      ([n, h, p]) =>
        `<article><span>${n}</span><h3>${h}</h3><p>${p}</p></article>`,
    )
    .join("")}</section>${experience()}`;
}
function servicesPage() {
  return `${intro("OUR TREATMENTS", "Find your kind of renewal.", "From a moment of quiet to a complete ritual of care, discover an experience made for you.")}<section class="section catalogue"><div class="filters" aria-label="Treatment categories">${["All treatments", "Massage", "Beauty", "Nails", "Wellness"].map((c, i) => `<button data-filter="${c}" class="${i === 0 ? "active" : ""}" aria-pressed="${i === 0}">${c}</button>`).join("")}</div><div class="service-grid all-services">${services.map(card).join("")}</div></section>`;
}
function pricesPage() {
  const cats = [
    "body",
    "couples",
    "four",
    "combo",
    "foot",
    "chair",
    "stone",
    "mani",
    "pedi",
    "wax",
    "quick",
  ];
  return `${intro("THE TREATMENT MENU", "Time well spent.", "Thoughtful treatments. Clear pricing. Choose the experience that feels right for you.")}<section class="section prices"><div class="filters price-filters">${[
    ["massage", "Massage"],
    ["mani", "Manicure"],
    ["pedi", "Pedicure"],
    ["wax", "Waxing"],
  ]
    .map(
      ([v, n], i) =>
        `<button data-price="${v}" class="${i === 0 ? "active" : ""}" aria-pressed="${i === 0}">${n}</button>`,
    )
    .join("")}</div>${cats
    .map(
      (id) =>
        `<div class="price-group" data-category="${id}" ${["mani", "pedi", "wax"].includes(id) ? "hidden" : ""}><div class="price-title"><h2>${services.find((s) => s.id === id).name}</h2>${id === "body" ? "<span>REGULAR / DEEP TISSUE</span>" : id === "couples" ? "<span>COUPLES / FOUR HANDS</span>" : ""}</div>${pricing
          .filter((p) => p.serviceId === id)
          .map(
            (p) =>
              `<article class="price-row"><div><h3>${p.duration ? `${p.duration} minutes` : p.name}</h3>${p.description ? `<p>${p.description}</p>` : ""}</div><div class="price-numbers"><span>${priceLabel(p)}</span>${p.deepTissuePrice ? `<span><small>${p.premiumLabel || "Deep tissue"}</small>$${p.deepTissuePrice}</span>` : ""}</div><a class="text-link" href="/booking?treatment=${id}&option=${p.id}">Book ${arrow}</a></article>`,
          )
          .join("")}</div>`,
    )
    .join(
      "",
    )}<p class="price-note">Prices and treatment availability are subject to change. Please confirm your selected treatment when booking.</p><p class="price-note">Facials, body rituals, aromatherapy and steam therapy: please enquire for pricing and duration.</p></section>`;
}
function galleryPage() {
  return `${intro("THE MOOD OF RENEWAL", "A softer kind of escape.", "Explore the textures, rituals and quiet moments that inspire our retreat.")}<section class="section"><div class="filters">${["All", "Massage", "Spa", "Nails", "Beauty", "Wellness"].map((c, i) => `<button data-gallery="${c}" class="${i === 0 ? "active" : ""}" aria-pressed="${i === 0}">${c}</button>`).join("")}</div><div class="gallery-grid">${gallery.map((g, i) => `<button class="gallery-item" data-gallery-index="${i}" data-category="${g.category}"><img src="${g.image}" alt="${g.title}" loading="lazy"><span>${g.title} ${arrow}</span></button>`).join("")}</div><p class="image-disclaimer">Stock photography for inspiration. Images of our own lounge will be shared here soon.</p></section><dialog id="lightbox"><button class="close-dialog" aria-label="Close photo">×</button><img alt=""><p></p></dialog>`;
}
function booking() {
  return `${intro("BEGIN YOUR RETREAT", "Your time to unwind.", "Tell us what you have in mind. Your appointment is confirmed only after you hear from our team.")}<section class="section booking-layout"><aside><img src="${images.massage}" alt="Relaxing massage experience"><h2>A little time.<br>Just for you.</h2><p>Choose your treatment and preferred time. We’ll help you find your moment of renewal.</p><div class="booking-note">Online appointment requests are not open yet. You can prepare and download your request below.</div></aside><form id="booking-form"><div class="form-grid"><label>Full name<input name="name" autocomplete="name" required placeholder="Your full name" maxlength="100"></label><label>Phone number<input name="phone" autocomplete="tel" type="tel" required placeholder="Include country code"></label><label>WhatsApp number <small>(optional)</small><input name="whatsapp" type="tel" placeholder="If different from your phone"></label><label>Email address<input name="email" autocomplete="email" type="email" required placeholder="you@example.com"></label><label class="full">Select treatment<select name="treatment" required><option value="">Choose your treatment</option>${services.map((s) => `<option value="${s.id}">${s.name}</option>`).join("")}</select></label><label>Treatment option / duration<select name="option" required><option value="">Select a treatment first</option></select></label><label>Number of guests<select name="guests">${[1, 2, 3, 4, 5, 6].map((n) => `<option value="${n}">${n} ${n === 1 ? "guest" : "guests"}</option>`).join("")}</select></label><label>Preferred date<input name="date" type="date" min="${localDate()}" required></label><label>Preferred time<input name="time" type="time" required></label><label class="full">Therapist preference<select name="therapist"><option>No preference</option><option>Female therapist, if available</option><option>Male therapist, if available</option></select></label><label class="full">Additional notes <small>(optional)</small><textarea name="notes" rows="3" maxlength="1500" placeholder="Anything you’d like us to know?"></textarea></label></div><label class="checkbox"><input type="checkbox" required name="consent">I understand that my requested appointment is subject to confirmation.</label><button class="button" type="submit">Request appointment ${arrow}</button><button class="button button-outline whatsapp-book" type="button" ${b.whatsapp ? "" : "disabled"}>Book via WhatsApp ↗</button>${!b.whatsapp ? '<p class="form-help">WhatsApp booking will be available when our contact number is announced.</p>' : ""}<div id="form-status" role="status"></div></form></section>`;
}
function localDate() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function contact() {
  return `${intro("WE’RE HERE FOR YOU", "Let’s make time for renewal.", "We look forward to welcoming you into a warm, peaceful space.")}<section class="section contact-layout"><div><span class="eyebrow">RENEWAL RETREAT</span><h2>Relaxation Lounge</h2><dl>${[
    ["Phone", b.phone],
    ["WhatsApp", b.whatsapp],
    ["Email", b.email],
    ["Address", b.address],
    ["Opening hours", b.hours],
  ]
    .map(
      ([k, v]) => `<div><dt>${k}</dt><dd>${v || "To be provided"}</dd></div>`,
    )
    .join(
      "",
    )}</dl><div class="contact-actions">${b.phone ? button("Call", `tel:${b.phone}`) : '<button class="button" disabled>Call</button>'}${b.whatsapp ? button("WhatsApp", `https://wa.me/${b.whatsapp.replace(/\D/g, "")}`) : '<button class="button" disabled>WhatsApp</button>'}${b.directionsUrl ? button("Get directions", b.directionsUrl) : '<button class="button" disabled>Get directions</button>'}</div><p class="form-help">Call or WhatsApp us to plan your visit. Address and opening hours will be announced soon.</p></div><img src="${images.hero}" alt="Professional hot stone massage treatment"></section>`;
}
const routes = {
  "/": home,
  "/about": about,
  "/services": servicesPage,
  "/prices": pricesPage,
  "/gallery": galleryPage,
  "/booking": booking,
  "/contact": contact,
};
function render() {
  const path = location.pathname;
  app.innerHTML =
    header() +
    `<main id="main">${(routes[path] || (() => intro("PAGE NOT FOUND", "A moment off the path.", `Let’s return to <a href="/">your retreat</a>.`)))()}</main>` +
    footer();
  document.title =
    path === "/"
      ? "Renewal Retreat Relaxation Lounge | Massage, Spa & Wellness"
      : `${{ "/prices": "Price List", "/booking": "Booking", "/about": "About", "/services": "Services", "/gallery": "Gallery", "/contact": "Contact" }[path] || "Page not found"} | Renewal Retreat Relaxation Lounge`;
  document.querySelector('meta[name="description"]').content =
    path === "/"
      ? "Relax, restore and renew at Renewal Retreat Relaxation Lounge. Discover massage therapy, spa, beauty and wellness treatments in a warm and peaceful environment."
      : `Discover ${path.slice(1)} at Renewal Retreat Relaxation Lounge. Massage, spa, beauty and wellness in a warm and peaceful environment.`;
  bind();
}
function activeButton(el) {
  el.parentElement.querySelectorAll("button").forEach((x) => {
    x.classList.toggle("active", x === el);
    x.setAttribute("aria-pressed", String(x === el));
  });
}
function bind() {
  document.querySelector(".menu").onclick = (e) => {
    const open = e.currentTarget.getAttribute("aria-expanded") !== "true";
    e.currentTarget.setAttribute("aria-expanded", open);
    e.currentTarget.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu",
    );
    e.currentTarget.textContent = open ? "×" : "☰";
    document.querySelector("header").classList.toggle("menu-open", open);
  };
  document.querySelectorAll("[data-filter]").forEach(
    (el) =>
      (el.onclick = () => {
        activeButton(el);
        document.querySelector(".all-services").innerHTML = services
          .filter(
            (s) =>
              el.dataset.filter === "All treatments" ||
              s.category === el.dataset.filter,
          )
          .map(card)
          .join("");
      }),
  );
  document.querySelectorAll("[data-price]").forEach(
    (el) =>
      (el.onclick = () => {
        activeButton(el);
        document
          .querySelectorAll(".price-group")
          .forEach(
            (g) =>
              (g.hidden =
                el.dataset.price === "massage"
                  ? ["mani", "pedi", "wax"].includes(g.dataset.category)
                  : g.dataset.category !== el.dataset.price),
          );
      }),
  );
  document.querySelectorAll("[data-gallery]").forEach(
    (el) =>
      (el.onclick = () => {
        activeButton(el);
        document
          .querySelectorAll(".gallery-item")
          .forEach(
            (g) =>
              (g.hidden =
                el.dataset.gallery !== "All" &&
                g.dataset.category !== el.dataset.gallery),
          );
      }),
  );
  const dialog = document.querySelector("#lightbox");
  if (dialog) {
    document.querySelectorAll("[data-gallery-index]").forEach(
      (el) =>
        (el.onclick = () => {
          const g = gallery[el.dataset.galleryIndex];
          dialog.querySelector("img").src = g.image;
          dialog.querySelector("img").alt = g.title;
          dialog.querySelector("p").textContent = g.title;
          dialog.showModal();
        }),
    );
    dialog.querySelector("button").onclick = () => dialog.close();
    dialog.onclick = (e) => {
      if (e.target === dialog) dialog.close();
    };
  }
  const form = document.querySelector("#booking-form");
  if (form) {
    const select = form.elements.treatment;
    const update = () => {
      const opts = optionsFor(select.value);
      form.elements.option.innerHTML = opts.length
        ? opts
            .map(
              (p) =>
                `<option value="${p.id}">${p.duration ? `${p.duration} minutes` : p.name} — ${priceLabel(p)}</option>`,
            )
            .join("")
        : '<option value="enquire">Confirm duration and price with the team</option>';
      if (select.value === "couples") form.elements.guests.value = "2";
    };
    select.onchange = update;
    const query = new URLSearchParams(location.search);
    if (services.some((s) => s.id === query.get("treatment"))) {
      select.value = query.get("treatment");
      update();
      if (
        [...form.elements.option.options].some(
          (o) => o.value === query.get("option"),
        )
      )
        form.elements.option.value = query.get("option");
    }
    const getMessage = () => {
      const v = Object.fromEntries(new FormData(form));
      return `Hello Renewal Retreat. I would like to request an appointment for ${services.find((s) => s.id === v.treatment).name} on ${v.date} at ${v.time}. My name is ${v.name}.\nOption: ${form.elements.option.selectedOptions[0].textContent}\nGuests: ${v.guests}\nPhone: ${v.phone}\nWhatsApp: ${v.whatsapp || v.phone}\nEmail: ${v.email}\nTherapist: ${v.therapist}\nNotes: ${v.notes || "None"}\nI understand this request is subject to confirmation.`;
    };
    const valid = () => {
      form.elements.date.setCustomValidity(
        form.elements.date.value < localDate()
          ? "Please choose today or a future date."
          : "",
      );
      return form.reportValidity();
    };
    form.onsubmit = async (e) => {
      e.preventDefault();
      if (!valid()) return;
      const status = document.querySelector("#form-status");
      if (b.bookingEndpoint) {
        const submit = form.querySelector('[type="submit"]');
        submit.disabled = true;
        try {
          const r = await fetch(b.bookingEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(form))),
          });
          if (!r.ok) throw Error();
          status.textContent =
            "Your request has been sent. Please wait for the team to confirm your appointment.";
        } catch {
          status.textContent =
            "Your request could not be sent. Please try again later.";
        } finally {
          submit.disabled = false;
        }
      } else if (b.whatsapp) {
        openWhatsApp();
      } else {
        status.innerHTML =
          '<h3>Your request is ready.</h3><p>It has not been sent. Booking will open when our contact details are available. Download a copy for your records.</p><button type="button" class="text-link" id="download-request">Download request ↓</button>';
        document.querySelector("#download-request").onclick = () => {
          const url = URL.createObjectURL(
            new Blob([getMessage()], { type: "text/plain" }),
          );
          const a = document.createElement("a");
          a.href = url;
          a.download = "renewal-retreat-appointment-request.txt";
          a.click();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        };
      }
      status.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    const openWhatsApp = () => {
      const url = `https://wa.me/${b.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(getMessage())}`;
      const status = document.querySelector("#form-status");
      status.replaceChildren();
      const note = document.createElement("p");
      note.textContent =
        "Continue in WhatsApp and press Send to deliver your request. Your appointment is subject to confirmation.";
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";
      link.className = "text-link";
      link.textContent = "Continue to WhatsApp ↗";
      status.append(note, link);
      window.open(url, "_blank", "noopener");
    };
    form.querySelector(".whatsapp-book").onclick = () => {
      if (valid() && b.whatsapp) openWhatsApp();
    };
    if (b.bookingEndpoint || b.whatsapp)
      document.querySelector(".booking-note").textContent =
        "Send your appointment request via WhatsApp. Our team will confirm your treatment and time, subject to availability.";
  }
}
document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (
    !a ||
    e.ctrlKey ||
    e.metaKey ||
    e.shiftKey ||
    a.target ||
    a.hasAttribute("download")
  )
    return;
  const url = new URL(a.href, location.href);
  if (url.origin === location.origin && !url.hash) {
    e.preventDefault();
    history.pushState({}, "", url.pathname + url.search);
    render();
    window.scrollTo(0, 0);
    document.querySelector("main").setAttribute("tabindex", "-1");
    document.querySelector("main").focus({ preventScroll: true });
  }
});
window.addEventListener("popstate", () => {
  render();
  window.scrollTo(0, 0);
});
render();
