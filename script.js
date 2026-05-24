const categories = [
  {
    name: 'Residential',
    count: '12,458+',
    desc: 'Houses, units, apartments and rooms',
    color: '#1747f5',
    soft: 'rgba(23,71,245,.09)',
    icon: '<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M9.5 20v-6h5v6"/></svg>',
    filters: ['House', 'Apartment / Unit', 'Townhouse', 'Studio', 'Room', 'Pets allowed', 'Furnished']
  },
  {
    name: 'Commercial',
    count: '6,214+',
    desc: 'Offices, medical, showrooms and suites',
    color: '#0f9c72',
    soft: 'rgba(15,156,114,.1)',
    icon: '<svg viewBox="0 0 24 24"><path d="M4 21V8l8-4 8 4v13"/><path d="M9 21v-5h6v5"/><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>',
    filters: ['Office', 'Medical', 'Showroom', 'Consulting / Suite', 'Co-working', 'Parking', 'Lift']
  },
  {
    name: 'Industrial',
    count: '4,892+',
    desc: 'Warehouses, logistics and manufacturing',
    color: '#6b45dc',
    soft: 'rgba(107,69,220,.1)',
    icon: '<svg viewBox="0 0 24 24"><path d="M3 21h18V9l-5 3V9l-5 3V6H3z"/><path d="M7 21v-5h4v5M14 21v-5h4v5"/></svg>',
    filters: ['Warehouse', 'Distribution', 'Manufacturing', 'Storage', 'Container access', 'Truck access', 'Clear height']
  },
  {
    name: 'Retail',
    count: '2,731+',
    desc: 'Shops, centres, kiosks and pop-ups',
    color: '#b87418',
    soft: 'rgba(184,116,24,.1)',
    icon: '<svg viewBox="0 0 24 24"><path d="M6 8h12l1 13H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    filters: ['Shop / Retail Space', 'Kiosk', 'Food & Beverage', 'Large Format Retail', 'High foot traffic', 'Parking', 'Outdoor area']
  },
  {
    name: 'Rural',
    count: '1,246+',
    desc: 'Farms, grazing, orchards and vineyards',
    color: '#5f8d1d',
    soft: 'rgba(95,141,29,.11)',
    icon: '<svg viewBox="0 0 24 24"><path d="M20 4C9 4 4 9 4 20c10 0 16-5 16-16Z"/><path d="M4 20c4-7 8-10 14-13"/></svg>',
    filters: ['Cropping', 'Grazing', 'Mixed farming', 'Vineyard', 'Water access', 'Fencing', 'Sheds / Infrastructure']
  }
];

