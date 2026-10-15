// FindIt - Everyday Physical Memory
// Standard Vanilla PWA Engine

const ITEMS_KEY = 'spatialcache_items_v1';
const ROOMS_KEY = 'spatialcache_rooms_v1';

const INITIAL_ROOMS = [
  {
    id: 'hallway-closet',
    name: 'Hallway Closet',
    icon: 'archive',
    description: 'Utility & linen storage near front entryway',
    commonZones: ['Top Shelf', 'Middle Wire Rack', 'Floor Storage', 'Coat Rack Hooks'],
  },
  {
    id: 'garage-workshop',
    name: 'Garage & Workshop',
    icon: 'wrench',
    description: 'Heavy tools, sports gear, car care, and seasonal bins',
    commonZones: ['Work Bench Pegboard', 'Metal Rack Shelf 2', 'Overhead Bins', 'Tool Chest Drawer 3'],
  },
  {
    id: 'home-office',
    name: 'Home Office',
    icon: 'briefcase',
    description: 'Work station, filing cabinet, and tech accessories',
    commonZones: ['Filing Cabinet Top Drawer', 'Desk Right Drawer', 'Cable Organizer Box', 'Bookshelf Row 2'],
  },
  {
    id: 'master-bedroom',
    name: 'Master Bedroom',
    icon: 'bed',
    description: 'Personal storage, nightstands, and walk-in wardrobe',
    commonZones: ['Nightstand Bottom Drawer', 'Closet High Shelf', 'Dresser Top Valet Tray', 'Underbed Box'],
  },
  {
    id: 'kitchen-pantry',
    name: 'Kitchen & Pantry',
    icon: 'utensils',
    description: 'Appliances, emergency consumables, and pantry supplies',
    commonZones: ['Pantry Top Shelf', 'Under-Sink Caddy', 'Island Spice Drawer', 'Appliance Cupboard'],
  },
  {
    id: 'living-room',
    name: 'Living Room',
    icon: 'tv',
    description: 'Entertainment console, side tables, and lounge shelves',
    commonZones: ['TV Media Console - Center', 'Side Table Drawer', 'Display Credenza', 'Entryway Catchall Bowl'],
  },
];

