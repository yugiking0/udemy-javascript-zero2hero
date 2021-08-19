'use strict';
/*
//note NOTE note lưu ý về các highligh todo
//! Lưu ý khi có dấu thang 
//? Thắc mắc về vấn đề chưa được sáng tỏ
/// Ghi chú sẽ bị gạch ngang đi
//note ghi note lại mục nào đó
//todo ghi lại vấn đề cần làm
//fail bị sai mục nào đó.
//debug bắt đầu debug những lỗi nào đó
//begin bắt đầu kiểm tra
//end hết kiểm tra

//begin DEBUG mục nào đó cần kiểm tra

//end DEBUG mục cần kiểm tra
//dev cần viết chi tiết hơn mục này
//$ mục này cũng là todo

*/

/*
//? NOTE Mô tả thiết kế:
//- Có 3 nút Show modal 1,2,3 cùng 1 lớp Class `Show-modal` -> `.show-modal`
- Có màn hình modal; là lớp modal `.modal` đang trạng thái hidden `.modal hidden`, bao gồm nút '.close-modal' và nội dung; hiện đang hidden => vẫn có thể thao tác được 3 nút Show modal.
- Có lớp class layer `.overlay` được phủ lên trên lớp class `.modal` và cả 3 nút `.show-modal`, đang có trạng thái hidden => vẫn có thể thao tác được 3 nút Show modal.
- Khi class `.overlay` bị removed hidden sẽ chặn không cho thao tác 3 nút `.show-modal`.

//! TODO Thao tác:
- Khi bấm 1 trong 3 nút `.show-modal` thì:
  + Hiện lớp `.overlay` để phủ lên không cho thao tác 3 nút `.show-modal` 
  + Sẽ hiện màn hình lớp `.modal` có nội dung và có các nút '.close-modal'
- Để tắt màn hình modal `.modal` và hiện lại 3 nút `.show-modal`, cần:
  + Bấm vào nút '.close-modal'
  + Bấm vào phía ngoài `.modal`, tác động lên `.overlay`
  + Bấm phím `ESC`
=> Gồm chức năng Open Modal và Close Modal.

// todo DESIGN Thiết kế :

- Lấy 3 đối tượng nút `Show-modal`, sau đó thêm chức năng FOpen Modal mỗi khi click vào.
- Lấy đối tượng `.modal`
- Lấy đối tượng `.overlay`
- Lấy đối tượng '.close-modal
- Thêm chức năng FOpen Modal
- Thêm chức năng FClose Modal để đóng Modal
// note Liên quan:
    + Lấy đối tượng nút `.show-modal` 1,2,3 và gán sự kiện fOpen Modal cho nút 
    + Lấy đối tượng `.modal`, removed trạng thái hidden và thêm lại add `.modal hidden`
    + lấy đối tượng nút .close-modal, gán sự kiện fClose Modal
    + Lấy đối tượng `.overlay`, removed trạng thái hidden và thêm lại add `.overlay hidden`
    + Gán sự kiện bấm nút ESC fClose Modal.
*/
/* 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); //Select all class into node array
// console.log(btnOpenModal[2]);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    console.log('Open Modal Button');
  });
} */
//$ 01. Lấy các đối tượng
const btnShowModal = document.querySelectorAll('.show-modal');
// console.log(btnShowModal);
const btnCloseModal = document.querySelector('.close-modal');
const objModal = document.querySelector('.modal');
const objOverlay = document.querySelector('.overlay');

//$ 02. Gán sự kiện cho các đối tượng.
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    //console.log('Sự kiện Open Modal!!!');
    //Sẽ thay bằng funtion fOpenModal
    fOpenModal();
  });
}

//! Bỏ chức năng Hidden trong lớp Class `.modal` và `.overlay`
//console.log(objModal.classList);
const fOpenModal = function () {
  objModal.classList.remove('hidden');
  objOverlay.classList.remove('hidden'); //Khi có overlay sẽ không click vào được các Button Modal nữa.
};

//! Thêm lại chức năng Hidden trong lớp Class
const fCloseModal = function () {
  objModal.classList.add('hidden');
  objOverlay.classList.add('hidden'); //Khi có overlay sẽ không click vào được các Button Modal nữa.
};

//$ Gán sự kiện cho các đối tượng.
btnCloseModal.addEventListener('click', function () {
  fCloseModal();
});

objOverlay.addEventListener('click', function () {
  fCloseModal();
});

//$ Gán sự kiện khi bấm phím ESC
//key press Event
document.addEventListener('keydown', function (e) {
  // console.log(e);
  // console.log(e.key, objOverlay);
  return e.key == 'Escape' ? fCloseModal() : 'fOpenModal()';
});
