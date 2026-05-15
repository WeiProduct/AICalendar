// Language toggle functionality
let currentLang = 'zh-CN';

const translations = {
    'zh-CN': {
        navFeatures: '功能特点',
        navScreenshots: '应用截图',
        navDownload: '下载',
        heroTitle: '让AI帮您规划每一天',
        heroSubtitle: '智能排程、灵活调度、专注管理，让时间管理变得简单高效',
        downloadBtn: 'App Store下载',
        learnMore: '了解更多',
        featuresTitle: '核心功能',
        feature1Title: 'AI智能排程',
        feature1Desc: '根据任务优先级和截止时间，自动安排最优时间段，避免冲突，提高效率',
        feature2Title: '灵活任务管理',
        feature2Desc: '区分固定事件和灵活任务，支持任务分片，让长任务也能见缝插针',
        feature3Title: '专注计时器',
        feature3Desc: '内置番茄钟，关联具体任务，追踪专注时长，提升工作效率',
        feature4Title: '数据统计',
        feature4Desc: '详细的时间使用报告，了解您的时间去向，持续优化时间管理',
        feature5Title: '中英双语',
        feature5Desc: '完美支持中文和英文界面，满足不同用户的使用习惯',
        feature6Title: '隐私优先',
        feature6Desc: '所有数据本地存储，无需网络连接，您的日程信息绝对安全',
        screenshotsTitle: '应用截图',
        screenshot1: '直观的日历视图',
        screenshot2: '智能任务管理',
        screenshot3: '专注计时器',
        screenshot4: '详细统计分析',
        downloadTitle: '立即下载AI日历',
        downloadSubtitle: '开始您的高效时间管理之旅',
        downloadNote: '需要 iOS 17.0 或更高版本',
        footerRights: 'AI日历. All rights reserved.',
        footerMadeBy: 'Built by WeiProduct'
    },
    'en': {
        navFeatures: 'Features',
        navScreenshots: 'Screenshots',
        navDownload: 'Download',
        heroTitle: 'Let AI Plan Your Day',
        heroSubtitle: 'Smart scheduling, flexible tasks, focus management - making time management simple and efficient',
        downloadBtn: 'Download on App Store',
        learnMore: 'Learn More',
        featuresTitle: 'Core Features',
        feature1Title: 'AI Smart Scheduling',
        feature1Desc: 'Automatically arranges optimal time slots based on task priorities and deadlines, avoiding conflicts',
        feature2Title: 'Flexible Task Management',
        feature2Desc: 'Distinguishes between fixed events and flexible tasks, supports task slicing for better time utilization',
        feature3Title: 'Focus Timer',
        feature3Desc: 'Built-in Pomodoro timer linked to specific tasks, tracks focus duration to boost productivity',
        feature4Title: 'Data Analytics',
        feature4Desc: 'Detailed time usage reports to understand where your time goes and continuously optimize',
        feature5Title: 'Bilingual Support',
        feature5Desc: 'Perfect support for both Chinese and English interfaces to meet different user preferences',
        feature6Title: 'Privacy First',
        feature6Desc: 'All data stored locally, no internet required, your schedule information is absolutely secure',
        screenshotsTitle: 'Screenshots',
        screenshot1: 'Intuitive Calendar View',
        screenshot2: 'Smart Task Management',
        screenshot3: 'Focus Timer',
        screenshot4: 'Detailed Analytics',
        downloadTitle: 'Download AI Calendar Now',
        downloadSubtitle: 'Start your journey to efficient time management',
        downloadNote: 'Requires iOS 17.0 or later',
        footerRights: 'AI Calendar. All rights reserved.',
        footerMadeBy: 'Built by WeiProduct'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    updateLanguage();
}

function updateLanguage() {
    const trans = translations[currentLang];
    const navLinks = document.querySelectorAll('.nav-link');
    const langSwitch = document.querySelector('.lang-switch');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const primaryButton = document.querySelector('.btn-primary');
    const secondaryButton = document.querySelector('.btn-secondary');
    const sectionTitles = document.querySelectorAll('.section-title');
    const featureCards = document.querySelectorAll('.feature-card');
    const screenshots = document.querySelectorAll('.screenshot-item p');
    const downloadTitle = document.querySelector('.download-content h2');
    const downloadSubtitle = document.querySelector('.download-content p');
    const downloadNote = document.querySelector('.download-note');
    const footerP = document.querySelectorAll('.footer-content p');
    const currentYear = document.getElementById('currentYear');
    
    if (navLinks.length >= 3) {
        navLinks[0].textContent = trans.navFeatures;
        navLinks[1].textContent = trans.navScreenshots;
        navLinks[2].textContent = trans.navDownload;
    }

    if (langSwitch) {
        langSwitch.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
    }
    
    if (heroTitle) heroTitle.textContent = trans.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = trans.heroSubtitle;
    if (primaryButton) {
        const label = primaryButton.querySelector('.download-label');
        if (label) label.textContent = trans.downloadBtn;
    }
    if (secondaryButton) secondaryButton.textContent = trans.learnMore;
    
    if (sectionTitles[0]) sectionTitles[0].textContent = trans.featuresTitle;
    [
        ['feature1Title', 'feature1Desc'],
        ['feature2Title', 'feature2Desc'],
        ['feature3Title', 'feature3Desc'],
        ['feature4Title', 'feature4Desc'],
        ['feature5Title', 'feature5Desc'],
        ['feature6Title', 'feature6Desc']
    ].forEach(([titleKey, descKey], index) => {
        const card = featureCards[index];
        if (!card) return;
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        if (title) title.textContent = trans[titleKey];
        if (description) description.textContent = trans[descKey];
    });
    
    if (sectionTitles[1]) sectionTitles[1].textContent = trans.screenshotsTitle;
    ['screenshot1', 'screenshot2', 'screenshot3', 'screenshot4'].forEach((key, index) => {
        if (screenshots[index]) {
            screenshots[index].textContent = trans[key];
        }
    });
    
    if (downloadTitle) downloadTitle.textContent = trans.downloadTitle;
    if (downloadSubtitle) downloadSubtitle.textContent = trans.downloadSubtitle;
    if (downloadNote) downloadNote.textContent = trans.downloadNote;
    
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (footerP[0]) {
        footerP[0].textContent = `© ${new Date().getFullYear()} ${trans.footerRights}`;
    }
    if (footerP[1]) footerP[1].textContent = trans.footerMadeBy;
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', toggleLanguage);
    }
    updateLanguage();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.addEventListener('DOMContentLoaded', function() {
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
            observer.observe(card);
        });
    });
}
