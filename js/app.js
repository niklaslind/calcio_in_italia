"use strict";

const leagues = {
  "Serie A": { rank: 1, color: "a", url: "https://www.legaseriea.it/" },
  "Serie B": { rank: 2, color: "b", url: "https://www.legab.it/" },
  "Serie C": { rank: 3, color: "c", url: "https://www.lega-pro.com/" },
  "Serie D": { rank: 4, color: "d", url: "https://seried.lnd.it/" },
  "Ligue 1": { rank: 5, color: "a", url: "https://ligue1.com/" }
};

// Historical reference only. Verify 2026/27 membership before adding fixtures.
const teams = [
  { id: "sanremese", name: "Sanremese", city: "Sanremo", league: "Serie D", route: "riviera", why: "A local ground to anchor the coastal stay.", url: "https://www.sanremesecalcio.it/" },
  { id: "nice", name: "OGC Nice", city: "Nice, France", league: "Ligue 1", route: "riviera", why: "A French football option on the arrival leg.", url: "https://www.ogcnice.com/" },
  { id: "monaco", name: "AS Monaco", city: "Monaco", league: "Ligue 1", route: "riviera", why: "Turn the short stop into a match visit.", url: "https://www.asmonaco.com/" },
  { id: "como", name: "Como 1907", city: "Como", league: "Serie A", route: "como", why: "Lakeside football, with a base outside the city.", url: "https://comofootball.com/" },
  { id: "lecco", name: "Calcio Lecco", city: "Lecco", league: "Serie C", route: "como", why: "Local football and an easier start towards Tirano.", url: "https://calciolecco1912.com/" },
  { id: "venezia", name: "Venezia FC", city: "Venice", league: "Serie A", route: "venice", why: "A lagoon outing; verify the matchday stadium.", url: "https://www.veneziafc.it/" },
  { id: "padova", name: "Calcio Padova", city: "Padua", league: "Serie C", route: "venice", why: "Football in a rewarding city away from Venice crowds.", url: "https://www.padovacalcio.it/" },
  { id: "mestre", name: "AC Mestre", city: "Mestre", league: "Serie D", route: "venice", why: "The smaller mainland alternative.", url: "https://www.acmestre1929.it/" },
  { id: "palermo", name: "Palermo FC", city: "Palermo", league: "Serie B", route: "sicily", why: "A western Sicily base with a strong football identity.", url: "https://www.palermofc.com/" },
  { id: "catania", name: "Catania FC", city: "Catania", league: "Serie C", route: "sicily", why: "An eastern base for markets, Etna and football.", url: "https://www.cataniafc.it/" },
  { id: "torino", name: "Torino FC", city: "Turin", league: "Serie A", route: "piedmont", why: "A club woven into the city's history.", url: "https://www.torinofc.it/" },
  { id: "pro-vercelli", name: "Pro Vercelli", city: "Vercelli", league: "Serie C", route: "piedmont", why: "Historic Italian football on a smaller scale.", url: "https://www.fcprovercelli.it/" },
  { id: "bologna", name: "Bologna FC", city: "Bologna", league: "Serie A", route: "emilia", why: "A football weekend with porticoes and good food.", url: "https://www.bolognafc.it/" },
  { id: "modena", name: "Modena FC", city: "Modena", league: "Serie B", route: "emilia", why: "A compact city and an easy rail outing.", url: "https://modenafc.com/" },
  { id: "empoli", name: "Empoli FC", city: "Empoli", league: "Serie A", route: "tuscany", why: "A smaller-city alternative to Florence.", url: "https://empolifc.com/" },
  { id: "pontedera", name: "US Citta di Pontedera", city: "Pontedera", league: "Serie C", route: "tuscany", why: "Local football on the Pisa-Florence rail corridor.", url: "https://www.uspontedera.it/" },
  { id: "napoli", name: "SSC Napoli", city: "Naples", league: "Serie A", route: "naples", why: "The big occasion, subject to ticket availability.", url: "https://sscnapoli.it/" },
  { id: "juve-stabia", name: "Juve Stabia", city: "Castellammare di Stabia", league: "Serie B", route: "naples", why: "A smaller club close to Pompeii and the coast.", url: "https://www.ssjuvestabia.it/" },
  { id: "bari", name: "SSC Bari", city: "Bari", league: "Serie B", route: "puglia", why: "A lively city base and a big stadium experience.", url: "https://www.sscalciobari.it/" },
  { id: "monopoli", name: "SS Monopoli", city: "Monopoli", league: "Serie C", route: "puglia", why: "Local football beside an atmospheric old harbour.", url: "https://www.monopolicalcio.it/" }
];

