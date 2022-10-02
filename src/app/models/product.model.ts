export class Product {
    id!: number;
    name: string;
    price: number;
    date: Date;
    description: string;
    image: string;
    sellersCity: string;
    sellersPhone: string;

    constructor(name: string, price: number, date: Date, description: string, image: string, sellersCity: string, sellersPhone: string) {
        this.name = name;
        this.price = price;
        this.date = date;
        this.description = description;
        this.image = image;
        this.sellersCity = sellersCity;
        this.sellersPhone = sellersPhone;
    }
}