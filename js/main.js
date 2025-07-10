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
        footerRights: '&copy; 2024 AI日历. All rights reserved.',
        footerMadeBy: 'Made with ❤️ by Weiji Zhang'
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
        footerRights: '&copy; 2024 AI Calendar. All rights reserved.',
        footerMadeBy: 'Made with ❤️ by Weiji Zhang'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    updateLanguage();
}

function updateLanguage() {
    const trans = translations[currentLang];
    
    // Update navigation
    document.querySelectorAll('.nav-link')[0].textContent = trans.navFeatures;
    document.querySelectorAll('.nav-link')[1].textContent = trans.navScreenshots;
    document.querySelectorAll('.nav-link')[2].textContent = trans.navDownload;
    document.querySelector('.lang-switch').textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
    
    // Update hero section
    document.querySelector('.hero-title').textContent = trans.heroTitle;
    document.querySelector('.hero-subtitle').textContent = trans.heroSubtitle;
    document.querySelector('.btn-primary').innerHTML = `
        <svg class="apple-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        ${trans.downloadBtn}
    `;
    document.querySelector('.btn-secondary').textContent = trans.learnMore;
    
    // Update features section
    document.querySelectorAll('.section-title')[0].textContent = trans.featuresTitle;
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = trans.feature1Title;
    featureCards[0].querySelector('p').textContent = trans.feature1Desc;
    featureCards[1].querySelector('h3').textContent = trans.feature2Title;
    featureCards[1].querySelector('p').textContent = trans.feature2Desc;
    featureCards[2].querySelector('h3').textContent = trans.feature3Title;
    featureCards[2].querySelector('p').textContent = trans.feature3Desc;
    featureCards[3].querySelector('h3').textContent = trans.feature4Title;
    featureCards[3].querySelector('p').textContent = trans.feature4Desc;
    featureCards[4].querySelector('h3').textContent = trans.feature5Title;
    featureCards[4].querySelector('p').textContent = trans.feature5Desc;
    featureCards[5].querySelector('h3').textContent = trans.feature6Title;
    featureCards[5].querySelector('p').textContent = trans.feature6Desc;
    
    // Update screenshots section
    document.querySelectorAll('.section-title')[1].textContent = trans.screenshotsTitle;
    const screenshots = document.querySelectorAll('.screenshot-item p');
    screenshots[0].textContent = trans.screenshot1;
    screenshots[1].textContent = trans.screenshot2;
    screenshots[2].textContent = trans.screenshot3;
    screenshots[3].textContent = trans.screenshot4;
    
    // Update download section
    document.querySelector('.download-content h2').textContent = trans.downloadTitle;
    document.querySelector('.download-content p').textContent = trans.downloadSubtitle;
    document.querySelector('.download-note').textContent = trans.downloadNote;
    
    // Update footer
    const footerP = document.querySelectorAll('.footer-content p');
    footerP[0].innerHTML = trans.footerRights;
    footerP[1].innerHTML = trans.footerMadeBy;
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

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

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
});