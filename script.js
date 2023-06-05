// ページの内容
const pages = {
    'home': `
        <div class="home-page">
            <h1>トップページ</h1>
            <p>ここにアプリの概要が書かれます。</p>
            <a href="#privacy">プライバシーポリシーへ</a>
        </div>
    `,
    'privacy': `
        <div class="privacy-page">
            <h1>プライバシーポリシー</h1>
            <p>ここにプライバシーポリシーが書かれます。</p>
            <a href="#home">トップページへ戻る</a>
        </div>
    `
};

// 初期ページを設定
window.location.hash = window.location.hash || '#home';

// ハッシュの変更を監視し、ページを切り替える
window.onhashchange = function() {
    document.getElementById('app').innerHTML = pages[window.location.hash.substr(1)];
};

// 初回のページロード
window.onhashchange();
