import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgQuit({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="quit_svg__icon"
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
        d="M443.093 622.507a35.84 35.84 0 0050.774 50.773l135.68-135.68a36.267 36.267 0 000-51.2l-135.68-135.68a35.84 35.84 0 00-50.774 50.773l74.24 74.24H36.053a35.84 35.84 0 000 72.107h481.28z"
        fill="currentColor"
      />
      <path
        d="M983.68 312.747A512 512 0 00104.747 202.24a35.84 35.84 0 0057.173 42.667 443.733 443.733 0 01151.893-128 439.467 439.467 0 01509.44 84.053A440.32 440.32 0 01682.88 917.333a440.747 440.747 0 01-369.92-12.8 444.587 444.587 0 01-151.893-128 35.84 35.84 0 00-57.174 42.667 516.267 516.267 0 00176.64 147.2 512 512 0 00743.68-454.4 506.027 506.027 0 00-40.533-199.253z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgQuit = React.memo(SvgQuit);
export default MemoSvgQuit;