const routes = [
  {
    id: "riviera", title: "Nice, Monaco & Sanremo", kind: "Your shortlist", nights: "5 nights", season: "Best in October", pace: "Easy coast & cycling",
    intro: "The coastal option: a short Monaco stop, a Sanremo base, and a small Italian ground rather than a stadium pilgrimage.",
    path: "Stockholm > Nice > Monaco > Sanremo > Nice > Stockholm",
    stay: "Stay in Sanremo near the centre and coastal cycle path. Allow a Nice airport night if the return flight is early.",
    football: "Prioritise a Sanremese home game. Nice or Monaco are alternatives on the French leg, not Italian-league fixtures. October-December 2026 opponents and dates remain unverified here.",
    travel: ["Search Stockholm-Nice return flights for the actual dates; nonstop operation is not assumed.", "Use TER from Nice to Monaco-Monte-Carlo for a short stop, then continue to Ventimiglia. Change to an Italian train for Sanremo; check both operators' timetables.", "Return Sanremo-Ventimiglia-Nice on the same route. Leave generous airport-transfer margin."],
    sights: "Ride a manageable out-and-back on the Riviera dei Fiori cycle path, wander La Pigna, and choose a short coastal or hillside walk. In Monaco, the old town makes a compact stop.",
    caution: "Coastal storms can disrupt outdoor plans. Do not fit a late match and an early Nice departure into the same night.",
    links: [["French Riviera trains", "https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur"], ["Italian trains", "https://www.trenitalia.com/en.html"], ["Monaco sightseeing", "https://www.visitmonaco.com/en"], ["Liguria tourism", "https://www.italia.it/en/liguria"]]
  },
  {
    id: "como", title: "Lake Como & the Alpine way home", kind: "Your shortlist", nights: "6 nights", season: "October for walks", pace: "Lake paths & scenic rail",
    intro: "Fly into Milan, sleep outside Como, and make the return journey through Switzerland part of the holiday.",
    path: "Stockholm > Milan > Lecco > Tirano > Chur > Zurich > Stockholm",
    stay: "Base in Lecco, not Como city: a lakeside town with rail access and its own club. Use one final night in Chur or Zurich rather than racing straight to a flight.",
    football: "Check Lecco first for a local match, with Como as an alternative. Travel to Como needs its own connection check. No October-December 2026 match date is verified here.",
    travel: ["Search Stockholm-Milan outbound and Zurich-Stockholm inbound as a multi-city trip. Check which Milan airport the fare uses.", "Travel via Milan to Lecco. For the scenic return, check Lecco-Tirano, then the Bernina line through Pontresina/St Moritz and the Albula route to Chur.", "Continue to Zurich with SBB. Allow a full scenic travel day and an overnight; panoramic trains and regional trains have different reservation rules."],
    sights: "Choose a short, low-level section of the Sentiero del Viandante in good conditions, with a lakefront stroll as the easy option. Add Chur's old town on the way home.",
    caution: "Mountain walking is weather-dependent. Snow, ice and short daylight make high trails unsuitable as a fixed November/December plan. Check rail works and winter ferry schedules.",
    links: [["Lombardy trains", "https://www.trenord.it/en/"], ["Bernina & Albula railway", "https://www.rhb.ch/en"], ["Swiss timetable", "https://www.sbb.ch/en"], ["Zurich flights", "https://www.swiss.com/"], ["Lake region tourism", "https://www.italia.it/en/lombardy"]]
  },
  {
    id: "venice", title: "Venice, from the mainland", kind: "Your shortlist", nights: "4-5 nights", season: "October or November", pace: "Art, canals & local clubs",
    intro: "Keep Venice as a day out, not the hotel base. Padua offers its own football, good evenings and a calmer place to stay.",
    path: "Stockholm > Venice airport > Padua > Venice/Mestre > Stockholm",
    stay: "Choose Padua near the centre and station. Mestre is the practical alternative if shorter Venice and airport transfers matter more.",
    football: "Shortlist Padova, AC Mestre and Venezia: three different scales of football. Their historical reference divisions are not current-season confirmations. All October-December 2026 dates need checking.",
    travel: ["Search Stockholm-Venice return flights; distinguish Marco Polo from Treviso airport and price the transfer accordingly.", "Use the airport's published transfer options to the rail network. Trains connect Padua, Venezia Mestre and Venezia Santa Lucia.", "Check the stadium and the last train or waterbus after the chosen match. Return via the same airport to Stockholm."],
    sights: "Book the Scrovegni Chapel in Padua, explore its market squares, then spend a day walking Venice's quieter neighbourhoods. Treviso makes another relaxed outing.",
    caution: "Expect damp weather, fog and possible high-water disruption. Check Venice's visitor access rules for your dates and do not assume a late waterbus connection.",
    links: [["Rail timetable", "https://www.trenitalia.com/en.html"], ["Venice airport transfers", "https://www.veneziaairport.it/en/"], ["Venice transport & visits", "https://www.veneziaunica.it/en"], ["Veneto tourism", "https://www.italia.it/en/veneto"]]
  },
  {
    id: "sicily", title: "Sicily, a gentler December", kind: "Your shortlist", nights: "5-6 nights", season: "December candidate", pace: "Markets & winter sun, perhaps",
    intro: "The strongest southern alternative to a cold northern trip. Pick one side of the island instead of spending the holiday in transit.",
    path: "Stockholm > Palermo OR Catania > local outings > Stockholm",
    stay: "Choose Palermo for the western version, or Catania for the eastern one. Stay centrally with restaurants and transport within walking distance.",
    football: "Use Palermo as the western anchor or Catania as the eastern one. For a smaller outing, investigate Trapani in the west or Siracusa/Acireale in the east with the leagues; their current status and dates are not verified. No 2026 match is confirmed in this planner.",
    travel: ["Search return flights from Stockholm to Palermo or Catania; a connection may be needed, especially in winter.", "For Palermo, check trains for a Cefalu outing. For Catania, check rail or bus options to Siracusa. Use date-specific timetables rather than map distances.", "Return from your arrival airport. Avoid a cross-island transfer just to chase a second match on a short trip."],
    sights: "West: Palermo's markets, Monreale and a Cefalu seafront walk. East: Ortigia in Siracusa, Catania's markets and a guided lower-slope Etna outing if conditions permit.",
    caution: "December is often milder than northern Italy, not reliably warm or dry. Etna can have winter conditions; keep a city-based alternative and avoid promising beach days.",
    links: [["Sicily sightseeing", "https://www.visitsicily.info/en/"], ["Train timetables", "https://www.trenitalia.com/en.html"], ["Serie C schedules", "https://www.lega-pro.com/"], ["Serie D schedules", "https://seried.lnd.it/"]]
  },
  {
    id: "piedmont", title: "Turin & the old game in Vercelli", kind: "Another idea", nights: "4-5 nights", season: "November or December", pace: "Cafes, museums & football history",
    intro: "A proper city break with an easy smaller-town football detour. A good choice when outdoor weather is less important.",
    path: "Stockholm > Turin or Milan > Turin > Vercelli > Stockholm",
    stay: "Stay in central Turin near a useful tram or metro connection. Visit Vercelli without changing hotels.",
    football: "Torino is the city anchor; Pro Vercelli brings historic football at a smaller ground. Choose whichever verified home fixture fits best. October-December 2026 dates are still unverified here.",
    travel: ["Search Stockholm-Turin return options, then compare Milan airports including the extra transfer.", "Check Turin-Vercelli regional trains for a day trip and the last service after the match.", "Return via the arrival airport; do not assume a Milan airport is a quick transfer from Turin."],
    sights: "Visit the Egyptian Museum, linger in Turin's historic cafes and walk the riverside. In Vercelli, leave time for the Basilica di Sant'Andrea.",
    caution: "Cold, fog and early darkness favour museums over mountain excursions. Verify stadium transport separately from intercity rail.",
    links: [["Regional & fast trains", "https://www.trenitalia.com/en.html"], ["Turin visitor information", "https://www.turismotorino.org/en"], ["Piedmont tourism", "https://www.italia.it/en/piedmont"]]
  },
  {
    id: "emilia", title: "Bologna & the Emilia food towns", kind: "Another idea", nights: "4-5 nights", season: "All three months", pace: "The easy rail-and-food option",
    intro: "Perhaps the simplest compromise: a sociable base, excellent food, and several football towns along the railway.",
    path: "Stockholm > Bologna > Modena > Bologna > Stockholm",
    stay: "Base in Bologna between the station and historic centre. Keep Modena as an outing rather than moving four people's luggage.",
    football: "Check Bologna and Modena home schedules first. Reggiana or Carpi are further local candidates to research if the dates do not fit. No October-December 2026 kickoff has been verified here.",
    travel: ["Search Stockholm-Bologna return flights for the chosen dates; compare direct and connecting options.", "Check Bologna-Modena regional trains, with Reggio Emilia as an optional extension only if a match justifies it.", "Use the published Bologna airport connection and allow time for the return flight to Stockholm."],
    sights: "Walk Bologna's porticoes, book a long lunch, then explore Modena's cathedral and market. Add a food-producer visit only after confirming opening hours and transport.",
    caution: "Late autumn can be foggy and wet. Station-to-stadium transfers and the last return train matter more than the short distance between towns.",
    links: [["Train timetables", "https://www.trenitalia.com/en.html"], ["Bologna sightseeing", "https://www.bolognawelcome.com/en"], ["Regional tourism", "https://www.italia.it/en/emilia-romagna"]]
  },
  {
    id: "tuscany", title: "Lucca, Pisa & a local Tuscan match", kind: "Another idea", nights: "4-5 nights", season: "October preferred", pace: "City walls & easy walks",
    intro: "A slower Tuscan trip, using a small football town instead of building everything around Florence.",
    path: "Stockholm > Pisa > Lucca/Pisa > Pontedera/Empoli > Stockholm",
    stay: "Choose Lucca for its evenings and walls, or Pisa for simpler rail and airport connections. No car is needed for the main city itinerary.",
    football: "Pontedera is the local-club target, with Empoli as another smaller-city option. Verify the 2026/27 division, match venue and October-December home dates before fixing the base.",
    travel: ["Investigate Stockholm-Pisa return flights; Florence is an alternative with different transfers.", "Use regional trains for Pisa-Lucca and the Pisa-Pontedera-Empoli corridor. Check connections if returning to Lucca after an evening game.", "Return to the chosen airport for Stockholm; do not treat Pisa and Florence airports as interchangeable."],
    sights: "Walk or cycle Lucca's walls, visit Pisa beyond the tower, and take a day in Florence if the match leaves time. Keep any countryside walk short and weather-dependent.",
    caution: "November and December are better for towns than a fixed countryside itinerary. Rural buses and attractions can have limited winter service.",
    links: [["Tuscan rail journeys", "https://www.trenitalia.com/en.html"], ["Official Tuscany guide", "https://www.visittuscany.com/en/"], ["Pisa airport", "https://www.pisa-airport.com/en/"]]
  },
  {
    id: "naples", title: "Naples & football beneath Vesuvius", kind: "Another idea", nights: "5 nights", season: "October or November", pace: "History, street food & local passion",
    intro: "Make Naples the base, Pompeii the day out and a smaller Campanian club a genuine first choice.",
    path: "Stockholm > Naples > Pompeii/Castellammare > Naples > Stockholm",
    stay: "Stay in Naples with good public-transport access. Avoid changing hotels just to add a coastal night unless the match timing requires it.",
    football: "Check Juve Stabia in Castellammare di Stabia, with Napoli as the larger occasion. The October-December 2026 games and current divisions need official confirmation.",
    travel: ["Search Stockholm-Naples return flights, including connections if needed.", "Check EAV services for Pompeii and Castellammare; distinguish the station names and the service used for the stadium.", "Return via Naples airport. If the match ends after local trains, arrange a reliable transfer or stay near the ground."],
    sights: "Visit Pompeii, Naples' Archaeological Museum and the historic centre. Add a Sorrento day trip in suitable weather rather than depending on an island ferry.",
    caution: "Winter ferry patterns differ from summer. Busy local trains and late match finishes need extra margin; a Vesuvius visit depends on access and weather.",
    links: [["EAV local trains", "https://www.eavsrl.it/"], ["National trains", "https://www.trenitalia.com/en.html"], ["Campania sightseeing", "https://www.italia.it/en/campania"], ["Pompeii visits", "https://pompeiisites.org/en/"]]
  },
  {
    id: "puglia", title: "Bari & Monopoli by the sea", kind: "Another idea", nights: "5-6 nights", season: "October; winter for towns", pace: "Harbours, food & small-ground football",
    intro: "A southern rail-based trip with an appealing local match option and no need to promise beach weather.",
    path: "Stockholm > Bari > Monopoli > Bari > Stockholm",
    stay: "Base in Bari for transport, or Monopoli for quieter evenings if the match and airport timings work. Lecce is an optional longer outing.",
    football: "Monopoli is the smaller-ground target; Bari offers a contrasting big-stadium experience. Verify 2026/27 membership and October-December home fixtures before choosing dates.",
    travel: ["Search Stockholm-Bari return flights; Brindisi is an alternative only after checking its onward transfers.", "Use the Bari-Monopoli coastal rail corridor. Add Lecce only with a timetable that leaves a relaxed day rather than a rushed circuit.", "Return to the arrival airport for Stockholm. Check Sunday and late-evening local connections."],
    sights: "Explore Bari Vecchia, Monopoli's old harbour and Polignano a Mare. An inland trip to Alberobello needs a separate bus, train or car plan.",
    caution: "Coastal wind and rain can change the mood in winter. Some seaside businesses close seasonally; choose a year-round town base.",
    links: [["Coastal trains", "https://www.trenitalia.com/en.html"], ["Puglia tourism", "https://www.viaggiareinpuglia.it/"], ["Bari airport rail", "https://www.ferrovienordbarese.it/"]]
  }
];

