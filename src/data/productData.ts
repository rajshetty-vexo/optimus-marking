import Printandapply from "/src/assets/Products Models/Print and Apply.jpg"
import fliximatewindgrip from "/src/assets/Products Models/fliximate windgrip.jpg"
import fliximatebelt from "/src/assets/Products Models/fliximate ebelt.jpg"
import fliximateblade from "/src/assets/Products Models/fliximate eblade.jpg"
import fliximateelinear from "/src/assets/Products Models/fliximate elinear.jpg"
import fliximateeswing from "/src/assets/Products Models/fliximate eswing.jpg"
import fliximateecorner from "/src/assets/Products Models/fliximate ecorner.jpg"
import Modularlabelers from "/src/assets/Products Models/Modular labelers.jpg"
import palletelabelling from "/src/assets/Products Models/Pallete Labelling.jpg"
import SLAM from "/src/assets/Products Models/SLAM.jpg"
import speedmateblade from "/src/assets/Products Models/speedmate blade.jpg"
import speedmatepro from "/src/assets/Products Models/speedmate pro.jpg"
import SLAMlabelling from "/src/assets/Products Models/SLAM labelling.jpg"
import TIJM5 from "/src/assets/Products Models/TIJ M5.jpeg"
import TIJM9 from "/src/assets/Products Models/TIJ M9.png"
import M5andM9 from "/src/assets/Products Models/M5&M9.png"
import TIJPleyon from "/src/assets/Products Models/TIJ Pleyon.png"
import TIJM7 from "/src/assets/Products Models/TIJ M7.png"
import TIJKeryon from "/src/assets/Products Models/TIJ Keryon.png"
import TIJDyplon from "/src/assets/Products Models/TIJ Dyplon.png"
import KeryonandDyplon from "/src/assets/Products Models/Keryon&Dyplon.png"
import DKMinimobile from "/src/assets/Products Models/TIJ Dk Minimobile.jpg"
import Maximinimobile from "/src/assets/Products Models/TIJ Maximinimobile.jpg"
import DKandMaximobile from "/src/assets/Products Models/DK and Maximobile.png"
import MakroMobile from "/src/assets/Products Models/DOD Makro Mobile.jpg"
import MakroPlus from "/src/assets/Products Models/DOD Makro Plus.jpg"  
import IMALabeling from "/src/assets/Logo/IMA Labeling logo.png"
import FamHplogo from "/src/assets/Logo/FamHp logo.jpeg"
import Famlogo from "/src/assets/Logo/Fam logo.png"

export interface ProductMachine {
  id: string;
  name: string;
  description: string; 
  scheme: string; 
  features: string[]; 
  videoUrl?: string; 
  image: string; 
  images?: string[];
  brochureUrl?: string;
 
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  images?: string[];
  logo?:string;
  machines: ProductMachine[];
  scheme?: string;
  features?: string[];
  videoUrl?: string;
  brochureUrl?: string;
}

