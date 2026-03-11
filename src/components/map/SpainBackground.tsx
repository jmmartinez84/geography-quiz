// SVG background map of Spain (simplified coastline outline)
// ViewBox: 0 0 900 680
export function SpainBackground() {
  return (
    <g>
      {/* Ocean/sea background */}
      <rect x="0" y="0" width="900" height="680" fill="#b8d4e8" />

      {/* Spain mainland outline */}
      <path
        d="
          M 160,55 L 220,45 L 310,42 L 420,42 L 480,45 L 590,42
          L 680,48 L 735,48 L 755,65 L 760,110 L 755,160
          L 780,200 L 790,260 L 785,310 L 770,340 L 760,370
          L 755,410 L 740,450 L 720,490 L 700,530 L 690,560
          L 710,590 L 720,620 L 700,645 L 650,658 L 580,665
          L 500,665 L 420,660 L 340,648 L 260,625 L 210,600
          L 165,560 L 145,525 L 135,490 L 130,450 L 120,410
          L 105,365 L 98,310 L 100,260 L 108,210 L 118,175
          L 108,140 L 95,110 L 100,80 L 130,62 L 160,55 Z
        "
        fill="#e8e0c8"
        stroke="#a0926e"
        strokeWidth="2"
      />

      {/* Portugal region (simplified) */}
      <path
        d="
          M 100,80 L 130,62 L 160,55 L 165,90 L 155,140
          L 118,175 L 108,210 L 100,260 L 98,310 L 105,365
          L 120,410 L 130,450 L 135,490 L 145,525 L 130,530
          L 108,500 L 88,450 L 80,390 L 78,320 L 82,250
          L 88,185 L 95,130 L 100,80 Z
        "
        fill="#d8d0b8"
        stroke="#a0926e"
        strokeWidth="1"
      />

      {/* Pyrenees border (France) */}
      <path
        d="M 480,45 L 590,42 L 680,48 L 735,48 L 755,65"
        fill="none"
        stroke="#888"
        strokeWidth="1"
        strokeDasharray="6,3"
      />

      {/* Interior relief shading - meseta */}
      <ellipse cx="380" cy="370" rx="220" ry="140" fill="rgba(180,165,130,0.3)" />

      {/* River Ebro rough path */}
      <path
        d="M 200,220 Q 320,240 420,270 Q 520,290 580,320 Q 640,350 680,360"
        fill="none"
        stroke="#6b9fc7"
        strokeWidth="2"
        opacity="0.6"
      />
      {/* River Duero */}
      <path
        d="M 105,310 Q 200,300 300,310 Q 400,320 480,305 Q 540,295 580,285"
        fill="none"
        stroke="#6b9fc7"
        strokeWidth="1.5"
        opacity="0.6"
      />
      {/* River Tajo */}
      <path
        d="M 108,385 Q 200,380 290,390 Q 380,400 460,395 Q 530,390 590,410 Q 640,430 670,460"
        fill="none"
        stroke="#6b9fc7"
        strokeWidth="1.5"
        opacity="0.6"
      />
      {/* River Guadalquivir */}
      <path
        d="M 155,510 Q 250,510 350,515 Q 450,520 530,535 Q 610,550 660,575"
        fill="none"
        stroke="#6b9fc7"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Mountain texture on ranges - subtle hatch */}
      <pattern id="mtn" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
        <line x1="0" y1="6" x2="6" y2="0" stroke="rgba(100,80,50,0.15)" strokeWidth="0.8" />
      </pattern>

      {/* Cantabrian coast label area */}
      <path
        d="M 160,75 L 390,65 L 420,85 L 430,125 L 400,155 L 340,165 L 260,170 L 195,165 L 155,140 L 145,110 L 160,75 Z"
        fill="url(#mtn)"
      />
      {/* Pyrenees texture */}
      <path
        d="M 480,45 L 730,45 L 750,70 L 740,110 L 690,140 L 600,150 L 510,140 L 478,105 L 475,70 L 480,45 Z"
        fill="url(#mtn)"
      />
      {/* Sistema Central texture */}
      <path
        d="M 200,270 L 270,245 L 360,255 L 460,270 L 510,300 L 505,345 L 455,370 L 360,375 L 270,368 L 200,350 L 185,315 L 200,270 Z"
        fill="url(#mtn)"
      />
      {/* Sistema Ibérico texture */}
      <path
        d="M 490,185 L 545,170 L 590,185 L 620,220 L 635,280 L 625,360 L 600,420 L 565,440 L 530,425 L 510,375 L 505,305 L 488,240 L 490,185 Z"
        fill="url(#mtn)"
      />
      {/* Sierra Morena texture */}
      <path
        d="M 155,490 L 240,480 L 360,482 L 490,488 L 545,505 L 545,540 L 490,555 L 360,555 L 235,548 L 148,535 L 140,510 L 155,490 Z"
        fill="url(#mtn)"
      />
      {/* Sistemas Béticos texture */}
      <path
        d="M 280,555 L 390,548 L 500,550 L 620,555 L 700,570 L 720,610 L 690,645 L 580,658 L 450,658 L 330,645 L 240,620 L 225,585 L 255,562 L 280,555 Z"
        fill="url(#mtn)"
      />

      {/* Canary Islands inset box */}
      <rect x="55" y="580" width="150" height="90" rx="4" fill="#b8d4e8" stroke="#a0926e" strokeWidth="1.5" />
      <text x="130" y="576" textAnchor="middle" fontSize="10" fill="#555">Islas Canarias</text>
      {/* Simplified Canary islands */}
      <ellipse cx="80" cy="620" rx="12" ry="7" fill="#e8e0c8" stroke="#a0926e" strokeWidth="1" />
      <ellipse cx="105" cy="612" rx="9" ry="6" fill="#e8e0c8" stroke="#a0926e" strokeWidth="1" />
      <ellipse cx="125" cy="608" rx="11" ry="7" fill="#e8e0c8" stroke="#a0926e" strokeWidth="1" />
      <ellipse cx="150" cy="618" rx="8" ry="5" fill="#e8e0c8" stroke="#a0926e" strokeWidth="1" />
      <ellipse cx="168" cy="628" rx="7" ry="5" fill="#e8e0c8" stroke="#a0926e" strokeWidth="1" />
      {/* Teide peak */}
      <polygon points="125,595 120,608 130,608" fill="#c0a080" />
      <text x="125" y="592" textAnchor="middle" fontSize="8" fill="#555">Teide</text>

      {/* Balearic Islands */}
      <ellipse cx="760" cy="360" rx="22" ry="10" fill="#e8e0c8" stroke="#a0926e" strokeWidth="1" />
      <ellipse cx="800" cy="345" rx="14" ry="7" fill="#e8e0c8" stroke="#a0926e" strokeWidth="1" />
      <text x="795" y="370" textAnchor="middle" fontSize="9" fill="#555">Baleares</text>

      {/* Compass */}
      <text x="860" y="65" textAnchor="middle" fontSize="18" fill="#666" fontWeight="bold">N</text>
      <line x1="860" y1="70" x2="860" y2="95" stroke="#666" strokeWidth="1.5" />
      <polygon points="860,68 856,78 864,78" fill="#666" />
    </g>
  )
}
