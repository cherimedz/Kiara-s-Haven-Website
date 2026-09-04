import clsx from "clsx";

/**
 * The one page container. Everything readable sits inside this; only
 * backgrounds and decoration are allowed to run full-bleed past it.
 *
 * The horizontal padding steps 16 → 20 → 32 → 48, so a phone never reads
 * edge-to-edge and a desktop never reads cramped. Having a single component
 * own those four numbers is what stops `px-6` appearing in fifteen files with
 * nobody able to say why.
 *
 * @param {object} props
 * @param {React.ElementType} [props.as] Element to render — section, header, ul.
 */
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={clsx(
        "w-full mx-auto max-w-shell px-4 min-[420px]:px-5 md:px-8 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
