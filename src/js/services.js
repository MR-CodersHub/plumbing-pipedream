// Core Plumbing Services & Visual Guides Data
function getAssetPrefix() {
  const path = window.location.pathname;
  if (path.includes('/public/pages/') || path.includes('/public/auth/')) return '../../assets/img/';
  return './assets/img/';
}

const assetPrefix = getAssetPrefix();

const SERVICES_DATA = {
  "drain-cleaning": {
    title: "Drain Cleaning & Jetting",
    badge: "Most Popular",
    icon: "fa-soap",
    image: assetPrefix + "services/drain-cleaning.png",
    beforeImage: assetPrefix + "services/clogged-pipe-before.png",
    afterImage: assetPrefix + "services/clean-pipe-after.png",
    startingPrice: "$95",
    estDuration: "45 - 90 mins",
    shortDesc: "Slow basins or main-line blockages cleared with camera-guided high-pressure hydro-jetting.",
    fullDesc: "Our high-pressure hydro-jetting system completely removes grease, soap scum, hair, and stubborn tree roots without damaging your pipes. Complete camera inspection included with every service.",
    features: [
      "High-definition video camera pipe inspection",
      "Hydro-jetting root and heavy grease clear-out",
      "Zero toxic chemical residue (eco-friendly flow restoration)",
      "30-day clog-free warranty"
    ],
    equipment: ["RIDGID HD Sewer Camera", "3000 PSI Commercial Hydro-Jetter", "Rotary Snake Auger"],
    pricingTiers: [
      { plan: "Single Trap Clearing", rate: "$95 - $130", details: "For clogged sink, shower, or bath drain traps." },
      { plan: "Main Line Jetting", rate: "$180 - $260", details: "Full cleanout access to clear main home sewer lines." },
      { plan: "Hydro-Jet Descaling", rate: "$380 - $490", details: "Removes heavy mineral scale and tree roots." }
    ]
  },
  "burst-pipe": {
    title: "Leak Detection & Burst Pipe Repair",
    badge: "24/7 Emergency",
    icon: "fa-tint-slash",
    image: assetPrefix + "services/burst-pipe.png",
    beforeImage: assetPrefix + "services/burst-pipe-leaking-before.png",
    afterImage: assetPrefix + "services/burst-pipe-repaired-after.png",
    startingPrice: "$145",
    estDuration: "60 - 120 mins",
    shortDesc: "Immediate main shut-off assistance, non-invasive acoustic leak location, and pipe replacement.",
    fullDesc: "Active water leak? Our emergency team isolates the leak, cuts out corroded copper/PEX fittings, and installs code-compliant durable replacements.",
    features: [
      "30-minute priority emergency arrival",
      "Acoustic and thermal infrared leak detection",
      "Corrosion-resistant copper or PEX fitting swap",
      "Full pressure testing upon completion"
    ],
    equipment: ["FLIR Thermal Imaging Camera", "Acoustic Ground Microphones", "PEX Crimp Press Tools"],
    pricingTiers: [
      { plan: "Exposed Pipe Patch", rate: "$145 - $220", details: "Visible under-sink or basement exposed pipe repairs." },
      { plan: "In-Wall Pipe Repair", rate: "$310 - $480", details: "Drywall access, section replacement, and pressure re-seal." },
      { plan: "Sewer Main Repair", rate: "$650+", details: "Subterranean main line repair and code inspection." }
    ]
  },
  "water-heater": {
    title: "Water Heater Repair & Install",
    badge: "Flat Rate",
    icon: "fa-fire",
    image: assetPrefix + "services/water-heater.png",
    beforeImage: assetPrefix + "services/burst-pipe-leaking-before.png",
    afterImage: assetPrefix + "services/water-heater.png",
    startingPrice: "$120",
    estDuration: "1 - 3 hours",
    shortDesc: "Flushing, element replacement, anode rod swaps, and tankless or tank unit installations.",
    fullDesc: "Get reliable hot water back instantly. We repair all major tank and tankless brands, perform annual sediment flushes, and install high-efficiency units with 10-year warranties.",
    features: [
      "Expansion tank compliance & pressure setup",
      "Eco-friendly extraction & old unit disposal",
      "Energy Star high efficiency rating configuration",
      "10-year manufacturer warranty registration"
    ],
    equipment: ["Digital Thermostat Calibrator", "Sediment Flush Pump", "Gas Line Pressure Gauge"],
    pricingTiers: [
      { plan: "Annual Maintenance Flush", rate: "$120", details: "Flushes sediment, tests heating elements & anode rods." },
      { plan: "Standard Tank Swap", rate: "$680 - $950", details: "Full labor for 40/50 gallon tank replacement." },
      { plan: "Tankless Upgrade", rate: "$1,800+", details: "Continuous hot water tankless system install." }
    ]
  },
  "pipe-refitting": {
    title: "Pipe Installation & Repiping",
    badge: "Residential & B2B",
    icon: "fa-hammer",
    image: assetPrefix + "services/pipe-installation-repiping.png",
    beforeImage: assetPrefix + "services/clogged-pipe-before.png",
    afterImage: assetPrefix + "services/pipe-installation-repiping.png",
    startingPrice: "$220",
    estDuration: "2 - 6 hours",
    shortDesc: "Upgrading corroded lead or iron pipes to modern, high-pressure, flexible PEX or copper.",
    fullDesc: "Protect your drinking water and eliminate low water pressure by upgrading old galvanized pipes to durable PEX or copper tubing with minimal wall intrusion.",
    features: [
      "Full site blueprint mapping and non-invasive layout",
      "Flexible, freeze-resistant PEX tubing",
      "Main water regulator & shutoff valve upgrades",
      "25-year structural pipe guarantee"
    ],
    equipment: ["ProPress Power Pipe Joiner", "Laser Pipe Leveling System", "PEX Manifold Block"],
    pricingTiers: [
      { plan: "Single Fixture Re-Pipe", rate: "$220 - $350", details: "Replaces shut-off valves and supply lines." },
      { plan: "Partial Home Repiping", rate: "$800 - $1,600", details: "Swaps accessible basement and crawlspace lines." },
      { plan: "Whole House Repiping", rate: "$3,500+", details: "Complete home PEX supply and waste system replacement." }
    ]
  },
  "bathroom-plumbing": {
    title: "Bathroom Plumbing & Fixtures",
    badge: "Guaranteed",
    icon: "fa-toilet",
    image: assetPrefix + "services/bathroom-plumbing.png",
    beforeImage: assetPrefix + "services/faucet-leaking-before.png",
    afterImage: assetPrefix + "services/faucet-installed-after.png",
    startingPrice: "$110",
    estDuration: "45 - 90 mins",
    shortDesc: "Toilet repairs, shower valve replacements, sink installations, and clog clearing.",
    fullDesc: "Complete bathroom plumbing services from fixing running toilets and dripping faucets to installing luxury rain showerheads and vanity plumbing.",
    features: [
      "Precision wax ring seal replacement for toilets",
      "Anti-scald shower thermostatic valve installation",
      "Leak-proof drain trap assembly",
      "100% drip-free guarantee"
    ],
    equipment: ["Drain Snake", "Torque Wrench", "Silicone Sanitary Sealer"],
    pricingTiers: [
      { plan: "Running Toilet Fix", rate: "$110 - $160", details: "Flapper, fill valve, and seal replacement." },
      { plan: "Faucet & Sink Install", rate: "$175 - $250", details: "Mounting new faucets and connecting supply lines." },
      { plan: "Shower Valve Swap", rate: "$280 - $420", details: "In-wall valve cartridge and trim replacement." }
    ]
  },
  "kitchen-plumbing": {
    title: "Kitchen Plumbing & Disposal",
    badge: "Fast Service",
    icon: "fa-utensils",
    image: assetPrefix + "services/kitchen-plumbing-disposal.png",
    beforeImage: assetPrefix + "services/clogged-pipe-before.png",
    afterImage: assetPrefix + "services/kitchen-plumbing-disposal.png",
    startingPrice: "$115",
    estDuration: "45 - 75 mins",
    shortDesc: "Garbage disposal repair & install, kitchen sink drains, dishwasher hookups, ice makers.",
    fullDesc: "Keep your kitchen running smoothly. We clear heavy grease clogs, replace jammed garbage disposals, install quiet units, and hook up dishwashers safely.",
    features: [
      "Heavy-duty stainless steel garbage disposal fitting",
      "Dishwasher high-loop drain backflow protection",
      "Dual sink P-trap alignment",
      "Ice maker water line tap and filter setup"
    ],
    equipment: ["Disposal Lock Wrench", "Copper Line Cutter", "High-Flow Drain Auger"],
    pricingTiers: [
      { plan: "Disposal Repair / Jam", rate: "$115 - $150", details: "Unjamming motor and replacing seal rings." },
      { plan: "New Disposal Install", rate: "$195 - $290", details: "Includes 3/4 HP quiet disposal unit & installation." },
      { plan: "Dishwasher & Sink Hookup", rate: "$160 - $240", details: "Plumbing connections for new appliances." }
    ]
  }
};

