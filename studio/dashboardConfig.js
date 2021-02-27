export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60398c7360b952133ab3d07d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-tn22gkkc',
                  apiId: 'cd9d1708-116e-4101-be1c-34aaf0fcf8db'
                },
                {
                  buildHookId: '60398c7360b952126fb3d240',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-iipcfczx',
                  apiId: '4f6bca6c-d61e-4b03-9059-529a8e996f1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/feliperoschel/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-iipcfczx.netlify.app', category: 'apps'}
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
