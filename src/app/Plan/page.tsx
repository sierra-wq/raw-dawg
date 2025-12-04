'use client'
import { Button } from "@/components/ui/button"
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
import { Dot, Loader, PlayCircle, Repeat, Reply } from "lucide-react"
import { it } from "node:test"
import { useEffect, useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"

export default function Login() {
  
    const items =[
        {
            title: 'Item 1',
            content: 'Content 1',
        },
        {
            title: 'Item 2',
            content: 'Content 2',
        },
        {
            title: 'Item 3',
            content: 'Content 3',
        },
         {
            title: 'Item 3',
            content: 'Content 3',
        }
    ]
    const quizSteps = [
  {
    id: "age",
    question: "How old is your dog?",
    options: [
      { value: "puppy", label: "Puppy (under 1 year)" },
      { value: "adult", label: "Adult (1–7 years)" },
      { value: "senior", label: "Senior (8+ years)" },
    ],
    myth: "Senior dogs don’t need softer, carb-heavy food. They need primal nutrition—just optimized in portion size.",
  },
  {
    id: "bodyCondition",
    question: "What’s their current body condition?",
    options: [
      { value: "underweight", label: "Skinny Legend (needs more meat on the bones)" },
      { value: "healthy", label: "Balanced Babe (just right)" },
      { value: "overweight", label: "Chunky Monkey (carrying a little extra fluff)" },
    ],
    myth: "Over 56% of dogs are overweight from starch-loaded kibble. Raw diets support natural weight balance by fueling muscle, not fat.",
  },
  {
    id: "activity",
    question: "How active is your dog?",
    options: [
      { value: "low", label: "Couch Potato" },
      { value: "medium", label: "Weekend Warrior" },
      { value: "high", label: "Athlete / Working Dog" },
    ],
    myth: "Humans burn carbs. Dogs don’t. They thrive on protein and fat—exactly what Raw Dawg delivers.",
  },
  {
    id: "sensitivities",
    question: "Any sensitivities or quirks?",
    options: [
      { value: "turkey", label: "Turkey sensitivity" },
      { value: "beef", label: "Beef sensitivity" },
      { value: "fish", label: "Fish sensitivity" },
      { value: "none", label: "None" },
    ],
    myth: "Many food allergies are reactions to processed fillers—not meat. Raw proteins digest cleaner and easier.",
  },
  {
    id: "goals",
    question: "What are your feeding goals?",
    options: [
      { value: "digestion", label: "Better Digestion" },
      { value: "coat", label: "Shinier Coat" },
      { value: "joints", label: "Joint Support" },
      { value: "energy", label: "More Energy" },
      { value: "longevity", label: "Longevity & overall health" },
    ],
    myth: "Raw Dawg delivers essential fatty acids and joint support naturally from whole prey sources—no synthetic oils needed.",
  },
    ];
    function calculateRecommendation(answers: {
    age: string;
    bodyCondition: string;
    activity: string;
    sensitivities: string;
    goals: string;
}) {
  const scores = {
    beef: 0,
    turkey: 0,
    turkeySalmon: 0,
  };

  // ---- AGE ----
  switch (answers.age) {
    case "puppy":
      scores.beef += 2;
      scores.turkeySalmon += 2;
      break;
    case "adult":
      scores.beef += 1;
      scores.turkey += 1;
      scores.turkeySalmon += 1;
      break;
    case "senior":
      scores.turkey += 2;
      scores.turkeySalmon += 2;
      break;
  }

  // ---- BODY CONDITION ----
  switch (answers.bodyCondition) {
    case "underweight":
      scores.beef += 3;
      break;
    case "healthy":
      scores.beef += 1;
      scores.turkey += 1;
      scores.turkeySalmon += 1;
      break;
    case "overweight":
      scores.turkey += 3;
      break;
  }

  // ---- ACTIVITY LEVEL ----
  switch (answers.activity) {
    case "low":
      scores.turkey += 2;
      break;
    case "medium":
      scores.turkeySalmon += 2;
      break;
    case "high":
      scores.beef += 2;
      break;
  }

  // ---- SENSITIVITIES ----
  switch (answers.sensitivities) {
    case "turkey":
      scores.beef += 2;
      scores.turkeySalmon += 1; // lighter fish support
      scores.turkey = -999; // disqualify
      break;
    case "beef":
      scores.turkey += 2;
      scores.turkeySalmon += 2;
      scores.beef = -999; // disqualify
      break;
    case "fish":
      scores.beef += 2;
      scores.turkey += 2;
      scores.turkeySalmon = -999; // disqualify
      break;
    case "none":
      // no penalty
      break;
  }

  // ---- GOALS ----
  switch (answers.goals) {
    case "digestion":
      scores.turkey += 3;
      break;
    case "coat":
      scores.turkeySalmon += 3;
      break;
    case "joints":
      scores.turkeySalmon += 3;
      break;
    case "energy":
      scores.beef += 3;
      break;
    case "longevity":
      scores.turkey += 1;
      scores.beef += 1;
      scores.turkeySalmon += 1;
      break;
  }

  // ---- PICK WINNER ----
  const bestRecipe = Object.keys(scores).reduce((a  , b) =>
    scores[a as "beef" | "turkey" | "turkeySalmon"]  > scores[b as "beef" | "turkey" | "turkeySalmon"] ? a : b
  );

  return mapRecipe(bestRecipe as "beef" | "turkey" | "turkeySalmon", answers);
    }
    function mapRecipe(recipe: "beef" | "turkey" | "turkeySalmon", answers: {
    age: string;
    bodyCondition: string;
    activity: string;
    sensitivities: string;
    goals: string;
}) {
  const recipeMap = {
    'beef': {
      name: "Beef",
      description:
        "Rich in natural fats, perfect for active dogs, underweight pups, or energy-driven lifestyles.",
    },
    'turkey': {
      name: "Turkey",
      description:
        "Lean, clean, and gentle—great for digestion, weight management, and senior dogs.",
    },
    'turkeySalmon': {
      name: "Turkey + Salmon",
      description:
        "Best for skin, coat, joints, and longevity. Omega-rich, balanced, and highly digestible.",
    },
  };

  const pick = recipeMap[recipe];

  return {
    recipe: pick.name,
    description: pick.description,
    myth: getClosingMyth(answers),
    heroLine: `Based on your dog’s profile, we recommend starting with our ${pick.name} recipe.`,
  };
    }
    function getClosingMyth(answers: {
    age: string;
    bodyCondition: string;
    activity: string;
    sensitivities: string;
    goals: string;
}) {
        if (answers.goals === "joints")
            return "Raw cartilage naturally provides glucosamine and chondroitin — the same compounds sold as supplements.";
        if (answers.goals === "coat")
            return "Shiny coats come from natural omega-rich fats, not synthetic oils.";
        if (answers.goals === "digestion")
            return "Raw feeding supports gut balance by removing fillers and processed starches.";
        return "Your dog isn’t a wolf, but his gut never got the memo — that’s why Raw Dawg fuels instinct, not industry.";
    }

    const [page , setPage] = useState(1);
    const [find , setFind] = useState(false);
    const [canFind , setCanFind] = useState(false);

    const [answers, setAnswers] = useState({
        age: "",
        bodyCondition: "",
        activity: "",
        sensitivities: "",
        goals: "",
    });

const [step, setStep] = useState(0);
const [result, setResult] = useState<{
    recipe: string;
    description: string;
    myth: string;
    heroLine: string;
} | null>(null);

function next(value: string) {
  const field = quizSteps[step].id;

  setAnswers((prev) => ({ ...prev, [field]: value }));

  if (step === quizSteps.length - 1) {
    setCanFind(true);
  } else {
    setStep(step + 1);
  }
}

function handleFind() {
  if (canFind) {
    setFind(true);
    const recommendation = calculateRecommendation({
      ...answers,
    });
    setResult(recommendation);
  }
}



useEffect(() => {
  const timer = setTimeout(() => {
    setFind(false);
  }, 1800);

  return () => clearTimeout(timer);
}, [find]);
    


  return (
         <div className=" flex-col content-center font-acumin justify-items-center bg-primary pb-40">

                 <figure className="w-full ">
          <Wave4 className="w-full   fill-quaternary h-60" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>

                <div className={`w-full  ${ result ?  'hidden' : 'flex' } flex-col items-center justify-center gap-16 `}>
                    
                    
                   <div className="flex flex-col  w-3/5  text-quaternary">
                             <div className={`${ page !== 1 ? 'hidden' : 'flex'}  flex-col justify-center items-center  gap-10`}>
                                       {
                                            quizSteps.map((step) => (
                                                <div className="flex  gap-8 w-3/5 justify-center text-center ">
                                                        
                                                        <p className="text-xl font-bold shrink-0"> {step.question} </p>
                                                        <Select onValueChange={(value) => next(value)}>
                                                        <SelectTrigger className=" rounded-none text-quaternary text-lg border-0 border-dotted border-b-4 border-quaternary/70 hover:border-quaternary  focus:not-focus:border-0 focus:ring-0  data-[placeholder]:text-quaternary/40 ">
                                                            <SelectValue placeholder="Please Answer" />
                                                        </SelectTrigger>
                                                        <SelectContent className="bg-quaternary text-primary focus-within:ring-black"  >
                                                            {step.options.map((option) => (
                                                                <SelectItem  key={option.value} className="data-[highlighted]:bg-primary data-[highlighted]:font-bold data-[highlighted]:text-quaternary" value={option.value}>{option.label}</SelectItem>
                                                            
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            ))
                                       } 
                                       
                                       
                                 {/* <div className="flex gap-8 justify-center text-center items-end  ">
                                            <p className="text-xl font-bold shrink-0"> My Dog is Named</p>
                                            <Input className="rounded-none  text-quaternary text-lg border-0 border-b-4 border-quaternary/70 border-dotted focus:not-focus:border-0  focus-visible:ring-0 focus-visible:border-quaternary  " id="username" type="text" placeholder="Max Leiter" />
                                            
                                </div>
                                <div className="flex gap-8 justify-center items-end text-center ">
                                            <Select >
                                            <SelectTrigger className=" rounded-none text-quaternary text-lg border-0 border-dotted border-b-4 border-quaternary/70 hover:border-quaternary  focus:not-focus:border-0 focus:ring-0    data-[placeholder]:text-quaternary/40 ">
                                                <SelectValue placeholder="All Reviews" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-quaternary text-primary focus:not-focus:ring-transparent "  >
                                                <SelectItem className="data-[highlighted]:bg-primary data-[highlighted]:font-bold data-[highlighted]:text-quaternary" value="5">Apple</SelectItem>
                                                <SelectItem value="4">Banana</SelectItem>
                                                <SelectItem value="3">Blueberry</SelectItem>
                                                <SelectItem value="2">Grapes</SelectItem>
                                                <SelectItem value="1">Pineapple</SelectItem>
                                            </SelectContent>
                                        </Select>
                                            <p className="text-xl  font-bold shrink-0"> My Dog is Named</p>
                                            <Input className="rounded-none  text-quaternary text-lg border-0 border-b-4 border-quaternary/70 border-dotted focus:not-focus:border-0  focus-visible:ring-0 focus-visible:border-quaternary  " id="username" type="text" placeholder="Max Leiter" />
                                           
                                </div> */}
                                 
                                
                           
                            </div>

                          
                   
                   </div>

                   <Button 
                       onClick={() => {
                           handleFind();
                        }} 
                        disabled={!canFind}
                       className="text-lg h-auto w-3/12 hover:text-primary hover:bg-quaternary hover:border-quaternary text-quaternary border-2 border-quaternary font-semibold rounded-[2rem]">
                             Find My Plan 
                  </Button>
                </div>

                <div className={` flex-col content-center items-center font-acumin gap-8 h-[50vh] ${find ? 'flex' : 'hidden'}`}>
                    <p className="font-acumin text-6xl animate-bounce text-quaternary"> Finding The Right Plan </p>
                    <Loader className="animate-spin size-20 text-quaternary"/>
                </div>

                <div className={` flex-col content-center items-center font-acumin gap-8 h-[50vh] ${result && !find ? 'flex' : 'hidden'}`}>
                    <p>{result?.heroLine}</p>

                    <p className="text-lg mt-4">{result?.description}</p>

                    <p className="italic text-sm mt-2">{result?.myth}</p>
                </div>
            
        </div>
  )
}


