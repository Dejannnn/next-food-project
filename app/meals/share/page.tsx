'use client';

import { useFormState } from 'react-dom';
import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';

//Actions
import {shareMeal} from "@/api/actions"

//Componnet
import SubmitButton from '@/components/meals/submit-button';

export default function ShareMealPage() {
  const initialState = { message: null, errors: {} };
  const [formState, dispatchShareMeal] = useFormState(shareMeal, initialState)

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={dispatchShareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
            ></textarea>
          </p>
          <ImagePicker name="image" label="Image"></ImagePicker>
          {formState.message && <p>{formState.message}</p>}
          <p className={classes.actions}>
            <SubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}