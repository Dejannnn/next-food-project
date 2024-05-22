import classes from "./page.module.css"
import Image from "next/image";
import { notFound } from "next/navigation";

//API
import {getMeal} from "@/api/meals"

//INTERFACE
import { IMeal } from "@/interface/common-interface";

interface MealComponentProps {
    params: {
      slug: string;
    };
  }

const Meal = async ({params: {slug}}: MealComponentProps) => {
    console.log(">>>any", slug)
    const meal: IMeal = await getMeal(slug);

    if(!meal){
        notFound();
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br />')
    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image fill src={meal.image as string} alt="Description"/>
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    {meal.creator}
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator_email}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}>
            </p>
        </main>
        </>
    )
}

export default Meal;