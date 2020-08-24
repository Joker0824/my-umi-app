import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMenuItemKzt({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="menu_item_kzt_svg__icon"
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      data-spm-anchor-id="a313x.7781069.0.i4"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style />
      </defs>
      <path
        d="M944.38 70.19h-864c-44.19 0-80 35.81-80 80v571.43c0 44.19 35.81 80 80 80h864c44.18 0 80-35.81 80-80V150.19c0-44.19-35.82-80-80-80zm5.45 603.45c0 26.26-21.29 47.55-47.55 47.55H750.12V445.41c0-26.26-21.28-47.55-47.55-47.55-26.26 0-47.55 21.29-47.55 47.55v275.78h-95.1V350.31c0-26.26-21.28-47.55-47.55-47.55-26.26 0-47.55 21.29-47.55 47.55v370.88h-95.1v-199.7c0-26.26-21.28-47.55-47.55-47.55-26.26 0-47.55 21.28-47.55 47.55v199.7H122.49c-26.26 0-47.55-21.29-47.55-47.55V198.16c0-26.26 21.29-47.55 47.55-47.55h779.79c26.26 0 47.55 21.29 47.55 47.55v475.48zM722.67 874.76H302.09c-25.25 0-45.71 20.47-45.71 45.71 0 25.25 20.47 45.71 45.71 45.71h420.58c25.24 0 45.71-20.46 45.71-45.71 0-25.24-20.47-45.71-45.71-45.71zm0 0"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMenuItemKzt = React.memo(SvgMenuItemKzt);
export default MemoSvgMenuItemKzt;
