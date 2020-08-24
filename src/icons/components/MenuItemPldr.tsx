import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMenuItemPldr({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="menu_item_pldr_svg__icon"
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
        d="M182 841h-46C61.442 841 1 780.558 1 706V136C1 61.442 61.442 1 136 1h570c74.558 0 135 60.442 135 135v48h46c74.558 0 135 60.442 135 135v570c0 74.558-60.442 135-135 135H317c-74.558 0-135-60.442-135-135v-48zm569-657v-48c0-24.853-20.147-45-45-45H136c-24.853 0-45 20.147-45 45v570c0 24.853 20.147 45 45 45h46V319c0-74.558 60.442-135 135-135h434zm-434 90c-24.853 0-45 20.147-45 45v570c0 24.853 20.147 45 45 45h570c24.853 0 45-20.147 45-45V319c0-24.853-20.147-45-45-45H317zm239.71 278.5V402.79c0-24.854 20.148-45 45-45 24.854 0 45 20.146 45 45V552.5h149.712c24.852 0 45 20.147 45 45s-20.148 45-45 45H646.71v149.71c0 24.854-20.147 45-45 45s-45-20.146-45-45V642.5H407c-24.853 0-45-20.147-45-45s20.147-45 45-45h149.71z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMenuItemPldr = React.memo(SvgMenuItemPldr);
export default MemoSvgMenuItemPldr;
