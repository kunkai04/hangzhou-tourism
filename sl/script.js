// 模块化代码结构
import initLazyLoad from './lazyLoad.js';

const HangzhouTourism = (() => {
    // 私有数据
    const scenicSpots = [
        {
            id: 1,
            name: "西湖：淡妆浓抹总相宜的诗意天堂",
            img: "assets/images/west-lake.jpg",
            desc: "西湖，杭州的灵魂，中国十大风景名胜之一。她如一面明镜镶嵌在城市中央，以 “三面云山一面城” 的格局闻名。春日苏堤春晓，柳丝拂水，桃花灼灼；夏日曲院风荷，接天莲叶托起千朵红莲；秋日满陇桂雨，金粟铺地，香漫湖山；冬日断桥残雪，银装素裹，恍若仙境。湖中有 “三潭印月” 亭亭玉立，雷峰塔倒影如画，白堤、苏堤如绸带蜿蜒。苏轼一句 “欲把西湖比西子，淡妆浓抹总相宜” 道尽她的百变之美。千年文脉在此沉淀，白居易、苏轼的治水功绩，许仙白娘子的传说，让湖山更添人文温度。无论是泛舟碧波，还是漫步湖畔，处处皆是 “一步一景，一景一诗” 的江南韵致。",
            features: ["断桥残雪", "雷峰夕照", "三潭印月"]
        },
        {
            id: 2,
            name: "灵隐寺：隐于山水间的千年禅境",
            img: "assets/images/lingyin-temple.jpg",
            desc: "灵隐寺，东晋咸和元年（326 年）由印度僧人慧理创建，因 “仙灵所隐” 得名，位列禅宗十大古刹。寺藏西湖西北灵隐山麓，背倚北高峰，面朝飞来峰，古木参天，清泉绕阶，深具 “隐” 之禅意。天王殿、大雄宝殿、药师殿沿中轴线展开，五百罗汉堂、济公殿错落其间，寺内石塔、经幢为宋代原物，2013 年列入全国文保。历史上，吴越王扩建、康熙赐名 “云林禅寺”，历代高僧辈出，留下 “楼观沧海日，门对浙江潮” 的诗句。飞来峰摩崖造像现存 380 余龛，五代至元代石刻艺术在此凝固。晨钟暮鼓中，香客络绎，古刹既具皇家气度，又含山林野趣，正如寺联所书：“峰峦或再有飞来，坐山门老等；泉水已渐生暖意，放笑脸相迎”。",
            features: ["天王殿", "大雄宝殿", "药师殿"]
        },
        {
            id: 3,
            name: "西溪湿地：城市里的诗意水乡地",
            img: "assets/images/xixi-wetland.jpg",
            desc: "西溪湿地，杭州的 “城市绿肺”，中国首个国家湿地公园。这里水网纵横，60% 面积为河港、池塘、湖漾，11 条主港如叶脉延伸，百年柿树、芦苇荡、菖蒲洲点缀其间。春日蒹葭泛绿，舟行水巷，可见白鹭惊起；夏日 “火柿节” 红果压枝，渔民划着乌篷船采莲；秋日芦花似雪，候鸟栖息，湿地迷宫曲径通幽；冬日残荷听雨，河渚街年味浓郁。西溪以 “一曲溪流一曲烟” 的野趣著称，保留着 “柿基鱼塘” 的农耕智慧，烟水庵、秋雪庵等古庵隐于苇丛，龙舟胜会、西溪小花篮等非遗传承至今。乘摇橹船穿行，看水杉倒映，闻菱角清香，仿佛闯入《富春山居图》的水墨意境，被誉为 “杭州之肾” 与 “心灵栖息地”。",
            features: ["深潭口", "烟水渔庄", "河渚街"]
        },
        
        {
            id: 4,
            name: "千岛湖：千岛沉浮的碧水明珠湖",
            img: "assets/images/qiandao-lake.jpg",
            desc: "千岛湖，因 1078 座翠岛星罗棋布得名，位于杭州淳安，是新安江水库的诗意化身。湖水澄碧，能见度达 10 米，被誉为 “天下第一秀水”。岛屿形态各异，龙山岛藏海瑞祠，梅峰岛观 “千岛胜景”，猴岛、蛇岛野趣盎然。春日山花烂漫，茶园飘香；夏日清凉沁人，可潜水游湖；秋日层林尽染，柑橘金黄；冬日雾锁千岛，宛如仙境。湖周群山叠翠，森林覆盖率超 95%，负氧离子爆表。这里孕育了 “淳鱼” 品牌，有机鱼头汤鲜香四溢。郭沫若赞其 “西子三千个，群山已失高”，乘游船穿行，看碧波涌翠，岛屿如绿螺沉浮，夕阳下湖光鎏金，恍若误入瑶池。作为长三角度假胜地，千岛湖以 “一湖秀水，千岛竞秀” 诠释着人与自然的和谐共生。",
            features: ["梅峰岛", "猴岛", "龙山岛"]
        }
    ];

    // 私有方法
    const createCard = (spot) => {
        return `
            <article class="scenic-spot" data-id="${spot.id}">
                <img src="${spot.img}" alt="${spot.name}" class="spot-image">
                <div class="spot-info">
                    <h3 class="spot-name">${spot.name}</h3>
                    <p class="spot-desc">${spot.desc}</p>
                    <ul class="features-list">
                        ${spot.features.map(feature => `<li class="feature-item">${feature}</li>`).join('')}
                    </ul>
                </div>
            </article>
        `;
    };

    const filterSpots = (keyword) => {
        return scenicSpots.filter(spot => {
            return spot.name.includes(keyword) || spot.desc.includes(keyword);
        });
    };

    // 公共方法
    return {
        init() {
            this.renderSpots();
            this.initScrollEvents();
            initLazyLoad();
            this.initNavigation();
            this.initSearch();
        },

        renderSpots(filteredSpots = scenicSpots) {
            const container = document.getElementById('spots-container');
            container.innerHTML = filteredSpots.map(createCard).join('');
        },

        initScrollEvents() {
            const backToTop = document.getElementById('backToTop');
            
            window.addEventListener('scroll', () => {
                backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
                
                // 导航栏激活状态
                const sections = document.querySelectorAll('section');
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.7) {
                        document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
                    } else {
                        document.querySelector(`a[href="#${section.id}"]`).classList.remove('active');
                    }
                });
            });

            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        },

        initNavigation() {
            const navList = document.querySelector('.nav-list');
            navList.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link')) {
                    e.preventDefault();
                    const linkText = e.target.textContent;
                    let targetUrl = '';
                    switch (linkText) {
                        case '西湖十景':
                            targetUrl = 'https://wgly.hangzhou.gov.cn/cn/whhz/sjyc/xh/index.html';
                            break;
                        case '禅意之旅':
                            targetUrl = 'https://www.lingyinsi.org/history/index.html';
                            break;
                        case '湿地生态':
                            targetUrl = 'http://www.xixiwetland.com.cn/';
                            break;
                        case '千岛秘境':
                            targetUrl = 'https://wgly.hangzhou.gov.cn/art/2021/10/22/art_1229578164_58938614.html';
                            break;
                        default:
                            break;
                    }
                    if (targetUrl) {
                        // 在新窗口打开链接
                        window.open(targetUrl, '_blank');
                    }
                }
            });
        },

        initSearch() {
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', (e) => {
                const keyword = e.target.value.trim();
                const filteredSpots = filterSpots(keyword);
                this.renderSpots(filteredSpots);
            });
        }
    };
})();

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    HangzhouTourism.init();
});