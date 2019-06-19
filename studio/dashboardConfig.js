export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d0a98beca4eeb144b5661cb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio123-studio',
                  apiId: 'b6a714f9-5db1-46c6-adfb-301f1f6a622a'
                },
                {
                  buildHookId: '5d0a98bee1e64cb051ac8a21',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio123',
                  apiId: '65beb6c2-fbe4-431a-9915-6650f2bfa771'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-portfolio123',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio123.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
