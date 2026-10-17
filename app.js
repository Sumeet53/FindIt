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
    name: 'Passport & Travel Documents',
    category: 'Documents & Valuables',
    location: {
      room: 'Master Bedroom',
      zone: 'Closet Top Shelf',
      container: 'Gray Fireproof Box',
      landmark: 'Behind winter coats on the far left corner',
    },
    description: 'Family blue passports, visas, birth certificates, and travel files.',
    tags: ['passport', 'travel', 'id', 'documents', 'identification', 'kagaz', 'kagaaz', 'visas', 'passports', 'papers'],
    lent: { isLent: false },
    lastVerifiedAt: '2026-06-12T10:15:00.000Z', // > 3 months ago (Honesty about staleness builds trust!)
    createdAt: '2026-05-10T08:00:00.000Z',
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
    tags: ['batteries', 'aa', 'aaa', 'power', 'remotes', 'toys', 'cell', 'battery', 'charger', 'bettery', 'battry'],
    lent: { isLent: false },
    consumable: {
      isConsumable: true,
      quantity: 4,
      unit: 'batteries',
      minThreshold: 4,
    },
    lastVerifiedAt: '2026-10-15T07:22:00.000Z', // Fresh
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
    tags: ['drill', 'dewalt', 'tools', 'screws', 'hardware', 'dril', 'auzar', 'bit kit'],
    lent: {
      isLent: true,
      lentTo: 'Dave Miller (Next Door)',
      lentDate: '2026-09-28',
      expectedReturn: '2026-10-18',
      notes: 'Borrowed for fixing rear wooden fence gate.',
    },
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
    tags: ['first aid', 'bandages', 'medicine', 'emergency', 'allergy', 'dawai', 'davai', 'dawa', 'pills', 'tablets'],
    lent: { isLent: false },
    consumable: {
      isConsumable: true,
      quantity: 1,
      unit: 'kit',
      minThreshold: 1,
    },
    lastVerifiedAt: '2026-10-15T08:30:00.000Z', // Fresh
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
    tags: ['car', 'tires', 'gauge', 'pressure', 'automotive', 'tyre', 'hawa', 'pump', 'inflator'],
    lent: { isLent: false },
    isMissing: true,
    lastVerifiedAt: '2026-07-10T17:45:00.000Z', // ~3 months ago - Not verified today
    createdAt: '2026-06-01T15:20:00.000Z',
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
    description: 'Multiport hub with 4K HDMI, Gigabit LAN, and charging for TV cable or external monitor.',
    tags: [
      'usb-c',
      'hdmi',
      'adapter',
      'dongle',
      'cable',
      'monitor',
      'tv cable',
      'tv wire',
      'cord',
      'taar',
      'screen connector',
      'that thing for the tv cable',
    ],
    lent: { isLent: false },
    lastVerifiedAt: '2026-10-13T09:10:00.000Z', // Fresh
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
    tags: ['keys', 'car', 'fob', 'shed', 'valuable', 'chabi', 'chaabi', 'chabee', 'tala', 'lock'],
    lent: { isLent: false },
    lastVerifiedAt: '2026-10-15T06:00:00.000Z', // Fresh
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
    tags: ['vacuum', 'dyson', 'cleaning', 'filter', 'attachments', 'safai', 'pocha', 'vacum'],
    lent: { isLent: false },
    lastVerifiedAt: '2026-10-12T11:00:00.000Z', // Fresh
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
    tags: ['headlamp', 'camping', 'flashlight', 'light', 'outdoors', 'torch'],
    lent: { isLent: false },
    lastVerifiedAt: '2026-05-15T18:00:00.000Z', // ~5 months ago (Stale)
    createdAt: '2026-04-01T12:00:00.000Z',
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
    tags: ['gloves', 'winter', 'beanie', 'cold', 'snow', 'clothes', 'kapde', 'topi', 'bistar', 'mittens'],
    lent: { isLent: false },
    lastVerifiedAt: '2026-04-01T13:00:00.000Z', // > 6 months ago (Stale)
    createdAt: '2026-03-15T10:00:00.000Z',
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
    description: 'Home Wi-Fi backup credentials and recovery keys.',
    tags: ['wifi', 'internet', 'router', 'password', 'tech', 'network', 'code'],
    lent: { isLent: false },
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
    tags: ['ladder', 'tools', 'climbing', 'painting', 'garage', 'sidhi', 'seedhi'],
    lent: { isLent: false },
    lastVerifiedAt: '2026-07-05T10:00:00.000Z', // ~3 months ago
    createdAt: '2026-06-15T14:00:00.000Z',
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
// Distinct, unique pastel colors for each category (Health = Soft Rose, Household = Fresh Mint, etc.)
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
    bg: 'bg-rose-100',
    border: 'border-rose-300',
    badge: 'bg-rose-200 text-rose-950 border-rose-400',
    innerBox: 'bg-white/75 border-rose-200/90',
    pillActive: 'bg-rose-600 text-white border-rose-700 shadow-sm font-bold',
    pillInactive: 'bg-rose-100 text-rose-900 border-rose-300 hover:bg-rose-200 font-semibold',
    colorName: 'Soft Rose',
    icon: 'shield-plus',
  },
  'Household & Cleaning': {
    themeClass: 'cat-theme-household',
    bg: 'bg-emerald-100',
    border: 'border-emerald-300',
    badge: 'bg-emerald-200 text-emerald-950 border-emerald-400',
    innerBox: 'bg-white/75 border-emerald-200/90',
    pillActive: 'bg-emerald-600 text-white border-emerald-700 shadow-sm font-bold',
    pillInactive: 'bg-emerald-100 text-emerald-900 border-emerald-300 hover:bg-emerald-200 font-semibold',
    colorName: 'Fresh Mint',
    icon: 'sparkles',
  },
  'Seasonal & Apparel': {
    themeClass: 'cat-theme-seasonal',
    bg: 'bg-purple-100',
    border: 'border-purple-300',
    badge: 'bg-purple-200 text-purple-950 border-purple-400',
    innerBox: 'bg-white/75 border-purple-200/90',
    pillActive: 'bg-purple-600 text-white border-purple-700 shadow-sm font-bold',
    pillInactive: 'bg-purple-100 text-purple-900 border-purple-300 hover:bg-purple-200 font-semibold',
    colorName: 'Soft Lavender',
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
    bg: 'bg-stone-100',
    border: 'border-stone-300',
    badge: 'bg-stone-200 text-stone-900 border-stone-400',
    innerBox: 'bg-white/75 border-stone-200/90',
    pillActive: 'bg-stone-800 text-white border-stone-900 shadow-sm font-bold',
    pillInactive: 'bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200 font-semibold',
    colorName: 'Warm Pebble',
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
  filterMissingOnly: false,
  viewMode: 'grid', // 'grid' | 'rooms' | 'lending'
  activePage: 'home', // 'home' | 'add' | 'streak' | 'spotcheck' | 'about'
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
    const v3Migrated = localStorage.getItem('findit_v3_forgiving_search_migrated');

    if (!rawItems || !v3Migrated) {
      state.items = INITIAL_ITEMS;
      localStorage.setItem(ITEMS_KEY, JSON.stringify(INITIAL_ITEMS));
      localStorage.setItem('findit_v3_forgiving_search_migrated', 'true');
    } else {
      state.items = JSON.parse(rawItems);
      // Clean up legacy guest properties if present
      state.items.forEach((item) => {
        delete item.isEssentialForGuests;
      });
      // Ensure missing item exists for quick verification
      if (!state.items.some((i) => i.isMissing)) {
        const item5 = state.items.find((i) => i.id === 'item-5') || state.items[0];
        if (item5) {
          item5.isMissing = true;
          item5.lastVerifiedAt = '2026-07-10T17:45:00.000Z'; // Not verified today
        }
      }
    }

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

// Safe Icon Creator (guarantees no uncaught errors on slow mobile networks or latency)
function safeCreateIcons() {
  if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn('Icon rendering notice:', e);
    }
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

// Utility: Toast notification (Centered at top)
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className =
    'bg-stone-900 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl shadow-elevated flex items-center justify-center gap-2 pointer-events-auto transform transition-all duration-200 -translate-y-3 opacity-0 text-center';
  toast.innerHTML = `
    <i data-lucide="sparkles" class="w-4 h-4 text-amber-400 shrink-0"></i>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);
  safeCreateIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('-translate-y-3', 'opacity-0');
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

// =========================================================================
// LAST-SEEN CONFIDENCE & STALENESS ENGINE
// "If an item hasn't been confirmed in say 3 months, show a gentle
// 'last confirmed in March' label. Honesty about staleness builds trust."
// =========================================================================
function getVerificationConfidence(item) {
  if (item.isMissing) {
    return {
      status: 'missing',
      badgeClass: 'bg-red-600 text-white border-red-700 font-extrabold shadow-xs',
      icon: 'alert-triangle',
      label: 'Flagged missing · Not verified today',
      shortLabel: 'Missing',
      isStale: false,
      daysAgo: null,
    };
  }

  if (!item.lastVerifiedAt) {
    return {
      status: 'unverified',
      badgeClass: 'bg-stone-100 text-stone-700 border-stone-300',
      icon: 'clock',
      label: 'Not yet verified',
      shortLabel: 'Not verified',
      isStale: false,
      daysAgo: null,
    };
  }

  const verifiedDate = new Date(item.lastVerifiedAt);
  const now = new Date();
  const diffMs = now.getTime() - verifiedDate.getTime();
  const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  const diffMonths = Math.max(1, Math.floor(diffDays / 30));

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthName = monthNames[verifiedDate.getMonth()];
  const year = verifiedDate.getFullYear();
  const currentYear = now.getFullYear();
  const monthLabel = year === currentYear ? monthName : `${monthName} ${year}`;

  if (diffDays >= 90) {
    // 3+ months old -> gentle staleness label to build user trust
    return {
      status: 'stale',
      badgeClass: 'bg-amber-100 text-amber-950 border-amber-300 ring-1 ring-amber-400/40',
      icon: 'alert-triangle',
      label: `Last confirmed in ${monthLabel} (~${diffMonths} months ago · needs quick check)`,
      shortLabel: `Last confirmed in ${monthLabel}`,
      isStale: true,
      daysAgo: diffDays,
      monthsAgo: diffMonths,
    };
  } else if (diffDays <= 7) {
    const timeText = diffDays === 0 ? 'today' : diffDays === 1 ? 'yesterday' : `${diffDays} days ago`;
    return {
      status: 'fresh',
      badgeClass: 'bg-emerald-100 text-emerald-950 border-emerald-300',
      icon: 'check-circle',
      label: `Verified fresh (${timeText})`,
      shortLabel: `Verified ${timeText}`,
      isStale: false,
      daysAgo: diffDays,
    };
  } else {
    return {
      status: 'normal',
      badgeClass: 'bg-stone-100 text-stone-800 border-stone-200',
      icon: 'calendar',
      label: `Confirmed ${diffDays} days ago (${monthLabel})`,
      shortLabel: `Confirmed in ${monthLabel}`,
      isStale: false,
      daysAgo: diffDays,
    };
  }
}

// =========================================================================
// FORGIVING SEARCH ENGINE
// Supports:
// 1. Natural descriptive queries ("that thing for the TV cable" -> HDMI adapter)
// 2. Indian & Hinglish synonyms (chabi, dawai, taar, bartan, kapde, kagaz, remort, etc.)
// 3. Typo tolerance (Levenshtein distance: dril -> drill, pasport -> passport)
// 4. Stop-words removal and multi-token relevance scoring
// =========================================================================

const INDIAN_SYNONYMS = {
  // Eyewear
  'chashma': ['glasses', 'spectacles', 'reading glasses', 'eyewear'],
  'chashme': ['glasses', 'spectacles', 'reading glasses'],
  'chasma': ['glasses', 'spectacles', 'reading glasses'],
  'spectacles': ['glasses', 'chashma'],
  'glasses': ['spectacles', 'chashma'],

  // Keys & Lock
  'chabi': ['keys', 'key', 'fob', 'car key', 'shed', 'lock'],
  'chaabi': ['keys', 'key', 'fob', 'car key', 'shed', 'lock'],
  'chabee': ['keys', 'key', 'fob'],
  'chabhi': ['keys', 'key'],
  'chabiya': ['keys', 'key'],
  'key': ['chabi', 'fob', 'keys', 'chaabi'],
  'keys': ['chabi', 'fob', 'key', 'chaabi'],
  'tala': ['lock', 'padlock', 'shed', 'keys'],
  'lock': ['padlock', 'tala', 'keys'],

  // Medicine & Health
  'dawai': ['medicine', 'first aid', 'antihistamines', 'pills', 'tablets', 'bandages'],
  'davai': ['medicine', 'first aid', 'pills', 'dawai'],
  'dawa': ['medicine', 'first aid', 'dawai'],
  'dawaai': ['medicine', 'first aid', 'dawai'],
  'goli': ['medicine', 'pills', 'tablets'],
  'medicine': ['dawai', 'first aid', 'bandages', 'antihistamines', 'pills'],
  'medicines': ['dawai', 'first aid', 'medicine'],
  'pills': ['medicine', 'dawai', 'tablets'],
  'tablets': ['medicine', 'dawai', 'pills'],
  'bandaid': ['first aid', 'bandages'],
  'bandage': ['first aid', 'bandages'],
  'bandages': ['first aid', 'bandage'],
  'allergy': ['antihistamines', 'first aid', 'medicine'],

  // Cables, TV & Electronics
  'taar': ['cable', 'wire', 'cord', 'adapter', 'charger', 'usb', 'hdmi'],
  'tar': ['cable', 'wire', 'cord', 'taar'],
  'wire': ['cable', 'cord', 'taar', 'adapter', 'charger', 'hdmi'],
  'cable': ['wire', 'cord', 'taar', 'adapter', 'hdmi', 'usb-c'],
  'cables': ['cable', 'wire', 'cord', 'adapter'],
  'cord': ['wire', 'cable', 'taar', 'adapter'],
  'charger': ['power', 'cable', 'batteries', 'adapter', 'usb-c'],
  'adapter': ['hdmi', 'usb-c', 'display', 'dongle', 'converter', 'cable', 'cord', 'tv'],
  'dongle': ['adapter', 'hdmi', 'usb-c', 'converter'],
  'converter': ['adapter', 'hdmi', 'usb-c', 'cable'],
  'tv': ['television', 'hdmi', 'display', 'media console', 'remote', 'cable', 'screen'],
  'television': ['tv', 'hdmi', 'remote'],
  'remort': ['remote', 'controller', 'tv'],
  'rimot': ['remote', 'controller'],
  'remote': ['controller', 'remort', 'tv'],
  'cell': ['batteries', 'battery', 'aa', 'aaa', 'power'],
  'battery': ['batteries', 'cell', 'aa', 'aaa', 'charger', 'power'],
  'batteries': ['battery', 'cell', 'aa', 'aaa'],
  'bettery': ['battery', 'batteries'],
  'battry': ['battery', 'batteries'],
  'wifi': ['wi-fi', 'internet', 'router', 'password'],
  'wi-fi': ['wifi', 'internet', 'router', 'password'],
  'internet': ['wifi', 'router', 'password'],
  'router': ['wifi', 'internet', 'password'],

  // Documents & Valuables
  'kagaz': ['documents', 'passport', 'papers', 'records', 'certificates'],
  'kagaaz': ['documents', 'passport', 'papers'],
  'dastavez': ['documents', 'passport', 'papers'],
  'passport': ['passports', 'travel', 'documents', 'id', 'kagaz'],
  'passports': ['passport', 'travel', 'documents', 'kagaz'],
  'pasport': ['passport', 'travel', 'documents'],
  'passprt': ['passport'],
  'aadhar': ['id', 'documents', 'identification'],
  'pan': ['documents', 'id'],
  'certificate': ['documents', 'passport', 'records'],
  'certificates': ['documents', 'records'],
  'visa': ['passport', 'documents', 'travel'],
  'visas': ['passport', 'documents', 'travel'],

  // Tools & Hardware
  'drill': ['dewalt', 'hammer drill', 'hardware', 'screws', 'tools', 'bit kit'],
  'dril': ['drill', 'tools'],
  'auzar': ['tools', 'hardware', 'wrench', 'drill'],
  'paana': ['wrench', 'tools'],
  'wrench': ['tools', 'hardware'],
  'ladder': ['telescopic', 'climbing', 'steps', 'aluminum', 'sidhi', 'seedhi'],
  'sidhi': ['ladder', 'steps'],
  'seedhi': ['ladder', 'steps'],
  'tire': ['car', 'pressure', 'gauge', 'inflator', 'wheel', 'hawa', 'tyre'],
  'tyre': ['tire', 'pressure', 'gauge', 'inflator', 'car'],
  'hawa': ['tire', 'inflator', 'pressure', 'gauge'],
  'inflator': ['tire', 'gauge', 'pressure', 'pump'],

  // Kitchen & Household
  'bartan': ['utensils', 'cookware', 'dishes', 'kitchen', 'pantry'],
  'safai': ['cleaning', 'vacuum', 'dyson', 'mop'],
  'pocha': ['mop', 'cleaning'],
  'vacuum': ['dyson', 'cleaning', 'filter', 'attachments', 'vacum'],
  'vacum': ['vacuum', 'cleaning'],
  'dyson': ['vacuum', 'cleaning', 'filter'],

  // Apparel & Winter
  'kapde': ['clothes', 'apparel', 'winter', 'gloves', 'beanies'],
  'kapda': ['clothes', 'winter', 'apparel'],
  'bistar': ['blankets', 'bed', 'winter', 'blanket'],
  'blanket': ['winter', 'blankets', 'covers', 'coats'],
  'blankets': ['winter', 'blanket', 'coats'],
  'gloves': ['winter', 'mittens', 'apparel', 'cold', 'kapde'],
  'mittens': ['gloves', 'winter'],
  'topi': ['beanie', 'hat', 'winter'],
  'beanie': ['topi', 'winter', 'hat', 'gloves'],
  'beanies': ['beanie', 'gloves', 'winter'],
  'jootey': ['shoes', 'boots', 'footwear'],
  'joota': ['shoes', 'footwear'],
  'shoes': ['jootey', 'footwear'],

  // Tailoring & Repair
  'suie': ['needle', 'thread', 'sewing'],
  'sui': ['needle', 'sewing'],
  'dhaga': ['thread', 'sewing'],
  'needle': ['suie', 'thread', 'sewing'],
};

// Common conversational stopwords to strip so phrases like "that thing for the TV cable" work naturally
const SEARCH_STOPWORDS = new Set([
  'that', 'thing', 'things', 'for', 'the', 'a', 'an', 'is', 'are', 'was', 'were',
  'my', 'our', 'in', 'on', 'at', 'to', 'of', 'and', 'or', 'where', 'did', 'i',
  'put', 'find', 'can', 'kaha', 'kahan', 'hai', 'wala', 'wali', 'wale', 'ka',
  'ki', 'ke', 'me', 'mein', 'se', 'it', 'its', 'show', 'get', 'give', 'please'
]);

// Fast Levenshtein distance for typo forgiveness
function levenshteinDist(s1, s2) {
  if (s1 === s2) return 0;
  if (s1.length === 0) return s2.length;
  if (s2.length === 0) return s1.length;
  if (Math.abs(s1.length - s2.length) > 2) return 99;

  const d = [];
  for (let i = 0; i <= s1.length; i++) d[i] = [i];
  for (let j = 0; j <= s2.length; j++) d[0][j] = j;

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      );
    }
  }
  return d[s1.length][s2.length];
}

// Score a candidate item against a natural language search query
function scoreItemForForgivingSearch(item, query) {
  const cleanQ = query.toLowerCase().trim();
  if (!cleanQ) return { score: 1, matchReason: '' };

  const itemName = item.name.toLowerCase();
  const description = (item.description || '').toLowerCase();
  const room = (item.location?.room || '').toLowerCase();
  const zone = (item.location?.zone || '').toLowerCase();
  const container = (item.location?.container || '').toLowerCase();
  const landmark = (item.location?.landmark || '').toLowerCase();
  const category = (item.category || '').toLowerCase();
  const tags = (item.tags || []).map((t) => t.toLowerCase());

  let score = 0;
  const reasons = [];

  // 1. Exact phrase matches
  if (itemName === cleanQ) {
    score += 250;
    reasons.push('exact name match');
  } else if (itemName.includes(cleanQ)) {
    score += 150;
    reasons.push(`name contains "${cleanQ}"`);
  }

  // 2. Tokenize query and remove stop-words
  const rawTokens = cleanQ.split(/[\s,._\-+/]+/).filter(Boolean);
  const meaningfulTokens = rawTokens.filter((t) => !SEARCH_STOPWORDS.has(t));
  const activeTokens = meaningfulTokens.length > 0 ? meaningfulTokens : rawTokens;

  // Check special descriptive phrase for TV cable / adapter
  if (cleanQ.includes('tv') && (cleanQ.includes('cable') || cleanQ.includes('adapter') || cleanQ.includes('wire') || cleanQ.includes('thing'))) {
    if (itemName.includes('hdmi') || itemName.includes('adapter') || tags.includes('tv cable')) {
      score += 180;
      reasons.push('recognized TV cable display adapter request');
    }
  }

  for (const token of activeTokens) {
    let tokenMatched = false;

    // Direct token match in item name
    if (itemName.includes(token)) {
      score += 80;
      tokenMatched = true;
      reasons.push(`matched "${token}" in item name`);
    }

    // Direct match in tags
    if (tags.some((t) => t === token || t.includes(token))) {
      score += 70;
      tokenMatched = true;
      reasons.push(`matched tag "${token}"`);
    }

    // Match in location / room / shelf / container
    if (room.includes(token) || zone.includes(token) || container.includes(token)) {
      score += 45;
      tokenMatched = true;
      reasons.push(`location match "${token}"`);
    }

    // Match in landmark clue / description
    if (landmark.includes(token) || description.includes(token) || category.includes(token)) {
      score += 35;
      tokenMatched = true;
    }

    // Indian / Hinglish synonyms expansion
    const synonyms = INDIAN_SYNONYMS[token] || [];
    for (const syn of synonyms) {
      if (itemName.includes(syn) || tags.some((t) => t.includes(syn))) {
        score += 75;
        tokenMatched = true;
        reasons.push(`synonym "${token}" &rarr; ${syn}`);
        break;
      } else if (description.includes(syn) || container.includes(syn) || zone.includes(syn)) {
        score += 40;
        tokenMatched = true;
        reasons.push(`synonym "${token}" in description`);
        break;
      }
    }

    // Typo tolerance (Levenshtein match)
    if (!tokenMatched && token.length >= 4) {
      // Check against words in item name
      const nameWords = itemName.split(/\s+/);
      for (const nw of nameWords) {
        if (nw.length >= 4) {
          const maxDist = token.length >= 7 ? 2 : 1;
          if (levenshteinDist(token, nw) <= maxDist) {
            score += 60;
            tokenMatched = true;
            reasons.push(`typo fix: "${token}" &sim; ${nw}`);
            break;
          }
        }
      }

      // Check against tags
      if (!tokenMatched) {
        for (const tag of tags) {
          if (tag.length >= 4) {
            const maxDist = token.length >= 7 ? 2 : 1;
            if (levenshteinDist(token, tag) <= maxDist) {
              score += 55;
              tokenMatched = true;
              reasons.push(`typo fix: "${token}" &sim; ${tag}`);
              break;
            }
          }
        }
      }
    }
  }

  return {
    score,
    matchReason: reasons.slice(0, 2).join(' · '),
  };
}

// Filtering & Dynamic Sorting items with Forgiving Search integration
function getFilteredItems() {
  const query = state.searchQuery.trim();

  // First pass: apply hard dropdown and status filters
  const candidateItems = state.items.filter((item) => {
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
    // Missing items filter
    if (state.filterMissingOnly && !item.isMissing) {
      return false;
    }
    return true;
  });

  // If a natural search query is active, score with the forgiving search engine
  if (query) {
    const scoredList = candidateItems
      .map((item) => {
        const { score, matchReason } = scoreItemForForgivingSearch(item, query);
        return { item, score, matchReason };
      })
      .filter((entry) => entry.score > 0);

    // Sort primarily by relevance score
    scoredList.sort((a, b) => b.score - a.score);
    return scoredList.map((entry) => entry.item);
  }

  // When not searching, sort according to active sort order dropdown
  const results = [...candidateItems];
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
  safeCreateIcons();
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
  const filterMissingBtn = document.getElementById('filter-btn-missing');
  const btnActiveReset = document.getElementById('btn-active-reset');

  const hasActiveFilters =
    state.selectedCategory !== 'All' ||
    state.selectedRoom !== 'All' ||
    state.filterLentOnly ||
    state.filterLowStockOnly ||
    state.filterMissingOnly ||
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

  if (filterMissingBtn) {
    const missingCount = state.items.filter((i) => i.isMissing).length;
    const missingBadge = document.getElementById('badge-missing-count');
    if (missingBadge) {
      missingBadge.textContent = missingCount;
      missingBadge.style.display = missingCount > 0 ? 'inline-block' : 'none';
    }
    if (state.filterMissingOnly) {
      filterMissingBtn.className =
        'px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer bg-red-600 text-white border border-red-700 shadow-xs flex items-center gap-1';
    } else {
      if (missingCount > 0) {
        filterMissingBtn.className =
          'px-3 py-1 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer bg-red-50 border-red-400 text-red-900 hover:bg-red-100 flex items-center gap-1';
      } else {
        filterMissingBtn.className =
          'px-3 py-1 rounded-xl text-xs font-semibold border transition-all cursor-pointer bg-white border-stone-200 text-stone-700 hover:bg-red-50 flex items-center gap-1';
      }
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

window.toggleMissingFilter = function () {
  state.filterMissingOnly = !state.filterMissingOnly;
  if (state.filterMissingOnly) {
    state.filterLentOnly = false;
    state.filterLowStockOnly = false;
  }
  renderApp();
};

window.setQuickSearchQuery = function (queryText) {
  state.searchQuery = queryText;
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = queryText;
  renderApp();
  const card = document.getElementById('main-content-view');
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

window.resetAllFilters = function () {
  state.selectedCategory = 'All';
  state.selectedRoom = 'All';
  state.filterLentOnly = false;
  state.filterLowStockOnly = false;
  state.filterMissingOnly = false;
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

// =========================================================================
// ONE-TAP "NOT THERE!" SELF-HEALING SYSTEM
// If an item isn't where FindIt says, the user taps one button and the app asks:
// "Was it moved, lent, or used up?"
// Keeps the data self-healing without nagging.
// =========================================================================

let currentNotThereItemId = null;
let currentRelocateItemId = null;

window.openNotThereModal = function (itemId) {
  const item = state.items.find((i) => i.id === itemId);
  if (!item) return;

  currentNotThereItemId = itemId;
  const modal = document.getElementById('not-there-modal');
  const title = document.getElementById('not-there-title');
  const subtitle = document.getElementById('not-there-subtitle');

  if (title) title.textContent = `Not where it says?`;
  if (subtitle) {
    subtitle.innerHTML = `Was <strong>${escapeHtml(item.name)}</strong> moved, lent, or used up? Fix FindIt's memory in 1 tap:`;
  }

  if (modal) {
    modal.classList.remove('hidden');
    safeCreateIcons();
  }
};

