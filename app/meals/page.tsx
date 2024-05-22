import classes from "./page.module.css";
import Link from 'next/link';
import { Suspense } from "react";
import { Metadata } from 'next';


import MealsGrid from "@/components/meals/meals-grid";

//API
import {getMeals} from "@/api/meals";

export const metadata: Metadata = {
    title: 'All Meals',
    description: 'Delicious meals, shared by a food-loving community. You will see all delicious melas',
  };

async function MealsComponent() {

    const meals = await getMeals();
    return <MealsGrid meals={meals}></MealsGrid>
}

const Meals = async () => {

    return (
        <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created{' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favourite recipe and cook it yourself. It is easy and fun!</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favourite Recepie
                </Link>
            </p>
        </header>
        <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading meals</p>}>
            <MealsComponent />
        </Suspense>
        </main>
        </>
    )
}

export default Meals;