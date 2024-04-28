import { ComponentPropsWithoutRef, FC } from "react";
import { usePopoverContext } from "./PopoverProvider";
import useClickOutside from "../../hooks/useClickOutside";
import classNames from "classnames";

interface PopoverListProps extends ComponentPropsWithoutRef<"div"> {
  show?: boolean;
}

const PopoverList: FC<PopoverListProps> = ({
  children,
  className,
  ...rest
}) => {
  const props = usePopoverContext();
  const ref = useClickOutside(props.onClose);
  if (!props.open) return null;

  return (
    <div
      {...rest}
      ref={ref}
      className={classNames(
        "bg-white rounded shadow p-5 flex flex-col absolute top-12 right-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PopoverList;
