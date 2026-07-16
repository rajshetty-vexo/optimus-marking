import ConsumableMakro from "/src/assets/Consumables/Consumable Makro.jpg"
import TIJCartridges from "/src/assets/Consumables/TIJ Cartridges.jpg"
import LaserPrinter from "/src/assets/Consumables/Laser Printer.png"
import LabelsRibbons from "/src/assets/Consumables/Labels and Ribbons.png"
import TIJ42ML from "/src/assets/Consumables/TIJ 42ML.png"
import TIJ400ML from "/src/assets/Consumables/TIJ 400ML.jpg"
import TIJ60ML from "/src/assets/Consumables/TIJ 60ML.jpg"
import TIJ775ML from "/src/assets/Consumables/TIJ 775ML.png"
export interface ProductVariant {
  title: string;
  image: string; 
  description?: string;
  colors?: string;
  chemicalBase?: string;
  colorant?: string;
  application?: string;
  suitableWith?: string;
  section?:string;
  subSection?:string;
}

export interface ConsumableItem {
  id: string;
  title: string;
  image: string; // Portfolio overview card image
  slug: string;
  section?:string;
  subSection?:string;
  topDescription?: string; 
  variants: ProductVariant[]; 
}

export const consumablesData: ConsumableItem[] = [
  { 
    id: "tij-cartridges", 
    title: "TIJ Cartridges", 
    image: TIJCartridges, 
    slug: "tij-cartridges",
    variants: [
      {
        title: "Thermal Inkjet 2.5 Cartridges 42mL",
        image: TIJCartridges,
        description: "Standard performance cartridge engineered for localized industrial production batch printing.",
        colors: "Black (Mostly Used), Blue, and other colors on specific requirement",
        chemicalBase: "Water Base and Solvent Base",
        colorant: "Dye Base and Pigment Base",
        application: "Track and Trace QR/Datamatrix Codes, GS1 Datamatrix, 1D Barcodes, Primary Batch details, Shipper Carton Printing, Variable Data Printing, Blister Foil Printing",
        suitableWith: "Famjet M5 (12.7mm x 2 Heads), M9 (12.7mm x 4 Heads) and Pleyon (12.7mm x 2 Heads)"
      },
      {
        title: "Thermal Inkjet 2.5 Bulk Cartridges 400mL",
        image: TIJ400ML,
        description: "High-volume supply container designed to maximize uptime on continuous production lines.",
        colors: "Black (Mostly Used), Blue, and other colors on specific requirement",
        chemicalBase: "Water Base and Solvent Base",
        colorant: "Dye Base and Pigment Base",
        application: "Track and Trace QR/Datamatrix Codes, GS1 Datamatrix, 1D Barcodes, Primary Batch details, Shipper Carton Printing, Variable Data Printing, Blister Foil Printing",
        suitableWith: "Famjet Pleyon (12.7mm x 2 Heads)"
      },
      {
        title: "Thermal Inkjet 25mm Cartridges 60mL",
        image: TIJ60ML,
        description: "Wide-format cartridge system specialized for handling large footprint character tracking labels.",
        colors: "Black (Mostly Used), Blue, and other colors on specific requirement",
        chemicalBase: "Water Base and Solvent Base",
        colorant: "Dye Base and Pigment Base",
        application: "Track and Trace QR/Datamatrix Codes, GS1 Datamatrix, 1D Barcodes, Primary Batch details, Shipper Carton Printing, Variable Data Printing, Blister Foil Printing",
        suitableWith: "Famjet M7 (25.4mm X 4 Heads)"
      },
      {
        title: "Thermal Inkjet 4.0 Cartridges 775mL",
        image: TIJ775ML,
        description: "Next-gen bulk architecture optimized specifically for structural high-definition print passes.",
        colors: "Black; other colors are available on specific requirement",
        chemicalBase: "Water Base",
        colorant: "Dye Base and Pigment Base",
        application: "Track and Trace QR/Datamatrix Codes, GS1 Datamatrix, 1D Barcodes, Primary Batch details, Shipper Carton Printing, Variable Data Printing on Porous and Semi-Porous Substrate",
        suitableWith: "Dyplon (22mm x 2 Heads) and Keryon (108mm x 2 Heads)"
      }
    ]
  },
  { 
    id: "laser printer consumables", 
    title: "Laser Printer Consumables", 
    image: LaserPrinter, 
    slug: "laser-source",
    variants: [
      {
        title: "Laser Source Modules & Filters",
        image: "/assets/laser-source-detail.png",
        description: "Industrial atmospheric protection sets and high-performance beam tubes.",
        colors: "N/A (Non-Ink Laser Technology)",
        chemicalBase: "CO2 Gas & Fiber Wavefront structures",
        colorant: "Thermal Surface Etching",
        application: "Permanent marks on glass, PET, cardboard, and industrial metals.",
        suitableWith: "Optimus Laser Marking Series"
      }
    ]
  },
  { 
    id: "dod-inks", 
    title: "DOD Inks", 
    image: ConsumableMakro, 
    slug: "dod-inks",
    variants: [
      {
        title: "Famjet Makro Fluids",
        image: ConsumableMakro,
        description: "Optimus offers a complete range of inks, top-up fluids, and cleaning solvents compatible with Famjet Makro® DOD printers,Each batch is manufactured in compliance with strict technical specifications, ensuring continuous quality control and full traceability across the entire production chain.",
        colors: "Black,Blue,Red,Green,White (White is only available in MEK base)",
        chemicalBase: "Oil Solvent & Water Base",
      
        suitableWith: "Famjet Makro 116 Mobile & Makro Plus standard modules"
      }
    ]
  },
  { 
    id: "labels-ribbons", 
    title: "Labels and Ribbons", 
    image: LabelsRibbons, 
    slug: "labels-ribbons",

    topDescription: "Labels available in varied sizes for Label Print and Apply printers sizes varying from 4 inch to 6 inch. Premium Ribbons for Flat Edge TTR Printers (Label Print and Apply Printer) as well as Near Edge TTO Printers have been developed to suit all the applications.",
    variants: [
      {
        title: "Premium Shipping & Barcode Labels",
        image: "/assets/label-range-1.png",
        description: "High-grade semi-gloss and direct thermal labels with advanced adhesive matrix.",
        colors: "White, Custom Pre-printed borders",
        chemicalBase: "Paper & Synthetic (PP/PE)",
        application: "Pallet tracking, outer box shipment labeling, product identification.",
        suitableWith: "IMA Label Print & Apply stations",
        section: "Label Range", 
        subSection: ""
      },
      {
        title: " Flat Edge TTR Ribbon",
        image: "/assets/ribbon-ttr.png",
        description: "Excellent print quality for flat-head industrial printers with smudge resistance.",
        colors: "Black",
        chemicalBase: "Wax-Resin Compound",
        application: "Standard box barcode printing, high-speed automated packaging lines.",
        suitableWith: "Flat Edge TTR Printers (Label Print and Apply)",
        section: "Ribbon Range ", // ✅ Sub-category heading
        subSection: "TTR Ribbons"
      },
      {
        title: "Near-Edge TTO Ribbon",
        image: "/assets/ribbon-tto.png",
        description: "Specialized high-performance thermal ribbon for near-edge flexible packaging systems.",
        colors: "Black, White, Metallic Silver",
        chemicalBase: "Pure Resin / High-End Wax-Resin",
        application: "Expiry date, batch codes on flexible pouches, continuous flow wrappers.",
        suitableWith: "Near Edge TTO Printers",
        section: "", // ✅ Sub-category heading
        subSection: "TTO Ribbons"
      }
    ]
  }
];


