export class ProductShop {

    private name: string;
    private price: number;

    constructor ({name, price}: Product) {
        this.name = name;
        this.price = price;
    }

}

export interface Product {
    readonly id: number;
    readonly name: string;
    readonly price: number;
}