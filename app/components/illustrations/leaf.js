/**
 * Path geometry shared by the botanical illustrations. No JSX — these return
 * `d` strings, so the same leaf can be a stroke in one place and a translucent
 * fill in another without the shape being described twice.
 *
 * Angles are degrees, clockwise from the positive x-axis, matching SVG's
 * y-down coordinate system: -90 points straight up the page.
 */

/**
 * An almond leaf growing from its base point.
 * @param {number} x     Base x — where the leaf meets its stem.
 * @param {number} y     Base y.
 * @param {number} angle Direction of growth, in degrees.
 * @param {number} len   Tip distance from the base.
 * @param {number} width Half-width at the widest point.
 */
export function leafPath(x, y, angle, len, width) {
  const r = (angle * Math.PI) / 180;
  const cos = Math.cos(r);
  const sin = Math.sin(r);
  const tipX = x + cos * len;
  const tipY = y + sin * len;
  const offX = -sin * width;
  const offY = cos * width;
  const midX = x + cos * len * 0.45;
  const midY = y + sin * len * 0.45;
  return `M${x} ${y} Q${midX + offX} ${midY + offY} ${tipX} ${tipY} Q${midX - offX} ${midY - offY} ${x} ${y}Z`;
}

/**
 * A small round-petalled flower. Petals are drawn as short almond leaves off a
 * shared centre, which keeps them the same family of curve as the foliage.
 * @param {number} cx
 * @param {number} cy
 * @param {number} r       Petal length.
 * @param {number} [petals]
 * @param {number} [rotate] Degrees, to stop every flower facing the same way.
 */
export function flowerPaths(cx, cy, r, petals = 5, rotate = 0) {
  return Array.from({ length: petals }, (_, i) =>
    leafPath(cx, cy, rotate + (360 / petals) * i, r, r * 0.42)
  );
}
