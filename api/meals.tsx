
import { IMeal } from '@/interface/common-interface';
import fs, {WriteStream} from "node:fs";
import xss from "xss";
import sql from 'better-sqlite3';
const db = sql('meals.db');


export const getMeals = async () => {    
    return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = async (slug: string) => {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as IMeal;
};

export const saveMeal = async (meal: IMeal) => {
    const file = meal.image as File;
    const currentDate: number = new Date().getTime(); 
    const extension: string = file.name.split(".").pop() as string ;
    const fileName: string = `${currentDate}.${extension}`;
    const writeFile: WriteStream = fs.createWriteStream(`public/images/${fileName}`);
    const imageArrayBuffer= await file.arrayBuffer();
    writeFile.write(Buffer.from(imageArrayBuffer));
    meal.image = `/images/${fileName}`;
    meal.slug = currentDate.toString();
    meal.instructions = xss(meal.instructions);

    return db.prepare("INSERT INTO meals (slug, title, image, summary, instructions, creator_email, creator) VALUES(@slug, @title, @image, @summary, @instructions, @creator_email, @creator)").run(meal)
}