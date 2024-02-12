
import { useButton } from '@mui/base/useButton';
import { GDSButtonProps, buttonVariants } from './button.props';
// NOTE: CANNOT USE IMPORT ALIASES SINCE NO TYPES IMPORTED IN WEB COMPONENT BUILD
import { cn } from "../../utils/utils";

export const WCButton = (props: GDSButtonProps) => {

  const { children, className, size, variant} = props;

  const { getRootProps } = useButton({
      ...props,
  });

  return (
      <button
        {...getRootProps()}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </button>
  );
};