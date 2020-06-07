//5.11
// jiangfeixue
let jfx;
jfx = 10;

// wujiayi left
let wjy;

let result =55;


console.log(jfx * 2);
console.log(jfx % 3);
console.log(Math.floor(jfx / 3));


wjy = "20";
console.log(jfx + wjy);

if (wjy == jfx) {
  console.log(true);
}else{
  console.log(false);
};

console.log(jfx === 10 ? true:"noequal");


if (result >= 80){
  console.log("优秀");
} else {
  if (result >= 60) {
    console.log('及格 ')
  } else {
    console.log('不及格')
  }
}


//5.12
switch (Math.floor(result/10) ) {
  case 10:
  case 9:
  case 8: console.log('优秀');
  case 7: 
  case 6:console.log('合格');
  default :console.log('不及格');
};

let Arr = [];
Arr = [ 1, 2, 3, 4, 5];
Arr[6] = 'string';
console.log(Arr[5]);
Arr[5] = ['a','b','c']

for (let i = 0; i < Arr.length; i++) {
  console.log('Arr[' + i + ']= ' +  Arr[i]);
}

for (let count = 0; count < Arr.length; count++) {
  
  console.log(typeof Arr[count]);
}


//5.14
function hello(a){ 
  console.log('Hello,world')
  return a;
};
hello(2);

function add(x, y){
  return x+y;
};
console.log(add(3, 6));

function max(x, y) {
  if (x > y){
    return x;
  }else{
    return y;
  }
};
console.log(max(2,9));
let num1 = (55,415);
let num2 = (45,56);
console.log(add(max(55,415),max(45,56)));

function pinjun(a, b, c, d, e) {
  return (a+b+c+d+e)/5
};
console.log(pinjun(1,2,4,3,6));
function pinjun2(a, b, c, d, e, f, g) {
  return (a+b+c+d+e+f+g)/7
};
