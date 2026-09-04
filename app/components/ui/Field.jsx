import clsx from "clsx";

/**
 * One form field: a real, visible label and a control.
 *
 * No floating labels. They look tidy and then vanish the moment someone starts
 * typing, which is exactly when a person is most likely to have forgotten what
 * the field wanted. A plain label above the input costs one line and never
 * disappears.
 *
 * @param {object} props
 * @param {string} props.id     Ties the label to the control.
 * @param {string} props.label
 */
export default function Field({ id, label, className, children }) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="font-medium text-sm text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

/* Shared control styling. 52px tall to match a primary button, 14px radius —
   softer than a box, quieter than a pill. Focus is a terracotta border plus a
   soft glow rather than a hard ring. */
export const CONTROL =
  "w-full rounded-input border border-line bg-surface px-4 text-ink placeholder:text-subtle " +
  "transition-[border-color,box-shadow] duration-fast " +
  "focus:outline-none focus:border-brand focus:shadow-focus";
