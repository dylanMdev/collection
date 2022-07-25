const collection = [
    {
        name: 'FiveM',
        pictureURL: 'https://uploads-ssl.webflow.com/61b13586ef55e1de26918f6a/61c8eae452103b76d1647f39_FiveM-Symbole.jpg',
        platform: ['Playstation', 'PC' ,'Xbox'],
        languages: ['English', 'Français', 'Toutes Langues'],
        genre: ['Action', 'Vie réél'],
        developper: ' NTAuthority',
        released: '09 Novembre, 2015',
        description: 'FiveM offre donc la possibilité de jouer à GTA V sur des serveurs alternatifs, des mods y sont installés afin de rendre l expérience multijoueur plus avancée. Le mod roleplay a récemment fait son apparition et l engouement est plus que présent, notamment à lépoque, avec le serveur Faily V sur lequel de nombreux créateurs de contenu sont passés, permettant à ce dernier de devenir le premier serveur roleplay francophone mais également le plus complet de FiveM.',
    },
    {
        name: 'Microsoft Flight Simulator',
        pictureURL: 'https://media.s-bol.com/myRKEQ4NEwqE/550x715.jpg',
        platform: ['Playstation', 'PC', 'Xbox'],
        languages: ['English', 'French', 'Italian'],
        genre: ['Jeux de compagnie'],
        developper: 'Bruce Artwick',
        released: '12 septembre 2000',
        description: 'Flight Simulator est un logiciel de simulation de vol pour Microsoft Windows, vendu et souvent vu comme un jeu vidéo. Le programme Flight Simulator a été développé par Bruce Artwick à partir de 1977; sa société SubLogic le vendait pour divers ordinateurs personnels. En 1982, la société d Artwick accorda une licence de développement à Microsoft pour l IBM PC qui fut commercialisée sous le nom de Microsoft Flight Simulator 1.00. Le directeur général de Microsoft, Bill Gates, était fasciné par le roman Vol de nuit d Antoine de Saint-Exupéry, qui racontait avec beaucoup de détails la sensation de voler dans un petit avion. Microsoft Flight Simulator, précédant Windows de trois ans, est l un des premiers logiciels diffusés par Microsoft, mais diffère de ses autres logiciels, plus orientés business.',
    },
    {
        name: 'Rocket League',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg',
        platform: ['Playstation', 'PlayStation 3', 'Téléphone', 'PS Vita', 'PlayStation 4'],
        languages: ['English', 'French', 'German','Dutch'],
        genre: ['Racing', 'Multijoueurs'],
        developper: 'Psyonix',
        released: '7 juillet 2015',
        description: 'Deux équipes, composées de un à quatre joueurs conduisant des véhicules, s affrontent au cours d un match afin de frapper un ballon et de marquer dans le but adverse. Les voitures sont équipées de propulseurs (boost) et peuvent sauter, permettant de jouer le ballon dans les airs. Des mises à jour du jeu incluent également d autres modes de jeu, se rapprochant du basket-ball ou du hockey sur glace.',
    },
    {
        name: 'Prison Simulator',
        pictureURL: 'https://static.wixstatic.com/media/b50ef1_6936e5a852874d4abc615e38c6ba3ace~mv2.jpg/v1/fit/w_616%2Ch_353%2Cal_c%2Cq_80/file.jpg',
        platform: ['Android', 'iOS', 'Windows'],
        languages: ['English', 'French'],
        developper: 'Baked Games',
        genre: ['Action' , 'Amusement'],
        released: '31 mars 2021',
        description: 'Goûtez à la vie carcérale ! Devenez gardien de prison et traitez avec des condamnés dangereux. Gestion de la prison, beaucoup d activités quotidiennes. Deviendrez-vous le meilleur gardien de l histoire ? Ou peut-être deviendrez-vous le pire salaud que cette prison ait jamais vu ?',
    },
    {
        name: 'FIFA 22',
        pictureURL: 'https://media.s-bol.com/7WLDQkGw54Pr/W7ErEjv/550x685.jpg',
        platform: ['PlayStation 4', 'PlayStation 5', 'Windows', 'Xbox'],
        languages: ['English', 'French', 'German', 'Portuguese', 'Italian'],
        developper: ' EA Romania, EA Vancouver',
        genre: ['Amusement', 'Multijoueur'],
        released: '27 septembre 2021',
        description: 'FIFA 22 est un jeu vidéo de simulation de football publié par Electronics Arts . Il s agit du 29e volet de cette série FIFA. Il est sorti sur Microsoft Windows, Nintendo Switch, Play Station 4, PlayStation 5 et Google Stadia le 1er octobre 20211,2,3.',

    },
    {
        name: 'Minecraft',
        pictureURL: 'https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg',
        platform: ['Windows', 'PlayStation 3', 'Xbox'],
        languages: ['English', 'French'],
        developper: 'Markus Persson',
        genre: ['Survie', 'Multijoueurs'],
        released: '18 novembre 2011',
        description: 'Minecraft est un jeu vidéo de type aventure « bac à sable » (construction complètement libre) développé par le Suédois Markus Persson, alias Notch, puis par la société Mojang Studios. Il s agit d un univers composé de voxels et généré de façon procédurale, qui intègre un système d artisanat axé sur l exploitation puis la transformation de ressources naturelles (minéralogiques, fossiles, animales et végétales).',
    },
];

let lookGenre = (element) => {
    let content = '';
    for(let genre of element.genre)
    {
        content = `${content}
        <div class="card-genre-sub ${genre.toLowerCase()}">
            <p class="card-sub-content">${genre}</p>
        </div>`;
    }
    return content;
};
let lookDescrpt = (element) => {
    let langString = '';
    let tryFirstElem = 0;
    for(let l of element.languages)
    {
        langString = `${langString}${tryFirstElem == 0 ? '' : ', '}${l}`;
        tryFirstElem++;
    }
    return langString;
};

let container = document.getElementById('card-container');
for(let element of collection)
{
    let section = document.createElement('section');
    section.classList.add('card');
    let htmlContentMain = `
    <div class="card-top">
        <img class="card-background" src="${element.pictureURL}" alt="${element.name}">
    </div>
    <div class="card-bottom">
        <div class="card-description">
            <div class="card-genre">
                ${lookGenre(element)}
            </div>
            <div class="card-description-title">
                <h1 class="card-name">
                    ${element.name}
                </h1>
                <h2 class="card-dev">
                    ${element.developper}
                </h2>
                <p class="card-desc-Content">
                    ${element.description}
                </p>
            </div>
        </div>
        <div class="card-description-footer">
            <div class="card-languages">
                <p><strong>Langagues Supporter: </strong>${lookDescrpt(element)}</p>
            </div>
            <div class="card-release">
                <p><strong class="release-msg">
                    Date de Création:
                </strong>
                <span class="card-msg">
                    ${element.released}
                </span></p>
            </div>
        </div>
    </div>
    `;
    section.innerHTML = htmlContentMain;
    container.appendChild(section);
}