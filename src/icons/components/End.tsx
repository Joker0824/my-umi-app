import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgEnd({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="end_svg__icon"
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
        d="M20.480000000000018 512a491.52 491.52 0 10983.04 0 491.52 491.52 0 10-983.04 0z"
        fill="#E71E23"
      />
      <path
        d="M512 1024a512 512 0 11512-512 512.582 512.582 0 01-512 512zm0-983.273A471.273 471.273 0 10983.273 512 471.564 471.564 0 00512 40.96z"
        fill="#333"
      />
    </svg>
  );
}

const MemoSvgEnd = React.memo(SvgEnd);
export default MemoSvgEnd;