const INITIAL_ITEMS = [
  {
    id: 'item-1',
    name: 'Passports & International Immunization Cards',
    category: 'Documents & Valuables',
    location: {
      room: 'Master Bedroom',
      zone: 'Closet High Shelf',
      container: 'Grey Fireproof Document Box #1',
      landmark: 'Tucked behind the extra winter duvet, on the far left corner',
    },
    description: 'Blue passports for family and yellow vaccination certificates.',
    tags: ['passport', 'travel', 'id', 'documents', 'identification'],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-10-02T10:15:00.000Z',
    createdAt: '2026-08-10T08:00:00.000Z',
  },
  {
    id: 'item-2',
    name: 'Rechargeable AA & AAA Batteries (Eneloop)',
    category: 'Electronics & Cables',
    location: {
      room: 'Hallway Closet',
      zone: 'Middle Wire Rack',
      container: 'Clear Acrylic Divided Bin #3',
      landmark: 'Next to the lightbulb box, labeled "Batteries & Chargers"',
    },
    description: 'Pre-charged batteries plus 4-slot smart wall charger.',
    tags: ['batteries', 'aa', 'aaa', 'power', 'remotes', 'toys'],
    lent: { isLent: false },
    consumable: {
      isConsumable: true,
      quantity: 3,
      unit: 'batteries',
      minThreshold: 4,
    },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-10T14:22:00.000Z',
    createdAt: '2026-08-12T09:30:00.000Z',
  },
  {
    id: 'item-3',
    name: 'DeWalt 20V Cordless Drill & Drill Bit Kit',
    category: 'Tools & Hardware',
    location: {
      room: 'Garage & Workshop',
      zone: 'Work Bench Pegboard',
      container: 'Yellow Hard Shell Case',
      landmark: 'Middle shelf under the main pegboard workbench',
    },
    description: 'Cordless brushless hammer drill with two 4Ah batteries and rapid charger.',
    tags: ['drill', 'dewalt', 'tools', 'screws', 'hardware'],
    lent: {
      isLent: true,
      lentTo: 'Dave Miller (Next Door Neighbor)',
      lentDate: '2026-09-28',
      expectedReturn: '2026-10-18',
      notes: 'Borrowed for fixing his rear wooden fence gate.',
    },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-09-28T16:00:00.000Z',
    createdAt: '2026-07-01T11:00:00.000Z',
  },
  {
    id: 'item-4',
    name: 'Emergency First Aid Kit & Antihistamines',
    category: 'Health & Medication',
    location: {
      room: 'Kitchen & Pantry',
      zone: 'Pantry Top Shelf',
      container: 'Red Cross Zippered Soft Bag',
      landmark: 'Eye level on the right wall of the pantry, next to the dry cereal boxes',
    },
    description: 'Sterile bandages, antiseptic spray, burn gel, EpiPen, and allergy medication.',
    tags: ['first aid', 'bandages', 'medicine', 'emergency', 'allergy'],
    lent: { isLent: false },
    consumable: {
      isConsumable: true,
      quantity: 1,
      unit: 'kit',
      minThreshold: 1,
    },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-12T08:30:00.000Z',
    createdAt: '2026-06-15T12:00:00.000Z',
  },
  {
    id: 'item-5',
    name: 'Digital Tire Pressure Gauge & Portable Inflator',
    category: 'Tools & Hardware',
    location: {
      room: 'Garage & Workshop',
      zone: 'Tool Chest Drawer 3',
      container: 'Black Padded Zipper Sleeve',
      landmark: 'Third drawer down of the red Craftsman tool chest',
    },
    description: 'Backlit tire gauge reading up to 150 PSI, with valve stem caps.',
    tags: ['car', 'tires', 'gauge', 'pressure', 'automotive'],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-10-05T17:45:00.000Z',
    createdAt: '2026-08-01T15:20:00.000Z',
  },
  {
    id: 'item-6',
    name: 'USB-C to HDMI 4K Display Adapter & Ethernet Dongle',
    category: 'Electronics & Cables',
    location: {
      room: 'Home Office',
      zone: 'Desk Right Drawer',
      container: 'Mesh Zipper Travel Pouch',
      landmark: 'Top front organizer tray alongside spare flash drives',
    },
    description: 'Anker multiport hub with 4K HDMI, Gigabit LAN, and 100W PD charging.',
    tags: ['usb-c', 'hdmi', 'adapter', 'dongle', 'cable', 'monitor'],
    lent: { isLent: false },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-13T09:10:00.000Z',
    createdAt: '2026-08-20T10:00:00.000Z',
  },
  {
    id: 'item-7',
    name: 'Spare Car Key Fob & Garden Shed Padlock Key',
    category: 'Documents & Valuables',
    location: {
      room: 'Living Room',
      zone: 'Entryway Catchall Bowl',
      container: 'Small Leather Key Pouch',
      landmark: 'Inside the ceramic bowl on the wooden entryway console table',
    },
    description: 'Secondary electronic fob for Subaru Outback + brass key marked "SHED".',
    tags: ['keys', 'car', 'shed', 'lock', 'spare', 'fob'],
    lent: { isLent: false },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-14T07:00:00.000Z',
    createdAt: '2026-09-01T08:00:00.000Z',
  },
  {
    id: 'item-8',
    name: 'Water Filter Pitcher Replacement Cartridges (Brita)',
    category: 'Household & Cleaning',
    location: {
      room: 'Kitchen & Pantry',
      zone: 'Under-Sink Caddy',
      container: 'Cardboard Box (Pack of 3)',
      landmark: 'Left side caddy behind the dishwashing pods',
    },
    description: 'Standard Brita replacement filters for 10-cup pitcher.',
    tags: ['water', 'filter', 'brita', 'kitchen', 'clean'],
    lent: { isLent: false },
    consumable: {
      isConsumable: true,
      quantity: 1,
      unit: 'filters',
      minThreshold: 2,
    },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-09-15T19:00:00.000Z',
    createdAt: '2026-07-20T14:00:00.000Z',
  },
  {
    id: 'item-9',
    name: 'Heavy Duty 50-Foot Outdoor Extension Cord',
    category: 'Tools & Hardware',
    location: {
      room: 'Garage & Workshop',
      zone: 'Overhead Bins',
      container: 'Orange Cable Caddy Wheel',
      landmark: 'Hanging from the wall hook next to the garden hose reel',
    },
    description: '12-gauge 3-prong water resistant orange extension cord.',
    tags: ['cable', 'power', 'outdoor', 'extension', 'yard'],
    lent: {
      isLent: true,
      lentTo: 'Carlos (Brother-in-law)',
      lentDate: '2026-10-01',
      expectedReturn: '2026-10-20',
      notes: 'Lent for weekend lawn aeration project.',
    },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-10-01T11:30:00.000Z',
    createdAt: '2026-06-10T16:00:00.000Z',
  },
  {
    id: 'item-10',
    name: 'Thermal Winter Gloves & Wool Beanies',
    category: 'Seasonal & Apparel',
    location: {
      room: 'Hallway Closet',
      zone: 'Top Shelf',
      container: 'Fabric Storage Cube #1',
      landmark: 'Far left fabric cube marked "Winter Accessories"',
    },
    description: 'Gore-Tex ski mittens, 2 merino wool beanies, and neck gaiter.',
    tags: ['gloves', 'winter', 'beanie', 'cold', 'snow', 'clothes'],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-09-02T13:00:00.000Z',
    createdAt: '2026-05-15T10:00:00.000Z',
  },
  {
    id: 'item-11',
    name: 'Wi-Fi Router Backup Password & Modem Reset Pin',
    category: 'Office & Stationery',
    location: {
      room: 'Living Room',
      zone: 'TV Media Console - Center',
      container: 'Back Cable Management Tray',
      landmark: 'Laminated card taped to the underside of the main router shelf',
    },
    description: 'Guest SSID: "HavenHome_Guest", Password: "WelcomeQuietStay26!" plus needle pin for hardware reset.',
    tags: ['wifi', 'internet', 'router', 'password', 'tech', 'network'],
    lent: { isLent: false },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-11T12:00:00.000Z',
    createdAt: '2026-08-05T09:00:00.000Z',
  },
  {
    id: 'item-12',
    name: 'Telescopic Aluminum Step Ladder (12.5 ft)',
    category: 'Tools & Hardware',
    location: {
      room: 'Garage & Workshop',
      zone: 'Metal Rack Shelf 2',
      container: 'Folded upright against wall',
      landmark: 'Secured with black bungee cord to the side of the metal rack',
    },
    description: 'ANSI certified compact collapsible ladder.',
    tags: ['ladder', 'tools', 'climbing', 'painting', 'garage'],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-09-30T10:00:00.000Z',
    createdAt: '2026-07-15T14:00:00.000Z',
  },
];

const CATEGORIES = [
  'All',
  'Tools & Hardware',
  'Electronics & Cables',
  'Documents & Valuables',
  'Health & Medication',
  'Kitchen & Pantry',
  'Household & Cleaning',
  'Seasonal & Apparel',
  'Office & Stationery',
  'Miscellaneous',
];

// App State
const state = {
  items: [],
  rooms: [],
  searchQuery: '',
  selectedCategory: 'All',
  filterLentOnly: false,
  filterLowStockOnly: false,
  filterGuestOnly: false,
  viewMode: 'grid', // 'grid' | 'rooms' | 'lending'
  editingItemId: null,
  spotCheckItems: [],
  spotCheckCurrentIndex: 0,
  deferredInstallPrompt: null,
};

