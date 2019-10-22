export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5daebaa624bf83091dc15442',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-uzjzf3s1',
                  apiId: '2bf6cd1a-a399-4b71-a109-76c77dd312da'
                },
                {
                  buildHookId: '5daebaa76872bd4451756943',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-t7rrbwo3',
                  apiId: '91c41131-8a09-4b62-b6f0-ac75db47118a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bluenex/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-t7rrbwo3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
