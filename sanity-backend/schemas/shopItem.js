export default {
    name: 'shop-item',
    type: 'document',
    title: 'Shop Item',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'category',
            title: 'Kategorie',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'shop-category' } }],
        },
        {
            name: 'description',
            description: 'kurz halten!',
            type: 'string',
            title: 'Beschreibung'
        },
        {
            name: 'price',
            description: 'in €',
            type: 'number',
            title: 'Preis',
        },
        {
            name: 'discount',
            type: 'number',
            title: 'Rabatt',
            description: 'in %'
        },
        {
            name: 'priceInterval',
            type: 'string',
            title: 'Bezahlintervall',
            description: "wie häufig muss bezahlt werden?",
        },
        {
            name: 'productContent',
            title: 'Produkt Inhalt',
            type: 'array',
            of: [
                {
                    name: 'content',
                    title: 'Inhalt',
                    type: 'object',
                    fields: [
                        {
                            title: 'text',
                            name: 'text',
                            type: 'string'
                        },
                        {
                            title: 'Tooltip',
                            name: 'tooltip',
                            type: 'string'
                        }
                    ]
                }
            ],

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}