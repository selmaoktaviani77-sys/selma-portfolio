const profile = {
  name: 'Selma Oktaviani',
  email: 'selma.oktaviani@mhs.unsoed.ac.id',
  roles: ['UI/UX Enthusiast', 'IT Quality Assurance', 'Software Engineering Enthusiast', 'System Optimizer']
};

const experience = {
  work: [
    { role: 'Faculty of Engineering Campus Ambassador', company: 'Universitas Jenderal Soedirman', period: 'Jul 2026 — Present', description: 'Officially represented the Faculty of Engineering through academic, promotional, and institutional activities.' },
    { role: 'Google Student Ambassador (GSA)', company: 'Google Indonesia', period: 'Apr 2026 — Present', description: 'Promoted Google AI tools, including Gemini, among university students and built the #TeamGoogle campus community.' },
    { role: 'Laboratory Teaching Assistant', company: 'Optimization Systems & Supply Chain Engineering', period: 'Feb 2026 — Present', description: 'Guided structured problem-solving and supported quality checks for student data and system outputs.' },
    { role: 'Tutor PKKM 2025', company: 'Universitas Jenderal Soedirman', period: 'Jul 2025 — Sep 2025', description: 'Supported first-year student onboarding, participation monitoring, and assignment evaluation.' },
    { role: 'Chemistry Practicum Assistant', company: 'Laboratorium Teknik Industri UNSOED', period: 'Oct 2025 — Dec 2025', description: 'Prepared standardized practicum modules and helped ensure operational readiness and procedure adherence.' }
  ],
  org: [
    { role: 'Duta PeKA QRIS 2026', company: 'Bank Indonesia Purwokerto', period: 'Jun 2026 — Present', description: 'Promoted consumer protection, digital financial literacy, and safer digital payment practices.' },
    { role: 'Human Resource Development', company: 'Soedirman Robotic Team', period: 'Feb 2026 — Present', description: 'Supported recruitment, onboarding, talent development, performance monitoring, and HR administration; served as Project Officer for an internal robotics workshop.' },
    { role: 'Coordinator P3K', company: 'Industrial Competition — Himpunan Mahasiswa Teknik Industri UNSOED', period: 'May 2025 — Nov 2025', description: 'Recruited division staff and managed operational readiness and on-site safety coordination.' },
    { role: 'Event Staff & Podcast Host (MC)', company: 'Podcast — Engineering English Club (EEC) UNSOED', period: 'Apr 2025 — Nov 2025', description: 'Developed scripts and episode run-downs, facilitated guest discussions, and hosted a faculty-advisor episode.' },
    { role: 'Event Coordinator — Salman Mensyiarkan (Monthly Campaign)', company: 'Salman MM Teknik UNSOED', period: 'Apr 2025 — Oct 2025', description: 'Coordinated monthly religious campaigns, developed student-relevant themes and content scripts, and aligned divisions.' },
    { role: 'Group Mentor', company: 'Industrial Visibility — Himpunan Mahasiswa Teknik Industri UNSOED', period: 'Apr 2025 — Feb 2026', description: 'Mentored first-year students, evaluated assignments, and monitored individual growth.' },
    { role: 'Event Staff', company: 'Female Event Soedirman Teenager 2025 — Unit Kegiatan Kerohanian Islam UNSOED', period: 'Apr 2025 — Sep 2025', description: 'Helped develop the event program, theme, speaker selection, SOPs, MC scripts, and publication coordination.' },
    { role: 'Project Leader (Head of Committee)', company: 'Talkshow EEC 2025 — Engineering English Club (EEC) UNSOED', period: 'Feb 2025 — Sep 2025', description: 'Led 20+ staff, managed the theme, speakers, and execution flow, and exceeded the 230+ participant target.' },
    { role: 'Staff Public Relation', company: 'School of Leadership 2025 — BEM FT UNSOED', period: 'May 2025 — Nov 2025', description: 'Maintained speaker communication, technical coordination, external relations, and the event’s public image.' },
    { role: 'Group Mentor', company: 'PKKMB X Mechanism 7.0 — BEM FT UNSOED', period: 'Apr 2025 — Oct 2025', description: 'Supported first-year adaptation, character development, information delivery, and stakeholder communication.' },
    { role: 'Event Coordinator — Salman Open House (GOMSOH 1446 H)', company: 'Salman MM Teknik UNSOED', period: 'Jul 2025 — Aug 2025', description: 'Designed event mechanisms and run-downs, assigned staff, monitored delivery, and aligned cross-team coordination.' }
  ]
};