window.closeNotThereModal = function () {
  const modal = document.getElementById('not-there-modal');
  if (modal) modal.classList.add('hidden');
  currentNotThereItemId = null;
};

window.handleNotThereChoice = function (choice) {
  if (!currentNotThereItemId) return;
  const item = state.items.find((i) => i.id === currentNotThereItemId);
  if (!item) {
    closeNotThereModal();
    return;
  }

  const itemId = currentNotThereItemId;
  closeNotThereModal();

  switch (choice) {
    case 'moved':
      openRelocateModal(itemId);
      break;

    case 'lent':
      showPromptDialog({
        title: `Who borrowed ${item.name}?`,
        message: 'Enter borrower name to update FindIt’s tracking:',
        defaultValue: 'Friend or Neighbor',
        onConfirm: (borrower) => {
          item.lent = {
            isLent: true,
            lentTo: (borrower || 'Someone').trim(),
            lentDate: new Date().toISOString().slice(0, 10),
            notes: 'Reported via Not There self-healing',
          };
          item.lastVerifiedAt = new Date().toISOString();
          saveItems();
          renderApp();
          showToast(`Marked ${item.name} as lent to ${item.lent.lentTo}! Memory healed.`, 'success');
        },
      });
      break;

    case 'consumed':
      item.consumable = {
        isConsumable: true,
        quantity: 0,
        unit: item.consumable?.unit || 'items',
        minThreshold: item.consumable?.minThreshold || 1,
      };
      item.description = item.description
        ? `${item.description} (Used up on ${new Date().toLocaleDateString()})`
        : `Used up on ${new Date().toLocaleDateString()}`;
      item.lastVerifiedAt = new Date().toISOString();
      saveItems();
      renderApp();
      showToast(`Marked ${item.name} as used up (0 in stock). Memory healed!`, 'success');
      break;

    case 'missing':
      item.isMissing = true;
      // Requirement: When tagged as not there it should NOT be marked verified today
      if (item.lastVerifiedAt) {
        const vDate = new Date(item.lastVerifiedAt);
        const now = new Date();
        if (vDate.toDateString() === now.toDateString()) {
          const past = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          item.lastVerifiedAt = past.toISOString();
        }
      }
      saveItems();
      renderApp();
      showToast(`Flagged "${item.name}" as missing in red (not verified today)`, 'warning');
      break;
  }
};