export const labelingData: ProductCategory[] = [
  {
    id: "print-apply",
    title: "Label Print & Apply",
    subtitle: "LABEL PRINT AND APPLY APPLICATORS",
    description: "A label Print & Apply is a system that is able to print any coding and traceability data on a self-adhesive label and then apply it directly to a product or package.",
    image:Printandapply,
    logo:IMALabeling,
    machines: [
      {
        id: "windgrip",
        name: "FlexiMate WindGrip",
        description: "The <strong>WindGrip</strong> is a full-electric label print and apply system, built for the print & application of <strong>A6 labels (105x148mm)</strong>. It is a <strong>wipe-on applicator</strong> and it is typically requested for integration in logistic environments where there is <strong>no use of compressed air</strong>.<br> <br> It uses a fan keeping labels in vacuum on the application pad; the electric driven applicator rod moves the pad at the desired distance. When triggered by a moving product, the applicator will run for an extra-run, until the label will get in contact with the product. Once the label leading edge is attached to the product, the product itself will carry away the label from the pad. <br> <br> A set of foam rollers adapts the label on the product surface.An optional laser distance sensor can be integrated, in order to optimize the applicator stroke positioning, and to reduce the application times.",
        scheme: "Top side, Bottom side, Lateral side",
        features: [
          "<strong>Programmable linear applicator</strong> with electric motion",
          "<strong>Smart variable distance</strong> positioning of the actuator",
          "<strong>Tamp-Blow technology</strong> for maximum labeling flexibility",
          "<strong>Wide range of stroke lengths</strong> and label pad sizes",,
        ],
        videoUrl: "https://www.youtube.com/embed/6E_EXWwczHk",
        image: fliximatewindgrip,
        // images: [
        //    fliximatewindgrip,
        //   "/assets/windgrip-angle-2.png",
        //   "/assets/windgrip-in-action.png"]
      },
      {
        id: "ebelt",
        name: "FlexiMate eBelt",
        description: "The Vacuum Belt is a <strong> high-speed, fully electric applicator for label print & apply systems</strong>. It allows top, bottom and side labelling on high-capacity conveyor lines, without the need of compressed air. The all-electric design allows up to 80% saving on running costs compared to traditional pneumatic print & apply systems.<br> <br> The label, of up to 170x230mm, can be printed with a standard print engine module and is transported to the product through a set of timing belts that ensure accuracy and capacity: the application phase is independent from printing, so FlexiMate eBelt can label more than 120 products per minute (label size depending).<br> <br> It features a modular design with several configurations available, including a 350mm motorized unwinder which contributes to guarantee a longer lifespan of print heads and relaxed service intervals",
        scheme: "Top side, Bottom side,Lateral side", 
        features: [
          "Full-electric wipe on application",
          "No compressed air is required",
          "Fixed labelling distance",
          "Real-time labelling printing and applying",
          " Ideal solution to label print and apply at high speed in real-time"

        ],
        videoUrl: "https://www.youtube.com/embed/iHwHQkxIZ60?si=A5GduuEhw0tA2z56",
        image: fliximatebelt
      },
      {
        id: "eblade",
        name: "FlexiMate eBlade",
        description: "The <strong>eBlade wipe-on is a high performances label dispenser</strong> where the printing phase is separated by the application, and the system has a buffer of labels which is automatically loaded when request. Following IMA Labeling exclusive technology, the pulling group consists of an easy to load liner path that ensures accuracy and maximum performance: dispensing labels at a speed up to 50 m/min (on 100x100 mm labels) can be achieved, even at variable speed, with unbelievable precision",
        scheme: "Lateral side, Bottom side,Top side", 
       features: [
  "<strong>Full-electric wipe</strong> on application, no compressed air required",
  "<strong>Fixed labelling distance</strong>",
  "<strong>Loose loop printing and applying</strong> (no real-time printing and applying)",
  "Ideal solution to label print and apply at <strong>high speed</strong> if real-time printing is not required"
],
        videoUrl: "https://www.youtube.com/embed/V8lJVnXdWhA?si=Bl0QOP-Dm5RTg5UV",
        image: fliximateblade
      },
      {
        id: "elinear",
        name: "FlexiMate eLinear",
        description: "The eLinear is the electric applicator that rewrites the rules of label print & apply systems. Faster than pneumatic systems, its technology allows a complete and highly precise control of the applicator stroke with regards to speed, accelerations and positioning. It is the most accurate solution for products of variable heights, moving on a conveyor: thanks to its optional automatic height measurement sensor, the stroke will adapt dynamically to the product height.",
        scheme: "Top side,Bottom side,Lateral side", 
        features: [
         "<strong>Programmable linear applicator</strong> with electric motion",
         "<strong>Smart variable distance</strong> positioning of the actuator",
         "<strong>Tamp-Blow technology</strong> for maximum labeling flexibility",
         "<strong>Wide range of stroke lengths</strong> and label pad sizes",
        ],
        videoUrl:"https://www.youtube.com/embed/ojEJkuDPAS0?si=lV6_xeyGT1OcfdTT"  ,
        image: fliximateelinear
      },
      {
        id: "eswing",
        name: "FlexiMate eSwing",
        description: "Swing arms are mainly used for label application, on the front of moving products on a conveyor.This applicator is a programmable swing arm that, driven by an electric motor, brings the tamp-plate to any desired angle between 0° - 180°.Electric power allows it to be faster and more accurate than pneumatic in angling the arm/pad assembly.<br> <br> Differently from pneumatic applicators, arm’s acceleration and deceleration are settable allowing a safer and fully controlled movement and avoiding the adoption of dampeners.Depending to the production environment, it can also label print and apply in real time two labels on the same products.",
        scheme: "Lateral side,Front & Top Side,Front & Lateral Side", 
        features: [
         "Swing arm applicator with electric motion",
         "Swing angle programmable from 0° to 180°",
         "Tamp-Blow technology for maximum labeling flexibility",
         "Possibility to label print and apply in real time two labels on two adjacent sides of the same product",
        ],
        videoUrl:"https://www.youtube.com/embed/Z49pSRBs85Q?si=HzUketHi2dTOI0It" ,
        image: fliximateeswing
      },
      {
        id: "ecorner",
        name: "FlexiMate eCorner",
        description: "A real time print & apply system for corner-wrap applications, typically used for secondary packaging and perfect for pharmaceutical aggregation processes.It consists of two electric applicators, moving in synchronous thanks to the powerful electronic.<br> <br> This machine can apply on the corner of a product, over the top and the front side, or over the front and the lateral side, without the need of any mechanical adjustment. Unlike pneumatic applicators, the application cycle can be suspended instantly and then resumed as soon as possible, avoiding the loss of the label and its reprinting",
        scheme: "Corner Front & Top side,Corner Front & Lateral side", 
        features: [
          "Independent linear applicators with electric motion",
          "Programmable labeling cycles for different application combinations (Front or Back Corner Wrap, Single Side application)",
          "Tamp-Blow technology for the maximum labeling flexibility",
          "Wide range of stroke lengths and label pad sizes"
        ],
        videoUrl:"https://www.youtube.com/embed/v-AJ-M0oa0o?si=uS_b3BSYWQ3GXpXE" ,
        image: fliximateecorner
      }
    ]
  },
  {
    id: "modular",
    title: "Modular labelers",
    subtitle: "MODULAR LABELERS",
    description: "Automatic labelling systems are the most used devices when it comes to the application of informative and/or decorative self-adhesive labels.",
    image:Modularlabelers,
    logo:IMALabeling,
    machines: [
      {
        id: "modular-m1",
        name: "SpeedMate Blade",
        description: "This label applicator for self-adhesive labels is suitable for <strong>wipe-on applications</strong> onto moving products. It is a general-purpose machine, developed to cover most labelling needs within the range of standard pre-printed labels.<br> <br> Two separate <strong>stepper motors</strong> (one powers the pulling the paper, while the second one powers the rewinder) take care of the correct liner tensioning, in order to be accurate <strong>(+/-1 mm)</strong> and fast in dispensing <strong>(peak up to 70 m /min)</strong>, avoiding paper stretching and possible breaking.<br> <br> The Speedmate Blade comes in both right hand and left version, and can handle two different paper widths <strong>(120 and 180 mm)</strong>. The dispensing blade can be fixed, or spring loaded: while the <strong>fixed blade</strong> is used for application on plain products, the <strong>spring loaded</strong> one is used when the applicator and the adaptor have to follow-up the product shape.",
        scheme: "Top side,Bottom side,Lateral side",
        features: ["Full-electric wipe on application, no compressed air required",
          "Fixed labelling distance",
          "Ideal solution to label print and apply at high speed if real-time printing is not required",
        ],
        videoUrl: "https://www.youtube.com/embed/SaxttK-Q9so?si=A3tKwUYeVHPJkjR7",
        image: speedmateblade
      },
      {
        id: "modular-m2",
        name: "SpeedMate Pro",
        description: "Designed by <strong>IMA Labeling Innovation Center</strong>, the SpeedMate PRO is ready to conquer the market because of its reliability, precision, versatility, flexibility, ease of use, safety in operation, and pride of place the extreme velocity.<br> <br> A product that perfectly fits the labeling requirements of turn-key horizontal and vertical solutions of <strong>flexible packaging</strong> in addition to the desire of speed and precision typically connected to the <strong>secondary packaging systems</strong>.<br> <br> From the outset, it integrates seamlessly with <strong>Thermal Transfer Overprinter (TTO)</strong> printers and laser marking systems, ensuring it meets the demands of in-line coding requirements. Moreover, with the capability to incorporate <strong>remote control and maintenance</strong> functionalities directly into the line’s control panels, SpeedMate PRO emerges as a reliable and all-encompassing solution for the labeling needs.",
        scheme: "Top side,Bottom side,Lateral side",
        features: ["<strong>Compact,modular and ergonomic design</strong>",
                 "High speed up to <strong>100 m/min</strong>",
                 "<strong>TÜV Rheinland certification</strong> with an IP54 protection rating",
                 " Fully <strong>programmable</strong>",
                 "<strong>Ethernet and USB ports</strong> for diagnostics, remote control, firmware upgrade and configuration operations",
                 "Label reel holder for reels <strong>up to 350mm (400mm as option)</strong>",
                 "<strong>Non-stop</strong> (tandem mode) embedded logic",
                 "<strong>Self-aligning and label positioning</strong> at the switch on "
        ],
        videoUrl: "https://www.youtube.com/embed/P1Cmdq3nAbg?si=ROo0rzloWpT5hqSm" ,
        image: speedmatepro
      }
    ]
  },
  {
    id: "pallet",
    title: "Pallet labelling",
    subtitle: "PALLET LABELLING SOLUTIONS",
    description: "Pallet is an automatic label print and apply system, suitable for A6 pallet label stickers application on multiple sides of a pallet.",
    image: palletelabelling,
    logo:IMALabeling,
    machines: [
      {
        id: "pallet-p3",
        name: "Pallet³ Labelling",
        description: "<strong>Pallet3</strong> is an automatic label print and apply system, suitable for <strong>A5 pallet label stickers</strong> application on multiple sides of a pallet and compliant with the international logistic identification standards <strong>(GS1)</strong>. <br> This pallet labeling machine features both the system and axis being <strong>fully electric and programmable</strong>. Pallet3 is built to label print and apply from <strong>one to three labels</strong>, in the exact position desired. Safe and ergonomic for the operator, the system is enclosed in a <strong>robust aluminum cabinet</strong> to be protected from dust and dirty environments.<br> The footprint of the Pallet series is small, allowing it to be positioned easily and sidewise in the pallet roller conveyor areas. Its automatic electric door opens only when the pallet is in the application position.<br>The Pallet3 system exemplifies a cutting-edge pallet labeling machine, perfect for accurate and efficient pallet labeling processes, ensuring precise application of pallet label stickers on multiple sides.",
        scheme: "",
        features: ["<strong>Programmable multi-axis linear applicator</strong> with electric motion",
          "<strong>Smart variable distance positioning</strong> of the actuator",
          "Tamp-Blow technology for <strong>maximum labeling flexibility</strong>",
          "<strong>Rotary tamp for portrait/landscape pallet labels orientation</strong>"
        ],
        videoUrl: "https://www.youtube.com/embed/XN7C-LeujVg?si=-LFMz_Nuqbc1bRBO",
        image: palletelabelling
      }
    ]
  },
  {
    id: "slam",
    title: "SLAM labelling solutions",
    subtitle: "SLAM LABELING SOLUTIONS",
    description: "Scan Label Apply Manifest (SLAM) applications designed to handle high-frequency shipping label applications.",
    image: SLAM,
    logo:IMALabeling,
    machines: [
      {
        id: "slam-s1",
        name: "Volt 770 SLAM",
        description: "In the ever-evolving world of intralogistics and e-commerce, efficiency and accuracy are paramount. To address the specific needs of <strong>Scan Label Apply Manifest (SLAM) applications</strong>, IMA Labeling has developed an innovative Print & Apply system: the <strong>Volt770</strong>.<br> <br> This fully electric print applicator is designed to handle high-frequency shipping label applications. With its <strong>long stroke carbonfiber applicator</strong> and light weight construction, the Volt770 is perfectly suited for high-frequency label application cycles on boxes and parcels of varying heights.Additionally, the motorized unwinder allows for the use of large diameter label rolls while enhancing printer performance and reducing wear and tear.<br> <br> The Volt770 full-electric applicator has a long stroke of the carbon fiber rod <strong>(770 mm)</strong> for this reason is light, safe and high-performing.Typically requested for integration in the <strong>SLAM processes</strong> (Scan Label Apply Manifest), where the use of compressed air is eliminated, Volt770 is a ballistic all-electric applicator.<br> <br> This wipe-on applicator is adaptable to different heights and thanks to the electric stepper motors is <strong>extremely safe</strong>: no need for protective barriers. The Volt770 represents a cutting-edge SLAM solution and SLAM machine designed to meet the rigorous demands of Scan Label Apply Manifest processes.",
        scheme: "Front side,Top side",
        features: ["<strong>Programmable linear applicator</strong> with electric motion",
        "<strong>Smart variable distance positioning</strong> of the actuator",
        "<strong>Full-electric wipe</strong> on application, no compressed air required",
        "<strong>Carbon-fiber long stroke applicator</strong> (770 mm of usable stroke)",
        "Ideal solution for applying shipping labels on<strong> fast-moving parcels</strong> with variable height (SLAM applications in E-commerce and 3PL) "
        ],
        videoUrl: "https://www.youtube.com/embed/vrnKvaT86LQ?si=o2IKBdGGf8udpqGZ" ,
        image: SLAMlabelling
      }
    ]
  }
];


