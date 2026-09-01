/**
 * The site's one scroll animation.
 *
 * Movement here should read as a garden shifting in the wind, not as a library
 * being demonstrated: a long range, a small distance, and a linear fade that
 * decays rather than springs. Having a single component own that is what stops
 * nine sections from each inventing their own timing.
 *
 * Deliberately not a JavaScript animation. A motion library has to render the
 * element hidden and then reveal it after hydration, which means the animation
 * IS the content's visibility — the server HTML ships `opacity: 0` and anyone
 * without JavaScript, or anyone screenshotting or printing the page, gets a
 * blank column. Here the animation lives in CSS behind an `@supports` query, so
 * the resting state is "visible" and the motion is purely additive: browsers
 * without scroll-driven animation, and visitors who asked for reduced motion,
 * simply see the finished page.
 *
 * @param {object} props
 * @param {string} [props.className] Applied alongside the reveal class.
 */
export default function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}
