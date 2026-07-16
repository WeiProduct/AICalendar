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
    stickySub: 'AI 智能排程 · 免费', stickyGet: '获取',
    eyeHow: '流程', eyeDemo: '亲手试试', eyeEngine: '排程原理', eyeFeatures: '功能', eyePersona: '适用人群',
    eyeShots: '截图', eyeCompare: '对比', eyePrivacy: '隐私', eyeFaq: '问答',
    demoTitle: '亲眼看 AI 排好你的一天',
    demoSub: '左边是待排任务，右边是今天的日程。点击按钮，看 AI 把任务填进空档。',
    demoInboxTitle: '任务清单',
    demoTask1: '写论文 · 2h · 周五截止', demoTask2: '健身 · 45min', demoTask3: '背单词 · 30min',
    demoToday: '今天', demoAiTag: '排程演示',
    demoFixed1: '团队会议', demoFixed2: '午餐',
    demoT1a: '写论文 1/2 · 60min', demoT1b: '写论文 2/2 · 60min',
    demoT2: '健身 · 45min', demoT3: '背单词 · 30min',
    demoGap: '空档',
    demoBtn: 'AI 一键排程', demoShuffle: '换个日程再试',
    demoDone: '4 个空档已填满 · 0 冲突 · 2h 任务已拆成 2 段',
    engTitle: 'AI 排程是怎么想的', engSub: '四步透明的排程流程，没有黑箱。',
    eng1t: '读取约束', eng1d: '时长 · 截止日期 · 优先级',
    eng2t: '扫描空档', eng2d: '避开固定事件，找出可用时段',
    eng3t: '冲突检测', eng3d: '重叠自动避让，日程始终干净',
    eng4t: '分片放置', eng4d: '长任务拆成片段，见缝插针推进',
    engCaption: '整个过程在设备本地完成，数据不离开手机',
    personaTitle: '为你的一天而设计', personaSub: '不同的日子，同一个聪明的排程引擎。',
    p1t: '学生党', p1d: '论文和复习只给个截止日期，AI 自动排进课表空档。',
    p2t: '职场人', p2d: '会议之间的碎片时间，自动变成整块的深度工作。',
    p3t: '自由职业者', p3d: '多项目并行，按优先级自动权衡先做哪个。',
    p4t: '习惯养成者', p4d: '健身、阅读固定成型，周报里看见自己的坚持。',
    cmpTitle: '为什么不继续手动排？', cmpSub: '每一行都对应一个真实功能，不玩文字游戏。',
    cmpColScenario: '场景', cmpColManual: '手动排程', cmpColApp: 'AI日历',
    cmpR1s: '会议突然改期', cmpR1m: '整天日程推倒重排', cmpR1a: '空档自动重算，冲突自动避开',
    cmpR2s: '2 小时的大任务', cmpR2m: '找不到整块时间，一拖再拖', cmpR2a: '自动分片，见缝插针地推进',
    cmpR3s: '临近截止日期', cmpR3m: '全靠记性和运气', cmpR3a: '按截止日期和优先级自动排入',
    cmpR4s: '时间都去哪了', cmpR4m: '凭感觉回忆', cmpR4a: '专注计时 + 每周时间报告',
    cmpR5s: '你的日程数据', cmpR5m: '云端日历上传到服务器', cmpR5a: '100% 本地存储，零追踪',
    footerTag: '本地 AI 排程，把每一天安排得清清楚楚。',
    footerProduct: '产品', footerSupport: '支持', footerDownload: '下载 App', footerContact: '联系我们'
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
    stickySub: 'AI scheduling · Free', stickyGet: 'Get',
    eyeHow: 'Workflow', eyeDemo: 'Try it live', eyeEngine: 'How it thinks', eyeFeatures: 'Features', eyePersona: 'Made for you',
    eyeShots: 'Gallery', eyeCompare: 'Compare', eyePrivacy: 'Privacy', eyeFaq: 'FAQ',
    demoTitle: 'Watch AI schedule your day',
    demoSub: 'Flexible tasks on the left, today’s calendar on the right. Tap the button and watch AI fill the gaps.',
    demoInboxTitle: 'Task inbox',
    demoTask1: 'Thesis · 2h · due Fri', demoTask2: 'Workout · 45min', demoTask3: 'Vocab · 30min',
    demoToday: 'Today', demoAiTag: 'Live demo',
    demoFixed1: 'Team meeting', demoFixed2: 'Lunch',
    demoT1a: 'Thesis 1/2 · 60min', demoT1b: 'Thesis 2/2 · 60min',
    demoT2: 'Workout · 45min', demoT3: 'Vocab · 30min',
    demoGap: 'open gap',
    demoBtn: 'Auto-schedule with AI', demoShuffle: 'Try another day',
    demoDone: '4 gaps filled · 0 conflicts · 2h task split in two',
    engTitle: 'How the scheduling engine thinks', engSub: 'A transparent four-step pipeline — no black box.',
    eng1t: 'Read constraints', eng1d: 'Duration · deadline · priority',
    eng2t: 'Scan open gaps', eng2d: 'Finds free time around fixed events',
    eng3t: 'Check conflicts', eng3d: 'Overlaps are avoided automatically',
    eng4t: 'Slice & place', eng4d: 'Long tasks split into segments that fit',
    engCaption: 'The whole pipeline runs on-device — data never leaves your phone',
    personaTitle: 'Made for your kind of day', personaSub: 'Different days, the same smart scheduling engine.',
    p1t: 'Students', p1d: 'Give papers and revision a deadline — AI fits study around classes.',
    p2t: 'Professionals', p2d: 'Gaps between meetings automatically become deep-work blocks.',
    p3t: 'Freelancers', p3d: 'Juggle multiple projects; priority decides what gets scheduled first.',
    p4t: 'Habit builders', p4d: 'Workouts and reading get slotted daily — the weekly report shows your streak.',
    cmpTitle: 'Why not keep planning by hand?', cmpSub: 'Every row maps to a real feature — no word games.',
    cmpColScenario: 'Scenario', cmpColManual: 'Planning by hand', cmpColApp: 'AI Calendar',
    cmpR1s: 'A meeting gets moved', cmpR1m: 'Redo your whole day', cmpR1a: 'Gaps re-slot automatically, conflicts avoided',
    cmpR2s: 'A 2-hour task', cmpR2m: 'Stalls without a free block', cmpR2a: 'Sliced across gaps so it keeps moving',
    cmpR3s: 'A deadline approaches', cmpR3m: 'Memory and luck', cmpR3a: 'Scheduled by deadline and priority',
    cmpR4s: 'Where did time go?', cmpR4m: 'Guesswork', cmpR4a: 'Focus timer + weekly time report',
    cmpR5s: 'Your schedule data', cmpR5m: 'Cloud calendars upload it to servers', cmpR5a: '100% on-device, zero tracking',
    footerTag: 'On-device AI scheduling that plans your day, clearly.',
    footerProduct: 'Product', footerSupport: 'Support', footerDownload: 'Download', footerContact: 'Contact us'
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
  const label = currentLang === 'zh-CN' ? 'EN' : '中文';
  const ls = document.getElementById('langSwitch');
  if (ls) ls.textContent = label;
  const fl = document.getElementById('footerLang');
  if (fl) fl.textContent = label;
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

