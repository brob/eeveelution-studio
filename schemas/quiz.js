export default {
    name: 'quiz',
    title: 'Quiz',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'questions',
            title: 'Questions',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'question'
                        }
                    ]
                }
            ]
        }
    ]
};