function openRelocateModal(itemId) {
  const item = state.items.find((i) => i.id === itemId);
  if (!item) return;

  currentRelocateItemId = itemId;
  const modal = document.getElementById('relocate-modal');
  const title = document.getElementById('relocate-title');
  const roomSelect = document.getElementById('relocate-room-select');
  const zoneInput = document.getElementById('relocate-zone-input');

  if (title) title.textContent = `Where is "${item.name}" now?`;

  if (roomSelect) {
    const rooms = state.rooms.length > 0 ? state.rooms : INITIAL_ROOMS;
    roomSelect.innerHTML = rooms
      .map(
        (r) =>
          `<option value="${escapeHtml(r.name)}" ${r.name === item.location.room ? 'selected' : ''}>${escapeHtml(r.name)}</option>`
      )
      .join('');
  }

  if (zoneInput) {
    zoneInput.value = '';
    zoneInput.placeholder = `e.g. Top shelf, Nightstand drawer (was: ${item.location.zone})`;
  }

  if (modal) {
    modal.classList.remove('hidden');
    safeCreateIcons();
    if (zoneInput) zoneInput.focus();
  }
}

window.closeRelocateModal = function () {
  const modal = document.getElementById('relocate-modal');
  if (modal) modal.classList.add('hidden');
  currentRelocateItemId = null;
};

