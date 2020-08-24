import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMenuItemYhgl({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="menu_item_yhgl_svg__icon"
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
        d="M868.848 1024H155.152A116.364 116.364 0 0138.788 907.636V116.364A116.364 116.364 0 01155.152 0h713.696a116.364 116.364 0 01116.364 116.364v791.272A116.364 116.364 0 01868.848 1024zM155.152 77.576a38.788 38.788 0 00-38.788 38.788v791.272a38.788 38.788 0 0038.788 38.788h713.696a38.788 38.788 0 0038.788-38.788V116.364a38.788 38.788 0 00-38.788-38.788z"
        fill="currentColor"
      />
      <path
        d="M659.394 752.485H349.09a38.788 38.788 0 010-77.576h310.303a38.788 38.788 0 010 77.576zm0 116.363H349.09a38.788 38.788 0 010-77.575h310.303a38.788 38.788 0 010 77.575zM512 449.94a147.394 147.394 0 01-147.394-139.636A147.394 147.394 0 01512 170.667a139.636 139.636 0 110 279.272zm0-201.697a69.818 69.818 0 00-69.818 62.061A62.06 62.06 0 00512 372.363a62.06 62.06 0 0062.06-62.06 69.818 69.818 0 00-62.06-62.06z"
        fill="currentColor"
      />
      <path
        d="M659.394 605.09a46.545 46.545 0 01-38.788-38.787A116.364 116.364 0 00512 449.939a116.364 116.364 0 00-108.606 116.364 38.788 38.788 0 01-38.788 38.788 38.788 38.788 0 01-38.788-38.788A193.94 193.94 0 01512 372.363a186.182 186.182 0 01186.182 193.94 38.788 38.788 0 01-38.788 38.788z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMenuItemYhgl = React.memo(SvgMenuItemYhgl);
export default MemoSvgMenuItemYhgl;
