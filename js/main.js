// ===== i18n =====
const I18N = {
  'zh-CN': {
    skip: '跳到主要内容',
    navHow: '使用流程', navFeatures: '功能特点', navScreenshots: '应用截图', navFaq: '常见问题', navGet: '获取 App',
    heroEyebrow: '✦ AI 驱动的时间管理',
    heroTitle: '让 AI 帮您规划每一天',
    heroSubtitle: '智能排程、灵活调度、专注管理，让时间管理变得简单高效。',
    downloadBtn: 'App Store 下载', learnMore: '了解更多',
    trust1: '🔒 数据全本地', trust2: '📶 离线可用', trust3: '🌏 中英双语',
    schedToday: '今天', schedAi: 'AI 已优化',
    ev1: '写周报 · 90min', evFixed: '团队会议', ev2: '健身 · 45min', ev3: '读英语 · 30min', ev4: '整理素材 · 60min',
    schedFoot: '冲突已避开 · 3 个空档已填满',
    chipA: '⏱️ 专注 2h 10m', chipB: '✅ 今日 6/7',
    proofRating: '时间管理 · 效率工具',
    stat1: '原生体验', stat2: '本地存储', stat3: '双语界面', stat4: '广告 · 追踪',
    howTitle: '三步开启高效的一天', howSub: '告诉它要做什么，剩下的交给 AI。',
    step1Title: '添加任务与截止', step1Desc: '录入固定事件，或只填任务时长和 deadline，无需自己排时间。',
    step2Title: 'AI 自动排入最优时段', step2Desc: '按优先级和空档智能排程，自动避开冲突，长任务见缝插针。',
    step3Title: '专注计时并每周复盘', step3Desc: '用内置番茄钟专注，自动记录时长，每周生成时间去向报告。',
    featuresTitle: '核心功能', featuresSub: '为专注和掌控感而设计的每一个细节。',
    feature1Title: 'AI 智能排程', feature1Desc: '根据任务优先级和截止时间，自动安排最优时间段，避免冲突，提高效率。',
    feature2Title: '灵活任务管理', feature2Desc: '区分固定事件和灵活任务，支持任务分片，让长任务也能见缝插针。',
    feature3Title: '专注计时器', feature3Desc: '内置番茄钟，关联具体任务，追踪专注时长，提升工作效率。',
    feature4Title: '数据统计', feature4Desc: '详细的时间使用报告，了解您的时间去向，持续优化时间管理。',
    feature5Title: '中英双语', feature5Desc: '完美支持中文和英文界面，满足不同用户的使用习惯。',
    feature6Title: '隐私优先', feature6Desc: '所有数据本地存储，无需网络连接，您的日程信息绝对安全。',
    screenshotsTitle: '应用截图', screenshotsSub: '左右滑动，点击可放大查看。',
    shot1: 'AI 自动填满你的空档', shot2: '固定事件与灵活任务', shot3: '专注计时，追踪时长', shot4: '时间去向一目了然',
    privacyTitle: '您的日程，只属于您', privacyDesc: '没有账号，没有云端，没有追踪。AI 排程在设备本地完成，卸载即彻底清除。',
    pp1: '数据本地存储', pp2: '离线即可使用', pp3: '无任何追踪', pp4: '无广告干扰',
    faqTitle: '常见问题',
    q1: 'AI 排程需要联网吗？', a1: '不需要。AI 排程逻辑在设备本地运行，全程离线可用，您的日程数据不会离开手机。',
    q2: '数据会同步到云端吗？', a2: '所有数据都保存在您的设备本地，我们不上传、不收集、不追踪任何日程信息。',
    q3: '固定事件和灵活任务有什么区别？', a3: '固定事件有明确时间（如会议）；灵活任务只需时长和截止日期，AI 会把它们自动排入空档。',
    q4: '任务分片是怎么工作的？', a4: '较长的任务可被拆成多个片段，AI 见缝插针地分配到多个空闲时段，让长任务也能持续推进。',
    q5: '支持哪些语言和系统版本？', a5: '支持简体中文与英文双语，需要 iOS 17.0 或更高版本。',
    downloadTitle: '立即下载 AI日历', downloadSubtitle: '开始您的高效时间管理之旅。', downloadNote: '需要 iOS 17.0 或更高版本',
    footerRights: 'AI日历. 保留所有权利。', footerMadeBy: 'Built by WeiProduct',
    stickySub: 'AI 智能排程 · 免费', stickyGet: '获取'
  },
  'en': {
    skip: 'Skip to content',
    navHow: 'How it works', navFeatures: 'Features', navScreenshots: 'Screenshots', navFaq: 'FAQ', navGet: 'Get App',
    heroEyebrow: '✦ AI-powered time management',
    heroTitle: 'Let AI Plan Your Day',
    heroSubtitle: 'Smart scheduling, flexible tasks, and focus tracking — time management made effortless.',
    downloadBtn: 'Download on App Store', learnMore: 'Learn more',
    trust1: '🔒 Fully on-device', trust2: '📶 Works offline', trust3: '🌏 EN / 中文',
    schedToday: 'Today', schedAi: 'AI optimized',
    ev1: 'Weekly report · 90m', evFixed: 'Team meeting', ev2: 'Workout · 45m', ev3: 'English · 30m', ev4: 'Organize · 60m',
    schedFoot: 'Conflicts avoided · 3 gaps filled',
    chipA: '⏱️ Focus 2h 10m', chipB: '✅ 6/7 today',
    proofRating: 'Time management · Productivity',
    stat1: 'Native feel', stat2: 'On-device', stat3: 'Bilingual', stat4: 'Ads · Tracking',
    howTitle: 'Start your day in three steps', howSub: 'Tell it what to do — AI handles the rest.',
    step1Title: 'Add tasks & deadlines', step1Desc: 'Add fixed events, or just a duration and a deadline — no manual scheduling.',
    step2Title: 'AI auto-schedules optimal slots', step2Desc: 'Smart scheduling by priority and open gaps, avoiding conflicts and slicing long tasks in.',
    step3Title: 'Focus & weekly review', step3Desc: 'Focus with the built-in Pomodoro timer, auto-track time, and get a weekly report.',
    featuresTitle: 'Core Features', featuresSub: 'Every detail designed for focus and control.',
    feature1Title: 'AI Smart Scheduling', feature1Desc: 'Automatically arranges optimal time slots by task priority and deadline, avoiding conflicts.',
    feature2Title: 'Flexible Task Management', feature2Desc: 'Distinguishes fixed events from flexible tasks, with slicing so long tasks fit into any gap.',
    feature3Title: 'Focus Timer', feature3Desc: 'Built-in Pomodoro timer linked to tasks, tracking focus time to boost productivity.',
    feature4Title: 'Data Analytics', feature4Desc: 'Detailed time-usage reports show where your time goes and help you keep optimizing.',
    feature5Title: 'Bilingual Support', feature5Desc: 'Full support for both Chinese and English interfaces to fit every user.',
    feature6Title: 'Privacy First', feature6Desc: 'All data stored locally, no internet required — your schedule stays absolutely private.',
    screenshotsTitle: 'Screenshots', screenshotsSub: 'Swipe through — tap any shot to zoom in.',
    shot1: 'AI fills your open gaps', shot2: 'Fixed events & flexible tasks', shot3: 'Focus timing & tracking', shot4: 'See where your time goes',
    privacyTitle: 'Your schedule is yours alone', privacyDesc: 'No account, no cloud, no tracking. AI scheduling runs on-device and is wiped completely on uninstall.',
    pp1: 'Stored on-device', pp2: 'Works offline', pp3: 'Zero tracking', pp4: 'No ads',
    faqTitle: 'Frequently Asked Questions',
    q1: 'Does AI scheduling need internet?', a1: 'No. The scheduling logic runs entirely on-device and works offline — your data never leaves your phone.',
    q2: 'Is my data synced to the cloud?', a2: 'All data stays on your device. We never upload, collect, or track any schedule information.',
    q3: "What's the difference between fixed events and flexible tasks?", a3: 'Fixed events have a set time (e.g. a meeting); flexible tasks only need a duration and deadline, and AI slots them into open gaps.',
    q4: 'How does task slicing work?', a4: 'Longer tasks can be split into segments that AI distributes across multiple free slots, so long work keeps moving.',
    q5: 'Which languages and iOS versions are supported?', a5: 'Simplified Chinese and English, requiring iOS 17.0 or later.',
    downloadTitle: 'Download AI Calendar Now', downloadSubtitle: 'Start your journey to effortless time management.', downloadNote: 'Requires iOS 17.0 or later',
    footerRights: 'AI Calendar. All rights reserved.', footerMadeBy: 'Built by WeiProduct',
    stickySub: 'AI scheduling · Free', stickyGet: 'Get'
  }
};