// Add only sourced 2026 fixtures: homeId, awayId (null if not shortlisted),
// home, away, date (YYYY-MM-DD), time (HH:MM or null), venue, league, source.
// An empty list means not researched successfully, never "no games scheduled".
const fixtures = [];
const monthNames = { "10": "October", "11": "November", "12": "December" };
let leagueDirection = 1;

function renderTeams() {
  const route = document.getElementById("route-filter").value;
  const league = document.getElementById("league-filter").value;
  const query = document.getElementById("team-search").value.trim().toLocaleLowerCase("en");
  const visible = teams.filter(team => (route === "all" || team.route === route) &&
    (league === "all" || team.league === league) &&
    `${team.name} ${team.city}`.toLocaleLowerCase("en").includes(query));
  visible.sort((a, b) => leagueDirection * (leagues[a.league].rank - leagues[b.league].rank) || a.name.localeCompare(b.name, "en"));
  document.getElementById("team-count").textContent = `${visible.length} of ${teams.length} teams`;
  document.getElementById("teams-body").innerHTML = visible.map(team => `<tr>
    <td><a href="${team.url}"><strong>${team.name}</strong></a><small>Official club site</small></td>
    <td>${team.city}</td><td><span class="league league-${leagues[team.league].color}">${team.league}</span><small>2024/25 reference only</small></td>
    <td>${team.why}</td><td><a href="#route-${team.route}">${routes.find(route => route.id === team.route).title}</a></td>
  </tr>`).join("") || '<tr><td colspan="5" class="empty-state">No teams match these filters. Clear the search or choose another league or route.</td></tr>';
}