// Storage Helpers
function loadData() {
  try {
    const rawItems = localStorage.getItem(ITEMS_KEY);
    state.items = rawItems ? JSON.parse(rawItems) : INITIAL_ITEMS;
    if (!rawItems) localStorage.setItem(ITEMS_KEY, JSON.stringify(INITIAL_ITEMS));

    const rawRooms = localStorage.getItem(ROOMS_KEY);
    state.rooms = rawRooms ? JSON.parse(rawRooms) : INITIAL_ROOMS;
    if (!rawRooms) localStorage.setItem(ROOMS_KEY, JSON.stringify(INITIAL_ROOMS));
  } catch (err) {
    console.error('Failed to load from storage:', err);
    state.items = INITIAL_ITEMS;
    state.rooms = INITIAL_ROOMS;
  }
}

function saveItems() {
  localStorage.setItem(ITEMS_KEY, JSON.stringify(state.items));
}

function saveRooms() {
  localStorage.setItem(ROOMS_KEY, JSON.stringify(state.rooms));
}

// Toast helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'bg-stone-900 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-medium flex items-center gap-2 border border-stone-800 transition-all transform duration-200';
  toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0"></i><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  lucide.createIcons();
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Compute Freshness Stats
function getAccuracyStats() {
  if (state.items.length === 0) return { pct: 100, fresh: 0, stale: 0 };
  const now = Date.now();
  let fresh = 0;
  state.items.forEach((item) => {
    const days = Math.floor((now - new Date(item.lastVerifiedAt).getTime()) / (1000 * 60 * 60 * 24));
    if (days <= 30) fresh++;
  });
  const stale = state.items.length - fresh;
  const pct = Math.round((fresh / state.items.length) * 100);
  return { pct, fresh, stale };
}

// Filtering items
function getFilteredItems() {
  const q = state.searchQuery.toLowerCase().trim();
  const normalizedQuery = q
    .replace(/^(where\s+(?:is|are|did\s+i\s+put|can\s+i\s+find)\s+(?:the|my|a|an)?\s*)/i, '')
    .trim();

  return state.items.filter((item) => {
    if (state.selectedCategory !== 'All' && item.category !== state.selectedCategory) {
      return false;
    }
    if (state.filterLentOnly && !item.lent.isLent) {
      return false;
    }
    if (state.filterLowStockOnly) {
      const isLow = item.consumable?.isConsumable && (item.consumable.quantity ?? 0) <= (item.consumable.minThreshold ?? 0);
      if (!isLow) return false;
    }
    if (state.filterGuestOnly && !item.isEssentialForGuests) {
      return false;
    }

    if (normalizedQuery) {
      const fullSearchHaystack = [
        item.name,
        item.description || '',
        item.category,
        item.location.room,
        item.location.zone,
        item.location.container || '',
        item.location.landmark || '',
        item.lent.lentTo || '',
        ...(item.tags || []),
      ]
        .join(' ')
        .toLowerCase();

      const words = normalizedQuery.split(/\s+/);
      return words.every((w) => fullSearchHaystack.includes(w)) || fullSearchHaystack.includes(normalizedQuery);
    }
    return true;
  });
}

// Render Functions
function renderApp() {
  renderHealthBanner();
  renderCategoryPills();
  renderCounters();
  renderMainView();
  lucide.createIcons();
}

function renderHealthBanner() {
  const { pct, fresh, stale } = getAccuracyStats();
  const bannerPct = document.getElementById('stat-confidence-pct');
  const bannerCounts = document.getElementById('stat-counts');
  const bannerIcon = document.getElementById('stat-icon');

  if (bannerPct) bannerPct.textContent = `${pct}% Physical Accuracy Confidence`;
  if (bannerCounts) bannerCounts.textContent = `${fresh} fresh, ${stale} stale`;
  if (bannerIcon) {
    bannerIcon.className = `w-5 h-5 ${pct >= 80 ? 'text-emerald-600' : 'text-amber-600'}`;
  }
}

function renderCategoryPills() {
  const container = document.getElementById('category-pills');
  if (!container) return;

  container.innerHTML = CATEGORIES.map((cat) => {
    const isSelected = state.selectedCategory === cat;
    return `
      <button
        onclick="selectCategory('${cat}')"
        class="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
          isSelected
            ? 'bg-stone-900 text-white shadow-2xs'
            : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
        }"
      >
        ${cat}
      </button>
    `;
  }).join('');
}

function renderCounters() {
  const lentCount = state.items.filter((i) => i.lent && i.lent.isLent).length;
  const lowCount = state.items.filter(
    (i) => i.consumable?.isConsumable && (i.consumable.quantity ?? 0) <= (i.consumable.minThreshold ?? 0)
  ).length;

  const lentBadge = document.getElementById('badge-lent-count');
  const lowBadge = document.getElementById('badge-low-count');

  if (lentBadge) {
    lentBadge.textContent = lentCount;
    lentBadge.style.display = lentCount > 0 ? 'inline-flex' : 'none';
  }
  if (lowBadge) {
    lowBadge.textContent = lowCount;
    lowBadge.style.display = lowCount > 0 ? 'inline-flex' : 'none';
  }

  // Update button active state classes
  const btnLent = document.getElementById('filter-btn-lent');
  const btnLow = document.getElementById('filter-btn-low');
  const btnGuest = document.getElementById('filter-btn-guest');

  if (btnLent) {
    btnLent.className = `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
      state.filterLentOnly ? 'bg-amber-100 border-amber-300 text-amber-900' : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
    }`;
  }
  if (btnLow) {
    btnLow.className = `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
      state.filterLowStockOnly ? 'bg-red-100 border-red-300 text-red-900' : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
    }`;
  }
  if (btnGuest) {
    btnGuest.className = `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
      state.filterGuestOnly ? 'bg-emerald-100 border-emerald-300 text-emerald-900' : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
    }`;
  }
}

