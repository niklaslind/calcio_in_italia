// Calcio in Italia - Data and Interactive Logic

const clubsData = [
  {
    id: "inter",
    name: "Inter Milano",
    shortName: "INT",
    city: "Milano (Lombardia)",
    stadium: "San Siro (Giuseppe Meazza)",
    capacity: "75,923",
    founded: 1908,
    scudetti: 20,
    stars: "★★",
    uclTitles: 3,
    coppaItalia: 9,
    nickname: "I Nerazzurri / La Beneamata",
    colors: ["#001489", "#000000"],
    accentColor: "#0066cc",
    textColor: "#ffffff",
    pos: 1, pld: 27, won: 20, drw: 4, lst: 3, gf: 63, ga: 22, gd: 41, pts: 64,
    form: ["W", "W", "W", "D", "W"],
    legends: "Giuseppe Meazza, Javier Zanetti, Giacinto Facchetti, Ronaldo"
  },
  {
    id: "juventus",
    name: "Juventus FC",
    shortName: "JUV",
    city: "Torino (Piemonte)",
    stadium: "Allianz Stadium",
    capacity: "41,507",
    founded: 1897,
    scudetti: 36,
    stars: "★★★",
    uclTitles: 2,
    coppaItalia: 15,
    nickname: "La Vecchia Signora / I Bianconeri",
    colors: ["#000000", "#ffffff"],
    accentColor: "#333333",
    textColor: "#ffffff",
    pos: 2, pld: 27, won: 18, drw: 6, lst: 3, gf: 51, ga: 20, gd: 31, pts: 60,
    form: ["W", "W", "D", "W", "W"],
    legends: "Alessandro Del Piero, Michel Platini, Gianluigi Buffon, Gaetano Scirea"
  },
  {
    id: "milan",
    name: "AC Milan",
    shortName: "MIL",
    city: "Milano (Lombardia)",
    stadium: "San Siro (Giuseppe Meazza)",
    capacity: "75,923",
    founded: 1899,
    scudetti: 19,
    stars: "★",
    uclTitles: 7,
    coppaItalia: 5,
    nickname: "I Rossoneri / Il Diavolo",
    colors: ["#dc2626", "#000000"],
    accentColor: "#b91c1c",
    textColor: "#ffffff",
    pos: 3, pld: 27, won: 17, drw: 5, lst: 5, gf: 54, ga: 28, gd: 26, pts: 56,
    form: ["W", "L", "W", "W", "D"],
    legends: "Paolo Maldini, Franco Baresi, Marco van Basten, Gianni Rivera"
  },
  {
    id: "napoli",
    name: "SSC Napoli",
    shortName: "NAP",
    city: "Napoli (Campania)",
    stadium: "Stadio Diego Armando Maradona",
    capacity: "54,726",
    founded: 1926,
    scudetti: 3,
    stars: "",
    uclTitles: 0,
    coppaItalia: 6,
    nickname: "I Partenopei / Gli Azzurri",
    colors: ["#0080ff", "#ffffff"],
    accentColor: "#0284c7",
    textColor: "#ffffff",
    pos: 4, pld: 27, won: 16, drw: 5, lst: 6, gf: 46, ga: 24, gd: 22, pts: 53,
    form: ["W", "W", "L", "W", "W"],
    legends: "Diego Armando Maradona, Careca, Marek Hamšík, Ciro Ferrara"
  },
  {
    id: "atalanta",
    name: "Atalanta BC",
    shortName: "ATA",
    city: "Bergamo (Lombardia)",
    stadium: "Gewiss Stadium",
    capacity: "24,950",
    founded: 1907,
    scudetti: 0,
    stars: "",
    uclTitles: 0,
    coppaItalia: 1,
    nickname: "La Dea / Gli Orobici",
    colors: ["#1e3a8a", "#000000"],
    accentColor: "#2563eb",
    textColor: "#ffffff",
    pos: 5, pld: 27, won: 15, drw: 5, lst: 7, gf: 55, ga: 31, gd: 24, pts: 50,
    form: ["W", "D", "W", "L", "W"],
    legends: "Gian Piero Gasperini (Mister), Papu Gómez, Cristiano Doni"
  },
  {
    id: "roma",
    name: "AS Roma",
    shortName: "ROM",
    city: "Roma (Lazio)",
    stadium: "Stadio Olimpico",
    capacity: "70,634",
    founded: 1927,
    scudetti: 3,
    stars: "",
    uclTitles: 0,
    coppaItalia: 9,
    nickname: "I Giallorossi / La Lupa",
    colors: ["#8b0000", "#ffcc00"],
    accentColor: "#991b1b",
    textColor: "#fbbf24",
    pos: 6, pld: 27, won: 14, drw: 6, lst: 7, gf: 47, ga: 32, gd: 15, pts: 48,
    form: ["W", "W", "D", "W", "L"],
    legends: "Francesco Totti, Daniele De Rossi, Bruno Conti, Falcão"
  },
  {
    id: "lazio",
    name: "SS Lazio",
    shortName: "LAZ",
    city: "Roma (Lazio)",
    stadium: "Stadio Olimpico",
    capacity: "70,634",
    founded: 1900,
    scudetti: 2,
    stars: "",
    uclTitles: 0,
    coppaItalia: 7,
    nickname: "I Biancocelesti / Le Aquile",
    colors: ["#87ceeb", "#ffffff"],
    accentColor: "#38bdf8",
    textColor: "#0f172a",
    pos: 7, pld: 27, won: 13, drw: 5, lst: 9, gf: 43, ga: 35, gd: 8, pts: 44,
    form: ["L", "W", "W", "L", "D"],
    legends: "Giorgio Chinaglia, Alessandro Nesta, Silvio Piola, Ciro Immobile"
  },
  {
    id: "fiorentina",
    name: "ACF Fiorentina",
    shortName: "FIO",
    city: "Firenze (Toscana)",
    stadium: "Stadio Artemio Franchi",
    capacity: "43,147",
    founded: 1926,
    scudetti: 2,
    stars: "",
    uclTitles: 0,
    coppaItalia: 6,
    nickname: "I Viola / I Gigliati",
    colors: ["#4c1d95", "#ffffff"],
    accentColor: "#6d28d9",
    textColor: "#ffffff",
    pos: 8, pld: 27, won: 12, drw: 6, lst: 9, gf: 40, ga: 34, gd: 6, pts: 42,
    form: ["D", "W", "L", "W", "D"],
    legends: "Gabriel Batistuta, Giancarlo Antognoni, Roberto Baggio, Kurt Hamrin"
  },
  {
    id: "bologna",
    name: "Bologna FC 1909",
    shortName: "BOL",
    city: "Bologna (Emilia-Romagna)",
    stadium: "Stadio Renato Dall'Ara",
    capacity: "38,279",
    founded: 1909,
    scudetti: 7,
    stars: "",
    uclTitles: 0,
    coppaItalia: 2,
    nickname: "I Rossoblù / I Felsinei",
    colors: ["#991b1b", "#1e3a8a"],
    accentColor: "#b91c1c",
    textColor: "#ffffff",
    pos: 9, pld: 27, won: 11, drw: 8, lst: 8, gf: 38, ga: 33, gd: 5, pts: 41,
    form: ["W", "D", "D", "W", "L"],
    legends: "Angelo Schiavio, Giacomo Bulgarelli, Giuseppe Signori"
  },
  {
    id: "torino",
    name: "Torino FC",
    shortName: "TOR",
    city: "Torino (Piemonte)",
    stadium: "Stadio Olimpico Grande Torino",
    capacity: "28,177",
    founded: 1906,
    scudetti: 7,
    stars: "",
    uclTitles: 0,
    coppaItalia: 5,
    nickname: "Il Toro / I Granata",
    colors: ["#800000", "#ffffff"],
    accentColor: "#991b1b",
    textColor: "#ffffff",
    pos: 10, pld: 27, won: 9, drw: 10, lst: 8, gf: 32, ga: 31, gd: 1, pts: 37,
    form: ["D", "L", "W", "D", "D"],
    legends: "Il Grande Torino (Valentino Mazzola), Paolino Pulici, Gigi Meroni"
  }
];