const skills = [
  { title: 'UI/UX Design & Product', items: ['User Research', 'Wireframing & Prototyping', 'Design Thinking', 'Figma', 'Digital Product Advocacy'] },
  { title: 'IT Quality Assurance & Analytics', items: ['System Optimization', 'Process Improvement', 'Quality Control', 'SPSS · Minitab · Excel', 'Detail-Oriented Testing'] },
  { title: 'Software & Tech Foundations', items: ['HTML / CSS / JS Concepts', 'AI Productivity Tools', 'Google Gemini', 'System Analysis'] },
  { title: 'Project & Team Management', items: ['Agile / Scrum Mindset', 'Technical Documentation', 'Cross-functional Leadership', 'Event & Community Building'] }
];

const projectThumbnail = (title, accent = '#2E5AAC') => {
  const label = String(title).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0E2A52"/><stop offset="1" stop-color="${accent}"/></linearGradient><pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#C7D6EC" stroke-opacity=".22"/></pattern></defs><rect width="900" height="600" fill="url(#g)"/><rect width="900" height="600" fill="url(#grid)"/><rect x="48" y="48" width="804" height="504" fill="none" stroke="#C7D6EC" stroke-opacity=".55"/><text x="74" y="110" fill="#E8963A" font-family="monospace" font-size="18" letter-spacing="3">SELECTED PROJECT</text><path d="M74 145H826" stroke="#C7D6EC" stroke-opacity=".45"/><text x="74" y="298" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="42" font-weight="700" textLength="690" lengthAdjust="spacingAndGlyphs">${label}</text><text x="74" y="354" fill="#C7D6EC" font-family="monospace" font-size="17" letter-spacing="2">THUMBNAIL PLACEHOLDER</text><circle cx="800" cy="472" r="60" fill="none" stroke="#E8963A" stroke-width="3"/><circle cx="800" cy="472" r="30" fill="#E8963A"/></svg>`)}`;
};
const projects = [
  {
    id: 1, title: 'Interactive Web Portfolio Development', category: 'Software Engineering & UI/UX', group: 'Design', year: '2026', role: 'UI/UX DESIGNER',
    // TODO: ganti dengan screenshot asli project ini
    image: projectThumbnail('Interactive Web Portfolio Development'),
    description: 'Designed a responsive, modern portfolio experience with AI assistance, translating my career transition into a clear and engaging digital narrative.', problem: 'A standard PDF CV could not fully communicate my transition from Industrial Engineering into UI/UX, QA, and software-oriented roles.', solution: 'Applied user-centered content hierarchy, intentional whitespace, readable typography, and AI-assisted development to create a polished single-page portfolio.', results: 'Launched a professional digital presence that demonstrates my UI/UX thinking, product communication, and ability to use emerging tools responsibly.', technologies: ['UI/UX Design', 'Responsive Design', 'AI-Assisted Development', 'Product Thinking'], link: 'https://selma-portfolio-nu.vercel.app/'
  },
  {
    id: 2, title: 'Google Student Ambassador AI Initiative', category: 'Digital Product Advocacy', group: 'Advocacy', year: '2026', role: 'Google Student Ambassador',
    // TODO: ganti dengan screenshot asli project ini
    image: projectThumbnail('Google Student Ambassador AI Initiative', '#2E5AAC'),
    description: 'A digital campaign and community initiative promoting Google AI technologies and practical digital literacy for university students.', problem: 'University students needed more practical awareness of responsible AI use and the capabilities of Google Gemini.', solution: 'Created tailored educational content and initiated the #TeamGoogle campus community through discussions and sharing sessions.', results: 'Created 10+ AI-related content pieces; the highest-performing content reached 6.8K views and helped grow interest in Google AI tools on campus.', technologies: ['Google Gemini', 'User Adoption', 'Digital Literacy', 'Content Management'], link: 'https://www.instagram.com/sl.move?igsh=MTV2ZHlsbTdtY3Jv'
  },
  {
    id: 3, title: 'System Optimization Practicum Models', category: 'System Analysis & QA', group: 'Analysis', year: '2026', role: 'Teaching Assistant',
    // TODO: ganti dengan screenshot asli project ini
    image: projectThumbnail('System Optimization Practicum Models', '#E8963A'),
    description: 'Academic projects and laboratory assistance focused on modelling, simulating, and optimizing complex supply-chain and production systems.', problem: 'Operational processes can suffer from bottlenecks, inefficient allocation, and inconsistent evaluation methods.', solution: 'Used analytical tools to test scenarios, assess system performance, and propose optimized mathematical models.', results: 'Strengthened structured problem-solving, algorithmic thinking, and quality-minded system testing capabilities.', technologies: ['System Analysis', 'Quality Assurance', 'Data Analysis', 'Optimization Algorithms'], link: 'https://drive.google.com/drive/folders/1QNYB_1E4EuJOkm-rEFfdpP4xRIcXu2Wc?usp=sharing'
  },
  {
    id: 4, title: 'SIMBA+ Equipment Rental Platform', category: 'UI/UX Design & User Research', group: 'Design', year: '2025', role: 'UI/UX Designer',
    // TODO: ganti dengan screenshot asli project ini
    image: projectThumbnail('SIMBA+ Equipment Rental Platform', '#2563EB'),
    description: 'Collaborated in a team to design SIMBA+, an application connecting equipment owners and renters for a safe, transparent, and efficient digital economic ecosystem.', problem: 'Manual equipment rental is often complicated and lacks transparent information on item condition and pricing, weakening trust between owners and renters.', solution: 'Designed the end-to-end UI/UX flow, from wireframes to an interactive Figma prototype. Conducted structured UAT with nine respondents for navigation, search, and transaction flows.', results: 'Achieved 100% satisfaction on product transparency; 89% rated navigation highly intuitive and 89% found the MVP highly viable. Insights informed visual and role-clarity iterations.', technologies: ['Figma', 'UI/UX Design', 'User Acceptance Testing', 'Prototyping', 'Data Analysis'], actions: [{ label: 'Open Figma', link: 'https://www.figma.com/proto/7LSWQo1AbVTN8Z5LMVibnN/SIMBA-?node-id=0-1&t=pvCCVqX4x7rklRiB-1' }, { label: 'Project Report', link: 'https://drive.google.com/file/d/1OewDNWkZeYEOWTxmO2jZvwMythZdDKvf/view?usp=sharing' }]
  },
  {
    id: 5, title: 'ERP System Interface Design', category: 'UI/UX Design & Prototyping', group: 'Design', year: '2024', role: 'UI/UX Designer',
    // TODO: ganti dengan screenshot asli project ini
    image: projectThumbnail('ERP System Interface Design', '#0EA5E9'),
    description: 'Designed the interface for a comprehensive ERP system in a collaborative team project, structuring business data into a digestible visual format.', problem: 'ERP systems handle high volumes of data and complex processes; cluttered dashboards and confusing workflows can reduce employee productivity.', solution: 'Mapped clear user flows and built high-fidelity interactive Figma prototypes with clean module navigation and accessible data visualization.', results: 'Delivered a cohesive, functional UI prototype that integrates complex business modules and is ready for development handoff.', technologies: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'System Analysis'], actions: [{ label: 'Open Figma', link: 'https://www.figma.com/design/QIVlyffEj3EkULkrVeycgk/Untitled?node-id=0-1&p=f&t=b6kWpjAW2j2GG7Fd-0' }, { label: 'Blueprint', link: 'https://drive.google.com/file/d/1qrjoC4geNpUAPu42rwmX1lb6jOluGIEA/view?usp=sharing' }]
  },
  {
    id: 6, title: 'Exploratory Data Analysis', category: 'Data Analysis', group: 'Analysis', year: 'Selected work', role: 'Data Analyst',
    // TODO: ganti dengan screenshot asli project ini
    image: projectThumbnail('Exploratory Data Analysis', '#2E5AAC'),
    description: 'Performed end-to-end data preprocessing and exploratory data analysis (EDA) using Python in Google Colab to extract actionable business insights from raw datasets.', problem: 'Raw datasets are often unstructured and contain missing or inconsistent values, risking inaccurate conclusions and flawed strategies.', solution: 'Used Google Colab for systematic data wrangling, missing-value handling, anomaly cleaning, and statistical analysis to surface trends.', results: 'Transformed a messy dataset into a reliable source of truth and derived objective, data-driven recommendations for decision-making.', technologies: ['Python', 'Google Colab', 'Data Wrangling', 'EDA', 'Statistical Analysis'], resources: [{ title: 'SPSS & Minitab', description: 'Statistical analysis resource and documentation.', link: 'https://docs.google.com/document/d/1-fdH6NSdmYCJjOUY6Ufp6JJ2p6UO8yfs/edit?usp=sharing&ouid=104440254920293330833&rtpof=true&sd=true' }, { title: 'Excel Dashboard Project #1', description: 'Interactive dashboard built in Microsoft Excel for data visualization and reporting.', link: 'https://docs.google.com/spreadsheets/d/1kmlehcirtcYF9ccvEIgNAtAwtq-hSpDV/edit?usp=sharing&ouid=104440254920293330833&rtpof=true&sd=true' }, { title: 'Excel Dashboard Project #2', description: 'Business data analysis dashboard developed using Microsoft Excel.', link: 'https://docs.google.com/spreadsheets/d/1qxLqkjmRmNE9KbhpdAhR9lvVCuWbDvwy/edit?usp=sharing&ouid=104440254920293330833&rtpof=true&sd=true' }, { title: 'Google Colab Dashboard', description: 'Google Colab was used for data analysis and dashboard development.', link: 'https://drive.google.com/drive/folders/1C3_OoONUmeKr0tvwxX4Ts4o2jy14uAj2?usp=sharing' }]
  },
  {
    id: 7, title: 'Store Administration System', category: 'Data Management', group: 'Analysis', year: 'Selected work', role: 'Store Admin / Data Management',
    // TODO: ganti dengan screenshot asli project ini
    image: projectThumbnail('Store Administration System', '#5B6472'),
    description: 'Developed an integrated Excel system for retail operations, including dynamic employee scheduling, automated payroll calculations, and inventory tracking.', problem: 'Manual, disconnected processes for shifts, wages, and product records caused errors and slow end-of-month reporting.', solution: 'Created a centralized Excel data system with advanced formulas, organized product records, automatic payroll calculation, and Pivot Table dashboards.', results: 'Eliminated manual calculation errors, accelerated monthly payroll processing, and gave the store owner rapid, data-driven reports.', technologies: ['Microsoft Excel', 'Formulas & Automation', 'Pivot Tables', 'Reporting'], link: 'https://drive.google.com/drive/folders/1k7rAonmKl8vRQHBLEXI5d2XnR0NjZjD7?usp=sharing'
  }
];

