// https://blog.hiskio.com/vue3-react-tailwind-css/
// 從零開始配置 Vue3 / React + Tailwind CSS
// 這個不錯

// https://www.gushiciku.cn/pl/g0pR/zh-tw
// 拿走 2021 年在 React 專案中使用 Tailwind CSS 的最佳安裝指南  
// 怪怪的？還算有參考價值

// tailwindcss 教學 - 安裝及核心用法
// https://hi-founder.com/p/tailwindcss-%E6%95%99%E5%AD%B8-%E5%AE%89%E8%A3%9D%E5%8F%8A%E6%A0%B8%E5%BF%83%E7%94%A8%E6%B3%95/
// 上面安裝流程和使用很奇怪 是給html的 看下面使用方式就好


// https://hsuchihting.github.io/TailwindCSS/20210908/2562966958/
// 切換深色模式的按鈕 有趣


// https://ithelp.ithome.com.tw/articles/10244180
// JIT打包速度加快
// JIT 模式不是萬能的，也有使用上限制 Tailwind CSS 是靜態提取 class 的，寫 class 務必要寫完整，不然 Tailwind CSS 會無法正確的打包 


/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ['./src/**/*.{js,jsx,ts,tsx}'],   // 會影響的頁面  (purge已棄用改為content 用purge會有警告)
  darkMode: 'media', // or 'media' or 'class' 原本是 false
  theme: {      // 基本上預設就很夠用了
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],   // 原則上有些插件，某些原因沒有收入至框架內，要使用再使用，不然也很夠用 https://tailwindcss.com/docs/plugins 官方文件
}

  // 上面其中一個指令會生成 postcss.config.js 這個檔案是用來載入 postcss 插件用的
  // 這邊預設會載入 tailwindcss 與 autoprefixer 想要載入其他的插件或設定才會用到這個檔案

  // 預設沒顯示但可使用的設定
  // prefix: '',
  // important: false,
  // separator: ':',
  // presets: [],
  // variantOrder: [],
  // corePlugins: [],  這個是css reset 之類的預設設定 , 這邊選項是要不要禁用

  // 配置設定
  // https://ithelp.ithome.com.tw/articles/10254921

  // presets 可使用其他預設值替換 Tailwind 的預設值，如果團隊內有自己常用的預設值就可以使用此功能，設定一次之後開新專案時就可以節省許多時間，詳細設定方式可以參考官方
  // prefix 會將撰寫的 class 加上自定義的前綴，可防止樣式的衝突，在撰寫插件時常會使用到該功能




  // @apply
  // 是目前比較常用的功能，可以組合多個 CSS 在一個 class 內，類似 funciton 把東西都包好，方便使用。(可參考 alex寫的包裝custom css)

  // 範例
  // 加在 class 裡可以直接讓 div 吃到 @apply 後面的 CSS，讓 HTML 的 code 看起來更簡潔。
  // 記得要在 JS 檔 import 你寫的scss 檔，不然會吃不到你寫的樣式

//   .commentinnerbg {
//   @apply flex flex - col justify - center items - center bg - white w - 20 h - 20 shadow - md
// }