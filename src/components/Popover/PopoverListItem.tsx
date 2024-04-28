import * as classNames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";
import { usePopoverContext } from "./PopoverProvider";

interface PopoverListItemProps extends ComponentPropsWithoutRef<"button"> {}

const PopoverListItem: FC<PopoverListItemProps> = ({
  onClick,
  className,
  children,
}) => {
  const props = usePopoverContext();

  return (
    <button
      onClick={(e) => {
        onClick?.(e);
        props.onClose();
      }}
      className={classNames("", className)}
    >
      {children}
    </button>
  );
};

export default PopoverListItem;
