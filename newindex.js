
let cat = {
  name:  '张飞',
  age: 3,
  weight:  5,
  varieties:  '美短',
  ismale:  false,
  colour: 'Black and white and gray',

  health:  100,
  food:  100,
  water:  100,

  liveInterval : null,

  clothes:1,
  clothes1:2,
  clothes2:3,

 
  say: function () {
    view.displayYell('wang');
    this.water - 1;
  },
  sayname:function(){
    view.displayYell('我的名字叫 ' + this.name );
    this.food - 5;
  },
  run: function(){
    if(! this.isTired()){
      console.log(' 张飞在家里玩');
      this.food = this.food - 12;
      this.water = this.water - 15;
    } else {
      view.displayYell('张飞走不动了')
    };
  },
  //状态
  showStatus:function(){
    return 'health: ' + this.health + ' ' + 'food: ' + this.food + ' ' + 'food: ' + this.food;
  },

  isTired: function(){
    if (this.food >= 20 && this.water >= 20){
      return false;
    };
    return true;
  },

  isLiving: function () {
    if (this.isLive) {
      return true;
    } else {
       view.displayYell(this.name + '一动不动，已经去了天堂');
      return false;
    }
  },

  live: function() {
    let self = this;
    this.liveInterval = setInterval(function(){
      self.water = self.water - 6;
      self.food = self.food - 3;
      self.checkFood();
      self.checkHealth();
      view.displayCatStatus();
    }, 2000);
  },

  checkFood: function (){
    if (this.food <= 0) {
      this.food = 0;
      this.health -= 5;
      view.displayYell('Wang!Wang!Wang!')
    } else if (this.food >= 80) {
      this.food = this.food >= 100 ? 100 : this.food;
      this.health += 5;
    }
  },

  checkHealth: function () {
    //  view.displayYell(this.health);
    this.health = this.health >= 100 ? 100 : this.health;
    if (this.health <= 0 ) {
      this.dead();
    };
  },

  checkStatus:function(){
    if(this.water < 0){
      this.water = 0;
      this.say();
    } 
    if(this.food < 0){
      this.food = 0;
      this.say();
    }
    if (this.water === 0 || this.food === 0){
      this.health = this.health < 0 ? 0 : this.health - 5;
    }
    if (this.health === 0) {
      this.dead();
    }
  },

  dead: function(){
    view.displayYell("aoWooooooo....");
    clearInterval(this.liveInterval);
    this.isLiveing = false;
  },

  tellStatus () {
    return '饱食度: [' + this.food + '], 健康值: [' + this.health + '], 是否存活: [' + (this.isLive ? '活的' : '挂了') + ']';
  },


  resurrect: function () {
    if (!this.isLive) {
      this.isLive = true;
      this.health = 100;
      this.food = 100;
      this.water = 100;
      this.live();
      view.displayYell('为你而战，我的主人');
    } else {
      view.displayYell('说啥呢，老子活蹦乱跳');
    }
  },
  feed: function () {
    if (this.isLiving) {
      this.food = 100;
      this.water = 100;
      view.displayYell(this.name + '吃饱了，又是饱饱的一天');
    }
  },

  Checkclothes: function () {
    if (this.clothes = 1) {
      view.displayYell('我喜欢这件');
    }
  },
  Checkclothes1: function () {
    if (this.clothes1 = 2) {
      view.displayYell('没气色，不喜欢');
    }
  },
  Checkclothes2: function () {
    if (this.clothes2 = 3) {
      view.displayYell('太红了吧，不喜欢');
    }
  },


  
};

  let view = {
    displayCatStatus:function(){
      let statusBoard = document.getElementById('catStatus');
      setInterval( function () {
        statusBoard.innerHTML = cat.showStatus();
      },500);
    },
    
    displayCatSay:function(str) {
        let sayTxt = document.getElementById('catSay');
        sayTxt.innerHTML = 'hello';
      },
  
      displayYell: function (str) {
        let catYell = document.getElementById('yell');
        catYell.innerHTML = str;
      },






  };

  





  view.displayCatStatus();
  view.displayYell('我是一只快乐的小肥肥');
  cat.live();