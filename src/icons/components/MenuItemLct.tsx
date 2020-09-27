import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMenuItemLct({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="menu_item_lct_svg__icon"
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
        d="M862.7 725.9V510.3H533.6V347h145.3V62.1H346.8V347h141.5v163.3H160.1v215.6H64.7v234h232.5v-234h-95.5V557.5h286.6V726h-91.7v234h232.5V726h-95.5V557.5h283.9V726h-90.6v234h232.5V726h-96.7zm-613.1 43.4v145.3H108.1V769.3h141.5zm331.9 0v145.3H440V769.3h141.5zM399.6 294.2V112.9H626v181.3H399.6zm512.2 620.4H770.3V769.3h141.5v145.3z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMenuItemLct = React.memo(SvgMenuItemLct);
export default MemoSvgMenuItemLct;
