// 共用 footer
// 創建 Custom Element
// 參考: https://ithelp.ithome.com.tw/m/articles/10292846
class MyFooter extends HTMLElement {
    constructor() {
      // 一定要先繼承
      super();
      // this 指向創建的 dom 節點
      this.innerHTML = `
        <footer class="footer text-center py-2 theme-bg-dark">
            <p>尼尼研究室 Nel's Studio (C) Copyright Reversed 版權所有，請勿任意轉載</p>
            <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
            <small class="copyright">Designed with <span class="sr-only">love</span><i class="fas fa-heart" style="color: #fb866a;"></i> by <a href="https://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
            <br>
            <a href="https://themes.3rdwavemedia.com/demo/bs5/devblog/">原始範例網站</a>
        </footer>
      `;
    }
  }
  
  // 限制: 註冊的TAG一定要 - 號 
  customElements.define('my-footer', MyFooter);