// Visual Plumbing Guides Data
const PLUMBING_GUIDES = [
  {
    id: "water-leak",
    title: "Water Leak",
    icon: "fa-tint",
    image: assetPrefix + "services/burst-pipe-leaking-before.png",
    badge: "Urgent Action Required",
    badgeType: "urgent",
    symptoms: "Damp spots on drywall or ceilings, unexpected rise in water bill, sound of running water when faucets are off.",
    causes: "Corroded pipe joints, high water pressure (>80 PSI), freezing temperatures, shifting foundation.",
    tempFix: "Turn off the main water shut-off valve immediately to prevent structural damage. Open lower faucets to drain residual line water.",
    whenToCall: "Call a plumber immediately if water is dripping through ceilings or electrical fixtures, or if the main shut-off fails."
  },
  {
    id: "blocked-drain",
    title: "Blocked Drain",
    icon: "fa-soap",
    image: assetPrefix + "services/clogged-pipe-before.png",
    badge: "High Occurrence",
    badgeType: "warning",
    symptoms: "Water backing up in sinks or tubs, slow drainage, foul sewer odors, gurgling sounds from pipes.",
    causes: "Accumulated cooking grease, hair buildup in traps, soap scum scale, invasive tree roots in sewer main.",
    tempFix: "Use a cup plunger over the drain with 2 inches of water. Avoid chemical drain openers which corrode metal pipes.",
    whenToCall: "Call a plumber if multiple drains back up simultaneously (sign of a main sewer line blockage) or if standing water persists."
  },
  {
    id: "low-pressure",
    title: "Low Water Pressure",
    icon: "fa-tachometer-alt",
    image: assetPrefix + "services/pipe-installation-repiping.png",
    badge: "System Check Recommended",
    badgeType: "warning",
    symptoms: "Weak shower stream, slow-filling toilet tank, trickling faucets throughout the house.",
    causes: "Clogged aerators, failing pressure reducing valve (PRV), hidden water leak, severe pipe mineral corrosion.",
    tempFix: "Unscrew faucet aerators and soak in white vinegar to clear mineral deposits. Check if main shut-off valve is fully open.",
    whenToCall: "Call a plumber if low pressure affects the whole house or if sudden pressure drop accompanies damp wall spots."
  },
  {
    id: "pipe-burst",
    title: "Pipe Burst",
    icon: "fa-bolt",
    image: assetPrefix + "blog/burst-pipe-survival.png",
    badge: "Emergency Priority",
    badgeType: "urgent",
    symptoms: "Sudden gushing water, flooded basement or floors, drastic loss of water pressure, loud popping pipe sounds.",
    causes: "Sub-zero frozen pipes expanding, excessive water pressure spike, severe metal fatigue or rust puncture.",
    tempFix: "Immediately turn off main water shut-off valve and electricity to affected area if safe. Wrap leaky section tightly with rubber tape.",
    whenToCall: "Call emergency 24/7 hotline immediately. Technicians aim to arrive within 30-45 minutes for burst pipe emergencies."
  },
  {
    id: "overflowing-toilet",
    title: "Overflowing Toilet",
    icon: "fa-toilet",
    image: assetPrefix + "services/bathroom-plumbing.png",
    badge: "Immediate Attention",
    badgeType: "urgent",
    symptoms: "Water level rising rapidly to toilet rim upon flushing, failing to drain down bowl.",
    causes: "Blockage in toilet trap, sewer vent obstruction, main line backing up, damaged flapper valve.",
    tempFix: "Remove tank lid and press the rubber flapper down to stop water from tank. Turn shut-off valve behind toilet clockwise.",
    whenToCall: "Call a plumber if heavy auger plunging fails or if sewage backs up into bathtub drains."
  },
  {
    id: "water-heater-failure",
    title: "Water Heater Failure",
    icon: "fa-fire-alt",
    image: assetPrefix + "services/water-heater.png",
    badge: "Maintenance Issue",
    badgeType: "warning",
    symptoms: "Only lukewarm or freezing cold water, rusty/cloudy hot water, strange rumbling or popping noise from tank.",
    causes: "Burnt out heating element, heavy sediment accumulation on tank bottom, depleted anode rod, thermostat failure.",
    tempFix: "Check electrical circuit breaker. For gas heaters, ensure pilot light is lit. Do not attempt to drain hot tank under pressure.",
    whenToCall: "Call a plumber if tank leaks from bottom seam (requires unit replacement) or if hot water turns rusty brown."
  }
];

