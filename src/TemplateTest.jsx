import React from "react";
import coverImg from './assets/images/Template3-mobile.jpg';

const TemplateTen = () => {
    return (
        <div className="h-[400px] w-[400px] bg-red-500 relative">
            <svg width="full" height="full" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_194_100)">
                    <rect width="1080" height="1080" fill="#1F2340" />
                    <path d="M516.05 324.5C541.829 158.422 643.55 42 721.982 0H1080.05V824.978C847.709 882.234 698.346 762.412 627.437 690.552C520.419 573.053 502.159 414 516.05 324.5Z" fill="#242A4D" />
                    <path d="M58 225C58 192.415 84.4152 166 117 166H1075V600H117C84.4152 600 58 573.585 58 541V225Z" fill="#211D2A" stroke="#FCB041" stroke-width="10" />
                    <path d="M642.843 193.953C773.243 -20.8469 985.343 -14.0479 1079.84 14.4522V750.952C871.843 807.352 723.176 684.953 674.843 616.953C546.443 454.953 596.099 270.952 642.843 193.953Z" fill="#FCB041" />
                    <image href={coverImg} x="658" y="201" width="422" height="538" clip-path="url(#clip0_194_100)" />
                </g>
                <defs>
                    <clipPath id="clip0_194_100">
                        <rect width="1080" height="1080" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default TemplateTen;