const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const imageTag = project => `<img src="${project.image}" alt="${escapeHtml(project.title)} project preview" ${project.fallback ? `onerror="this.onerror=null;this.src='${project.fallback}'"` : ''}>`;

let activeExperience = 'work';
let activeFilter = 'All';
function renderExperience() {
  if (activeExperience === 'org') {
    document.getElementById('experience-list').innerHTML = `<section class="organization-subsection"><p class="organization-title">Organizational Experience</p><div class="organization-cards">${experience.org.map(item => `<article class="organization-card"><h3>${item.role}</h3><p>${item.company}</p></article>`).join('')}</div></section>`;
    return;
  }
  document.getElementById('experience-list').innerHTML = experience[activeExperience].map((item, index) => `
    <article class="experience-row"><span class="experience-number">0${index + 1}</span><div><h3 class="experience-role">${item.role}</h3><p class="experience-company">${item.company}</p></div><p class="experience-description">${item.description}</p><time class="experience-period">${item.period}</time></article>`).join('');
}
function renderSkills() {
  document.getElementById('skills-grid').innerHTML = skills.map((skill, index) => `<article class="skill-card"><span class="skill-number">0${index + 1} / 04</span><h3>${skill.title}</h3><div class="pills">${skill.items.map(item => `<span class="pill">${item}</span>`).join('')}</div></article>`).join('');
}
function renderProjects() {
  const filtered = activeFilter === 'All' ? projects : projects.filter(project => project.group === activeFilter);
  document.getElementById('project-count').textContent = `${filtered.length} project${filtered.length === 1 ? '' : 's'}`;
  document.getElementById('project-grid').innerHTML = filtered.map(project => `<article class="project-card" data-project="${project.id}" tabindex="0" aria-label="View details for ${escapeHtml(project.title)}"><div class="project-image">${imageTag(project)}<span>${project.year}</span></div><div class="project-info"><span class="project-category">${project.category}</span><h3>${project.title}</h3><p>${project.description}</p><div class="project-bottom"><span class="project-role">${project.role}</span><span class="view-project">View case study ↗</span></div></div></article>`).join('');
  document.querySelectorAll('.project-card').forEach(card => { card.addEventListener('click', () => openProject(Number(card.dataset.project))); card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(Number(card.dataset.project)); } }); });
}
function renderFilters() {
  const filters = ['All', 'Design', 'Analysis', 'Advocacy'];
  document.getElementById('project-filters').innerHTML = filters.map(filter => `<button class="filter ${filter === activeFilter ? 'active' : ''}" data-filter="${filter}">${filter === 'All' ? 'All projects' : filter}</button>`).join('');
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.filter; renderFilters(); renderProjects(); }));
}
function openProject(id) {
  const project = projects.find(item => item.id === id);
  const dialog = document.getElementById('project-dialog');
  const actions = project.actions || (project.link ? [{ label: 'Open project', link: project.link }] : []);
  const resources = project.resources ? `<section class="project-resources"><h3>Resources</h3><div>${project.resources.map(resource => `<a href="${resource.link}" target="_blank" rel="noreferrer"><strong>${resource.title}</strong><span>${resource.description}</span><b aria-hidden="true">↗</b></a>`).join('')}</div></section>` : '';
  document.getElementById('project-dialog-content').innerHTML = `<div class="modal-content"><span class="modal-index">${project.category} / ${project.year}</span><h2>${project.title}</h2><p class="modal-summary">${project.description}</p><div class="detail-grid"><div><h3>The challenge</h3><p>${project.problem}</p></div><div><h3>The solution</h3><p>${project.solution}</p></div><div><h3>Results & impact</h3><p>${project.results}</p></div></div>${resources}<div class="modal-actions">${actions.map((action, index) => `<a class="button ${index === 0 ? 'button-primary' : 'button-quiet'}" href="${action.link}" target="_blank" rel="noreferrer">${action.label} <span aria-hidden="true">↗</span></a>`).join('')}<span class="modal-tech">${project.technologies.join(' · ')}</span></div></div>`;
  dialog.showModal();
}

