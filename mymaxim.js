jQuery(function($)
{
  function init()
  {
    var arrMaximDefault = [
      "为什么美国叫美帝？因为有句话是这么说的：美帝，掌握核心科技。	@障障",
      "每当我觉得我的爱情即将理所当然步入永恒的时候，实际上恰恰是危机来临的暴风前夜。	@欲三更",
      "员工辞职最主要的原因是什么？钱少事多离家远，位低权轻责任重。	@路飞",
      "种一棵树最好的时间是十年前，其次是现在。	@CaunDerre",
      "一直认为，所谓新鲜感，不是和未知的人一起去做同样的事情，而是和已知的人一起去体验未知的人生。	@张桃紫",
      "我们坚持一件事情，并不是因为这样做了会有效果，而是坚信，这样做是对的。	@哈维尔",
      "命是弱者借口，运乃强者谦词。	@邓亚圣",
      "别让时代的悲哀，成为你人生的悲哀。	@王利芬",
      "有人觉得交际困难或者比较累，是因为他们总是试图表现出自己所不具备的素质。	@秦春山",
      "在买任何东西之前牢记九字箴言：你喜欢，你需要，你适合。 PS：适用于很多事，包括感情也一样。	@费妮妮",
      "你必须很努力，才能看上去毫不费力。	@陈莲诚",
      "年轻时就释怀与淡泊，是没有希望的。	@王石",
      "人会长大三次。第一次是在发现自己不是世界中心的时候。第二次是在发现即使再怎么努力，终究还是有些事令人无能为力的时候。第三次是在，明知道有些事可能会无能为力，但还是会尽力争取的时候。	@RabbitHeart",
      "The difference between you and everyone else will be how well you execute. Success is all about great execution. @from Getting Real by 37Signals",
      "What you want the most from a new hire is passion for what he does, and there’s no better way of showing it than a trace of commitment in open source projects.  @Jarkko Laine",
      "Adding people to a late software project makes it later. @Fred Brooks",
      "To me, ideas are worth nothing unless executed. They are just a multiplier. Execution is worth millions.	@Derek Sivers",
      "兴趣是最好的老师。	@Albert Einstein",
      "Innovation is not about saying yes to everything. It’s about saying NO to all but the most crucial features.	@Steve Jobs",
      "Stay hungry. Stay foolish.	@Steve Jobs",
      "这辈子没法做太多的事情, 所以每一件都要做到精彩绝伦!	@Steve Jobs",
      "我每天都自问: '如果今天是我生命的最后一天, 我还会做今天打算做的事情吗?'	@Steve Jobs",
      "没有人可以回到过去重新开始, 但谁都可以从现在开始, 书写一个全然不同的结局!",
      "想得到你从未拥有过的东西, 就必须去做你从未做过的事情。",
      "我唯一能确定的就是自己的无知!	@Socrates",
      "不要盲目地崇拜任何权威, 因为你总能找到相反的权威。	@Bertrand Arthur William Russell",
      "许多人宁愿死, 也不愿思考 -- 事实上他们也确实到死都没有思考。	@Bertrand Arthur William Russell",
      "编程的艺术就是处理复杂性的艺术。	@Edsger Dijkstra (图灵奖得主)",
      "简单是可靠的先决条件!	Simplicity is prerequisite for reliability.	@Edsger Dijkstra (图灵奖得主)",
      "设计软件有两种方法: 一种是简单到极致而明显没有缺陷; 另一种是复杂到极致以至于没有明显的缺陷。前者要难得多!	@C.A.R.Hoare",
      "好的程序代码本身就是最好的文档!	@Steve McConnell (《代码大全》作者)",
      "你写下的任何代码, 在六个月以后去看的话, 都像是别人写的。	@Tom Cargill",
      "程序必须首先让人类可以理解, 然后顺便让机器能执行。	@Abelson / Sussman",
      "过早的优化是万恶之源!	Premature optimization is the root of all evil.	@Donald Knuth (算法大牛 图灵奖得主)",
      "在进度落后的项目中增加人手只会导致进度更加落后!	@Fred Brooks (图灵奖得主 《人月神话》作者)",
      "用代码行数测算软件开发进度如同按重量测算飞机的制造进度。	@Bill Gates",
      "如果调试(Debug)是去除Bug的过程, 那么编程就是制造Bug的过程。	@Edsger Dijkstra (图灵奖得主)",
      "软件就像'性'一样, 免费的时候更好!	Software is like sex; it's better when it's free.	@Linus Torvalds (Linux之父)",
      "若批评不自由, 则赞美无意义!	@法国《费加罗报》的宗旨",
      "牺牲基本自由来换取暂时的安全, 最后既得不到安全也得不到自由!	@Benjamin Franklin",
      "在大欺骗的时代, 说出真相就是革命行为!	@George Orwell (《1984》作者)",
      "如果政府不能解决问题, 那它本身就成为问题!	@Ronald Wilson Reagan (美国前总统)",
      "将愚人从他们所敬拜的锁链下解放出来是非常困难的。	@Voltaire (法国启蒙思想家)",
      "解放一个习惯于被奴役的民族比奴役一个习惯于自由的民族更难!	@Charles de Secondat, Baron de Montesquieu (法国启蒙思想家)",
      "你可以暂时地蒙骗所有人, 也可以永久地蒙骗部分人, 但不可能永久地蒙骗所有人。	You can fool all the people some of the time, some of the people all the time, but you cannot fool all the people all the time.	@Abraham Lincoln (美国前总统)",
      "古代愚民政策是不许人民受教育, 现代愚民政策是只许人民受洗脑教育",
      "全中国只有一所学校, 就是党校 -- 其它的学校都是分校!	@陈丹青",
      "小时候一个劲地教你做好人, 长大了一个劲地教你做坏人	这就是中国式教育",
      "以前学英语是为了更好地了解外国, 现在学英语是为了更好地了解中国!",
      "专政与民主是对立的统一, 人民民主是基础, 只有充分民主才能有专政, 离开民主就是法西斯专政!	@胡耀邦",
      "如果人民不欢迎我们, 我们就该下台了!	@胡耀邦",
      "当你试图了解你的祖国, 你已经走上了犯罪道路!	@艾未未 (艺术家 政治异议人士)",
      "既千方百计阻止你知道真相, 又千方百计指责你不明真相 :)",
      "天朝知识分子分三类: 1 沉默的大多数 2 公共知识分子 3 '公公'知识分子",
      "中国人最悲哀的就是: 刚被历史的车轮碾过, 还没来得及爬起来, 发现历史在倒车...",
      "罗马城之所以是这样的罗马城是因为市民就是这样的市民!	This City is what it is because our citizens are what they are.	@Plato",
      "雪崩时, 没有一片雪花觉得自己有责任。	@Voltaire",
      "千万别以为自己可以逃避, 我们的每一步都决定着最后的结局, 我们的脚正在走向自己选定的终点。	@Milan Kundera (作家)",
      "真正的猛士敢于在一个不正常的国家做一个正常的人",
      "每当有事情发生: 懦夫会问: '这么做安全吗?' 患得患失者会问: '这么做明智吗?' 虚荣者会问: '这么做受欢迎吗?' 但是良知只会问: '这么做正确吗?'	@Martin Luther King, Jr. (美国人权领袖)",
      "Google重新发明了搜索, Facebook重新发明了社交, Apple重新发明了手机, Amazon重新发明了书籍...天朝重新发明了局域网!",
      "几十年来, 朝鲜的领导人只有一个, 叫'金正日'; 几十年来, 天朝的领导人也只有一个, 叫'敏感词'",
      "翻墙和OX的相似之处:	一旦会做就老想做; 做第一次之后觉得天地豁然开朗; 每次做都有快感; 觉得不会做的都是SB!",
      "用人不在于如何减少人的短处, 而在于如何发挥人的长处。	@Peter Ferdinand Drucker (管理学之父)",
      "你想雇用的人必须具备3种品质: 正直诚实、聪明能干和精力充沛。如果缺少第1种, 后2种品质会要你命!	@Warren Edward Buffett",
      "只有偏执狂才能生存!	@Andy Grove (英特尔创始人之一, 前任CEO)",
      "伟大的车工值得给他几倍于普通车工的薪水。但一个伟大的程序员, 其价值相当于普通程序员的1万倍!	@Bill Gates",
      "投资是预测资产收益的活动, 而投机是预测市场心理的活动。	@John Maynard Keynes",
      "投资风险来自于: 你不知道你在做什么 :)	@Warren Edward Buffett",
      "真正坚强并且心态健康的人，被朋友出卖，被亲人误解，被爱人抛弃，也不会对人性失去信心。	@罗永浩",
      "希望你一腔正义或者说充满了正直感，受到恶心的人、身边的人、你相信的人给你打击摧残的时候，你明确这样一点就是：你做正确的事不是为了他们做的，是为了你认为是正确的原则去做的。	@罗永浩",
      "经济学理论并不是一些现成的可以用于政策分析的结论。它不是教条，而是一种方法、一种智力工具、一种思维技巧，有助于拥有它的人得出正确的结论。	@John Maynard Keynes",
      "现代社会的三种毒药：消费主义，性自由和成功学。消费主义以品牌为噱头，以时尚为药效，恋物成瘾。性自由以人性为噱头，以性爱为药效，纵欲成瘾。成功学以速成为噱头，以名利为药效，误导急于走捷径成为人上人的年轻人投身其中，投机成瘾。	@古典 (《拆掉思维里的墙》作者)",
      "1988年1月24日，昆明开往上海的80次特快旅客列车运行到贵昆线且午至邓家村站间，发生颠覆事故，造成88人死亡，62人重伤。	事故发生后，丁关根向国务院请辞了铁道部长一职。"
    ];


    var arrMaxim = arrMaximDefault;
    var str = arrMaxim[Math.floor(Math.random() * arrMaxim.length)];
    str = str.replace(/\t/g, "<br/>");
    str = str.replace(/@/g, "<small>");
    var chLeft = String.fromCharCode(60);
    var chRight = String.fromCharCode(62);
    str = str.replace("http:", chLeft+"a href='http:");
    str = str.replace("html", "html'"+chRight+"相关帖子"+chLeft+"/a"+chRight);
    $("blockquote.pull-right").children("p.maxim").html(str);
  }

  $(document).ready(
    function()
    {
      try
      {
        init();
      }
      catch(err)
      {
      }
    }
  );

});
