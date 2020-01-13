var sites = [
    'https://sannndy0000.github.io/',
    'https://niceirene.github.io/',
    'https://web.eecs.umich.edu/~chshibo/',
    'https://shengpu1126.github.io/',
    'https://yifanguan.github.io/',
    'https://xingjunjie.me/blog/',
    'http://www-personal.umich.edu/~pujat/',
    'https://abuyukcakir.github.io/',
    'http://weichaomao.web.illinois.edu/',
    'https://hongyunyan.github.io/',
    'https://chaoqiyang.com/'
];
function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    window.location.href = sites[i];
}
