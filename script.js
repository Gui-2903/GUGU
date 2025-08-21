// Inicializando o Zuck.js
window.onload = function () {
    //document.addEventListener('DOMContentLoaded', function() {
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
                photo: "img/FT-j/cruze/15cddf20-7383-4a9e-90d4-7a7ef64d61a14449871020234802898.jpg",
                name: "ZEROO",
                link: "",
                lastUpdated: Date.now(),
                items: [
                    {
                        id: "story1",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/cruze/15cddf20-7383-4a9e-90d4-7a7ef64d61a14449871020234802898.jpg",
                        preview: "img/FT-j/cruze/15cddf20-7383-4a9e-90d4-7a7ef64d61a14449871020234802898.jpg",
                        seen: false,
                        time: null,
                        
                    },
                    {
                        id: "story2",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/eu ela.jpg",
                        preview: "img/FT-j/cruze/Captura de tela 2025-08-20 201947.png",
                        seen: false,
                        time: null,
                        
                    },
                    {
                        id: "story3",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/cruze/Captura de tela 2025-08-20 201953.png",
                        preview: "img/FT-j/cruze/Captura de tela 2025-08-20 201953.png",
                        seen: false,
                        time: null,
                        
                    },
                    {
                        id: "story4",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/cruze/Captura de tela 2025-08-20 202001.png",
                        preview: "img/FT-j/cruze/Captura de tela 2025-08-20 202001.png",
                        seen: false,
                        
                    },
                    {
                        id: "story5",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/cruze/Captura de tela 2025-08-20 202010.png",
                        preview: "img/FT-j/cruze/Captura de tela 2025-08-20 202010.png",
                        seen: false,
                        time: 5,
                        
                    },
                    {
                        id: "story6",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/cruze/Captura de tela 2025-08-20 202015.png",
                        preview: "img/FT-j/cruze/Captura de tela 2025-08-20 202015.png",
                        seen: false,
                        time: 6,
                        
                    },
                    {
                        id: "story7",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/cruze/Captura de tela 2025-08-20 202021.png",
                        preview: "img/FT-j/cruze/Captura de tela 2025-08-20 202021.png",
                        seen: false,
                        time: 7,
                        
                    }
                ]
            },
            {
                id: "user2",
                photo: "img/FT-j/ELA/1c0eab84-9802-4c8e-a3f7-88730b54bc534866281499066344728.jpg",
                name: "A LINDAAA",
                link: "",
                lastUpdated: Date.now(),
                items: [
                    {
                        id: "story_ela1",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/1c0eab84-9802-4c8e-a3f7-88730b54bc534866281499066344728.jpg",
                        preview: "img/FT-j/ELA/1c0eab84-9802-4c8e-a3f7-88730b54bc534866281499066344728.jpg",
                        seen: false,
                        time: 1
                    },
                    {
                        id: "story_ela2",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/1e584f64-c371-48bf-a0e4-279bef0bff1e4634468912924589696.jpg",
                        preview: "img/FT-j/ELA/1e584f64-c371-48bf-a0e4-279bef0bff1e4634468912924589696.jpg",
                        seen: false,
                        time: 2
                    },
                    {
                        id: "story_ela3",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/541cb3a4-bd6c-47d2-a3aa-2206684ccdbd7813644140630566990.jpg",
                        preview: "img/FT-j/ELA/541cb3a4-bd6c-47d2-a3aa-2206684ccdbd7813644140630566990.jpg",
                        seen: false,
                        time: 3
                    },
                    {
                        id: "story_ela4",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/5fbf4d46-ac40-4fd8-b115-4c22d01b4cb72012016610144946471.jpg",
                        preview: "img/FT-j/ELA/5fbf4d46-ac40-4fd8-b115-4c22d01b4cb72012016610144946471.jpg",
                        seen: false,
                        time: 4
                    },
                    {
                        id: "story_ela5",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/725281a8-984c-44b9-9629-832acbbf67596686407780065336378.jpg",
                        preview: "img/FT-j/ELA/725281a8-984c-44b9-9629-832acbbf67596686407780065336378.jpg",
                        seen: false,
                        time: 5
                    },
                    {
                        id: "story_ela6",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/755f8cff-76b8-4ec6-b057-eea3b8a490154575084886219952761.jpg",
                        preview: "img/FT-j/ELA/755f8cff-76b8-4ec6-b057-eea3b8a490154575084886219952761.jpg",
                        seen: false,
                        time: 6
                    },
                    {
                        id: "story_ela7",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/9b6fc2d6-25db-4136-8152-02493c4a66b351428154826461344.jpg",
                        preview: "img/FT-j/ELA/9b6fc2d6-25db-4136-8152-02493c4a66b351428154826461344.jpg",
                        seen: false,
                        time: 7
                    },
                    {
                        id: "story_ela8",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/ba8144ba-03e3-41e1-8c61-25b3f409222c36425954987592863.jpg",
                        preview: "img/FT-j/ELA/ba8144ba-03e3-41e1-8c61-25b3f409222c36425954987592863.jpg",
                        seen: false,
                        time: 8
                    },
                    {
                        id: "story_ela9",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/c82c247f-3088-4e0f-bfdb-bf6e7c18ba015268746449761801911.jpg",
                        preview: "img/FT-j/ELA/c82c247f-3088-4e0f-bfdb-bf6e7c18ba015268746449761801911.jpg",
                        seen: false,
                        time: 9
                    },
                    {
                        id: "story_ela10",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/cfa53724-835e-4549-ae9b-3d546809c2de5790131140021850850.jpg",
                        preview: "img/FT-j/ELA/cfa53724-835e-4549-ae9b-3d546809c2de5790131140021850850.jpg",
                        seen: false,
                        time: 10
                    },
                    {
                        id: "story_ela11",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/dcb37667-6ff5-40ba-bd87-1cf3d7a7d8f76607235528690429238.jpg",
                        preview: "img/FT-j/ELA/dcb37667-6ff5-40ba-bd87-1cf3d7a7d8f76607235528690429238.jpg",
                        seen: false,
                        time: 11
                    },
                    {
                        id: "story_ela12",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/ed0e035b-c758-4349-81c7-e4f18499e9838409291153147211331.jpg",
                        preview: "img/FT-j/ELA/ed0e035b-c758-4349-81c7-e4f18499e9838409291153147211331.jpg",
                        seen: false,
                        time: 12
                    },
                    {
                        id: "story_ela13",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ELA/efbe9486-6003-4cfa-91aa-2229b399c3325011169228265470415.jpg",
                        preview: "img/FT-j/ELA/efbe9486-6003-4cfa-91aa-2229b399c3325011169228265470415.jpg",
                        seen: false,
                        time: 13
                    }
                ]
            },
            {
                id: "user3",
                photo: "img/FT-j/EU ELA/eu ela.jpg",
                name: "EU e OCÊ",
                link: "",
                lastUpdated: Date.now(),
                items: [
                    {
                        id: "story_eu_ela1",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/2cb6a278-20d3-445b-887e-dcd1a070d7807389669252025450766.jpg",
                        preview: "img/FT-j/EU ELA/2cb6a278-20d3-445b-887e-dcd1a070d7807389669252025450766.jpg",
                        seen: false,
                        time: 1
                    },
                    {
                        id: "story_eu_ela2",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.02_4a23b14a.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.02_4a23b14a.jpg",
                        seen: false,
                        time: 2
                    },
                    {
                        id: "story_eu_ela3",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.02_6d9a3426.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.02_6d9a3426.jpg",
                        seen: false,
                        time: 3
                    },
                    {
                        id: "story_eu_ela4",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.02_94d03f90.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.02_94d03f90.jpg",
                        seen: false,
                        time: 4
                    },
                    {
                        id: "story_eu_ela5",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.03_a041d2b2.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.03_a041d2b2.jpg",
                        seen: false,
                        time: 5
                    },
                    {
                        id: "story_eu_ela6",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.03_c51aa9e6.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.03_c51aa9e6.jpg",
                        seen: false,
                        time: 6
                    },
                    {
                        id: "story_eu_ela7",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.03_e48ff549.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.03_e48ff549.jpg",
                        seen: false,
                        time: 7
                    },
                    {
                        id: "story_eu_ela8",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.04_56679537.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.04_56679537.jpg",
                        seen: false,
                        time: 8
                    },
                    {
                        id: "story_eu_ela9",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.04_d409ab6f.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.04_d409ab6f.jpg",
                        seen: false,
                        time: 9
                    },
                    {
                        id: "story_eu_ela10",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.06_6f1b703f.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.06_6f1b703f.jpg",
                        seen: false,
                        time: 10
                    },
                    {
                        id: "story_eu_ela11",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.06_8e8868cc.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.06_8e8868cc.jpg",
                        seen: false,
                        time: 11
                    },
                    {
                        id: "story_eu_ela12",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.06_f0de9d3d.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.06_f0de9d3d.jpg",
                        seen: false,
                        time: 12
                    },
                    {
                        id: "story_eu_ela13",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.09_093e4dcc.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.09_093e4dcc.jpg",
                        seen: false,
                        time: 13
                    },
                    {
                        id: "story_eu_ela14",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.10_32670228.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.10_32670228.jpg",
                        seen: false,
                        time: 14
                    },
                    {
                        id: "story_eu_ela15",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.10_b0951ce7.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.10_b0951ce7.jpg",
                        seen: false,
                        time: 15
                    },
                    {
                        id: "story_eu_ela16",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.10_d978768f.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.10_d978768f.jpg",
                        seen: false,
                        time: 16
                    },
                    {
                        id: "story_eu_ela17",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.11_3b8c46e5.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.11_3b8c46e5.jpg",
                        seen: false,
                        time: 17
                    },
                    {
                        id: "story_eu_ela18",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.11_ff110256.jpg",
                        preview: "img/FT-j/EU ELA/Imagem do WhatsApp de 2025-08-20 à(s) 20.25.11_ff110256.jpg",
                        seen: false,
                        time: 18
                    }
                ]
            },
            {
                id: "user4",
                photo: "img/FT-j/GST/gst.jpg",
                name: "GOXTOZA",
                link: "",
                lastUpdated: Date.now(),
                items: [
                    {
                        id: "story_gst1",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/GST/2eaabf56-d1f5-4546-ab3b-cb37825275948652463634471945177.jpg",
                        preview: "img/FT-j/GST/2eaabf56-d1f5-4546-ab3b-cb37825275948652463634471945177.jpg",
                        seen: false,
                        time: 1
                    },
                    {
                        id: "story_gst2",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/GST/2fd694a0-3ca5-4d71-9138-54d8b941a8db6174774639952189259.jpg",
                        preview: "img/FT-j/GST/2fd694a0-3ca5-4d71-9138-54d8b941a8db6174774639952189259.jpg",
                        seen: false,
                        time: 2
                    },
                    {
                        id: "story_gst3",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/GST/55587959-6858-4a10-b6ce-d6ea2418624d5840883388166384949.jpg",
                        preview: "img/FT-j/GST/55587959-6858-4a10-b6ce-d6ea2418624d5840883388166384949.jpg",
                        seen: false,
                        time: 3
                    },
                    {
                        id: "story_gst4",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/GST/70ff73f3-cd07-4aef-98c3-ac53515fdfb41370218854847731947.jpg",
                        preview: "img/FT-j/GST/70ff73f3-cd07-4aef-98c3-ac53515fdfb41370218854847731947.jpg",
                        seen: false,
                        time: 4
                    },
                    {
                        id: "story_gst5",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/GST/Captura de tela 2025-08-20 202100.png",
                        preview: "img/FT-j/GST/Captura de tela 2025-08-20 202100.png",
                        seen: false,
                        time: 5
                    },
                    {
                        id: "story_gst6",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/GST/b8ed7bb6-9593-428f-8b5b-b711513d98a28703527165094752579.jpg",
                        preview: "img/FT-j/GST/b8ed7bb6-9593-428f-8b5b-b711513d98a28703527165094752579.jpg",
                        seen: false,
                        time: 6
                    },
                    {
                        id: "story_gst7",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/GST/c2de5d1c-388f-4ce5-b1df-d7c0f9e111be225242639934700960.jpg",
                        preview: "img/FT-j/GST/c2de5d1c-388f-4ce5-b1df-d7c0f9e111be225242639934700960.jpg",
                        seen: false,
                        time: 7
                    },
                    {
                        id: "story_gst8",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/GST/d21499c7-c0ad-46df-b117-d6bf875267aa9140698833016099214.jpg",
                        preview: "img/FT-j/GST/d21499c7-c0ad-46df-b117-d6bf875267aa9140698833016099214.jpg",
                        seen: false,
                        time: 8
                    },
                    {
                        id: "story_gst9",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/GST/e3557100-f478-496e-aeea-463524e9dbc18211792353731411804.jpg",
                        preview: "img/FT-j/GST/e3557100-f478-496e-aeea-463524e9dbc18211792353731411804.jpg",
                        seen: false,
                        time: 9
                    }
                ]
            },
            {
                id: "user5",
                photo: "img/FT-j/VOLEI/389816d5-2e7a-4701-b263-8029668ba1966445738542335640520.jpg",
                name: "Sacuda",
                link: "",
                lastUpdated: Date.now(),
                items: [
                    {
                        id: "story_volei1",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/VOLEI/24b8c7a3-f52f-4256-b9f1-7d34b10db1002543462075273258270.jpg",
                        preview: "img/FT-j/VOLEI/24b8c7a3-f52f-4256-b9f1-7d34b10db1002543462075273258270.jpg",
                        seen: false,
                        time: 1
                    },
                    {
                        id: "story_volei2",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/VOLEI/389816d5-2e7a-4701-b263-8029668ba1966445738542335640520.jpg",
                        preview: "img/FT-j/VOLEI/389816d5-2e7a-4701-b263-8029668ba1966445738542335640520.jpg",
                        seen: false,
                        time: 2
                    },
                    {
                        id: "story_volei3",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/VOLEI/4372c46a-0401-4795-8c12-b66f2197662d6608622511016618242.jpg",
                        preview: "img/FT-j/VOLEI/4372c46a-0401-4795-8c12-b66f2197662d6608622511016618242.jpg",
                        seen: false,
                        time: 3
                    },
                    {
                        id: "story_volei4",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/VOLEI/5134b757-dcd5-414f-a6b6-7d443efff2983750609110579973911.jpg",
                        preview: "img/FT-j/VOLEI/5134b757-dcd5-414f-a6b6-7d443efff2983750609110579973911.jpg",
                        seen: false,
                        time: 4
                    },
                    {
                        id: "story_volei5",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/VOLEI/69ad9f60-fbd7-4c5a-8ddb-eb24b027e5106818482768252134965.jpg",
                        preview: "img/FT-j/VOLEI/69ad9f60-fbd7-4c5a-8ddb-eb24b027e5106818482768252134965.jpg",
                        seen: false,
                        time: 5
                    },
                    {
                        id: "story_volei6",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/VOLEI/82deb1a2-740c-46f3-bc21-032657bb5aaa4149020813303645124.jpg",
                        preview: "img/FT-j/VOLEI/82deb1a2-740c-46f3-bc21-032657bb5aaa4149020813303645124.jpg",
                        seen: false,
                        time: 6
                    },
                    {
                        id: "story_volei7",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/VOLEI/9ace9c79-4499-45c6-bd50-ee647b720ad48949625011650013730.jpg",
                        preview: "img/FT-j/VOLEI/9ace9c79-4499-45c6-bd50-ee647b720ad48949625011650013730.jpg",
                        seen: false,
                        time: 7
                    },
                    {
                        id: "story_volei8",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/VOLEI/a3561dc3-d754-43f7-a3ec-a8fe9d36f24e7907803749619475584.jpg",
                        preview: "img/FT-j/VOLEI/a3561dc3-d754-43f7-a3ec-a8fe9d36f24e7907803749619475584.jpg",
                        seen: false,
                        time: 8
                    }
                ]
            },
            {
                id: "user6",
                photo: "img/FT-j/ZOI/zoim.jpg",
                name: "Zoim bunitu",
                link: "",
                lastUpdated: Date.now(),
                items: [
                    {
                        id: "story_zoi1",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ZOI/2e12f420-8349-4a75-9dd0-b56424a2ac438234815150817513991.jpg",
                        preview: "img/FT-j/ZOI/2e12f420-8349-4a75-9dd0-b56424a2ac438234815150817513991.jpg",
                        seen: false,
                        time: 1
                    },
                    {
                        id: "story_zoi2",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ZOI/32d6ac11-9e1a-4c9f-b65f-230cdea407d67179380013111284766.jpg",
                        preview: "img/FT-j/ZOI/32d6ac11-9e1a-4c9f-b65f-230cdea407d67179380013111284766.jpg",
                        seen: false,
                        time: 2
                    },
                    {
                        id: "story_zoi3",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ZOI/5d6bb140-7198-4145-b324-ef42d1567bcf7946567242300935341.jpg",
                        preview: "img/FT-j/ZOI/5d6bb140-7198-4145-b324-ef42d1567bcf7946567242300935341.jpg",
                        seen: false,
                        time: 3
                    },
                    {
                        id: "story_zoi4",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ZOI/66067aec-d9c3-4c1e-b3f7-7912dc98e52d4264254556821589737.jpg",
                        preview: "img/FT-j/ZOI/66067aec-d9c3-4c1e-b3f7-7912dc98e52d4264254556821589737.jpg",
                        seen: false,
                        time: 4
                    },
                    {
                        id: "story_zoi5",
                        type: "photo",
                        length: 5,
                        src: "img/FT-j/ZOI/78e31e09-7038-41ac-bc01-5f62834164144193280158278638639.jpg",
                        preview: "img/FT-j/ZOI/78e31e09-7038-41ac-bc01-5f62834164144193280158278638639.jpg",
                        seen: false,
                        time: 5
                    }
                ]
            }
        ]
    });
    // });
    // });

    // Removido código não utilizado

}