const listings = [
  { id: 1, category: 'Residential', type: 'House', title: 'Harbourlight Residence with City View', location: 'Toorak VIC 3142', price: 650, period: 'per week', views: 1245, status: 'Available', visual: 'penthouse-visual', image: 'assets/residence_living.jpg', gallery: ['assets/residence_living.jpg', 'assets/apartment_kitchen.jpg', 'assets/studio_room.jpg'], meta: ['3 Bed', '2 Bath', '2 Car'], agency: 'Elite Residential', desc: 'A calm, premium family residence with warm interiors, strong natural light and a modern floor plan.' },
  { id: 2, category: 'Residential', type: 'Apartment / Unit', title: 'Sleek Modern Inner-City Sanctuary', location: 'Fitzroy VIC 3065', price: 520, period: 'per week', views: 843, status: 'New', visual: 'penthouse-visual', image: 'assets/apartment_kitchen.jpg', gallery: ['assets/apartment_kitchen.jpg', 'assets/residence_living.jpg', 'assets/studio_room.jpg'], meta: ['2 Bed', '1 Bath', '1 Car'], agency: 'Apex Real Estate', desc: 'Bright apartment close to transport, cafes and lifestyle amenities.' },
  { id: 3, category: 'Commercial', type: 'Office', title: 'Executive High-Rise Corporate Office', location: 'Melbourne VIC 3000', price: 36000, period: 'p.a. + outgoings', views: 865, status: 'Featured', visual: 'office-visual', image: 'assets/office_exterior.jpg', gallery: ['assets/office_exterior.jpg', 'assets/office_interior.jpg', 'assets/medical_suite.jpg'], meta: ['120 m²', 'Parking', 'Lift'], agency: 'Commercial Core', desc: 'Premium office suite with flexible floor layout, reception zone and lift access.' },
  { id: 4, category: 'Commercial', type: 'Medical', title: 'Fitted Boutique Clinical & Medical Suite', location: 'Melbourne VIC 3004', price: 28500, period: 'p.a. + outgoings', views: 426, status: 'Available', visual: 'office-visual', image: 'assets/medical_suite.jpg', gallery: ['assets/medical_suite.jpg', 'assets/office_interior.jpg', 'assets/office_exterior.jpg'], meta: ['85 m²', 'Air conditioning', 'Parking'], agency: 'Care Properties', desc: 'A professional medical suite suitable for consultation rooms and allied health services.' },
  { id: 5, category: 'Industrial', type: 'Warehouse', title: 'State-Of-The-Art Logistics & Freight Depot', location: 'Truganina VIC 3029', price: 120000, period: 'p.a. + outgoings', views: 643, status: 'New', visual: 'warehouse-visual', image: 'assets/warehouse_front.jpg', gallery: ['assets/warehouse_front.jpg', 'assets/warehouse_loading.jpg', 'assets/industrial_yard.jpg'], meta: ['1,250 m² Building', '2,500 m² Land', 'Truck access'], agency: 'Industrial Elite', desc: 'Modern logistics warehouse with clear access, container handling and large hardstand potential.' },
  { id: 6, category: 'Industrial', type: 'Distribution', title: 'High Clearance Distribution Logistics Hub', location: 'Laverton North VIC 3026', price: 95000, period: 'p.a. + outgoings', views: 495, status: 'Available', visual: 'warehouse-visual', image: 'assets/warehouse_loading.jpg', gallery: ['assets/warehouse_loading.jpg', 'assets/warehouse_front.jpg', 'assets/industrial_yard.jpg'], meta: ['800 m² Building', '1,500 m² Land', 'Clear height'], agency: 'Metro Industrial', desc: 'High clearance distribution hub designed for efficient movement and storage.' },
  { id: 7, category: 'Retail', type: 'Shop / Retail Space', title: 'High-Traffic Westfield Food Mall Retail', location: 'Doncaster VIC 3108', price: 85000, period: 'p.a. + outgoings', views: 512, status: 'Available', visual: 'retail-visual', image: 'assets/retail_front.jpg', gallery: ['assets/retail_front.jpg', 'assets/retail_kiosk.jpg', 'assets/retail_restaurant.jpg'], meta: ['120 m²', 'High foot traffic', 'Parking'], agency: 'Retail Elite', desc: 'Strong retail exposure inside a high-footfall shopping environment.' },
  { id: 8, category: 'Retail', type: 'Kiosk', title: 'Fitted Transit Hub Coffee Kiosk Location', location: 'Melbourne VIC 3000', price: 45000, period: 'p.a. + outgoings', views: 318, status: 'New', visual: 'retail-visual', image: 'assets/retail_kiosk.jpg', gallery: ['assets/retail_kiosk.jpg', 'assets/retail_front.jpg', 'assets/retail_restaurant.jpg'], meta: ['60 m²', 'Food court nearby', 'Kiosk'], agency: 'Metro Retail', desc: 'Compact kiosk opportunity with steady pedestrian flow and fitted service area.' },
  { id: 9, category: 'Rural', type: 'Grazing', title: 'Extensive Grazing Outpost & Paddock', location: 'Deniliquin NSW 2710', price: 240000, period: 'p.a.', views: 315, status: 'Available', visual: 'rural-visual', image: 'assets/rural_homestead.jpg', gallery: ['assets/rural_homestead.jpg', 'assets/rural_field.jpg', 'assets/vineyard_rows.jpg'], meta: ['1,200 ha', 'Water licence', 'Fencing'], agency: 'AusRural Lands', desc: 'Large grazing property with water access, fencing and broad productive land.' },
  { id: 10, category: 'Rural', type: 'Vineyard', title: 'Prime Barossa Valley Vineyard & Wine Land', location: 'Tanunda SA 5352', price: 320000, period: 'p.a.', views: 520, status: 'Featured', visual: 'rural-visual', image: 'assets/vineyard_rows.jpg', gallery: ['assets/vineyard_rows.jpg', 'assets/rural_homestead.jpg', 'assets/rural_field.jpg'], meta: ['200 ha', 'Vineyard', 'Water access'], agency: 'Fine Wines Estate', desc: 'Premium vineyard lease opportunity positioned in one of Australia’s best-known wine regions.' },
  { id: 11, category: 'Commercial', type: 'Showroom', title: 'Corner Showroom with Premium Street Exposure', location: 'South Yarra VIC 3141', price: 42000, period: 'p.a. + outgoings', views: 630, status: 'Available', visual: 'office-visual', image: 'assets/office_interior.jpg', gallery: ['assets/office_interior.jpg', 'assets/office_exterior.jpg', 'assets/medical_suite.jpg'], meta: ['150 m²', 'Showroom', 'Parking'], agency: 'Prime Retail Core', desc: 'Light-filled showroom with prominent street frontage and flexible commercial use.' },
  { id: 12, category: 'Industrial', type: 'Storage', title: 'Industrial Work Storage Warehouse Facility', location: 'Thomastown VIC 3074', price: 75000, period: 'p.a. + outgoings', views: 185, status: 'Available', visual: 'warehouse-visual', image: 'assets/industrial_yard.jpg', gallery: ['assets/industrial_yard.jpg', 'assets/warehouse_front.jpg', 'assets/warehouse_loading.jpg'], meta: ['600 m²', '1,000 m² Land', 'Storage'], agency: 'Metro Industrial', desc: 'Practical storage warehouse with easy vehicle access and efficient loading capability.' }
];

