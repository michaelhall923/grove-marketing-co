// /components/Container.tsx
import { forwardRef, type ComponentPropsWithoutRef } from "react";

export type ContainerProps = ComponentPropsWithoutRef<"div">;

const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={[
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props} // includes style, id, aria-*, etc.
    >
      {children}
    </div>
  );
});

export default Container;
