let zf = {
  clothes:1,
  clothes1:2,

  HP:0,
  RAGE:100,
  Lv:1,
  EXP:0,
  
  slill1:3,

  Checkclothes: function () {
    let btn = document.getElementById('btn');
    let btu = document.getElementById('btu');
    if (this.clothes = Math.floor(Math.random()*3)) {
        btn.className = "hide";
        btu.className = "btu";
      view.displayzfYell('啊 飞飞喜欢这个皮肤！');
    }else{
      view.displayzfYell('太丑了飞飞不喜欢');
    }
  },
  Checkclothes1: function () {
    let yin = document.getElementById('yin');
    let btu1 = document.getElementById('btu1');
    if (this.clothes = Math.floor(Math.random()*3)) {
      yin.className = "hide";
      btu1.className = "btu";
      view.displayzfYell('啊 飞飞喜欢这个皮肤！');
    }else{
      view.displayzfYell('太丑了飞飞不喜欢');
    }
  },
  
  changec:function(){
    let pic =document.getElementById('pic');
    pic.style.display = "block";
  },

  showStatus:function(){
    return '等级: ' + this.Lv + '  ' + '怒气值: ' + this.RAGE + '  ' + '经验值: ' + this.EXP;
  },

  live:function(){
    let self = this;
    setInterval(function(){
      if(self.Lv < 15){
        self.Lv = self.Lv + 1;
      }else{
        clearInterval(this.live)
      }
    },4000)
  },

  EXPliving:function(){
    let self = this;
    setInterval(function(){
      if(self.EXP < 7000){
        self.EXP = self.EXP + 500;
      }else{
        clearInterval(this.EXPliving)
      }
    }, 3900);
  },

  Treat:function(){
    let i = this;
      setInterval(function(){
        if (i.HP < 400){
         i.HP = i.HP + 100;
        }else{
          clearInterval(this.Treat)
        }
      },2000)
      let blood = document.getElementById("blood");
      blood.style.width = "85%";
  },

  

  Slill:function(){
    this.RAGE = this.RAGE + 20;
    view.displayzfYell('怒气值增加20,对敌人造成450伤害');
    let nmblood = document.getElementById("nmblood");
    nmblood.style.width = "65%";
    nm.HP = nm.HP - 450;
  },
 
  Slill2:function(){
    this.RAGE = this.RAGE + 30;
    view.displayzfYell('怒气值增加30，对敌人造成300伤害');
    let nmblood = document.getElementById("nmblood");
    nmblood.style.width = "280px";
    nm.HP = nm.HP - 300;
  },

  Slill3: function(){
    view.displayzfYell('对敌人造成500伤害');
    if(this.RAGE < 150){
      view.displayzfYell('怒气值不够无法使用大招');
    }else if(this.RAGE >= 150){
      this.RAGE = 10;
      let nmblood = document.getElementById("nmblood");
      nmblood.style.width = "0px";
      view.displayzfYell('张飞赢了');
    }
    nm.HP = nm.HP - 500;
  },

};



let nm = {
  HP:1000,
  Lv:1,
  EXP:0,

  clothes:1,
  clothes1:2,
  slill:5,
  Slill1:6,
  Slill2:7,
  liveinterval:null,

  showStatus:function(){
    return '等级: ' + this.Lv + '  ' + '经验值: ' + this.EXP;
  },

  Checknmclothes: function () {
    let y = document.getElementById('y');
    let yingduan = document.getElementById('yingduan');
    if (this.clothes = Math.floor(Math.random()*3)) {
      y.className = "hide";
      yingduan.className = "yingduan";
      view.displaynmYell('啊 牛牛喜欢这件');
    }else{
      view.displaynmYell('不好看牛牛不喜欢');
    }
  },
  Checknmclothes1: function () {
    let d = document.getElementById('d');
    let yd = document.getElementById('yd');
    if (this.clothes1 = Math.floor(Math.random()*3)) {
      view.displaynmYell('不好看牛牛不喜欢');
    }else{
      d.className = "hide";
      yd.className = "yd";
      view.displaynmYell('啊 牛牛喜欢这件');
    }
  },

  Treatnm:function(){
    let t = this;
    setInterval(function(){
      if (t.HP < 400){
       t.HP = t.HP + 100;
      }
    },2000)
      clearInterval(this.Treatnm);
      let nmblood = document.getElementById("nmblood");
      nmblood.style.width = "85%";
  },

  Slill1nm:function(){
    if(this.slill = 5){
      view. displaynmYell('对敌人造成250伤害');
      let blood = document.getElementById("blood");
      blood.style.width = "75%";
      zf.HP = zf.HP - 250;
    }
  },

  Slill2nm:function(){
    if(this.slill1 = 6){
      view. displaynmYell('对敌人造成450伤害');
    }
    let blood = document.getElementById("blood");
      blood.style.width = "280px";
    zf.HP = zf.HP - 450;
  },

  Slill3nm:function(){
    if(this.slill2 = 7){
    view. displaynmYell('对敌人造成550伤害');
    let blood = document.getElementById("blood");
      blood.style.width = "0px";
    view.displaynmYell('牛魔赢了');
    }
    zf.HP = zf.HP - 550;
  },

  live:function(){
    let self = this;
    setInterval(function(){
      if(self.Lv < 15){
        self.Lv = self.Lv + 1;
      }else{
        clearInterval(this.live)
      }
    },4000)
  },

  EXPliving:function(){
    let self = this;
    setInterval(function(){
      if(self.EXP < 7000){
        self.EXP = self.EXP + 500;
      }else{
        clearInterval(this.EXPliving)
      }
    }, 3900);
  },







};


let view ={
  displayzfStatus:function(){
    let statusBoard = document.getElementById('zfStatus');
    setInterval( function () {
      statusBoard.innerHTML = zf.showStatus();
    },500);
  },

  displayzfSay:function(str) {
    let sayTxt = document.getElementById('zfSay');
    sayTxt.innerHTML = 'hello';
  },

  displayzfYell: function (str) {
    let zfYell = document.getElementById('zfyell');
    zfYell.innerHTML = str;
  },


  displaynmStatus:function(){
    let statusBoard = document.getElementById('nmStatus');
    setInterval( function () {
      statusBoard.innerHTML = nm.showStatus();
    },500);
  },

  displaynmSay:function(str) {
    let sayTxt = document.getElementById('nmSay');
    sayTxt.innerHTML = 'hello';
  },

  displaynmYell: function (str) {
    let nmYell = document.getElementById('nmyell');
    nmYell.innerHTML = str;
  },


}

  
  view.displayzfStatus();
  view.displaynmStatus();
  zf.live();
  zf.EXPliving();
  nm.live();
  nm.EXPliving();



document.onkeydown = function(event){
  let kc = event.keyCode;
  if (kc === 65){
    zf.Slill();
  }
  if (kc === 83){
    zf.Slill2();
  }
  if(kc === 68){
    zf.Slill3();
  }
  if(kc === 49){
    nm.Slill1nm();
  }
  if(kc === 50){
    nm.Slill2nm();
  }
  if(kc === 51){
    nm.Slill3nm();
  }
};