// ===== Nav + sticky + progress =====
function initScroll() {
  const nav = document.getElementById('navbar');
  const sticky = document.getElementById('stickyCta');
  const prog = document.getElementById('scrollProgress');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
    if (prog) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}

// ===== Interactive scheduling demo =====
const DEMO_LAYOUTS = [
  {
    times: ['9:00', '10:30', '11:30', '12:30', '14:00', '16:00'],
    fixed: { 1: 'demoFixed1', 3: 'demoFixed2' },
    tasks: [
      { slot: 0, key: 'demoT1a', cls: 'd1', chip: '1' },
      { slot: 2, key: 'demoT2', cls: 'd2', chip: '2' },
      { slot: 4, key: 'demoT1b', cls: 'd1', chip: '1' },
      { slot: 5, key: 'demoT3', cls: 'd3', chip: '3' }
    ]
  },
  {
    times: ['8:30', '10:00', '11:00', '12:30', '15:00', '16:30'],
    fixed: { 0: 'demoFixed1', 3: 'demoFixed2' },
    tasks: [
      { slot: 1, key: 'demoT1a', cls: 'd1', chip: '1' },
      { slot: 2, key: 'demoT2', cls: 'd2', chip: '2' },
      { slot: 4, key: 'demoT1b', cls: 'd1', chip: '1' },
      { slot: 5, key: 'demoT3', cls: 'd3', chip: '3' }
    ]
  }
];

