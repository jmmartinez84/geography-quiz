import type { MountainRange } from '../types/quiz'
// Coordinates in SVG viewBox units (0 0 900 680)
export const MOUNTAIN_RANGES: MountainRange[] = [
  {
    id: 'macizo_galaico',
    name: 'Macizo Galaico',
    centroid: [253, 57],
    polygon: [
      [259,23], [242,46], [225,74], [212,103],
      [240,119], [276,65], [285,32], [275,24],
      [259,23], [259,23],
    ],
  },
  {
    id: 'montes_de_leon',
    name: 'Montes de León',
    centroid: [310, 75],
    polygon: [
      [308,42], [296,62], [282,86], [270,106],
      [284,126], [315,129], [357,68], [346,47],
      [328,37], [309,42], [308,42],
    ],
  },
  {
    id: 'teleno',
    name: 'Teleno',
    centroid: [345, 102],
    polygon: [
      [362,91], [348,92], [328,94], [323,104],
      [328,119], [349,116], [362,109], [363,92],
      [362,91],
    ],
  },
  {
    id: 'cordillera_cantabrica',
    name: 'Cordillera Cantábrica',
    centroid: [402, 33],
    polygon: [
      [332,13], [323,23], [323,35], [355,42],
      [384,55], [435,52], [466,52], [491,48],
      [496,39], [496,29], [419,21], [369,13],
      [332,13], [332,13],
    ],
  },
  {
    id: 'montes_vascos',
    name: 'Montes Vascos',
    centroid: [530, 34],
    polygon: [
      [505,19], [502,39], [503,57], [530,58],
      [553,54], [563,42], [564,29], [553,22],
      [534,19], [523,18], [505,18], [505,19],
    ],
  },
  {
    id: 'pirineos',
    name: 'Pirineos',
    centroid: [675, 63],
    polygon: [
      [574,24], [564,34], [559,48], [612,80],
      [657,90], [705,95], [756,102], [803,102],
      [805,77], [803,60], [739,46], [631,32],
      [573,23], [574,24],
    ],
  },
  {
    id: 'sistema_central',
    name: 'Sistema Central',
    centroid: [397, 225],
    polygon: [
      [328,232], [306,260], [306,287], [390,275],
      [429,248], [507,204], [514,171], [469,156],
      [430,195], [364,218], [328,233], [328,232],
    ],
  },
  {
    id: 'sistema_iberico',
    name: 'Sistema Ibérico',
    centroid: [560, 180],
    polygon: [
      [506,92], [469,107], [484,138], [520,173],
      [530,225], [574,253], [615,277], [649,277],
      [662,251], [661,227], [565,127], [545,99],
      [505,92], [506,92],
    ],
  },
  {
    id: 'cordillera_costero_catalana',
    name: 'Cordillera Costero Catalana',
    centroid: [758, 145],
    polygon: [
      [822,116], [797,116], [767,119], [748,135],
      [729,144], [707,157], [690,180], [703,195],
      [757,168], [795,148], [823,116], [822,116],
    ],
  },
  {
    id: 'montes_de_toledo',
    name: 'Montes de Toledo',
    centroid: [432, 307],
    polygon: [
      [413,289], [396,301], [405,319], [427,333],
      [460,337], [479,311], [463,295], [435,287],
      [412,290], [413,289],
    ],
  },
  {
    id: 'sierra_morena',
    name: 'Sierra Morena',
    centroid: [368, 398],
    polygon: [
      [301,393], [288,418], [299,438], [332,438],
      [427,415], [453,400], [469,384], [470,371],
      [398,364], [358,376], [319,384], [302,393],
      [301,393],
    ],
  },
  {
    id: 'sistemas_beticos',
    name: 'Sistemas Béticos',
    centroid: [479, 460],
    polygon: [
      [525,367], [507,403], [482,432], [442,448],
      [389,473], [371,501], [361,532], [380,545],
      [414,540], [491,523], [522,521], [560,512],
      [571,429], [575,403], [555,370], [526,366],
      [525,367],
    ],
  },
  {
    id: 'teide',
    name: 'Teide',
    centroid: [95, 632],
    polygon: [
      [84,625], [92,645], [100,640], [105,632],
      [102,624], [87,624], [84,625],
    ],
  },
]

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
  'teide',
]
