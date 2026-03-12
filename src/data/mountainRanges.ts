import type { MountainRange } from '../types/quiz'

// Coordinates are in SVG viewBox units (0 0 900 680)
// Calibrated against espana.jpg physical relief map
// Image covers full Iberian Peninsula + Canaries inset + Baleares
// Spain landmass approx: x 60-790, y 30-640

export const MOUNTAIN_RANGES: MountainRange[] = [
  {
    id: 'macizo_galaico',
    name: 'Macizo Galaico',
    centroid: [122, 118],
    polygon: [
      [62, 34], [178, 32], [188, 62], [182, 125],
      [162, 178], [108, 192], [64, 165], [56, 108], [62, 34],
    ],
  },
  {
    id: 'montes_de_leon',
    name: 'Montes de León',
    centroid: [192, 212],
    polygon: [
      [124, 148], [250, 146], [260, 178], [256, 248],
      [236, 270], [170, 268], [138, 250], [120, 210], [124, 148],
    ],
  },
  {
    id: 'teleno',
    name: 'Teleno',
    centroid: [180, 208],
    polygon: [
      [150, 188], [205, 185], [212, 208], [200, 230],
      [166, 228], [146, 210], [150, 188],
    ],
  },
  {
    id: 'cordillera_cantabrica',
    name: 'Cordillera Cantábrica',
    centroid: [292, 98],
    polygon: [
      [84, 46], [388, 44], [496, 50], [510, 72], [492, 112],
      [400, 134], [268, 146], [152, 140], [88, 124], [74, 92], [84, 46],
    ],
  },
  {
    id: 'montes_vascos',
    name: 'Montes Vascos',
    centroid: [538, 102],
    polygon: [
      [490, 48], [590, 46], [605, 72], [598, 134],
      [565, 154], [508, 152], [484, 122], [482, 70], [490, 48],
    ],
  },
  {
    id: 'pirineos',
    name: 'Pirineos',
    centroid: [665, 65],
    polygon: [
      [508, 24], [618, 20], [718, 20], [782, 26], [798, 48],
      [788, 88], [748, 106], [688, 108], [588, 104], [508, 88],
      [502, 52], [508, 24],
    ],
  },
  {
    id: 'sistema_central',
    name: 'Sistema Central',
    centroid: [400, 304],
    polygon: [
      [150, 252], [228, 236], [372, 242], [508, 256], [578, 280],
      [574, 344], [512, 358], [372, 362], [232, 356], [150, 336],
      [140, 296], [150, 252],
    ],
  },
  {
    id: 'sistema_iberico',
    name: 'Sistema Ibérico',
    centroid: [602, 282],
    polygon: [
      [522, 122], [576, 118], [622, 138], [656, 186], [670, 262],
      [662, 356], [638, 418], [596, 430], [560, 412], [540, 352],
      [534, 252], [518, 180], [522, 122],
    ],
  },
  {
    id: 'cordillera_costero_catalana',
    name: 'Cordillera Costero Catalana',
    centroid: [714, 228],
    polygon: [
      [666, 108], [724, 114], [760, 158], [772, 240], [760, 328],
      [722, 342], [680, 322], [664, 258], [658, 180], [666, 108],
    ],
  },
  {
    id: 'montes_de_toledo',
    name: 'Montes de Toledo',
    centroid: [366, 380],
    polygon: [
      [190, 332], [315, 320], [453, 326], [544, 346], [547, 416],
      [490, 430], [350, 432], [240, 427], [190, 407], [184, 368], [190, 332],
    ],
  },
  {
    id: 'sierra_morena',
    name: 'Sierra Morena',
    centroid: [372, 445],
    polygon: [
      [100, 422], [238, 414], [380, 416], [522, 420], [636, 425],
      [644, 454], [603, 468], [380, 466], [215, 461], [100, 455],
      [94, 437], [100, 422],
    ],
  },
  {
    id: 'sistemas_beticos',
    name: 'Sistemas Béticos',
    centroid: [545, 558],
    polygon: [
      [258, 468], [396, 458], [512, 460], [630, 462], [720, 472],
      [808, 488], [826, 524], [800, 576], [720, 618], [580, 632],
      [440, 632], [316, 618], [246, 590], [234, 556], [258, 468],
    ],
  },
]

// Order matters for hit-testing: smaller/nested regions first
export const HIT_TEST_ORDER = [
  'teleno',
  'montes_de_leon',
  'macizo_galaico',
  'montes_vascos',
  'cordillera_cantabrica',
  'pirineos',
  'cordillera_costero_catalana',
  'sistema_iberico',
  'sistema_central',
  'montes_de_toledo',
  'sierra_morena',
  'sistemas_beticos',
]