window.confirmRelocateItem = function () {
  if (!currentRelocateItemId) return;
  const item = state.items.find((i) => i.id === currentRelocateItemId);
  if (!item) {
    closeRelocateModal();
    return;
  }

  const roomSelect = document.getElementById('relocate-room-select');
  const zoneInput = document.getElementById('relocate-zone-input');

  const newRoom = roomSelect ? roomSelect.value : item.location.room;
  const newZone = zoneInput && zoneInput.value.trim() ? zoneInput.value.trim() : item.location.zone;

  item.location.room = newRoom;
  item.location.zone = newZone;
  item.isMissing = false;
  item.lastVerifiedAt = new Date().toISOString();

  saveItems();
  closeRelocateModal();
  renderApp();
  showToast(`Memory healed! ${item.name} moved to ${newRoom} › ${newZone}`, 'success');
};

// Persistent Bottom Bar Page Navigation Router
window.switchPage = function (pageId) {
  state.activePage = pageId;
  const pageList = ['home', 'add', 'streak', 'spotcheck', 'about'];

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
        if (pageId === 'add') {
          navBtn.className =
            'nav-tab-btn active flex-1 min-w-0 flex flex-col items-center justify-center gap-0.5 px-0.5 py-0.5 cursor-pointer transform scale-105 transition-all min-h-[48px] select-none touch-manipulation';
        } else {
          navBtn.className =
            'nav-tab-btn flex-1 min-w-0 flex flex-col items-center justify-center gap-0.5 px-0.5 py-0.5 cursor-pointer transform hover:scale-105 active:scale-95 transition-all min-h-[48px] select-none touch-manipulation';
        }
      } else {
        if (p === pageId) {
          navBtn.className =
            'nav-tab-btn active flex-1 min-w-0 flex flex-col items-center justify-center gap-0.5 py-1 px-0.5 rounded-xl transition-all cursor-pointer text-amber-600 font-extrabold bg-amber-50/90 shadow-xs ring-1 ring-amber-300 min-h-[48px] select-none touch-manipulation';
        } else {
          navBtn.className =
            'nav-tab-btn flex-1 min-w-0 flex flex-col items-center justify-center gap-0.5 py-1 px-0.5 rounded-xl transition-all cursor-pointer text-stone-500 hover:text-stone-900 font-medium min-h-[48px] select-none touch-manipulation';
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
  }

  window.scrollTo(0, 0);
  safeCreateIcons();
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

// =========================================================================
// DIRECT ANSWER CARD FOR SEARCH RESULTS
// "Answer, don't list. Search should return a direct answer card:
// 'Passport: Master Bedroom, closet, top shelf, gray box, behind winter coats',
// not ten results to scroll."
// =========================================================================
function renderDirectAnswerCard(item, confidence, matchReason) {
  const theme = CATEGORY_THEMES[item.category] || CATEGORY_THEMES['Other'];
  const isLent = item.lent && item.lent.isLent;

  // Build the direct answer sentence in plain English:
  // "Passport: Master Bedroom, closet top shelf, gray box, behind winter coats"
  const locationParts = [
    item.location.room,
    item.location.zone,
    item.location.container ? `in ${item.location.container}` : '',
    item.location.landmark ? `${item.location.landmark}` : '',
  ].filter(Boolean);

  return `
    <div class="w-full ${theme.themeClass} ${item.isMissing ? 'bg-red-50/95 border-red-500 ring-4 ring-red-400' : `${theme.bg} ${theme.border} ring-2 ring-amber-400/60`} rounded-3xl border-2 p-5 sm:p-7 shadow-elevated relative overflow-hidden text-center space-y-4 max-w-2xl mx-auto">
      
      <!-- Direct Answer Sparkle Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300/60 pb-3">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-amber-300 font-black text-xs uppercase tracking-wider shadow-xs">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-300"></i>
          <span>Direct Answer</span>
        </div>

        <!-- Last-seen confidence pill -->
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-xs ${confidence.badgeClass}">
          <i data-lucide="${confidence.icon}" class="w-3.5 h-3.5"></i>
          <span>${confidence.label}</span>
        </div>
      </div>

      <!-- Item Title & Category Badges -->
      <div class="space-y-1">
        <div class="flex flex-wrap items-center justify-center gap-1.5">
          ${
            item.isMissing
              ? `<span class="inline-flex items-center gap-1 text-xs font-black px-3 py-1 rounded-full bg-red-600 text-white border border-red-700 shadow-xs animate-pulse">
                  <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-white"></i>
                  <span>MISSING</span>
                </span>`
              : ''
          }
          <span class="text-xs font-extrabold px-3 py-1 rounded-full border shadow-xs ${theme.badge}">
            <i data-lucide="${theme.icon || 'tag'}" class="w-3 h-3 inline mr-1"></i>
            ${escapeHtml(item.category)}
          </span>
          ${
            isLent
              ? `<span class="text-xs font-bold px-3 py-1 rounded-full bg-rose-200 text-rose-950 border border-rose-300">
                  🤝 Lent to ${escapeHtml(item.lent.lentTo || 'Someone')}
                </span>`
              : ''
          }
        </div>
        <h3 class="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight break-words">
          ${escapeHtml(item.name)}
        </h3>
        ${
          matchReason
            ? `<p class="text-[11px] text-stone-600 font-medium">Found via: <span class="font-bold text-stone-800">${escapeHtml(matchReason)}</span></p>`
            : ''
        }
      </div>

      <!-- Direct Plain-English Answer Sentence (Highlighted Box) -->
      <div class="bg-white/95 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border-2 border-amber-300/90 shadow-soft space-y-3 text-center">
        <div class="text-stone-500 text-[11px] font-black uppercase tracking-wider">
          📍 Exact Location
        </div>
        <div class="text-base sm:text-xl font-black text-stone-900 leading-snug break-words">
          &ldquo;<span class="text-amber-800">${escapeHtml(item.name)}:</span> ${escapeHtml(locationParts.join(', '))}&rdquo;
        </div>

        <!-- Structured Visual Breadcrumb Path -->
        <div class="flex flex-wrap items-center justify-center gap-1.5 pt-2 text-xs font-bold text-stone-800">
          <span class="px-3 py-1 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-1 shadow-xs">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-600"></i>
            <span>${escapeHtml(item.location.room)}</span>
          </span>
          <span class="text-stone-400 font-normal">&rsaquo;</span>
          <span class="px-3 py-1 bg-amber-50 border border-amber-200 rounded-xl shadow-xs">
            ${escapeHtml(item.location.zone)}
          </span>
          ${
            item.location.container
              ? `<span class="text-stone-400 font-normal">&rsaquo;</span>
                 <span class="px-3 py-1 bg-stone-100 border border-stone-200 rounded-xl shadow-xs text-stone-800">
                   ${escapeHtml(item.location.container)}
                 </span>`
              : ''
          }
        </div>

        ${
          item.location.landmark
            ? `<div class="text-xs text-amber-950 bg-amber-50/90 px-3.5 py-2 rounded-xl border border-amber-200 italic max-w-md mx-auto">
                💡 Landmark clue: &ldquo;${escapeHtml(item.location.landmark)}&rdquo;
              </div>`
            : ''
        }
      </div>

      ${
        item.description
          ? `<p class="text-xs sm:text-sm text-stone-700 max-w-md mx-auto leading-relaxed">${escapeHtml(item.description)}</p>`
          : ''
      }

      ${
        item.photoUrl
          ? `<div class="w-full max-w-xs mx-auto rounded-2xl overflow-hidden border-2 border-white shadow-soft">
              <img src="${item.photoUrl}" alt="${escapeHtml(item.name)}" class="w-full h-40 object-cover" />
            </div>`
          : ''
      }

      <!-- Missing Banner in Red with I Found It action -->
      ${
        item.isMissing
          ? `<div class="w-full bg-red-100/95 border-2 border-red-400 rounded-2xl p-3.5 text-xs flex flex-col sm:flex-row items-center justify-between gap-2.5 text-red-950 text-center font-bold shadow-xs">
              <div class="flex items-center justify-center gap-1.5 text-red-900">
                <i data-lucide="alert-octagon" class="w-4 h-4 text-red-600 shrink-0"></i>
                <span>Marked <strong>Missing</strong> in red &bull; Not verified today</span>
              </div>
              <button
                type="button"
                onclick="markItemFound('${item.id}')"
                class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow-xs cursor-pointer transition-colors flex items-center justify-center gap-1 shrink-0"
              >
                <i data-lucide="check" class="w-3.5 h-3.5 text-white"></i>
                <span>I Found It!</span>
              </button>
            </div>`
          : ''
      }

      <!-- Direct Answer Action Buttons: One-Tap "Not there!", "Still here", "Edit" -->
      <div class="pt-2 flex flex-wrap items-center justify-center gap-2.5 w-full max-w-md mx-auto">
        <!-- One-Tap "Not there!" Button -->
        <button
          type="button"
          onclick="openNotThereModal('${item.id}')"
          class="flex-1 min-w-[130px] py-3 px-4 bg-amber-100 hover:bg-amber-200 active:opacity-85 border-2 border-amber-300 text-amber-950 font-extrabold text-xs sm:text-sm rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-xs touch-manipulation transition-colors"
          title="Not where it says? Was it moved, lent, or used up?"
        >
          <i data-lucide="help-circle" class="w-4 h-4 text-amber-700"></i>
          <span>Not there!</span>
        </button>

        <!-- Still Here (Confirm Location) -->
        <button
          type="button"
          onclick="verifyLocation('${item.id}')"
          class="flex-1 min-w-[130px] py-3 px-4 ${item.isMissing ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'} active:opacity-85 text-white font-extrabold text-xs sm:text-sm rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-soft touch-manipulation transition-colors"
          title="${item.isMissing ? 'I found it! Reset missing status' : 'Confirm item is still in this spot'}"
        >
          <i data-lucide="check" class="w-4 h-4 text-white"></i>
          <span>${item.isMissing ? 'I Found It!' : 'Still here'}</span>
        </button>

        <!-- Edit / Update -->
        <button
          type="button"
          onclick="editItem('${item.id}')"
          class="py-3 px-3.5 bg-white hover:bg-stone-50 active:opacity-85 border border-stone-300 text-stone-700 font-bold text-xs rounded-xl cursor-pointer shadow-xs touch-manipulation transition-colors"
          title="Edit Item"
        >
          <i data-lucide="pencil" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;
}

function renderGridView(container) {
  const isSearchActive = Boolean(state.searchQuery.trim());
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
              ? `No items match "${escapeHtml(state.searchQuery)}". Try searching by function (e.g. "TV cable", "cord", "tool") or Indian names like "chabi", "dawai", "kapde".`
              : 'No items match your active category or filters.'
          }
        </p>
        <div class="flex flex-wrap items-center justify-center gap-2 pt-2">
          ${
            state.searchQuery || state.selectedCategory !== 'All' || state.filterLowStockOnly
              ? `<button onclick="clearAllFilters()" class="px-4 py-2 text-xs font-semibold border border-stone-200 rounded-xl text-stone-600 hover:bg-stone-50 cursor-pointer touch-manipulation">Clear filters</button>`
              : ''
          }
          <button
            onclick="switchPage('add')"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-stone-800 transition-colors cursor-pointer shadow-soft touch-manipulation"
          >
            <i data-lucide="plus" class="w-4 h-4 text-amber-400"></i>
            <span>Add this item now</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  // Answer, don't list: If the user is searching, return a Direct Answer Card at the top!
  if (isSearchActive) {
    const topItem = filtered[0];
    const topConfidence = getVerificationConfidence(topItem);
    const { matchReason } = scoreItemForForgivingSearch(topItem, state.searchQuery);
    const otherMatches = filtered.slice(1);

    const directAnswerHtml = renderDirectAnswerCard(topItem, topConfidence, matchReason);
    const otherMatchesHtml =
      otherMatches.length > 0
        ? `
        <div class="w-full pt-4 space-y-4">
          <div class="w-full flex items-center justify-between border-b border-stone-200/80 pb-2 px-1">
            <span class="text-xs font-bold text-stone-600">
              Other related items (${otherMatches.length})
            </span>
            <span class="text-[11px] text-stone-400">
              Top match shown above
            </span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            ${otherMatches.map((item) => renderItemCardHtml(item)).join('')}
          </div>
        </div>
      `
        : '';

    container.innerHTML = `
      <div class="space-y-6 w-full flex flex-col items-center">
        <!-- Direct Answer Card -->
        ${directAnswerHtml}

        <!-- Other matches if any -->
        ${otherMatchesHtml}

        <!-- Back to all items link -->
        <div class="pt-2 text-center">
          <button
            onclick="clearSearchInput()"
            class="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold transition-colors cursor-pointer touch-manipulation"
          >
            Clear Search &bull; View All Items (${state.items.length})
          </button>
        </div>
      </div>
    `;
    return;
  }

  // When not searching: render standard browse grid with unique pastel color codification guide
  const itemsHtml = filtered.map((item) => renderItemCardHtml(item)).join('');

  container.innerHTML = `
    <div class="space-y-5 w-full flex flex-col items-center">
      
      <!-- List Meta & Category Color Legend - Distinct & Unique subtle pastel colors -->
      <div class="w-full flex flex-col items-center justify-center gap-3 text-xs sm:text-sm text-stone-500 px-2 text-center">
        <div class="flex items-center justify-center gap-2">
          <span>Showing <strong>${filtered.length}</strong> of <strong>${state.items.length}</strong> total items</span>
          <span>&bull;</span>
          <span class="text-amber-800 font-medium">Scroll down to explore all</span>
        </div>

        <!-- Color Codification Guide: Health (Rose) and Household (Mint) are completely distinct! -->
        <div class="w-full flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-semibold text-stone-600 px-3 py-2 bg-white/75 backdrop-blur-xs rounded-2xl border border-stone-200/90 shadow-xs text-center">
          <span class="text-stone-400 font-bold uppercase tracking-wider text-[10px] mr-1">🎨 Card Colors:</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-100 text-amber-950 border border-amber-300">🧰 Tools</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-950 border border-indigo-300">⚡ Tech</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-yellow-100 text-yellow-950 border border-yellow-300">📄 Docs</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-rose-100 text-rose-950 border border-rose-300">🩹 Health (Rose)</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-950 border border-emerald-300">🧼 Household (Mint)</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-purple-100 text-purple-950 border border-purple-300">🧣 Seasonal</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-sky-100 text-sky-950 border border-sky-300">💻 Office</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-stone-100 text-stone-900 border border-stone-300">📦 Other</span>
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
          class="px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 hover:text-stone-900 rounded-2xl text-xs sm:text-sm font-semibold shadow-soft flex items-center justify-center gap-2 cursor-pointer transition-all touch-manipulation"
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
  const confidence = getVerificationConfidence(item);

  return `
    <div class="${theme.themeClass} ${item.isMissing ? 'bg-red-50/90 border-red-500 ring-4 ring-red-400 shadow-elevated' : `${theme.bg} ${theme.border}`} rounded-3xl border-2 p-5 sm:p-6 flex flex-col items-center justify-between card-hover shadow-soft relative group max-w-full text-center transition-all ${
      isLent ? 'ring-4 ring-rose-400 border-rose-400' : ''
    }">
      
      <!-- Card Top Content - Centered Horizontally & Vertically -->
      <div class="space-y-4 w-full flex flex-col items-center justify-center text-center">
        
        <!-- Room, Category & Confidence Pills Row - Centered -->
        <div class="flex flex-wrap items-center justify-center gap-1.5 w-full">
          ${
            item.isMissing
              ? `<span class="inline-flex items-center justify-center gap-1 text-xs font-black px-3 py-0.5 rounded-full bg-red-600 text-white border border-red-700 shadow-xs animate-pulse">
                  <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-white shrink-0"></i>
                  <span>MISSING</span>
                </span>`
              : ''
          }

          <span class="inline-flex items-center justify-center gap-1 text-xs font-bold text-stone-800 bg-white/95 border border-stone-200/90 px-2.5 py-0.5 rounded-full shadow-xs">
            <i data-lucide="map-pin" class="w-3 h-3 text-amber-500 shrink-0"></i>
            <span>${escapeHtml(item.location.room)}</span>
          </span>

          <span class="inline-flex items-center justify-center gap-1 text-xs font-extrabold px-2.5 py-0.5 rounded-full border shadow-xs ${theme.badge}">
            <i data-lucide="${theme.icon || 'tag'}" class="w-3 h-3 shrink-0"></i>
            <span>${escapeHtml(item.category)}</span>
          </span>

          <!-- Last-seen confidence pill -->
          <span class="inline-flex items-center justify-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-xs ${confidence.badgeClass}" title="${confidence.label}">
            <i data-lucide="${confidence.icon}" class="w-3 h-3 shrink-0"></i>
            <span>${confidence.shortLabel}</span>
          </span>
        </div>

        <!-- Big Item Title -->
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

        <!-- Notes if provided -->
        ${
          item.description
            ? `<p class="text-xs sm:text-sm text-stone-700 text-center max-w-sm mx-auto leading-relaxed break-words">${escapeHtml(item.description)}</p>`
            : ''
        }

        <!-- Missing Banner in Red with I Found It action -->
        ${
          item.isMissing
            ? `<div class="w-full bg-red-100/95 border-2 border-red-400 rounded-2xl p-3.5 text-xs flex flex-col sm:flex-row items-center justify-between gap-2.5 text-red-950 text-center font-bold shadow-xs">
                <div class="flex items-center justify-center gap-1.5 text-red-900">
                  <i data-lucide="alert-octagon" class="w-4 h-4 text-red-600 shrink-0"></i>
                  <span>Marked <strong>Missing</strong> in red &bull; Not verified today</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <button
                    onclick="markItemFound('${item.id}')"
                    class="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-xl font-black transition-all cursor-pointer shadow-xs flex items-center gap-1"
                  >
                    <i data-lucide="check" class="w-3.5 h-3.5"></i>
                    <span>I Found It!</span>
                  </button>
                  <button
                    onclick="openRelocateModal('${item.id}')"
                    class="text-xs bg-white border border-red-300 px-2.5 py-1.5 rounded-xl font-bold text-red-900 hover:bg-red-50 transition-colors cursor-pointer shadow-xs"
                  >
                    Relocate
                  </button>
                </div>
              </div>`
            : ''
        }

        <!-- Lent Banner if currently borrowed -->
        ${
          isLent
            ? `<div class="w-full bg-rose-50 border border-rose-300 rounded-2xl p-3 text-xs flex flex-col sm:flex-row items-center justify-center gap-2.5 text-rose-950 text-center">
                <div class="flex items-center justify-center gap-1.5">
                  <i data-lucide="share-2" class="w-4 h-4 text-rose-600 shrink-0"></i>
                  <span>Lent to <strong>${escapeHtml(item.lent.lentTo || 'Someone')}</strong></span>
                </div>
                <button
                  onclick="returnLentItem('${item.id}')"
                  class="text-xs bg-white border border-rose-300 px-3.5 py-1 rounded-xl font-bold text-rose-900 hover:bg-rose-100 transition-colors cursor-pointer shadow-xs text-center touch-manipulation"
                >
                  Mark Returned
                </button>
              </div>`
            : ''
        }

        <!-- Stock tracker if consumable -->
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
                    class="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-800 cursor-pointer touch-manipulation"
                    title="Decrease count"
                  >
                    -
                  </button>
                  <button
                    onclick="changeItemQuantity('${item.id}', 1)"
                    class="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-800 cursor-pointer touch-manipulation"
                    title="Increase count"
                  >
                    +
                  </button>
                </div>
              </div>`
            : ''
        }
      </div>

      <!-- Card Bottom Actions - Includes Still here, One-Tap "Not there!", Lend, Edit, Delete -->
      <div class="w-full mt-5 pt-4 border-t ${theme.border} flex flex-wrap items-center justify-center gap-2 text-xs">
        
        <!-- Still Here (Verification) Button -->
        <button
          onclick="verifyLocation('${item.id}')"
          class="text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 cursor-pointer px-3.5 py-1.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs text-center touch-manipulation"
          title="Confirm item is still in this spot"
        >
          <i data-lucide="check" class="w-4 h-4 text-emerald-700 shrink-0"></i>
          <span>Still here</span>
        </button>

        <!-- One-Tap "Not there!" Button -->
        <button
          onclick="openNotThereModal('${item.id}')"
          class="text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 cursor-pointer px-3 py-1.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs text-center touch-manipulation"
          title="Not where it says? Was it moved, lent, or used up?"
        >
          <i data-lucide="help-circle" class="w-3.5 h-3.5 text-amber-700 shrink-0"></i>
          <span>Not there!</span>
        </button>

        <!-- Lend / Return Button -->
        <button
          onclick="toggleLentStatus('${item.id}')"
          class="text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white/90 hover:bg-white border border-stone-300 cursor-pointer px-3 py-1.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs text-center touch-manipulation"
        >
          <i data-lucide="${isLent ? 'corner-down-left' : 'share-2'}" class="w-3.5 h-3.5 text-stone-500 shrink-0"></i>
          <span>${isLent ? 'Returned' : 'Lend'}</span>
        </button>

        <!-- Edit Button -->
        <button
          onclick="editItem('${item.id}')"
          class="text-stone-600 hover:text-stone-900 bg-white/90 hover:bg-white border border-stone-300 cursor-pointer p-2 rounded-xl transition-colors shadow-xs touch-manipulation"
          title="Edit Item"
        >
          <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
        </button>

        <!-- Delete Button -->
        <button
          onclick="deleteItem('${item.id}')"
          class="text-stone-400 hover:text-red-700 bg-white hover:bg-red-50 border border-stone-300 hover:border-red-300 cursor-pointer p-2 rounded-xl transition-colors shadow-xs touch-manipulation"
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
  renderApp();
};

