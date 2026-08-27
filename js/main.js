const PHONE_E164 = "77475570325";
const PHONE_DISPLAY = "+7 747 557 0325";

const I18N = {
  ru: {
    dir: "ltr",
    title: "MKAJ · Justitia — Международный коммерческий арбитраж",
    brand: "MKAJ",
    brandSub: "Justitia",
    navAbout: "Об арбитраже",
    navDisputes: "Споры",
    navRules: "Регламент",
    navProcedure: "Порядок",
    navClause: "Оговорка",
    navContact: "Контакты",
    kicker: "Постоянно действующий арбитраж · Республика Казахстан",
    h1Lead: "Международный коммерческий арбитраж",
    lead:
      "Гражданско-правовые споры сторон из Казахстана и из-за рубежа рассматриваем при письменном арбитражном соглашении — по Закону Республики Казахстан от 8 апреля 2016 года № 488-V «Об арбитраже».",
    ctaConsult: "Консультация в WhatsApp",
    ctaClause: "Арбитражная оговорка",
    heroCardTitle: "Когда к нам обращаются",
    heroLi1: "Поставка, подряд, дистрибуция и внешнеторговые контракты",
    heroLi2: "Корпоративные и инвестиционные разногласия",
    heroLi3: "Нужно арбитражное решение вне государственного суда",
    aboutKicker: "Об арбитраже",
    aboutTitle: "Не суд, а арбитраж по соглашению сторон",
    aboutLead:
      "MKAJ — постоянно действующий арбитраж Justitia. Мы не входим в судебную систему Республики Казахстан. Спор передаётся только при письменном арбитражном соглашении. Регламент, если стороны не договорились об ином, становится частью этого соглашения.",
    card1Title: "Независимость",
    card1Text:
      "Не суд судебной системы РК и не государственный орган. Арбитры независимы; вмешательство в их деятельность недопустимо, кроме случаев, прямо указанных в Законе «Об арбитраже».",
    card2Title: "Конфиденциальность",
    card2Text:
      "Сведения из разбирательства не разглашаются без согласия сторон. Арбитражные решения публикуются только при таком согласии — так требует статья 16 Закона.",
    card3Title: "Исполнимость",
    card3Text:
      "В Казахстане решение исполняется по главе 7 Закона. За рубежом признание зависит от Нью-Йоркской конвенции 1958 года, места арбитража и права страны исполнения — гарантии «везде» закон не даёт.",
    law1Title: "Закон «Об арбитраже»",
    law1Text:
      "Закон Республики Казахстан от 8 апреля 2016 года № 488-V регулирует и внутренние, и международные споры из гражданско-правовых отношений. Отдельного «статуса международного коммерческого арбитража» закон не создаёт: достаточно постоянно действующего арбитража и письменного соглашения сторон.",
    law2Title: "Что обязано быть на сайте",
    law2Text:
      "Статья 16 требует открыто разместить сведения об арбитраже, юридический адрес, регламент и реестр арбитров. Решения — только с согласия сторон. Адрес и регламент опубликованы; реестр дополняется после утверждения состава.",
    disputesKicker: "Компетенция",
    disputesTitle: "Какие споры принимаем",
    disputesLead:
      "По статье 8 Закона в арбитраж передаются споры из гражданско-правовых отношений между физическими и (или) юридическими лицами — если есть письменное соглашение и спор не относится к изъятиям закона.",
    d1Title: "Внешняя торговля",
    d1Text: "Купля-продажа, поставка, перевозка, агентские и дистрибьюторские договоры, расчёты и обеспечение обязательств.",
    d2Title: "Подряд и инфраструктура",
    d2Text: "Строительство, EPC, сервисные контракты, претензии по срокам, качеству и дополнительным работам.",
    d3Title: "Корпоративные отношения",
    d3Text: "Споры участников, инвестиционные соглашения и иные разногласия, если закон допускает арбитраж.",
    procedureKicker: "Порядок",
    procedureTitle: "Как проходит разбирательство",
    limitsKicker: "Статьи 8 и 9 Закона",
    limitsTitle: "Что арбитраж не вправе рассматривать",
    limitsLead:
      "Эти изъятия прямо установлены законом. Если спор в перечне — оговорка не поможет, дело надлежит государственному суду либо иному порядку.",
    lim1: "Интересы несовершеннолетних, недееспособных или ограниченно дееспособных лиц",
    lim2: "Потребительские займы и микрокредиты банков, МФО и коллекторов с физическими лицами вне предпринимательства",
    lim3: "Реабилитация и банкротство; споры субъектов естественных монополий с потребителями; споры государственных органов и субъектов квазигосударственного сектора",
    lim4: "Личные неимущественные отношения, не связанные с имущественными",
    lim5: "Споры с госорганами, госпредприятиями и компаниями с долей государства 50% и более — без письменного согласия уполномоченного органа",
    lim6: "Договор присоединения и заём с физическим лицом, не ИП: соглашение действительно, только если заключено после возникновения оснований для иска",
    s1Title: "Оговорка или соглашение",
    s1Text: "Письменное соглашение: оговорка в договоре, отдельный документ либо обмен письмами и электронными документами (статья 9).",
    s2Title: "Иск и отзыв",
    s2Text: "Истец подаёт исковое заявление по статье 23 и направляет копию ответчику. Ответчик вправе представить отзыв.",
    s3Title: "Состав",
    s3Text: "Число арбитров должно быть нечётным. Если стороны не договорились иначе, избираются трое. Единоличный арбитр должен иметь высшее юридическое образование.",
    s4Title: "Решение",
    s4Text: "Разбирательство начинается, когда просьба о передаче спора получена ответчиком, если стороны не договорились об ином. Решение выносится письменно.",
    clauseKicker: "Для договора",
    clauseTitle: "Рекомендуемая арбитражная оговорка",
    clauseLead:
      "Оговорка должна быть письменной и называть этот арбитраж. Для договора присоединения и потребительского займа она действительна лишь после возникновения оснований для иска.",
    clauseText:
      "Все споры, разногласия или требования, возникающие из настоящего договора или в связи с ним, в том числе касающиеся его заключения, изменения, исполнения, нарушения, прекращения или недействительности, подлежат окончательному разрешению в постоянно действующем арбитраже «Международный коммерческий арбитраж Justitia» (MKAJ, Республика Казахстан) в соответствии с его регламентом. Место арбитражного разбирательства — Республика Казахстан. Язык — русский. Число арбитров — один, если стороны письменно не согласуют иное нечётное число.",
    clauseNote: "Если стороны не укажут число арбитров, по статье 14 Закона назначаются трое.",
    regKicker: "Статья 16 Закона",
    regTitle: "Обязательные сведения",
    regLead:
      "Постоянно действующий арбитраж обязан открыто публиковать наименование, юридический адрес, регламент и реестр арбитров. Адрес указан. Реестр публикуется после утверждения состава.",
    reg1Title: "Наименование",
    reg1Text: "Международный коммерческий арбитраж Justitia (MKAJ). Это наименование арбитража, а не суда.",
    reg2Title: "Юридический адрес",
    reg2Text: "Республика Казахстан, город Алматы, улица Сейфуллина, 392",
    reg3Title: "Регламент",
    reg3Text: "Порядок деятельности и правила разбирательства.",
    reg3Link: "Открыть регламент",
    reg4Title: "Реестр арбитров",
    reg4Text:
      "Реестр должен содержать Ф.И.О., опыт работы, учёную степень (при наличии) и число рассмотренных дел. Список публикуется после утверждения. Кандидат: не моложе 30 лет, высшее образование, стаж по специальности не менее пяти лет; единоличный арбитр — высшее юридическое образование.",
    copy: "Скопировать текст",
    copied: "Скопировано",
    contactKicker: "Секретариат",
    contactTitle: "Напишите или позвоните",
    contactLead:
      "Кратко опишите спор, стороны и сумму требований — подскажем, подходит ли арбитраж и какую оговорку лучше закрепить в договоре.",
    phoneLabel: "Телефон / WhatsApp",
    placeLabel: "Местонахождение",
    placeValue: "Республика Казахстан, г. Алматы, ул. Сейфуллина, 392",
    hoursLabel: "Обращения",
    hoursValue: "Ежедневно, по предварительной договорённости",
    name: "Имя",
    company: "Компания",
    message: "Суть обращения",
    send: "Отправить в WhatsApp",
    formNote:
      "Нажимая кнопку, вы соглашаетесь на обработку указанных данных только для ответа на обращение — по Закону РК «О персональных данных и их защите». Сообщение откроется в WhatsApp.",
    footerName: "Международный коммерческий арбитраж",
    footerLegal:
      "Постоянно действующий арбитраж Justitia (MKAJ). Не является судом судебной системы Республики Казахстан и не связан с МКАС при ТПП РФ, МЦТ МФЦА и Арбитражной палатой Казахстана, пока членство не оформлено. Деятельность — по Закону РК от 8 апреля 2016 года № 488-V «Об арбитраже». Исполнение решения зависит от соглашения сторон, применимого права и международных договоров.",
    namePh: "Как к вам обращаться",
    companyPh: "Наименование стороны",
    messagePh: "Контракт, стороны, предмет и ориентир по сумме",
    waPrefill: "Здравствуйте. Обращаюсь в Международный коммерческий арбитраж Justitia (MKAJ).",
  },
  kk: {
    dir: "ltr",
    title: "MKAJ · Justitia — халықаралық коммерциялық төрелік",
    brand: "MKAJ",
    brandSub: "Justitia",
    navAbout: "Төрелік туралы",
    navDisputes: "Даулар",
    navRules: "Регламент",
    navProcedure: "Тәртіп",
    navClause: "Ескертпе",
    navContact: "Байланыс",
    kicker: "Тұрақты жұмыс істейтін төрелік · Қазақстан Республикасы",
    h1Lead: "Халықаралық коммерциялық төрелік",
    lead:
      "Қазақстаннан және шетелден тараптардың азаматтық-құқықтық дауларын жазбаша төрелік келісім болғанда қараймыз — Қазақстан Республикасының 2016 жылғы 8 сәуірдегі № 488-V «Төрелік туралы» Заңы бойынша.",
    ctaConsult: "WhatsApp арқылы кеңес",
    ctaClause: "Төрелік ескертпе",
    heroCardTitle: "Қандай жағдайда жүгінеді",
    heroLi1: "Жеткізу, мердігерлік, дистрибуция және сыртқы сауда шарттары",
    heroLi2: "Корпоративтік және инвестициялық келіспеушіліктер",
    heroLi3: "Мемлекеттік соттан тыс төрелік шешім қажет болғанда",
    aboutKicker: "Төрелік туралы",
    aboutTitle: "Сот емес, тараптар келісімі бойынша төрелік",
    aboutLead:
      "MKAJ — Justitia тұрақты жұмыс істейтін төрелігі. Біз Қазақстан Республикасының сот жүйесіне кірмейміз. Дау тек жазбаша төрелік келісім болғанда беріледі. Тараптар өзгеше келіспесе, регламент осы келісімнің бөлігі болады.",
    card1Title: "Тәуелсіздік",
    card1Text:
      "ҚР сот жүйесінің соты да, мемлекеттік орган да емеспіз. Төрешілер тәуелсіз; «Төрелік туралы» Заңда тікелей көрсетілгеннен басқа араласуға жол берілмейді.",
    card2Title: "Құпиялылық",
    card2Text:
      "Талқылау мәліметтері тараптардың келісімінсіз жарияланбайды. Төрелік шешімдер тек осындай келісім болғанда жарияланады — мұны Заңның 16-бабы талап етеді.",
    card3Title: "Орындалымдылық",
    card3Text:
      "Қазақстанда шешім Заңның 7-тарауы бойынша орындалады. Шетелде тану 1958 жылғы Нью-Йорк конвенциясына, төрелік орнына және орындау елінің құқығына байланысты — «барлық жерде» деген кепілдік жоқ.",
    law1Title: "«Төрелік туралы» Заң",
    law1Text:
      "Қазақстан Республикасының 2016 жылғы 8 сәуірдегі № 488-V Заңы ішкі және халықаралық азаматтық-құқықтық дауларды реттейді. Заң жеке «халықаралық коммерциялық төрелік мәртебесін» жасамайды: тұрақты төрелік пен жазбаша келісім жеткілікті.",
    law2Title: "Сайтта не болуға тиіс",
    law2Text:
      "16-бап төрелік туралы мәліметті, заңды мекенжайды, регламентті және төрешілер тізілімін ашық орналастыруды талап етеді. Шешімдер — тек тараптар келіскенде. Мекенжай мен регламент жарияланған; тізілім құрам бекітілгеннен кейін толықтырылады.",
    disputesKicker: "Құзырет",
    disputesTitle: "Қандай дауларды қабылдаймыз",
    disputesLead:
      "Заңның 8-бабы бойынша төрелікке азаматтық-құқықтық даулар беріледі — жазбаша келісім болса және дау заңдағы алып тастауларға жатпаса.",
    d1Title: "Сыртқы сауда",
    d1Text: "Сатып алу-сату, жеткізу, тасымал, агенттік және дистрибьюторлық шарттар, есеп айырысу мен міндеттемені қамтамасыз ету.",
    d2Title: "Мердігерлік және инфрақұрылым",
    d2Text: "Құрылыс, EPC, сервистік келісімшарттар, мерзім, сапа және қосымша жұмыстар бойынша талаптар.",
    d3Title: "Корпоративтік қатынастар",
    d3Text: "Қатысушылар дауы, инвестициялық келісімдер және заң төрелікке жол берген өзге келіспеушіліктер.",
    procedureKicker: "Тәртіп",
    procedureTitle: "Талқылау қалай өтеді",
    limitsKicker: "Заңның 8 және 9-баптары",
    limitsTitle: "Төрелік қандай дауларды қарай алмайды",
    limitsLead: "Бұл алып тастауларды заң тікелей белгілеген. Дау тізімде болса, ескертпе көмектеспейді.",
    lim1: "Кәмелетке толмағандардың, әрекетке қабілетсіз немесе қабілеті шектеулі адамдардың мүдделері",
    lim2: "Банктердің, МҚҰ мен коллекторлардың жеке тұлғалармен кәсіпкерлікке жатпайтын тұтынушылық қарыздары мен микрокредиттері",
    lim3: "Оңалту мен банкроттық; табиғи монополия субъектілерінің тұтынушылармен даулары; мемлекеттік органдар мен квазимемлекеттік сектор даулары",
    lim4: "Мүліктік қатынасқа байланысты емес жеке мүліктік емес қатынастар",
    lim5: "Мемлекеттік органдар, мемлекеттік кәсіпорындар және мемлекет үлесі 50%-дан асатын компаниялармен даулар — уәкілетті органның жазбаша келісімінсіз",
    lim6: "Қосылу шарты және ЖК емес жеке тұлғамен қарыз: келісім талап қоюға негіз туғаннан кейін ғана жарамды",
    s1Title: "Ескертпе немесе келісім",
    s1Text: "Жазбаша келісім: шарттағы ескертпе, жеке құжат не хаттар мен электрондық құжаттар алмасу (9-бап).",
    s2Title: "Талап пен пікір",
    s2Text: "Талапкер 23-бап бойынша талап арыз береді және көшірмесін жауапкерге жібереді. Жауапкер пікір ұсынуға құқылы.",
    s3Title: "Құрам",
    s3Text: "Төрешілер саны тақ болуға тиіс. Тараптар өзгеше келіспесе, үшеуі сайланады. Жеке-дара төрешінің жоғары заң білімі болуға тиіс.",
    s4Title: "Шешім",
    s4Text: "Тараптар өзгеше келіспесе, талқылау жауапкер дауды төрелікке беру туралы өтінішті алған күні басталады. Шешім жазбаша шығарылады.",
    clauseKicker: "Шарт үшін",
    clauseTitle: "Ұсынылатын төрелік ескертпе",
    clauseLead:
      "Ескертпе жазбаша болуға және осы төрелікті атауға тиіс. Қосылу шарты мен тұтынушылық қарызда ол талап қоюға негіз туғаннан кейін ғана жарамды.",
    clauseText:
      "Осы шарттан немесе оған байланысты туындайтын барлық даулар, келіспеушіліктер немесе талаптар, оның ішінде шарттың жасалуы, өзгертілуі, орындалуы, бұзылуы, тоқтатылуы немесе жарамсыздығы туралы мәселелер «Justitia халықаралық коммерциялық төрелігі» тұрақты төрелігінде (MKAJ, Қазақстан Республикасы) оның регламентіне сәйкес түпкілікті шешілуге тиіс. Төрелік орны — Қазақстан Республикасы. Тілі — орыс тілі. Төрешілер саны — бір, егер тараптар жазбаша түрде өзге тақ санды келіспесе.",
    clauseNote: "Тараптар төрешілер санын көрсетпесе, Заңның 14-бабы бойынша үшеуі тағайындалады.",
    regKicker: "Заңның 16-бабы",
    regTitle: "Міндетті мәліметтер",
    regLead:
      "Тұрақты төрелік атауын, заңды мекенжайын, регламентін және төрешілер тізілімін ашық жариялауға міндетті. Мекенжай көрсетілген. Тізілім құрам бекітілгеннен кейін жарияланады.",
    reg1Title: "Атауы",
    reg1Text: "Justitia халықаралық коммерциялық төрелігі (MKAJ). Бұл төреліктің атауы, соттың емес.",
    reg2Title: "Заңды мекенжайы",
    reg2Text: "Қазақстан Республикасы, Алматы қаласы, Сейфуллин көшесі, 392",
    reg3Title: "Регламент",
    reg3Text: "Қызмет тәртібі мен талқылау қағидалары.",
    reg3Link: "Регламентті ашу",
    reg4Title: "Төрешілер тізілімі",
    reg4Text:
      "Тізілімде аты-жөні, жұмыс тәжірибесі, ғылыми дәрежесі (бар болса) және қаралған істер саны болуға тиіс. Тізім бекітілгеннен кейін жарияланады. Үміткер: 30 жастан асқан, жоғары білімі және мамандығы бойынша кемінде бес жыл өтілі бар; жеке-дара төреші — жоғары заң білімі.",
    copy: "Мәтінді көшіру",
    copied: "Көшірілді",
    contactKicker: "Хатшылық",
    contactTitle: "Жазыңыз немесе қоңырау шалыңыз",
    contactLead:
      "Дауды, тараптарды және талап сомасын қысқаша жазыңыз — төреліктің жарайтынын және шартқа қандай ескертпе қою керектігін айтамыз.",
    phoneLabel: "Телефон / WhatsApp",
    placeLabel: "Орналасқан жері",
    placeValue: "Қазақстан Республикасы, Алматы қ., Сейфуллин к-сі, 392",
    hoursLabel: "Өтініштер",
    hoursValue: "Күн сайын, алдын ала келісім бойынша",
    name: "Аты-жөні",
    company: "Компания",
    message: "Өтініш мәні",
    send: "WhatsApp-қа жіберу",
    formNote:
      "Батырманы басу арқылы көрсетілген деректерді тек өтінішке жауап беру үшін өңдеуге келісесіз — ҚР «Дербес деректер және оларды қорғау туралы» Заңы бойынша. Хабарлама WhatsApp-та ашылады.",
    footerName: "Халықаралық коммерциялық төрелік",
    footerLegal:
      "Justitia тұрақты төрелігі (MKAJ). Қазақстан Республикасы сот жүйесінің соты емес және РФ СӨП жанындағы ХКАС, АХҚО ХТО және Қазақстан Төрелік палатасымен мүшелік ресімделгенге дейін байланысты емес. Қызмет — ҚР 2016 жылғы 8 сәуірдегі № 488-V «Төрелік туралы» Заңы бойынша.",
    namePh: "Сізге қалай жүгінейік",
    companyPh: "Тараптың атауы",
    messagePh: "Шарт, тараптар, нысана және сома бағдары",
    waPrefill: "Сәлеметсіз бе. Justitia халықаралық коммерциялық төрелігіне (MKAJ) жүгініп отырмын.",
  },
  en: {
    dir: "ltr",
    title: "MKAJ · Justitia — International Commercial Arbitration",
    brand: "MKAJ",
    brandSub: "Justitia",
    navAbout: "The arbitration",
    navDisputes: "Disputes",
    navRules: "Rules",
    navProcedure: "Procedure",
    navClause: "Clause",
    navContact: "Contact",
    kicker: "Permanent arbitration · Republic of Kazakhstan",
    h1Lead: "International Commercial Arbitration",
    lead:
      "We hear civil-law disputes of parties in Kazakhstan and abroad where there is a written arbitration agreement — under the Law of the Republic of Kazakhstan No. 488-V of 8 April 2016 on Arbitration.",
    ctaConsult: "WhatsApp consultation",
    ctaClause: "Arbitration clause",
    heroCardTitle: "When parties come to us",
    heroLi1: "Supply, works, distribution and cross-border trade contracts",
    heroLi2: "Corporate and investment disagreements",
    heroLi3: "An arbitral award outside the state courts",
    aboutKicker: "The arbitration",
    aboutTitle: "Not a court — arbitration by agreement of the parties",
    aboutLead:
      "MKAJ is the permanent arbitration Justitia. We are not part of the judicial system of the Republic of Kazakhstan. A dispute is referred only under a written arbitration agreement. Unless the parties agree otherwise, the rules form part of that agreement.",
    card1Title: "Independence",
    card1Text:
      "Not a court of the judicial system of Kazakhstan and not a state body. Arbitrators are independent; interference is prohibited except where the Law on Arbitration expressly allows it.",
    card2Title: "Confidentiality",
    card2Text:
      "Information from the proceedings is not disclosed without the parties’ consent. Awards are published only with that consent — Article 16 of the Law requires this.",
    card3Title: "Enforceability",
    card3Text:
      "In Kazakhstan an award is enforced under Chapter 7 of the Law. Abroad, recognition depends on the 1958 New York Convention, the seat and the law of the place of enforcement — the statute does not promise enforcement “everywhere”.",
    law1Title: "Law on Arbitration",
    law1Text:
      "The Law of the Republic of Kazakhstan No. 488-V of 8 April 2016 covers both domestic and international civil-law disputes. It does not create a separate “international commercial arbitration” licence: a permanent arbitration and a written agreement are enough.",
    law2Title: "What the site must show",
    law2Text:
      "Article 16 requires public disclosure of the arbitration’s details, its legal address, its rules and the list of arbitrators. Awards — only with the parties’ consent. The address and the rules are published; the list of arbitrators will be added after the panel is approved.",
    disputesKicker: "Mandate",
    disputesTitle: "Disputes we accept",
    disputesLead:
      "Under Article 8 of the Law, civil-law disputes between individuals and (or) legal entities may be referred to arbitration if there is a written agreement and the dispute is not excluded by statute.",
    d1Title: "Cross-border trade",
    d1Text: "Sale, supply, carriage, agency and distribution contracts, payments and security for performance.",
    d2Title: "Works and infrastructure",
    d2Text: "Construction, EPC and service contracts; claims on time, quality and additional works.",
    d3Title: "Corporate matters",
    d3Text: "Shareholder disputes, investment agreements and other disagreements where the law allows arbitration.",
    procedureKicker: "Procedure",
    procedureTitle: "How a case proceeds",
    limitsKicker: "Articles 8 and 9 of the Law",
    limitsTitle: "What this arbitration may not hear",
    limitsLead: "These exclusions are set by statute. If the dispute is on the list, a clause will not help.",
    lim1: "Interests of minors or of persons who are legally incapable or of limited capacity",
    lim2: "Consumer bank loans and micro-credits with individuals outside business activity, including collector claims",
    lim3: "Rehabilitation and bankruptcy; disputes between natural monopolies and their consumers; disputes of state bodies and the quasi-public sector",
    lim4: "Personal non-property relations unconnected with property",
    lim5: "Disputes with state bodies, state enterprises and companies 50% or more state-owned — without written consent of the competent authority",
    lim6: "Contracts of adhesion and loans with an individual who is not an entrepreneur: the agreement is valid only if made after the grounds for a claim arose",
    s1Title: "Clause or agreement",
    s1Text: "A written agreement: a clause in the contract, a separate instrument, or an exchange of letters and electronic documents (Article 9).",
    s2Title: "Statement of claim and response",
    s2Text: "The claimant files a statement of claim under Article 23 and sends a copy to the respondent. The respondent may file a response.",
    s3Title: "Tribunal",
    s3Text: "The number of arbitrators must be odd. If the parties have not agreed otherwise, three are appointed. A sole arbitrator must hold a higher legal education.",
    s4Title: "Award",
    s4Text: "Unless the parties agree otherwise, the proceedings begin when the request to refer the dispute is received by the respondent. The award is in writing.",
    clauseKicker: "For the contract",
    clauseTitle: "Recommended arbitration clause",
    clauseLead:
      "The clause must be in writing and name this arbitration. For a contract of adhesion or a consumer loan it is valid only after the grounds for a claim have arisen.",
    clauseText:
      "All disputes, disagreements or claims arising out of or in connection with this contract, including those relating to its conclusion, amendment, performance, breach, termination or invalidity, shall be finally resolved by the permanent arbitration “International Commercial Arbitration Justitia” (MKAJ, Republic of Kazakhstan) in accordance with its rules. The place of the arbitration shall be the Republic of Kazakhstan. The language shall be Russian. The number of arbitrators shall be one, unless the parties agree in writing on another odd number.",
    clauseNote: "If the parties do not state the number of arbitrators, Article 14 of the Law provides for three.",
    regKicker: "Article 16 of the Law",
    regTitle: "Required disclosures",
    regLead:
      "A permanent arbitration must publish its name, legal address, rules and list of arbitrators. The address is stated. The list will be published after the panel is approved.",
    reg1Title: "Name",
    reg1Text: "International Commercial Arbitration Justitia (MKAJ). This is the name of an arbitration, not of a court.",
    reg2Title: "Legal address",
    reg2Text: "Republic of Kazakhstan, Almaty, 392 Seifullin Street",
    reg3Title: "Rules",
    reg3Text: "The organisation of the arbitration and the rules of the proceedings.",
    reg3Link: "Open the rules",
    reg4Title: "List of arbitrators",
    reg4Text:
      "The list must show full name, work experience, academic degree (if any) and the number of cases heard. It will be published after approval. A candidate must be at least 30, hold higher education and at least five years’ professional experience; a sole arbitrator must hold a higher legal education.",
    copy: "Copy the clause",
    copied: "Copied",
    contactKicker: "Secretariat",
    contactTitle: "Write or call",
    contactLead:
      "Briefly describe the dispute, the parties and the amount in issue — we will say whether arbitration is suitable and which clause to put in the contract.",
    phoneLabel: "Phone / WhatsApp",
    placeLabel: "Location",
    placeValue: "Republic of Kazakhstan, Almaty, 392 Seifullin Street",
    hoursLabel: "Enquiries",
    hoursValue: "Daily, by prior arrangement",
    name: "Name",
    company: "Company",
    message: "Your enquiry",
    send: "Send via WhatsApp",
    formNote:
      "By sending the form you consent to processing the data solely to reply to the enquiry, under the Law of the Republic of Kazakhstan on Personal Data and Their Protection. The message opens in WhatsApp.",
    footerName: "International Commercial Arbitration",
    footerLegal:
      "Permanent arbitration Justitia (MKAJ). Not a court of the judicial system of the Republic of Kazakhstan and not affiliated with the ICAC at the RF CCI, the AIFC IAC or the Arbitration Chamber of Kazakhstan unless membership is arranged. Activity is governed by the Law of the Republic of Kazakhstan No. 488-V of 8 April 2016 on Arbitration.",
    namePh: "How should we address you",
    companyPh: "Name of the party",
    messagePh: "Contract, parties, subject matter and an amount range",
    waPrefill: "Hello. I am contacting International Commercial Arbitration Justitia (MKAJ).",
  },
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function currentLang() {
  return document.documentElement.dataset.lang || "ru";
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.ru;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.title = dict.title;
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  $$("[data-i18n-ph]").forEach((el) => {
    const key = el.dataset.i18nPh;
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  $$(".lang button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
  try {
    localStorage.setItem("icaj-lang", lang);
  } catch {
    /* ignore */
  }
}

function waLink(text) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`;
}

function init() {
  const saved = (() => {
    try {
      return localStorage.getItem("icaj-lang");
    } catch {
      return null;
    }
  })();
  applyLang(saved && I18N[saved] ? saved : "ru");

  $$(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  const toggle = $(".menu-toggle");
  const nav = $(".nav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$(".nav a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    })
  );

  $$("[data-phone]").forEach((el) => {
    if (el.tagName === "A") {
      el.href = `tel:+${PHONE_E164}`;
      el.textContent = PHONE_DISPLAY;
    } else {
      el.textContent = PHONE_DISPLAY;
    }
  });

  const consult = $("[data-wa-consult]");
  if (consult) {
    consult.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = waLink(I18N[currentLang()].waPrefill);
    });
  }

  const copyBtn = $("[data-copy]");
  copyBtn?.addEventListener("click", async () => {
    const text = $("[data-clause]").textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = I18N[currentLang()].copied;
      setTimeout(() => {
        copyBtn.textContent = I18N[currentLang()].copy;
      }, 1600);
    } catch {
      copyBtn.textContent = I18N[currentLang()].copy;
    }
  });

  $("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const dict = I18N[currentLang()];
    const body = [
      dict.waPrefill,
      "",
      `${dict.name}: ${fd.get("name") || "—"}`,
      `${dict.company}: ${fd.get("company") || "—"}`,
      "",
      fd.get("message") || "",
    ].join("\n");
    location.href = waLink(body);
  });
}

document.addEventListener("DOMContentLoaded", init);
