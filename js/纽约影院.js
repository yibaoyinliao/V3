var rule = {
    title: '纽约影院',
    host: 'https://www.nycvod.com',
    url: '/index.php/api/vod#type=fyfilter&page=fypage',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
	filter: {
        "1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"9"},{"n":"喜剧片","v":"10"},{"n":"奇幻片","v":"11"},{"n":"科幻片","v":"12"},{"n":"恐怖片","v":"22"},{"n":"惊悚片","v":"27"},{"n":"悬疑片","v":"23"},{"n":"爱情片","v":"21"},{"n":"战争片","v":"20"},{"n":"剧情片","v":"6"},{"n":"网络电影","v":"24"},{"n":"犯罪片","v":"26"},{"n":"伦理片","v":"8"},{"n":"灾难片","v":"7"},{"n":"动画电影","v":"25"},{"n":"冒险片","v":"28"},{"n":"同性片","v":"44"},{"n":"纪录片","v":"29"},{"n":"歌舞片","v":"45"},{"n":"经典片","v":"46"}]}],
        "2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"30"},{"n":"欧美剧","v":"47"},{"n":"日韩剧","v":"18"},{"n":"港台剧","v":"16"},{"n":"新马泰剧","v":"14"},{"n":"其他剧","v":"13"}]}],
        "3":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"3"},{"n":"国产综艺","v":"31"},{"n":"日韩综艺","v":"32"},{"n":"欧美综艺","v":"34"},{"n":"港台综艺","v":"35"},{"n":"其他综艺","v":"37"}]}],
        "4":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"4"},{"n":"日韩动漫","v":"38"},{"n":"国产动漫","v":"39"},{"n":"欧美动漫","v":"40"},{"n":"港台动漫","v":"42"},{"n":"其他动漫","v":"43"}]}]
        },
    class_name:'电影&电视剧&综艺&动漫&竞技体育',
    class_url:'1&2&3&4&5',
    detailUrl:'/voddetail/fyid.html',
     推荐:'',
    double:true,
    一级:'div#dataList.list-vod.flex.wrap.border-box.public-r&&.public-list-box.public-pic-b;.public-list-button a&&Text;.div&&data-original;span.public-list-prb&&Text;a&&href',
   二级:{
          title:'.stui-content__detail h1&&Text;p.hidden-xs&&Text',  //片名;类型 时间
          img:"img&&data-original",
          desc:';;;.stui-content__detail p:eq(6)&&a&&Text;.stui-content__detail p:eq(5)&&a&&Text',  //// 演员;导演
          content:"span.detail-sketch&&Text", //主要信息
          tabs:"h3.title",
          lists:'ul.stui-content__playlist:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'',
}