'use strict';

// ####################################################################
// #                  LANGUAGE SWITCHER LOGIC                         #
// ####################################################################

const translations = {
  "fa": {
    "sidebar_name": "راسـتـیـن عـلـیـزاده",
    "sidebar_title": "برنامه نویس ، طراح و تولیدکننده محتوا",
    "sidebar_show_contacts": "نمایش اطلاعات",
    "sidebar_email_title": "پست الکترونیکی من",
    "sidebar_phone_title": "شماره تلفن من",
    "sidebar_birthday_title": "تاریخ تولد من",
    "sidebar_birthday_value": "خرداد ۱۳۸۶",
    "sidebar_location_title": "محل زندگی من",
    "sidebar_location_value": "ایران ، شهر کاشان",
    "nav_about": "من کی ام؟",
    "nav_resume": "رزومه",
    "nav_portfolio": "نمونه کار ها",
    "nav_blog": "وبلاگ",
    "nav_contact": "ارتباط",
    "about_title": "مــعــرفـی مــن",
    "about_p1": "من یه توسعه‌دهنده و طراحم که بین دنیای کد، پیکسل و محتوا حرکت می‌کنم. برای من، یه پروژه فقط یه سری کد نیست؛ یه تجربه‌ی کامله. به همین خاطر، روی سه حوزه‌ی اصلی تمرکز کردم: <strong>برنامه‌نویسی</strong> برای ساختن یه منطق قوی، <strong>طراحی</strong> برای خلق یه ظاهر زیبا و کاربرپسند، و <strong>تولید محتوا</strong> برای تعریف کردن داستان اون محصول.",
    "about_p2": "این مسیر، از کنجکاوی تو نوجوونی و شرکت تو جشنواره‌های علمی شروع شد و امروز به ساختن وب‌اپلیکیشن‌های واقعی، طراحی برای کسب‌وکارها و مدیریت پروژه‌های دیجیتال رسیده. هر پروژه، از یه ربات تلگرامی ساده گرفته تا یه وب‌سایت فروشگاهی کامل، برای من یه فرصت جدیده تا چالش‌ها رو به راه‌حل‌های خلاقانه تبدیل کنم.",
    "about_p3": "هدف نهایی من اینه که محصولاتی بسازم که فقط «کار نکنن»، بلکه به کاربر حس خوبی هم بدن. دنبال همکاری تو پروژه‌هایی‌ام که بتونم با ترکیب تکنولوژی و خلاقیت، یه ارزش واقعی و موندگار خلق کنم.",
    "skills_section_title": "مــهــارت هــای مــن",
    "skill_title_web": "طــراحـی وبــسـایت",
    "skill_desc_web": "توسعه وب‌سایت‌های مدرن و واکنش‌گرا با HTML, CSS, و JavaScript و همچنین طراحی و پیاده‌سازی سایت‌های داینامیک با سیستم مدیریت محتوای وردپرس.",
    "skill_title_desktop": "بــرنامه نویــسی دســکتاپ",
    "skill_desc_desktop": "ساخت اپلیکیشن‌های دسکتاپ چندمنظوره با پایتون، از ابزارهای تحت ترمینال گرفته تا نرم‌افزارهای دارای رابط کاربری گرافیکی (GUI).",
    "skill_title_mobile": "بــرنامه نویــسی مـــوبـایل",
    "skill_desc_mobile": "توسعه اپلیکیشن‌های نیتیو اندروید با کاتلین و ساخت اپلیکیشن‌های چندسکویی (Cross-platform) برای اندروید و iOS با فریم‌ورک فلاتر.",
    "skill_title_social": "مــدیـریـت شــبـکـه هـای اجـتـمـاعـی",
    "skill_desc_social": "مدیریت و رشد صفحات اینستاگرام و کانال‌های تلگرام با تمرکز بر استراتژی‌های تولید محتوا و افزایش تعامل کاربران.",
    "skill_title_graphic": "طــراحـی گــرافــیکی",
    "skill_desc_graphic": "خلق هویت بصری، از طراحی لوگو و پوستر تا بنرهای دیجیتال با استفاده از ابزارهای استاندارد صنعتی مانند فتوشاپ و ایلاستریتور.",
    "skill_title_video": "تـولـیـد مـحـتـوای ویـدیـویـی",
    "skill_desc_video": "ساخت و تدوین محتوای ویدیویی جذاب، از تیزرهای تبلیغاتی تا ویدیوهای آموزشی، با استفاده از نرم‌افزارهای Adobe Premiere Pro و After Effects.",
    "skill_title_ai": "هــــوش مــصنـوعی",
    "skill_desc_ai": "آشنایی با مفاهیم یادگیری ماشین و توسعه مدل‌های اولیه (Proof-of-concept) هوش مصنوعی با استفاده از کتابخانه‌های پایتون.",
    "skill_title_security": "امــنـیـت و شــبـکـه",
    "skill_desc_security": "آشنایی با مفاهیم اولیه امنیت سایبری و کار با ابزارهای تست نفوذ در محیط لینوکس (کالی) برای ارزیابی و افزایش امنیت سیستم‌ها.",
    "skill_title_bot": "تــوســعــه ربــات",
    "skill_desc_bot": "طراحی و توسعه ربات‌های تلگرامی هوشمند برای خودکارسازی وظایف، ارائه خدمات و افزایش تعامل با کاربران با استفاده از پایتون.",
    "skill_title_uiux": "طـــراحــی  UI/UX",
    "skill_desc_uiux": "طراحی رابط‌های کاربری (UI) زیبا و خلق تجربه‌های کاربری (UX) بهینه و شهودی با تمرکز بر نیازهای کاربر، با استفاده از ابزارهایی مانند فیگما.",
    "tools_section_title": "ابــزار هـای مـورد اســتفاده مـن",
    "abilities_section_title": "تـــوانــایـی هـای مـــن",
    "ability_web": "طراحی وبسایت",
    "ability_graphic": "طراحی گرافیکی",
    "ability_content": "تولید محتوا و پیج گردانی",
    "ability_desktop": "برنامه نویسی دسکتاپ",
    "ability_mobile": "برنامه نویسی موبایل",
    "ability_ai": "هوش مصنوعی و پایتون",
    "ability_security": "امنیت",
    "resume_title": "رزومـــــه مـــن",
    "resume_education_title": "تحـصــیـــلات",
    "edu_sampad_title": "دبیرستان تیزهوشان شهید بهشتی (سمپاد)",
    "edu_sampad_date": "۱۳۹۸ — ۱۴۰۴",
    "edu_sampad_desc": "تحصیل در دبیرستان تیزهوشان شهید بهشتی (سمپاد) در دوره اول و دوم متوسطه.",
    "edu_future_title": "آنچه خواهیم دید...",
    "edu_future_date": "بزودی :)",
    "resume_experience_title": "تـــجـــربـیـات",
    "exp_english_title": "یادگیری زبان انگلیسی",
    "exp_english_date": "۱۳۹۴ — اکنون",
    "exp_english_desc": "شروع یادگیری زبان انگلیسی با شرکت در کلاس های آموزشی ، کتاب های داستان ، فیلم و بعد ها به صورت خودآموز",
    "exp_graphic_title": "طراحی گرافیک",
    "exp_graphic_date": "۱۳۹۷ — اکنون",
    "exp_graphic_desc": "شروع طراحی طرح های مختلف از جمله لوگو ، پوستر ، بنر و ... با فتوشاپ و ایلاستریتور",
    "exp_python_title": "برنامه نویسی پایتون",
    "exp_python_date": "۱۳۹۸ — اکنون",
    "exp_python_desc": "شروع برنامه نویسی اپ های دسکتاپ با پایتون ، تست و شروع ربات نویسی برای تلگرام",
    "exp_webcode_title": "طراحی وبسایت با کدنویسی",
    "exp_webcode_date": "۱۳۹۸ — اکنون",
    "exp_webcode_desc": "شروع طراحی وبلاگ ساده با HTML5 و CSS3 و پس از آنها یادگیری جاوا اسکریپت و یادگیری ساخت وب-اپ",
    "exp_netka19_title": "شرکت در همایش نتکا ۱۹",
    "exp_netka19_date": "۱۳۹۹ — ۱۴۰۰",
    "exp_netka19_desc": "شرکت در نوزدهمین همایش نتکا (مجازی) به عنوان طرح دهنده و ارائه اپلیکیشن \"جعبه ابزار\"",
    "exp_security_title": "شروع فعالیت در بخش امنیت",
    "exp_security_date": "۱۴۰۰ — اکنون",
    "exp_security_desc": "ورود به حوزه امنیت با آشنایی با سیستم‌عامل لینوکس (Ubuntu) و سپس یادگیری و استفاده از ابزارهای تست نفوذ در توزیع Kali Linux.",
    "exp_kharazmi_title": "طلای استانی در جشنواره خوارزمی",
    "exp_kharazmi_date": "۱۳۹۹ — ۱۴۰۰",
    "exp_kharazmi_desc": "ارائه اپلیکیشن دسکتاپ \"جعبه ابزار\" در شاخه نرم افزار جشنواره نوجوان خوارزمی و کسب مقام طلای استانی",
    "exp_wordpress_title": "طراحی وبسایت با وردپرس",
    "exp_wordpress_date": "۱۴۰۰ — اکنون",
    "exp_wordpress_desc": "شروع طراحی وبسایت با وردپرس و ایجاد وبلاگ تکنولوژی \"آلفا-هاب\"",
    "exp_netka20_title": "شرکت در همایش نتکا ۲۰",
    "exp_netka20_date": "۱۴۰۰ — ۱۴۰۱",
    "exp_netka20_desc": "شرکت در بیستمین همایش نتکا به عنوان طرح دهنده و ارائه اپلیکیشن \"دستیار اپیک\"",
    "exp_ai_title": "شروع فعالیت در زمینه هوش مصنوعی",
    "exp_ai_date": "۱۴۰۱ — اکنون",
    "exp_ai_desc": "شروع آموزش ، تست و یادگیری الگوریتم نویسی چت بات های هوش مصنوعی با پایتون",
    "exp_content_title": "شروع فعالیت در زمینه تولید محتوا",
    "exp_content_date": "۱۴۰۱ — اکنون",
    "exp_content_desc": "شروع آموزش و خلق اثر با ادوبی پریمایر پرو و ادوبی افتر افکت",
    "exp_netka21_title": "شرکت در همایش نتکا ۲۱",
    "exp_netka21_date": "۱۴۰۱ — ۱۴۰۲",
    "exp_netka21_desc": "شرکت در بیست و یکمین همایش نتکا به عنوان طرح دهنده و ارائه ورژن دوم اپلیکیشن \"دستیار اپیک\" و بات تلگرامی \"آلفا-بات\"",
    "exp_insta_title": "یادگیری الگوریتم اینستاگرام و پیج گردانی",
    "exp_insta_date": "۱۴۰۲ — اکنون",
    "exp_insta_desc": "کسب مهارت در مدیریت شبکه‌های اجتماعی، با تمرکز بر الگوریتم‌های اینستاگرام، استراتژی‌های رشد (افزایش دنبال‌کننده و ورود به اکسپلور) و مدیریت کامل پیج.",
    "exp_ui_title": "فعالیت در حوزه طراحی رابط کاربری",
    "exp_ui_date": "۱۴۰۲ — اکنون",
    "exp_ui_desc": "شروع فعالیت در حوزه طراحی UI و UX با نرم افزار محبوب و پر استفاده فیگما",
    "exp_netka22_title": "برگزاری همایش نتکا ۲۲",
    "exp_netka22_date": "۱۴۰۲ — ۱۴۰۳",
    "exp_netka22_desc": "برگزاری بیست و دومین همایش نتکا به عنوان دبیر علمی و لانچ رسمی و ارائه وب اپلیکیشن \"می-تو\"",
    "exp_farda_title": "طلای استانی در جشنواره فردا",
    "exp_farda_date": "۱۴۰۲ — ۱۴۰۳",
    "exp_farda_desc": "ارائه وب اپلیکیشن \"می-تو\" در شاخه نرم افزار موبایل و وبسایت در جشنواره فرهنگی هنری فردا و کسب مقام طلای استانی",
    "exp_android_title": "یادگیری برنامه نویسی اندروید",
    "exp_android_date": "۱۴۰۲ — اکنون",
    "exp_android_desc": "ورود به دنیای توسعه موبایل و یادگیری ساخت اپلیکیشن‌های نیتیو اندروید با کاتلین و اپلیکیشن‌های چندسکویی (Cross-Platform) با فریم‌ورک فلاتر.",
    "exp_sampad_achieve_title": "شرکت در همایش دستاورد های سمپاد",
    "exp_sampad_achieve_date": "۱۴۰۳ — ۱۴۰۴",
    "exp_sampad_achieve_desc": "شرکت در دومین همایش دستاورد های پژوهشی سمپاد به عنوان طرح دهنده و ارائه اپلیکیشن تحت وب \"می-تو\"",
    "exp_interview_title": "مصاحبه با نشریه آموزش و پرورش اصفهان",
    "exp_interview_date": "۱۴۰۳ — ۱۴۰۴",
    "exp_interview_desc": "مصاحبه با تیم نشریه آموزش و پرورش اصفهان و اختصاص دادن سه صفحه از ماهنامه دانش آموزی پرتو مهر با عنوان \"رویای دیجیتالی راستین\" در ارتباط با اپلیکیشن تحت وب \"می-تو\"",
    "exp_maral_title": "طراحی کامل و پشتیبانی وبسایت مارال ستاره",
    "exp_maral_date": "۱۴۰۳ — اکنون",
    "exp_maral_desc": "طراحی کامل وب‌سایت وردپرسی مجتمع‌های رفاهی گردشگری مارال ستاره، به همراه پشتیبانی فنی و اجرای استراتژی‌های اولیه سئو.",
    "exp_future_title": "آنچه خواهیم دید...",
    "exp_future_date": "بزودی :)",
    "portfolio_title": "نـمـونـه کـار هـای مــن",
    "filter_all": "همه موارد",
    "filter_web": "وبسایت",
    "filter_app": "اپلیکیشن",
    "filter_bot": "ربات",
    "filter_design": "طراحی و گرافیک",
    "filter_video": "تدوین ویدیو",
    "filter_tutorial": "آموزش",
    "filter_select": "انتخاب فیلتر",
    "p_hooshify_title": "اپلیکیشن دسکتاپ هوشیفای",
    "p_python_pdf_title": "جزوه آموزش مقدماتی پایتون با زبان ساده",
    "p_tour_poster_title": "بازطراحی پوستر تور مجازی",
    "p_termenakh_logo_title": "طراحی لوگوی \"ترمه‌نخ\"",
    "p_netka_doc_title": "تدوین و طراحی مستند نتکا",
    "p_shikpooshan_title": "وبسایت فروشگاهی شیک پوشان کاشان",
    "p_makhmali_logo_title": "طراحی لوگوی \"مخملی\"",
    "p_kimia_title": "وبسایت فروشگاهی کیمیا اسپرت کاشان",
    "p_maral_title": "وبسایت رسمی مجتمع های رفاهی گردشگری مارال ستاره",
    "p_metoo_title": "اپلیکیشن تحت وب \"می-تو\"",
    "p_alphahub_title": "وبلاگ اخبار تکنولوژی \"آلفا-هاب\"",
    "p_alphabot_title": "ربات تلگرامی \"آلفا-بات\"",
    "p_epic_assistant_title": "اپلیکیشن دســکتاپ \"دستیار اپیک\"",
    "p_traditional_logo_title": "طراحی لوگوی محصولات سنتی",
    "p_netka_statue_title": "طراحی نماد و تندیس \"نتکا\"",
    "p_netka_booklet_title": "طراحی کامل دفترچه همایش \"نتکا\"",
    "p_netka_banner_title": "طراحی بنر \"نتکا\"",
    "p_geometric_logo_title": "طراحی لوگوی هندسی",
    "p_morour_poster_title": "طراحی پوستر گرافیکی \"مرور\"",
    "p_cert_redesign_title": "بازطراحی لوح تقدیر",
    "p_story_design_title": "طراحی مناسبتی در ابعاد استوری اینستاگرام",
    "p_religious_poster_title": "بازطراحی پوستر مذهبی",
    "p_netka_logo_redesign_title": "باز طراحی و ادیت لوگوی \"نتکا\"",
    "p_cert_redesign_2_title": "بازطراحی لوح تقدیر",
    "p_metoo_poster_1_title": "طراحی پوستر گرافیکی \"می-تو\" - پارت اول",
    "p_metoo_poster_2_title": "طراحی پوستر گرافیکی \"می-تو\" - پارت دوم",
    "p_netcafe_typo_title": "تایپوگرافی لوگوی \"نتکافه\"",
    "p_bizcard_title": "طراحی کارت ویزیت",
    "p_pixelart_logo_title": "طراحی لوگو با سبک پیکسل آرت",
    "p_netka_typo_title": "تایپوگرافی لوگوی \"نتکا\"",
    "p_morour_poster_2_title": "طراحی پوستر گرافیکی \"مرور\"",
    "blog_title": "وبـــــلاگ مــــن",
    "blog_post1_cat": "سرگرمی",
    "blog_post1_date": "۱۵ فروردین ۱۴۰۳",
    "blog_post1_title": "تست اولین پست وبلاگ",
    "blog_post1_desc": "این موز ، جهت تست اولین پست وبلاگ من می باشد.",
    "contact_title": "ارتـــبــاط بـا مـــن",
    "contact_form_title": "فـــــرم مـــعـــرفـــی",
    "form_fullname": "نام کامل",
    "form_email": "آدرس پست الکترونیکی",
    "form_message": "پیام شما",
    "form_send": "ارسال پیام"
  },
  "en": {
    "sidebar_name": "Rastin Alizadeh",
    "sidebar_title": "Developer, Designer & Content Creator",
    "sidebar_show_contacts": "Show Contacts",
    "sidebar_email_title": "Email",
    "sidebar_phone_title": "Phone",
    "sidebar_birthday_title": "Birthday",
    "sidebar_birthday_value": "June, 2007",
    "sidebar_location_title": "Location",
    "sidebar_location_value": "Kashan, Iran",
    "nav_about": "About",
    "nav_resume": "Resume",
    "nav_portfolio": "Portfolio",
    "nav_blog": "Blog",
    "nav_contact": "Contact",
    "about_title": "About Me",
    "about_p1": "I'm a developer and designer who moves between the worlds of code, pixels, and content. For me, a project isn't just a bunch of code; it's a complete experience. That's why I've focused on three key areas: <strong>Programming</strong> to build powerful logic, <strong>Design</strong> to create a beautiful and user-friendly look, and <strong>Content Creation</strong> to tell the product's story.",
    "about_p2": "This journey, which began with teenage curiosity and participating in science festivals, has now led to developing real web applications, designing for businesses, and managing digital projects. Every project, from a simple Telegram bot to a full-fledged e-commerce website, is a new opportunity for me to turn challenges into creative solutions.",
    "about_p3": "My ultimate goal is to build products that don't just 'work,' but also give the user a great feeling. I'm looking to collaborate on projects where I can create real, lasting value by combining technology and creativity.",
    "skills_section_title": "What I'm Doing",
    "skill_title_web": "Web Design",
    "skill_desc_web": "Developing modern, responsive websites with HTML, CSS, and JavaScript, as well as designing and implementing dynamic sites with the WordPress content management system.",
    "skill_title_desktop": "Desktop Development",
    "skill_desc_desktop": "Building multi-purpose desktop applications with Python, from terminal-based tools to software with graphical user interfaces (GUI).",
    "skill_title_mobile": "Mobile Development",
    "skill_desc_mobile": "Developing native Android applications with Kotlin and building cross-platform apps for Android and iOS with the Flutter framework.",
    "skill_title_social": "Social Media Management",
    "skill_desc_social": "Managing and growing Instagram pages and Telegram channels with a focus on content strategies and increasing user engagement.",
    "skill_title_graphic": "Graphic Design",
    "skill_desc_graphic": "Creating visual identities, from logos and posters to digital banners, using industry-standard tools like Photoshop and Illustrator.",
    "skill_title_video": "Video Content Production",
    "skill_desc_video": "Producing and editing engaging video content, from promotional teasers to educational videos, using Adobe Premiere Pro and After Effects.",
    "skill_title_ai": "Artificial Intelligence",
    "skill_desc_ai": "Familiar with machine learning concepts and developing proof-of-concept AI models using Python libraries.",
    "skill_title_security": "Security & Network",
    "skill_desc_security": "Familiar with basic cybersecurity concepts and using penetration testing tools in a Linux (Kali) environment to assess and enhance system security.",
    "skill_title_bot": "Bot Development",
    "skill_desc_bot": "Designing and developing smart Telegram bots to automate tasks, provide services, and increase user interaction using Python.",
    "skill_title_uiux": "UI/UX Design",
    "skill_desc_uiux": "Designing beautiful user interfaces (UI) and creating optimal and intuitive user experiences (UX) with a focus on user needs, using tools like Figma.",
    "tools_section_title": "Tools I Use",
    "abilities_section_title": "My Skills",
    "ability_web": "Web Design",
    "ability_graphic": "Graphic Design",
    "ability_content": "Content Creation & Management",
    "ability_desktop": "Desktop Development",
    "ability_mobile": "Mobile Development",
    "ability_ai": "AI & Python",
    "ability_security": "Security",
    "resume_title": "Resume",
    "resume_education_title": "Education",
    "edu_sampad_title": "Shahid Beheshti High School (SAMPAD)",
    "edu_sampad_date": "2019 — 2025",
    "edu_sampad_desc": "Studying at the National Organization for Development of Exceptional Talents (SAMPAD) for junior and senior high school.",
    "edu_future_title": "To Be Continued...",
    "edu_future_date": "Soon :)",
    "resume_experience_title": "Experience",
    "exp_english_title": "Learning English",
    "exp_english_date": "2015 — Present",
    "exp_english_desc": "Started learning English through classes, storybooks, movies, and later, self-study.",
    "exp_graphic_title": "Graphic Design",
    "exp_graphic_date": "2018 — Present",
    "exp_graphic_desc": "Began designing various graphics including logos, posters, and banners with Photoshop and Illustrator.",
    "exp_python_title": "Python Programming",
    "exp_python_date": "2019 — Present",
    "exp_python_desc": "Started developing desktop apps with Python, and began testing and creating bots for Telegram.",
    "exp_webcode_title": "Web Design with Code",
    "exp_webcode_date": "2019 — Present",
    "exp_webcode_desc": "Started designing simple blogs with HTML5 & CSS3, followed by learning JavaScript and building web-apps.",
    "exp_netka19_title": "Participant at Netka 19 Symposium",
    "exp_netka19_date": "2020 — 2021",
    "exp_netka19_desc": "Participated in the 19th Netka Symposium (virtual) as a presenter, showcasing the 'Toolbox' application.",
    "exp_security_title": "Started in Security",
    "exp_security_date": "2021 — Present",
    "exp_security_desc": "Entered the security field by getting familiar with Linux (Ubuntu) and later learning and using penetration testing tools in Kali Linux.",
    "exp_kharazmi_title": "Provincial Gold Medal at Kharazmi Festival",
    "exp_kharazmi_date": "2020 — 2021",
    "exp_kharazmi_desc": "Presented the 'Toolbox' desktop app in the software category of the Kharazmi Youth Festival, winning the provincial gold medal.",
    "exp_wordpress_title": "Web Design with WordPress",
    "exp_wordpress_date": "2021 — Present",
    "exp_wordpress_desc": "Started designing websites with WordPress and created the 'Alpha-Hub' technology blog.",
    "exp_netka20_title": "Participant at Netka 20 Symposium",
    "exp_netka20_date": "2021 — 2022",
    "exp_netka20_desc": "Participated in the 20th Netka Symposium as a presenter, showcasing the 'Epic Assistant' application.",
    "exp_ai_title": "Started in Artificial Intelligence",
    "exp_ai_date": "2022 — Present",
    "exp_ai_desc": "Began learning, testing, and developing algorithms for AI chatbots with Python.",
    "exp_content_title": "Started in Content Creation",
    "exp_content_date": "2022 — Present",
    "exp_content_desc": "Began learning and creating works with Adobe Premiere Pro and Adobe After Effects.",
    "exp_netka21_title": "Participant at Netka 21 Symposium",
    "exp_netka21_date": "2022 — 2023",
    "exp_netka21_desc": "Participated in the 21st Netka Symposium, presenting the second version of 'Epic Assistant' and the 'Alpha-Bot' Telegram bot.",
    "exp_insta_title": "Learning Instagram Algorithms & Page Management",
    "exp_insta_date": "2023 — Present",
    "exp_insta_desc": "Gained skills in social media management, focusing on Instagram algorithms, growth strategies (follower increase, explore page), and full page management.",
    "exp_ui_title": "Activity in UI Design",
    "exp_ui_date": "2023 — Present",
    "exp_ui_desc": "Started working in the field of UI and UX design with the popular and widely-used software, Figma.",
    "exp_netka22_title": "Organizer of Netka 22 Symposium",
    "exp_netka22_date": "2023 — 2024",
    "exp_netka22_desc": "Organized the 22nd Netka Symposium as the scientific secretary, and officially launched and presented the 'Me-Too' web application.",
    "exp_farda_title": "Provincial Gold Medal at Farda Festival",
    "exp_farda_date": "2023 — 2024",
    "exp_farda_desc": "Presented the 'Me-Too' web application in the mobile and website software category at the Farda Cultural and Arts Festival, winning the provincial gold medal.",
    "exp_android_title": "Learning Android Development",
    "exp_android_date": "2023 — Present",
    "exp_android_desc": "Entered the world of mobile development, learning to build native Android apps with Kotlin and cross-platform apps with the Flutter framework.",
    "exp_sampad_achieve_title": "Participant at SAMPAD Achievements Symposium",
    "exp_sampad_achieve_date": "2024 — 2025",
    "exp_sampad_achieve_desc": "Participated in the 2nd SAMPAD Research Achievements Symposium as a presenter, showcasing the 'Me-Too' web application.",
    "exp_interview_title": "Interview with Isfahan Education Magazine",
    "exp_interview_date": "2024 — 2025",
    "exp_interview_desc": "Interviewed by the Isfahan Education Magazine team, with three pages of the 'Parto-e Mehr' student monthly dedicated to 'Rastin's Digital Dream' regarding the 'Me-Too' web app.",
    "exp_maral_title": "Full Design and Support for Maral Setareh Website",
    "exp_maral_date": "2024 — Present",
    "exp_maral_desc": "Full design of the WordPress website for Maral Setareh Tourism and Recreation Complexes, along with technical support and implementation of initial SEO strategies.",
    "exp_future_title": "To Be Continued...",
    "exp_future_date": "Soon :)",
    "portfolio_title": "Portfolio",
    "filter_all": "All",
    "filter_web": "Web design",
    "filter_app": "Applications",
    "filter_bot": "Bots",
    "filter_design": "Design & Graphics",
    "filter_video": "Video Editing",
    "filter_tutorial": "Tutorials",
    "filter_select": "Select category",
    "p_hooshify_title": "Hooshify Desktop App",
    "p_python_pdf_title": "Simple Introductory Python Booklet",
    "p_tour_poster_title": "Virtual Tour Poster Redesign",
    "p_termenakh_logo_title": "'Termenakh' Logo Design",
    "p_netka_doc_title": "Netka Documentary Editing and Design",
    "p_shikpooshan_title": "Shikpooshan Kashan E-commerce Website",
    "p_makhmali_logo_title": "'Makhmali' Logo Design",
    "p_kimia_title": "Kimia Sport Kashan E-commerce Website",
    "p_maral_title": "Official Website of Maral Setareh Complexes",
    "p_metoo_title": "'Me-Too' Web Application",
    "p_alphahub_title": "'Alpha-Hub' Tech News Blog",
    "p_alphabot_title": "'Alpha-Bot' Telegram Bot",
    "p_epic_assistant_title": "'Epic Assistant' Desktop App",
    "p_traditional_logo_title": "Traditional Products Logo Design",
    "p_netka_statue_title": "'Netka' Symbol and Trophy Design",
    "p_netka_booklet_title": "Full Design of 'Netka' Symposium Booklet",
    "p_netka_banner_title": "'Netka' Banner Design",
    "p_geometric_logo_title": "Geometric Logo Design",
    "p_morour_poster_title": "'Morour' Graphic Poster Design",
    "p_cert_redesign_title": "Certificate of Appreciation Redesign",
    "p_story_design_title": "Occasional Design for Instagram Story",
    "p_religious_poster_title": "Religious Poster Redesign",
    "p_netka_logo_redesign_title": "'Netka' Logo Redesign and Edit",
    "p_cert_redesign_2_title": "Certificate of Appreciation Redesign",
    "p_metoo_poster_1_title": "'Me-Too' Graphic Poster - Part 1",
    "p_metoo_poster_2_title": "'Me-Too' Graphic Poster - Part 2",
    "p_netcafe_typo_title": "'Netkafe' Logo Typography",
    "p_bizcard_title": "Business Card Design",
    "p_pixelart_logo_title": "Pixel Art Style Logo Design",
    "p_netka_typo_title": "'Netka' Logo Typography",
    "p_morour_poster_2_title": "'Morour' Graphic Poster Design",
    "blog_title": "Blog",
    "blog_post1_cat": "Fun",
    "blog_post1_date": "April 04, 2024",
    "blog_post1_title": "First Blog Post Test",
    "blog_post1_desc": "This banana is for testing my first blog post.",
    "contact_title": "Contact Me",
    "contact_form_title": "Contact Form",
    "form_fullname": "Full name",
    "form_email": "Email address",
    "form_message": "Your Message",
    "form_send": "Send Message"
  }
};