window.toggleLowStockFilter = function () {
  state.filterLowStockOnly = !state.filterLowStockOnly;
  renderApp();
};

window.verifyLocation = function (id) {
  const now = new Date().toISOString();
  state.items = state.items.map((item) =>
    item.id === id ? { ...item, lastVerifiedAt: now, isMissing: false } : item
  );
  saveItems();
  renderApp();
  showToast('Spot confirmed! Location refreshed.', 'success');
};

window.markItemFound = function (id) {
  const now = new Date().toISOString();
  state.items = state.items.map((item) =>
    item.id === id ? { ...item, isMissing: false, lastVerifiedAt: now } : item
  );
  saveItems();
  renderApp();
  showToast('Item found! Verified fresh today.', 'success');
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

// Generic In-App Dialog Helpers (Replaces blocking window.alert/confirm/prompt for iframe & mobile safety)
function showConfirmDialog({ title, message, confirmText = 'Confirm', confirmClass = 'bg-rose-600 hover:bg-rose-700 text-white', onConfirm }) {
  const modal = document.getElementById('app-dialog-modal');
  if (!modal) {
    if (onConfirm) onConfirm();
    return;
  }
  const titleEl = document.getElementById('dialog-title');
  const msgEl = document.getElementById('dialog-message');
  const inputContainer = document.getElementById('dialog-input-container');
  const btnCancel = document.getElementById('dialog-btn-cancel');
  const btnConfirm = document.getElementById('dialog-btn-confirm');

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  if (inputContainer) inputContainer.classList.add('hidden');

  if (btnConfirm) {
    btnConfirm.textContent = confirmText;
    btnConfirm.className = `py-2.5 px-4 font-bold text-xs rounded-xl shadow-soft transition-colors cursor-pointer touch-manipulation ${confirmClass}`;
  }

  modal.classList.remove('hidden');

  const cleanup = () => {
    modal.classList.add('hidden');
    if (btnCancel) btnCancel.onclick = null;
    if (btnConfirm) btnConfirm.onclick = null;
  };

  if (btnCancel) {
    btnCancel.onclick = () => {
      cleanup();
    };
  }

  if (btnConfirm) {
    btnConfirm.onclick = () => {
      cleanup();
      if (onConfirm) onConfirm();
    };
  }
}

function showPromptDialog({ title, message, defaultValue = '', placeholder = '', confirmText = 'Save', onConfirm }) {
  const modal = document.getElementById('app-dialog-modal');
  if (!modal) {
    if (onConfirm) onConfirm(defaultValue);
    return;
  }
  const titleEl = document.getElementById('dialog-title');
  const msgEl = document.getElementById('dialog-message');
  const inputContainer = document.getElementById('dialog-input-container');
  const inputEl = document.getElementById('dialog-input');
  const btnCancel = document.getElementById('dialog-btn-cancel');
  const btnConfirm = document.getElementById('dialog-btn-confirm');

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  if (inputContainer) inputContainer.classList.remove('hidden');
  if (inputEl) {
    inputEl.value = defaultValue;
    inputEl.placeholder = placeholder;
  }

  if (btnConfirm) {
    btnConfirm.textContent = confirmText;
    btnConfirm.className = 'py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-soft transition-colors cursor-pointer touch-manipulation';
  }

  modal.classList.remove('hidden');
  if (inputEl) {
    setTimeout(() => {
      inputEl.focus();
      inputEl.select();
    }, 60);
  }

  const cleanup = () => {
    modal.classList.add('hidden');
    if (inputContainer) inputContainer.classList.add('hidden');
    if (btnCancel) btnCancel.onclick = null;
    if (btnConfirm) btnConfirm.onclick = null;
  };

  if (btnCancel) {
    btnCancel.onclick = () => {
      cleanup();
    };
  }

  if (btnConfirm) {
    btnConfirm.onclick = () => {
      const val = inputEl ? inputEl.value.trim() : '';
      cleanup();
      if (onConfirm) onConfirm(val || defaultValue);
    };
  }
}

window.toggleLentStatus = function (id) {
  const item = state.items.find((i) => i.id === id);
  if (!item) return;

  if (item.lent && item.lent.isLent) {
    returnLentItem(id);
  } else {
    showPromptDialog({
      title: 'Lend Item',
      message: `Who is borrowing "${item.name}"?`,
      defaultValue: 'Neighbor / Friend',
      placeholder: 'Enter borrower name...',
      confirmText: 'Record Loan',
      onConfirm: (borrower) => {
        const lenderName = borrower.trim() || 'Neighbor / Friend';
        state.items = state.items.map((i) =>
          i.id === id
            ? {
                ...i,
                lent: {
                  isLent: true,
                  lentTo: lenderName,
                  lentDate: new Date().toISOString().slice(0, 10),
                },
              }
            : i
        );
        saveItems();
        renderApp();
        showToast(`Marked "${item.name}" as lent to ${lenderName}`);
      },
    });
  }
};

window.deleteItem = function (id) {
  const item = state.items.find((i) => i.id === id);
  if (!item) return;

  showConfirmDialog({
    title: 'Delete Item',
    message: `Remove "${item.name}" from FindIt? This action cannot be undone.`,
    confirmText: 'Delete',
    confirmClass: 'bg-rose-600 hover:bg-rose-700 text-white',
    onConfirm: () => {
      state.items = state.items.filter((i) => i.id !== id);
      saveItems();
      renderApp();
      showToast(`Removed "${item.name}"`);
    },
  });
};

// =========================================================================
// EFFORTLESS QUICK CAPTURE & ADD VIEW CONTROLLERS
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
  populateTourSelect();
  populateDetailedAddForm();
  if (!state.editingItemId) {
    clearPhotoPreview();
    const voiceInput = document.getElementById('voice-nlp-input');
    if (voiceInput) voiceInput.value = '';
    const clearBtn = document.getElementById('btn-voice-input-clear');
    if (clearBtn) clearBtn.classList.add('hidden');
    const notice = document.getElementById('voice-autofill-notice');
    if (notice) notice.classList.add('hidden');
  }
  safeCreateIcons();
}

