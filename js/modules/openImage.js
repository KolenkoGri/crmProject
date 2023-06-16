export const win = () => {
  const data = document.querySelectorAll('.table__btn-pic--image');
  data.forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = e.target;
      const size = 600;
      const openWindow =
      open(`${target.closest('tr').getAttribute('data-pic')}`,
          '', `width = ${size},height = ${size}`);
      openWindow.moveTo((openWindow.window.screen.width - size) / 2,
          (openWindow.window.screen.height - size) / 2);
    });
  });
};
