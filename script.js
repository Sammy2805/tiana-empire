const me = document.getElementById('me');
const mobile = document.getElementById('mobile');
const ul = document.getElementById('ul')

const clickHandler = () => {
  me.classList.toggle('open');
  mobile.classList.toggle('open');
};

me.addEventListener('click', clickHandler);

document.addEventListener('click', (event) => {
  const isMeClicked = me.contains(event.target);
  const isMobileClicked = mobile.contains(event.target);

  if (!isMeClicked && !isMobileClicked) {
    me.classList.remove('open');
    mobile.classList.remove('open');
  }
});
ul.addEventListener('click', () => {
  me.classList.remove('open');
  mobile.classList.remove('open');
})
