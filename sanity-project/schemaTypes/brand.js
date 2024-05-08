export const Brand = {
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Brandname',
            type: 'string',
            description: 'the name of the brand',
            validation: rule => rule.required().min(10).max(80),
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
            description: 'where we create a unique url for the brand',
        },
        {
            name: 'logo',
            title: 'brand-logo',
            type: 'image',
            description: 'upload a brand logo',
        },
      
    ],
};