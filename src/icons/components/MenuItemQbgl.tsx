import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgMenuItemQbgl({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="menu_item_qbgl_svg__icon"
      viewBox="0 0 1026 1024"
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
        d="M514.844 0c-281.6 0-512 230.4-512 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512zm28.445 750.933h56.889l-85.334-147.91-85.333 147.91H486.4v147.911L133.689 548.978H281.6v56.889l147.911-85.334L281.6 435.2v56.889H122.311L486.4 128v159.289h-56.889L514.844 435.2l85.334-147.911h-56.89V128l364.09 364.089h-159.29V435.2l-147.91 85.333 147.91 85.334v-56.89H896L543.289 898.845v-147.91zM967.11 472.178l-409.6-412.445C773.69 79.644 947.2 253.156 967.111 472.178zM472.178 59.733L59.733 472.178C79.644 253.156 253.156 79.644 472.178 59.733zM59.733 554.667L472.178 967.11C253.156 947.2 79.644 773.69 59.733 554.667zM557.511 967.11l409.6-412.444C947.2 773.689 773.69 947.2 557.511 967.11z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgMenuItemQbgl = React.memo(SvgMenuItemQbgl);
export default MemoSvgMenuItemQbgl;
