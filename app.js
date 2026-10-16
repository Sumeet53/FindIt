// FindIt - Everyday Physical Memory
// Standard Vanilla PWA Engine (User-Friendly, Zero-Build & Centered Layout)

const ITEMS_KEY = 'spatialcache_items_v1';
const ROOMS_KEY = 'spatialcache_rooms_v1';
const ENGAGEMENT_KEY = 'findit_engagement_v2';

const INITIAL_ROOMS = [
  {
    id: 'kitchen-pantry',
    name: 'Kitchen & Pantry',
    icon: 'utensils',
    description: 'Appliances, emergency consumables, and pantry supplies',
    commonZones: ['Pantry Top Shelf', 'Under-Sink Caddy', 'Island Spice Drawer', 'Appliance Cupboard'],
  },
  {
    id: 'hallway-closet',
    name: 'Hallway Closet',
    icon: 'archive',
    description: 'Utility, linen storage, and household supplies',
    commonZones: ['Top Shelf', 'Middle Wire Rack', 'Floor Storage', 'Coat Rack Hooks'],
  },
  {
    id: 'garage-workshop',
    name: 'Garage & Workshop',
    icon: 'wrench',
    description: 'Tools, hardware, sports gear, and car care',
    commonZones: ['Work Bench Pegboard', 'Metal Rack Shelf 2', 'Tool Chest Drawer 3', 'Overhead Bins'],
  },
  {
    id: 'living-room',
    name: 'Living Room',
    icon: 'tv',
    description: 'Entertainment console, keys catchall, and shelves',
    commonZones: ['TV Media Console', 'Side Table Drawer', 'Entryway Catchall Bowl'],
  },
  {
    id: 'home-office',
    name: 'Home Office',
    icon: 'briefcase',
    description: 'Work station, filing cabinet, and cables',
    commonZones: ['Filing Cabinet Top Drawer', 'Desk Right Drawer', 'Cable Organizer Box', 'Bookshelf'],
  },
  {
    id: 'master-bedroom',
    name: 'Master Bedroom',
    icon: 'bed',
    description: 'Personal storage, nightstands, and walk-in wardrobe',
    commonZones: ['Closet High Shelf', 'Nightstand Drawer', 'Dresser Valet Tray', 'Underbed Box'],
  },
];

const INITIAL_ITEMS = [
  {
    id: 'item-1',
    name: 'Passports & Travel Documents',
    category: 'Documents & Valuables',
    location: {
      room: 'Master Bedroom',
      zone: 'Closet High Shelf',
      container: 'Grey Fireproof Document Box',
      landmark: 'Tucked behind the extra winter blankets on the far left corner',
    },
    description: 'Blue passports for family and vaccination certificates.',
    tags: ['passport', 'travel', 'id', 'documents', 'identification'],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-10-14T10:15:00.000Z',
    createdAt: '2026-08-10T08:00:00.000Z',
  },
  {
    id: 'item-2',
    name: 'Rechargeable AA & AAA Batteries',
    category: 'Electronics & Cables',
    location: {
      room: 'Hallway Closet',
      zone: 'Middle Wire Rack',
      container: 'Clear Divided Bin #3',
      landmark: 'Next to the lightbulb box, labeled "Batteries & Chargers"',
    },
    description: 'Pre-charged batteries plus 4-slot smart wall charger.',
    tags: ['batteries', 'aa', 'aaa', 'power', 'remotes', 'toys'],
    lent: { isLent: false },
    consumable: {
      isConsumable: true,
      quantity: 4,
      unit: 'batteries',
      minThreshold: 4,
    },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-15T07:22:00.000Z',
    createdAt: '2026-08-12T09:30:00.000Z',
  },
  {
    id: 'item-3',
    name: 'DeWalt 20V Cordless Drill & Bit Kit',
    category: 'Tools & Hardware',
    location: {
      room: 'Garage & Workshop',
      zone: 'Work Bench Pegboard',
      container: 'Yellow Hard Shell Case',
      landmark: 'Middle shelf under the main pegboard workbench',
    },
    description: 'Brushless hammer drill with two batteries and charger.',
    tags: ['drill', 'dewalt', 'tools', 'screws', 'hardware'],
    lent: {
      isLent: true,
      lentTo: 'Dave Miller (Next Door)',
      lentDate: '2026-09-28',
      expectedReturn: '2026-10-18',
      notes: 'Borrowed for fixing rear wooden fence gate.',
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
      landmark: 'Eye level on the right wall of the pantry, next to cereal boxes',
    },
    description: 'Sterile bandages, antiseptic spray, burn gel, and allergy medicine.',
    tags: ['first aid', 'bandages', 'medicine', 'emergency', 'allergy'],
    lent: { isLent: false },
    consumable: {
      isConsumable: true,
      quantity: 1,
      unit: 'kit',
      minThreshold: 1,
    },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-15T08:30:00.000Z',
    createdAt: '2026-06-15T12:00:00.000Z',
  },
  {
    id: 'item-5',
    name: 'Digital Tire Pressure Gauge & Inflator',
    category: 'Tools & Hardware',
    location: {
      room: 'Garage & Workshop',
      zone: 'Tool Chest Drawer 3',
      container: 'Black Padded Zipper Sleeve',
      landmark: 'Third drawer down of the red Craftsman tool chest',
    },
    description: 'Backlit tire gauge reading up to 150 PSI.',
    tags: ['car', 'tires', 'gauge', 'pressure', 'automotive'],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-10-10T17:45:00.000Z',
    createdAt: '2026-08-01T15:20:00.000Z',
  },
  {
    id: 'item-6',
    name: 'USB-C to HDMI 4K Display Adapter',
    category: 'Electronics & Cables',
    location: {
      room: 'Home Office',
      zone: 'Desk Right Drawer',
      container: 'Mesh Zipper Travel Pouch',
      landmark: 'Top front organizer tray alongside spare flash drives',
    },
    description: 'Multiport hub with 4K HDMI, Gigabit LAN, and charging.',
    tags: ['usb-c', 'hdmi', 'adapter', 'dongle', 'cable', 'monitor'],
    lent: { isLent: false },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-13T09:10:00.000Z',
    createdAt: '2026-08-20T10:00:00.000Z',
  },
  {
    id: 'item-7',
    name: 'Spare Car Key Fob & Garden Shed Key',
    category: 'Documents & Valuables',
    location: {
      room: 'Living Room',
      zone: 'Entryway Catchall Bowl',
      container: 'Small Leather Key Pouch',
      landmark: 'Ceramic key bowl directly next to the front door entrance mirror',
    },
    description: 'Includes Subaru spare fob and brass shed padlock key.',
    tags: ['keys', 'car', 'fob', 'shed', 'valuable'],
    lent: { isLent: false },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-15T06:00:00.000Z',
    createdAt: '2026-05-10T14:00:00.000Z',
  },
  {
    id: 'item-8',
    name: 'Dyson Cordless Vacuum Attachments & Filter',
    category: 'Household & Cleaning',
    location: {
      room: 'Hallway Closet',
      zone: 'Floor Storage',
      container: 'Clear Plastic Tote with Lid',
      landmark: 'Right underneath the hanging coats on closet floor',
    },
    description: 'Crevice tool, dusting brush, and clean spare HEPA filter.',
    tags: ['vacuum', 'dyson', 'cleaning', 'filter', 'attachments'],
    lent: { isLent: false },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-12T11:00:00.000Z',
    createdAt: '2026-07-20T16:00:00.000Z',
  },
  {
    id: 'item-9',
    name: 'Camping LED Headlamp & Extra Strap',
    category: 'Seasonal & Apparel',
    location: {
      room: 'Garage & Workshop',
      zone: 'Overhead Bins',
      container: 'Clear 30L Camping Tub',
      landmark: 'Front left corner of the top rack overhead shelving',
    },
    description: '350 lumen USB-rechargeable headlamp with red night light mode.',
    tags: ['headlamp', 'camping', 'flashlight', 'light', 'outdoors'],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-09-15T18:00:00.000Z',
    createdAt: '2026-06-01T12:00:00.000Z',
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
    description: 'Ski mittens, 2 merino wool beanies, and neck gaiter.',
    tags: ['gloves', 'winter', 'beanie', 'cold', 'snow', 'clothes'],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-10-01T13:00:00.000Z',
    createdAt: '2026-05-15T10:00:00.000Z',
  },
  {
    id: 'item-11',
    name: 'Wi-Fi Network Backup Password Card',
    category: 'Office & Tech',
    location: {
      room: 'Living Room',
      zone: 'TV Media Console',
      container: 'Cable Management Tray',
      landmark: 'Laminated card taped to the underside of the main router shelf',
    },
    description: 'SSID: "HavenHome_Guest" · Password: "WelcomeQuietStay26!"',
    tags: ['wifi', 'internet', 'router', 'password', 'tech', 'network'],
    lent: { isLent: false },
    isEssentialForGuests: true,
    lastVerifiedAt: '2026-10-15T12:00:00.000Z',
    createdAt: '2026-08-05T09:00:00.000Z',
  },
  {
    id: 'item-12',
    name: 'Compact Telescopic Aluminum Ladder (12 ft)',
    category: 'Tools & Hardware',
    location: {
      room: 'Garage & Workshop',
      zone: 'Metal Rack Shelf 2',
      container: 'Folded upright against wall',
      landmark: 'Secured with black bungee cord to the side of the metal rack',
    },
    description: 'Compact collapsible ladder for painting and ceiling fixtures.',
    tags: ['ladder', 'tools', 'climbing', 'painting', 'garage'],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: '2026-10-05T10:00:00.000Z',
    createdAt: '2026-07-15T14:00:00.000Z',
  },
];

const CATEGORIES = [
  'All',
  'Tools & Hardware',
  'Electronics & Cables',
  'Documents & Valuables',
  'Health & Medication',
  'Household & Cleaning',
  'Seasonal & Apparel',
  'Office & Tech',
  'Other',
];

