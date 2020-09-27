import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMenuItemRwgl({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="menu_item_rwgl_svg__icon"
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
        d="M102.4 89.6a12.8 12.8 0 00-12.8 12.8v819.2c0 7.066 5.734 12.8 12.8 12.8h819.2a12.8 12.8 0 0012.8-12.8V102.4a12.8 12.8 0 00-12.8-12.8H102.4zm0-76.8h819.2c49.46 0 89.6 40.14 89.6 89.6v819.2a89.6 89.6 0 01-89.6 89.6H102.4a89.6 89.6 0 01-89.6-89.6V102.4c0-49.46 40.14-89.6 89.6-89.6zm258.048 267.776a38.4 38.4 0 1155.296 53.248l-88.422 92.058a38.4 38.4 0 01-53.504 1.792l-43.623-39.63a38.4 38.4 0 0151.61-56.831l16.025 14.49 62.618-65.127zM486.4 391.68a38.4 38.4 0 010-76.8h256a38.4 38.4 0 110 76.8h-256zm0 307.2a38.4 38.4 0 010-76.8h256a38.4 38.4 0 110 76.8h-256zM307.2 755.2a89.6 89.6 0 110-179.2 89.6 89.6 0 010 179.2zm0-76.8a12.8 12.8 0 100-25.6 12.8 12.8 0 000 25.6z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMenuItemRwgl = React.memo(SvgMenuItemRwgl);
export default MemoSvgMenuItemRwgl;