function renderMainView() {
  const container = document.getElementById('main-content-view');
  if (!container) return;

  // View switch tab styles
  const btnGrid = document.getElementById('view-tab-grid');
  const btnRooms = document.getElementById('view-tab-rooms');
  const btnLending = document.getElementById('view-tab-lending');

  if (btnGrid) btnGrid.className = `px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${state.viewMode === 'grid' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-900'}`;
  if (btnRooms) btnRooms.className = `px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${state.viewMode === 'rooms' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-900'}`;
  if (btnLending) btnLending.className = `px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${state.viewMode === 'lending' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-900'}`;

  if (state.viewMode === 'grid') {
    renderGridView(container);
  } else if (state.viewMode === 'rooms') {
    renderRoomsView(container);
  } else if (state.viewMode === 'lending') {
    renderLendingView(container);
  }
}

function renderGridView(container) {
  const filtered = getFilteredItems();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-12 text-center bg-white rounded-xl border border-stone-200 space-y-3">
        <i data-lucide="search" class="w-8 h-8 text-stone-400 mx-auto"></i>
        <h3 class="text-sm font-semibold text-stone-900">No matching items found</h3>
        <p class="text-xs text-stone-500 max-w-sm mx-auto">
          We couldn't locate anything matching "${escapeHtml(state.searchQuery)}". Try searching by container, room name, or index it now!
        </p>
        <button
          onclick="openQuickAddModal()"
          class="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
        >
          <i data-lucide="plus" class="w-4 h-4 text-amber-400"></i>
          <span>Index this item</span>
        </button>
      </div>
    `;
    return;
  }

  const itemsHtml = filtered.map((item) => renderItemCardHtml(item)).join('');

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between text-xs text-stone-500 px-1">
        <span>
          Showing <strong>${filtered.length}</strong> of ${state.items.length} items
          ${state.searchQuery ? ` matching "${escapeHtml(state.searchQuery)}"` : ''}
        </span>
        ${
          state.searchQuery || state.selectedCategory !== 'All' || state.filterLentOnly || state.filterLowStockOnly || state.filterGuestOnly
            ? `<button onclick="clearAllFilters()" class="text-stone-700 hover:underline cursor-pointer">Clear all filters</button>`
            : ''
        }
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${itemsHtml}
      </div>
    </div>
  `;
}

