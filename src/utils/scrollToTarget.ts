export const scrollToTarget = (target: string, action?: () => void) => {
  if (action) action();

  const element = document.querySelector(target);

  element?.scrollIntoView({ inline: "start", behavior: "smooth" });
};
