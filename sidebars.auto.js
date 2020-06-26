module.exports = {
  docs: [
    "doc1",
    {
        type: 'category',
        label: 'Fellowship',
        items: [        
            "fellowship/Standards"
        ],
    },
    {
        type: 'category',
        label: 'Rural Generalist',
        items: [
            "rural-generalist/index",
            "rural-generalist/Curriculum",
            "rural-generalist/Competency Domains",
            "rural-generalist/Learning-Areas"
        ],
    }
    // {
    //     "type": "category",
    //     "label": "Fellowship",
    //     "items": [
    //         "Fellowship/Introduction"
    //     ]
    // },
    // {
    //     "type": "category",
    //     "label": "Rural Generalist",
    //     "items": [
    //         "Rural Generalist/Rural Generalist Curriculum",
    //         "Rural Generalist/Competencies",
    //         "Rural Generalist/Standards",
    //     ]
    // }
  ],
};