const matchesData = [
  {
    title: "Derby della Madonnina",
    home: "AC Milan",
    away: "Inter Milano",
    homeShort: "MIL",
    awayShort: "INT",
    homeBg: "#dc2626",
    awayBg: "#001489",
    stadium: "San Siro, Milano",
    date: "Sabato, 18:00 CET",
    history: "Over 240 official encounters dating back to 1909. Milan's shared cathedral of calcio."
  },
  {
    title: "Derby d'Italia",
    home: "Juventus FC",
    away: "Inter Milano",
    homeShort: "JUV",
    awayShort: "INT",
    homeBg: "#111827",
    awayBg: "#001489",
    stadium: "Allianz Stadium, Torino",
    date: "Domenica, 20:45 CET",
    history: "Coined by Gianni Brera in 1967. The fiercest interstate rivalry in Italian football."
  },
  {
    title: "Derby della Capitale",
    home: "AS Roma",
    away: "SS Lazio",
    homeShort: "ROM",
    awayShort: "LAZ",
    homeBg: "#8b0000",
    awayBg: "#38bdf8",
    stadium: "Stadio Olimpico, Roma",
    date: "Domenica, 18:00 CET",
    history: "One of the most intense, passionate city derbies in world football."
  },
  {
    title: "Derby del Sole",
    home: "SSC Napoli",
    away: "AS Roma",
    homeShort: "NAP",
    awayShort: "ROM",
    homeBg: "#0284c7",
    awayBg: "#8b0000",
    stadium: "Stadio Diego Armando Maradona, Napoli",
    date: "Sabato, 20:45 CET",
    history: "The Sun Derby representing Central and Southern Italian football excellence."
  }
];