let activeCategory = 'All';
let currentView = 'grid';
let saved = JSON.parse(localStorage.getItem('werentSavedExclusive') || '[]');
let workingListings = [...listings];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const categoryGrid = $('[data-category-grid]');
const filterCategory = $('#filterCategory');
const dynamicFilters = $('#dynamicFilters');
const listingGrid = $('#listingGrid');
const resultCount = $('#resultCount');
const resultMeta = $('#resultMeta');
const priceRange = $('#priceRange');
const priceValue = $('#priceValue');
const filterLocation = $('#filterLocation');
const sortSelect = $('#sortSelect');
const listingModal = $('#listingModal');
const modalContent = $('#modalContent');
const savedModal = $('#savedModal');
const savedContent = $('#savedContent');
const agentModal = $('#agentModal');
const adminTable = $('#adminTable');
const agentActivity = $('#agentActivity');

function formatPrice(value) {
  return Number(value).toLocaleString('en-AU');
}

function getCategory(name) {
  return categories.find(cat => cat.name === name);
}

function saveState() {
  localStorage.setItem('werentSavedExclusive', JSON.stringify(saved));
  updateSavedCount();
}

function updateSavedCount() {
  $('[data-saved-count]').textContent = saved.length;
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map(cat => `
    <article class="category-card ${activeCategory === cat.name ? 'active' : ''}" style="--accent:${cat.color};--accent-soft:${cat.soft}" data-category-card="${cat.name}">
      <div class="category-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${cat.desc}</p>
      <footer>
        <span>${cat.count} listings</span>
        <button type="button" aria-label="Browse ${cat.name}">→</button>
      </footer>
    </article>
  `).join('');
}

function renderFilterCategory() {
  filterCategory.innerHTML = `<option value="All">All sectors</option>` + categories.map(cat => `<option value="${cat.name}">${cat.name}</option>`).join('');
  filterCategory.value = activeCategory;
  renderDynamicFilters();
}

