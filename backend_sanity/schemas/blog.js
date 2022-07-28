export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'languages',
        title: 'Languages',
        type: 'string',
      },
      {
        name: 'article',
        title: 'Article',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };