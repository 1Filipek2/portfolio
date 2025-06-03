window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('fade-in');
  }, 400);
  setTimeout(() => {
    const overlay = document.getElementById('black-overlay');
    if (overlay) overlay.style.display = 'none';
  }, 2400);
});

window.toggleSkill = function(el) {
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
    about: `Hi! I'm a developer from Slovakia with a passion for clean code and smart solutions. I focus on low-level programming, networking, and web development. I mainly work with C, C++, HTML, CSS, and PHP, and I'm currently diving deeper into JavaScript. I love learning new tech, contributing to open source, and building efficient, practical tools. Feel free to reach out if you'd like to connect or collaborate!</p>`,
    skills: 'Skills',
    web: `I have a solid grasp of HTML and CSS, and I'm currently learning JavaScript to expand my frontend skills. I also have experience with PHP, where I learned to create and manage databases, as well as write backend scripts for dynamic websites. Over the years, I've worked on various projects, from simple personal pages to more complex web applications. I'm always eager to learn new technologies and improve my workflow.`,
    low: `I focus on programming close to the hardware, where efficiency and control are essential. My main experience is with C and C++, which I use for systems programming, embedded projects, and performance-critical applications. I also have beginner experience with C#, which I’m gradually exploring. I enjoy learning how computers work under the hood and writing code that interacts directly with the operating system or hardware.`,
    linux: `Linux has been my daily driver for more than 4 years, and I’m passionate about open-source software. I’m comfortable working with a variety of distributions, especially RHEL and Fedora Server, where I’ve set up automated deployments and managed server environments. My experience covers configuring web servers like NGINX, working with Docker for containerization, and using command-line tools such as AWK to automate and streamline system tasks. I’m always looking for ways to make systems more efficient, secure, and reliable.`,
    net: `I have a solid understanding of computer networking principles and practical skills. I am familiar with the OSI and TCP/IP models, network protocols (such as Ethernet, IP, TCP, UDP, ARP, ICMP, DNS, DHCP, HTTP, SMTP, FTP), and the basics of network addressing and subnetting (IPv4/IPv6). I understand how routers, switches, and other network devices operate, and I know how to analyze and troubleshoot network communication. My knowledge also includes error detection methods, network topologies, and basic network security concepts. I am comfortable configuring simple networks and working with Linux networking tools.`,
    game: `I enjoy experimenting with game development, mainly using C++. As a semester project, I created a console-based RPG game in C++, where I focused on game logic, turn-based mechanics, and user interaction in the terminal. I'm interested in exploring more advanced frameworks and engines in the future to expand my skills beyond console applications.`
  },
  sk: {
    about: `Ahoj! Som vývojár zo Slovenska. Zameriavam sa najmä na nízkoúrovňové programovanie, siete a web development. Pracujem hlavne s jazykmi C, C++, HTML, CSS a PHP, aktuálne sa viac venujem aj JavaScriptu. Rád vytváram efektívne riešenia, učím sa nové technológie a pracujem s open-source softvérom. Ak sa chceš dozvedieť viac alebo spolupracovať, pokojne ma kontaktuj!`,
    skills: 'Zručnosti',
    web: `Ovládam HTML a CSS, aktuálne sa učím JavaScript, aby som rozšíril svoje frontendové schopnosti. Mám skúsenosti aj s PHP, kde som sa naučil vytvárať a spravovať databázy a písať backendové skripty pre dynamické weby. Pracoval som na rôznych projektoch od jednoduchých stránok až po komplexnejšie webové aplikácie. Neustále sa snažím zlepšovať a učiť nové technológie.`,
    low: `Zameriavam sa na programovanie blízko hardvéru, kde je dôležitá efektivita a kontrola. Najviac skúseností mám s jazykmi C a C++, ktoré používam na systémové programovanie, embedded projekty a výkonnostne náročné aplikácie. Mám aj začiatočnícke skúsenosti s C#, ktorý postupne objavujem. Baví ma skúmať, ako počítače fungujú "pod kapotou" a písať kód, ktorý komunikuje priamo s operačným systémom alebo hardvérom.`,
    linux: `Linux používam ako hlavný operačný systém už viac ako 4 roky a som fanúšikom open-source softvéru. Pracujem s rôznymi distribúciami, najmä RHEL a Fedora Server, kde som nastavoval automatizované nasadzovanie a spravoval serverové prostredia. Mám skúsenosti s konfiguráciou webserverov ako NGINX, nasadzovaním Docker kontajnerov a používaním nástrojov ako AWK na automatizáciu a spracovanie logov. Neustále hľadám spôsoby, ako zefektívniť, zabezpečiť a zlepšiť systémy.`,
    net: `Mám dobré znalosti princípov počítačových sietí aj praktických zručností. Ovládam modely OSI a TCP/IP, sieťové protokoly (napr. Ethernet, IP, TCP, UDP, ARP, ICMP, DNS, DHCP, HTTP, SMTP, FTP) a základy adresovania a subnetovania (IPv4/IPv6). Rozumiem fungovaniu routerov, switchov a ďalších sieťových zariadení, viem analyzovať a riešiť sieťovú komunikáciu. Ovládam aj metódy detekcie chýb, sieťové topológie a základné bezpečnostné koncepty. Viem nakonfigurovať jednoduché siete a pracovať s linuxovými sieťovými nástrojmi.`,
    game: `Rád experimentujem s tvorbou hier, najmä v jazyku C++. Ako semestrálny projekt som vytvoril konzolovú RPG hru v C++, kde som sa zameral na hernú logiku, ťahové mechaniky a interakciu v termináli. Do budúcna by som rád preskúmal aj pokročilejšie frameworky a enginy.`
  }
};

function setLang(lang) {
  document.querySelector('.about p').textContent = translations[lang].about;
  const skillDescs = document.querySelectorAll('.skill-desc');
  const skillTitles = document.querySelectorAll('.skill-title');
  const keys = ['web', 'low', 'linux', 'net', 'game'];
  skillDescs.forEach((desc, i) => desc.textContent = translations[lang][keys[i]]);
  document.getElementById('en-btn').classList.toggle('active', lang === 'en');
  document.getElementById('sk-btn').classList.toggle('active', lang === 'sk');
}

document.getElementById('en-btn').onclick = () => setLang('en');
document.getElementById('sk-btn').onclick = () => setLang('sk');