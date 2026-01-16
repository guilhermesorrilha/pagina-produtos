const produtos = [{
    'URL da imagem': 'https://http2.mlstatic.com/D_Q_NP_2X_945793-MLA99480417312_112025-E.webp',
    'Título': 'Bluetooth 5.3 multiponto Headphone com 2 mic Cor Cinza 60h bateria graves profundos áudio Hi‑Res 22 EQ e personalização conforto dobrável chamadas claras almofadas destacáveis Soundcore by Anker Q11i', 
    'Preço': 'R$ 238,90'
}, 

{
    'URL da imagem': 'https://http2.mlstatic.com/D_Q_NP_2X_745941-MLA99462530008_112025-E.webp',
    'Título': 'Fone de Ouvido Sem Fio para Treinos Soundcore by Anker Sport X20 ANC adaptativo 3.0 Ganchos Ajustáveis Graves Intensos IP68 À Prova de Suor e Poeira 48H de Reprodução Fones para Academia Cor Preto',
    'Preço': 'R$ 484,51'
}, 

{
    'URL da imagem': 'https://http2.mlstatic.com/D_Q_NP_2X_615262-MLA95643567756_102025-E.webp',
    'Título': 'Headset Bluetooth Redução De Ruído Do Anc Com Microfone Enc(Chamada Hd Bluetooth), Fone Bluetooth Gamer, Bateria 30 Horas, Hifi Chamadas Por Bluetooth, Cor Branco Basike Ba-FON113',
    'Preço': 'R$ 163,93'
}, 

{
    'URL da imagem': 'https://http2.mlstatic.com/D_Q_NP_2X_745941-MLA99462530008_112025-E.webp',
    'Título': 'Headset Bluetooth Redução De Ruído Do Anc Hifi Com Microfone Cor Rosa',
    'Preço': 'R$ 157,00'
}, 

{
    'URL da imagem': 'https://http2.mlstatic.com/D_Q_NP_2X_882187-MLA99447181894_112025-E.webp',
    'Título': 'Fone De Ouvido Gamer Sem Fio Bluetooth Tws Kaidi Kd 775 Cor Preto Cor',
    'Preço': 'R$ 65,08'
}, 

{
    'URL da imagem': 'https://http2.mlstatic.com/D_Q_NP_2X_730568-MLA99983575997_112025-E.webp',
    'Título': 'Fone De Ouvido Soundcore by Anker P20i Graves Poderosos e Impactantes Bluetooth 5.3 30H de Reprodução Resistência à Água 2 Mics IA para Chamadas Claras Personalização de Som via App Cor Preto',
    'Preço': 'R$ 166,19'
}, 

{
    'URL da imagem': 'https://http2.mlstatic.com/D_Q_NP_2X_880446-MLB99140766959_112025-E.webp',
    'Título': 'Suporte Mesa Fone De Ouvido 4 Headset Gammer Moderno',
    'Preço': 'R$ 24,90'
}, 

{
    'URL da imagem': 'https://http2.mlstatic.com/D_Q_NP_2X_953161-MLA96155776777_102025-E.webp',
    'Título': 'Headset Fone Jabra Evolve 20 Stereo Ms 4999823109 Usb Cor Black',
    'Preço': 'R$ 297,91'
}, 

{
    'URL da imagem': 'https://http2.mlstatic.com/D_Q_NP_2X_886763-MLA99490060806_112025-E.webp',
    'Título': "Basike Fone De Ouvido Sem Fio Esportivo Bluetooth5.4 TWS, Corrida Gancho, à prova d'água, Com Gan, Tela LED Dupla, Suporta chamadas de voz, adequadas para Android e IOS, Cor Preto",
    'Preço': 'R$ 160,00'
}]

function carregarProdutos() {
    const container = document.querySelector('.cards');

    container.innerHTML = '';

    produtos.forEach(produto => {
        const cardHTML = `
            <div>
                <img class="produtos" src="${produto['URL da imagem']}" alt="${produto['Título']}">
                <h5>${produto['Título']}</h5>
                <h3>${produto['Preço']}</h3>
            </div>
        `;

        container.innerHTML += cardHTML
    });
}

carregarProdutos();

