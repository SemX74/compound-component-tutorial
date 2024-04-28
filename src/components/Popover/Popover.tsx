import * as classNames from "classnames";
import { ComponentPropsWithoutRef, FC, useState } from "react";
import { PopoverContext } from "./PopoverProvider";
import PopoverButton from "./PopoverButton";
import PopoverList from "./PopoverList";
import PopoverListItem from "./PopoverListItem";

interface PopoverComponentProps extends ComponentPropsWithoutRef<"div"> {}

const PopoverComponent: FC<PopoverComponentProps> = ({
  className,
  children,
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <PopoverContext.Provider value={{ open, onOpen, onClose }}>
      <div {...rest} className={classNames("relative", className)}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

const Popover = Object.assign(PopoverComponent, {
  Button: PopoverButton,
  List: PopoverList,
  ListItem: PopoverListItem,
});
export default Popover;