document.addEventListener('DOMContentLoaded', () => {

  // ================= 1. Render Visual Plumbing Guides =================
  const guidesContainer = document.getElementById('guidesContainer');
  if (guidesContainer) {
    let tabsHtml = `<div class="guides-tabs">`;
    let panelsHtml = ``;

    PLUMBING_GUIDES.forEach((guide, index) => {
      const activeClass = index === 0 ? 'active' : '';
      tabsHtml += `
        <button class="guide-tab-btn ${activeClass}" data-guide="${guide.id}">
          <i class="fas ${guide.icon}"></i> ${guide.title}
        </button>
      `;

      panelsHtml += `
        <div class="guide-content-panel ${activeClass}" id="guide-panel-${guide.id}">
          <div class="guide-info">
            <span class="guide-badge ${guide.badgeType}">${guide.badge}</span>
            <h3>${guide.title} Visual Diagnostic</h3>
            
            <div class="guide-block">
              <div class="guide-block-title"><i class="fas fa-exclamation-circle"></i> Common Symptoms</div>
              <div class="guide-block-text">${guide.symptoms}</div>
            </div>

            <div class="guide-block">
              <div class="guide-block-title"><i class="fas fa-search"></i> Possible Causes</div>
              <div class="guide-block-text">${guide.causes}</div>
            </div>

            <div class="guide-temp-fix">
              <strong><i class="fas fa-hand-paper"></i> Immediate Temporary Fix:</strong><br>
              ${guide.tempFix}
            </div>

            <div class="guide-block">
              <div class="guide-block-title" style="color:var(--coral-accent)"><i class="fas fa-user-shield"></i> When to Call Plumpin</div>
              <div class="guide-block-text">${guide.whenToCall}</div>
            </div>

            <div style="margin-top:24px;display:flex;gap:12px">
              <a href="./public/pages/booking.html?issue=${guide.id}" class="btn-primary">
                <i class="fas fa-calendar-check"></i> Book Technician for ${guide.title}
              </a>
            </div>
          </div>

          <div class="guide-diagram-box">
            <img src="${guide.image}" alt="${guide.title}" class="guide-diagram-img">
            <h4 style="font-size:18px;font-weight:700;margin-bottom:8px">${guide.title} Resolution Flow</h4>
            <p style="font-size:14px;color:var(--ink-secondary);line-height:1.5">Our licensed technicians perform HD camera diagnostics, isolate line leaks, and provide upfront flat-rate pricing before work begins.</p>
            <div style="margin-top:16px;padding:12px;background:var(--bg-card);border-radius:var(--radius-md);border:1px solid var(--border-color);font-size:13px;font-weight:600;color:var(--green-success)">
              <i class="fas fa-check-circle"></i> 100% Satisfaction & Workmanship Warranty
            </div>
          </div>
        </div>
      `;
    });

    tabsHtml += `</div>`;
    guidesContainer.innerHTML = tabsHtml + panelsHtml;

    // Tab Switching Listener
    const tabBtns = guidesContainer.querySelectorAll('.guide-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-guide');
        guidesContainer.querySelectorAll('.guide-tab-btn').forEach(b => b.classList.remove('active'));
        guidesContainer.querySelectorAll('.guide-content-panel').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const activePanel = document.getElementById(`guide-panel-${targetId}`);
        if (activePanel) activePanel.classList.add('active');
      });
    });
  }

  // ================= 2. Instant Cost & Duration Estimator Widget =================
  const estimatorService = document.getElementById('estimatorService');
  const estimatorProperty = document.getElementById('estimatorProperty');
  const estimatorUrgency = document.getElementById('estimatorUrgency');
  const estCostOutput = document.getElementById('estCostOutput');
  const estDurationOutput = document.getElementById('estDurationOutput');

  function calculateEstimate() {
    if (!estimatorService || !estCostOutput || !estDurationOutput) return;

    const selectedServiceKey = estimatorService.value;
    const service = SERVICES_DATA[selectedServiceKey] || SERVICES_DATA["drain-cleaning"];
    const isCommercial = estimatorProperty && estimatorProperty.value === 'commercial';
    const isEmergency = estimatorUrgency && estimatorUrgency.value === 'emergency';

    let baseCostNum = parseInt(service.startingPrice.replace(/\D/g, '')) || 95;
    let durationText = service.estDuration;

    if (isCommercial) baseCostNum = Math.round(baseCostNum * 1.35);
    if (isEmergency) baseCostNum += 60;

    estCostOutput.textContent = `$${baseCostNum} - $${baseCostNum + 80}`;
    estDurationOutput.textContent = isEmergency ? `Priority < 45 mins arrival (${durationText})` : durationText;
  }

  if (estimatorService) {
    estimatorService.addEventListener('change', calculateEstimate);
    if (estimatorProperty) estimatorProperty.addEventListener('change', calculateEstimate);
    if (estimatorUrgency) estimatorUrgency.addEventListener('change', calculateEstimate);
    calculateEstimate();
  }

  // ================= 3. Zip Code Service Availability Checker =================
  const zipCheckInput = document.getElementById('zipCheckInput');
  const zipCheckBtn = document.getElementById('zipCheckBtn');
  const zipCheckResult = document.getElementById('zipCheckResult');

  if (zipCheckBtn && zipCheckInput && zipCheckResult) {
    zipCheckBtn.addEventListener('click', () => {
      const val = zipCheckInput.value.trim();
      if (!val || val.length < 3) {
        zipCheckResult.innerHTML = `<span style="color:var(--coral-accent)"><i class="fas fa-exclamation-circle"></i> Please enter a valid 5-digit zip code.</span>`;
        return;
      }
      zipCheckResult.innerHTML = `
        <div style="background:rgba(16,185,129,0.1);color:var(--green-success);padding:12px 16px;border-radius:var(--radius-md);font-weight:600">
          <i class="fas fa-check-circle"></i> Great news! 3 Master Plumbers are available in zip area <strong>${val}</strong> right now.
        </div>
      `;
    });
  }

  // ================= 4. Interactive Clickable Company Timeline (About Page) =================
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      timelineItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // ================= 5. Before / After Image Slider Handler =================
  const baContainer = document.getElementById('baSliderContainer');
  if (baContainer) {
    const afterImgContainer = baContainer.querySelector('.ba-after');
    const beforeImg = document.getElementById('baBeforeImg');
    const handle = baContainer.querySelector('.ba-slider-handle');

    function syncBeforeWidth() {
      if (beforeImg && baContainer) {
        beforeImg.style.width = `${baContainer.offsetWidth}px`;
      }
    }
    syncBeforeWidth();
    window.addEventListener('resize', syncBeforeWidth);

    let isDragging = false;
    function moveSlider(x) {
      const rect = baContainer.getBoundingClientRect();
      let offsetX = x - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;

      const percentage = (offsetX / rect.width) * 100;
      if (afterImgContainer) afterImgContainer.style.width = `${percentage}%`;
      if (handle) handle.style.left = `${percentage}%`;
    }

    baContainer.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    baContainer.addEventListener('mousemove', (e) => {
      if (isDragging) moveSlider(e.clientX);
    });

    baContainer.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchend', () => isDragging = false);
    baContainer.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches[0]) moveSlider(e.touches[0].clientX);
    });
  }
});
