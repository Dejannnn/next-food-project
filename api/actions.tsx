"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from 'zod'

//INTERFACE
import { IMeal } from "@/interface/common-interface";

//api
import { saveMeal } from "./meals";

const FormSchema = z.object({
    creator: z.string().trim().min(1, { message: 'Please add creator.' }),
    creator_email: z.string({invalid_type_error: 'Please add creator_email.'}).email({ message: "Invalid email address" }),
    instructions: z.string().trim().min(1, { message: 'Please add instructions.'}),
    summary: z.string().trim().min(1, { message: 'Please add summary.'}),
    title: z.string().trim().min(1, { message: 'Please add title.'}),
    // image: z.any().refine((image) => image, `Image is required`)
  });
export interface State {
    errors?: {
        creator?: string;
        creator_email?: string;
        instructions?: string;
        summary?: string;
        image?: File;
        title?: string;
    };
    message?: string | null;
};

export const shareMeal: any = async(prevState: State ,formData: FormData) => {
    const meal: IMeal = {
        creator: formData.get("name") as string,
        creator_email: formData.get("email") as string,
        instructions: formData.get("instructions") as string,
        summary: formData.get("summary") as string,
        image: formData.get("image") as File,
        title: formData.get("title") as string,
    }

    const validatedFields = FormSchema.safeParse(meal);
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to share meal.',
        };
    }

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals')
}