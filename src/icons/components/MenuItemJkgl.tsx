import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMenuItemJkgl({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="menu_item_jkgl_svg__icon"
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
        d="M880 144H144c-17.7 0-32 14.3-32 32v672c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32zm-40 664H184V216h656v592z"
        fill="currentColor"
      />
      <path
        d="M281 744h462c17.7 0 32-14.2 32-31.8V463.8c0-17.6-14.3-31.8-32-31.8h-73V329.8c0-17.6-14.3-31.8-32-31.8H386c-17.7 0-32 14.2-32 31.8V432h-73c-17.7 0-32 14.2-32 31.8v248.4c0 17.6 14.3 31.8 32 31.8zm40-240.4h105V369.5h172v134h105v168.9H321V503.6z"
        fill="currentColor"
      />
      <path
        d="M407.5 533.5h-24c-4.4 0-8 3.6-8 8v93c0 4.4 3.6 8 8 8h24c4.4 0 8-3.6 8-8v-93c0-4.4-3.6-8-8-8zm75.7 0h-24c-4.4 0-8 3.6-8 8v93c0 4.4 3.6 8 8 8h24c4.4 0 8-3.6 8-8v-93c0-4.4-3.6-8-8-8zm75.7 0h-24c-4.4 0-8 3.6-8 8v93c0 4.4 3.6 8 8 8h24c4.4 0 8-3.6 8-8v-93c0-4.4-3.6-8-8-8zm75.7 0h-24c-4.4 0-8 3.6-8 8v93c0 4.4 3.6 8 8 8h24c4.4 0 8-3.6 8-8v-93c0-4.4-3.5-8-8-8z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMenuItemJkgl = React.memo(SvgMenuItemJkgl);
export default MemoSvgMenuItemJkgl;