let currentLang = 'zh-CN';

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : 'zh-CN';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.documentElement.lang = currentLang;
  const ls = document.getElementById('langSwitch');
  if (ls) ls.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved) saved = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  applyLang(saved);
}

// ===== Theme =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0B0B0F' : '#007AFF');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
function initTheme() {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (!saved) saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved);
}

// ===== Gallery =====
function initGallery() {
  const track = document.getElementById('galTrack');
  if (!track) return;
  const shots = Array.from(track.children);
  const dotsWrap = document.getElementById('galDots');
  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  shots.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'screenshot ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => shots[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function activeIndex() {
    const c = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    shots.forEach((s, i) => {
      const center = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(center - c);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }
  track.addEventListener('scroll', () => {
    const i = activeIndex();
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
  }, { passive: true });

  const step = () => (shots[1] ? shots[1].offsetLeft - shots[0].offsetLeft : 300);
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="close">&times;</button><img alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const close = () => lb.classList.remove('open');
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  track.querySelectorAll('.phone').forEach(p => {
    p.addEventListener('click', () => {
      const img = p.querySelector('img');
      lbImg.src = img.src; lbImg.alt = img.alt;
      lb.classList.add('open');
    });
  });
}

// ===== Scroll reveal =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i, 6) * 0.05) + 's'; io.observe(el); });
}

// ===== Nav + sticky =====
function initScroll() {
  const nav = document.getElementById('navbar');
  const sticky = document.getElementById('stickyCta');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initGallery();
  initReveal();
  initScroll();

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  const ls = document.getElementById('langSwitch');
  if (ls) ls.addEventListener('click', () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN'));
  const tt = document.getElementById('themeToggle');
  if (tt) tt.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
});