function renderItemCardHtml(item) {
  const now = Date.now();
  const daysSince = Math.floor((now - new Date(item.lastVerifiedAt).getTime()) / (1000 * 60 * 60 * 24));
  const isStale = daysSince > 30;

  const isLowConsumable =
    item.consumable?.isConsumable &&
    (item.consumable.quantity ?? 0) <= (item.consumable.minThreshold ?? 0);

  return `
    <div class="bg-white rounded-xl border border-stone-200 p-4 flex flex-col justify-between card-hover relative">
      <div class="space-y-3">
        <!-- Top Metadata Row -->
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-[11px] font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                ${escapeHtml(item.category)}
              </span>
              ${
                item.isEssentialForGuests
                  ? `<span class="text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                      <i data-lucide="key" class="w-3 h-3"></i> Guest Safe
                    </span>`
                  : ''
              }
            </div>
            <h4 class="text-sm font-semibold text-stone-900 mt-1">${escapeHtml(item.name)}</h4>
          </div>

          <!-- Stale/Fresh Indicator Badge -->
          <button
            onclick="verifyLocation('${item.id}')"
            title="Click to confirm physical location"
            class="shrink-0 flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium cursor-pointer transition-colors ${
              isStale
                ? 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
            }"
          >
            <i data-lucide="${isStale ? 'alert-triangle' : 'check-circle'}" class="w-3.5 h-3.5"></i>
            <span>${isStale ? `${daysSince}d stale` : 'Verified'}</span>
          </button>
        </div>

        <!-- Spatial Coordinates -->
        <div class="bg-stone-50 rounded-lg p-2.5 border border-stone-100 space-y-1.5 text-xs">
          <div class="flex items-center gap-1.5 text-stone-800 font-semibold">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-stone-500 shrink-0"></i>
            <span>${escapeHtml(item.location.room)}</span>
            <span class="text-stone-300">/</span>
            <span class="text-stone-700 font-normal">${escapeHtml(item.location.zone)}</span>
          </div>

          ${
            item.location.container
              ? `<div class="flex items-center gap-1.5 text-stone-600 pl-5">
                  <i data-lucide="box" class="w-3 h-3 text-stone-400 shrink-0"></i>
                  <span>${escapeHtml(item.location.container)}</span>
                </div>`
              : ''
          }

          ${
            item.location.landmark
              ? `<div class="text-[11px] text-stone-500 italic pl-5">
                  &ldquo;${escapeHtml(item.location.landmark)}&rdquo;
                </div>`
              : ''
          }
        </div>

        ${
          item.description
            ? `<p class="text-xs text-stone-600 line-clamp-2">${escapeHtml(item.description)}</p>`
            : ''
        }

        <!-- Lent Status Banner if lent -->
        ${
          item.lent.isLent
            ? `<div class="bg-amber-50 border border-amber-200 rounded-lg p-2 text-xs flex items-center justify-between text-amber-900">
                <div class="flex items-center gap-1.5">
                  <i data-lucide="share-2" class="w-3.5 h-3.5 text-amber-600"></i>
                  <span>Lent to <strong>${escapeHtml(item.lent.lentTo || 'Someone')}</strong></span>
                </div>
                <button
                  onclick="toggleLentStatus('${item.id}')"
                  class="text-[11px] underline hover:text-amber-950 font-semibold cursor-pointer"
                >
                  Return
                </button>
              </div>`
            : ''
        }

        <!-- Consumable quantity tracker if applicable -->
        ${
          item.consumable?.isConsumable
            ? `<div class="flex items-center justify-between bg-stone-50 rounded-lg p-2 border border-stone-100 text-xs">
                <div class="flex items-center gap-1.5">
                  <span class="text-stone-600">Stock:</span>
                  <strong class="${isLowConsumable ? 'text-red-600' : 'text-stone-800'}">
                    ${item.consumable.quantity} ${escapeHtml(item.consumable.unit || 'units')}
                  </strong>
                  ${
                    isLowConsumable
                      ? `<span class="bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Low</span>`
                      : ''
                  }
                </div>
                <div class="flex items-center gap-1">
                  <button
                    onclick="changeItemQuantity('${item.id}', -1)"
                    class="w-6 h-6 rounded bg-white border border-stone-200 hover:bg-stone-100 flex items-center justify-center text-xs font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <button
                    onclick="changeItemQuantity('${item.id}', 1)"
                    class="w-6 h-6 rounded bg-white border border-stone-200 hover:bg-stone-100 flex items-center justify-center text-xs font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>`
            : ''
        }
      </div>

      <!-- Action Footer -->
      <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <div class="flex items-center gap-2">
          <button
            onclick="toggleLentStatus('${item.id}')"
            class="hover:text-stone-800 cursor-pointer flex items-center gap-1 text-[11px]"
            title="${item.lent.isLent ? 'Mark item as returned' : 'Record lending this item'}"
          >
            <i data-lucide="share-2" class="w-3.5 h-3.5"></i>
            <span>${item.lent.isLent ? 'Return' : 'Lend'}</span>
          </button>
        </div>

        <div class="flex items-center gap-3">
          <button
            onclick="editItem('${item.id}')"
            class="hover:text-stone-800 cursor-pointer flex items-center gap-1 text-[11px]"
          >
            <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
            <span>Edit</span>
          </button>
          <button
            onclick="deleteItem('${item.id}')"
            class="hover:text-red-600 cursor-pointer flex items-center gap-1 text-[11px]"
          >
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderRoomsView(container) {
  const roomsHtml = state.rooms.map((room) => {
    const roomItems = state.items.filter((i) => i.location.room === room.name);
    return `
      <div class="bg-white rounded-xl border border-stone-200 p-5 space-y-4">
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700">
              <i data-lucide="${escapeHtml(room.icon || 'archive')}" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-sm font-bold text-stone-900">${escapeHtml(room.name)}</h3>
              <p class="text-xs text-stone-500">${escapeHtml(room.description || '')}</p>
            </div>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
            ${roomItems.length} items
          </span>
        </div>

        <!-- Common Zones -->
        <div class="space-y-1">
          <span class="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">Storage Zones:</span>
          <div class="flex flex-wrap gap-1.5">
            ${(room.commonZones || [])
              .map(
                (zone) => `
                <span class="text-xs bg-stone-50 border border-stone-200 px-2 py-0.5 rounded text-stone-600">
                  ${escapeHtml(zone)}
                </span>
              `
              )
              .join('')}
          </div>
        </div>

        <!-- Items located inside -->
        <div class="border-t border-stone-100 pt-3 space-y-2">
          <span class="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">Cataloged Items:</span>
          ${
            roomItems.length === 0
              ? `<p class="text-xs text-stone-400 italic">No items indexed in this space yet.</p>`
              : `<div class="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  ${roomItems
                    .map(
                      (item) => `
                    <div class="flex items-center justify-between text-xs bg-stone-50 p-2 rounded hover:bg-stone-100">
                      <div>
                        <span class="font-medium text-stone-800">${escapeHtml(item.name)}</span>
                        <div class="text-[11px] text-stone-500">${escapeHtml(item.location.zone)} · ${escapeHtml(item.location.container || 'Loose')}</div>
                      </div>
                      <button
                        onclick="editItem('${item.id}')"
                        class="text-stone-400 hover:text-stone-800 cursor-pointer p-1"
                        title="Edit Item"
                      >
                        <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  `
                    )
                    .join('')}
                </div>`
          }
        </div>

        <button
          onclick="openQuickAddModalWithRoom('${escapeHtml(room.name)}')"
          class="w-full py-2 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Add item to ${escapeHtml(room.name)}</span>
        </button>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between text-xs text-stone-500 px-1">
        <span>Organized across <strong>${state.rooms.length}</strong> designated household spaces</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${roomsHtml}
      </div>
    </div>
  `;
}

function renderLendingView(container) {
  const lentItems = state.items.filter((i) => i.lent && i.lent.isLent);

  const availableItems = state.items.filter((i) => !i.lent?.isLent);

  container.innerHTML = `
    <div class="space-y-5">
      <div class="bg-white border border-stone-200 rounded-xl p-5 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 class="text-sm font-bold text-stone-900">Lending & Borrowing Ledger</h3>
            <p class="text-xs text-stone-500">Track tools, books, and gear lent to neighbors, family, and colleagues.</p>
          </div>
          <button
            onclick="openRecordLoanModal()"
            class="px-3.5 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <i data-lucide="plus" class="w-4 h-4 text-amber-400"></i>
            <span>Record New Loan</span>
          </button>
        </div>

        ${
          lentItems.length === 0
            ? `<div class="p-8 text-center bg-stone-50 rounded-lg border border-stone-200">
                <i data-lucide="shield-check" class="w-7 h-7 text-emerald-500 mx-auto mb-2"></i>
                <h4 class="text-xs font-bold text-stone-800">All Belongings Accounted For</h4>
                <p class="text-xs text-stone-500 max-w-xs mx-auto mt-1">Nothing is currently checked out or borrowed. All household items are on site.</p>
              </div>`
            : `<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${lentItems
                  .map(
                    (item) => `
                  <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 flex flex-col justify-between space-y-3">
                    <div class="space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-stone-900">${escapeHtml(item.name)}</span>
                        <span class="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Checked Out</span>
                      </div>
                      <div class="text-xs text-stone-600 flex items-center gap-1.5">
                        <i data-lucide="user" class="w-3.5 h-3.5 text-stone-400"></i>
                        <span>Borrower: <strong>${escapeHtml(item.lent.lentTo || 'Unknown')}</strong></span>
                      </div>
                      ${
                        item.lent.lentDate
                          ? `<div class="text-[11px] text-stone-500">Lent on: ${escapeHtml(item.lent.lentDate)}</div>`
                          : ''
                      }
                      ${
                        item.lent.expectedReturn
                          ? `<div class="text-[11px] text-stone-500">Expected return: ${escapeHtml(item.lent.expectedReturn)}</div>`
                          : ''
                      }
                      ${
                        item.lent.notes
                          ? `<div class="text-xs text-stone-600 italic bg-white p-2 rounded border border-stone-200 mt-2">
                              &ldquo;${escapeHtml(item.lent.notes)}&rdquo;
                            </div>`
                          : ''
                      }
                    </div>

                    <div class="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
                      <span class="text-stone-400">Home: ${escapeHtml(item.location.room)}</span>
                      <button
                        onclick="toggleLentStatus('${item.id}')"
                        class="px-3 py-1 bg-white hover:bg-stone-100 border border-stone-300 rounded font-semibold text-stone-800 transition-colors cursor-pointer"
                      >
                        Mark as Returned
                      </button>
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </div>`
        }
      </div>
    </div>
  `;
}

// User Actions
window.selectCategory = function (category) {
  state.selectedCategory = category;
  renderApp();
};

window.setViewMode = function (mode) {
  state.viewMode = mode;
  renderApp();
};

window.clearAllFilters = function () {
  state.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  state.selectedCategory = 'All';
  state.filterLentOnly = false;
  state.filterLowStockOnly = false;
  state.filterGuestOnly = false;
  renderApp();
};

window.toggleLentFilter = function () {
  state.filterLentOnly = !state.filterLentOnly;
  renderApp();
};

window.toggleLowStockFilter = function () {
  state.filterLowStockOnly = !state.filterLowStockOnly;
  renderApp();
};

window.toggleGuestFilter = function () {
  state.filterGuestOnly = !state.filterGuestOnly;
  renderApp();
};

window.verifyLocation = function (id) {
  const now = new Date().toISOString();
  state.items = state.items.map((item) =>
    item.id === id ? { ...item, lastVerifiedAt: now } : item
  );
  saveItems();
  renderApp();
  showToast('Physical location verified! Updated timestamp.');
};

window.changeItemQuantity = function (id, delta) {
  state.items = state.items.map((item) => {
    if (item.id === id && item.consumable) {
      const newQty = Math.max(0, (item.consumable.quantity || 0) + delta);
      return {
        ...item,
        consumable: { ...item.consumable, quantity: newQty },
      };
    }
    return item;
  });
  saveItems();
  renderApp();
};

window.toggleLentStatus = function (id) {
  const item = state.items.find((i) => i.id === id);
  if (!item) return;

  if (item.lent.isLent) {
    state.items = state.items.map((i) =>
      i.id === id ? { ...i, lent: { isLent: false }, lastVerifiedAt: new Date().toISOString() } : i
    );
    saveItems();
    renderApp();
    showToast(`"${item.name}" returned to ${item.location.room}`);
  } else {
    const borrower = window.prompt(`Who is borrowing "${item.name}"?`);
    if (borrower && borrower.trim()) {
      state.items = state.items.map((i) =>
        i.id === id
          ? {
              ...i,
              lent: {
                isLent: true,
                lentTo: borrower.trim(),
                lentDate: new Date().toISOString().slice(0, 10),
              },
            }
          : i
      );
      saveItems();
      renderApp();
      showToast(`Recorded loan to ${borrower.trim()}`);
    }
  }
};

window.deleteItem = function (id) {
  const item = state.items.find((i) => i.id === id);
  if (!item) return;
  if (confirm(`Remove "${item.name}" from FindIt?`)) {
    state.items = state.items.filter((i) => i.id !== id);
    saveItems();
    renderApp();
    showToast(`Removed "${item.name}"`);
  }
};

// Modals Handling
window.openQuickAddModal = function () {
  state.editingItemId = null;
  populateQuickAddModal();
  document.getElementById('modal-quick-add').classList.remove('hidden');
};

window.openQuickAddModalWithRoom = function (roomName) {
  state.editingItemId = null;
  populateQuickAddModal(roomName);
  document.getElementById('modal-quick-add').classList.remove('hidden');
};

window.editItem = function (id) {
  state.editingItemId = id;
  const item = state.items.find((i) => i.id === id);
  if (!item) return;
  populateQuickAddModal(undefined, item);
  document.getElementById('modal-quick-add').classList.remove('hidden');
};

window.closeQuickAddModal = function () {
  document.getElementById('modal-quick-add').classList.add('hidden');
  state.editingItemId = null;
};

function populateQuickAddModal(defaultRoom, editingItem) {
  const modalTitle = document.getElementById('modal-add-title');
  const form = document.getElementById('quick-add-form');
  const roomSelect = document.getElementById('add-item-room');
  const catSelect = document.getElementById('add-item-category');

  if (catSelect) {
    catSelect.innerHTML = CATEGORIES.filter((c) => c !== 'All')
      .map((cat) => `<option value="${cat}">${cat}</option>`)
      .join('');
  }

  if (roomSelect) {
    roomSelect.innerHTML = state.rooms
      .map((r) => `<option value="${escapeHtml(r.name)}">${escapeHtml(r.name)}</option>`)
      .join('');
  }

  if (editingItem) {
    modalTitle.textContent = `Edit "${editingItem.name}"`;
    document.getElementById('add-item-name').value = editingItem.name;
    document.getElementById('add-item-category').value = editingItem.category;
    document.getElementById('add-item-room').value = editingItem.location.room;
    document.getElementById('add-item-zone').value = editingItem.location.zone;
    document.getElementById('add-item-container').value = editingItem.location.container || '';
    document.getElementById('add-item-landmark').value = editingItem.location.landmark || '';
    document.getElementById('add-item-desc').value = editingItem.description || '';
    document.getElementById('add-item-tags').value = (editingItem.tags || []).join(', ');
    document.getElementById('add-item-guest').checked = !!editingItem.isEssentialForGuests;

    const isConsumable = !!editingItem.consumable?.isConsumable;
    document.getElementById('add-item-consumable-toggle').checked = isConsumable;
    document.getElementById('consumable-fields').style.display = isConsumable ? 'grid' : 'none';
    if (isConsumable) {
      document.getElementById('add-item-quantity').value = editingItem.consumable.quantity || 1;
      document.getElementById('add-item-unit').value = editingItem.consumable.unit || 'units';
      document.getElementById('add-item-threshold').value = editingItem.consumable.minThreshold || 1;
    }
  } else {
    modalTitle.textContent = 'Index New Belonging';
    form.reset();
    if (defaultRoom && roomSelect) {
      roomSelect.value = defaultRoom;
    }
    document.getElementById('consumable-fields').style.display = 'none';
  }
}

window.toggleConsumableInputs = function () {
  const isChecked = document.getElementById('add-item-consumable-toggle').checked;
  document.getElementById('consumable-fields').style.display = isChecked ? 'grid' : 'none';
};

window.handleSaveItemSubmit = function (e) {
  e.preventDefault();

  const name = document.getElementById('add-item-name').value.trim();
  const category = document.getElementById('add-item-category').value;
  const room = document.getElementById('add-item-room').value;
  const zone = document.getElementById('add-item-zone').value.trim();
  const container = document.getElementById('add-item-container').value.trim();
  const landmark = document.getElementById('add-item-landmark').value.trim();
  const description = document.getElementById('add-item-desc').value.trim();
  const tagsStr = document.getElementById('add-item-tags').value;
  const isEssentialForGuests = document.getElementById('add-item-guest').checked;
  const isConsumable = document.getElementById('add-item-consumable-toggle').checked;

  const tags = tagsStr
    ? tagsStr.split(',').map((t) => t.trim().toLowerCase()).filter(Boolean)
    : [];

  let consumableData = undefined;
  if (isConsumable) {
    const qty = parseInt(document.getElementById('add-item-quantity').value, 10) || 1;
    const unit = document.getElementById('add-item-unit').value.trim() || 'units';
    const thresh = parseInt(document.getElementById('add-item-threshold').value, 10) || 1;
    consumableData = {
      isConsumable: true,
      quantity: qty,
      unit,
      minThreshold: thresh,
    };
  }

  const now = new Date().toISOString();

  if (state.editingItemId) {
    state.items = state.items.map((item) => {
      if (item.id === state.editingItemId) {
        return {
          ...item,
          name,
          category,
          location: { room, zone, container, landmark },
          description,
          tags,
          isEssentialForGuests,
          consumable: consumableData,
          lastVerifiedAt: now,
        };
      }
      return item;
    });
    showToast(`Updated "${name}"`);
  } else {
    const newItem = {
      id: `item-${Date.now()}`,
      name,
      category,
      location: { room, zone, container, landmark },
      description,
      tags,
      lent: { isLent: false },
      isEssentialForGuests,
      consumable: consumableData,
      lastVerifiedAt: now,
      createdAt: now,
    };
    state.items = [newItem, ...state.items];
    showToast(`Indexed "${name}" to ${room}`);
  }

  saveItems();
  closeQuickAddModal();
  renderApp();
};

// 30s Spot Check Modal
window.openSpotCheckModal = function () {
  // Sort by staleness
  const itemsSortedByAge = [...state.items].sort(
    (a, b) => new Date(a.lastVerifiedAt).getTime() - new Date(b.lastVerifiedAt).getTime()
  );
  state.spotCheckItems = itemsSortedByAge.slice(0, 3);
  state.spotCheckCurrentIndex = 0;
  renderSpotCheckStep();
  document.getElementById('modal-spot-check').classList.remove('hidden');
  lucide.createIcons();
};

window.closeSpotCheckModal = function () {
  document.getElementById('modal-spot-check').classList.add('hidden');
};

function renderSpotCheckStep() {
  const container = document.getElementById('spot-check-body');
  if (!container) return;

  if (state.spotCheckCurrentIndex >= state.spotCheckItems.length) {
    container.innerHTML = `
      <div class="text-center py-6 space-y-3">
        <i data-lucide="check-circle" class="w-12 h-12 text-emerald-500 mx-auto"></i>
        <h3 class="text-base font-bold text-stone-900">Audit Completed!</h3>
        <p class="text-xs text-stone-600 max-w-sm mx-auto">
          You've refreshed your household audit log. Your confidence rating has increased!
        </p>
        <button
          onclick="closeSpotCheckModal()"
          class="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
        >
          Done
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const item = state.spotCheckItems[state.spotCheckCurrentIndex];
  const daysAgo = Math.floor(
    (Date.now() - new Date(item.lastVerifiedAt).getTime()) / (1000 * 60 * 60 * 24)
  );

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between text-xs text-stone-500">
        <span>Item ${state.spotCheckCurrentIndex + 1} of ${state.spotCheckItems.length}</span>
        <span class="text-amber-600 font-medium">Last confirmed ${daysAgo} days ago</span>
      </div>

      <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2">
        <h4 class="text-sm font-bold text-stone-900">${escapeHtml(item.name)}</h4>
        <div class="text-xs text-stone-700 flex items-center gap-1.5">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-stone-500"></i>
          <span><strong>${escapeHtml(item.location.room)}</strong> &rsaquo; ${escapeHtml(item.location.zone)}</span>
        </div>
        ${
          item.location.container
            ? `<div class="text-xs text-stone-600 pl-5">Container: <strong>${escapeHtml(item.location.container)}</strong></div>`
            : ''
        }
        ${
          item.location.landmark
            ? `<div class="text-[11px] text-stone-500 italic pl-5">&ldquo;${escapeHtml(item.location.landmark)}&rdquo;</div>`
            : ''
        }
      </div>

      <p class="text-xs text-stone-600 font-medium text-center">Is this item physically still there?</p>

      <div class="grid grid-cols-2 gap-2 pt-2">
        <button
          onclick="confirmSpotCheckItem('${item.id}', true)"
          class="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <i data-lucide="check" class="w-4 h-4"></i>
          <span>Yes, Confirmed</span>
        </button>
        <button
          onclick="relocateSpotCheckItem('${item.id}')"
          class="py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <i data-lucide="shuffle" class="w-4 h-4"></i>
          <span>Moved / Relocate</span>
        </button>
      </div>
    </div>
  `;
  lucide.createIcons();
}

window.confirmSpotCheckItem = function (id) {
  verifyLocation(id);
  state.spotCheckCurrentIndex++;
  renderSpotCheckStep();
};

window.relocateSpotCheckItem = function (id) {
  closeSpotCheckModal();
  editItem(id);
};

// Guest Guide Modal
window.openGuestGuideModal = function () {
  const guestItems = state.items.filter((i) => i.isEssentialForGuests);
  const container = document.getElementById('guest-guide-list');
  if (container) {
    container.innerHTML = guestItems
      .map(
        (item) => `
      <div class="bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-1.5">
        <div class="flex items-start justify-between">
          <span class="text-xs font-bold text-stone-900">${escapeHtml(item.name)}</span>
          <span class="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Guest Accessible</span>
        </div>
        <div class="text-xs text-stone-600 flex items-center gap-1.5">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-stone-500"></i>
          <span>${escapeHtml(item.location.room)} &rsaquo; ${escapeHtml(item.location.zone)}</span>
        </div>
        ${
          item.location.landmark
            ? `<div class="text-[11px] text-stone-500 italic pl-5">&ldquo;${escapeHtml(item.location.landmark)}&rdquo;</div>`
            : ''
        }
        ${
          item.name.toLowerCase().includes('wi-fi') || item.name.toLowerCase().includes('wifi')
            ? `<button onclick="copyWifiPassword()" class="mt-2 text-xs bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer">
                <i data-lucide="copy" class="w-3.5 h-3.5 text-stone-500"></i>
                <span>Copy Wi-Fi Password</span>
              </button>`
            : ''
        }
      </div>
    `
      )
      .join('');
  }
  document.getElementById('modal-guest-guide').classList.remove('hidden');
  lucide.createIcons();
};

window.closeGuestGuideModal = function () {
  document.getElementById('modal-guest-guide').classList.add('hidden');
};

window.copyWifiPassword = function () {
  navigator.clipboard.writeText('WelcomeQuietStay26!').then(() => {
    showToast('Copied Wi-Fi password to clipboard!');
  });
};

// Record Loan Modal
window.openRecordLoanModal = function () {
  const select = document.getElementById('loan-item-select');
  if (select) {
    const unlent = state.items.filter((i) => !i.lent?.isLent);
    select.innerHTML = unlent
      .map((i) => `<option value="${i.id}">${escapeHtml(i.name)} (${escapeHtml(i.location.room)})</option>`)
      .join('');
  }
  document.getElementById('modal-record-loan').classList.remove('hidden');
};

window.closeRecordLoanModal = function () {
  document.getElementById('modal-record-loan').classList.add('hidden');
};

window.handleRecordLoanSubmit = function (e) {
  e.preventDefault();
  const itemId = document.getElementById('loan-item-select').value;
  const borrower = document.getElementById('loan-borrower').value.trim();
  const returnDate = document.getElementById('loan-return-date').value;
  const notes = document.getElementById('loan-notes').value.trim();

  if (!borrower) return;

  state.items = state.items.map((i) =>
    i.id === itemId
      ? {
          ...i,
          lent: {
            isLent: true,
            lentTo: borrower,
            lentDate: new Date().toISOString().slice(0, 10),
            expectedReturn: returnDate || undefined,
            notes: notes || undefined,
          },
        }
      : i
  );
  saveItems();
  closeRecordLoanModal();
  renderApp();
  showToast(`Recorded loan to ${borrower}`);
};

// Other modals
window.openConceptModal = function () {
  document.getElementById('modal-concept').classList.remove('hidden');
  lucide.createIcons();
};
window.closeConceptModal = function () {
  document.getElementById('modal-concept').classList.add('hidden');
};

window.openResponsibilityModal = function () {
  document.getElementById('modal-responsibility').classList.remove('hidden');
  lucide.createIcons();
};
window.closeResponsibilityModal = function () {
  document.getElementById('modal-responsibility').classList.add('hidden');
};

// Data Backup & Reset
window.exportData = function () {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state.items, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `findit-backup-${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Exported JSON backup to your device');
};

window.resetData = function () {
  if (confirm('Reset all items and rooms to starter household demo data?')) {
    state.items = INITIAL_ITEMS;
    state.rooms = INITIAL_ROOMS;
    saveItems();
    saveRooms();
    renderApp();
    showToast('Reset to starter household items');
  }
};

// PWA Installation & Service Worker
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  state.deferredInstallPrompt = e;
  const installBtn = document.getElementById('btn-pwa-install');
  if (installBtn) installBtn.classList.remove('hidden');
});

window.installPWA = function () {
  if (!state.deferredInstallPrompt) {
    showToast('To install, tap Share (iOS) or Menu (Android) -> "Add to Home Screen"');
    return;
  }
  state.deferredInstallPrompt.prompt();
  state.deferredInstallPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      showToast('Thank you for installing FindIt!');
    }
    state.deferredInstallPrompt = null;
    const installBtn = document.getElementById('btn-pwa-install');
    if (installBtn) installBtn.classList.add('hidden');
  });
};

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.warn('Service worker registration:', err);
    });
  });
}

// Initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  loadData();

  // Search input listener
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMainView();
      lucide.createIcons();
    });
  }

  renderApp();
});
