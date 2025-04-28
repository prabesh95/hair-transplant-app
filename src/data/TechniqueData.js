// techniquesData.js
import fue_technique from "../assets/technique/fue-technique.jpg";
import direct_hair_transplant from "../assets/extras/direct_hair_transplant.jpg";
import robotic_fue from "../assets/technique/robotic-fue.jpg";
import sapphire_fue from "../assets/technique/sapphire-fue.jpg"


export const hairTransplantTechniques = [
  {
    id: 1,
    name: "Follicular Unit Extraction (FUE)",
    description: "Individual follicles are extracted and implanted with minimal scarring.",
    pros: ["No linear scar", "Faster recovery", "Suitable for short haircuts"],
    
    image: fue_technique, // Replace with actual path
    color: "muted-teal",
  },
  {
    id: 2,
    name: "Direct Hair Implantation (DHI)",
    description: "Uses a Choi pen for simultaneous extraction and implantation.",
    pros: ["Ultra-precise angles", "Natural-looking density", "Minimal trauma"],
    
    image: direct_hair_transplant, // Replace with actual path
    color: "dusty-rose",
  },
  {
    id: 3,
    name: "Robotic FUE (ARTAS®)",
    description: "AI-assisted extraction for precision and consistency.",
    pros: ["Reduces human error", "High graft survival", "Minimal scarring"],
    
    image: robotic_fue, // Replace with actual path
    color: "olive-gold",
  },
  {
    id: 4,
    name: "Sapphire FUE",
    description: "Uses sapphire blades for finer incisions and faster healing.",
    pros: ["Less bleeding", "Sharper hairlines", "Quick recovery"],
    
    image: sapphire_fue, // Replace with actual path
    color: "forest-green",
  },
];