// Subtle & Distinct Pastel Themes for Visual Codification & Categorization (Applied to Entire Card)
const CATEGORY_THEMES = {
  'Tools & Hardware': {
    themeClass: 'cat-theme-tools',
    bg: 'bg-amber-100',
    border: 'border-amber-300',
    badge: 'bg-amber-200 text-amber-950 border-amber-400',
    innerBox: 'bg-white/75 border-amber-200/90',
    pillActive: 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm font-bold',
    pillInactive: 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200 font-semibold',
    colorName: 'Warm Amber',
    icon: 'wrench',
  },
  'Electronics & Cables': {
    themeClass: 'cat-theme-electronics',
    bg: 'bg-indigo-100',
    border: 'border-indigo-300',
    badge: 'bg-indigo-200 text-indigo-950 border-indigo-400',
    innerBox: 'bg-white/75 border-indigo-200/90',
    pillActive: 'bg-indigo-600 text-white border-indigo-700 shadow-sm font-bold',
    pillInactive: 'bg-indigo-100 text-indigo-900 border-indigo-300 hover:bg-indigo-200 font-semibold',
    colorName: 'Soft Indigo',
    icon: 'cpu',
  },
  'Documents & Valuables': {
    themeClass: 'cat-theme-documents',
    bg: 'bg-yellow-100',
    border: 'border-yellow-300',
    badge: 'bg-yellow-200 text-yellow-950 border-yellow-400',
    innerBox: 'bg-white/75 border-yellow-200/90',
    pillActive: 'bg-yellow-400 text-stone-950 border-yellow-500 shadow-sm font-bold',
    pillInactive: 'bg-yellow-100 text-yellow-950 border-yellow-300 hover:bg-yellow-200 font-semibold',
    colorName: 'Sunny Yellow',
    icon: 'file-text',
  },
  'Health & Medication': {
    themeClass: 'cat-theme-health',
    bg: 'bg-emerald-100',
    border: 'border-emerald-300',
    badge: 'bg-emerald-200 text-emerald-950 border-emerald-400',
    innerBox: 'bg-white/75 border-emerald-200/90',
    pillActive: 'bg-emerald-600 text-white border-emerald-700 shadow-sm font-bold',
    pillInactive: 'bg-emerald-100 text-emerald-900 border-emerald-300 hover:bg-emerald-200 font-semibold',
    colorName: 'Fresh Mint',
    icon: 'shield-plus',
  },
  'Household & Cleaning': {
    themeClass: 'cat-theme-household',
    bg: 'bg-teal-100',
    border: 'border-teal-300',
    badge: 'bg-teal-200 text-teal-950 border-teal-400',
    innerBox: 'bg-white/75 border-teal-200/90',
    pillActive: 'bg-teal-600 text-white border-teal-700 shadow-sm font-bold',
    pillInactive: 'bg-teal-100 text-teal-900 border-teal-300 hover:bg-teal-200 font-semibold',
    colorName: 'Seafoam Teal',
    icon: 'sparkles',
  },
  'Seasonal & Apparel': {
    themeClass: 'cat-theme-seasonal',
    bg: 'bg-pink-100',
    border: 'border-pink-300',
    badge: 'bg-pink-200 text-pink-950 border-pink-400',
    innerBox: 'bg-white/75 border-pink-200/90',
    pillActive: 'bg-pink-500 text-white border-pink-600 shadow-sm font-bold',
    pillInactive: 'bg-pink-100 text-pink-900 border-pink-300 hover:bg-pink-200 font-semibold',
    colorName: 'Cherry Blossom Pink',
    icon: 'sun',
  },
  'Office & Tech': {
    themeClass: 'cat-theme-office',
    bg: 'bg-sky-100',
    border: 'border-sky-300',
    badge: 'bg-sky-200 text-sky-950 border-sky-400',
    innerBox: 'bg-white/75 border-sky-200/90',
    pillActive: 'bg-sky-600 text-white border-sky-700 shadow-sm font-bold',
    pillInactive: 'bg-sky-100 text-sky-900 border-sky-300 hover:bg-sky-200 font-semibold',
    colorName: 'Sky Blue',
    icon: 'briefcase',
  },
  'Other': {
    themeClass: 'cat-theme-other',
    bg: 'bg-purple-100',
    border: 'border-purple-300',
    badge: 'bg-purple-200 text-purple-950 border-purple-400',
    innerBox: 'bg-white/75 border-purple-200/90',
    pillActive: 'bg-purple-600 text-white border-purple-700 shadow-sm font-bold',
    pillInactive: 'bg-purple-100 text-purple-900 border-purple-300 hover:bg-purple-200 font-semibold',
    colorName: 'Soft Lavender',
    icon: 'package',
  },
};

// App State
const state = {
  items: [],
  rooms: [],
  engagement: {
    streak: 3,
    lastCheckInDate: '',
    totalCheckIns: 5,
    notificationsEnabled: false,
    lastNotificationTimestamp: 0,
  },
  searchQuery: '',
  selectedCategory: 'All',
  selectedRoom: 'All',
  sortBy: 'recent', // 'recent' | 'name-asc' | 'name-desc' | 'room-asc' | 'category' | 'verified'
  filterLentOnly: false,
  filterLowStockOnly: false,
  filterGuestOnly: false,
  viewMode: 'grid', // 'grid' | 'rooms' | 'lending'
  activePage: 'home', // 'home' | 'add' | 'streak' | 'spotcheck' | 'guide' | 'about'
  addCaptureMode: 'voice', // 'voice' | 'photo' | 'tour' | 'form'
  activeTourItems: [],
  isRecordingVoice: false,
  isRecordingTour: false,
  editingItemId: null,
  spotCheckItems: [],
  spotCheckCurrentIndex: 0,
  deferredInstallPrompt: null,
};

// Storage Helpers
function loadData() {
  try {
    const rawItems = localStorage.getItem(ITEMS_KEY);
    const rawRooms = localStorage.getItem(ROOMS_KEY);
    const rawEng = localStorage.getItem(ENGAGEMENT_KEY);

    state.items = rawItems ? JSON.parse(rawItems) : INITIAL_ITEMS;
    state.rooms = rawRooms ? JSON.parse(rawRooms) : INITIAL_ROOMS;
    if (rawEng) {
      state.engagement = { ...state.engagement, ...JSON.parse(rawEng) };
    }
  } catch (e) {
    console.error('Error reading localStorage:', e);
    state.items = INITIAL_ITEMS;
    state.rooms = INITIAL_ROOMS;
  }
}

function saveItems() {
  try {
    localStorage.setItem(ITEMS_KEY, JSON.stringify(state.items));
  } catch (e) {
    console.error('Error saving items:', e);
  }
}

function saveRooms() {
  try {
    localStorage.setItem(ROOMS_KEY, JSON.stringify(state.rooms));
  } catch (e) {
    console.error('Error saving rooms:', e);
  }
}

function saveEngagement() {
  try {
    localStorage.setItem(ENGAGEMENT_KEY, JSON.stringify(state.engagement));
  } catch (e) {
    console.error('Error saving engagement:', e);
  }
}

