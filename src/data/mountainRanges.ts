import type { MountainRange } from '../types/quiz'

// Coordinates are percentages (0-100) of the SVG viewBox (0 0 900 680)
// Mapping Spain's geography: NW corner ~(50,40), NE corner ~(820,40),
// SW corner ~(100,620), SE corner ~(780,620)
// The viewBox represents roughly Spain's bounding box.

export const MOUNTAIN_RANGES: MountainRange[] = [
  {
    id: 'macizo_galaico',
    name: 'Macizo Galaico',
    centroid: [110, 120],
    polygon: [
      [55, 55], [160, 55], [175, 90],
      [165, 160], [120, 180], [70, 165],
      [50, 130], [55, 55],
    ],
  },
  {
    id: 'montes_de_leon',
    name: 'Montes de León',
    centroid: [170, 200],
    polygon: [
      [120, 160], [190, 155], [215, 175],
      [220, 225], [195, 255], [145, 255],
      [115, 235], [110, 195], [120, 160],
    ],
  },
  {
    id: 'teleno',
    name: 'Teleno',
    centroid: [175, 215],
    polygon: [
      [158, 200], [192, 198], [198, 218],
      [185, 235], [160, 232], [150, 215],
      [158, 200],
    ],
  },
  {
    id: 'cordillera_cantabrica',
    name: 'Cordillera Cantábrica',
    centroid: [310, 110],
    polygon: [
      [160, 75], [390, 65], [420, 85],
      [430, 125], [400, 155], [340, 165],
      [260, 170], [195, 165], [155, 140],
      [145, 110], [160, 75],
    ],
  },
  {
    id: 'montes_vascos',
    name: 'Montes Vascos',
    centroid: [460, 105],
    polygon: [
      [400, 65], [490, 65], [510, 90],
      [510, 130], [475, 155], [430, 150],
      [415, 125], [410, 90], [400, 65],
    ],
  },
  {
    id: 'pirineos',
    name: 'Pirineos',
    centroid: [600, 75],
    polygon: [
      [480, 45], [730, 45], [750, 70],
      [740, 110], [690, 140], [600, 150],
      [510, 140], [478, 105], [475, 70],
      [480, 45],
    ],
  },
  {
    id: 'sistema_central',
    name: 'Sistema Central',
    centroid: [370, 320],
    polygon: [
      [200, 270], [270, 245], [360, 255],
      [460, 270], [510, 300], [505, 345],
      [455, 370], [360, 375], [270, 368],
      [200, 350], [185, 315], [200, 270],
    ],
  },
  {
    id: 'sistema_iberico',
    name: 'Sistema Ibérico',
    centroid: [555, 310],
    polygon: [
      [490, 185], [545, 170], [590, 185],
      [620, 220], [635, 280], [625, 360],
      [600, 420], [565, 440], [530, 425],
      [510, 375], [505, 305], [488, 240],
      [490, 185],
    ],
  },
  {
    id: 'cordillera_costero_catalana',
    name: 'Cordillera Costero Catalana',
    centroid: [690, 225],
    polygon: [
      [660, 145], [720, 150], [755, 180],
      [760, 240], [745, 310], [715, 330],
      [685, 310], [670, 255], [658, 195],
      [655, 160], [660, 145],
    ],
  },
  {
    id: 'montes_de_toledo',
    name: 'Montes de Toledo',
    centroid: [340, 430],
    polygon: [
      [230, 395], [310, 383], [415, 390],
      [470, 410], [470, 455], [420, 475],
      [330, 475], [245, 468], [215, 445],
      [218, 415], [230, 395],
    ],
  },
  {
    id: 'sierra_morena',
    name: 'Sierra Morena',
    centroid: [360, 510],
    polygon: [
      [155, 490], [240, 480], [360, 482],
      [490, 488], [545, 505], [545, 540],
      [490, 555], [360, 555], [235, 548],
      [148, 535], [140, 510], [155, 490],
    ],
  },
  {
    id: 'sistemas_beticos',
    name: 'Sistemas Béticos',
    centroid: [530, 580],
    polygon: [
      [280, 555], [390, 548], [500, 550],
      [620, 555], [700, 570], [720, 610],
      [690, 645], [580, 658], [450, 658],
      [330, 645], [240, 620], [225, 585],
      [255, 562], [280, 555],
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
