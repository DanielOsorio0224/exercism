const events = ['wink','double blink', 'close your eyes', 'jump']

export const commands = (num) => {
  const result = events.filter((_, i) => (1 << i) & num)
  return num & 16 ? result.reverse() : result
};