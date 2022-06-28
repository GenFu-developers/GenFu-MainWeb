export interface Post {
    _createdAt: string;
    _id: string;
    title: string;
    author: {
        name: string;
        image: string;
    };
    description: string;
    mainImage: {
        asset: {
            url: string;
        }
    }
    slug: {
        current: string;
    };
    body: [object];
}


export interface ShopCategory {
    name: string,
    description: string,
    mainImage: {
        asset: {
            url: string;
        }
    }
    slug: {
        current: string;
    };
}

export interface ShopItem {
    _id: string;
    name: string;
    category: Array;
    description: string;
    price: number;
    discount?: number;
    slug: {
        current: string;
    };
    mainImage: string;
    priceInterval: string;
    productContent: Array;
}