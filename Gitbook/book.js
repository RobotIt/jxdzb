let plugins = [
  '-lunr', // 默认插件，无需引用
  '-sharing', // 默认插件，无需引用
  '-search', // 默认插件，无需引用
  '-favicon', // 默认插件，无需引用
  '-share',
  'code',
  'expandable-chapters',
  'theme-lou',
  'back-to-top-button',
  'search-pro',
  'flexible-alerts',
  'chapter-fold',
  'splitter',
  'alerts',
  //'valine',
  'popup'
];
if (process.env.NODE_ENV == 'dev') plugins.push('livereload');

module.exports = {
  title: '教学文件管理',
  author: '机电学院',
  lang: 'zh-hans',
  description: '机电学院教学文件管理',
  plugins,
  pluginsConfig: {
    // gitbook-plugin-code 插件配置
    code: {
      copyButtons: true, // code插件复制按钮
    },
    // gitbook-plugin-theme-lou 主题插件配置
    'theme-lou': {
      color: '#2096FF', // 主题色
      favicon: 'assets/favicon.ico', // 网站图标
      logo: 'assets/jd.png', // Logo图
      autoNumber: false, // 自动给标题添加编号(如1.1.1)
      titleColor: {
        // 自定义标题颜色(不设置则默认使用主题色)
        h1: '#8b008b', // 一级标题颜色
        h2: '#009966', // 二级标题颜色
        h3: '#a52a2a', // 三级标题颜色
        h4: '#176186', // 四级标题颜色
        h5: '#5B4B00', // 五级标题颜色
        h6: '#8C8C00', // 六级标题颜色
      },
      forbidCopy: false, // 页面是否禁止复制（不影响code插件的复制）
      'search-placeholder': '全文搜索', // 搜索框默认文本
      'hide-elements': ['.summary .gitbook-link'], // 需要隐藏的标签
      copyright: {
        author: 'ROSit', // 底部版权展示的作者名
      },
    },
    "valine": {
      "appId": "3D2fncm2tN4FI5duTIQA11qY-gzGzoHsz",
      "appKey": "qh5zfPEVsjNxqCWz3hZMGaPB"
    },

  },
  variables: {
    themeLou: {
      // 顶部导航栏配置
      nav: [
        {
          target: '_blank', // 跳转方式: 打开新页面
          url: 'https://www.ceeaa.org.cn/', // 跳转页面
          name: '中国工程教育专业认证协会官网', // 导航名称
        },
        {
          target: '_blank', // 跳转方式: 打开新页面
          url: 'https://www.buct.edu.cn/main.htm', // 跳转页面
          name: '北京化工大学官网', // 导航名称
        },
        // {
        //   target: '_blank', // 跳转方式: 打开新页面
        //   url: 'https://edu.csdn.net/course/detail/32032', // 跳转页面
        //   name: 'CSDN', // 导航名称
        // },
      ],
      // 底部打赏配置
      footer: {

        copyright: true, // 显示版权
      },
    },
  },
};