const scudettoHistory = [
  { club: "Juventus", count: 36, percentage: 36 / 36 * 100 },
  { club: "Inter Milano", count: 20, percentage: 20 / 36 * 100 },
  { club: "AC Milan", count: 19, percentage: 19 / 36 * 100 },
  { club: "Genoa CFC", count: 9, percentage: 9 / 36 * 100 },
  { club: "Torino FC", count: 7, percentage: 7 / 36 * 100 },
  { club: "Bologna FC", count: 7, percentage: 7 / 36 * 100 },
  { club: "Pro Vercelli", count: 7, percentage: 7 / 36 * 100 },
  { club: "AS Roma", count: 3, percentage: 3 / 36 * 100 },
  { club: "SSC Napoli", count: 3, percentage: 3 / 36 * 100 },
  { club: "SS Lazio", count: 2, percentage: 2 / 36 * 100 },
  { club: "ACF Fiorentina", count: 2, percentage: 2 / 36 * 100 }
];

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderStandings();
  renderClubs(clubsData);
  renderMatches();
  renderHistory();
  setupTabs();
  setupSearch();
  setupModal();
});

// Render Serie A Standings Table
function renderStandings() {
  const tbody = document.getElementById("standings-body");
  if (!tbody) return;

  tbody.innerHTML = clubsData.map(team => {
    let posClass = "";
    if (team.pos <= 4) posClass = "pos-ucl";
    else if (team.pos <= 6) posClass = "pos-uel";
    else if (team.pos >= 18) posClass = "pos-rel";

    const formHtml = team.form.map(res => {
      const cls = res === "W" ? "form-w" : (res === "D" ? "form-d" : "form-l");
      return `<span class="form-dot ${cls}">${res}</span>`;
    }).join("");

    return `
      <tr>
        <td><span class="pos-indicator ${posClass}">${team.pos}</span></td>
        <td>
          <div class="team-cell">
            <div class="team-badge" style="background: ${team.colors[0]}; color: ${team.textColor};">
              ${team.shortName.substring(0, 2)}
            </div>
            <span>${team.name}</span>
          </div>
        </td>
        <td>${team.pld}</td>
        <td>${team.won}</td>
        <td>${team.drw}</td>
        <td>${team.lst}</td>
        <td>${team.gd > 0 ? "+" + team.gd : team.gd}</td>
        <td><strong>${team.pts}</strong></td>
        <td>
          <div class="form-badges">${formHtml}</div>
        </td>
      </tr>
    `;
  }).join("");
}

