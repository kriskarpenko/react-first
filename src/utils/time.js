export function formatTime(time) {
  const seconds = String(time % 60).padStart(2, "0");
  const minutes = String(Math.trunc(time / 60)).padStart(2, "0");
  return `${minutes}:${seconds}`;
}