document.getElementById('year').textContent = new Date().getFullYear();
renderExperience(); renderSkills(); renderFilters(); renderProjects();

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => { activeExperience = tab.dataset.tab; document.querySelectorAll('.tab').forEach(item => { const isActive = item === tab; item.classList.toggle('active', isActive); item.setAttribute('aria-selected', isActive); }); renderExperience(); }));
document.querySelector('.modal-close').addEventListener('click', () => document.getElementById('project-dialog').close());
document.getElementById('project-dialog').addEventListener('click', event => { if (event.target === event.currentTarget) event.currentTarget.close(); });

const menuButton = document.getElementById('menu-button'); const mobileMenu = document.getElementById('mobile-menu');
menuButton.addEventListener('click', () => { const isOpen = mobileMenu.classList.toggle('open'); menuButton.classList.toggle('open', isOpen); menuButton.setAttribute('aria-expanded', isOpen); mobileMenu.setAttribute('aria-hidden', !isOpen); document.body.classList.toggle('menu-open', isOpen); });
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menuButton.click()));

let roleIndex = 0; const roleNode = document.getElementById('role-cycle');
setInterval(() => { roleNode.style.opacity = 0; setTimeout(() => { roleIndex = (roleIndex + 1) % profile.roles.length; roleNode.textContent = profile.roles[roleIndex]; roleNode.style.opacity = 1; }, 220); }, 2500); roleNode.style.transition = 'opacity .2s ease';

