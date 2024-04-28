import { ComponentPropsWithoutRef, FC } from "react";
import { usePopoverContext } from "./PopoverProvider";
import * as classNames from "classnames";

interface PopoverButtonProps extends ComponentPropsWithoutRef<"button"> {}

const PopoverButton: FC<PopoverButtonProps> = ({
  children,
  className,
  onClick,
  ...rest
}) => {
  const props = usePopoverContext();
  return (
    <button
      {...rest}
      className={classNames("", className)}
      onClick={(e) => {
        onClick?.(e);
        props.onOpen();
      }}
    >
      {children}
    </button>
  );
};

export default PopoverButton;