function updateCalendarTeams() {
  const route = document.getElementById("route-filter").value;
  const select = document.getElementById("calendar-team");
  const previous = select.value;
  const available = teams.filter(team => route === "all" || team.route === route);
  select.innerHTML = '<option value="all">All teams on this route</option>' + available.map(team => `<option value="${team.id}">${team.name}</option>`).join("");
  select.value = available.some(team => team.id === previous) ? previous : "all";
}

function renderCalendar() {
  const route = document.getElementById("route-filter").value;
  const month = document.getElementById("month-filter").value;
  const teamId = document.getElementById("calendar-team").value;
  const available = teams.filter(team => (route === "all" || team.route === route) && (teamId === "all" || team.id === teamId));
  const ids = new Set(available.map(team => team.id));
  const period = month === "all" ? "October-December 2026" : `${monthNames[month]} 2026`;
  const visible = fixtures.filter(game => game.date >= "2026-10-01" && game.date <= "2026-12-31" &&
    (month === "all" || game.date.slice(5, 7) === month) && (ids.has(game.homeId) || ids.has(game.awayId)))
    .sort((a, b) => a.date.localeCompare(b.date) || (a.time || "").localeCompare(b.time || ""));
  document.getElementById("fixture-count").textContent = `${visible.length} verified fixtures listed for ${period}. This is not a complete schedule.`;
  document.getElementById("fixtures-body").innerHTML = visible.map(game => `<tr>
    <td><time datetime="${game.date}">${new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${game.date}T12:00:00Z`))}</time><small>${game.time || "Kickoff to be confirmed"}</small></td>
    <td>${game.home} vs ${game.away}</td><td>${game.venue}</td><td>${game.league}</td><td><a href="${game.source}">Official fixture</a></td>
  </tr>`).join("") || '<tr><td colspan="5" class="empty-state"><strong>No verified fixtures added for this selection yet.</strong>Opponents, dates, venues and current leagues still need checking. This does not mean there are no matches. Use the official sources below.</td></tr>';
  document.getElementById("checklist-note").textContent = `Check ${period} in each club's fixtures or news section. These are source links, not scheduled games. League links refer to the 2024/25 division; confirm 2026/27 membership first. Source contents were not accessible during research.`;
  document.getElementById("fixture-sources").innerHTML = available.map(team => `<div class="source-item"><strong>${team.name}</strong><p>${team.city} / ${team.league} in 2024/25</p><a href="${team.url}" aria-label="${team.name}: club fixtures and tickets">Club fixtures & tickets</a><a href="${leagues[team.league].url}" aria-label="${team.league}: league source">League source</a></div>`).join("");
}

