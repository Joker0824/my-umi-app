import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBrowserHttp({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="browser_http_svg__icon"
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
        d="M985.657 320.093H511.59c-105.937-.116-191.93 85.597-192.023 191.442a191.674 191.674 0 0024.483 93.882L107.018 199.145C279.655-24.064 600.772-65.21 824.214 107.264a510.79 510.79 0 01161.443 212.83zm0 0"
        fill="#F44336"
      />
      <path
        d="M1023.172 511.72c-.232 282.136-229.143 510.79-511.58 511.023a455.82 455.82 0 01-63.954-4.259l230.214-410.95a192 192 0 00-70.33-261.91 190.208 190.208 0 00-95.488-25.554H985.68a503.901 503.901 0 0137.492 191.65zm0 0"
        fill="#FFC107"
      />
      <path
        d="M677.852 607.535l-230.214 410.95h-.419C167.085 983.132-31.338 727.621 4.059 447.766a510.37 510.37 0 01102.96-248.622L344.05 605.417l1.28 2.14c52.852 91.742 170.147 123.276 261.958 70.47a191.628 191.628 0 0070.563-70.492zm0 0"
        fill="#4CAF50"
      />
      <path
        d="M677.852 607.535c-52.853 91.74-170.147 123.275-261.958 70.47a191.907 191.907 0 01-70.563-70.47l-1.28-2.142a191.535 191.535 0 0173.565-260.864 191.767 191.767 0 0193.975-24.46h.42a190.138 190.138 0 0195.487 25.554 192 192 0 0170.354 261.912zm0 0"
        fill="#2196F3"
      />
      <path
        d="M510.87 724.643a211.48 211.48 0 01-105.844-28.37 213.876 213.876 0 01-78.15-78.103c-58.857-101.841-23.925-232.075 78.01-290.862a213.295 213.295 0 01106.705-28.533c117.714-.093 213.225 95.162 213.318 212.76a212.876 212.876 0 01-28.555 106.635A214.342 214.342 0 01510.87 724.643zm1.117-383.255a170.403 170.403 0 00-85.737 318.045 170.752 170.752 0 00233.1-62.51 170.263 170.263 0 00-62.418-232.705 170.752 170.752 0 00-84.922-22.83h-.023zm0 0"
        fill="#FAFAFA"
      />
    </svg>
  );
}

const MemoSvgBrowserHttp = React.memo(SvgBrowserHttp);
export default MemoSvgBrowserHttp;
