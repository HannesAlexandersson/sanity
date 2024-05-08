export const Product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'the title of the product',
            validation: rule => rule.max(50).warning('Shorter titles are usually better'),
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
            description: 'where we create a unique url for the product',
        },
        {
            name: 'image',
            title: 'product-image',
            type: 'image',
            description: 'upload a product image',
        },
        {
            name: 'price',
            title: 'product-price',
            type: 'number',
            description: 'set the price of the product',
        },
        {
            name: 'brandReference',
            type: 'reference',
            to: [
                {
                    type: 'brand',
                }
            ],
        },
        {
            title: 'Categories',
            name: 'categories',
            type: 'array',
            of:[
                {
                    type: 'reference',
                    to: [
                        {type: 'category'},
                    ]
                }
            ]
            
        },
        {
            title: 'sellingPoints',
            name: 'sellingPoints',
            type: 'array',
            of:[
                {
                    type: 'string',
                }
            ]
            
        }
    ],
};