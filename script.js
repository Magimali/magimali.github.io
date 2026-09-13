// ---------- language switcher ----------
const translations = {
  "meta.title": {
    en: "Andrii Chumak - Applied Physics",
    ru: "Andrii Chumak - Прикладная физика",
    uk: "Andrii Chumak - Прикладна фізика"
  },
  "nav.about": { en: "About", ru: "Обо мне", uk: "Про мене" },
  "nav.research": { en: "Research", ru: "Исследования", uk: "Дослідження" },
  "nav.projects": { en: "Projects", ru: "Проекты", uk: "Проєкти" },
  "nav.education": { en: "Education", ru: "Образование", uk: "Освіта" },
  "nav.contact": { en: "Contact", ru: "Контакты", uk: "Контакти" },

  "hero.kicker": {
    en: "Applied Physics - Dublin City University",
    ru: "Прикладная физика - Дублинский городской университет",
    uk: "Прикладна фізика - Дублінський міський університет"
  },
  "hero.lede": {
    en: "Third-year physics student working at the bench end of the subject - vacuum systems, sensors, and the instruments that turn a physical effect into a number. Based in Dublin.",
    ru: "Студент третьего курса физического факультета, которому интереснее всего физика в виде оборудования - вакуумные системы, датчики и приборы, превращающие физический эффект в число. Живу в Дублине.",
    uk: "Студент третього курсу фізики, якому найцікавіша фізика у вигляді обладнання - вакуумні системи, датчики та прилади, що перетворюють фізичний ефект на число. Живу в Дубліні."
  },
  "label.linkedin": { en: "LinkedIn", ru: "LinkedIn", uk: "LinkedIn" },

  "section.about.title": { en: "About", ru: "Обо мне", uk: "Про мене" },
  "about.p1": {
    en: "I'm in my third year of a BSc in Applied Physics at DCU, finishing top of my class with strongest results in nuclear physics, relativity, and electromagnetism. I like physics best when it's in front of me as hardware - a vacuum line that either holds pressure or doesn't, a sensor that either gives clean data or noise.",
    ru: "Я учусь на третьем курсе бакалавриата по прикладной физике в DCU, лучший по успеваемости на курсе, с самыми высокими результатами по ядерной физике, теории относительности и электромагнетизму. Больше всего мне нравится физика, когда она передо мной в виде оборудования - вакуумная линия, которая либо держит давление, либо нет, датчик, который либо даёт чистые данные, либо шум.",
    uk: "Я навчаюся на третьому курсі бакалаврату з прикладної фізики в DCU, найкращий за успішністю на курсі, з найвищими результатами з ядерної фізики, теорії відносності та електромагнетизму. Найбільше мені подобається фізика, коли вона переді мною у вигляді обладнання - вакуумна лінія, яка або тримає тиск, або ні, датчик, який або дає чисті дані, або шум."
  },
  "about.p2": {
    en: "That's what pulled me toward surface science and instrumentation: over the past year I've spent most of my project time building a thermally programmed desorption system from the ground up, alongside a handful of smaller programming and electronics projects made mostly out of curiosity.",
    ru: "Именно это привело меня к физике поверхности и приборостроению: последний год большую часть времени я потратил на создание системы термопрограммируемой десорбции с нуля, а также на несколько небольших проектов по программированию и электронике, сделанных в основном из любопытства.",
    uk: "Саме це привело мене до фізики поверхні та приладобудування: за останній рік більшість часу на проєктах я витратив на створення системи термопрограмованої десорбції з нуля, а також кілька менших проєктів із програмування та електроніки, зроблених здебільшого з цікавості."
  },

  "section.research.title": { en: "Research", ru: "Исследования", uk: "Дослідження" },
  "research.title": {
    en: "Thermally Programmed Desorption System",
    ru: "Система термопрограммируемой десорбции",
    uk: "Система термопрограмованої десорбції"
  },
  "research.meta": {
    en: "Dublin City University &middot; Jan &ndash; May 2026",
    ru: "Дублинский городской университет &middot; янв. - май 2026",
    uk: "Дублінський міський університет &middot; січ. - трав. 2026"
  },
  "research.intro": {
    en: "An undergraduate research project built with a lecturer and a classmate: a working TPD rig for studying how molecules bind to and release from a surface as it's heated on a controlled ramp. I contributed 5&ndash;6 hours a week to the physical build.",
    ru: "Студенческий исследовательский проект, выполненный вместе с преподавателем и одногруппником: работающая установка TPD для изучения того, как молекулы связываются с поверхностью и высвобождаются с неё при контролируемом нагреве. Я уделял физической сборке 5-6 часов в неделю.",
    uk: "Студентський дослідницький проєкт, виконаний разом із викладачем та одногрупником: робоча установка TPD для вивчення того, як молекули зв'язуються з поверхнею та вивільняються з неї під час контрольованого нагрівання. Фізичній збірці я приділяв 5-6 годин на тиждень."
  },
  "research.bullet1": {
    en: "Designed and assembled the vacuum chamber and pumping arrangement",
    ru: "Спроектировал и собрал вакуумную камеру и систему откачки",
    uk: "Спроєктував і зібрав вакуумну камеру та систему відкачування"
  },
  "research.bullet2": {
    en: "Built and tuned the sample heating stage for controlled temperature ramps",
    ru: "Построил и настроил нагревательную ступень для образца для контролируемого нагрева",
    uk: "Побудував і налаштував нагрівальну ступінь для зразка для контрольованого нагрівання"
  },
  "research.bullet3": {
    en: "Took the system through design, assembly, and testing as an ongoing iteration, not a one-shot build",
    ru: "Довёл систему через проектирование, сборку и тестирование как непрерывный процесс, а не разовую сборку",
    uk: "Провів систему через проєктування, збирання й тестування як безперервний процес, а не одноразову збірку"
  },
  "research.note": {
    en: "A TPD spectrum - desorption rate plotted against temperature - is sketched above: each peak marks a binding site releasing its molecules at a characteristic temperature.",
    ru: "Спектр TPD - скорость десорбции в зависимости от температуры - показан выше: каждый пик отмечает место связывания, высвобождающее молекулы при характерной температуре.",
    uk: "Спектр TPD - швидкість десорбції залежно від температури - показано вище: кожен пік позначає місце зв'язування, що вивільняє молекули за характерної температури."
  },

  "section.projects.title": { en: "Projects", ru: "Проекты", uk: "Проєкти" },
  "proj1.title": {
    en: "Magnetic field &amp; gravity analyser",
    ru: "Анализатор магнитного поля и силы тяжести",
    uk: "Аналізатор магнітного поля та сили тяжіння"
  },
  "proj1.desc": {
    en: "A program that reads data from a magnetic sensor mounted on a swinging pendulum, then separates and plots the magnetic and gravitational contributions to its motion.",
    ru: "Программа, считывающая данные с магнитного датчика, установленного на качающемся маятнике, а затем разделяющая и отображающая магнитный и гравитационный вклады в его движение.",
    uk: "Програма, що зчитує дані з магнітного датчика, встановленого на маятнику, який гойдається, а потім розділяє та відображає магнітний і гравітаційний внески в його рух."
  },
  "proj1.stat": {
    en: '<span class="stat-num">90%</span> measurement accuracy against expected values',
    ru: '<span class="stat-num">90%</span> точность измерений относительно ожидаемых значений',
    uk: '<span class="stat-num">90%</span> точність вимірювань відносно очікуваних значень'
  },
  "proj2.title": {
    en: "Periodic table memorisation game",
    ru: "Игра для запоминания периодической таблицы",
    uk: "Гра для запам'ятовування періодичної таблиці"
  },
  "proj2.desc": {
    en: "Built with a small team for a hackathon: a Python game for drilling element names, symbols, and positions until they're automatic.",
    ru: "Создана с небольшой командой на хакатоне: игра на Python для отработки названий, символов и положений элементов до автоматизма.",
    uk: "Створена з невеликою командою на хакатоні: гра на Python для відпрацювання назв, символів і положень елементів до автоматизму."
  },
  "proj2.stat": {
    en: '<span class="stat-num">15</span> players at the hackathon &middot; <span class="stat-num">80/100</span> project grade &middot; <span class="stat-num">20%</span> faster learning in testing',
    ru: '<span class="stat-num">15</span> игроков на хакатоне &middot; <span class="stat-num">80/100</span> баллов за проект &middot; <span class="stat-num">20%</span> ускорение обучения при тестировании',
    uk: '<span class="stat-num">15</span> гравців на хакатоні &middot; <span class="stat-num">80/100</span> балів за проєкт &middot; <span class="stat-num">20%</span> пришвидшення навчання під час тестування'
  },
  "proj3.title": { en: "Equation solver", ru: "Решатель уравнений", uk: "Розв'язувач рівнянь" },
  "proj3.desc": {
    en: "A small calculator that solves five categories of high-school-level equations - built to be genuinely useful rather than a coursework exercise.",
    ru: "Небольшой калькулятор, решающий пять типов уравнений школьного уровня - сделан так, чтобы быть по-настоящему полезным, а не просто учебным упражнением.",
    uk: "Невеликий калькулятор, що розв'язує п'ять типів рівнянь шкільного рівня - зроблений так, щоб бути справді корисним, а не просто навчальною вправою."
  },
  "proj3.stat": {
    en: '<span class="stat-num">&euro;30</span> raised in voluntary donations from people who used it',
    ru: '<span class="stat-num">&euro;30</span> собрано в виде добровольных пожертвований от людей, которые им пользовались',
    uk: '<span class="stat-num">&euro;30</span> зібрано у вигляді добровільних пожертв від людей, які ним користувалися'
  },
  "proj4.title": {
    en: "VLF radio antenna",
    ru: "Антенна для приёма ОНЧ-радиоволн",
    uk: "Антена для приймання ДНЧ-радіохвиль"
  },
  "proj4.desc": {
    en: "Built an antenna to pick up very-low-frequency radio waves linked to solar activity, along with the receiver circuit and the software used to analyse the collected data.",
    ru: "Построил антенну для приёма радиоволн диапазона ОНЧ (сверхдлинные волны), связанных с солнечной активностью, а также схему приёмника и программное обеспечение для анализа собранных данных.",
    uk: "Побудував антену для приймання радіохвиль діапазону ДНЧ (наддовгі хвилі), пов'язаних із сонячною активністю, а також схему приймача та програмне забезпечення для аналізу зібраних даних."
  },

  "section.education.title": { en: "Education", ru: "Образование", uk: "Освіта" },
  "edu.degree": {
    en: "BSc Applied Physics - 3rd year",
    ru: "Бакалавриат по прикладной физике - 3 курс",
    uk: "Бакалаврат з прикладної фізики - 3 курс"
  },
  "edu.overall": {
    en: 'Overall grade so far: <span class="mono">H1.1</span>',
    ru: 'Текущая общая оценка: <span class="mono">H1.1</span>',
    uk: 'Поточна загальна оцінка: <span class="mono">H1.1</span>'
  },
  "edu.caption": {
    en: "Previous year results, highest first",
    ru: "Результаты предыдущего курса, от наивысшего к наименьшему",
    uk: "Результати попереднього курсу, від найвищого до найнижчого"
  },
  "edu.th.subject": { en: "Subject", ru: "Предмет", uk: "Предмет" },
  "edu.th.result": { en: "Result", ru: "Результат", uk: "Результат" },
  "edu.subj.1": { en: "Nuclear Physics and Relativity", ru: "Ядерная физика и теория относительности", uk: "Ядерна фізика та теорія відносності" },
  "edu.subj.2": { en: "Electromagnetism", ru: "Электромагнетизм", uk: "Електромагнетизм" },
  "edu.subj.3": { en: "Solid State Physics I", ru: "Физика твёрдого тела I", uk: "Фізика твердого тіла I" },
  "edu.subj.4": { en: "Digital and Analogue Electronics", ru: "Цифровая и аналоговая электроника", uk: "Цифрова та аналогова електроніка" },
  "edu.subj.5": { en: "Physics Laboratory IV (AP)", ru: "Физический практикум IV (AP)", uk: "Фізичний практикум IV (AP)" },
  "edu.subj.6": { en: "Classical Mechanics", ru: "Классическая механика", uk: "Класична механіка" },
  "edu.subj.7": { en: "Calculus of Several Variables &amp; Fourier Analysis", ru: "Исчисление функций нескольких переменных и анализ Фурье", uk: "Числення функцій кількох змінних та аналіз Фур'є" },
  "edu.subj.8": { en: "Linear Algebra", ru: "Линейная алгебра", uk: "Лінійна алгебра" },
  "edu.subj.9": { en: "Quantum Physics", ru: "Квантовая физика", uk: "Квантова фізика" },
  "edu.subj.10": { en: "Physics of Renewable Energy", ru: "Физика возобновляемой энергии", uk: "Фізика відновлюваної енергії" },
  "edu.subj.11": { en: "Advanced Programming", ru: "Продвинутое программирование", uk: "Просунуте програмування" },
  "edu.subj.12": { en: "Physics Laboratory III", ru: "Физический практикум III", uk: "Фізичний практикум III" },
  "edu.secondary.title": { en: "Secondary school", ru: "Среднее образование", uk: "Середня освіта" },
  "edu.secondary.p": {
    en: 'Leaving Certificate, CAO points: <span class="mono">511</span>. Higher level in Russian, Chemistry, and Maths.',
    ru: 'Аттестат о среднем образовании (Leaving Certificate), баллы CAO: <span class="mono">511</span>. Повышенный уровень по русскому языку, химии и математике.',
    uk: 'Атестат про середню освіту (Leaving Certificate), бали CAO: <span class="mono">511</span>. Підвищений рівень з російської мови, хімії та математики.'
  },

  "section.skills.title": { en: "Skills &amp; languages", ru: "Навыки и языки", uk: "Навички та мови" },
  "skills.lab.title": { en: "Laboratory &amp; instrumentation", ru: "Лабораторные и приборные навыки", uk: "Лабораторні та приладові навички" },
  "skills.lab.1": { en: "Precision mechanical, electrical, and optical measurement", ru: "Точные механические, электрические и оптические измерения", uk: "Точні механічні, електричні та оптичні вимірювання" },
  "skills.lab.2": { en: "Arduino-based electronic prototyping", ru: "Прототипирование электроники на базе Arduino", uk: "Прототипування електроніки на базі Arduino" },
  "skills.lab.3": { en: "Reading and working with electronic schematics", ru: "Чтение и работа с электронными схемами", uk: "Читання електронних схем і робота з ними" },
  "skills.lab.4": { en: "Measurement uncertainty analysis", ru: "Анализ погрешности измерений", uk: "Аналіз похибки вимірювань" },
  "skills.lab.5": { en: "Technical writing", ru: "Техническое письмо", uk: "Технічне письмо" },
  "skills.compute.title": { en: "Computation &amp; data", ru: "Вычисления и данные", uk: "Обчислення та дані" },
  "skills.compute.1": { en: "Python - NumPy, SciPy, Matplotlib (intermediate)", ru: "Python - NumPy, SciPy, Matplotlib (средний уровень)", uk: "Python - NumPy, SciPy, Matplotlib (середній рівень)" },
  "skills.compute.2": { en: "C (basic)", ru: "C (базовый уровень)", uk: "C (базовий рівень)" },
  "skills.compute.3": { en: "Microsoft Excel (proficient), wider Office suite", ru: "Microsoft Excel (уверенное владение), остальные приложения Office", uk: "Microsoft Excel (впевнене володіння), інші застосунки Office" },
  "skills.compute.4": { en: "Data analysis and visualisation", ru: "Анализ и визуализация данных", uk: "Аналіз і візуалізація даних" },
  "skills.lang.title": { en: "Languages", ru: "Языки", uk: "Мови" },
  "skills.lang.1": { en: "English - C1", ru: "Английский - C1", uk: "Англійська - C1" },
  "skills.lang.2": { en: "Russian - fluent", ru: "Русский - свободно", uk: "Російська - вільно" },
  "skills.lang.3": { en: "Ukrainian - fluent", ru: "Украинский - свободно", uk: "Українська - вільно" },

  "section.beyond.title": { en: "Beyond the lab", ru: "Вне лаборатории", uk: "Поза лабораторією" },
  "beyond.p": {
    en: "Member of the DCU German Society. I build things with wood over the summer - including an electric guitar from scratch, which I play regularly - and read into the history of religion and philosophy in the gaps. I train MMA and lift most weeks, and enjoy helping friends work out their own training and diet plans.",
    ru: "Состою в немецком клубе DCU (DCU German Society). Летом делаю вещи из дерева - в том числе собрал электрогитару с нуля, на которой регулярно играю - а в свободное время изучаю историю религии и философии. Занимаюсь ММА и хожу в зал большинство недель, люблю помогать друзьям составлять программы тренировок и питания.",
    uk: "Член німецького товариства DCU (DCU German Society). Влітку майструю з дерева - зокрема зібрав електрогітару з нуля, на якій регулярно граю - а у вільний час вивчаю історію релігії та філософії. Тренуюся з ММА та відвідую спортзал більшість тижнів, люблю допомагати друзям складати програми тренувань і харчування."
  },

  "section.contact.title": { en: "Get in touch", ru: "Связаться со мной", uk: "Зв'язатися" },
  "contact.p": {
    en: "Open to research placements, internships, and conversations about experimental physics - reach out any time.",
    ru: "Открыт к исследовательским стажировкам, практикам и разговорам об экспериментальной физике - пишите в любое время.",
    uk: "Відкритий до дослідницьких стажувань, практик і розмов про експериментальну фізику - пишіть у будь-який час."
  },

  "footer.text": {
    en: "Andrii Chumak &middot; Dublin, Ireland",
    ru: "Andrii Chumak &middot; Дублин, Ирландия",
    uk: "Andrii Chumak &middot; Дублін, Ірландія"
  }
};

const STORAGE_KEY = "site-lang";

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = translations[key];
    if (entry && entry[lang] !== undefined) {
      el.innerHTML = entry[lang];
    }
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* localStorage unavailable - language just won't persist */
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let initialLang = "en";
  try {
    initialLang = window.localStorage.getItem(STORAGE_KEY) || "en";
  } catch (e) {
    /* ignore */
  }
  if (initialLang !== "en") applyLanguage(initialLang);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  // ---------- nav highlighting on scroll ----------
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");
  if (!sections.length || !navLinks.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.style.color = isActive ? "var(--teal-deep)" : "";
      link.style.borderBottomColor = isActive ? "var(--teal)" : "transparent";
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
});