// Render Featured Clubs Cards
function renderClubs(clubs) {
  const container = document.getElementById("clubs-grid");
  if (!container) return;

  if (clubs.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 2rem;">Nessuna squadra trovata con questo filtro.</p>`;
    return;
  }

  container.innerHTML = clubs.map(club => {
    return `
      <div class="club-card" data-club-id="${club.id}">
        <div class="club-header">
          <div class="club-avatar" style="background: ${club.colors[0]}; color: ${club.textColor};">
            ${club.shortName}
          </div>
          <div class="club-info">
            <h3>${club.name}</h3>
            <div class="club-meta">
              <span>📍 ${club.city.split(" ")[0]}</span>
              ${club.stars ? `<span class="scudetto-stars">${club.stars}</span>` : ""}
            </div>
          </div>
        </div>
        <div class="club-body">
          <div class="detail-row">
            <span class="detail-label">Scudetti Vinti</span>
            <span class="detail-val">🏆 ${club.scudetti}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Stadio</span>
            <span class="detail-val">${club.stadium.split("(")[0].trim()}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Capienza</span>
            <span class="detail-val">${club.capacity} spettatori</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Anno Fondazione</span>
            <span class="detail-val">${club.founded}</span>
          </div>
        </div>
        <div class="club-card-footer">
          <span class="club-nick">${club.nickname.split("/")[0].trim()}</span>
          <button class="btn-tag" onclick="showClubModal('${club.id}')">Dettagli</button>
        </div>
      </div>
    `;
  }).join("");
}

// Render Derbies and Big Matches
function renderMatches() {
  const container = document.getElementById("matches-grid");
  if (!container) return;

  container.innerHTML = matchesData.map(match => {
    return `
      <div class="match-card">
        <span class="derby-badge">🔥 ${match.title}</span>
        <div class="match-clash">
          <div class="clash-team">
            <div class="clash-logo" style="background: ${match.homeBg};">
              ${match.homeShort}
            </div>
            <div class="clash-name">${match.home}</div>
          </div>
          <div class="clash-vs">VS</div>
          <div class="clash-team">
            <div class="clash-logo" style="background: ${match.awayBg};">
              ${match.awayShort}
            </div>
            <div class="clash-name">${match.away}</div>
          </div>
        </div>
        <div class="match-details">
          <div><strong>🏟️ Stadio:</strong> ${match.stadium}</div>
          <div><strong>🗓️ Data:</strong> ${match.date}</div>
          <div style="margin-top: 0.3rem; font-style: italic;">"${match.history}"</div>
        </div>
      </div>
    `;
  }).join("");
}

// Render Scudetto Leaderboard
function renderHistory() {
  const container = document.getElementById("scudetto-bars");
  if (!container) return;

  container.innerHTML = scudettoHistory.map(item => {
    return `
      <div class="history-bar-item">
        <div class="bar-meta">
          <span>${item.club}</span>
          <span>${item.count} Scudetti</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${item.percentage}%;"></div>
        </div>
      </div>
    `;
  }).join("");
}

// Tab Switching
function setupTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");

      buttons.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const activePanel = document.getElementById(targetId);
      if (activePanel) activePanel.classList.add("active");
    });
  });
}

// Search functionality
function setupSearch() {
  const input = document.getElementById("club-search");
  if (!input) return;

  input.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = clubsData.filter(club => 
      club.name.toLowerCase().includes(query) ||
      club.city.toLowerCase().includes(query) ||
      club.nickname.toLowerCase().includes(query)
    );
    renderClubs(filtered);
  });
}

// Modal Details for Club
function setupModal() {
  const modal = document.getElementById("club-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("open");
      }
    });
  }
}

window.showClubModal = function(clubId) {
  const club = clubsData.find(c => c.id === clubId);
  const modal = document.getElementById("club-modal");
  const content = document.getElementById("modal-content");
  if (!club || !modal || !content) return;

  content.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
      <div class="club-avatar" style="background: ${club.colors[0]}; color: ${club.textColor};">
        ${club.shortName}
      </div>
      <div>
        <h2 style="font-size: 1.4rem; font-weight: 800;">${club.name}</h2>
        <p style="color: var(--text-muted); font-size: 0.85rem;">${club.nickname}</p>
      </div>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem;">
      <div class="detail-row">
        <span class="detail-label">Città & Regione</span>
        <span class="detail-val">${club.city}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Stadio di Casa</span>
        <span class="detail-val">${club.stadium}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Capienza</span>
        <span class="detail-val">${club.capacity}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Scudetti Vinti</span>
        <span class="detail-val">🏆 ${club.scudetti} ${club.stars}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Coppa Italia</span>
        <span class="detail-val">🇮🇹 ${club.coppaItalia}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">UEFA Champions League</span>
        <span class="detail-val">⭐ ${club.uclTitles}</span>
      </div>
      <div style="margin-top: 0.75rem;">
        <span class="detail-label" style="display: block; margin-bottom: 0.3rem;">Leggende del Club:</span>
        <p style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.5;">${club.legends}</p>
      </div>
    </div>
  `;

  modal.classList.add("open");
};
