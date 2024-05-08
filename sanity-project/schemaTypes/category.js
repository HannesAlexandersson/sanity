export const Category = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category-Title',
            type: 'string',
            description: 'the title of the category',
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
            description: 'where we create a unique url for the category',
        },
       {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ],
            description: 'add a description for the category',
       }
    ],
};