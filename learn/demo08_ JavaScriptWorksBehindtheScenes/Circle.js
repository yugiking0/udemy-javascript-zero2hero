/* //Construction Function Object
function Cat(name, color) {
  this.name = name;
  this.color = color;
  this.stomach = [];
  this.sleep = function () {
    return console.log('Zzz...');
  };
}

//Prototype Function
Cat.prototype.eat = function (mouse) {
  return this.stomach.push(mouse);
}; */
/* 
let jerry = 'Jerry';
let mickey = 'Mickey';
let tom = new Cat('Tom', 'blue');

//! Tom eat 2 mouse
tom.eat(jerry);
tom.eat(mickey);

//$ Log stomach of Tom cat
console.log(tom.stomach);
//["Jerry", "Mickey"] */

//=====================================================//

/**
 *  1. Tạo module `circle.js` export 1 constructor function tên là Circle
 *  2. Circle có 3 property là x, y, radius (toạ độ x, y và bán kính)
 *  3. Circle có 1 method là isOverlapped (overlap là chồng lấn, đè lên nhau), trả về -1 nếu 2 hình tròn này đè lên nhau, trả về 1 nếu 2 hình tròn không đụng nhau, trả về 0 nếu 2 hình tròn tiếp xúc nhau.
 *  4. Test thử
 */

function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}
/**
 * //$ Có độ dài của tâm của 2 đường tròn sẽ là:
 * d = Math.pow((O1.x-O2.x)**2 + (O1.y-O2.y)**2, 1/2)
 * Đè lên nhau khi cắt nhau: |R1-R2| < d < (R1 + R2)
 * Không cắt nhau:d> R1+R2
 * Tiếp xúc khi: d = R1+R2 hoặc d = |R1-R2|
 */
Circle.prototype.isOverlapped = function (anotherCircle) {
  let d = Math.pow(
    (this.x - anotherCircle.x) ** 2 + (this.y - anotherCircle.y) ** 2,
    1 / 2
  );
  console.log('===============================');
  console.log(
    `Circle1(${this.x},${this.y},${this.radius}) và Circle2(${anotherCircle.x},${anotherCircle.y},${anotherCircle.radius})`
  );
  console.log('Khoảng cách 2 tâm:', d);
  console.log('R1+R2:', this.radius + anotherCircle.radius);
  console.log('|R1-R2|:', Math.abs(this.radius - anotherCircle.radius));
  if (
    Math.abs(this.radius - anotherCircle.radius) >= d ||
    d < this.radius + anotherCircle.radius
  ) {
    console.log('Hai hình tròn này đè lên nhau.');
    return -1;
  } else if (this.radius + anotherCircle.radius < d) {
    console.log('Hai hình tròn không đụng nhau.');
    return 1;
  } else if (d == 0) {
    console.log('Hai hình tròn đồng tâm.');
    return 2;
  } else if (
    Math.abs(this.radius - anotherCircle.radius) == d ||
    Math.abs(this.radius + anotherCircle.radius) == d
  ) {
    console.log('Hai hình tròn tiếp xúc nhau.');
    return 0;
  }
};

module.exports = Circle;
