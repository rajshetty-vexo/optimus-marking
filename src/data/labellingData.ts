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

export interface ProductMachine {
  id: string;
  name: string;
  description: string; // RESET TO ORIGINAL STRING
  scheme: string; 
  features: string[]; // RESET TO ORIGINAL STRING ARRAY
  videoUrl?: string; 
  image: string; 
}

export interface LabellingCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  machines: ProductMachine[];
}

export const labellingData: LabellingCategory[] = [
  {
    id: "print-apply",
    title: "Label Print & Apply",
    subtitle: "LABEL PRINT AND APPLY APPLICATORS",
    description: "A label Print & Apply is a system that is able to print any coding and traceability data on a self-adhesive label and then apply it directly to a product or package.",
    image: "src/assets/Products Models/Print and Apply.jpg", 
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
        image: fliximatewindgrip
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
    image: "src/assets/Products Models/Modular labelers.jpg",
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
    image: "src/assets/Products Models/Pallete Labelling.jpg",
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
    image: "src/assets/Products Models/SLAM.jpg",
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