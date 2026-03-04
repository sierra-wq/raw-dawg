import img1 from "@/assets/product1.png"
import img2 from "@/assets/product2.png"
import img3 from "@/assets/product3.png"
import { StaticImageData } from "next/image";




export const items : {
    img: StaticImageData;
    discription: string;
    detail : string;
    price: string;
    content: string[];
    id : string;
    analysis_results: {
      [key: string]: string;
    };
    canceledPrice: string;
    name : string;
    tags : string[];
}[]  = [
    {
      img: img1,
      //id: 'instinct-blend-5-pack-1-lb-each',
      id: 'grass-fed-beef-instinct-blend',
      discription : 'A dense, whole-prey blend of muscle meat, organs, bone, trachea, and raw green tripe to support power, endurance, and real digestive health',
      detail : "A whole-prey beef recipe built for strength, stamina, and durability. Lean beef and heart support muscle and sustained energy, while liver, kidney, and spleen deliver essential nutrients for immune and metabolic health. Ground bone, green tripe, and trachea provide natural minerals, digestive support, and joint resilience.",
      price : '50$',
      content : ['Beef (ground beef, beef heart, beef liver, beef kidney, beef spleen)', 'ground beef bone', 'green tripe', 'beef trachea'],
       analysis_results: {
        'Calories (min)': ' 109 kcal per 100g',
        'Crude Protein (min)': '17.40%',
        'Crude Fat (min)': '5.65%',
        'Crude Fiber (max)': '0.22%',
        'Moisture (max)': '74.20%',
        'Ash (max)': '2.61%',
      },
      canceledPrice : '70$',
      name : 'GRASS-FED BEEF',
      tags : ["Built for strength", "Single-Protein" , "Strength-Building" ,"Mineral-Dense"]
    },
    
    {
      img: img2,
      //id: 'ancestral-blend-5-pack-1-lb-each',
      id: 'free-range-turkey-ancestral-blend',

      discription : 'A clean, lower-fat turkey blend made with muscle meat, heart, gizzard and liver for steady energy and easy digestion.',
      detail : "A clean, single-protein turkey recipe for sensitive dogs and simplified feeding. Lean turkey provides highly digestible protein, while heart, liver, and gizzard supply essential nutrients for energy, immunity, and digestion. Turkey necks deliver natural calcium and phosphorus for strong bones and teeth.",
      price : '50$',
      content : ['Whole turkey', 'turkey heart', 'turkey neck', 'turkey gizzard', 'turkey liver'],
      analysis_results: {
        'Calories (min)': ' 109 kcal per 100g',
        'Crude Protein (min)': '17.40%',
        'Crude Fat (min)': '5.65%',
        'Crude Fiber (max)': '0.22%',
        'Moisture (max)': '74.20%',
        'Ash (max)': '2.61%',
      },
      canceledPrice : '70$',
      name : ' Free-Range Turkey ​',
      tags : ["Lean & Clean ","Single-Protein" , "Lean",  "Sensitive-Dog Friendly"]
    },

    {
      img: img3,
      //id: 'wild-blend-5-pack-1-lb-each',
      id: 'turkey-salmon-wild-blend',
      discription : 'Free-range turkey and wild salmon deliver clean protien, essential organs, and natural omegas for full-body support.',
       detail : "A dual-protein recipe designed to support skin, joints, and balanced energy. Lean turkey fuels muscle and daily vitality, while wild-caught salmon delivers omega-3s for inflammation control and coat health. Bone, organs, and cartilage supply natural minerals and connective tissue support.",
      price : '50$',
      content : ['Wild salmon (with skin)', 'whole turkey', 'turkey heart', 'turkey gizzard', 'ground turkey neck', 'turkey liver', 'salmon head'],
      analysis_results: {
        'Calories (min)': ' 123 kcal per 100g',
        'Crude Protein (min)': '17.00%',
        'Crude Fat (min)': '6.68%',
        'Crude Fiber (max)': '0.20%',
        'Moisture (max)': '73.90%',
        'Ash (max)': '2.33%',
      },
      canceledPrice : '70$',
      name : ' TURKEY & SALMON ​',
      tags : ["Complete balance", "Dual-Protein" , "Omega-Rich" , "Anti-Inflammatory"]
    },
    {
      img: img1,
      id: 'best-seller-variety-pack',
      discription : 'A dense, whole-prey blend of muscle meat, organs, bone, trachea, and raw green tripe to support power, endurance, and real digestive health',
      detail : "Give your dog the benefits of dietary variety with our three ancestral recipes in one convenient pack. Rotating proteins supports digestive resilience, reduces sensitivity risks, and provides a broader spectrum of nutrients than feeding a single protein. This pack includes our nutrient-dense Beef with whole prey nutrition, our gentle single-protein Turkey for sensitive systems, and our omega-rich Turkey & Salmon for joint and cognitive support. Perfect for dogs at any life stage who thrive on ancestral, species-appropriate nutrition.",
      price : '50$',
      content : ['Beef (ground beef, beef heart, beef liver, beef kidney, beef spleen)', 'ground beef bone', 'green tripe', 'beef trachea' ,'Whole turkey', 'turkey heart', 'turkey neck', 'turkey gizzard', 'turkey liver' , 'Wild salmon (with skin)', 'whole turkey', 'turkey heart', 'turkey gizzard', 'ground turkey neck', 'turkey liver', 'salmon head'],
       analysis_results: {
        'Calories (min)': ' 109 kcal per 100g',
        'Crude Protein (min)': '17.40%',
        'Crude Fat (min)': '5.65%',
        'Crude Fiber (max)': '0.22%',
        'Moisture (max)': '74.20%',
        'Ash (max)': '2.61%',
      },
      canceledPrice : '70$',
      name : 'GRASS-FED BEEF' ,
      tags : ["Built for strength", "Single-Protein" , "Strength-Building" ,"Mineral-Dense"]
    },
  ];