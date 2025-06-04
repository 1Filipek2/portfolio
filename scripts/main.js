window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('fade-in');
  }, 400);

  setTimeout(() => {
    const overlay = document.getElementById('black-overlay');
    if (overlay) overlay.style.display = 'none';
  }, 2400);
});

window.toggleSkill = function (el) {
  el.classList.toggle('open');
  const desc = el.nextElementSibling;
  if (desc.classList.contains('show')) {
    desc.classList.remove('show');
    desc.classList.add('hide');
  } else {
    desc.classList.remove('hide');
    desc.classList.add('show');
  }
};

const translations = {
  en: {
    about: `Hi! I'm a developer from Slovakia with a passion for clean code and smart solutions. I focus on low-level programming, networking, and web development. I mainly work with C, C++, HTML, CSS, and PHP, and I'm currently diving deeper into JavaScript. I love learning new tech, contributing to open source, and building efficient, practical tools. Feel free to reach out if you'd like to connect or collaborate!`,
    skills: 'Skills',
    web: `I have a solid grasp of HTML and CSS, and I'm currently learning JavaScript to expand my frontend skills. I also have experience with PHP, where I learned to create and manage databases, as well as write backend scripts for dynamic websites. Over the years, I've worked on various projects, from simple personal pages to more complex web applications. I'm always eager to learn new technologies and improve my workflow.`,
    low: `My main experience is with C and C++, which I use for systems programming, embedded projects, and performance-critical applications. I also have beginner experience with C#, which I’m gradually exploring. I enjoy learning how computers work under the hood and writing code that interacts directly with the operating system or hardware.`,
    linux: `Linux has been my daily driver for more than 2 years, and I’m passionate about open-source software. I’m comfortable working with a variety of distributions, especially Fedora Server, where I’ve set up automated deployments and managed server environments. I’m always looking for ways to make systems more efficient, secure, and reliable.`,
    net: `I have a solid grasp of computer networking, including the OSI and TCP/IP models, key protocols (Ethernet, IP, TCP, UDP, DNS, DHCP), and both IPv4 and IPv6 addressing. I can configure and troubleshoot routers, switches, and basic network services on Linux. My skills cover subnetting, routing, VLANs, and essential network security concepts.`,
    game: `I enjoy experimenting with game development, mainly using C++. As a semester project, I created a console-based RPG game in C++, where I focused on game logic, turn-based mechanics, and user interaction in the terminal. I'm interested in exploring more advanced frameworks and engines in the future to expand my skills beyond console applications.`
  },
  sk: {
    about: `Ahoj! Som vývojár zo Slovenska s vášňou pre čistý kód a chytré riešenia. Zameriavam sa na nízkoúrovňové programovanie, siete a web development. Najviac pracujem s jazykmi C, C++, HTML, CSS a PHP, aktuálne sa viac venujem aj JavaScriptu. Rád sa učím nové technológie, prispievam do open source a budujem efektívne, praktické nástroje. Ak chceš nadviazať kontakt alebo spolupracovať, neváhaj ma osloviť!`,
    skills: 'Zručnosti',
    web: `Mám dobré základy v HTML a CSS a momentálne sa učím JavaScript, aby som rozšíril svoje frontendové schopnosti. Mám aj skúsenosti s PHP, kde som sa naučil vytvárať a spravovať databázy a písať backendové skripty pre dynamické weby. Počas rokov som pracoval na rôznych projektoch – od jednoduchých osobných stránok až po komplexnejšie webové aplikácie. Neustále sa snažím učiť nové technológie a zlepšovať svoj workflow.`,
    low: `Moje hlavné skúsenosti sú s jazykmi C a C++, ktoré používam na systémové programovanie, embedded projekty a výkonnostne náročné aplikácie. Mám aj začiatočnícke skúsenosti s C#, ktorý postupne objavujem. Baví ma učiť sa, ako počítače fungujú "pod kapotou" a písať kód, ktorý komunikuje priamo s operačným systémom alebo hardvérom.`,
    linux: `Linux používam ako svoj hlavný operačný systém už viac ako 2 roky a som nadšenec open-source softvéru. Som zvyknutý pracovať s rôznymi distribúciami, najmä s Fedora Serverom, kde som nastavoval automatizované nasadzovanie a spravoval serverové prostredia. Neustále hľadám spôsoby, ako robiť systémy efektívnejšie, bezpečnejšie a spoľahlivejšie.`,
    net: `Mám dobré základy v počítačových sieťach, vrátane modelov OSI a TCP/IP, kľúčových protokolov (Ethernet, IP, TCP, UDP, DNS, DHCP) a adresovania IPv4 aj IPv6. Viem konfigurovať a riešiť problémy so smerovačmi, prepínačmi a základnými sieťovými službami v Linuxe. Ovládam subnetovanie, smerovanie, VLANy a základné koncepty sieťovej bezpečnosti.`,
    game: `Rád experimentujem s tvorbou hier, najmä v jazyku C++. Ako semestrálny projekt som vytvoril konzolovú RPG hru v C++, kde som sa zameral na hernú logiku, ťahové mechaniky a interakciu v termináli. Do budúcna by som rád preskúmal aj pokročilejšie frameworky a enginy, aby som rozšíril svoje schopnosti aj mimo konzolových aplikácií.`
  }
};

function setLang(lang) {
  document.querySelector('.about p').textContent = translations[lang].about;

  const skillDescs = document.querySelectorAll('.skill-desc');
  const skillTitles = document.querySelectorAll('.skill-title');
  const keys = ['web', 'low', 'linux', 'net', 'game'];

  skillDescs.forEach((desc, i) => {
    desc.textContent = translations[lang][keys[i]];
  });

  document.getElementById('en-btn').classList.toggle('active', lang === 'en');
  document.getElementById('sk-btn').classList.toggle('active', lang === 'sk');
}

document.getElementById('en-btn').onclick = () => setLang('en');
document.getElementById('sk-btn').onclick = () => setLang('sk');