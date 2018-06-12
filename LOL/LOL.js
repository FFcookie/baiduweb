var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = ["昨天媒婆来我家给我说媒，我正在游戏，媒婆问我：“你找对像有没有什么要求啊?”我看了她一眼随口滑出：“满级满符文的。”她迷茫的看着我：“啊”了一声!!!我感觉有点不对劲，又滑了一句：“最好是不坑不送的!”媒婆崩溃。","老师：“请回答这道题中的酸雨是如何形成的，写出化学方程式。”我：“RQAQAQAWAEAR!” 啪。壮哉我大锐雯。","老师：“第二次工业时涌现了大量人才和发明家，其中最出名的两人是谁?” 我：“黑默丁格和维克托!”", "我第一次打瞎子的时候，出了瓶蓝后来发现不对，怕丢人然后躲进草丛里悄悄喝掉了。", "今天下午玩LOL时候忽然想到我女朋友现在正在电影院门口等我看电影，想到这里我非常伤心，又后悔，我这么大的人了，居然还在玩LOL时候分心！", "有天正lol，对面都推到基地了，眼看守不下去了，这时我们上单提莫说了句对面好像是5黑，而且就坐我对面。你们等着，最初打lol的时候因为技术不好，被人骂成狗。还好后来有大神带我一起玩，我虚心请教，学到了很多经验。现在的我终于和从前大不一样了——别人都骂不过我了。", "以前喜欢一个女生，她说她喜欢会英雄联盟得男生，于是乎我苦练英雄联盟，过了一个月，我把她忘的一干二净了。", "今天去舅舅家玩，表弟在打LOL，我在旁边看，不一会舅舅愤怒的冲进来拍了他一巴掌，我有点看不过去了就说：小孩子玩一会没事，“都他吗叫了几遍上单MISS，上单MISS，还TM拼命带线！”", "LOL 女友和我一起玩游戏。我说你玩吗，她说随便看看，一个月后，女友和我分手了，原因是，我技术太差了。", "一天趁室友不在、把他电脑打开、在桌面截屏、然后把桌面上的快捷方式全部拖回收站、再把桌面换成了刚才截屏的图片、等他回来把电脑打开、准备lol,一直对着图标狂点、没反应、重启。已经重启好几次了、我是不是该告诉他了?","今天一哥们儿，在我旁边玩LOL，这不刚刚更新完，寒冰的e技能变成全屏的了，他就选了她，一级的时候就学了e，还在自家温泉的时候，我叫他快射到敌方温泉试试，一不小心射自家了，一看冷却时间90多秒，然后大叫：叫啊，看吧，你这一叫，劳资射自家了。当时大家一顿淫笑啊！"];

var i = 0;

randomize.addEventListener('click', result);
 


function result() {
  if (i == storyText.length) {
  i = 0;
}
  var newStory = storyText[i];
  i++;
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace(/我/g, name);
    story.textContent = newStory;
    story.style.visibility = 'visible';
    randomize = document.getElementById('text').innerHTML = "再来一次";
  }
  else {
    alert("请输入名字");
  }
}


