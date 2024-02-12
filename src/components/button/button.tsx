
import { useButton } from '@mui/base/useButton';
import React from 'react';
import { GDSButtonProps, buttonVariants } from './button.props';
import { cn } from "@utils";

export const GDSButton = React.forwardRef((props: GDSButtonProps, ref: React.ForwardedRef<any>) => {

  const { children, className, size, variant} = props;

  const { getRootProps } = useButton({
      ...props,
      rootRef: ref,
  });

  return (
      <button
        {...getRootProps()}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </button>
  );
});