// Utility: HTML escape
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Utility: Toast notification (Centered at bottom)
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className =
    'bg-stone-900 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl shadow-elevated flex items-center justify-center gap-2 pointer-events-auto transform transition-all duration-200 translate-y-3 opacity-0 text-center';
  toast.innerHTML = `
    <i data-lucide="sparkles" class="w-4 h-4 text-amber-400 shrink-0"></i>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-3');
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

// DYNAMIC TYPES (Categories) derived dynamically from user entered items
function getDynamicTypes() {
  const counts = {};
  state.items.forEach((item) => {
    const cat = item.category || 'Other';
    counts[cat] = (counts[cat] || 0) + 1;
  });

  const list = Object.keys(counts).map((cat) => ({
    name: cat,
    count: counts[cat],
  }));

  list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

// DYNAMIC LOCATIONS (Rooms) derived dynamically from user entered items & rooms
function getDynamicLocations() {
  const counts = {};
  state.items.forEach((item) => {
    const rm = item.location?.room || 'Unassigned';
    counts[rm] = (counts[rm] || 0) + 1;
  });

  // Also include rooms from state.rooms if not already present
  state.rooms.forEach((r) => {
    if (!counts[r.name]) {
      counts[r.name] = 0;
    }
  });

  const list = Object.keys(counts).map((rm) => ({
    name: rm,
    count: counts[rm],
  }));

  list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

// Filtering & Dynamic Sorting items
function getFilteredItems() {
  const q = state.searchQuery.toLowerCase().trim();
  const normalizedQuery = q
    .replace(/^(where\s+(?:is|are|did\s+i\s+put|can\s+i\s+find)\s+(?:the|my|a|an)?\s*)/i, '')
    .trim();

  let results = state.items.filter((item) => {
    // Dynamic Type filter
    if (state.selectedCategory !== 'All' && item.category !== state.selectedCategory) {
      return false;
    }
    // Dynamic Location filter
    if (state.selectedRoom !== 'All' && item.location.room !== state.selectedRoom) {
      return false;
    }
    // Lent out filter
    if (state.filterLentOnly && (!item.lent || !item.lent.isLent)) {
      return false;
    }
    // Low stock filter
    if (state.filterLowStockOnly) {
      const isLow =
        item.consumable?.isConsumable &&
        (item.consumable.quantity ?? 0) <= (item.consumable.minThreshold ?? 0);
      if (!isLow) return false;
    }
    // Guest essentials filter
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
        item.lent?.lentTo || '',
        ...(item.tags || []),
      ]
        .join(' ')
        .toLowerCase();

      const words = normalizedQuery.split(/\s+/);
      return (
        words.every((w) => fullSearchHaystack.includes(w)) ||
        fullSearchHaystack.includes(normalizedQuery)
      );
    }
    return true;
  });

  // Sort items according to active sort order
  switch (state.sortBy) {
    case 'name-asc':
      results.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      results.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'room-asc':
      results.sort(
        (a, b) =>
          (a.location.room || '').localeCompare(b.location.room || '') ||
          a.name.localeCompare(b.name)
      );
      break;
    case 'category':
      results.sort(
        (a, b) =>
          (a.category || '').localeCompare(b.category || '') ||
          a.name.localeCompare(b.name)
      );
      break;
    case 'verified':
      results.sort(
        (a, b) =>
          new Date(a.lastVerifiedAt || '1970-01-01').getTime() -
          new Date(b.lastVerifiedAt || '1970-01-01').getTime()
      );
      break;
    case 'recent':
    default:
      results.sort((a, b) => {
        const timeB = new Date(b.createdAt || 0).getTime();
        const timeA = new Date(a.createdAt || 0).getTime();
        return timeB - timeA;
      });
      break;
  }

  return results;
}

// Render Functions
function renderApp() {
  renderSortFilterCard();
  renderEngagementStatus();
  renderMainView();
  lucide.createIcons();
}

// Render Sort & Filter Card (Dynamic as per user entered data)
function renderSortFilterCard() {
  const dynamicTypes = getDynamicTypes();
  const dynamicLocations = getDynamicLocations();

  // Populate dynamic types select
  const typeSelect = document.getElementById('filter-type-select');
  if (typeSelect) {
    const totalCount = state.items.length;
    let typeOptions = `<option value="All">All Types (${totalCount} items)</option>`;
    dynamicTypes.forEach((t) => {
      const isSel = state.selectedCategory === t.name ? 'selected' : '';
      typeOptions += `<option value="${escapeHtml(t.name)}" ${isSel}>${escapeHtml(t.name)} (${t.count})</option>`;
    });
    typeSelect.innerHTML = typeOptions;
    typeSelect.value = state.selectedCategory;
  }

  // Populate dynamic locations select
  const locSelect = document.getElementById('filter-location-select');
  if (locSelect) {
    const uniqueRoomsCount = dynamicLocations.length;
    let locOptions = `<option value="All">All Locations (${uniqueRoomsCount} rooms)</option>`;
    dynamicLocations.forEach((l) => {
      const isSel = state.selectedRoom === l.name ? 'selected' : '';
      locOptions += `<option value="${escapeHtml(l.name)}" ${isSel}>${escapeHtml(l.name)} (${l.count})</option>`;
    });
    locSelect.innerHTML = locOptions;
    locSelect.value = state.selectedRoom;
  }

  // Set sort order select
  const sortSelect = document.getElementById('sort-order-select');
  if (sortSelect) {
    sortSelect.value = state.sortBy || 'recent';
  }

  // Total items in pill
  const totalItemsEl = document.getElementById('stat-total-items');
  if (totalItemsEl) totalItemsEl.textContent = state.items.length;

  // Header streak pill
  const headerStreak = document.getElementById('header-streak-badge');
  if (headerStreak) headerStreak.textContent = `${state.engagement.streak || 1} Days`;

  // Quick filter buttons active status
  const filterAllBtn = document.getElementById('filter-btn-all');
  const filterLentBtn = document.getElementById('filter-btn-lent');
  const filterLowBtn = document.getElementById('filter-btn-low');
  const filterGuestBtn = document.getElementById('filter-btn-guest');
  const btnActiveReset = document.getElementById('btn-active-reset');

  const hasActiveFilters =
    state.selectedCategory !== 'All' ||
    state.selectedRoom !== 'All' ||
    state.filterLentOnly ||
    state.filterLowStockOnly ||
    state.filterGuestOnly ||
    Boolean(state.searchQuery.trim());

  if (filterAllBtn) {
    if (!hasActiveFilters) {
      filterAllBtn.className =
        'px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer bg-stone-900 text-white shadow-xs';
    } else {
      filterAllBtn.className =
        'px-3 py-1 rounded-xl text-xs font-semibold border transition-all cursor-pointer bg-white border-stone-200 text-stone-700 hover:bg-stone-50';
    }
  }

  if (filterLentBtn) {
    const lentCount = state.items.filter((i) => i.lent && i.lent.isLent).length;
    const lentBadge = document.getElementById('badge-lent-count');
    if (lentBadge) {
      lentBadge.textContent = lentCount;
      lentBadge.style.display = lentCount > 0 ? 'inline-block' : 'none';
    }
    if (state.filterLentOnly) {
      filterLentBtn.className =
        'px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer bg-rose-500 text-white border border-rose-600 shadow-xs flex items-center gap-1';
    } else {
      filterLentBtn.className =
        'px-3 py-1 rounded-xl text-xs font-semibold border transition-all cursor-pointer bg-white border-stone-200 text-stone-700 hover:bg-rose-50 flex items-center gap-1';
    }
  }

  if (filterLowBtn) {
    const lowCount = state.items.filter(
      (i) =>
        i.consumable?.isConsumable &&
        (i.consumable.quantity ?? 0) <= (i.consumable.minThreshold ?? 0)
    ).length;
    const lowBadge = document.getElementById('badge-low-count');
    if (lowBadge) {
      lowBadge.textContent = lowCount;
      lowBadge.style.display = lowCount > 0 ? 'inline-block' : 'none';
    }
    if (state.filterLowStockOnly) {
      filterLowBtn.className =
        'px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer bg-amber-500 text-stone-950 border border-amber-600 shadow-xs flex items-center gap-1';
    } else {
      filterLowBtn.className =
        'px-3 py-1 rounded-xl text-xs font-semibold border transition-all cursor-pointer bg-white border-stone-200 text-stone-700 hover:bg-amber-50 flex items-center gap-1';
    }
  }

  if (filterGuestBtn) {
    if (state.filterGuestOnly) {
      filterGuestBtn.className =
        'px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer bg-emerald-600 text-white border border-emerald-700 shadow-xs flex items-center gap-1';
    } else {
      filterGuestBtn.className =
        'px-3 py-1 rounded-xl text-xs font-semibold border transition-all cursor-pointer bg-white border-stone-200 text-stone-700 hover:bg-emerald-50 flex items-center gap-1';
    }
  }

  if (btnActiveReset) {
    if (hasActiveFilters) {
      btnActiveReset.classList.remove('hidden');
    } else {
      btnActiveReset.classList.add('hidden');
    }
  }

  // Clear search input 'x' button
  const clearSearchBtn = document.getElementById('btn-clear-search');
  if (clearSearchBtn) {
    clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
  }
}

// Daily Engagement & Habit Retention Rendering
function renderEngagementStatus() {
  const streakBadge = document.getElementById('streak-counter-badge');
  const healthBadge = document.getElementById('health-score-badge');
  const notifBtnLabel = document.getElementById('notif-button-label');
  const testNotifBtn = document.getElementById('btn-test-notification');
  const notifNote = document.getElementById('notif-status-note');
  const checkinBtn = document.getElementById('btn-daily-checkin');

  const streak = state.engagement.streak || 1;
  if (streakBadge) {
    streakBadge.textContent = `${streak}-Day Organizing Streak`;
  }

  // Calculate home clarity (percentage of items verified within last 14 days)
  const nowMs = Date.now();
  const twoWeeksMs = 14 * 24 * 60 * 60 * 1000;
  const verifiedCount = state.items.filter((item) => {
    if (!item.lastVerifiedAt) return false;
    const diff = nowMs - new Date(item.lastVerifiedAt).getTime();
    return diff <= twoWeeksMs;
  }).length;

  const clarityScore = state.items.length > 0 ? Math.round((verifiedCount / state.items.length) * 100) : 100;
  if (healthBadge) {
    healthBadge.textContent = `Home Clarity: ${clarityScore}%`;
  }

  // Check if checked in today
  const todayStr = new Date().toISOString().slice(0, 10);
  const isCheckedInToday = state.engagement.lastCheckInDate === todayStr;
  if (checkinBtn) {
    if (isCheckedInToday) {
      checkinBtn.innerHTML = `<span>✅</span><span>Checked In Today (${streak}🔥)</span>`;
      checkinBtn.className =
        'px-4 py-2 bg-emerald-100 text-emerald-950 font-bold text-xs sm:text-sm rounded-xl cursor-default text-center flex items-center justify-center gap-1.5 shadow-xs border border-emerald-300';
    } else {
      checkinBtn.innerHTML = `<span>🔥</span><span>Daily Check-In (+1 Streak)</span>`;
      checkinBtn.className =
        'px-4 py-2 bg-amber-400 hover:bg-amber-500 text-stone-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-soft flex items-center justify-center gap-1.5 cursor-pointer text-center pulse-subtle';
    }
  }

  // Notification status
  const notifGranted = typeof Notification !== 'undefined' && Notification.permission === 'granted';
  if (notifBtnLabel) {
    if (notifGranted) {
      notifBtnLabel.textContent = 'Reminders Active';
    } else {
      notifBtnLabel.textContent = 'Enable Daily Reminders';
    }
  }

  if (testNotifBtn) {
    if (notifGranted) {
      testNotifBtn.classList.remove('hidden');
    } else {
      testNotifBtn.classList.add('hidden');
    }
  }

  if (notifNote) {
    if (notifGranted) {
      notifNote.textContent = '🔔 Daily Reminders are active! You will get friendly notifications to check lent items and do casual spot-checks.';
    } else {
      notifNote.textContent = '🔔 Turn on notifications to receive friendly nudges when lent items are due or for your quick 15s check.';
    }
  }
}

// Daily Check-In Action
window.handleDailyCheckIn = function () {
  const todayStr = new Date().toISOString().slice(0, 10);
  if (state.engagement.lastCheckInDate === todayStr) {
    showToast(`You already checked in today! Streak: ${state.engagement.streak} 🔥`);
    return;
  }

  state.engagement.streak = (state.engagement.streak || 0) + 1;
  state.engagement.lastCheckInDate = todayStr;
  state.engagement.totalCheckIns = (state.engagement.totalCheckIns || 0) + 1;
  saveEngagement();
  renderEngagementStatus();

  showToast(`🎉 Streak increased to ${state.engagement.streak} days! Keeping home organized.`);

  // If notifications enabled, trigger a celebratory reminder confirmation
  if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
    try {
      new Notification('FindIt: Check-In Complete! 🔥', {
        body: `Day ${state.engagement.streak} locked in! Your home items and lent belongings are right in memory.`,
        icon: './icon.svg',
      });
    } catch (e) {
      console.warn('Notification error:', e);
    }
  }
};

// Web Notification Handling
window.toggleDailyNotifications = async function () {
  if (typeof Notification === 'undefined') {
    showToast('Notifications are not supported on this browser.');
    return;
  }

  if (Notification.permission === 'granted') {
    showToast('Daily reminders are already active on this device!');
    renderEngagementStatus();
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      state.engagement.notificationsEnabled = true;
      saveEngagement();
      renderEngagementStatus();
      showToast('🔔 Daily reminders enabled! You will stay on top of all your items.');

      new Notification('FindIt Reminders Active 🌟', {
        body: 'Welcome! You will receive gentle reminders so you never misplace tools or forget lent items.',
        icon: './icon.svg',
      });
    } else {
      showToast('Notifications were not granted. You can re-enable anytime in browser settings.');
    }
  } catch (err) {
    console.error('Notification permission error:', err);
    showToast('Could not request notification permission.');
  }
};

window.sendTestNotification = function () {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') {
    showToast('Please enable notifications first.');
    return;
  }

  const sampleItems = ['Passports', 'Cordless Drill', 'Extra Car Keys', 'First Aid Kit'];
  const randomItem = sampleItems[Math.floor(Math.random() * sampleItems.length)];

  try {
    new Notification('FindIt: 15s Memory Spot Check 📍', {
      body: `Quick check! Do you know where your ${randomItem} is stored? Tap to check!`,
      icon: './icon.svg',
      badge: './icon.svg',
    });
    showToast('Test notification sent! Check your screen/banner.');
  } catch (err) {
    console.warn('Error creating test notification:', err);
    showToast('Could not deliver notification.');
  }
};

// Dynamic Filter & Sort Event Handlers
window.handleTypeFilterChange = function (val) {
  state.selectedCategory = val;
  renderApp();
};

window.handleLocationFilterChange = function (val) {
  state.selectedRoom = val;
  renderApp();
};

window.handleSortOrderChange = function (val) {
  state.sortBy = val;
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

window.resetAllFilters = function () {
  state.selectedCategory = 'All';
  state.selectedRoom = 'All';
  state.filterLentOnly = false;
  state.filterLowStockOnly = false;
  state.filterGuestOnly = false;
  state.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderApp();
  showToast('Filters reset • Showing all items');
};

window.clearAllFilters = function () {
  resetAllFilters();
};

window.clearSearchInput = function () {
  state.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderApp();
};

// Persistent Bottom Bar Page Navigation Router
window.switchPage = function (pageId) {
  state.activePage = pageId;
  const pageList = ['home', 'add', 'streak', 'spotcheck', 'guide', 'about'];

  pageList.forEach((p) => {
    const pageEl = document.getElementById(`view-${p}`);
    if (pageEl) {
      if (p === pageId) {
        pageEl.classList.remove('hidden');
        pageEl.classList.add('page-enter');
      } else {
        pageEl.classList.add('hidden');
        pageEl.classList.remove('page-enter');
      }
    }

    const navBtn = document.getElementById(`nav-btn-${p}`);
    if (navBtn) {
      if (p === 'add') {
        // Add button preserves its colorful elevated pill design
      } else {
        if (p === pageId) {
          navBtn.className =
            'nav-tab-btn active flex flex-col items-center justify-center gap-1 px-3 py-1 rounded-xl transition-all cursor-pointer text-amber-600 font-extrabold bg-amber-50/80 shadow-xs ring-1 ring-amber-300';
        } else {
          navBtn.className =
            'nav-tab-btn flex flex-col items-center justify-center gap-1 px-3 py-1 rounded-xl transition-all cursor-pointer text-stone-500 hover:text-stone-900 font-medium';
        }
      }
    }
  });

  // Page-specific initializers
  if (pageId === 'home') {
    renderApp();
  } else if (pageId === 'add') {
    initAddView();
  } else if (pageId === 'streak') {
    renderEngagementStatus();
  } else if (pageId === 'spotcheck') {
    initSpotCheckPage();
  } else if (pageId === 'guide') {
    initGuidePage();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
};

window.handleNavItemsClick = function () {
  switchPage('home');
};

window.openAboutModal = function () {
  switchPage('about');
};

window.openHabitsModal = function () {
  switchPage('streak');
};

function itemQuantity(item) {
  return item.consumable?.quantity ?? 0;
}

function renderMainView() {
  const container = document.getElementById('main-content-view');
  if (!container) return;

  // View switch tab styles (Centered)
  const btnGrid = document.getElementById('view-tab-grid');
  const btnRooms = document.getElementById('view-tab-rooms');
  const btnLending = document.getElementById('view-tab-lending');

  if (btnGrid)
    btnGrid.className = `px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer text-center ${
      state.viewMode === 'grid'
        ? 'bg-white text-stone-900 shadow-soft'
        : 'text-stone-600 hover:text-stone-900'
    }`;
  if (btnRooms)
    btnRooms.className = `px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer text-center ${
      state.viewMode === 'rooms'
        ? 'bg-white text-stone-900 shadow-soft'
        : 'text-stone-600 hover:text-stone-900'
    }`;
  if (btnLending)
    btnLending.className = `px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center ${
      state.viewMode === 'lending'
        ? 'bg-white text-stone-900 shadow-soft'
        : 'text-stone-600 hover:text-stone-900'
    }`;

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
      <div class="p-12 text-center bg-white/95 rounded-3xl border border-stone-200 space-y-4 shadow-soft w-full max-w-xl mx-auto flex flex-col items-center justify-center">
        <div class="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mx-auto">
          <i data-lucide="search" class="w-7 h-7"></i>
        </div>
        <h3 class="text-lg font-bold text-stone-900">No items found</h3>
        <p class="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto text-center">
          ${
            state.searchQuery
              ? `No matches for "${escapeHtml(state.searchQuery)}". Check spelling or add it now.`
              : 'No items match your active category or filters.'
          }
        </p>
        <div class="flex flex-wrap items-center justify-center gap-2 pt-2">
          ${
            state.searchQuery || state.selectedCategory !== 'All' || state.filterGuestOnly || state.filterLowStockOnly
              ? `<button onclick="clearAllFilters()" class="px-4 py-2 text-xs font-semibold border border-stone-200 rounded-xl text-stone-600 hover:bg-stone-50 cursor-pointer">Clear filters</button>`
              : ''
          }
          <button
            onclick="openQuickAddModal()"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-stone-800 transition-colors cursor-pointer shadow-soft"
          >
            <i data-lucide="plus" class="w-4 h-4 text-amber-400"></i>
            <span>Add this item now</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  const itemsHtml = filtered.map((item) => renderItemCardHtml(item)).join('');

  container.innerHTML = `
    <div class="space-y-5 w-full flex flex-col items-center">
      
      <!-- List Meta & Category Color Legend - Centered -->
      <div class="w-full flex flex-col items-center justify-center gap-3 text-xs sm:text-sm text-stone-500 px-2 text-center">
        <div class="flex items-center justify-center gap-2">
          <span>Showing <strong>${filtered.length}</strong> of <strong>${state.items.length}</strong> total items</span>
          <span>&bull;</span>
          <span class="text-amber-800 font-medium">Scroll down to explore all</span>
        </div>

        <!-- Color Codification Guide showing the whole card colors -->
        <div class="w-full flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-semibold text-stone-600 px-3 py-2 bg-white/75 backdrop-blur-xs rounded-2xl border border-stone-200/90 shadow-xs text-center">
          <span class="text-stone-400 font-bold uppercase tracking-wider text-[10px] mr-1">🎨 Entire Card Color:</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-100 text-amber-950 border border-amber-300">🧰 Tools</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-950 border border-indigo-300">⚡ Tech</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-yellow-100 text-yellow-950 border border-yellow-300">📄 Docs</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300">🩹 Health</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-teal-100 text-teal-950 border border-teal-300">🧼 Household</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-pink-100 text-pink-950 border border-pink-300">🧣 Seasonal</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-sky-100 text-sky-950 border border-sky-300">💻 Office</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-purple-100 text-purple-950 border border-purple-300">📦 Other</span>
        </div>
      </div>

      <!-- Items Grid: 1 col on mobile, 2 cols on tablet/desktop - Centered items -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        ${itemsHtml}
      </div>

      <!-- Scroll Back to Top Button - Centered -->
      <div class="w-full pt-6 flex flex-col items-center justify-center text-center space-y-2">
        <button
          onclick="scrollToTopView()"
          class="px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 hover:text-stone-900 rounded-2xl text-xs sm:text-sm font-semibold shadow-soft flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          <i data-lucide="arrow-up" class="w-4 h-4 text-stone-500"></i>
          <span>You have reached the end &bull; Back to Top</span>
        </button>
      </div>
    </div>
  `;
}

// Render Item Card - Color Codification Applied Across the ENTIRE Card
function renderItemCardHtml(item) {
  const isLent = item.lent && item.lent.isLent;
  const isLowConsumable =
    item.consumable?.isConsumable &&
    (item.consumable.quantity ?? 0) <= (item.consumable.minThreshold ?? 0);

  const theme = CATEGORY_THEMES[item.category] || CATEGORY_THEMES['Other'];

  return `
    <div class="${theme.themeClass} ${theme.bg} ${theme.border} rounded-3xl border-2 p-5 sm:p-6 flex flex-col items-center justify-between card-hover shadow-soft relative group max-w-full text-center transition-all ${
      isLent ? 'ring-4 ring-rose-400 border-rose-400' : ''
    }">
      
      <!-- Card Top Content - Centered Horizontally & Vertically -->
      <div class="space-y-4 w-full flex flex-col items-center justify-center text-center">
        
        <!-- Room & Category Pills Row - Centered -->
        <div class="flex flex-wrap items-center justify-center gap-2 w-full">
          <span class="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-stone-800 bg-white/95 border border-stone-200/90 px-3 py-1 rounded-full shadow-xs">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500 shrink-0"></i>
            <span>${escapeHtml(item.location.room)}</span>
          </span>

          <span class="inline-flex items-center justify-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full border shadow-xs ${theme.badge}">
            <i data-lucide="${theme.icon || 'tag'}" class="w-3.5 h-3.5 shrink-0"></i>
            <span>${escapeHtml(item.category)}</span>
          </span>

          ${
            item.isEssentialForGuests
              ? `<span class="text-[11px] font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center justify-center gap-1 shadow-xs" title="Included in House Guide">
                  <i data-lucide="home" class="w-3 h-3 text-emerald-700 shrink-0"></i>
                  <span>Guest Guide</span>
                </span>`
              : ''
          }
        </div>

        <!-- Big Item Title (Significantly Increased Font Size & Centered) -->
        <div class="w-full text-center space-y-1">
          <h4 class="text-xl sm:text-2xl font-black text-stone-900 tracking-tight leading-snug break-words text-center">
            ${escapeHtml(item.name)}
          </h4>
        </div>

        ${
          item.photoUrl
            ? `<div class="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-white/80 shadow-soft">
                <img src="${item.photoUrl}" alt="Photo Memory Clue for ${escapeHtml(item.name)}" class="w-full h-44 object-cover" />
              </div>`
            : ''
        }

        <!-- Spot & Exact Location Box - Translucent so Whole Card Pastel Radiates Through -->
        <div class="w-full ${theme.innerBox || 'bg-white/75 border-amber-200/90'} backdrop-blur-xs rounded-2xl p-4 border shadow-xs flex flex-col items-center justify-center text-center space-y-2">
          
          <!-- Spot / Shelf -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-center">
            <span class="text-xs uppercase tracking-wider font-extrabold text-stone-500">Spot:</span>
            <span class="text-sm sm:text-base font-bold text-stone-900 break-words">${escapeHtml(item.location.zone)}</span>
          </div>

          <!-- Container -->
          ${
            item.location.container
              ? `<div class="text-xs font-medium text-stone-700 flex items-center justify-center gap-1.5 text-center">
                  <span class="text-stone-500 font-normal">Inside:</span>
                  <span class="font-bold break-words">${escapeHtml(item.location.container)}</span>
                </div>`
              : ''
          }

          <!-- Visual Clue -->
          ${
            item.location.landmark
              ? `<div class="text-xs text-amber-950 bg-amber-50/90 px-3.5 py-1.5 rounded-xl border border-amber-200/90 italic text-center max-w-full break-words">
                  💡 &ldquo;${escapeHtml(item.location.landmark)}&rdquo;
                </div>`
              : ''
          }
        </div>

        <!-- Notes if provided - Centered -->
        ${
          item.description
            ? `<p class="text-xs sm:text-sm text-stone-700 text-center max-w-sm mx-auto leading-relaxed break-words">${escapeHtml(item.description)}</p>`
            : ''
        }

        <!-- Lent Banner if currently borrowed - Centered & Colorful Soft Rose Accent -->
        ${
          isLent
            ? `<div class="w-full bg-rose-50 border border-rose-300 rounded-2xl p-3 text-xs flex flex-col sm:flex-row items-center justify-center gap-2.5 text-rose-950 text-center">
                <div class="flex items-center justify-center gap-1.5">
                  <i data-lucide="share-2" class="w-4 h-4 text-rose-600 shrink-0"></i>
                  <span>Lent to <strong>${escapeHtml(item.lent.lentTo || 'Someone')}</strong></span>
                </div>
                <button
                  onclick="returnLentItem('${item.id}')"
                  class="text-xs bg-white border border-rose-300 px-3.5 py-1 rounded-xl font-bold text-rose-900 hover:bg-rose-100 transition-colors cursor-pointer shadow-xs text-center"
                >
                  Mark Returned
                </button>
              </div>`
            : ''
        }

        <!-- Stock tracker if consumable - Centered -->
        ${
          item.consumable?.isConsumable
            ? `<div class="flex flex-wrap items-center justify-center gap-3 bg-white/85 rounded-2xl px-4 py-2 border ${theme.border} text-xs shadow-xs text-center">
                <div class="flex items-center justify-center gap-1.5">
                  <span class="text-stone-500">In Stock:</span>
                  <strong class="${isLowConsumable ? 'text-red-600 font-extrabold' : 'text-stone-900 font-bold'} text-sm">
                    ${item.consumable.quantity} ${escapeHtml(item.consumable.unit || 'items')}
                  </strong>
                  ${
                    isLowConsumable
                      ? `<span class="bg-red-100 text-red-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Low</span>`
                      : ''
                  }
                </div>
                <div class="flex items-center justify-center gap-1.5">
                  <button
                    onclick="changeItemQuantity('${item.id}', -1)"
                    class="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-800 cursor-pointer"
                    title="Decrease count"
                  >
                    -
                  </button>
                  <button
                    onclick="changeItemQuantity('${item.id}', 1)"
                    class="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-800 cursor-pointer"
                    title="Increase count"
                  >
                    +
                  </button>
                </div>
              </div>`
            : ''
        }
      </div>

      <!-- Card Bottom Actions - Centered Horizontally & Vertically -->
      <div class="w-full mt-5 pt-4 border-t ${theme.border} flex flex-wrap items-center justify-center gap-2 text-xs">
        
        <!-- Still Here (Verification) Button - Centered -->
        <button
          onclick="verifyLocation('${item.id}')"
          class="text-xs font-bold text-emerald-950 bg-emerald-100/90 hover:bg-emerald-200 border border-emerald-300 cursor-pointer px-3.5 py-1.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs text-center"
          title="Confirm item is still in this spot"
        >
          <i data-lucide="check" class="w-4 h-4 text-emerald-700 shrink-0"></i>
          <span>Still here</span>
        </button>

        <!-- Lend / Return Button -->
        <button
          onclick="toggleLentStatus('${item.id}')"
          class="text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white/90 hover:bg-white border border-stone-300 cursor-pointer px-3 py-1.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs text-center"
        >
          <i data-lucide="${isLent ? 'corner-down-left' : 'share-2'}" class="w-3.5 h-3.5 text-stone-500 shrink-0"></i>
          <span>${isLent ? 'Returned' : 'Lend'}</span>
        </button>

        <!-- Edit Button -->
        <button
          onclick="editItem('${item.id}')"
          class="text-stone-600 hover:text-stone-900 bg-white/90 hover:bg-white border border-stone-300 cursor-pointer p-2 rounded-xl transition-colors shadow-xs"
          title="Edit Item (All fields open)"
        >
          <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
        </button>

        <!-- Delete Button -->
        <button
          onclick="deleteItem('${item.id}')"
          class="text-stone-400 hover:text-red-700 bg-white hover:bg-red-50 border border-stone-300 hover:border-red-300 cursor-pointer p-2 rounded-xl transition-colors shadow-xs"
          title="Delete Item"
        >
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `;
}

