export class HomeModel {
    images: Array<String>;
    popularproducts: Array<ProductItemModel>;
    lastvisitproducts: Array<ProductItemModel>;
    bestsellerproducts: Array<ProductItemModel>;
    popularshops: Array<ShopItemModel>;
  }
  
  export class ProductItemModel {
    name: String;
    image: String;
    unitprice: Number;
  }
  export class ShopItemModel {
    name: String;
    image: String;
  }
  