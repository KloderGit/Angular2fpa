
export class Item{

    purchase: string;
    done: boolean;
    price: number;

    constructor ( purchase: string, done: boolean, price: number){
        this.purchase = purchase;
        this.done = done;
        this.price = price;
    }
}