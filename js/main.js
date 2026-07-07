const experiences = [
  {
    role: "Electrical Site Supervisor",
    company: "NESR AL-JAZERA KSA",
    period: "June 2025 - Present",
    responsibilities: ["Supervise electrical site activities", "Coordinate teams and daily work permits", "Inspect wiring, panels and terminations"],
    technologies: ["HV/LV distribution", "Panel schedules", "Site reporting"],
    equipment: ["Distribution boards", "Cable trays", "Testing meters"],
    achievements: ["Improved daily coordination", "Maintained safety-first execution", "Reduced rework through inspections"]
  },
  {
    role: "Electrical Site Supervisor",
    company: "Abdul Aziz Ibrahim Al Ayafi",
    period: "May 2023 - May 2025",
    responsibilities: ["Managed villa and commercial electrical works", "Reviewed drawings and material needs", "Handled client and contractor updates"],
    technologies: ["Lighting systems", "Power circuits", "Low-current systems"],
    equipment: ["MDB/SMDB/DB panels", "Conduits", "Megger testers"],
    achievements: ["Delivered multiple installations", "Improved documentation quality", "Strengthened safety compliance"]
  },
  {
    role: "Site Supervisor",
    company: "Warm IQ Electrical",
    period: "Jan 2020 - Mar 2023",
    responsibilities: ["Led field teams for electrical and solar tasks", "Prepared work progress reports", "Troubleshot installation issues"],
    technologies: ["Solar PV", "CCTV", "Traffic signals"],
    equipment: ["Inverters", "Cameras", "Signal controllers"],
    achievements: ["Completed mixed-scope projects", "Supported faster fault resolution", "Built dependable team routines"]
  },
  {
    role: "Electrical Supervisor",
    company: "Rastgar Engineering Company",
    period: "2018 - 2020",
    responsibilities: ["Supervised industrial maintenance", "Checked equipment condition", "Supported preventive maintenance plans"],
    technologies: ["Motor control", "Power distribution", "Industrial wiring"],
    equipment: ["Motors", "Control panels", "Breakers"],
    achievements: ["Reduced downtime risks", "Improved inspection discipline", "Supported reliable plant operations"]
  }
];

