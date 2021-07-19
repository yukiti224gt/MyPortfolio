// ハンバーガーメニュー
const ham = document.getElementById('ham');
const menu_wrapper = document.getElementById('menu_wrapper');
ham.addEventListener('click', function () {
  ham.classList.toggle(('clicked'))
  menu_wrapper.classList.toggle(('clicked'))
})

// ローディング画面
window.onload = function () {
  const spinner = document.getElementById('loading');
  spinner.classList.toggle('loaded')
}

// ふわっと出る処理
function showElementAnimation() {
  let element = document.getElementsByClassName('animation');
  if (!element) return;
  
  let showTiming = window.innerHeight > 768 ? 200 : 40;
  let scrollY = window.pageYOffset;
  let windowH = window.innerHeight;

  for (let i = 0; i < element.length; i++) {
    let elemClientRect = element[i].getBoundingClientRect();
    let elemY = scrollY + elemClientRect.top;
    if (scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    }
    else if (scrollY + windowH < elemY) {
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
