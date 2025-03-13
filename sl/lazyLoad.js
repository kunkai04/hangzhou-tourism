// 懒加载模块
const initLazyLoad = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '0px 0px 200px 0px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        observer.observe(img);
    });
};

export default initLazyLoad;