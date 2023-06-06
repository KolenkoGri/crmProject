export const win = () => {
  const data = document.querySelectorAll('.table__btn-pic--image');
  console.log(data);
  data.forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = e.target;
      console.log(target.closest('tr').getAttribute('data-pic'));
      const size = 600;
      const openWindow =
      open(`${target.closest('tr').getAttribute('data-pic')}`,
          '', `width = ${size},height = ${size}`);
      openWindow.moveTo((openWindow.window.screen.width - size) / 2,
          (openWindow.window.screen.height - size) / 2);
    });
  });
};