function renderDynamicFilters() {
  const selected = activeCategory === 'All' ? categories[0] : getCategory(activeCategory);
  dynamicFilters.innerHTML = `
    <strong>${selected.name} filters</strong>
    <div class="check-group">
      ${selected.filters.map((item, index) => `
        <label class="check-item">
          <input type="checkbox" value="${item}" data-dynamic-check ${index > 4 ? '' : ''} />
          <span>${item}</span>
        </label>
      `).join('')}
    </div>
  `;
  $$('[data-dynamic-check]').forEach(input => input.addEventListener('change', renderListings));
}

function filteredListings() {
  const location = filterLocation.value.trim().toLowerCase();
  const maxPrice = Number(priceRange.value);
  const checked = $$('[data-dynamic-check]:checked').map(input => input.value);

  let result = workingListings.filter(item => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const locationMatch = !location || item.location.toLowerCase().includes(location) || item.title.toLowerCase().includes(location);
    const priceMatch = item.price <= maxPrice;
    const checkMatch = checked.length === 0 || checked.some(filter => item.type === filter || item.meta.includes(filter));
    return categoryMatch && locationMatch && priceMatch && checkMatch;
  });

  const sort = sortSelect.value;
  if (sort === 'low') result.sort((a,b) => a.price - b.price);
  if (sort === 'high') result.sort((a,b) => b.price - a.price);
  if (sort === 'views') result.sort((a,b) => b.views - a.views);
  if (sort === 'newest') result.sort((a,b) => b.id - a.id);
  return result;
}

