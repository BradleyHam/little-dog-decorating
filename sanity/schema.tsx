const schema = {
  "name": "projects",
  "title": "Projects",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Project Title",
      "type": "string"
    },
    {
      "name": "slug",
      "title": "Slug",
      "type": "slug",
      "options": {
        "source": "title",
        "maxLength": 96
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ 
        type: 'string',
        options: {
          list: [
            { title: 'Interior', value: 'interior' },
            { title: 'Exterior', value: 'exterior' },
            { title: 'Wallpapering', value: 'wallpapering' },
            { title: 'Gib Stopping', value: 'gib stopping' },
            { title: 'Roof Repaint', value: 'roof repaint' },

          ]
        }
      }]
    },
    {
      "name": "smallImage",
      "title": "Small Image",
      "type": "image",
      "options": { hotspot: true }
    },
    
    {
      "name": "mediumImage",
      "title": "Medium Image",
      "type": "image",
      "options": { hotspot: true }
    },
    {
      "name": "largeImage",
      "title": "Large Image",
      "type": "image",
      "options": { hotspot: true }
    },
    {
      "name": "content",
      "title": "Project Content",
      "type": "array",  // Changed from blockContent to array
      "of": [{ type: "block" }]  // Added "block" type within the array
    },
    {
      "name": "images",
      "title": "Images",
      "type": "array",
      "of": [{ type: "image" }]
    }
  ]
}

export default schema