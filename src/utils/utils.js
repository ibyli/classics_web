/**
 * @param {*} number 距离顶部的值
 * @param {*} time 过渡时间(ms)
 * @description 滚动条过渡效果
 */

export const scrollTransition = (number = 0, time) => {
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number;
    return number;
  }
  const spacingTime = 5; // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime; // 计算循环的次数
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
  const everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
  const scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--;
      scrollTransition((nowTop += everTop));
    } else {
      clearInterval(scrollTimer); // 清除计时器
    }
  }, spacingTime);
};
