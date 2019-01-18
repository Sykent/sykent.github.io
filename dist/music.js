const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    loop : 'all',
    order :  'list',
    autoplay: false,
    theme: '#e9e9e9',
    audio: [
      {
        name: "凉凉",
        artist: '张碧晨',
        url: 'http://www.ytmp3.cn/down/56794.mp3',
        cover: 'http://img.ytmp3.cn/image/13.jpg',
      },
      {
        name: '沉默是金',
        artist: '张国荣 ',
        url: 'http://www.ytmp3.cn/down/49633.mp3',
        cover: 'http://img.ytmp3.cn/image/64.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://r1.ykimg.com/0516000059CDB501859B5D03080DE349',
      }
    ]
});

const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});
