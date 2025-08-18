// Inicializando o Zuck.js
window.onload = function() {
    document.addEventListener('DOMContentLoaded', function() {
        const containerDosStories = document.getElementById('storie');
        var stories = new Zuck(containerDosStories, {
            skin: 'snapgram',   // snapgram, facegram, vemde, swipenight
            avatars: true,
            list: false,
            cubeEffect: true,
            autoFullScreen: false,
            backNative: true,
            previousTap: true,
            localStorage: true,

            stories: [
                {
                    id: "user1",
                    photo: "https://randomuser.me/api/portraits/men/32.jpg",
                    name: "Guilherme",
                    link: "",
                    lastUpdated: Date.now(),
                    items: [
                        {
                            id: "story1",
                            type: "photo",
                            length: 3,
                            src: "https://picsum.photos/400/700?random=1",
                            preview: "https://picsum.photos/100/150?random=1",
                            seen: false,
                            time: Date.now()
                        },
                        {
                            id: "story2",
                            type: "video",
                            length: 0,
                            src: "https://www.w3schools.com/html/mov_bbb.mp4",
                            preview: "https://picsum.photos/100/150?random=2",
                            seen: false,
                            time: Date.now()
                        }
                    ]
                },
                {
                    id: "user2",
                    photo: "https://randomuser.me/api/portraits/women/44.jpg",
                    name: "Maria",
                    link: "",
                    lastUpdated: Date.now(),
                    items: [
                        {
                            id: "story3",
                            type: "photo",
                            length: 5,
                            src: "https://picsum.photos/400/700?random=3",
                            preview: "https://picsum.photos/100/150?random=3",
                            seen: false,
                            time: Date.now()
                        }
                    ]
                }
            ]
        });
    });

    document.getElementById('mensagem-bemvindo').style.display = 'flex';

}

function fecharMensagem() {
    document.getElementById('mensagem-bemvindo').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
  // Todo o seu código JS aqui dentro
  const icone = document.getElementById('icone-gif');
  icone.addEventListener('click', function() {
    const audio = document.getElementById('audio-animado');
    audio.play();
  });
});