const languageModalContainer = document.querySelector("[data-language-modal-container]");
const languageButtons = document.querySelectorAll("[data-lang-btn]");
let currentLanguage = localStorage.getItem('language') || 'fa';

const setLanguage = (lang) => {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  const translationData = translations[lang];
  
  document.querySelectorAll('[data-translate-key]').forEach(element => {
    const key = element.dataset.translateKey;
    if (translationData[key]) {
      element.innerHTML = translationData[key];
    }
  });

  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.dataset.translatePlaceholder;
    if (translationData[key]) {
      element.placeholder = translationData[key];
    }
  });

  if (lang === 'fa') {
    document.documentElement.lang = 'fa';
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  }

  // Update data-page attributes for navigation
  pages.forEach(page => {
    const originalPageName = page.dataset.page;
    const key = `nav_${originalPageName.toLowerCase().replace(/ /g, '_').replace('؟', '')}`;
    if (translations.fa[key] && translations.en[key]) {
      page.dataset.page = lang === 'fa' ? translations.fa[key] : translations.en[key];
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    languageModalContainer.classList.remove('active');
    setLanguage(savedLanguage);
  } else {
    languageModalContainer.classList.add('active');
  }

  languageButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.langBtn;
      setLanguage(lang);
      languageModalContainer.classList.remove('active');
    });
  });
});

