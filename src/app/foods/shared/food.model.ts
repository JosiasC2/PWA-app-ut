export interface Food {
    id:number;
    name:string;
    description: string;
    image: string;
    category: 'Drink' | 'Food';
    price:number;
}