function renderRoutes() {
  document.getElementById("routes-grid").innerHTML = routes.map((route, index) => `<article id="route-${route.id}" class="route-card">
    <div class="route-top"><div class="route-kicker"><span>ROUTE ${String(index + 1).padStart(2, "0")}</span><span>${route.kind}</span></div>
    <h3>${route.title}</h3><p>${route.intro}</p><div class="route-path">${route.path.replaceAll(">", "&rarr;")}</div>
    <div class="route-meta"><span class="badge">${route.nights}</span><span class="badge">${route.season}</span></div></div>
    <details${index === 0 ? " open" : ""}><summary>Explore route ${index + 1}: travel, football & sights</summary><div class="route-detail">
      <h4>Base & pace</h4><p>${route.stay} ${route.pace}.</p>
      <h4>Football games & dates</h4><p>${route.football}</p><a class="match-link" href="#calendar" data-route="${route.id}">Check this route's fixture sources &uarr;</a>
      <h4>Flights & train plan</h4><ul>${route.travel.map(leg => `<li>${leg}</li>`).join("")}</ul>
      <h4>Between matches</h4><p>${route.sights}</p><p class="caution">${route.caution}</p>
      <h4>Timetables & visitor information</h4><div class="resource-links">${route.links.map(([name, url]) => `<a href="${url}">${name}</a>`).join("")}</div>
    </div></details></article>`).join("");
}