window.setAddCaptureMode = function (mode) {
  state.addCaptureMode = mode;
  safeCreateIcons();
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
  const clearBtn = document.getElementById('btn-voice-input-clear');
  if (clearBtn) {
    if (val && val.trim().length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }

  if (!val || val.trim().length < 2) {
    currentParsedNlp = null;
    return;
  }

  const parsed = parseSentence(val);
  currentParsedNlp = parsed;

  if (parsed) {
    // Populate directly into the detailed form so user can review and edit immediately
    const nameInput = document.getElementById('add-item-name');
    const roomSelect = document.getElementById('add-item-room');
    const zoneInput = document.getElementById('add-item-zone');
    const catSelect = document.getElementById('add-item-category');

    if (nameInput) nameInput.value = parsed.name;
    if (zoneInput) zoneInput.value = parsed.zone;
    if (catSelect && parsed.category) catSelect.value = parsed.category;
    if (roomSelect && parsed.room) {
      const matchOpt = Array.from(roomSelect.options).find(
        (o) => o.value.toLowerCase() === parsed.room.toLowerCase()
      );
      if (matchOpt) {
        roomSelect.value = matchOpt.value;
      } else {
        const newOpt = document.createElement('option');
        newOpt.value = parsed.room;
        newOpt.textContent = parsed.room;
        newOpt.selected = true;
        roomSelect.appendChild(newOpt);
      }
    }

    const notice = document.getElementById('voice-autofill-notice');
    const noticeText = document.getElementById('voice-autofill-text');
    if (notice && noticeText) {
      notice.classList.remove('hidden');
      noticeText.innerHTML = `Heard: <strong>&ldquo;${escapeHtml(val)}&rdquo;</strong> &rarr; Form filled below! You can review or edit any field.`;
    }
  }
};

window.clearVoiceInputOnly = function () {
  const input = document.getElementById('voice-nlp-input');
  if (input) input.value = '';
  const clearBtn = document.getElementById('btn-voice-input-clear');
  if (clearBtn) clearBtn.classList.add('hidden');
};

window.dismissVoiceNotice = function () {
  const notice = document.getElementById('voice-autofill-notice');
  if (notice) notice.classList.add('hidden');
};

window.toggleTourModeSection = function () {
  const panel = document.getElementById('add-panel-tour');
  if (panel) {
    panel.classList.toggle('hidden');
  }
};

window.discardVoiceEntry = function () {
  discardDetailedFormEntry();
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
  const clearBtn = document.getElementById('btn-voice-input-clear');
  if (clearBtn) clearBtn.classList.add('hidden');
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

      const photoIndicator = document.getElementById('photo-status-indicator');
      if (photoIndicator) {
        photoIndicator.textContent = '✅ Image attached & visible in detailed form below!';
        photoIndicator.className = 'text-[11px] text-indigo-700 font-bold';
      }
      showToast('Image captured! Attached to form below.');
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
  const photoIndicator = document.getElementById('photo-status-indicator');
  if (photoIndicator) {
    photoIndicator.textContent = 'Optional • Visible in detailed form once captured';
    photoIndicator.className = 'text-[11px] text-stone-500 italic';
  }
};

window.discardPhotoEntry = function () {
  discardDetailedFormEntry();
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

window.discardTourEntry = function () {
  const textarea = document.getElementById('tour-items-input');
  if (textarea) textarea.value = '';
  const zoneInput = document.getElementById('tour-zone-input');
  if (zoneInput) zoneInput.value = '';
  const badges = document.getElementById('tour-preview-badges');
  if (badges) badges.innerHTML = '';
  state.activeTourItems = [];
  const labelBtn = document.getElementById('btn-save-tour-label');
  if (labelBtn) labelBtn.textContent = 'Add Items in Tour';

  if (state.isRecordingTour && tourRecognitionInstance) {
    try {
      tourRecognitionInstance.stop();
    } catch (e) {}
    state.isRecordingTour = false;
    const btn = document.getElementById('btn-tour-voice');
    if (btn) btn.classList.remove('recording-pulse');
    const label = document.getElementById('tour-voice-label');
    if (label) label.textContent = 'Speak items';
  }

  showToast('Tour entry discarded');
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

    // Photo clue handling inside detailed form
    if (editingItem.photoUrl) {
      currentPhotoDataUrl = editingItem.photoUrl;
      const previewImg = document.getElementById('photo-preview-img');
      const previewContainer = document.getElementById('photo-preview-container');
      if (previewImg) previewImg.src = editingItem.photoUrl;
      if (previewContainer) previewContainer.classList.remove('hidden');
      const photoIndicator = document.getElementById('photo-status-indicator');
      if (photoIndicator) {
        photoIndicator.textContent = '✅ Image attached & visible in detailed form below!';
        photoIndicator.className = 'text-[11px] text-indigo-700 font-bold';
      }
    } else {
      clearPhotoPreview();
    }
  } else {
    if (addTitle) addTitle.textContent = 'Add to Physical Memory';
    if (form) form.reset();
    clearPhotoPreview();
    const consFields = document.getElementById('consumable-fields');
    if (consFields) consFields.style.display = 'none';
    const lentFields = document.getElementById('lent-fields');
    if (lentFields) lentFields.style.display = 'none';
  }
}

window.toggleConsumableInputs = function () {
  const toggle = document.getElementById('add-item-consumable-toggle');
  const isChecked = toggle ? toggle.checked : false;
  const el = document.getElementById('consumable-fields');
  if (el) {
    if (isChecked) {
      el.classList.remove('hidden');
      el.style.display = 'grid';
    } else {
      el.classList.add('hidden');
      el.style.display = 'none';
    }
  }
};

window.toggleLentInputs = function () {
  const toggle = document.getElementById('add-item-lent-toggle');
  const isChecked = toggle ? toggle.checked : false;
  const el = document.getElementById('lent-fields');
  if (el) {
    if (isChecked) {
      el.classList.remove('hidden');
      el.style.display = 'grid';
    } else {
      el.classList.add('hidden');
      el.style.display = 'none';
    }
  }
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
          consumable: consumableData,
          lent: lentData,
          photoUrl: currentPhotoDataUrl !== null && currentPhotoDataUrl !== undefined ? currentPhotoDataUrl : item.photoUrl,
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
      photoUrl: currentPhotoDataUrl || null,
      lent: lentData,
      consumable: consumableData,
      lastVerifiedAt: now,
      createdAt: now,
    };
    state.items = [newItem, ...state.items];
    showToast(`Saved "${name}" in ${room}`);
  }

  clearPhotoPreview();
  clearVoiceInputOnly();
  dismissVoiceNotice();
  const form = document.getElementById('full-add-form');
  if (form) form.reset();

  saveItems();
  handleDailyCheckIn();
  switchPage('home');
};