function initDemo() {
  const slotsWrap = document.getElementById('demoSlots');
  const btn = document.getElementById('demoBtn');
  const shuffle = document.getElementById('demoShuffle');
  const result = document.getElementById('demoResult');
  if (!slotsWrap || !btn || !result) return;
  const chips = Array.from(document.querySelectorAll('.demo-chip'));
  let layoutIdx = 0;
  let timers = [];

  function render() {
    timers.forEach(clearTimeout);
    timers = [];
    btn.disabled = false;
    result.classList.remove('show');
    chips.forEach(c => c.classList.remove('used'));
    slotsWrap.innerHTML = '';
    const L = DEMO_LAYOUTS[layoutIdx];
    L.times.forEach((time, i) => {
      const slot = document.createElement('div');
      slot.className = 'slot';
      const t = document.createElement('span');
      t.className = 'slot-time';
      t.textContent = time;
      const lane = document.createElement('div');
      lane.className = 'lane';
      if (L.fixed[i]) {
        const ev = document.createElement('div');
        ev.className = 'ev ev-fixed';
        ev.setAttribute('data-i18n', L.fixed[i]);
        lane.appendChild(ev);
      } else {
        const gap = document.createElement('span');
        gap.className = 'demo-gap';
        gap.setAttribute('data-i18n', 'demoGap');
        lane.appendChild(gap);
        const task = L.tasks.find(x => x.slot === i);
        if (task) {
          const ev = document.createElement('div');
          ev.className = 'ev demo-ev ' + task.cls;
          ev.setAttribute('data-i18n', task.key);
          ev.setAttribute('data-chip', task.chip);
          lane.appendChild(ev);
        }
      }
      slot.appendChild(t);
      slot.appendChild(lane);
      slotsWrap.appendChild(slot);
    });
    applyLang(currentLang);
  }

  function play() {
    if (btn.disabled) return;
    btn.disabled = true;
    const evs = Array.from(slotsWrap.querySelectorAll('.demo-ev'));
    evs.forEach((ev, i) => {
      timers.push(setTimeout(() => {
        ev.classList.add('placed');
        ev.parentElement.classList.add('filled');
        const chip = chips.find(c => c.getAttribute('data-chip') === ev.getAttribute('data-chip'));
        if (chip) chip.classList.add('used');
        if (i === evs.length - 1) {
          timers.push(setTimeout(() => result.classList.add('show'), 350));
        }
      }, 300 + i * 450));
    });
  }

  btn.addEventListener('click', play);
  if (shuffle) shuffle.addEventListener('click', () => {
    layoutIdx = (layoutIdx + 1) % DEMO_LAYOUTS.length;
    render();
  });
  render();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initDemo();
  initGallery();
  initReveal();
  initScroll();

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  const toggleLang = () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN');
  const toggleTheme = () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  const ls = document.getElementById('langSwitch');
  if (ls) ls.addEventListener('click', toggleLang);
  const tt = document.getElementById('themeToggle');
  if (tt) tt.addEventListener('click', toggleTheme);
  const fl = document.getElementById('footerLang');
  if (fl) fl.addEventListener('click', toggleLang);
  const ft = document.getElementById('footerTheme');
  if (ft) ft.addEventListener('click', toggleTheme);

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