document.getElementById("route-filter").insertAdjacentHTML("beforeend", routes.map(route => `<option value="${route.id}">${route.title}</option>`).join(""));
document.getElementById("route-filter").addEventListener("change", () => {
  renderTeams();
  updateCalendarTeams();
  renderCalendar();
});
document.getElementById("team-search").addEventListener("input", renderTeams);
document.getElementById("league-filter").addEventListener("change", renderTeams);
document.getElementById("league-sort").addEventListener("click", () => {
  leagueDirection *= -1;
  document.getElementById("league-heading").setAttribute("aria-sort", leagueDirection === 1 ? "ascending" : "descending");
  document.getElementById("league-sort").innerHTML = `Reference league ${leagueDirection === 1 ? "&uarr;" : "&darr;"}`;
  renderTeams();
});
document.getElementById("month-filter").addEventListener("change", renderCalendar);
document.getElementById("calendar-team").addEventListener("change", renderCalendar);
document.getElementById("routes-grid").addEventListener("click", event => {
  const link = event.target.closest("a[data-route]");
  if (!link) return;
  document.getElementById("route-filter").value = link.dataset.route;
  document.getElementById("team-search").value = "";
  document.getElementById("league-filter").value = "all";
  document.getElementById("calendar-team").value = "all";
  renderTeams();
  updateCalendarTeams();
  renderCalendar();
});

renderTeams();
updateCalendarTeams();
renderCalendar();
renderRoutes();
