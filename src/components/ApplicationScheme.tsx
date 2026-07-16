import React from "react";

const O  = "#F97316";
const KT = "#D4A55A";
const KL = "#8A5E1A";
const KR = "#B07828";
const AT = "#E0B870";
const AL = "#7B5E2A";
const AR = "#9B7535";
const SW = "#FFFFFF";
const SB = "#D8CEB8";

// ── Stickers ─────────────────────────────────────────────────────────────────

// TOP sticker — yTop controls up/down position on top face
// 🎯 DYNAMIC CONTROL ISOMETRIC TOP STICKER
interface TopStickerProps {
  xCenter?: number;
  yCenter?: number; 
  width?: number;  
  height?: number;  
}

function TopSticker({ 
  xCenter = 70, 
  yCenter = 36, 
  width = 24, 
  height = 14 
}: TopStickerProps) {

  // Isometric Diamond corners dynamic Variables
  const topX = xCenter;
  const topY = yCenter - height;

  const rightX = xCenter + width;
  const rightY = yCenter;

  const bottomX = xCenter;
  const bottomY = yCenter + height;

  const leftX = xCenter - width;
  const leftY = yCenter;

  return (
    <polygon
      points={`${topX},${topY} ${rightX},${rightY} ${bottomX},${bottomY} ${leftX},${leftY}`}
      fill={SW} 
      opacity={0.92} 
      stroke={SB} 
      strokeWidth={0.8}
    />
  );
}

// 🎯 FIXED: PERFECT FLAT LEFT WALL STICKER (No Triangle Error!)
interface LeftStickerProps {
  xCenter?: number; // Adjust horizontally (Default: 46)
  yCenter?: number; // Adjust vertically (Default: 78)
  size?: number;     
}

function LeftSticker({
  xCenter = 46,
  yCenter = 78,
  size = 24
}: LeftStickerProps) {
  
  const w = size;     // Width along the slope
  const h = size * 1.1; // Height down the wall (Adjusted for perfect square look)

  // 📐 Perfect Left Isometric Wall Matrix Tracking
  const p1_x = xCenter - w/2;
  const p1_y = yCenter - w/4 - h/2;

  const p2_x = xCenter + w/2;
  const p2_y = yCenter + w/4 - h/2;

  const p3_x = xCenter + w/2;
  const p3_y = yCenter + w/4 + h/2;

  const p4_x = xCenter - w/2;
  const p4_y = yCenter - w/4 + h/2;

  return (
    <polygon
      points={`${p1_x},${p1_y} ${p2_x},${p2_y} ${p3_x},${p3_y} ${p4_x},${p4_y}`}
      fill={SW}
      opacity={0.95}
      stroke={SB}
      strokeWidth={0.8}
      strokeLinejoin="round"
    />
  );
}

// 🎯 FIXED: PERFECT FLAT RIGHT WALL STICKER (No Triangle Error!)
interface RightStickerProps {
  xCenter?: number; // Adjust horizontally (Default: 94)
  yCenter?: number; // Adjust vertically (Default: 78)
  size?: number;     
}

function RightSticker({
  xCenter = 94,
  yCenter = 78,
  size = 24
}: RightStickerProps) {

  const w = size;
  const h = size * 1.1;

  // 📐 Perfect Right Isometric Wall Matrix Tracking
  const p1_x = xCenter - w/2;
  const p1_y = yCenter + w/4 - h/2;

  const p2_x = xCenter + w/2;
  const p2_y = yCenter - w/4 - h/2;

  const p3_x = xCenter + w/2;
  const p3_y = yCenter - w/4 + h/2;

  const p4_x = xCenter - w/2;
  const p4_y = yCenter + w/4 + h/2;

  return (
    <polygon
      points={`${p1_x},${p1_y} ${p2_x},${p2_y} ${p3_x},${p3_y} ${p4_x},${p4_y}`}
      fill={SW}
      opacity={0.95}
      stroke={SB}
      strokeWidth={0.8}
      strokeLinejoin="round"
    />
  );
}
// 🎯 DYNAMIC CONTROL ISOMETRIC CORNER STICKER (PERFECT FLAT & SQUARE LOOK)
interface CornerStickerProps {
  xCenter?: number; 
  yCenter?: number; 
  size?: number;    
}

function CornerSticker({
  xCenter = 70,   
  yCenter = 87,   
  size = 24      
}: CornerStickerProps) {

  const w = size;     
  const h = size * 1.1; 

  // 📐 LEFT SIDE POLYGON POINTS (Left Wall Projection)
  const l_p1_x = xCenter - w;
  const l_p1_y = yCenter - w/2 - h/2;

  const l_p2_x = xCenter;
  const l_p2_y = yCenter - h/2;

  const l_p3_x = xCenter;
  const l_p3_y = yCenter + h/2;

  const l_p4_x = xCenter - w;
  const l_p4_y = yCenter - w/2 + h/2;

  // 📐 RIGHT SIDE POLYGON POINTS (Right Wall Projection)
  const r_p1_x = xCenter;
  const r_p1_y = yCenter - h/2;

  const r_p2_x = xCenter + w;
  const r_p2_y = yCenter - w/2 - h/2;

  const r_p3_x = xCenter + w;
  const r_p3_y = yCenter - w/2 + h/2;

  const r_p4_x = xCenter;
  const r_p4_y = yCenter + h/2;

  return (
    <>
      {/* Left Wall Part */}
      <polygon 
        points={`${l_p1_x},${l_p1_y} ${l_p2_x},${l_p2_y} ${l_p3_x},${l_p3_y} ${l_p4_x},${l_p4_y}`} 
        fill={SW} opacity={0.92} stroke={SB} strokeWidth={0.8} strokeLinejoin="round" 
      />
      
      {/* Right Wall Part */}
      <polygon 
        points={`${r_p1_x},${r_p1_y} ${r_p2_x},${r_p2_y} ${r_p3_x},${r_p3_y} ${r_p4_x},${r_p4_y}`} 
        fill={SW} opacity={0.92} stroke={SB} strokeWidth={0.8} strokeLinejoin="round" 
      />
    </>
  );
}

