var rule={
    title:'速搜影院',
    host:'https://www.sstv.pw/',
    url:'/vodshow-fyclass/page/fypage/?wd=',
    //searchUrl:'/vodsearch/**----------fypage---/',
   //url: '/vodshow-fyclassfyfilter/',
    filterable:1,//是否启用分类筛选,
    //filter_url:'{{fl.area}}/page/fypage',
    filter_url:'{{fl.area}}',
    filter:{
       "1":[
  {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"大陆","v":"/area/大陆"},
  {"n":"台湾","v":"/area/台湾"},
  {"n":"香港","v":"/area/香港"},
  {"n":"美国","v":"/area/美国"},
  {"n":"日本","v":"/area/日本"},
  {"n":"韩国","v":"/area/韩国"},
  {"n":"法国","v":"/area/法国"}, 
  {"n":"英国","v":"/area/英国"},
  {"n":"印度","v":"/area/印度"},
  {"n":"其他","v":"/area/其他"}]}],
          
"2":[
 {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"大陆","v":"/area/大陆"},
  {"n":"台湾","v":"/area/台湾"},
  {"n":"香港","v":"/area/香港"},
  {"n":"美国","v":"/area/美国"},
  {"n":"日本","v":"/area/日本"},
  {"n":"韩国","v":"/area/韩国"},
  {"n":"法国","v":"/area/法国"}, 
  {"n":"英国","v":"/area/英国"},
  {"n":"印度","v":"/area/印度"},
  {"n":"其他","v":"/area/其他"}]}],

"3":[
 {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"大陆","v":"/area/大陆"},
  {"n":"台湾","v":"/area/台湾"},
  {"n":"香港","v":"/area/香港"},
  {"n":"美国","v":"/area/美国"},
  {"n":"日本","v":"/area/日本"},
  {"n":"韩国","v":"/area/韩国"},
  {"n":"法国","v":"/area/法国"}, 
  {"n":"英国","v":"/area/英国"},
  {"n":"印度","v":"/area/印度"},
  {"n":"其他","v":"/area/其他"}]}],

  "4":[
  {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"大陆","v":"/area/大陆"},
  {"n":"台湾","v":"/area/台湾"},
  {"n":"香港","v":"/area/香港"},
  {"n":"美国","v":"/area/美国"},
  {"n":"日本","v":"/area/日本"},
  {"n":"韩国","v":"/area/韩国"},
  {"n":"法国","v":"/area/法国"}, 
  {"n":"英国","v":"/area/英国"},
  {"n":"印度","v":"/area/印度"},
  {"n":"其他","v":"/area/其他"}]}],
  
  "5":[
  {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"大陆","v":"/area/大陆"},
  {"n":"台湾","v":"/area/台湾"},
  {"n":"香港","v":"/area/香港"},
  {"n":"美国","v":"/area/美国"},
  {"n":"日本","v":"/area/日本"},
  {"n":"韩国","v":"/area/韩国"},
  {"n":"法国","v":"/area/法国"}, 
  {"n":"英国","v":"/area/英国"},
  {"n":"印度","v":"/area/印度"},
  {"n":"其他","v":"/area/其他"}]}]
    },
    searchUrl: '/so/page/fypage/wd/**/',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    class_name:'电影&剧集&综艺&动漫&记录',
    class_url:'1&2&3&4&21',
    推荐:'',
    double:true, // 推荐内容是否双层定位
   一级:'.item;.zmovo-team-title.pcxs a&&Text;img&&src;.zmovo-team-title.pcxs h4&&Text;.zmovo-team-title.pcxs a&&href',
   二级:{
          title:'h1.doc-title.mdui-text-color-white&&Text;a&&target',  //片名;类型 时间
          desc:';;;a&&Text;a&&target',  //// 演员;导演
          content:".inline_item p&&Text", //主要信息
          tabs:".mdui-panel-item-title",
          lists:'.mdui-panel-item-body:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'body li.vod_item;*;*;*;*',
}