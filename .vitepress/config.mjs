import { defineConfig } from 'vitepress';
import nav from './nav.mjs';
import sidebar from './sidebar.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Novel/",
  head:[["link", { rel: "icon", href: "/SixStar_P.png" }]],
  title: "HOG-StarWatch的Novel主页",
  description: "HOG-StarWatch",
  lastUpdated: true,
  themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
    logo: '/SixStar_P.png',

    lastUpdated: {
      text: '最后更新于：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    nav: nav,
    sidebar: sidebar,
    /* sidebar: 
    [{  text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
    }],
 */
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HOG-StarWatch' },
      { icon: {
        svg: '<svg t="1727512678773" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6590" width="200" height="200"><path d="M679.424 746.861714l84.004571-395.995428c7.424-34.852571-12.580571-48.566857-35.437714-40.009143l-493.714286 190.281143c-33.718857 13.129143-33.133714 32-5.705142 40.557714l126.281142 39.424 293.156572-184.576c13.714286-9.142857 26.294857-3.986286 16.018286 5.156571l-237.129143 214.272-9.142857 130.304c13.129143 0 18.870857-5.705143 25.709714-12.580571l61.696-59.428571 128 94.281142c23.442286 13.129143 40.009143 6.290286 46.299428-21.723428zM1024 512c0 282.843429-229.156571 512-512 512S0 794.843429 0 512 229.156571 0 512 0s512 229.156571 512 512z" fill="" p-id="6591"></path></svg>'
      }, link: 'https://t.me/HOG_StarCraft' },
      { icon: {
        svg: '<svg t="1727512599223" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4544" width="200" height="200"><path d="M1008 512c0 274-222.4 496-496.8 496-227.6 0-419.2-152.6-478-360.8l190.4 78.6c12.8 64.2 69.8 112.8 137.8 112.8 78.4 0 143.8-64.8 140.4-147l169-120.4c104.2 2.6 191.6-81.8 191.6-187 0-103.2-84-187-187.4-187s-187.4 84-187.4 187v2.4L369.2 558c-31-1.8-61.4 6.8-87 24.2L16 472.2C36.4 216.8 250.2 16 511.2 16 785.6 16 1008 238 1008 512zM327.4 768.6l-61-25.2a105.58 105.58 0 0 0 54.4 51.6c53.8 22.4 115.6-3.2 138-56.8 10.8-26 11-54.6 0.2-80.6-10.8-26-31-46.4-57-57.2-25.8-10.8-53.4-10.4-77.8-1.2l63 26c39.6 16.4 58.4 61.8 41.8 101.4-16.6 39.8-62 58.4-101.6 42z m347.6-259.8c-68.8 0-124.8-56-124.8-124.6s56-124.6 124.8-124.6 124.8 56 124.8 124.6-55.8 124.6-124.8 124.6z m0.2-31.2c51.8 0 93.8-42 93.8-93.6 0-51.8-42-93.6-93.8-93.6s-93.8 42-93.8 93.6c0.2 51.6 42.2 93.6 93.8 93.6z" fill="" p-id="4545"></path></svg>'
      }, link: 'https://steamcommunity.com/id/HOG_StarWatch/' },
      { icon: {
        svg: '<svg t="1727512632562" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5583" width="200" height="200"><path d="M490.338 592.738c11.816 11.816 29.539 11.816 41.354 0L976.738 179.2c7.877-15.754 5.908-41.354-25.6-41.354l-880.246 1.97c-23.63 0-43.323 21.66-25.6 41.353l445.046 411.57z m494.277-252.061c0-19.692-23.63-31.508-39.384-17.723L596.677 643.938c-23.63 21.662-53.17 33.477-84.677 33.477s-61.046-11.815-84.677-31.507L80.738 322.954c-15.753-13.785-39.384-3.939-39.384 17.723-1.97-5.908-1.97 447.015-1.97 447.015 0 43.323 35.447 78.77 78.77 78.77h787.692c43.323 0 78.77-35.447 78.77-78.77V340.677z" p-id="5584"></path></svg>'
      }, link: 'mailto:W3389823633@hotmail.com' },
    ],

    footer: {
      message: '所有资源来自于网络 侵删',
    },
    
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
