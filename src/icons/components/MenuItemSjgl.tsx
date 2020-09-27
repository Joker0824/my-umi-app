import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMenuItemSjgl({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="menu_item_sjgl_svg__icon"
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style />
      </defs>
      <path
        d="M985.6 1024H38.4A38.4 38.4 0 010 985.66V38.4A38.4 38.4 0 0138.4 0a38.4 38.4 0 0138.4 38.4v908.785h908.8a38.4 38.4 0 110 76.8zm-64.005-128.01h-76.8a51.195 51.195 0 01-51.194-51.194V281.594a51.195 51.195 0 0151.195-51.195h76.8a51.21 51.21 0 0151.21 51.195v563.202a51.21 51.21 0 01-51.21 51.195zm-307.198 0h-76.8a51.195 51.195 0 01-51.194-51.194V383.998a51.195 51.195 0 0151.194-51.195h76.8a51.195 51.195 0 0151.195 51.195v460.798a51.195 51.195 0 01-51.195 51.195zm-307.199 0h-76.8a51.21 51.21 0 01-51.209-51.194V179.189a51.21 51.21 0 0151.21-51.195h76.8a51.21 51.21 0 0151.194 51.195v665.607a51.195 51.195 0 01-51.195 51.195zm0 0"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMenuItemSjgl = React.memo(SvgMenuItemSjgl);
export default MemoSvgMenuItemSjgl;