// Rooms Explorer View - Centered
function renderRoomsView(container) {
  const roomsHtml = state.rooms.map((room) => {
    const roomItems = state.items.filter((i) => i.location.room === room.name);
    return `
      <div class="bg-white/95 rounded-3xl border border-stone-200/90 p-5 space-y-4 shadow-soft flex flex-col items-center justify-between text-center">
        
        <div class="flex flex-col items-center justify-center text-center space-y-2">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-stone-800 shadow-xs mx-auto">
            <i data-lucide="${escapeHtml(room.icon || 'archive')}" class="w-6 h-6 text-amber-600"></i>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-stone-900">${escapeHtml(room.name)}</h3>
            <p class="text-xs text-stone-500">${escapeHtml(room.description || '')}</p>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
            ${roomItems.length} items stored
          </span>
        </div>

        <!-- Items located inside this room -->
        <div class="border-t border-stone-100 pt-3 space-y-2 w-full text-center">
          <span class="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">Items in this room:</span>
          ${
            roomItems.length === 0
              ? `<p class="text-xs text-stone-400 italic py-2 text-center">No items listed in this room yet.</p>`
              : `<div class="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                  ${roomItems
                    .map(
                      (item) => `
                    <div class="flex items-center justify-between text-xs bg-stone-50 p-2.5 rounded-xl border border-stone-200/70 hover:bg-stone-100/70 transition-colors">
                      <div class="text-left pr-2">
                        <span class="font-bold text-stone-900">${escapeHtml(item.name)}</span>
                        <div class="text-[11px] text-stone-500">${escapeHtml(item.location.zone)} ${item.location.container ? `· ${escapeHtml(item.location.container)}` : ''}</div>
                      </div>
                      <button
                        onclick="editItem('${item.id}')"
                        class="text-stone-400 hover:text-stone-800 cursor-pointer p-1.5 rounded-lg"
                        title="Edit Item"
                      >
                        <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
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
          class="w-full py-2.5 px-3 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-center"
        >
          <i data-lucide="plus" class="w-3.5 h-3.5 text-amber-500 shrink-0"></i>
          <span>Add item to ${escapeHtml(room.name)}</span>
        </button>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="space-y-5 w-full flex flex-col items-center">
      <div class="text-center text-xs sm:text-sm text-stone-500">
        Organized across <strong>${state.rooms.length}</strong> household rooms &amp; spaces
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        ${roomsHtml}
      </div>
    </div>
  `;
}

// Lending View - Centered & Soft Coral Codification
function renderLendingView(container) {
  const lentItems = state.items.filter((i) => i.lent && i.lent.isLent);

  container.innerHTML = `
    <div class="space-y-5 w-full flex flex-col items-center">
      <div class="bg-white/95 border border-stone-200 rounded-3xl p-6 sm:p-7 space-y-4 shadow-soft w-full flex flex-col items-center justify-center text-center">
        <div class="text-center space-y-1">
          <h3 class="text-lg sm:text-xl font-extrabold text-stone-900">Lent Out Belongings</h3>
          <p class="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
            Know exactly who borrowed your tools, books, and gear so they always make it back home.
          </p>
        </div>

        <button
          onclick="openRecordLoanModal()"
          class="px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-soft text-center"
        >
          <i data-lucide="plus" class="w-4 h-4 text-amber-400"></i>
          <span>Record a Loan</span>
        </button>

        ${
          lentItems.length === 0
            ? `<div class="p-8 text-center bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-2 w-full max-w-md mx-auto">
                <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <i data-lucide="check" class="w-6 h-6"></i>
                </div>
                <h4 class="text-sm font-bold text-stone-800">Everything is at Home</h4>
                <p class="text-xs text-stone-500">You haven't marked any items as borrowed. When you lend something to a friend or neighbor, log it here!</p>
              </div>`
            : `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pt-2">
                ${lentItems
                  .map(
                    (item) => `
                  <div class="bg-rose-100 border-2 border-rose-300 rounded-2xl p-5 flex flex-col items-center justify-between space-y-3 text-center shadow-soft">
                    <div class="space-y-2 w-full flex flex-col items-center">
                      <div class="flex items-center justify-center gap-2">
                        <span class="text-sm font-black text-stone-900">${escapeHtml(item.name)}</span>
                        <span class="text-[10px] font-bold bg-rose-200 text-rose-950 border border-rose-400 px-2.5 py-0.5 rounded-full uppercase">Lent Out</span>
                      </div>
                      
                      <div class="text-xs text-stone-800 flex items-center justify-center gap-1.5 font-medium">
                        <i data-lucide="user" class="w-4 h-4 text-rose-500"></i>
                        <span>Borrower: <strong>${escapeHtml(item.lent.lentTo || 'Someone')}</strong></span>
                      </div>

                      ${
                        item.lent.lentDate
                          ? `<div class="text-xs text-stone-500">Lent on: ${escapeHtml(item.lent.lentDate)}</div>`
                          : ''
                      }
                      ${
                        item.lent.expectedReturn
                          ? `<div class="text-xs text-rose-700 font-semibold">Expected return: ${escapeHtml(item.lent.expectedReturn)}</div>`
                          : ''
                      }
                      ${
                        item.lent.notes
                          ? `<div class="text-xs text-stone-600 italic bg-white p-2.5 rounded-xl border border-rose-100 max-w-sm text-center">
                              &ldquo;${escapeHtml(item.lent.notes)}&rdquo;
                            </div>`
                          : ''
                      }
                    </div>

                    <div class="pt-3 border-t border-rose-200/80 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs w-full">
                      <span class="text-stone-500">Home: ${escapeHtml(item.location.room)}</span>
                      <button
                        onclick="returnLentItem('${item.id}')"
                        class="px-4 py-2 bg-white hover:bg-stone-50 border border-rose-300 rounded-xl font-bold text-rose-900 transition-colors cursor-pointer shadow-soft text-center"
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

window.clearSearchInput = function () {
  state.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  renderApp();
};

window.clearAllFilters = function () {
  state.searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  state.selectedCategory = 'All';
  state.filterLowStockOnly = false;
  state.filterGuestOnly = false;
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
  showToast('Spot confirmed! Location refreshed.');
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

window.returnLentItem = function (id) {
  const item = state.items.find((i) => i.id === id);
  if (!item) return;

  state.items = state.items.map((i) =>
    i.id === id
      ? { ...i, lent: { isLent: false }, lastVerifiedAt: new Date().toISOString() }
      : i
  );
  saveItems();
  renderApp();
  showToast(`"${item.name}" returned home to ${item.location.room}`);
};

window.toggleLentStatus = function (id) {
  const item = state.items.find((i) => i.id === id);
  if (!item) return;

  if (item.lent && item.lent.isLent) {
    returnLentItem(id);
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
      showToast(`Marked "${item.name}" as lent to ${borrower.trim()}`);
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

// =========================================================================
// EFFORTLESS 3-SECOND CAPTURE & ADD VIEW CONTROLLERS
// =========================================================================

window.openQuickAddModal = function () {
  state.editingItemId = null;
  switchPage('add');
};

window.openQuickAddModalWithRoom = function (roomName) {
  state.editingItemId = null;
  switchPage('add');
  setAddCaptureMode('form');
  setTimeout(() => {
    const roomSelect = document.getElementById('add-item-room');
    if (roomSelect) roomSelect.value = roomName;
  }, 100);
};

window.closeQuickAddModal = function () {
  switchPage('home');
};

function initAddView() {
  populatePhotoSelect();
  populateTourSelect();
  populateDetailedAddForm();
  setAddCaptureMode(state.addCaptureMode || 'voice');
}

window.setAddCaptureMode = function (mode) {
  state.addCaptureMode = mode;
  const modes = ['voice', 'photo', 'tour', 'form'];

  modes.forEach((m) => {
    const panel = document.getElementById(`add-panel-${m}`);
    const tabBtn = document.getElementById(`add-tab-${m}`);

    if (panel) {
      if (m === mode) {
        panel.classList.remove('hidden');
        panel.classList.add('page-enter');
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('page-enter');
      }
    }

    if (tabBtn) {
      if (m === mode) {
        tabBtn.className =
          'px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer bg-white text-stone-900 shadow-soft flex items-center gap-1.5';
      } else {
        tabBtn.className =
          'px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer text-stone-600 hover:text-stone-900 flex items-center gap-1.5';
      }
    }
  });

  if (mode === 'voice') {
    setTimeout(() => {
      const input = document.getElementById('voice-nlp-input');
      if (input) input.focus();
    }, 150);
  }

  lucide.createIcons();
};

// -------------------------------------------------------------------------
// 1. VOICE & NATURAL LANGUAGE CAPTURE (CONFIRM, DON'T CORRECT)
// -------------------------------------------------------------------------

let voiceRecognitionInstance = null;
window.toggleVoiceRecognition = function () {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast('Voice recognition not supported on this browser. Type below!');
    const input = document.getElementById('voice-nlp-input');
    if (input) input.focus();
    return;
  }

  const btn = document.getElementById('btn-voice-record');
  const label = document.getElementById('voice-record-label');

  if (state.isRecordingVoice && voiceRecognitionInstance) {
    voiceRecognitionInstance.stop();
    state.isRecordingVoice = false;
    if (btn) btn.classList.remove('recording-pulse');
    if (label) label.textContent = 'Tap microphone to speak';
    return;
  }

  try {
    voiceRecognitionInstance = new SpeechRecognition();
    voiceRecognitionInstance.continuous = false;
    voiceRecognitionInstance.interimResults = true;
    voiceRecognitionInstance.lang = 'en-US';

    voiceRecognitionInstance.onstart = function () {
      state.isRecordingVoice = true;
      if (btn) btn.classList.add('recording-pulse');
      if (label) label.textContent = 'Listening... Speak what you stored!';
    };

    voiceRecognitionInstance.onresult = function (event) {
      const transcript = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join('');
      const input = document.getElementById('voice-nlp-input');
      if (input) {
        input.value = transcript;
        handleNlpInputChange(transcript);
      }
    };

    voiceRecognitionInstance.onerror = function (e) {
      console.warn('Voice speech error:', e);
      state.isRecordingVoice = false;
      if (btn) btn.classList.remove('recording-pulse');
      if (label) label.textContent = 'Tap microphone to speak';
      showToast('Could not record voice. Type your sentence below.');
    };

    voiceRecognitionInstance.onend = function () {
      state.isRecordingVoice = false;
      if (btn) btn.classList.remove('recording-pulse');
      if (label) label.textContent = 'Tap microphone to speak';
    };

    voiceRecognitionInstance.start();
  } catch (err) {
    console.error('Voice start error:', err);
    state.isRecordingVoice = false;
    showToast('Microphone error. You can type your sentence directly.');
  }
};

let currentParsedNlp = null;

function parseSentence(raw) {
  if (!raw || !raw.trim()) return null;
  let text = raw.trim();

  // Strip leading conversational phrases
  text = text.replace(/^(?:i\s+(?:just\s+)?(?:put|placed|stored|kept|left|moved)\s+(?:the|my|a|an)?\s*)/i, '');
  text = text.replace(/^(?:put|place|store|keep|leave)\s+(?:the|my|a|an)?\s*/i, '');

  const roomKeywords = [
    { match: /master\s+bedroom|bedroom/i, name: 'Master Bedroom' },
    { match: /garage|workshop/i, name: 'Garage & Workshop' },
    { match: /kitchen|pantry/i, name: 'Kitchen & Pantry' },
    { match: /hallway\s+closet|hallway|linen\s+closet|closet/i, name: 'Hallway Closet' },
    { match: /living\s+room/i, name: 'Living Room' },
    { match: /home\s+office|office|study/i, name: 'Home Office' },
    { match: /bathroom/i, name: 'Bathroom' },
    { match: /basement/i, name: 'Basement' },
    { match: /attic/i, name: 'Attic' },
  ];

  // Match any custom rooms
  state.rooms.forEach((r) => {
    const escaped = r.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    roomKeywords.unshift({ match: new RegExp(escaped, 'i'), name: r.name });
  });

  let detectedRoom = null;
  let detectedZone = 'Main Storage Shelf';
  let itemName = text;

  for (const rk of roomKeywords) {
    const m = text.match(rk.match);
    if (m) {
      detectedRoom = rk.name;
      const roomIndex = m.index;
      const roomLength = m[0].length;

      let before = text.substring(0, roomIndex).replace(/(?:\s+in|\s+on|\s+at|\s+inside)\s*$/i, '').trim();
      let after = text.substring(roomIndex + roomLength).trim();
      after = after.replace(/^(?:in|on|at|inside|the)\s+/i, '').trim();

      if (before) itemName = before;
      if (after) detectedZone = after;
      break;
    }
  }

  if (!detectedRoom) {
    const splitIn = text.split(/\s+in\s+|\s+on\s+|\s+inside\s+/i);
    if (splitIn.length > 1) {
      itemName = splitIn[0].trim();
      detectedZone = splitIn[1].trim();
      detectedRoom = state.rooms[0]?.name || 'Living Room';
    } else {
      itemName = text;
      detectedRoom = state.rooms[0]?.name || 'Living Room';
      detectedZone = 'Main Shelf';
    }
  }

  itemName = itemName.replace(/^(?:the|my|a|an)\s+/i, '').trim();
  if (!itemName) itemName = 'Stored Belonging';
  itemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);
  detectedZone = detectedZone.charAt(0).toUpperCase() + detectedZone.slice(1);

  // Infer category automatically
  let category = 'Other';
  const lowerItem = itemName.toLowerCase();
  if (lowerItem.match(/passport|document|paper|tax|deed|certificate|card|cash|will|receipt|id|ticket/)) {
    category = 'Documents & Valuables';
  } else if (lowerItem.match(/drill|hammer|saw|screw|wrench|pliers|tape|hardware|tool|ladder|nail|blade/)) {
    category = 'Tools & Hardware';
  } else if (lowerItem.match(/battery|cable|charger|remote|phone|laptop|hdmi|adapter|earbuds|usb|wire/)) {
    category = 'Electronics & Cables';
  } else if (lowerItem.match(/band\s*aid|medicine|pills|first\s*aid|antihistamine|vitamin|syrup|spray/)) {
    category = 'Health & Medication';
  } else if (lowerItem.match(/bulb|soap|towel|cleaner|detergent|filter|foil|bag|sponge|bleach|wipe/)) {
    category = 'Household & Utility';
  } else if (lowerItem.match(/coat|gloves|scarf|jacket|umbrella|boots|sweater|blanket|socks/)) {
    category = 'Seasonal & Apparel';
  } else if (lowerItem.match(/pen|paper|stapler|notebook|marker|printer|envelope|folder/)) {
    category = 'Office & Workspace';
  }

  return {
    name: itemName,
    room: detectedRoom,
    zone: detectedZone,
    category,
  };
}

window.handleNlpInputChange = function (val) {
  const preview = document.getElementById('nlp-parse-preview');
  if (!val || val.trim().length < 2) {
    if (preview) preview.classList.add('hidden');
    currentParsedNlp = null;
    return;
  }

  const parsed = parseSentence(val);
  currentParsedNlp = parsed;

  if (preview && parsed) {
    preview.classList.remove('hidden');
    const pItem = document.getElementById('preview-item-name');
    const pRoom = document.getElementById('preview-room-name');
    const pZone = document.getElementById('preview-zone-name');

    if (pItem) pItem.textContent = parsed.name;
    if (pRoom) pRoom.textContent = parsed.room;
    if (pZone) pZone.textContent = parsed.zone;
  }
};

window.confirmNlpCapture = function () {
  if (!currentParsedNlp) {
    const val = document.getElementById('voice-nlp-input')?.value;
    if (val) currentParsedNlp = parseSentence(val);
  }
  if (!currentParsedNlp) {
    showToast('Please speak or type what you put away first.');
    return;
  }

  const now = new Date().toISOString();
  const newItem = {
    id: `item-${Date.now()}`,
    name: currentParsedNlp.name,
    category: currentParsedNlp.category,
    location: {
      room: currentParsedNlp.room,
      zone: currentParsedNlp.zone,
      container: '',
      landmark: 'Captured at moment of putting away',
    },
    description: '',
    tags: [currentParsedNlp.name.toLowerCase(), currentParsedNlp.room.toLowerCase()],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: now,
    createdAt: now,
  };

  state.items = [newItem, ...state.items];
  saveItems();

  // Boost streak check-in
  handleDailyCheckIn();

  // Reset inputs
  const nlpInput = document.getElementById('voice-nlp-input');
  if (nlpInput) nlpInput.value = '';
  document.getElementById('nlp-parse-preview')?.classList.add('hidden');
  currentParsedNlp = null;

  showToast(`✨ Saved "${newItem.name}" in ${newItem.location.room}!`);
  switchPage('home');
};

// -------------------------------------------------------------------------
// 2. PHOTO-FIRST CLUE CAPTURE
// -------------------------------------------------------------------------

let currentPhotoDataUrl = null;

function populatePhotoSelect() {
  const sel = document.getElementById('photo-room-select');
  if (!sel) return;
  sel.innerHTML = state.rooms
    .map((r) => `<option value="${escapeHtml(r.name)}">${escapeHtml(r.name)}</option>`)
    .join('');
}

window.handlePhotoUpload = function (event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      // Resize & compress to max 600px
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;
      const maxDim = 600;

      if (width > height) {
        if (width > maxDim) {
          height *= maxDim / width;
          width = maxDim;
        }
      } else {
        if (height > maxDim) {
          width *= maxDim / height;
          height = maxDim;
        }
      }

      canvas.width = Math.round(width);
      canvas.height = Math.round(height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const compressed = canvas.toDataURL('image/jpeg', 0.72);
      currentPhotoDataUrl = compressed;

      const previewImg = document.getElementById('photo-preview-img');
      const previewContainer = document.getElementById('photo-preview-container');
      if (previewImg) previewImg.src = compressed;
      if (previewContainer) previewContainer.classList.remove('hidden');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

window.clearPhotoPreview = function () {
  currentPhotoDataUrl = null;
  const previewContainer = document.getElementById('photo-preview-container');
  if (previewContainer) previewContainer.classList.add('hidden');
  const fileInput = document.getElementById('photo-file-input');
  if (fileInput) fileInput.value = '';
};

window.savePhotoClueItem = function () {
  if (!currentPhotoDataUrl) {
    showToast('Please take or choose a photo first!');
    return;
  }

  const room = document.getElementById('photo-room-select')?.value || state.rooms[0]?.name || 'Living Room';
  const customName = document.getElementById('photo-item-name')?.value.trim();
  const name = customName || `Photo Memory Clue (${room})`;

  const now = new Date().toISOString();
  const newItem = {
    id: `item-${Date.now()}`,
    name,
    category: 'Household & Utility',
    photoUrl: currentPhotoDataUrl,
    location: {
      room,
      zone: 'Visual Photo Area',
      container: '',
      landmark: 'Captured photo memory clue',
    },
    description: 'Visual shelf / box memory clue.',
    tags: ['photo', 'clue', room.toLowerCase()],
    lent: { isLent: false },
    isEssentialForGuests: false,
    lastVerifiedAt: now,
    createdAt: now,
  };

  state.items = [newItem, ...state.items];
  saveItems();
  handleDailyCheckIn();

  clearPhotoPreview();
  const nameInput = document.getElementById('photo-item-name');
  if (nameInput) nameInput.value = '';

  showToast(`📸 Saved photo clue for ${room}!`);
  switchPage('home');
};

// -------------------------------------------------------------------------
// 3. BULK "TOUR MODE" CAPTURE (Setup 50 items in 5 minutes)
// -------------------------------------------------------------------------

let tourRecognitionInstance = null;

function populateTourSelect() {
  const sel = document.getElementById('tour-room-select');
  if (!sel) return;
  sel.innerHTML = state.rooms
    .map((r) => `<option value="${escapeHtml(r.name)}">${escapeHtml(r.name)}</option>`)
    .join('');
}

window.toggleTourVoice = function () {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast('Speech recognition not available. Please type items separated by commas.');
    return;
  }

  const label = document.getElementById('tour-voice-label');
  const btn = document.getElementById('btn-tour-voice');

  if (state.isRecordingTour && tourRecognitionInstance) {
    tourRecognitionInstance.stop();
    state.isRecordingTour = false;
    if (btn) btn.classList.remove('recording-pulse');
    if (label) label.textContent = 'Speak items';
    return;
  }

  try {
    tourRecognitionInstance = new SpeechRecognition();
    tourRecognitionInstance.continuous = true;
    tourRecognitionInstance.interimResults = false;
    tourRecognitionInstance.lang = 'en-US';

    tourRecognitionInstance.onstart = function () {
      state.isRecordingTour = true;
      if (btn) btn.classList.add('recording-pulse');
      if (label) label.textContent = 'Listening... Say items!';
    };

    tourRecognitionInstance.onresult = function (event) {
      const newWords = [];
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          newWords.push(event.results[i][0].transcript);
        }
      }
      if (newWords.length > 0) {
        const textarea = document.getElementById('tour-items-input');
        if (textarea) {
          const existing = textarea.value.trim();
          const joined = newWords.join(', ');
          textarea.value = existing ? `${existing}, ${joined}` : joined;
          handleTourInputChange(textarea.value);
        }
      }
    };

    tourRecognitionInstance.onend = function () {
      state.isRecordingTour = false;
      if (btn) btn.classList.remove('recording-pulse');
      if (label) label.textContent = 'Speak items';
    };

    tourRecognitionInstance.start();
  } catch (e) {
    console.error('Tour voice error:', e);
    state.isRecordingTour = false;
    showToast('Could not start microphone. You can type items with commas.');
  }
};

window.handleTourInputChange = function (val) {
  const badgesContainer = document.getElementById('tour-preview-badges');
  const labelBtn = document.getElementById('btn-save-tour-label');

  const items = val
    .split(/[,;\n]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  state.activeTourItems = items;

  if (badgesContainer) {
    badgesContainer.innerHTML = items
      .map(
        (item) =>
          `<span class="px-2.5 py-1 bg-emerald-100 text-emerald-950 font-bold text-xs rounded-lg border border-emerald-300 shadow-xs">${escapeHtml(
            item
          )}</span>`
      )
      .join('');
  }

  if (labelBtn) {
    labelBtn.textContent =
      items.length > 0
        ? `Add ${items.length} Items to Room in 1 Tap`
        : 'Add Items in Tour';
  }
};

window.saveBulkTourItems = function () {
  const room = document.getElementById('tour-room-select')?.value || state.rooms[0]?.name || 'Living Room';
  const zone = document.getElementById('tour-zone-input')?.value.trim() || 'Room Shelf / Drawer';
  const rawItems = state.activeTourItems;

  if (!rawItems || rawItems.length === 0) {
    showToast('Please speak or type at least one item to catalog.');
    return;
  }

  const now = new Date().toISOString();
  const newItems = rawItems.map((rawName, idx) => {
    const cleaned = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    return {
      id: `item-${Date.now()}-${idx}`,
      name: cleaned,
      category: inferCategoryFromName(cleaned),
      location: {
        room,
        zone,
        container: '',
        landmark: 'Cataloged via Bulk Tour Mode',
      },
      description: `Batch cataloged in ${room}`,
      tags: [cleaned.toLowerCase(), room.toLowerCase()],
      lent: { isLent: false },
      isEssentialForGuests: false,
      lastVerifiedAt: now,
      createdAt: now,
    };
  });

  state.items = [...newItems, ...state.items];
  saveItems();
  handleDailyCheckIn();

  // Reset tour input
  const textarea = document.getElementById('tour-items-input');
  if (textarea) textarea.value = '';
  const badges = document.getElementById('tour-preview-badges');
  if (badges) badges.innerHTML = '';
  state.activeTourItems = [];

  showToast(`🎉 Bulk Tour Complete! Added ${newItems.length} items to ${room}!`);
  switchPage('home');
};

function inferCategoryFromName(name) {
  const l = name.toLowerCase();
  if (l.match(/drill|hammer|saw|screw|wrench|pliers|tape|hardware|tool|ladder|nail|blade|knife/)) return 'Tools & Hardware';
  if (l.match(/passport|document|paper|tax|deed|certificate|card|cash|will|receipt|id/)) return 'Documents & Valuables';
  if (l.match(/battery|cable|charger|remote|phone|laptop|hdmi|adapter|earbuds|usb|wire/)) return 'Electronics & Cables';
  if (l.match(/band\s*aid|medicine|pills|first\s*aid|antihistamine|vitamin|syrup|spray|drops/)) return 'Health & Medication';
  if (l.match(/bulb|soap|towel|cleaner|detergent|filter|foil|bag|sponge|bleach|wipe/)) return 'Household & Utility';
  if (l.match(/coat|gloves|scarf|jacket|umbrella|boots|sweater|blanket|socks/)) return 'Seasonal & Apparel';
  if (l.match(/pen|paper|stapler|notebook|marker|printer|envelope|folder/)) return 'Office & Workspace';
  return 'Other';
}

// -------------------------------------------------------------------------
// 4. DETAILED FORM (ALL OPTIONS VISIBLE AT ONE GO)
// -------------------------------------------------------------------------

window.editItem = function (id) {
  state.editingItemId = id;
  switchPage('add');
  setAddCaptureMode('form');
  populateDetailedAddForm(state.items.find((i) => i.id === id));
};

function populateDetailedAddForm(editingItem) {
  const addTitle = document.getElementById('add-view-title');
  const catSelect = document.getElementById('add-item-category');
  const roomSelect = document.getElementById('add-item-room');
  const form = document.getElementById('full-add-form');

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
    if (addTitle) addTitle.textContent = `Edit "${editingItem.name}"`;
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
      document.getElementById('add-item-unit').value = editingItem.consumable.unit || 'items';
      document.getElementById('add-item-threshold').value = editingItem.consumable.minThreshold || 1;
    }

    const isLent = !!editingItem.lent?.isLent;
    document.getElementById('add-item-lent-toggle').checked = isLent;
    document.getElementById('lent-fields').style.display = isLent ? 'grid' : 'none';
    if (isLent) {
      document.getElementById('add-item-lent-to').value = editingItem.lent.lentTo || '';
      document.getElementById('add-item-expected-return').value = editingItem.lent.expectedReturn || '';
    } else {
      document.getElementById('add-item-lent-to').value = '';
      document.getElementById('add-item-expected-return').value = '';
    }
  } else {
    if (addTitle) addTitle.textContent = 'Add to Physical Memory';
    if (form) form.reset();
    const consFields = document.getElementById('consumable-fields');
    if (consFields) consFields.style.display = 'none';
    const lentFields = document.getElementById('lent-fields');
    if (lentFields) lentFields.style.display = 'none';
  }
}

window.toggleConsumableInputs = function () {
  const isChecked = document.getElementById('add-item-consumable-toggle').checked;
  const el = document.getElementById('consumable-fields');
  if (el) el.style.display = isChecked ? 'grid' : 'none';
};

window.toggleLentInputs = function () {
  const isChecked = document.getElementById('add-item-lent-toggle').checked;
  const el = document.getElementById('lent-fields');
  if (el) el.style.display = isChecked ? 'grid' : 'none';
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
  const isLent = document.getElementById('add-item-lent-toggle').checked;

  const tags = tagsStr
    ? tagsStr.split(',').map((t) => t.trim().toLowerCase()).filter(Boolean)
    : [];

  let consumableData = undefined;
  if (isConsumable) {
    const qty = parseInt(document.getElementById('add-item-quantity').value, 10) || 1;
    const unit = document.getElementById('add-item-unit').value.trim() || 'items';
    const thresh = parseInt(document.getElementById('add-item-threshold').value, 10) || 1;
    consumableData = {
      isConsumable: true,
      quantity: qty,
      unit,
      minThreshold: thresh,
    };
  }

  let lentData = { isLent: false };
  if (isLent) {
    const borrower = document.getElementById('add-item-lent-to').value.trim();
    const returnDate = document.getElementById('add-item-expected-return').value;
    lentData = {
      isLent: true,
      lentTo: borrower || 'Someone',
      lentDate: new Date().toISOString().slice(0, 10),
      expectedReturn: returnDate || undefined,
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
          lent: lentData,
          lastVerifiedAt: now,
        };
      }
      return item;
    });
    showToast(`Updated "${name}"`);
    state.editingItemId = null;
  } else {
    const newItem = {
      id: `item-${Date.now()}`,
      name,
      category,
      location: { room, zone, container, landmark },
      description,
      tags,
      lent: lentData,
      isEssentialForGuests,
      consumable: consumableData,
      lastVerifiedAt: now,
      createdAt: now,
    };
    state.items = [newItem, ...state.items];
    showToast(`Saved "${name}" in ${room}`);
  }

  saveItems();
  handleDailyCheckIn();
  switchPage('home');
};

// =========================================================================
// SPOT CHECK VIEW (IN-PAGE 15-SECOND MEMORY FLASHCARD)
// =========================================================================

function initSpotCheckPage() {
  const itemsSortedByAge = [...state.items].sort(
    (a, b) => new Date(a.lastVerifiedAt || 0).getTime() - new Date(b.lastVerifiedAt || 0).getTime()
  );
  state.spotCheckItems = itemsSortedByAge.slice(0, 3);
  state.spotCheckCurrentIndex = 0;
  renderSpotCheckStep();
}

function renderSpotCheckStep() {
  const container = document.getElementById('spot-check-body');
  if (!container) return;

  if (state.spotCheckItems.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 space-y-3 flex flex-col items-center justify-center">
        <p class="text-xs text-stone-500">No items available to spot check. Add items first!</p>
        <button onclick="switchPage('add')" class="px-5 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold">Add Item</button>
      </div>
    `;
    return;
  }

  if (state.spotCheckCurrentIndex >= state.spotCheckItems.length) {
    container.innerHTML = `
      <div class="text-center py-6 space-y-3 flex flex-col items-center justify-center">
        <div class="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto shadow-xs">
          <i data-lucide="check" class="w-7 h-7"></i>
        </div>
        <h3 class="text-lg font-extrabold text-stone-900">All Spot Checks Completed!</h3>
        <p class="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto text-center">
          You confirmed your items are right where they belong. Your mental map is 100% synchronized!
        </p>
        <button
          onclick="switchPage('home')"
          class="px-6 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800 transition-colors cursor-pointer shadow-soft text-center"
        >
          Back to Home
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const item = state.spotCheckItems[state.spotCheckCurrentIndex];

  container.innerHTML = `
    <div class="space-y-4 w-full flex flex-col items-center justify-center text-center max-w-md">
      <div class="flex items-center justify-center gap-2 text-xs text-stone-500">
        <span class="font-bold">Item ${state.spotCheckCurrentIndex + 1} of ${state.spotCheckItems.length}</span>
      </div>

      <div class="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 space-y-2 w-full text-center">
        <h4 class="text-lg font-black text-stone-900">${escapeHtml(item.name)}</h4>
        <div class="text-xs text-stone-800 flex items-center justify-center gap-1.5 font-semibold">
          <i data-lucide="map-pin" class="w-4 h-4 text-amber-500"></i>
          <span>${escapeHtml(item.location.room)} &rsaquo; ${escapeHtml(item.location.zone)}</span>
        </div>
        ${
          item.location.container
            ? `<div class="text-xs text-stone-600">In: <strong>${escapeHtml(item.location.container)}</strong></div>`
            : ''
        }
        ${
          item.location.landmark
            ? `<div class="text-xs text-amber-900 italic">&ldquo;${escapeHtml(item.location.landmark)}&rdquo;</div>`
            : ''
        }
      </div>

      <p class="text-xs sm:text-sm text-stone-700 font-bold text-center">Is this still in this spot?</p>

      <div class="grid grid-cols-2 gap-3 pt-1 w-full">
        <button
          onclick="confirmSpotCheckItem('${item.id}')"
          class="py-3 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-soft text-center"
        >
          <i data-lucide="check" class="w-4 h-4 text-emerald-400"></i>
          <span>Still there</span>
        </button>
        <button
          onclick="relocateSpotCheckItem('${item.id}')"
          class="py-3 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-center"
        >
          <i data-lucide="pencil" class="w-3.5 h-3.5 text-stone-500"></i>
          <span>Change spot</span>
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
  editItem(id);
};

// =========================================================================
// GUIDE VIEW (HOW TO USE FINDIT & GUEST HOUSE GUIDE)
// =========================================================================

function initGuidePage() {
  const guestItems = state.items.filter((i) => i.isEssentialForGuests);
  const container = document.getElementById('guide-guest-list');
  if (!container) return;

  if (guestItems.length === 0) {
    container.innerHTML = `
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl text-xs text-stone-500 text-center">
        No items tagged as "Guest Essential" yet. When saving items, check "Include in House Guide" to show keys, emergency kits, or Wi-Fi info here for visitors!
      </div>
    `;
    return;
  }

  container.innerHTML = guestItems
    .map(
      (item) => `
    <div class="bg-white border border-stone-200/90 rounded-2xl p-3.5 space-y-1.5 text-center flex flex-col items-center shadow-xs">
      <div class="flex flex-wrap items-center justify-center gap-1.5">
        <span class="text-sm font-black text-stone-900">${escapeHtml(item.name)}</span>
        <span class="text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.2 rounded-full">Guest Guide</span>
      </div>
      <div class="text-xs text-stone-800 flex items-center justify-center gap-1.5 font-semibold">
        <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500"></i>
        <span>${escapeHtml(item.location.room)} &rsaquo; ${escapeHtml(item.location.zone)}</span>
      </div>
      ${
        item.location.container
          ? `<div class="text-xs text-stone-600">In: <strong>${escapeHtml(item.location.container)}</strong></div>`
          : ''
      }
      ${
        item.location.landmark
          ? `<div class="text-xs text-stone-500 italic">&ldquo;${escapeHtml(item.location.landmark)}&rdquo;</div>`
          : ''
      }
      ${
        item.description
          ? `<div class="text-xs text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-200 mt-1 max-w-sm text-center">${escapeHtml(item.description)}</div>`
          : ''
      }
    </div>
  `
    )
    .join('');
  lucide.createIcons();
}

// Quick trigger from top header
window.startQuickVoiceFromHeader = function () {
  switchPage('add');
  setAddCaptureMode('voice');
  setTimeout(() => {
    toggleVoiceRecognition();
  }, 250);
};

// Reset Demo Data (NO EXPORT BACKUP OPTION AS REQUESTED)
window.resetData = function () {
  if (confirm('Reset items and rooms back to starter demo data?')) {
    state.items = INITIAL_ITEMS;
    state.rooms = INITIAL_ROOMS;
    state.engagement = {
      streak: 3,
      lastCheckInDate: '',
      totalCheckIns: 5,
      notificationsEnabled: false,
      lastNotificationTimestamp: 0,
    };
    saveItems();
    saveRooms();
    saveEngagement();
    renderApp();
    showToast('Reset to starter items');
  }
};

// Smooth Scrolling Navigation Helpers
window.scrollToItemsView = function () {
  const target = document.getElementById('main-content-view');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

window.scrollToTopView = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
      renderApp();
    });
  }

  // Set initial page to home
  switchPage('home');
});
