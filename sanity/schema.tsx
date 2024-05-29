const schema = {
  "name": "project",
  "title": "Project",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Project Title",
      "type": "string",
      "validation": { required: true }
    },
    {
      "name": "categories",
      "title": "Categories",
      "type": "array",
      "of": [{ type: "string"}]
    },
    {
      "name": "smallImage",
      "title": "Small Image",
      "type": "image",
      "options": { hotspot: true },
      "validation": { required: true }
    },
    
    {
      "name": "mediumImage",
      "title": "Medium Image",
      "type": "image",
      "options": { hotspot: true },
      "validation": { required: true }
    },
    {
      "name": "largeImage",
      "title": "Large Image",
      "type": "image",
      "options": { hotspot: true },
      "validation": { required: true }
    },
    {
      "name": "content",
      "title": "Project Content",
      "type": "array",  // Changed from blockContent to array
      "of": [{ type: "block" }]  // Added "block" type within the array
    },
    {
      "name": "beforeImages",
      "title": "Before Images",
      "type": "array",
      "of": [{ type: "image" }]
    },
    {
      "name": "afterImages",
      "title": "After Images",
      "type": "array",
      "of": [{ type: "image" }]
    }
  ]
}

export default schema