const toTop = document.getElementById('to-top'); const progress = document.getElementById('scroll-progress-bar'); const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => { const max = document.documentElement.scrollHeight - window.innerHeight; progress.style.width = `${max ? window.scrollY / max * 100 : 0}%`; toTop.classList.toggle('show', window.scrollY > 520); header.classList.toggle('scrolled', window.scrollY > 8); }, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.getElementById('copy-email').addEventListener('click', async () => { const button = document.getElementById('copy-email'); try { await navigator.clipboard.writeText(profile.email); button.innerHTML = 'Email copied <span aria-hidden="true">✓</span>'; setTimeout(() => button.innerHTML = 'Copy email <span aria-hidden="true">⧉</span>', 2000); } catch { window.location.href = `mailto:${profile.email}`; } });

const statObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting || entry.target.dataset.done) return; entry.target.dataset.done = 'true'; const target = Number(entry.target.dataset.count); const decimals = Number(entry.target.dataset.decimals || 0); const suffix = entry.target.dataset.suffix || ''; const start = performance.now(); const draw = now => { const progress = Math.min((now - start) / 950, 1); const eased = 1 - Math.pow(1 - progress, 3); entry.target.textContent = (target * eased).toFixed(decimals) + suffix; if (progress < 1) requestAnimationFrame(draw); }; requestAnimationFrame(draw); }), { threshold: .65 }); document.querySelectorAll('[data-count]').forEach(stat => statObserver.observe(stat));