// ####################################################################

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.querySelector('button').dataset.filterValue;
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category.toLowerCase()) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.dataset.filterValue;
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((link, i) => {
  link.addEventListener("click", function () {
    navigationLinks.forEach(navLink => navLink.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));

    this.classList.add("active");
    pages[i].classList.add("active");
    window.scrollTo(0, 0);
  });
});

// تابع ارسال پیام به ربات تلگرام
const sendMessageToTelegram = function (message) {
  const chatId = '101533594'; // شناسه گروه یا چت کاربری مقصد
  const url = `https://api.telegram.org/bot6410878622:AAHEqvMS05MkN_-znobrRsPt3GMvFcbFCXs/sendMessage?chat_id=${chatId}&text=${message}`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('There was a problem with your fetch operation:', error));
}

// اضافه کردن رویداد برای فرم ارسال پیام
form.addEventListener('submit', function (event) {
  event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیش‌فرض

  // دریافت مقادیر فیلدهای فرم
  const fullname = document.querySelector('input[name="fullname"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // ساختن پیام برای ارسال به تلگرام
  let telegramMessage;
  if (currentLanguage === 'fa') {
    telegramMessage = `پیام جدید از سایت:\nنام: ${fullname}\nایمیل: ${email}\n\nپیام:\n${message}`;
  } else {
    telegramMessage = `New message from website:\nName: ${fullname}\nEmail: ${email}\n\nMessage:\n${message}`;
  }

  

  // ارسال پیام به تلگرام
  sendMessageToTelegram(telegramMessage);

  // ارسال داده‌ها به سرور برای ارسال ایمیل
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fullname: fullname,
      email: email,
      message: message
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      console.log('Email sent successfully');
    } else {
      console.error('Error sending email:', data.message);
    }
  })
  .catch(error => console.error('Error:', error));
});