const projects = [
  ["Luxury Villa Electrical Installation", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80", "Complete residential power, lighting and low-current installation for premium villa spaces.", ["Wiring layout", "DB installation", "Lighting and socket circuits"], ["Team supervision", "Drawing coordination", "Final inspection"], ["Multimeter", "Megger", "Cable puller"], "Completed"],
  ["Solar Power Installation", "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80", "Solar PV installation with inverter integration and safe DC/AC routing.", ["Panel mounting", "Inverter wiring", "System testing"], ["Installation checks", "Cable management", "Performance review"], ["Clamp meter", "PV tester", "Insulation tester"], "Completed"],
  ["Plumbing Installation", "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=80", "Coordinated plumbing support works for residential and construction environments.", ["Pipe routing", "Fixture coordination", "Site inspection"], ["Material planning", "Team follow-up", "Quality checks"], ["Pipe cutter", "Pressure tester", "Hand tools"], "Completed"],
  ["HV/LV Distribution Maintenance", "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1000&q=80", "Maintenance and inspection of distribution panels and power equipment.", ["Panel inspection", "Breaker checks", "Cable termination review"], ["Safety isolation", "Testing", "Reporting"], ["Thermal scanner", "Multimeter", "Torque tools"], "Ongoing"],
  ["Traffic Signal Installation", "https://images.unsplash.com/photo-1517174637803-6929e01b6e69?auto=format&fit=crop&w=1000&q=80", "Installation and wiring of traffic signal infrastructure and control cabinets.", ["Signal heads", "Controller cabinet", "Cable trench coordination"], ["Wiring supervision", "Testing", "Fault correction"], ["Tester", "Crimping tools", "Hand tools"], "Completed"],
  ["CCTV Installation", "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80", "Security camera installation with network routing and monitoring setup.", ["Camera mounting", "Cable routing", "NVR setup"], ["Layout planning", "Configuration", "Client handover"], ["Network tester", "Drill", "Crimping kit"], "Completed"],
  ["Electrical Meter Installation", "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80", "Meter installation and termination work for residential and service connections.", ["Meter board prep", "Cable termination", "Testing"], ["Safety compliance", "Connection checks", "Documentation"], ["Screwdriver set", "Clamp meter", "Seal tools"], "Completed"]
];

const skills = [
  ["Electrical Wiring", 95],
  ["Distribution Panels", 92],
  ["HV/LV Systems", 88],
  ["Solar Systems", 86],
  ["Plumbing", 80],
  ["CCTV Installation", 87],
  ["Traffic Signals", 82],
  ["AutoCAD", 78],
  ["Microsoft Office", 90]
];

const services = [
  ["Electrical Installation", "bi-lightning-charge", "Residential, commercial and industrial wiring installation with careful supervision."],
  ["Electrical Maintenance", "bi-tools", "Preventive checks, fault diagnosis and safe repair coordination."],
  ["Solar Installation", "bi-sun", "Solar panel mounting, inverter wiring and performance-oriented setup."],
  ["Plumbing", "bi-droplet", "Plumbing coordination, fixture support and site quality checks."],
  ["CCTV Installation", "bi-camera-video", "Camera mounting, cable routing, NVR setup and handover support."],
  ["Electrical Supervision", "bi-shield-check", "Site team leadership, safety compliance and progress reporting."],
  ["Power Distribution", "bi-grid-3x3-gap", "MDB, SMDB and DB installation, inspection and maintenance."],
  ["Troubleshooting", "bi-gear", "Systematic fault tracing for power, control and low-current systems."]
];

const certificates = [
  ["Electrical Safety Certificate", "Professional Training", "2025", "public/certificates/electrical-safety.pdf"],
  ["Site Supervision Training", "Project Safety Program", "2024", "public/certificates/site-supervision.pdf"],
  ["Solar Installation Certificate", "Technical Training", "2023", "public/certificates/solar-installation.pdf"]
];

const gallery = [
  ["Distribution equipment", "Electrical", "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80"],
  ["Solar panels", "Solar", "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80"],
  ["Plumbing pipework", "Plumbing", "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80"],
  ["Traffic light", "Traffic Signals", "https://images.unsplash.com/photo-1508020963102-c6c723be5764?auto=format&fit=crop&w=900&q=80"],
  ["Security camera", "CCTV", "https://images.unsplash.com/photo-1589935447067-5531094415d1?auto=format&fit=crop&w=900&q=80"],
  ["Construction site", "Construction", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"],
  ["Power lines", "Electrical", "https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=900&q=80"],
  ["Solar field", "Solar", "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80"]
];

const testimonials = [
  ["Project Manager", "Construction Client", "Atta keeps site work organized and communicates clearly with both field teams and management."],
  ["Operations Lead", "Maintenance Team", "His electrical inspections helped us reduce rework and close project milestones with confidence."],
  ["Site Engineer", "Infrastructure Project", "Reliable supervision, strong safety awareness and practical troubleshooting on active sites."]
];

const list = (items) => `<ul class="clean-list">${items.map((item) => `<li><i class="bi bi-check-circle"></i><span>${item}</span></li>`).join("")}</ul>`;
const detail = (title, items) => `<p class="detail-title">${title}</p>${list(items)}`;

function renderExperience() {
  const root = document.getElementById("experienceList");
  root.innerHTML = experiences
    .map(
      (job) => `
      <article class="timeline-item reveal">
        <span class="timeline-dot"></span>
        <div class="timeline-card">
          <div class="d-flex flex-wrap justify-content-between gap-3">
            <div>
              <h3>${job.role}</h3>
              <strong class="text-primary">${job.company}</strong>
            </div>
            <span class="timeline-meta">${job.period}</span>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-xl-3">${detail("Responsibilities", job.responsibilities)}</div>
            <div class="col-md-6 col-xl-3">${detail("Technologies", job.technologies)}</div>
            <div class="col-md-6 col-xl-3">${detail("Equipment", job.equipment)}</div>
            <div class="col-md-6 col-xl-3">${detail("Achievements", job.achievements)}</div>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function renderProjects() {
  document.getElementById("projectList").innerHTML = projects
    .map(
      ([title, image, description, scope, responsibilities, tools, status]) => `
      <div class="col-md-6 col-xl-4 reveal">
        <article class="project-card">
          <div class="project-image"><img src="${image}" alt="${title}" loading="lazy"></div>
          <div class="project-body">
            <span class="status">${status}</span>
            <h3 class="mt-3">${title}</h3>
            <p>${description}</p>
            ${detail("Scope", scope)}
            ${detail("Responsibilities", responsibilities)}
            ${detail("Tools Used", tools)}
          </div>
        </article>
      </div>`
    )
    .join("");
}

function renderSkills() {
  document.getElementById("skillList").innerHTML = skills
    .map(
      ([name, value]) => `
      <div class="col-sm-6 col-lg-4 reveal">
        <article class="skill-card">
          <div class="circle" data-value="${value}"><strong>${value}%</strong></div>
          <h3>${name}</h3>
        </article>
      </div>`
    )
    .join("");
}

function renderServices() {
  document.getElementById("serviceList").innerHTML = services
    .map(
      ([title, icon, description]) => `
      <div class="col-sm-6 col-xl-3 reveal">
        <article class="service-card">
          <i class="bi ${icon}"></i>
          <h3>${title}</h3>
          <p>${description}</p>
        </article>
      </div>`
    )
    .join("");
}

function renderCertificates() {
  document.getElementById("certificateList").innerHTML = certificates
    .map(
      ([title, issuer, year, file]) => `
      <div class="col-md-4 reveal">
        <article class="certificate-card">
          <i class="bi bi-award"></i>
          <h3>${title}</h3>
          <p class="text-secondary">${issuer} · ${year}</p>
          <a class="btn btn-brand" href="${file}" download><i class="bi bi-download me-2"></i>Download PDF</a>
        </article>
      </div>`
    )
    .join("");
}

function renderGallery(active = "All") {
  const categories = ["All", ...new Set(gallery.map((item) => item[1]))];
  document.getElementById("galleryFilters").innerHTML = categories
    .map((category) => `<button class="filter-btn ${category === active ? "active" : ""}" type="button" data-filter="${category}">${category}</button>`)
    .join("");

  const visible = active === "All" ? gallery : gallery.filter((item) => item[1] === active);
  document.getElementById("galleryList").innerHTML = visible
    .map(
      ([title, category, image]) => `
      <button class="gallery-item reveal" type="button" data-image="${image}" data-title="${title}">
        <img src="${image}" alt="${title} - ${category}" loading="lazy">
      </button>`
    )
    .join("");
}

function renderTestimonials() {
  document.getElementById("testimonialList").innerHTML = testimonials
    .map(
      ([name, role, quote]) => `
      <div class="col-md-4 reveal">
        <article class="testimonial-card">
          <p>"${quote}"</p>
          <h3>${name}</h3>
          <span class="text-primary fw-bold">${role}</span>
        </article>
      </div>`
    )
    .join("");
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("skill-card")) {
            const circle = entry.target.querySelector(".circle");
            const value = Number(circle.dataset.value);
            circle.style.setProperty("--value", `${value * 3.6}deg`);
          }
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal, .skill-card").forEach((item) => observer.observe(item));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const tick = () => {
          current = Math.min(target, current + step);
          el.textContent = current;
          if (current < target) requestAnimationFrame(tick);
        };
        tick();
        observer.unobserve(el);
      });
    },
    { threshold: 0.7 }
  );
  counters.forEach((counter) => observer.observe(counter));
}

function setupTyping() {
  const el = document.getElementById("typingText");
  const text = "Electrical Site Supervisor";
  let index = 0;
  setInterval(() => {
    el.textContent = text.slice(0, index + 1);
    index = index >= text.length ? 0 : index + 1;
  }, 120);
}

function setupTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "dark") document.body.classList.add("dark-mode");
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("portfolio-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
}

function setupParticles() {
  const root = document.getElementById("particles");
  root.innerHTML = Array.from({ length: 30 })
    .map((_, index) => `<span class="particle" style="left:${(index * 37) % 100}%;top:${(index * 19) % 100}%;animation-delay:${index * 0.11}s"></span>`)
    .join("");
}

function setupGallery() {
  document.getElementById("galleryFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    renderGallery(button.dataset.filter);
    setupRevealAnimations();
  });

  document.getElementById("galleryList").addEventListener("click", (event) => {
    const item = event.target.closest(".gallery-item");
    if (!item) return;
    document.getElementById("lightboxImage").src = item.dataset.image;
    document.getElementById("lightboxImage").alt = item.dataset.title;
    document.getElementById("lightboxCaption").textContent = item.dataset.title;
    document.getElementById("lightbox").classList.add("show");
  });

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
}

function setupContact() {
  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.reset();
    alert("Thank you. Your message is ready to connect with EmailJS or a backend endpoint.");
  });
}

function setupScrollTop() {
  const button = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => button.classList.toggle("show", window.scrollY > 600));
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderExperience();
  renderProjects();
  renderSkills();
  renderServices();
  renderCertificates();
  renderGallery();
  renderTestimonials();
  setupParticles();
  setupTheme();
  setupTyping();
  setupCounters();
  setupRevealAnimations();
  setupGallery();
  setupContact();
  setupScrollTop();
  setTimeout(() => document.getElementById("loader").classList.add("hidden"), 650);
});