// 2.THERMAL INKJET RANGE DATA
export const thermalInkjetData: ProductCategory[] = [
  {
    id: "tij-2.5",
    title: "Thermal Inkjet 2.5",
    subtitle: "THERMAL INKJET 2.5 SOLUTIONS",
    description: "High-resolution industrial thermal inkjet printers utilizing 2.5 technology for precise and clean marking.",
    image: M5andM9, 
    logo: FamHplogo, 
    machines: [
{
  id: "famjet-m5",
  name: "Famjet M5",
  description: "<strong>Famjet M5</strong> is a high-performance, advanced technology thermal inkjet printer equipped with HP TIJ technology. It offers an affordable price point and an easy-to-use interface for most industrial applications, featuring a compact design reduced in volume to perfectly suit any production line workflow.",
  scheme: "Top side, Left & right lateral side,", 
  features: [
    "Screen Touch 5\" Controller supporting 1 or 2 HP pen stalls",
    "Powerful printing of texts, counters, autodata, logos, and 1D & 2D barcodes (static or dynamic)",
    "Serialization and Track & Trace management through TCP/IP network protocol",
    "A-Level high legibility of Datamatrix & QR codes",
    "Maintenance-free operations with inks for porous, semi-porous, and non-porous substrates",
    "Flexible setup generated directly by the controller or PC software with easy external network interface"
  ],
  videoUrl: "https://www.youtube.com/embed/H9VcMeB-sfQ?si=9ypiqLujssw76qJ4",
  image: TIJM5,

  brochureUrl: "https://drive.google.com/uc?export=download&id=1KaecXPXoZWvQa9I9LUY6NW_gA8jlL4L6"
  
},

  {
  id: "famjet-m9",
  name: "Famjet M9",
  description: "<strong>Famjet M9</strong> is the best high-resolution printer designed for <strong>multi-head applications</strong> and complex coding requirements. Equipped with HP TIJ technology, it supports printing on both porous and non-porous substrates like cardboards, plastics, metal, and aluminum, offering a <strong>compact design</strong> that requires <strong>no maintenance</strong> or spare parts.",
  scheme: "left & right lateral side,Top side",
  features: [
    "<strong>9\" touch screen display</strong> with integrated software for simple and intuitive direct data entry.",
    "<strong>Printing height up to 50.8 mm</strong> (up to 50mm with quadruple printhead) in a single image or with different messages.",
    "<strong>Advanced communication protocol</strong> ideal for remote operations and high-speed serialization of 2D codes.",
    "<strong>New I/O port</strong> to connect an external warning levels lamp and automatic printing message selection.",
    "<strong>Multi-substrate compatibility</strong> including texts, counters, autodata, logos, barcodes, and highly readable 2D codes.",
    "<strong>Industrial efficiency</strong> providing automatic reverse printing and seamless integration in harsh environments."
  ],
  videoUrl: "https://www.youtube.com/embed/zA9VvKYSqnc?si=WvU0g1hgJE1JCcTH", 
  image: TIJM9,
   images: [
           TIJM9,
          "/src/assets/Products Models/TIJ M9V.png",
          "/src/assets/Products Models/TIJ M9V1.png"],
  brochureUrl: "https://drive.google.com/uc?export=download&id=1zMNoSOjlgnr_1UKTk_J3GgufLL38hhWu"
}
    ]
  },
  {
    id: "tij-25-bulk",
    title: "Thermal Inkjet-2.5 bulk Half-inch",
    subtitle: "BULK INK SUPPLY SOLUTIONS",
    description: "Ideal for high-volume production lines requiring continuous printing with lower running costs.",
    image: TIJPleyon,
    logo: FamHplogo, // Fam Logo
    machines: [
 {
  id: "pleyon",
  name: "Pleyon",
  description: "<strong>Famjet Pleyon</strong> introduces the future of TIJ printing with its advanced <strong>HP Bulk technology</strong>. It offers a field-proven, highly reliable ink regulation solution that reduces overall printing costs while providing maximum versatility for complex production lines.",
  scheme: "left & right lateral side,Top side",
  features: [
    "<strong>9\" Touch Screen Display</strong> with integrated software for intuitive data entry of texts, counters, and logos.",
    "<strong>Advanced Bulk System</strong> utilizing an AKIT that includes 3x400ml bulks and a 35ml cartridge to print 1.2 liters seamlessly.",
    "<strong>Sturdy Steel Printheads</strong> available in single or dual pen versions, managed by a dependable ink level feedback sensor.",
    "<strong>4.0 Connectivity & I/O Port</strong> enabling remote operations, automatic message selection, and counter resets.",
    "<strong>High-Speed Serialization</strong> of perfectly readable 2D codes designed to interface flawlessly with optical vision systems.",
    "<strong>Multi-Substrate Printing</strong> using water-based, solvent-based, or UV curable inks for porous and non-porous surfaces."
  ],
  videoUrl: "https://www.youtube.com/embed/YJmvfvJofiw?si=B8Lhrvvw28JWeRws",
  image: TIJPleyon,
   images: [
           TIJPleyon,
          "/src/assets/Products Models/TIJ PleyonV.png",
          "/src/assets/Products Models/TIJ PleyonV1.png",
           "/src/assets/Products Models/TIJ PleyonV2.png"],
  brochureUrl: "https://drive.google.com/uc?export=download&id=1QliDhYbqiVI8xiSYApO53GjAs8tMvT0B"
}
    ]
  },
  {
    id: "tij-1-inch",
    title: "Thermal Inkjet 1-inch",
    subtitle: "LARGE FORMAT TIJ PRINTERS",
    description: "1-inch tall print head technology designed for larger characters, logos, and detailed barcodes.",
    image: TIJM7,
    logo: Famlogo, // Fam Logo
    machines: [
 {
  id: "famjet-m7",
  name: "Famjet M7",
  description: "The <strong>Famjet M7</strong> is the first TIJ printer in the world featuring <strong>Collins 1\" disposable cartridges</strong>. It has been specifically designed to handle high-resolution printing jobs up to <strong>2400 dpi</strong> on porous, semi-porous, and non-porous materials. By utilizing a single 1\" print engine setup, it completely eliminates complicated cartridge alignments that lead to poor print quality, making it the ideal choice for reliable industrial serialization.",
  scheme: "Top side, Left & right lateral side,",
  features: [
    "<strong>25.4mm (1\") Print Height</strong> with a single cartridge, expandable up to 100mm (4\") using a quadruple printhead.",
    "<strong>Hi-Definition Capabilities</strong> for perfect alphanumeric characters, logos, barcodes, and complex 2D codes.",
    "<strong>7\" Touch Screen Display</strong> offering an intuitive and seamless data entry interface for the operator.",
    "<strong>Robust Interface</strong> equipped with USB, Ethernet, and optional Wi-Fi connectivity."
  ],
  videoUrl: "https://www.youtube.com/embed/your_video_id_here",
  image: TIJM7,
    images: [
           TIJM7,
          "/src/assets/Products Models/TIJ M7V.png",
          ],
  brochureUrl: "https://drive.google.com/uc?export=download&id=1bJuP2pSkJ3YnWjp20FIywg6aT3gDj7Xm"
 }
    ]
  },
  {
    id: "tij-40",
    title: "Thermal Inkjet 4.0 22MM,108MM",
    subtitle: "NEXT GENERATION TIJ TECHNOLOGY",
    description: "Cutting-edge Thermal Inkjet 4.0 22mm & 108mm technology providing unmatched speed, connectivity, and performance.",
    image: KeryonandDyplon,
    logo: FamHplogo, // Fam Logo
    machines: [
  {
  id: "dyplon",
  name: "Dyplon",
  description: "The <strong>Famjet Dyplon</strong> is a latest-generation thermal inkjet printer powered by cutting-edge <strong>HP TIJ 4.0 technology</strong>. It delivers a massive <strong>22mm printing area per single head</strong> and can print from a distance of up to 9mm, making it perfect for irregular or uneven surfaces. Engineered for heavy-duty, high-speed industrial environments, it operates at speeds four times faster than previous TIJ generations, providing an exceptionally efficient and reliable coding solution.",
  scheme: "left & right lateral side,Top side",
  features: [
    "<strong>HP TIJ 4.0 Power</strong> offering up to 22mm print height with a single head, and up to 44mm with a dual head setup.",
    "<strong>Ultra-Fast Speeds</strong> reaching up to 732 meters/minute without compromising on clarity or quality.",
    "<strong>775ml Bulk Ink Tanks</strong> that can be hot-swapped/replaced without pausing your ongoing production line.",
    "<strong>HD Resolution</strong> supporting up to 1200 x 2400 dpi for pin-sharp 2D codes, barcodes, and logos.",
    "<strong>Smart Consumables</strong> where the single cartridge printhead only needs replacement after consuming 4L of ink (approx. 5 tanks)."
  ],
  videoUrl: "https://www.youtube.com/embed/G_GgKgstkuk?si=Hdl6I6IEiWNibdqQ",
  image: TIJDyplon,
    images: [
           TIJDyplon,
          "/src/assets/Products Models/TIJ DyplonV.png",
        ],
  brochureUrl: "https://drive.google.com/uc?export=download&id=1djDgpmmHMbGEqwp4do7XjKXBzThS4V40"
},
   {
  id: "keryon",
  name: "Keryon",
  description: "The <strong>Famjet Keryon</strong> combines breakthrough <strong>HP TIJ 4.0 technology</strong> with a robust, high-performance printing platform engineered for demanding, high-speed production environments. It delivers exceptional print quality, maximum uptime, and significantly lower operating costs, making it a future-proof solution for industrial coding, marking, and variable data printing. With an extended throw distance of up to 9mm, it offers unparalleled installation flexibility across diverse packaging shapes.",
  scheme: "Top side, Left & right lateral side,",
  features: [
    "<strong>Massive 108mm Print Height</strong> powered by advanced HP 4.0 technology for large-scale graphics and data.",
    "<strong>High-Speed Production</strong> reaching up to 480 m/min while maintaining sharp 1200 dpi resolution.",
    "<strong>Micro-Recirculation Technology</strong> that actively prevents ink from drying during production standstills.",
    "<strong>775 mL Bulk System</strong> supporting an impressive printhead cartridge life of approximately 15 liters.",
    "<strong>10-Inch Display Screen</strong> integrated with TCP/IP protocol support for streamlined industrial control."
  ],
  videoUrl: "https://www.youtube.com/embed/your_video_id_here",
  image: TIJKeryon,
  // images: [
  //          TIJKeryon,
  //         "/assets/windgrip-angle-2.png",
  //         "/assets/windgrip-in-action.png"],
  brochureUrl: "https://drive.google.com/uc?export=download&id=1_k-sgdK92GObxsJrfdZhji5-Ti5Rg4QF"
}
    ]
  },
{
  id: "tij-mobile",
  title: "Thermal Inkjet Mobile Printer", 
  subtitle: "PORTABLE & WIRELESS TIJ SOLUTIONS",
  description: "Innovative portable, wireless, and ultra-lightweight thermal inkjet printing devices designed to print multiline messages on a large range of porous and non-porous surfaces without requiring a conveyor.",
  image: DKandMaximobile,
  logo: Famlogo, 
  machines: [
    {
      id: "famjet-dk-mini-mobile",
      name: "Famjet DK Mini Mobile", 
      description: "The <strong>Famjet DK Mini Mobile</strong> is an innovative, ultra-compact, and wireless portable printing device based on high-performance thermal ink jet technology. Weighing less than 1 kg, it is equipped with disposable 42ml cartridges containing water or solvent-based inks. It serves as the perfect modern replacement for traditional stencils, stamps, roll coders, and other obsolete contact printing systems, allowing users to print multi-line messages without any conveyor system.",
      scheme: "Top side, left lateral side, right lateral side", 
      features: [
        "<strong>12.7mm (0.5\") Printing Height</strong> supporting alphanumeric characters, auto-date, expiry dates, batch codes, logos, QR codes, and barcodes.",
        "<strong>Hi-Definition 750 DPI Resolution</strong> ensuring precise, sharp, and high-contrast marking on porous, semi-porous, and non-porous materials.",
        "<strong>3.5\" Intuitive Touch Screen Display</strong> offering a seamless and user-friendly standalone user interface for message editing.",
        "<strong>Dual/Quad Wheel Configuration</strong> equipped with a 2W Encoder (2 wheels) or 4W Encoder (4 wheels) for stable hand tracking on different surfaces.",
        "<strong>Massive 8GB Internal Memory</strong> (expandable to 16/32 GB optional) for storing large libraries of print messages and custom templates."
      ],
      videoUrl: "https://www.youtube.com/embed/KB35yJj1PFY", 
      image:DKMinimobile,
      brochureUrl: "https://drive.google.com/uc?export=download&id=1mB6X1pwF057p8KwB7T_BSyfKtDXADMHW"
    },
    {
  id: "famjet-maxi-mini-mobile",
  name: "Famjet Maxi-MiniMobile", 
  description: "The <strong>Famjet Maxi Mini Mobile</strong> is a powerful, wireless, and lightweight portable thermal inkjet printer designed for large format marking. Utilizing premium 25.4 mm Kao Collins® disposable cartridges, it completely eliminates complex alignment issues. Weighing less than 1 kg, this standalone system is the perfect modern alternative to traditional stencils, stamps, and obsolete contact roll coders, allowing users to print detailed messages on the move without a conveyor.",
  scheme: "Top section, left lateral side, right lateral side",
  features: [
    "<strong>25.4mm (1\") Printing Height</strong> using a single high-capacity 42ml cartridge, ideal for large characters, corporate logos, and clear shipping data.",
    "<strong>High-Resolution Industrial Marking</strong> up to 750 dpi for super-sharp alphanumeric text, precise 1D barcodes, QR codes, and complex Datamatrix.",
    "<strong>3.5\" Touch Screen Display</strong> featuring an integrated standalone software wizard to easily create and edit templates right on the spot.",
    "<strong>Robust Storage Capacity</strong> with 8 GB of internal memory (expandable up to 16/32 GB) to store massive message libraries.",
    "<strong>Flexible Encoder Options</strong> available in a 2W configuration (2 wheels) or a 4W configuration (4 wheels) for stable manual tracking across diverse physical surfaces."
  ],
  videoUrl: "https://www.youtube.com/embed/KB35yJj1PFY", 
  image: Maximinimobile,
   brochureUrl: "https://drive.google.com/uc?export=download&id=1w6A4Zk6026CFxzGBP70XKhMQ8Blqj8JN"
}
  ]
}
];


