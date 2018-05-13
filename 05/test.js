// 对切换主题的按钮绑定事件，用来做触发
document.getElementById("sheet-a").addEventListener("click",function(){
    setStyleSheet("a");
});
document.getElementById("sheet-b").addEventListener("click",function(){
    setStyleSheet("b");
});
document.getElementById("sheet-c").addEventListener("click",function(){
    setStyleSheet("c");
});
/**
 * 查找所有的link标签，找到符合条件的css进行切换
 * @title:需要切换的css文件名称，也可以是某值，主要是能够找到所要切换的link标签
 **/
function setStyleSheet(title){  
    // 首先找到DOM中所有的link标签
    var link_list = document.getElementsByTagName("link");
    if ( link_list ){
        for ( var i=0;i<link_list.length;i++ ){
            // 要找到所有link中rel属性值包括style的，也就是包括stylesheet和alternate stylesheet;
            if ( link_list[i].getAttribute("rel").indexOf("style") != -1 ){
                // 将符合条件的link的disabled的属性设为true，都改为禁用；
                link_list[i].disabled = true;
                // 然后判断link标签中的title属性，找到我们需要替换的css文件
                // 找到后将该link的disabled改为启用；
                if ( link_list[i].getAttribute("title") === title){
                    link_list[i].disabled = false;
                }
            }
        }
    }
};