// Removidas funções não utilizadas
function fecharMensagem() {
    const mensagem = document.getElementById('mensagem-bemvindo');
    mensagem.style.opacity = '0'; // Inicia a transição para invisível
    setTimeout(() => {
        mensagem.style.display = 'none'; // Remove do fluxo após a transição
    }, 500); // Tempo deve corresponder à transição (3 segundos)
}
// Função para criar e animar corações e flores
function criarElementosAnimados() {
    const elementosContainer = document.querySelector('.elementos-animados');
    elementosContainer.classList.add('mostrar');
    
    // Símbolos para corações e flores
    const coracoes = ['❤️', '💕', '💖', '💗', '💓','💙' ];
    const flores = ['🌸', '🌺', '🌻', '🌹'];
    
    // Limpa o container antes de adicionar novos elementos
    elementosContainer.innerHTML = '';
    
    // Variável para controlar o loop
    let loopCount = 0;
    const maxLoops = 8; // 8 loops x 5 segundos = 40 segundos aproximadamente
    const loopInterval = 5100; // 5 segundos por loop
    
    // Função para criar um conjunto de elementos
    function criarConjuntoElementos() {
        // Limpa os elementos anteriores para evitar sobrecarga
        elementosContainer.innerHTML = '';
        
        // Cria apenas 20 elementos por vez para melhorar o desempenho
        for (let i = 0; i < 20; i++) {
            // Decide se é coração ou flor
            const tipo = Math.random() > 0.5 ? 'coracao' : 'flor';
            const simbolos = tipo === 'coracao' ? coracoes : flores;
            
            // Cria o elemento
            const elemento = document.createElement('div');
            // Usa a classe correta para animação (coracao1 ou flor)
            elemento.className = tipo === 'coracao' ? 'coracao1' : 'flor';
            elemento.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
            
            // Posição horizontal aleatória
            elemento.style.left = Math.random() * 100 + '%';
            
            // Atraso aleatório para a animação, mas não muito longo
            elemento.style.animationDelay = (Math.random() * 2) + 's';
            
            // Tamanho aleatório, mas limitado para melhor desempenho
            const tamanho = Math.random() * 1.5 + 0.8; // Entre 0.8 e 2.3
            elemento.style.fontSize = (24 * tamanho) + 'px';
            
            // Adiciona ao container
            elementosContainer.appendChild(elemento);
        }
        
        loopCount++;
        
        // Continua o loop até atingir o tempo máximo (40 segundos)
        if (loopCount < maxLoops) {
            setTimeout(criarConjuntoElementos, loopInterval);
        } else {
            // Finaliza a animação após 40 segundos
            setTimeout(function() {
                elementosContainer.classList.remove('mostrar');
                // Limpa o container após a animação
                setTimeout(function() {
                    elementosContainer.innerHTML = '';
                }, 500);
            }, loopInterval);
        }
    }
    
    // Inicia o primeiro conjunto de elementos
    criarConjuntoElementos();
}

