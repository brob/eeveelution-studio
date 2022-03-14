export default {
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question text',
      type: 'string'
    },
    {
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'answerText',
              title: 'Answer text',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image'
            },
            {
              name: 'eeveeValues',
              title: 'Eeveelution values',
              type: 'array',
              
              of: [
                {
                  type: 'object',
                  name: 'eeveelution',
                  title: 'Eeveelution',
                  options: {
                    columns: 2
                  },
                  fields: [
                    {
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                      // List of eeeveelutions
                      options: {
                        list: ['eevee', 'glaceon', 'jolteon', 'leafeon', 'sylveon', 'umbreon', 'vaporeon', 'flareon']
                      }
                    },
                    {
                      name: 'value',
                      title: 'Value',
                      type: 'number'
                    }

                  ],
                  preview: {
                    select: {
                      title: 'name',
                      value: 'value'
                    },
                    prepare({title, value}) {
                      return {
                        title: `${title} (${value})`
                      }
                    }
                  }


                }
              ],
            }
          ]
        }
      ],
    }
  ],
}