function renderListings() {
  const result = filteredListings();
  listingGrid.className = `listings-grid ${currentView === 'list' ? 'list-view' : ''}`;
  resultCount.textContent = `${result.length} ${result.length === 1 ? 'listing' : 'listings'} found`;
  resultMeta.textContent = activeCategory === 'All' ? 'Across all property sectors' : `${activeCategory} leasing results`;

  if (!result.length) {
    listingGrid.innerHTML = `<div class="listing-card"><div class="card-content"><h3>No listings found</h3><p class="location">Try clearing filters or changing your search location.</p></div></div>`;
    return;
  }

  listingGrid.innerHTML = result.map(item => `
    <article class="listing-card" data-id="${item.id}">
      <div class="property-visual ${item.visual}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
        <div class="visual-badge">${item.status}</div>
      </div>
      <div class="card-content">
        <div class="card-topline">
          <div class="price">$${formatPrice(item.price)} <small>${item.period}</small></div>
          <button class="save-btn ${saved.includes(item.id) ? 'active' : ''}" data-save="${item.id}" type="button" aria-label="Save ${item.title}">${saved.includes(item.id) ? '♥' : '♡'}</button>
        </div>
        <h3>${item.title}</h3>
        <p class="location">${item.location} • ${item.category}</p>
        <div class="meta">${item.meta.slice(0, 3).map(meta => `<span>${meta}</span>`).join('')}</div>
        <div class="card-footer">
          <span>${item.agency}</span>
          <button type="button" data-open-listing="${item.id}">View details →</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderModal(id) {
  const item = workingListings.find(listing => listing.id === Number(id));
  if (!item) return;
  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-gallery">
        <div class="property-visual ${item.visual}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
          <div class="visual-badge">${item.status}</div>
          <div class="visual-glass-card"><strong>$${formatPrice(item.price)} ${item.period}</strong><span>${item.meta.join(' • ')}</span></div>
        </div>
        <div class="modal-thumbs">
          ${(item.gallery || [item.image]).map((src, index) => `<div class="property-visual ${item.visual}"><img src="${src}" alt="${item.title} gallery image ${index + 1}" loading="lazy" decoding="async" /></div>`).join('')}
        </div>
      </div>
      <div class="modal-copy">
        <div class="eyebrow"><span></span>${item.category} ${item.type}</div>
        <h2>${item.title}</h2>
        <p><strong>${item.location}</strong></p>
        <p>${item.desc}</p>
        <div class="feature-list">
          ${item.meta.map(meta => `<span>${meta}</span>`).join('')}
          <span>Virtual tour ready</span><span>Printable floor plan</span><span>SEO schema</span>
        </div>
        <div class="modal-actions">
          <button type="button">Send enquiry</button>
          <button type="button">Print floor plan</button>
          <button type="button">Open virtual tour</button>
          <button type="button" data-save="${item.id}">${saved.includes(item.id) ? 'Saved ♥' : 'Save listing ♡'}</button>
        </div>
      </div>
    </div>
  `;
  listingModal.showModal();
}

function renderSaved() {
  const savedItems = workingListings.filter(item => saved.includes(item.id));
  savedContent.innerHTML = savedItems.length ? savedItems.map(item => `
    <div class="saved-item">
      <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
      <div><strong>${item.title}</strong><span>${item.location} • $${formatPrice(item.price)} ${item.period}</span></div>
      <button class="admin-action danger" type="button" data-save="${item.id}">Remove</button>
    </div>
  `).join('') : `<p class="location">No saved listings yet. Tap the heart icon on a listing to save it.</p>`;
}

function toggleSave(id) {
  const listingId = Number(id);
  saved = saved.includes(listingId) ? saved.filter(item => item !== listingId) : [...saved, listingId];
  saveState();
  renderListings();
  if (savedModal.open) renderSaved();
  if (listingModal.open) {
    const openId = $('.listing-card:hover')?.dataset.id;
  }
}

function renderAdmin() {
  adminTable.innerHTML = workingListings.slice(0, 7).map(item => `
    <div class="admin-row">
      <div><strong>${item.title}</strong><span>${item.location}</span></div>
      <span>${item.category}</span>
      <span>${item.status}</span>
      <div class="admin-actions">
        <button class="admin-action success" type="button" data-admin="approve" data-id="${item.id}">Approve</button>
        <button class="admin-action" type="button" data-admin="feature" data-id="${item.id}">Feature</button>
        <button class="admin-action danger" type="button" data-admin="remove" data-id="${item.id}">Remove</button>
      </div>
    </div>
  `).join('');
}

function renderAgentActivity() {
  const recent = workingListings.slice(0, 5);
  agentActivity.innerHTML = recent.map(item => `
    <div class="activity-row">
      <img class="activity-thumb" src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
      <div><strong>${item.title}</strong><span>${item.views} views • ${item.status}</span></div>
      <small>$${formatPrice(item.price)}</small>
    </div>
  `).join('');
}

function updatePriceLabel() {
  const value = Number(priceRange.value);
  priceValue.textContent = value >= 150000 ? 'Any' : `$${formatPrice(value)}`;
}

function setCategory(category) {
  activeCategory = category;
  filterCategory.value = category;
  renderCategories();
  renderDynamicFilters();
  renderListings();
  document.getElementById('listings').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initEvents() {
  $('.mobile-toggle').addEventListener('click', function() {
    const nav = $('[data-nav]');
    const actions = $('.nav-actions');
    nav.classList.toggle('open');
    actions.classList.toggle('open');
    this.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  document.addEventListener('click', event => {
    const categoryCard = event.target.closest('[data-category-card]');
    if (categoryCard) setCategory(categoryCard.dataset.categoryCard);

    const saveButton = event.target.closest('[data-save]');
    if (saveButton) toggleSave(saveButton.dataset.save);

    const detailButton = event.target.closest('[data-open-listing]');
    if (detailButton) renderModal(detailButton.dataset.openListing);

    const adminButton = event.target.closest('[data-admin]');
    if (adminButton) {
      const id = Number(adminButton.dataset.id);
      const action = adminButton.dataset.admin;
      if (action === 'remove') workingListings = workingListings.filter(item => item.id !== id);
      if (action === 'feature') workingListings = workingListings.map(item => item.id === id ? {...item, status: 'Featured'} : item);
      if (action === 'approve') workingListings = workingListings.map(item => item.id === id ? {...item, status: 'Available'} : item);
      renderAdmin(); renderAgentActivity(); renderListings();
    }
  });

  $$('.modal-close').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()));

  filterCategory.addEventListener('change', () => {
    activeCategory = filterCategory.value;
    renderCategories(); renderDynamicFilters(); renderListings();
  });
  filterLocation.addEventListener('input', renderListings);
  sortSelect.addEventListener('change', renderListings);
  priceRange.addEventListener('input', () => { updatePriceLabel(); renderListings(); });
  $('#clearFilters').addEventListener('click', () => {
    activeCategory = 'All';
    filterCategory.value = 'All';
    filterLocation.value = '';
    priceRange.value = 150000;
    updatePriceLabel(); renderCategories(); renderDynamicFilters(); renderListings();
  });

  $$('.view-switch button').forEach(button => {
    button.addEventListener('click', () => {
      $$('.view-switch button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentView = button.dataset.view;
      renderListings();
    });
  });

  $$('.console-tabs button').forEach(button => {
    button.addEventListener('click', () => {
      $$('.console-tabs button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  $('#heroSearch').addEventListener('click', () => {
    activeCategory = $('#heroCategory').value;
    filterCategory.value = activeCategory;
    filterLocation.value = $('#heroLocation').value;
    priceRange.value = $('#heroMax').value === '999999' ? 150000 : $('#heroMax').value;
    updatePriceLabel();
    renderCategories(); renderDynamicFilters(); renderListings();
    $('#listings').scrollIntoView({ behavior: 'smooth' });
  });

  $('[data-open-saved]').addEventListener('click', () => { renderSaved(); savedModal.showModal(); });
  $('[data-open-agent-modal]').addEventListener('click', () => agentModal.showModal());
  $('#openFirstListing').addEventListener('click', () => renderModal(workingListings[0]?.id || 1));

  $('#agentForm').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const category = formData.get('category');
    const visualMap = { Residential: 'penthouse-visual', Commercial: 'office-visual', Industrial: 'warehouse-visual', Retail: 'retail-visual', Rural: 'rural-visual' };
    const imageMap = { Residential: 'assets/residence_living.jpg', Commercial: 'assets/office_exterior.jpg', Industrial: 'assets/warehouse_front.jpg', Retail: 'assets/retail_front.jpg', Rural: 'assets/rural_homestead.jpg' };
    const galleryMap = {
      Residential: ['assets/residence_living.jpg', 'assets/apartment_kitchen.jpg', 'assets/studio_room.jpg'],
      Commercial: ['assets/office_exterior.jpg', 'assets/office_interior.jpg', 'assets/medical_suite.jpg'],
      Industrial: ['assets/warehouse_front.jpg', 'assets/warehouse_loading.jpg', 'assets/industrial_yard.jpg'],
      Retail: ['assets/retail_front.jpg', 'assets/retail_kiosk.jpg', 'assets/retail_restaurant.jpg'],
      Rural: ['assets/rural_homestead.jpg', 'assets/rural_field.jpg', 'assets/vineyard_rows.jpg']
    };
    const newItem = {
      id: Date.now(),
      category,
      type: category === 'Residential' ? 'House' : category === 'Commercial' ? 'Office' : category === 'Industrial' ? 'Warehouse' : category === 'Retail' ? 'Shop / Retail Space' : 'Grazing',
      title: formData.get('title'),
      location: formData.get('location'),
      price: Number(formData.get('price')),
      period: category === 'Residential' ? 'per week' : 'p.a. + outgoings',
      views: 0,
      status: 'Pending',
      visual: visualMap[category],
      image: imageMap[category],
      gallery: galleryMap[category],
      meta: category === 'Residential' ? ['2 Bed', '1 Bath', '1 Car'] : ['120 m²', 'Verified', 'New listing'],
      agency: 'Demo Agent',
      desc: formData.get('description') || 'New demo listing created from the static agent dashboard form.'
    };
    workingListings = [newItem, ...workingListings];
    event.currentTarget.reset();
    agentModal.close();
    renderListings(); renderAdmin(); renderAgentActivity();
    $('#listings').scrollIntoView({ behavior: 'smooth' });
  });
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  $$('.reveal').forEach(item => observer.observe(item));
}

function init() {
  renderCategories();
  renderFilterCategory();
  updatePriceLabel();
  updateSavedCount();
  renderListings();
  renderAdmin();
  renderAgentActivity();
  initEvents();
  initReveal();
}

document.addEventListener('DOMContentLoaded', init);
