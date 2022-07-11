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
    productContent: {
        text: string;
        tooltip: string;
    }[];
}

export interface Alert {
    name: string;
    text: string;
    color?: {
        _type: 'color';
        alpha: number;
        hex: string;
        hsl: {
            _type: string;
            a: number;
            h: number;
            l: number;
            s: number;
        },
        hsv: {
            _type: string,
            a: number;
            h: number;
            s: number;
            v: number;
        },
        rgb: { _type: string, a: number, b: number, g: number, r: number }
    },
    link?: string;
    linkText?: string;
}

export type Role = 'customer' | 'staff' | 'admin'

export interface User {
    _id: ObjectId;
    name: string;
    email: string;
    image: string;
    role: Role;
    banned: false;
    emailVerified: null
}