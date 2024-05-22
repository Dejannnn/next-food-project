export interface IMeal {
    id?: number,
    slug?: string,
    title: string,
    image: File | string,
    summary: string
    instructions: string,
    creator_email: string,
    creator: string
};