window.discardDetailedFormEntry = function () {
  try {
    const form = document.getElementById('full-add-form');
    if (form) form.reset();
    state.editingItemId = null;
    clearPhotoPreview();
    clearVoiceInputOnly();
    dismissVoiceNotice();

    if (state.isRecordingVoice && voiceRecognitionInstance) {
      try {
        voiceRecognitionInstance.stop();
      } catch (e) {}
      state.isRecordingVoice = false;
      const btn = document.getElementById('btn-voice-record');
      if (btn) btn.classList.remove('recording-pulse');
      const label = document.getElementById('voice-record-label');
      if (label) label.textContent = 'Tap microphone to speak';
    }

    // Clear tour
    const tourInput = document.getElementById('tour-items-input');
    if (tourInput) tourInput.value = '';
    const zoneInput = document.getElementById('tour-zone-input');
    if (zoneInput) zoneInput.value = '';
    const badges = document.getElementById('tour-preview-badges');
    if (badges) badges.innerHTML = '';
    state.activeTourItems = [];
    if (state.isRecordingTour && tourRecognitionInstance) {
      try {
        tourRecognitionInstance.stop();
      } catch (e) {}
      state.isRecordingTour = false;
      const tourBtn = document.getElementById('btn-tour-voice');
      if (tourBtn) tourBtn.classList.remove('recording-pulse');
      const tourLabel = document.getElementById('tour-voice-label');
      if (tourLabel) tourLabel.textContent = 'Speak items';
    }

    const consFields = document.getElementById('consumable-fields');
    if (consFields) {
      consFields.style.display = 'none';
      consFields.classList.add('hidden');
    }
    const lentFields = document.getElementById('lent-fields');
    if (lentFields) {
      lentFields.style.display = 'none';
      lentFields.classList.add('hidden');
    }
    showToast('Entry discarded');
  } catch (err) {
    console.warn('Discard cleanup warning:', err);
  } finally {
    switchPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.discardAllAddEntries = function () {
  discardDetailedFormEntry();
};

window.discardTourEntry = function () {
  discardDetailedFormEntry();
};
  discardDetailedFormEntry();
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
    safeCreateIcons();
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
  safeCreateIcons();
}

window.confirmSpotCheckItem = function (id) {
  verifyLocation(id);
  state.spotCheckCurrentIndex++;
  renderSpotCheckStep();
};

window.relocateSpotCheckItem = function (id) {
  editItem(id);
};

// Quick trigger from top header
window.startQuickVoiceFromHeader = function () {
  switchPage('add');
  setAddCaptureMode('voice');
  setTimeout(() => {
    toggleVoiceRecognition();
  }, 250);
};

// Reset Demo Data (Safe In-App Dialog, no blocking modal)
window.resetData = function () {
  showConfirmDialog({
    title: 'Reset Demo Data',
    message: 'Reset all items, rooms, and organizing habits back to the starter demo data?',
    confirmText: 'Reset All',
    confirmClass: 'bg-rose-600 hover:bg-rose-700 text-white',
    onConfirm: () => {
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
    },
  });
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

  // Universal Mobile Tap & Click Resilience for iOS Safari & Android WebViews
  document.addEventListener(
    'touchend',
    (e) => {
      const btn = e.target.closest('button, [role="button"], .nav-tab-btn, label[for]');
      if (!btn) return;
      btn.style.opacity = '0.75';
      setTimeout(() => {
        btn.style.opacity = '';
      }, 120);
    },
    { passive: true }
  );

  // Set initial page to home
  switchPage('home');
});