// ── Standard 3-face box ───────────────────────────────────────────────────────

function StandardBox({
  topActive, leftActive, rightActive, children,
}: {
  topActive?: boolean; leftActive?: boolean; rightActive?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <svg width={140} height={140} viewBox="0 0 140 140" style={{ overflow: "visible" }}>
      <polygon points="70,12 118,38 70,64 22,38"  fill={topActive   ? AT : KT} stroke={O} strokeWidth={1.5} strokeLinejoin="round" />
      <polygon points="22,38 22,92 70,118 70,64"  fill={leftActive  ? AL : KL} stroke={O} strokeWidth={1.5} strokeLinejoin="round" />
      <polygon points="70,64 118,38 118,92 70,118" fill={rightActive ? AR : KR} stroke={O} strokeWidth={1.5} strokeLinejoin="round" />
      {children}
    </svg>
  );
}

// ── Bottom box — faded sides + solid bottom face ──────────────────────────────

// 🎯 INTERCHANGED COLORS BOTTOM BOX (TOP-LIGHT -> BOTTOM / BOTTOM-DARK -> TOP)
interface BottomStickerProps {
  xCenter?: number; 
  yCenter?: number; 
  width?: number;   
  height?: number;  
}

function BottomBox({
  xCenter = 70,
  yCenter = 92, 
  width = 24,   
  height = 12
}: BottomStickerProps) {

  const topX = xCenter;
  const topY = yCenter - height;

  const rightX = xCenter + width;
  const rightY = yCenter;

  const bottomX = xCenter;
  const bottomY = yCenter + height;

  const leftX = xCenter - width;
  const leftY = yCenter;

  return (
    <svg width={140} height={140} viewBox="0 0 140 140" style={{ overflow: "visible" }}>
      {/* 1. Base/Bottom Face Panel  */}
      <polygon points="22,92 70,118 118,92 70,66" fill={KT} stroke={O} strokeWidth={1.5} strokeLinejoin="round" />
      
      {/* 2. Left side face */}
      <polygon points="22,38 22,92 70,118 70,64" fill={KL} stroke={O} strokeWidth={1.5} strokeLinejoin="round" />
      
      {/* 3. Right side face */}
      <polygon points="70,64 118,38 118,92 70,118" fill={KR} stroke={O} strokeWidth={1.5} strokeLinejoin="round" />
      
      {/* 4. Top Cap Face Panel  */}
      <polygon points="70,12 118,38 70,64 22,38" fill={KT} stroke={O} strokeWidth={1.5} strokeLinejoin="round" />
      
      {/* 5. PERFECT SQUARE ISO STICKER ON BOTTOM FACE */}
      <polygon
        points={`${topX},${topY} ${rightX},${rightY} ${bottomX},${bottomY} ${leftX},${leftY}`}
        fill={SW} 
        opacity={0.95} 
        stroke={SB} 
        strokeWidth={0.8} 
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── renderBox ─────────────────────────────────────────────────────────────────

function renderBox(sideKey: string) {
  const k = sideKey.toLowerCase().trim();

  if (k.includes("bottom")) return <BottomBox />;

  if (k.includes("top")) {
    return (
      <StandardBox topActive>
        <TopSticker />
      </StandardBox>
    );
  }
  if (k.includes("corner") || k.includes("wrap")) {
    return (
      <StandardBox leftActive rightActive>
        <CornerSticker />
      </StandardBox>
    );
  }
  if (k.includes("left lateral")) {
    return <StandardBox leftActive><LeftSticker /></StandardBox>;
  }
  if (k.includes("right lateral")) {
    return <StandardBox rightActive><RightSticker /></StandardBox>;
  }
  if (k.includes("lateral")) {
    return (
      <StandardBox leftActive rightActive>
        <LeftSticker />
        <RightSticker />
      </StandardBox>
    );
  }
  if (k.includes("front")) {
    return <StandardBox leftActive><LeftSticker /></StandardBox>;
  }

  return <StandardBox />;
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function ApplicationScheme({ scheme }: { scheme: string }) {
  if (!scheme) return null;

  const sides = scheme.split(",").map((s) => s.trim()).filter(Boolean);

  return (
    <section className="my-16 max-w-5xl mx-auto bg-gradient-to-br from-gray-50/70 to-white border border-gray-200/60 rounded-lg p-10 shadow-sm relative overflow-hidden text-center">
      <div className="border-b border-gray-100 pb-4 mb-10">
        <h3 className="text-xs font-black text-[#0B192C] uppercase tracking-widest inline-block relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-[#F97316]">
          Printing Positions
        </h3>
      </div>

      <div className="flex flex-wrap gap-10 justify-center pt-2">
        {sides.map((side, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4">
            <div className="w-[140px] h-[140px] flex items-center justify-center">
              {renderBox(side)}
            </div>
            <span className="text-[11px] font-extrabold text-[#0B192C] uppercase tracking-wide px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
              {side}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B192C08_1px,transparent_1px),linear-gradient(to_bottom,#0B192C08_1px,transparent_1px)] bg-[size:16px_16px] -z-10 pointer-events-none" />
    </section>
  );
}