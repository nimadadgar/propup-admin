import Tippy from "@tippyjs/react";

const Tooltip = ({ children, content, ...rest }) => {
  return (
    <Tippy
      zIndex={60}
      content={content}
      theme="light"
      animation="scale-extreme"
      {...rest}
      disabled={rest.disabled}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