//3. DOD RANGE

// 1. DOD PRINTING DATA WITH INTEGRATED MACHINE DETAILS FOR DIRECT REDIRECTION
  export const dodPrintingData: ProductCategory[] = [
    {
      id: "makro-mobile",
      title: "Famjet Makro 116 Mobile",
      subtitle: "PORTABLE INDUSTRIAL HANDHELD",
      description: "The <strong>Famjet Makro 116 Mobile</strong> is a robust, handheld <strong>Drop on Demand (DOD)</strong> solution built explicitly for heavy-duty portable industrial marking. Engineered for ultimate adaptability, this device functions as an all-in-one powerhouse that prints precisely and clearly on incredibly tough surfaces including <strong>concrete, metal, glass, textiles, plastic, cardboard, or wood</strong>. It puts precise, reliable printing right into your hands, eliminating the constraints of static conveyor installations.",
      image: MakroMobile, 
      logo: Famlogo,
      scheme: "Handheld Portable Configuration",
      features: [
        "<strong>16-Dot Printing Printhead</strong> capable of firing large characters with a maximum height layout up to 60mm.",
        "<strong>Advanced Guide Wheels</strong> that seamlessly track and adapt to the operator's hand speed to maintain crystal clear print orientation.",
        "<strong>3.5\" Touch Screen Display</strong> enabling seamless on-the-fly text editing and message modifications directly on the floor.",
        "<strong>Flexible Substrate Marking</strong> ensuring premium clarity on challenging materials like porous wood, uneven stone, or smooth metallic pipes.",
        "<strong>Versatile Ink Compatibility</strong> allowing easy swaps between Water, Ethanol, or MEK-based industrial grade inks."
      ],
      videoUrl: "https://www.youtube.com/embed/KB35yJj1PFY?si=156H5HT8RUzEbB53",
      brochureUrl: "https://drive.google.com/uc?export=download&id=18L7jzL_212_3PmusILmXyXAZmlyXDC2R",
      machines: [] 
    },
    {
      id: "makro-plus",
      title: "Famjet Makro Plus",
      subtitle: "INDUSTRIAL INK-JET PRINTING SYSTEM",
      description: "The <strong>Famjet Makro Plus</strong> is an advanced industrial ink-jet printing system utilizing high-performance <strong>electromagnetic drop-on-demand (DOD) technology</strong>. Purpose-built to thrive in the most punishing industrial environments, it features a <strong>solvent-proof glass touch screen panel</strong> and an IP53 protection rating to withstand heavy dust, humidity, vibrations, and extreme temperature fluctuations. It is the ultimate heavy-duty setup for continuous marking on pipes, bags, extruded packaging, and fabrics.",
      image: MakroPlus,   
      logo: Famlogo,
      scheme: "Top side,Bottom side,Lateral side", 
      features: [
        "<strong>Scalable Printing Height</strong> supporting multi-dot head arrays including 7 dots (24mm), 16 dots (60mm), and up to 32 dots (128mm) sizes.",
        "<strong>Rugged IP53 Protection</strong> specifically hardened against dust ingress, environmental moisture, and aggressive industrial compounds.",
        "<strong>Smart Connectivity Integration</strong> packed with built-in LAN, RS232 ports, and specialized scanner customized communication protocols.",
        "<strong>Advanced IO Controller Interface</strong> enabling on-the-fly print actions, database queries over LAN, and external message selection (8 inputs / 5 outputs).",
        "<strong>High-Speed Coding Output</strong> engineered to operate flawlessly at continuous production line tracks up to 60 meters per minute."
      ],
      videoUrl: "https://www.youtube.com/embed/dMyN6cOfWaI?si=36TEUpSw33g7jbO4", 
      brochureUrl: "https://drive.google.com/uc?export=download&id=1g9UgjE_se1Dxc2Qd5DSIrBM4UamX13s4",
      machines: []   
    },
    
  ];