// Variáveis de estado globais para melhor performance
let tocando = false;
let imgPretaAberta = false;
let icone, container, audio, imgPreta, imgPretaContainer, fecharImgPreta;

// Inicializa os elementos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    // Inicializa os elementos uma única vez para melhor performance
    icone = document.getElementById('icone-gif');
    container = icone.parentElement.parentElement; // Container é o avô do ícone
    audio = document.getElementById('audio-animado');
    imgPreta = document.querySelector('.img-preta');
    imgPretaContainer = document.querySelector('.img-preta-container');
    fecharImgPreta = document.querySelector('.fechar-img-preta');
    
    // Define o caminho do arquivo de áudio
    audio.src = 'img/Belo - Reinventar (Áudio Oficial).mp3';
    
    // Função para fechar a imagem preta - otimizada para ser mais rápida
    function fecharImagemPreta() {
        // Remove a classe renderizada imediatamente para esconder o botão de fechar
        imgPretaContainer.classList.remove('renderizada');
        
        // Adiciona a classe de encolhimento imediatamente
        imgPreta.classList.add('encolhendo');
        imgPreta.classList.remove('crescer');
        
        // Aguarda apenas o tempo necessário para a animação de encolhimento
        setTimeout(function() {
            // Remove todas as classes de animação de uma vez
            imgPreta.classList.remove('pre-crescer');
            imgPreta.classList.remove('encolhendo');
            imgPretaContainer.classList.remove('mostrar');
            imgPretaAberta = false;
        }, 700); // Tempo reduzido para apenas 500ms
    }
    
    // Adiciona evento de clique ao botão X
    fecharImgPreta.addEventListener('click', function(e) {
        e.stopPropagation(); // Impede que o clique se propague para elementos pai
        fecharImagemPreta();
       
        const destino = document.getElementById('destino');
        const inicio = window.scrollY;
        const fim = destino.getBoundingClientRect().top + window.scrollY;
        const duracao = 4090; // Duração em milissegundos (1 segundo, ajuste para mais lento, ex.: 2000 para 2 segundos)
        let inicioTempo = null;
        function animarScroll(tempoAtual) {
            if (!inicioTempo) inicioTempo = tempoAtual;
            const progresso = Math.min((tempoAtual - inicioTempo) / duracao, 1);
            window.scrollTo(0, inicio + (fim - inicio) * progresso);
            if (progresso < 1) {
            requestAnimationFrame(animarScroll);
            }
        }

        requestAnimationFrame(animarScroll);

        
    });
    
    icone.addEventListener('click', function () {
        // Se a imagem preta estiver aberta, feche-a imediatamente
        if (imgPretaAberta) {
            fecharImagemPreta();
            audio.pause();
            
            // Reduzir o ícone mais rapidamente
            setTimeout(function() {
                icone.classList.remove('crescendo');
                container.classList.remove('crescendo');
            }, 300); // Tempo reduzido drasticamente
            
            tocando = false;
            return;
        }
        
        if (!tocando) {
            // Se não estiver tocando, inicia a reprodução e adiciona as classes
            audio.play();
            icone.classList.add('crescendo');
            container.classList.add('crescendo');
            tocando = true;
            
            // Mostra a imagem preta mais rapidamente
            setTimeout(function() {
                // Torna a imagem visível e inicia a animação de crescimento
                imgPretaContainer.classList.add('mostrar');
                imgPreta.classList.add('pre-crescer');
                
                // Força um reflow e adiciona a classe de crescimento imediatamente
                void imgPreta.offsetWidth;
                imgPreta.classList.add('crescer');
                imgPretaAberta = true;
                
                // Chama a função para criar e animar corações e flores
                criarElementosAnimados();
                // Adiciona a classe 'renderizada' após um tempo reduzido
                setTimeout(function() {
                    imgPretaContainer.classList.add('renderizada');
                }, 5000); // Tempo para aparecer botão x
            }, 1000); // Tempo reduzido

        } else {
            // Se estiver tocando, pausa a reprodução
            audio.pause();
            fecharImagemPreta();
            
            // Reduzir o ícone mais rapidamente
            setTimeout(function() {
                icone.classList.remove('crescendo');
                container.classList.remove('crescendo');
            }, 300); // Tempo reduzido drasticamente
            
            tocando = false;
        }
    });
});
