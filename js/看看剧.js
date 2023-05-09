var rule = {
    title:'看看剧',
    host:'https://www.kankanju.cc/',
    url:'/type/fyclass-fypage/',
    filterable:1,//是否启用分类筛选,
    filter_url:'/vodshow/{{fl.area}}/id/fyclass/page/fypage',
    filter:{
       "1":[
  {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"中国大陆","v":"/area/中国大陆"},
  {"n":"中国香港","v":"/area/中国香港"},
  {"n":"中国台湾","v":"/area/中国台湾"},
  {"n":"美国","v":"/area/美国"},
  {"n":"韩国","v":"/area/韩国"},
  {"n":"日本","v":"/area/日本"},
  {"n":"泰国","v":"/area/泰国"},
  {"n":"新加坡","v":"/area/新加坡"},
  {"n":"马来西亚","v":"/area/马来西亚"},
  {"n":"印度","v":"/area/印度"},
  {"n":"英国","v":"/area/英国"},
  {"n":"法国","v":"/area/法国"}, 
  {"n":"德国","v":"/area/德国"},
  {"n":"加拿大","v":"/area/加拿大"},
  {"n":"西班牙","v":"/area/西班牙"},
  {"n":"俄罗斯","v":"/area/俄罗斯"},
  {"n":"其他","v":"/area/其他"}]}],
          
"2":[
 {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"中国大陆","v":"/area/中国大陆"},
  {"n":"中国香港","v":"/area/中国香港"},
  {"n":"中国台湾","v":"/area/中国台湾"},
  {"n":"美国","v":"/area/美国"},
  {"n":"韩国","v":"/area/韩国"},
  {"n":"日本","v":"/area/日本"},
  {"n":"泰国","v":"/area/泰国"},
  {"n":"新加坡","v":"/area/新加坡"},
  {"n":"马来西亚","v":"/area/马来西亚"},
  {"n":"印度","v":"/area/印度"},
  {"n":"英国","v":"/area/英国"},
  {"n":"法国","v":"/area/法国"}, 
  {"n":"德国","v":"/area/德国"}]}],

"3":[
 {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"中国大陆","v":"/area/中国大陆"},
  {"n":"中国香港","v":"/area/中国香港"},
  {"n":"中国台湾","v":"/area/中国台湾"},
  {"n":"美国","v":"/area/美国"},
  {"n":"韩国","v":"/area/韩国"},
  {"n":"日本","v":"/area/日本"},
  {"n":"泰国","v":"/area/泰国"},
  {"n":"新加坡","v":"/area/新加坡"},
  {"n":"马来西亚","v":"/area/马来西亚"},
  {"n":"印度","v":"/area/印度"},
  {"n":"英国","v":"/area/英国"},
  {"n":"法国","v":"/area/法国"}, 
  {"n":"德国","v":"/area/德国"},
  {"n":"加拿大","v":"/area/加拿大"},
  {"n":"西班牙","v":"/area/西班牙"},
  {"n":"俄罗斯","v":"/area/俄罗斯"},
  {"n":"其他","v":"/area/其他"}]}],

  "4":[
  {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"中国大陆","v":"/area/中国大陆"},
  {"n":"日本","v":"/area/日本"},
  {"n":"欧美","v":"/area/欧美"},
  {"n":"其他","v":"/area/其他"}]}],
  
  "5":[
  {"key":"area","name":"地区","value":[
  {"n":"全部","v":""},
  {"n":"中国大陆","v":"/area/中国大陆"},
  {"n":"中国香港","v":"/area/中国香港"},
  {"n":"中国台湾","v":"/area/中国台湾"},
  {"n":"美国","v":"/area/美国"},
  {"n":"韩国","v":"/area/韩国"},
  {"n":"日本","v":"/area/日本"},
  {"n":"泰国","v":"/area/泰国"},
  {"n":"新加坡","v":"/area/新加坡"},
  {"n":"马来西亚","v":"/area/马来西亚"},
  {"n":"印度","v":"/area/印度"},
  {"n":"英国","v":"/area/英国"},
  {"n":"法国","v":"/area/法国"}, 
  {"n":"德国","v":"/area/德国"}]}]
    },
    //searchUrl:'/vodshow/id/fyclass/page/fypage.html',
    //class_name:'电影&电视剧&综艺&动漫&记录片',       //静态分类名称拼接
    //class_url:'dianying&dianshiju&zongyi&dongman&jilupian',    //静态分类标识拼接
    class_name:'电影&国产剧&港台剧&欧美剧&泰国剧&日韩剧&记录片&综艺&动漫',       //静态分类名称拼接
    class_url:'dianying&guochanju&gangtaiju&oumeiju&taiguoju&rihanju&jilupian&zongyi&dongman',    //静态分类标识拼接
    推荐:'',
    double:true,
    一级:'.stui-vodlist__box;a&&title;a&&data-original;span.pic-text1&&Text;a&&href',
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