export type Lang = 'tr' | 'en'

export const t = {
  nav: {
    home:     { tr: 'Ana Sayfa',  en: 'Home' },
    services: { tr: 'Hizmetler', en: 'Services' },
    cases:    { tr: 'Senaryolar', en: 'Use Cases' },
    about:    { tr: 'Hakkımda',  en: 'About' },
    contact:  { tr: 'İletişim',  en: 'Contact' },
    cta:      { tr: 'Demo Al',   en: 'Get a Demo' },
  },

  hero: {
    badge:    { tr: 'Test & Operasyon Otomasyonu',              en: 'Test & Operations Automation' },
    title1:   { tr: 'Manuel İşleri Otomatikleştirin,',          en: 'Automate Manual Work,' },
    title2:   { tr: 'İşletmenizi Hızlandırın',                  en: 'Accelerate Your Business' },
    desc:     { tr: 'Test otomasyonu ve iş süreci otomasyonu çözümleriyle hata oranınızı düşürün, operasyonunuzu hızlandırın, ekibinizin değerli zamanını geri kazanın.',
                en: 'Reduce error rates, accelerate operations, and reclaim your team\'s valuable time with test automation and business process automation.' },
    ctaPrimary:   { tr: 'Ücretsiz Ön Görüşme',  en: 'Free Intro Call' },
    ctaSecondary: { tr: 'Hizmetleri İncele',     en: 'Explore Services' },
    stat1Val:   { tr: '%90', en: '90%' },
    stat1Label: { tr: 'Daha Az Manuel Test',    en: 'Less Manual Testing' },
    stat2Val:   { tr: '3x',  en: '3x' },
    stat2Label: { tr: 'Daha Hızlı Operasyon',   en: 'Faster Operations' },
    stat3Val:   { tr: '%0',  en: '0%' },
    stat3Label: { tr: 'Kaçırılan Hata',         en: 'Missed Bugs' },
  },

  services: {
    eyebrow: { tr: 'Hizmetler',                    en: 'Services' },
    title1:  { tr: 'İki Güçlü Çözüm,',             en: 'Two Powerful Solutions,' },
    title2:  { tr: 'Tek Çatı Altında',              en: 'Under One Roof' },
    subtitle:{ tr: 'İster yazılım kalitenizi artırmak isteyin, ister operasyonunuzu optimize edin — her iki alanda da uzman desteği alın.',
               en: 'Whether you want to improve software quality or optimize operations — get expert support in both areas.' },
    s1Title: { tr: 'Test Otomasyonu',               en: 'Test Automation' },
    s1Desc:  { tr: 'Web ve mobil uygulamalarınız için kapsamlı otomasyon test altyapısı kurun. Regresyon testlerini otomatikleştirin, CI/CD pipeline\'ınıza entegre edin.',
               en: 'Build comprehensive automation test infrastructure for your web and mobile applications. Automate regression tests and integrate them into your CI/CD pipeline.' },
    s1Items: {
      tr: ['Web UI otomasyon testleri', 'Mobil uygulama test otomasyonu', 'API & entegrasyon testleri', 'Smoke & regresyon test suite\'leri', 'CI/CD pipeline entegrasyonu'],
      en: ['Web UI automation tests', 'Mobile application test automation', 'API & integration tests', 'Smoke & regression test suites', 'CI/CD pipeline integration'],
    },
    s2Title: { tr: 'İş Süreci Otomasyonu (n8n)',    en: 'Business Process Automation (n8n)' },
    s2Desc:  { tr: 'Tekrarlayan operasyonel süreçlerinizi otomatikleştirin. CRM entegrasyonlarından fatura onaylarına, lead yönetiminden bildirim sistemlerine kadar her süreci otomatize edin.',
               en: 'Automate your repetitive operational processes. From CRM integrations to invoice approvals, lead management to notification systems — automate every workflow.' },
    s2Items: {
      tr: ['Lead yönetimi & CRM otomasyonu', 'Fatura & onay süreçleri', 'E-posta & bildirim otomasyonu', 'Veri senkronizasyonu', 'Özel iş akışı tasarımı'],
      en: ['Lead management & CRM automation', 'Invoice & approval workflows', 'Email & notification automation', 'Data synchronization', 'Custom workflow design'],
    },
  },

  usecases: {
    eyebrow: { tr: 'Örnek Senaryolar',             en: 'Use Cases' },
    title1:  { tr: 'Gerçek İşlerde',               en: 'Real Value in' },
    title2:  { tr: 'Gerçek Faydalar',              en: 'Real Businesses' },
    subtitle:{ tr: 'Hangi sektörde olursanız olun, manuel süreçlerinizi otomasyona dönüştürebiliriz.',
               en: 'Whatever your industry, we can transform your manual processes into automation.' },
    catProcess: { tr: 'İş Süreci', en: 'Process' },
    catTest:    { tr: 'Test Otomasyonu', en: 'Test Automation' },
    cases: {
      tr: [
        { icon: '📥', cat: 'İş Süreci', title: 'Lead\'leri Otomatik CRM\'e Aktar', desc: 'Web formundan gelen her yeni lead otomatik olarak CRM\'inize kaydedilir, satış ekibine bildirim gönderilir ve takip e-postası tetiklenir.', steps: ['Form doldurulur', 'n8n webhook tetiklenir', 'CRM\'e kayıt atılır', 'Ekip bilgilendirilir'] },
        { icon: '📱', cat: 'Test Otomasyonu', title: 'Mobil Uygulama Smoke Test', desc: 'Her yeni build sonrası kritik akışlar otomatik test edilir. Login, ödeme, profil güncelleme gibi temel senaryolar CI/CD\'ye entegre şekilde çalışır.', steps: ['Build tamamlanır', 'Appium suite başlatılır', 'Kritik akışlar test edilir', 'Rapor iletilir'] },
        { icon: '📄', cat: 'İş Süreci', title: 'Fatura Onay Sürecini Otomatikleştir', desc: 'Muhasebe ekibinin manüel onay beklemesi tarihe karışıyor. Belirli tutarın altındaki faturalar otomatik onaylanır, üzerindekiler yöneticiye yönlendirilir.', steps: ['Fatura sisteme girer', 'Tutar kontrolü yapılır', 'Otomatik onay / yönlendirme', 'Muhasebe kaydı güncellenir'] },
        { icon: '🌐', cat: 'Test Otomasyonu', title: 'Web Uygulaması Regresyon Testi', desc: 'Her deployment öncesi yüzlerce test senaryosu dakikalar içinde koşulur. Kırık akışlar production\'a çıkmadan tespit edilir.', steps: ['PR oluşturulur', 'Playwright suite başlatılır', 'Regresyon testleri koşulur', 'Pass/Fail raporu yayınlanır'] },
        { icon: '📊', cat: 'İş Süreci', title: 'Haftalık Rapor Otomasyonu', desc: 'Her Pazartesi sabahı ekip yöneticisine otomatik haftalık özet gönderilir. Satış, destek, operasyon verileri tek raporda birleştirilir.', steps: ['Zamanlayıcı tetiklenir', 'Kaynaklardan veri toplanır', 'Rapor oluşturulur', 'E-posta ile gönderilir'] },
        { icon: '🔌', cat: 'Test Otomasyonu', title: 'API Entegrasyon Testleri', desc: 'Backend servisleriniz ve üçüncü parti API\'larla entegrasyonlarınız sürekli izlenir. Hatalı yanıtlar anlık olarak bildirilen test sistemiyle güvende kalın.', steps: ['API endpoint\'leri tanımlanır', 'Test senaryoları oluşturulur', 'Zamanlanmış koşumlar yapılır', 'Hata alarmı iletilir'] },
      ],
      en: [
        { icon: '📥', cat: 'Process', title: 'Auto-Push Leads to CRM', desc: 'Every new lead from your web form is automatically saved to your CRM, a notification is sent to the sales team, and a follow-up email is triggered.', steps: ['Form submitted', 'n8n webhook fires', 'CRM record created', 'Team notified'] },
        { icon: '📱', cat: 'Test Automation', title: 'Mobile App Smoke Test', desc: 'After every new build, critical flows are automatically tested. Core scenarios like login, payment, and profile updates run integrated with CI/CD.', steps: ['Build completes', 'Appium suite starts', 'Critical flows tested', 'Report delivered'] },
        { icon: '📄', cat: 'Process', title: 'Automate Invoice Approval', desc: 'No more waiting for manual approvals. Invoices below a threshold are auto-approved; those above are routed to the manager automatically.', steps: ['Invoice enters system', 'Amount checked', 'Auto-approve / route', 'Accounting updated'] },
        { icon: '🌐', cat: 'Test Automation', title: 'Web App Regression Testing', desc: 'Hundreds of test scenarios run in minutes before every deployment. Broken flows are caught before they reach production.', steps: ['PR created', 'Playwright suite starts', 'Regression tests run', 'Pass/Fail report published'] },
        { icon: '📊', cat: 'Process', title: 'Weekly Report Automation', desc: 'Every Monday morning, an automatic weekly summary is sent to team managers. Sales, support, and operations data are consolidated into one report.', steps: ['Scheduler fires', 'Data collected', 'Report generated', 'Email sent'] },
        { icon: '🔌', cat: 'Test Automation', title: 'API Integration Tests', desc: 'Your backend services and third-party API integrations are continuously monitored. Stay safe with a test system that instantly alerts on faulty responses.', steps: ['Endpoints defined', 'Scenarios created', 'Scheduled runs executed', 'Error alert triggered'] },
      ],
    },
  },

  about: {
    eyebrow:  { tr: 'Hakkımda',                      en: 'About' },
    title1:   { tr: 'Otomasyon Alanında',             en: 'Expert Support in' },
    title2:   { tr: 'Uzman Destek',                   en: 'Automation' },
    role:     { tr: 'QA & Otomasyon Uzmanı',          en: 'QA & Automation Expert' },
    bio1:     { tr: 'Yıllar içinde edindiğim QA ve yazılım test deneyimimi, iş süreçleri otomasyonuyla birleştiriyorum. Amacım: işletmelerin hem yazılım kalitesini artırmasına hem de operasyonel verimliliğini maksimize etmesine yardımcı olmak.',
                en: 'I combine years of QA and software testing experience with business process automation. My goal: to help businesses both improve software quality and maximize operational efficiency.' },
    bio2:     { tr: 'Selenium ve Appium ile kurumsal test otomasyon altyapıları kurdum. n8n ile onlarca iş sürecini otomatikleştirdim. Her projede teknik doğruluğu ve iş değerini ön planda tutuyorum.',
                en: 'I\'ve built enterprise-grade test automation infrastructure with Selenium and Appium, and automated dozens of business processes with n8n. In every project, I prioritize technical accuracy and business value.' },
    skillsTitle: { tr: 'Teknik Uzmanlık', en: 'Technical Expertise' },
    stats: {
      tr: [{ val: '5+', label: 'Yıl Deneyim' }, { val: '30+', label: 'Tamamlanan Proje' }, { val: '10+', label: 'Aktif n8n Akışı' }, { val: '100%', label: 'Müşteri Memnuniyeti' }],
      en: [{ val: '5+', label: 'Years Experience' }, { val: '30+', label: 'Projects Completed' }, { val: '10+', label: 'Active n8n Flows' }, { val: '100%', label: 'Client Satisfaction' }],
    },
    skills: {
      tr: [
        { name: 'Selenium', level: 95, color: '#6c63ff' },
        { name: 'Appium', level: 90, color: '#6c63ff' },
        { name: 'Playwright', level: 88, color: '#6c63ff' },
        { name: 'n8n', level: 92, color: '#00d4aa' },
        { name: 'CI/CD (Jenkins, GitHub Actions)', level: 85, color: '#00d4aa' },
        { name: 'API Testleri (Postman, RestAssured)', level: 90, color: '#00d4aa' },
      ],
      en: [
        { name: 'Selenium', level: 95, color: '#6c63ff' },
        { name: 'Appium', level: 90, color: '#6c63ff' },
        { name: 'Playwright', level: 88, color: '#6c63ff' },
        { name: 'n8n', level: 92, color: '#00d4aa' },
        { name: 'CI/CD (Jenkins, GitHub Actions)', level: 85, color: '#00d4aa' },
        { name: 'API Testing (Postman, RestAssured)', level: 90, color: '#00d4aa' },
      ],
    },
    badges: {
      tr: ['QA Engineer', 'Test Otomasyonu', 'n8n Expert', 'Selenium', 'Appium', 'Playwright', 'CI/CD', 'API Testing', 'İş Süreci Otomasyonu'],
      en: ['QA Engineer', 'Test Automation', 'n8n Expert', 'Selenium', 'Appium', 'Playwright', 'CI/CD', 'API Testing', 'Business Process Automation'],
    },
  },

  contact: {
    eyebrow:  { tr: 'İletişim',                                           en: 'Contact' },
    title1:   { tr: 'Sürecinizi Birlikte',                                en: 'Let\'s Analyze Your' },
    title2:   { tr: 'Analiz Edelim',                                      en: 'Process Together' },
    subtitle: { tr: '15 dakikalık ücretsiz ön görüşmede mevcut süreçlerinizi inceleyelim, otomasyon potansiyelinizi birlikte keşfedelim.',
                en: 'In a free 15-minute intro call, let\'s review your current processes and discover your automation potential together.' },
    whyTitle: { tr: 'Neden Hemen Başlamalısınız?', en: 'Why Start Now?' },
    reasons: {
      tr: [
        { icon: '⏱', title: 'Hızlı Başlangıç', desc: 'İlk otomasyon akışını 1 haftada devreye alıyoruz.' },
        { icon: '📊', title: 'Ölçülebilir Sonuçlar', desc: 'Her proje başında KPI\'lar belirlenir, sonuçlar raporlanır.' },
        { icon: '🔒', title: 'Güvenli & Güvenilir', desc: 'Tüm sistemler test edilmiş, production\'a hazır şekilde teslim edilir.' },
        { icon: '🤝', title: 'Uzun Vadeli Destek', desc: 'Proje bitmez; bakım ve güncelleme desteği sağlanır.' },
      ],
      en: [
        { icon: '⏱', title: 'Fast Start', desc: 'We deploy the first automation flow within 1 week.' },
        { icon: '📊', title: 'Measurable Results', desc: 'KPIs are defined at project start and results are reported.' },
        { icon: '🔒', title: 'Safe & Reliable', desc: 'All systems are tested and delivered production-ready.' },
        { icon: '🤝', title: 'Long-Term Support', desc: 'The project doesn\'t end; maintenance and update support provided.' },
      ],
    },
    labels: {
      tr: { name: 'Ad Soyad *', email: 'E-posta *', company: 'Şirket', service: 'İlgilendiğiniz Hizmet', message: 'Mesajınız *', submit: '15 Dakikalık Ücretsiz Görüşme Talep Et', privacy: 'Spam yok. Bilgileriniz güvende.', namePh: 'Ali Yılmaz', emailPh: 'ali@sirket.com', companyPh: 'Şirket Adı', messagePh: 'Otomatikleştirmek istediğiniz süreci kısaca anlatın...' },
      en: { name: 'Full Name *', email: 'Email *', company: 'Company', service: 'Service of Interest', message: 'Your Message *', submit: 'Request a Free 15-Min Call', privacy: 'No spam. Your info is safe.', namePh: 'John Doe', emailPh: 'john@company.com', companyPh: 'Company Name', messagePh: 'Briefly describe the process you want to automate...' },
    },
    serviceOpts: {
      tr: [{ val: '', label: 'Seçiniz...' }, { val: 'test', label: 'Test Otomasyonu' }, { val: 'n8n', label: 'İş Süreci Otomasyonu (n8n)' }, { val: 'both', label: 'Her İkisi' }],
      en: [{ val: '', label: 'Select...' }, { val: 'test', label: 'Test Automation' }, { val: 'n8n', label: 'Business Process Automation (n8n)' }, { val: 'both', label: 'Both' }],
    },
    success: {
      tr: { title: 'Mesajınız Alındı!', desc: 'En kısa sürede size geri dönüş yapacağım. Görüşmek için sabırsızlanıyorum.' },
      en: { title: 'Message Received!', desc: 'I\'ll get back to you as soon as possible. Looking forward to speaking with you.' },
    },
  },

  footer: {
    copy: {
      tr: '© 2025 UraTech. Test & Operasyon Otomasyonu Çözümleri.',
      en: '© 2025 UraTech. Test & Operations Automation Solutions.',
    },
    links: {
      tr: ['Ana Sayfa', 'Hizmetler', 'Hakkımda', 'İletişim'],
      en: ['Home', 'Services', 'About', 'Contact'],
    },
  },
}
