import Link from "next/link";
import React from "react";
import CountUp from 'react-countup';
const Commitment = () => {
  return (
    <div className="about-section2 mb-100">
      <div className="about-top">
        <div className="container-fluid one pl--95">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="about-content pr--95">
                <div className="section-title1 two white mb-50">
                  <span>OUR COMMITMENT TO THE UAE</span>
                  <h2>
                    As a homegrown company, we are deeply committed to contributing to the UAE’s financial sector<Link legacyBehavior href="/about" style={{color : 'white !important'}}>...</Link> 
                    {/* We support the local economy by helping businesses grow and by enabling individuals to achieve their financial aspirations. Our understanding of the UAE’s unique market dynamics allows us to provide relevant and effective solutions. */}
                  </h2>
                </div>
                <Link legacyBehavior href="/contact">
                  <a className="primary-btn1 btn-hover">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                      ></path>
                    </svg>
                  </a>
                </Link>
                {/* <Link legacyBehavior href="/about">
                  <a className="primary-btn1 btn-hover">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                      ></path>
                    </svg>
                  </a>
                </Link> */}
                {/* <div className="review-and-feature">
                  <a href="https://clutch.co/" className="review-area white">
                    <div className="review-name">
                      <span>Review On</span>
                      <img
                        // src="assets/img/home1/clutch-logo-white.svg"
                        // src="assets/img/home1/clutch-logo-white.svg"
                        alt=""
                      />
                    </div>
                    <div className="review">
                      <ul>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-half" />
                        </li>
                      </ul>
                      <span>(50 reviews)</span>
                    </div>
                  </a>
                  <ul className="features">
                    <li>Problem Solving</li>
                    <li>Determine Probelm</li>
                    <li>Cost-Efficiency</li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <div className="about-img ">
                <img src="assets/img/home2/commitment.png" alt="" style={{zIndex : 1 , bottom: '-195px'}} />
                {/* <img src="assets/img/home1/construction-silhouette.jpg" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-bottom">
        <div className="container-fluid one pl--95">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="about-counter-area pr--95">
                <ul className="counter-wrap">
                  <li className="single-counter">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                      >
                        <g>
                          <path d="M18.8691 3.19458V9.9614C18.8691 10.247 19.1006 10.4783 19.3861 10.4783C19.6716 10.4783 19.9031 10.247 19.9031 9.9614V6.1868H20.0969V9.9614C20.0969 10.247 20.3284 10.4783 20.6139 10.4783C20.8994 10.4783 21.1309 10.247 21.1309 9.9614V3.19458L23.4038 0.552722C23.4617 0.485468 23.4905 0.397983 23.4838 0.309513C23.4772 0.221044 23.4357 0.138836 23.3684 0.080975C23.3011 0.023114 23.2137 -0.00566061 23.1252 0.000981286C23.0367 0.00762318 22.9545 0.0491375 22.8967 0.116392L20.6905 2.68068H19.3096L17.1034 0.11635C17.0455 0.0490957 16.9633 0.00758137 16.8748 0.000939484C16.7863 -0.0057024 16.6989 0.0230722 16.6316 0.0809332C16.5644 0.138794 16.5228 0.221002 16.5162 0.309472C16.5096 0.397941 16.5383 0.485426 16.5962 0.55268L18.8691 3.19458Z" />
                          <path d="M20 2.44243C20.5196 2.44243 20.9408 2.02121 20.9408 1.50161C20.9408 0.982009 20.5196 0.560791 20 0.560791C19.4804 0.560791 19.0592 0.982009 19.0592 1.50161C19.0592 2.02121 19.4804 2.44243 20 2.44243Z" />
                          <path d="M16.6316 39.9191C16.6922 39.9714 16.7696 40.0002 16.8496 40.0001C16.8978 40.0002 16.9454 39.9898 16.9892 39.9697C17.033 39.9497 17.0719 39.9203 17.1033 39.8838L19.3095 37.3195H20.6904L22.8966 39.8838C22.928 39.9203 22.9669 39.9497 23.0107 39.9697C23.0545 39.9898 23.1022 40.0002 23.1504 40.0001C23.2144 40.0001 23.277 39.9817 23.3309 39.9471C23.3848 39.9125 23.4276 39.8632 23.4543 39.805C23.481 39.7468 23.4904 39.6822 23.4815 39.6188C23.4725 39.5554 23.4455 39.4959 23.4038 39.4474L21.1309 36.8055V30.0387C21.1309 29.7531 20.8993 29.5217 20.6139 29.5217C20.3284 29.5217 20.0969 29.7531 20.0969 30.0387V33.8133H19.9031V30.0387C19.9031 29.7531 19.6715 29.5217 19.3861 29.5217C19.1006 29.5217 18.8691 29.7531 18.8691 30.0387V36.8055L16.5962 39.4474C16.5383 39.5146 16.5096 39.6021 16.5162 39.6906C16.5228 39.779 16.5643 39.8613 16.6316 39.9191Z" />
                          <path d="M20 39.4393C20.5196 39.4393 20.9408 39.018 20.9408 38.4984C20.9408 37.9788 20.5196 37.5576 20 37.5576C19.4804 37.5576 19.0592 37.9788 19.0592 38.4984C19.0592 39.018 19.4804 39.4393 20 39.4393Z" />
                          <path d="M7.32856 4.86008L10.6179 6.01151L11.9524 8.323L14.0013 11.8718C14.1441 12.1191 14.4603 12.2037 14.7075 12.061C14.9548 11.9182 15.0396 11.6021 14.8968 11.3547L13.0095 8.08583L13.1773 7.98894L15.0647 11.2578C15.2075 11.5052 15.5237 11.5898 15.7708 11.4471C16.0181 11.3043 16.1029 10.9882 15.9601 10.7408L13.9112 7.19205L13.5308 6.5331L13.5153 6.50621L12.5767 4.88057L13.2242 1.45624C13.2327 1.41292 13.2326 1.36833 13.2239 1.32505C13.2151 1.28176 13.1979 1.24064 13.1731 1.20406C13.1484 1.16747 13.1167 1.13614 13.0798 1.11188C13.0429 1.08762 13.0015 1.07091 12.9581 1.06271C12.9148 1.0545 12.8702 1.05497 12.827 1.06409C12.7837 1.0732 12.7428 1.09079 12.7064 1.11582C12.67 1.14085 12.6389 1.17284 12.615 1.20994C12.591 1.24704 12.5747 1.28851 12.5668 1.33197L11.9383 4.65581L10.7424 5.34629L7.54963 4.22864C7.37526 4.16763 7.18442 4.2595 7.12337 4.43387C7.06233 4.60823 7.15419 4.79903 7.32856 4.86008Z" />
                          <path d="M11.4496 4.60316C11.797 4.21678 11.7655 3.62192 11.3791 3.27451C10.9927 2.9271 10.3978 2.95869 10.0504 3.34507C9.70302 3.73145 9.73461 4.32631 10.121 4.67372C10.5074 5.02113 11.1022 4.98954 11.4496 4.60316Z" />
                          <path d="M32.6715 35.1401L29.3821 33.9886L28.0476 31.6772L25.9987 28.1284C25.8559 27.8811 25.5397 27.7965 25.2925 27.9392C25.0453 28.082 24.9604 28.3981 25.1032 28.6455L26.9905 31.9144L26.8227 32.0112L24.9354 28.7423C24.7926 28.495 24.4764 28.4104 24.2292 28.5531C23.982 28.6959 23.8971 29.012 24.0399 29.2594L26.0888 32.8081L27.4234 35.1196L26.7759 38.5439C26.7667 38.5923 26.7683 38.6421 26.7806 38.6898C26.793 38.7375 26.8156 38.7818 26.8471 38.8197C26.8785 38.8576 26.9179 38.8881 26.9625 38.909C27.007 38.9299 27.0557 38.9407 27.1049 38.9407C27.1828 38.9406 27.2582 38.9133 27.3181 38.8636C27.378 38.8139 27.4188 38.7448 27.4332 38.6683L28.0617 35.3444L29.2577 34.6539L32.4504 35.7716C32.4919 35.7861 32.5358 35.7924 32.5797 35.7899C32.6235 35.7875 32.6665 35.7764 32.7061 35.7573C32.7457 35.7383 32.7811 35.7116 32.8104 35.6788C32.8397 35.6461 32.8622 35.6078 32.8767 35.5664C32.906 35.4826 32.9009 35.3907 32.8624 35.3107C32.8239 35.2308 32.7552 35.1694 32.6715 35.1401Z" />
                          <path d="M29.7602 36.7951C30.2006 36.5193 30.3341 35.9388 30.0583 35.4984C29.7826 35.058 29.2021 34.9245 28.7617 35.2002C28.3213 35.4759 28.1878 36.0565 28.4635 36.4969C28.7392 36.9373 29.3198 37.0708 29.7602 36.7951Z" />
                          <path d="M1.39368 13.2301C1.41429 13.2301 1.4352 13.2282 1.45619 13.2242L4.88056 12.5767L6.50616 13.5153L10.7408 15.9602C10.9881 16.103 11.3042 16.0181 11.447 15.771C11.5897 15.5237 11.5051 15.2075 11.2578 15.0647L7.98885 13.1774L8.08573 13.0096L11.3547 14.8969C11.602 15.0397 11.9182 14.9548 12.0608 14.7077C12.2036 14.4604 12.119 14.1442 11.8717 14.0014L8.3229 11.9525L6.01146 10.618L4.85998 7.3287C4.84574 7.28689 4.82336 7.24832 4.79414 7.21521C4.76491 7.18209 4.72942 7.1551 4.68971 7.13577C4.64999 7.11645 4.60685 7.10518 4.56276 7.10261C4.51867 7.10005 4.47451 7.10624 4.43282 7.12083C4.39114 7.13543 4.35275 7.15813 4.31989 7.18763C4.28702 7.21713 4.26032 7.25285 4.24133 7.29272C4.22234 7.3326 4.21143 7.37584 4.20924 7.41995C4.20705 7.46406 4.21361 7.50816 4.22855 7.54973L5.3462 10.7425L4.65572 11.9384L1.33188 12.5669C1.25003 12.5824 1.17689 12.6278 1.12677 12.6943C1.07666 12.7609 1.05316 12.8437 1.06089 12.9267C1.06862 13.0096 1.10701 13.0867 1.16856 13.1428C1.23011 13.1989 1.31038 13.2301 1.39368 13.2301Z" />
                          <path d="M4.4757 11.5519C4.91596 11.276 5.04915 10.6954 4.77319 10.2551C4.49723 9.81484 3.91662 9.68164 3.47636 9.9576C3.0361 10.2336 2.90291 10.8142 3.17887 11.2544C3.45483 11.6947 4.03544 11.8279 4.4757 11.5519Z" />
                          <path d="M38.5435 26.776L35.1192 27.4235L33.4936 26.4849L29.2589 24.04C29.0116 23.8973 28.6955 23.9821 28.5528 24.2293C28.41 24.4765 28.4946 24.7927 28.7419 24.9355L32.0108 26.8228L31.9139 26.9907L28.645 25.1033C28.3977 24.9605 28.0816 25.0454 27.9389 25.2926C27.7961 25.5398 27.8807 25.856 28.128 25.9988L32.3627 28.4437L33.9883 29.3822L35.1397 32.6715C35.1691 32.7553 35.2304 32.8239 35.3104 32.8624C35.3903 32.9009 35.4823 32.9061 35.566 32.8767C35.6498 32.8474 35.7184 32.7861 35.7569 32.7061C35.7954 32.6262 35.8005 32.5342 35.7712 32.4505L34.6536 29.2577L35.344 28.0618L38.6679 27.4333C38.7115 27.4256 38.7531 27.4093 38.7904 27.3854C38.8276 27.3615 38.8597 27.3304 38.8849 27.294C38.9101 27.2576 38.9277 27.2165 38.9369 27.1732C38.9461 27.1299 38.9466 27.0852 38.9383 27.0417C38.9301 26.9982 38.9133 26.9568 38.889 26.9198C38.8646 26.8829 38.8332 26.8511 38.7964 26.8264C38.7597 26.8017 38.7184 26.7845 38.675 26.7758C38.6316 26.7672 38.5869 26.7672 38.5435 26.776Z" />
                          <path d="M36.0995 30.17C36.6177 30.1331 37.008 29.683 36.9711 29.1648C36.9343 28.6465 36.4842 28.2562 35.9659 28.2931C35.4476 28.33 35.0574 28.78 35.0942 29.2983C35.1311 29.8166 35.5812 30.2069 36.0995 30.17Z" />
                          <path d="M0.0809515 23.3685C0.112337 23.4051 0.151268 23.4344 0.195068 23.4545C0.238867 23.4746 0.286496 23.4849 0.334679 23.4849C0.414717 23.4849 0.492108 23.4562 0.552698 23.4039L3.19451 21.131H9.96137C10.247 21.131 10.4783 20.8995 10.4783 20.6141C10.4783 20.3286 10.247 20.097 9.96137 20.097H6.18677V19.9032H9.96137C10.247 19.9032 10.4783 19.6717 10.4783 19.3863C10.4783 19.1008 10.247 18.8692 9.96137 18.8692H3.19456L0.552698 16.5963C0.485444 16.5385 0.39796 16.5097 0.30949 16.5163C0.22102 16.523 0.138812 16.5645 0.0809515 16.6317C0.0230905 16.699 -0.00568411 16.7865 0.000957783 16.8749C0.00759967 16.9634 0.049114 17.0456 0.116368 17.1035L2.68066 19.3097V20.6906L0.116326 22.8968C0.0490779 22.9546 0.00757132 23.0369 0.000937274 23.1253C-0.00569677 23.2138 0.0230852 23.3013 0.0809515 23.3685Z" />
                          <path d="M1.50161 20.941C2.02121 20.941 2.44243 20.5197 2.44243 20.0001C2.44243 19.4805 2.02121 19.0593 1.50161 19.0593C0.982009 19.0593 0.560791 19.4805 0.560791 20.0001C0.560791 20.5197 0.982009 20.941 1.50161 20.941Z" />
                          <path d="M39.8836 22.8968L37.3193 20.6906V19.3097L39.8836 17.1035C39.9169 17.0748 39.9443 17.0399 39.9641 17.0007C39.9839 16.9615 39.9958 16.9187 39.9991 16.8749C40.0023 16.8311 39.997 16.7871 39.9832 16.7454C39.9695 16.7036 39.9477 16.665 39.9191 16.6317C39.8904 16.5984 39.8555 16.5711 39.8163 16.5513C39.7771 16.5315 39.7343 16.5196 39.6905 16.5163C39.6467 16.513 39.6027 16.5184 39.561 16.5321C39.5192 16.5459 39.4806 16.5677 39.4473 16.5963L36.8055 18.8692H30.0387C29.7531 18.8692 29.5217 19.1007 29.5217 19.3861C29.5217 19.6717 29.7531 19.9032 30.0387 19.9032H33.8133V20.097H30.0387C29.7531 20.097 29.5217 20.3285 29.5217 20.6139C29.5217 20.8994 29.7531 21.131 30.0387 21.131H36.8055L39.4473 23.4039C39.5079 23.4562 39.5853 23.4849 39.6653 23.4849C39.7336 23.4849 39.8003 23.464 39.8564 23.425C39.9125 23.386 39.9553 23.3308 39.9791 23.2668C40.0028 23.2027 40.0064 23.1329 39.9894 23.0668C39.9723 23.0007 39.9354 22.9413 39.8836 22.8968Z" />
                          <path d="M38.4984 20.941C39.018 20.941 39.4393 20.5197 39.4393 20.0001C39.4393 19.4805 39.018 19.0593 38.4984 19.0593C37.9788 19.0593 37.5576 19.4805 37.5576 20.0001C37.5576 20.5197 37.9788 20.941 38.4984 20.941Z" />
                          <path d="M8.32299 28.0477L11.8718 25.9988C12.1191 25.856 12.2037 25.5398 12.061 25.2926C11.9182 25.0454 11.602 24.9605 11.3547 25.1033L8.08582 26.9907L7.98893 26.8228L11.2578 24.9355C11.5052 24.7927 11.5898 24.4765 11.447 24.2293C11.3043 23.9821 10.9881 23.8973 10.7408 24.04L7.19204 26.0889L4.8806 27.4235L1.45623 26.776C1.27476 26.7417 1.09973 26.861 1.0654 27.0426C1.04891 27.1297 1.06773 27.2199 1.11772 27.2932C1.1677 27.3665 1.24475 27.4169 1.33192 27.4334L4.65576 28.0619L5.34624 29.2578L4.22859 32.4506C4.21408 32.492 4.20787 32.536 4.21033 32.5798C4.21279 32.6237 4.22387 32.6666 4.24292 32.7062C4.26198 32.7458 4.28865 32.7812 4.3214 32.8105C4.35415 32.8398 4.39235 32.8623 4.43382 32.8768C4.47528 32.8913 4.51919 32.8975 4.56306 32.8951C4.60692 32.8926 4.64986 32.8816 4.68945 32.8625C4.72903 32.8434 4.76447 32.8168 4.79374 32.784C4.82302 32.7513 4.84556 32.7131 4.86007 32.6716L6.01155 29.3823L8.32299 28.0477Z" />
                          <path d="M4.89154 29.4978C5.02611 28.9959 4.72835 28.48 4.22648 28.3454C3.72461 28.2108 3.20867 28.5086 3.0741 29.0105C2.93953 29.5123 3.23729 30.0283 3.73916 30.1628C4.24103 30.2974 4.75697 29.9997 4.89154 29.4978Z" />
                          <path d="M32.3629 11.5566C32.3629 11.5566 32.3629 11.5566 32.3629 11.5566L28.1283 14.0014C27.881 14.1442 27.7964 14.4604 27.9391 14.7076C28.0818 14.9549 28.398 15.0397 28.6453 14.8969L31.9142 13.0096L32.0111 13.1774L28.7422 15.0648C28.4949 15.2076 28.4103 15.5238 28.553 15.7709C28.6958 16.0182 29.0119 16.103 29.2593 15.9602L33.4939 13.5153L35.1195 12.5768L38.5438 13.2243C38.631 13.2407 38.7211 13.2219 38.7944 13.1719C38.8677 13.1219 38.9182 13.0449 38.9347 12.9578C38.9511 12.8706 38.9323 12.7804 38.8823 12.7071C38.8324 12.6338 38.7553 12.5834 38.6681 12.5669L35.3443 11.9384L34.6538 10.7425L35.7715 7.54973C35.7864 7.50816 35.793 7.46406 35.7908 7.41995C35.7886 7.37584 35.7777 7.3326 35.7587 7.29272C35.7397 7.25285 35.713 7.21713 35.6801 7.18763C35.6473 7.15813 35.6089 7.13543 35.5672 7.12084C35.5255 7.10624 35.4813 7.10005 35.4373 7.10261C35.3932 7.10518 35.35 7.11645 35.3103 7.13577C35.2706 7.1551 35.2351 7.18209 35.2059 7.21521C35.1766 7.24832 35.1543 7.28689 35.14 7.3287L33.9886 10.618L32.3629 11.5566Z" />
                          <path d="M36.9563 10.7604C36.9682 10.2408 36.5567 9.80991 36.0371 9.79796C35.5175 9.78601 35.0866 10.1975 35.0746 10.7171C35.0627 11.2367 35.4742 11.6676 35.9938 11.6796C36.5134 11.6915 36.9443 11.28 36.9563 10.7604Z" />
                          <path d="M11.9383 35.3442L12.5668 38.668C12.5833 38.7552 12.6338 38.8322 12.7071 38.8822C12.7804 38.9322 12.8705 38.951 12.9577 38.9346C13.0448 38.9181 13.1219 38.8676 13.1719 38.7943C13.2218 38.7211 13.2407 38.6309 13.2242 38.5437L12.5767 35.1194L13.9113 32.8079L15.9602 29.2591C16.103 29.0118 16.0181 28.6957 15.771 28.5529C15.5237 28.4102 15.2075 28.4948 15.0647 28.7421L13.1774 32.011L13.0096 31.9141L14.8969 28.6452C15.0397 28.3979 14.9548 28.0818 14.7077 27.939C14.4604 27.7963 14.1442 27.8808 14.0014 28.1282L11.9525 31.6769L10.618 33.9884L7.32869 35.1399C7.24656 35.1704 7.17968 35.2319 7.14244 35.3113C7.1052 35.3906 7.10056 35.4813 7.12952 35.564C7.15848 35.6467 7.21872 35.7148 7.29731 35.7535C7.3759 35.7923 7.46655 35.7987 7.5498 35.7713L10.7426 34.6537L11.9383 35.3442Z" />
                          <path d="M11.5415 36.5308C11.8345 36.1017 11.7242 35.5163 11.2951 35.2233C10.866 34.9303 10.2806 35.0406 9.98761 35.4697C9.69458 35.8987 9.80487 36.4841 10.234 36.7772C10.663 37.0702 11.2484 36.9599 11.5415 36.5308Z" />
                          <path d="M24.2292 11.4471C24.4764 11.5899 24.7926 11.5053 24.9354 11.258L26.8227 7.98906L26.9906 8.08595L25.1033 11.3548C24.9605 11.6022 25.0453 11.9183 25.2925 12.061C25.5397 12.2038 25.8559 12.1192 25.9987 11.8718L28.4436 7.6372L29.3821 6.01159L32.6715 4.86011C32.7552 4.8308 32.8239 4.76942 32.8624 4.68948C32.9008 4.60954 32.906 4.51759 32.8767 4.43386C32.8622 4.3924 32.8396 4.3542 32.8103 4.32144C32.7811 4.28869 32.7456 4.26202 32.706 4.24297C32.6665 4.22391 32.6235 4.21284 32.5797 4.21038C32.5358 4.20792 32.4919 4.21412 32.4504 4.22864L29.2577 5.34629L28.0617 4.65581L27.4332 1.33196C27.3989 1.15041 27.2239 1.03128 27.0424 1.0654C26.9552 1.08189 26.8782 1.13233 26.8282 1.20562C26.7782 1.27892 26.7594 1.36907 26.7759 1.45624L27.4234 4.88056L26.0888 7.19217V7.19221L24.0399 10.741C23.8971 10.9883 23.982 11.3044 24.2292 11.4471Z" />
                          <path d="M29.4953 4.88383C29.9973 4.74952 30.2953 4.23374 30.161 3.7318C30.0267 3.22986 29.5109 2.93183 29.0089 3.06614C28.507 3.20045 28.209 3.71623 28.3433 4.21817C28.4776 4.72011 28.9934 5.01814 29.4953 4.88383Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h2 className="counter"><CountUp delay={2} end={70} /></h2>
                        <span>+</span>
                      </div>
                      <p>Professional Experts</p>
                    </div>
                  </li>
                  <li className="single-counter">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                      >
                        <g>
                          <path d="M35.6364 0C33.2298 0 31.2727 1.95709 31.2727 4.36364C31.2727 5.11636 31.464 5.82473 31.8007 6.44364L24.6524 13.592C23.6359 12.7957 22.3819 12.363 21.0907 12.3629C19.7994 12.3627 18.5454 12.7952 17.5287 13.5913L11.9513 8.01382C12.2186 7.5705 12.3611 7.06314 12.3636 6.54545C12.3636 4.94109 11.0589 3.63636 9.45454 3.63636C7.85018 3.63636 6.54545 4.94109 6.54545 6.54545C6.54545 8.14982 7.85018 9.45454 9.45454 9.45454C9.99273 9.45454 10.4902 9.29818 10.9229 9.04218L16.5004 14.6196C15.7054 15.6367 15.2736 16.8905 15.2736 18.1815C15.2736 19.4724 15.7054 20.7262 16.5004 21.7433L7.29018 30.9542C6.49046 30.2238 5.44668 29.8187 4.36364 29.8182C1.95709 29.8182 0 31.7753 0 34.1818C0 36.5884 1.95709 38.5454 4.36364 38.5454C6.77018 38.5454 8.72727 36.5884 8.72727 34.1818C8.72821 33.4552 8.54666 32.74 8.19927 32.1018L17.5295 22.7716C18.3511 23.4123 19.3306 23.8191 20.3644 23.9491V31.3382C18.304 31.6858 16.728 33.4778 16.728 35.6364C16.728 38.0429 18.6851 40 21.0916 40C23.4982 40 25.4553 38.0429 25.4553 35.6364C25.4553 33.4785 23.8793 31.6865 21.8189 31.3382V23.9491C22.8527 23.8191 23.8321 23.4123 24.6538 22.7716L30.2313 28.3491C29.9635 28.7925 29.8207 29.3002 29.8182 29.8182C29.8182 31.4225 31.1229 32.7273 32.7273 32.7273C34.3316 32.7273 35.6364 31.4225 35.6364 29.8182C35.6364 28.2138 34.3316 26.9091 32.7273 26.9091C32.1891 26.9091 31.6916 27.0655 31.2589 27.3215L25.6815 21.744C26.4764 20.7269 26.9082 19.4731 26.9082 18.1822C26.9082 16.8913 26.4764 15.6375 25.6815 14.6204L32.7105 7.59127C33.5099 8.32171 34.5535 8.7269 35.6364 8.72727C38.0429 8.72727 40 6.77018 40 4.36364C40 1.95709 38.0429 0 35.6364 0ZM8 6.54545C8 5.74327 8.65236 5.09091 9.45454 5.09091C10.2567 5.09091 10.9091 5.74327 10.9091 6.54545C10.9091 7.34764 10.2567 8 9.45454 8C8.65236 8 8 7.34764 8 6.54545ZM4.36364 37.0909C2.75927 37.0909 1.45455 35.7862 1.45455 34.1818C1.45455 32.5774 2.75927 31.2727 4.36364 31.2727C5.968 31.2727 7.27273 32.5774 7.27273 34.1818C7.27273 35.7862 5.968 37.0909 4.36364 37.0909ZM24 35.6364C24 37.2407 22.6953 38.5454 21.0909 38.5454C19.4865 38.5454 18.1818 37.2407 18.1818 35.6364C18.1818 34.032 19.4865 32.7273 21.0909 32.7273C22.6953 32.7273 24 34.032 24 35.6364ZM21.0909 22.5455C18.6844 22.5455 16.7273 20.5884 16.7273 18.1818C16.7273 15.7753 18.6844 13.8182 21.0909 13.8182C23.4975 13.8182 25.4545 15.7753 25.4545 18.1818C25.4545 20.5884 23.4975 22.5455 21.0909 22.5455ZM34.1818 29.8182C34.1818 30.6204 33.5294 31.2727 32.7273 31.2727C31.9251 31.2727 31.2727 30.6204 31.2727 29.8182C31.2727 29.016 31.9251 28.3636 32.7273 28.3636C33.5294 28.3636 34.1818 29.016 34.1818 29.8182ZM35.6364 7.27273C34.032 7.27273 32.7273 5.968 32.7273 4.36364C32.7273 2.75927 34.032 1.45455 35.6364 1.45455C37.2407 1.45455 38.5454 2.75927 38.5454 4.36364C38.5454 5.968 37.2407 7.27273 35.6364 7.27273Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h2 className="counter"><CountUp delay={2} end={20} /></h2>
                        <span>+</span>
                      </div>
                      <p>Projects Complete</p>
                    </div>
                  </li>
                  <li className="single-counter">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                      >
                        <path d="M20 1.64062C16.3689 1.64062 12.8193 2.71738 9.80009 4.73474C6.7809 6.75209 4.42774 9.61943 3.03816 12.9742C1.64858 16.3289 1.285 20.0204 1.9934 23.5817C2.7018 27.1431 4.45036 30.4144 7.01797 32.982C9.58557 35.5496 12.8569 37.2982 16.4183 38.0066C19.9796 38.715 23.6711 38.3514 27.0258 36.9619C30.3806 35.5723 33.2479 33.2191 35.2653 30.1999C37.2826 27.1807 38.3594 23.6311 38.3594 20C38.3539 15.1325 36.4179 10.4659 32.976 7.02399C29.5341 3.58212 24.8675 1.64608 20 1.64062ZM35.91 26.7059L35.1288 26.0881C34.9898 25.9784 34.8975 25.8202 34.8703 25.6453L34.6741 24.3953C34.6302 24.1171 34.5071 23.8575 34.3195 23.6474C34.1319 23.4374 33.8877 23.2859 33.6163 23.2109L32.8734 23.0066C32.8116 22.9894 32.7552 22.9565 32.7098 22.9111C32.6645 22.8656 32.6317 22.8091 32.6147 22.7472L32.4353 22.0863C32.3506 21.7764 32.1665 21.5029 31.9114 21.3078C31.6562 21.1127 31.344 21.0068 31.0228 21.0063H30.0872C29.8843 21.0062 29.6836 21.0484 29.4979 21.1301C29.3122 21.2117 29.1454 21.3311 29.0083 21.4807C28.8712 21.6302 28.7667 21.8067 28.7014 21.9988C28.6361 22.1909 28.6115 22.3944 28.6291 22.5966C28.6349 22.6658 28.6211 22.7353 28.5894 22.7972C28.5577 22.8591 28.5093 22.9108 28.4497 22.9466L26 24.4025C25.8048 24.5189 25.5831 24.5835 25.3559 24.59L23.7253 24.6328C23.6295 24.6359 23.5359 24.6035 23.4626 24.5417C23.3893 24.4799 23.3415 24.3931 23.3284 24.2981L23.0784 22.5697C23.067 22.49 23.0804 22.4087 23.1169 22.337C23.1534 22.2652 23.2111 22.2065 23.2822 22.1688L24.7391 21.3975C24.9274 21.2981 25.0917 21.1586 25.2205 20.9889C25.3492 20.8193 25.4393 20.6235 25.4844 20.4153L26.0325 17.8994C26.1126 17.5304 26.2982 17.1927 26.5666 16.9272L28.9313 14.585C29.0857 14.4326 29.2042 14.2476 29.278 14.0436C29.3519 13.8395 29.3792 13.6216 29.3581 13.4056L29.2359 12.125C29.2276 12.0361 29.2517 11.9471 29.3037 11.8745C29.3557 11.8019 29.4322 11.7504 29.5191 11.7297L30.9669 11.3881C31.3132 11.3066 31.6274 11.1239 31.8694 10.8631L33.4381 9.17562C35.3971 11.6007 36.6615 14.5118 37.0968 17.5987C37.5321 20.6856 37.1219 23.8328 35.91 26.705V26.7059ZM2.73438 20C2.73087 16.8172 3.61269 13.6961 5.28126 10.9856L6.98063 12.09C7.12277 12.1819 7.23957 12.3081 7.32032 12.4568C7.40106 12.6056 7.44319 12.7723 7.44282 12.9416V14.1731C7.44274 14.4772 7.52463 14.7757 7.67988 15.0371C7.83513 15.2985 8.05799 15.5133 8.32501 15.6588L8.91188 15.9791C8.9597 16.0052 9.00152 16.041 9.03466 16.0843C9.0678 16.1276 9.09151 16.1773 9.10429 16.2303C9.11706 16.2832 9.11861 16.3383 9.10883 16.3919C9.09905 16.4455 9.07816 16.4965 9.04751 16.5416L8.80501 16.8962C8.58881 17.2117 8.50298 17.5986 8.56548 17.9759C8.62797 18.3532 8.83395 18.6917 9.14032 18.9206L9.71563 19.3522C9.97527 19.5464 10.2852 19.6622 10.6086 19.6856C10.932 19.7091 11.2553 19.6394 11.5403 19.4847L12.6747 18.8672C12.9516 18.7164 13.1808 18.4913 13.3366 18.2172L14.3916 16.3619C14.5455 16.0912 14.6265 15.7851 14.6266 15.4737V14.9062C14.6262 14.7517 14.6857 14.6031 14.7927 14.4916C14.8996 14.38 15.0456 14.3143 15.2 14.3081L16.8506 14.2384C16.9515 14.2337 17.052 14.2547 17.1425 14.2996C17.233 14.3445 17.3106 14.4118 17.3678 14.495L18.0966 15.5456C18.1743 15.6586 18.2112 15.7947 18.201 15.9314C18.1908 16.0682 18.1343 16.1973 18.0406 16.2975L17.8531 16.4966C17.5686 16.7987 17.405 17.1948 17.3934 17.6097C17.3819 18.0245 17.5233 18.4291 17.7906 18.7466L18.2828 19.3312C18.3432 19.4031 18.386 19.4881 18.4077 19.5794C18.4294 19.6707 18.4294 19.7658 18.4078 19.8572L18.1875 20.7722C18.1501 20.9239 18.0552 21.0551 17.9228 21.1382C17.7905 21.2212 17.631 21.2495 17.4781 21.2172L16.92 21.0956C16.6421 21.0362 16.3521 21.0795 16.1037 21.2174C15.8552 21.3552 15.6651 21.5784 15.5684 21.8456L15.0916 23.1722C15.0631 23.2513 15.0182 23.3235 14.96 23.3842C14.9017 23.4449 14.8314 23.4926 14.7535 23.5242C14.6756 23.5559 14.5918 23.5708 14.5078 23.568C14.4238 23.5651 14.3412 23.5446 14.2656 23.5078L12.4475 22.6209C12.2622 22.5306 12.0584 22.4846 11.8523 22.4867C11.6462 22.4887 11.4434 22.5387 11.2599 22.6327C11.0765 22.7267 10.9174 22.8621 10.7953 23.0282C10.6732 23.1943 10.5915 23.3865 10.5566 23.5897L10.4472 24.2228C10.3882 24.562 10.4132 24.9105 10.5201 25.2377C10.627 25.565 10.8125 25.8611 11.0603 26.1L12.8125 27.7903C13.0014 27.9719 13.2298 28.1074 13.4798 28.1862C13.7297 28.265 13.9945 28.2849 14.2534 28.2444L15.8325 27.9944C16.0024 27.9668 16.1765 27.9831 16.3383 28.0418C16.5001 28.1005 16.6442 28.1996 16.7569 28.3297L17.9106 29.6519C17.9886 29.7412 18.0382 29.8517 18.0531 29.9694L18.1447 30.6809C18.1564 30.7723 18.1468 30.8651 18.1167 30.9522C18.0867 31.0393 18.0369 31.1183 17.9714 31.183C17.9058 31.2477 17.8263 31.2965 17.7388 31.3254C17.6514 31.3544 17.5584 31.3628 17.4672 31.35L16.0588 31.1522C15.8163 31.1181 15.5694 31.1372 15.335 31.208C15.1007 31.2789 14.8845 31.3998 14.7016 31.5625L14.0313 32.1562C13.9424 32.2352 13.832 32.2859 13.7143 32.3018C13.5965 32.3177 13.4766 32.2981 13.37 32.2456L10.8175 30.9906C10.4187 30.794 9.96795 30.7286 9.52975 30.8039C9.09154 30.8792 8.68842 31.0912 8.37813 31.4097L7.70126 32.1028C4.51685 28.8798 2.7321 24.5308 2.73438 20ZM20 37.2656C15.7511 37.2684 11.6515 35.698 8.49188 32.8572L9.16001 32.1734C9.30938 32.0201 9.50344 31.918 9.7144 31.8817C9.92536 31.8455 10.1424 31.8769 10.3344 31.9716L12.8869 33.2259C13.1881 33.3747 13.5268 33.4302 13.8597 33.3854C14.1926 33.3405 14.5046 33.1973 14.7556 32.9741L15.4269 32.3803C15.4918 32.3231 15.5684 32.2805 15.6512 32.2555C15.7341 32.2304 15.8214 32.2236 15.9072 32.2353L17.3153 32.4331C17.5732 32.4694 17.8359 32.4456 18.0831 32.3638C18.3302 32.2819 18.5552 32.1441 18.7404 31.9611C18.9256 31.7781 19.0662 31.5549 19.151 31.3087C19.2359 31.0626 19.2628 30.8001 19.2297 30.5419L19.1384 29.8303C19.0961 29.4977 18.9557 29.1853 18.735 28.9328L17.5816 27.6106C17.3473 27.3405 17.048 27.1348 16.7119 27.0129C16.3758 26.891 16.0142 26.8569 15.6613 26.9141L14.0825 27.1641C13.9909 27.1787 13.8971 27.1718 13.8086 27.1439C13.7201 27.116 13.6392 27.0679 13.5725 27.0034L11.8197 25.3125C11.7003 25.1974 11.611 25.0548 11.5595 24.8972C11.508 24.7396 11.496 24.5718 11.5244 24.4084L11.6341 23.7753C11.64 23.7392 11.6543 23.705 11.6759 23.6755C11.6974 23.6459 11.7256 23.6218 11.7581 23.605C11.7906 23.5883 11.8266 23.5794 11.8632 23.5791C11.8998 23.5787 11.9359 23.587 11.9688 23.6031L13.7866 24.49C14.0003 24.5942 14.2336 24.6523 14.4712 24.6603C14.7089 24.6684 14.9455 24.6263 15.1658 24.5368C15.3861 24.4473 15.5851 24.3124 15.7498 24.1408C15.9144 23.9693 16.0411 23.765 16.1216 23.5413L16.5984 22.2144C16.6048 22.1965 16.6174 22.1816 16.634 22.1724C16.6506 22.1632 16.6699 22.1603 16.6884 22.1644L17.2463 22.2859C17.6781 22.3767 18.1284 22.2964 18.5022 22.0617C18.876 21.8271 19.1441 21.4565 19.25 21.0281L19.4706 20.1116C19.5323 19.8536 19.5328 19.5848 19.4719 19.3267C19.4111 19.0686 19.2907 18.8283 19.1203 18.625L18.6278 18.0406C18.5333 17.9283 18.4833 17.7851 18.4874 17.6383C18.4915 17.4915 18.5494 17.3513 18.65 17.2444L18.8375 17.0453C19.102 16.7621 19.2619 16.3971 19.2907 16.0106C19.3194 15.6242 19.2153 15.2395 18.9956 14.9203L18.2666 13.87C18.1045 13.6349 17.8853 13.4449 17.6295 13.3178C17.3738 13.1907 17.09 13.1307 16.8047 13.1434L15.1541 13.2134C14.7172 13.2306 14.304 13.4167 14.0016 13.7324C13.6992 14.0482 13.5311 14.469 13.5328 14.9062V15.4756C13.5327 15.5974 13.5011 15.7172 13.4409 15.8231L12.3856 17.6784C12.3307 17.7755 12.2496 17.8551 12.1516 17.9081L11.0172 18.5259C10.9164 18.5806 10.802 18.6052 10.6877 18.5969C10.5733 18.5886 10.4637 18.5477 10.3719 18.4791L9.79657 18.0478C9.71648 17.9875 9.66263 17.8988 9.64617 17.7999C9.6297 17.701 9.65189 17.5995 9.70813 17.5166L9.95063 17.1619C10.0676 16.9906 10.1473 16.7967 10.1847 16.5928C10.2221 16.3888 10.2164 16.1792 10.1679 15.9776C10.1194 15.776 10.0291 15.5868 9.90301 15.4222C9.77689 15.2576 9.61768 15.1212 9.43563 15.0219L8.84876 14.7016C8.75422 14.6502 8.67529 14.5743 8.6203 14.4819C8.5653 14.3894 8.53626 14.2838 8.53626 14.1762V12.9416C8.53695 12.59 8.44946 12.2439 8.28181 11.9349C8.11415 11.6259 7.87167 11.3639 7.57657 11.1728L5.88563 10.0741C7.36778 7.96085 9.30558 6.20746 11.556 4.94331C13.8064 3.67915 16.312 2.9365 18.8878 2.77018C21.4636 2.60386 24.0438 3.0181 26.4381 3.98234C28.8324 4.94658 30.9796 6.4362 32.7213 8.34125L31.0688 10.1181C30.974 10.2202 30.8511 10.2917 30.7156 10.3237L29.2675 10.6653C28.9238 10.7476 28.6213 10.9512 28.4155 11.2385C28.2097 11.5259 28.1145 11.8778 28.1472 12.2297L28.27 13.5084C28.2753 13.563 28.2684 13.6181 28.2498 13.6697C28.2311 13.7212 28.2012 13.768 28.1622 13.8066L25.7975 16.1484C25.3789 16.5625 25.0894 17.0893 24.9644 17.6647L24.4163 20.1813C24.405 20.2337 24.3824 20.2831 24.35 20.3259C24.3176 20.3687 24.2762 20.4039 24.2288 20.4291L22.7722 21.2003C22.5019 21.3439 22.2824 21.5674 22.1438 21.8404C22.0052 22.1133 21.9541 22.4223 21.9975 22.7253L22.2475 24.4538C22.2992 24.8137 22.4814 25.1421 22.7595 25.3765C23.0376 25.6108 23.3921 25.7347 23.7556 25.7247L25.3863 25.6819C25.8 25.6712 26.204 25.5548 26.56 25.3438L29.0084 23.8881C29.2447 23.7467 29.4365 23.5417 29.5621 23.2967C29.6876 23.0516 29.7419 22.7763 29.7188 22.5019C29.7143 22.4508 29.7206 22.3994 29.7371 22.3508C29.7536 22.3023 29.78 22.2577 29.8147 22.22C29.8493 22.1822 29.8914 22.152 29.9383 22.1314C29.9852 22.1107 30.0359 22.1 30.0872 22.1H31.0225C31.1037 22.1001 31.1826 22.1269 31.2471 22.1761C31.3116 22.2254 31.3582 22.2945 31.3797 22.3728L31.5588 23.0334C31.6257 23.279 31.7553 23.503 31.9349 23.6834C32.1145 23.8638 32.3379 23.9944 32.5831 24.0625L33.3259 24.2669C33.3945 24.2857 33.4562 24.324 33.5036 24.377C33.551 24.4301 33.5821 24.4957 33.5931 24.5659L33.7894 25.8159C33.8591 26.2628 34.0951 26.6669 34.45 26.9472L35.4344 27.7256C33.9991 30.5903 31.7955 32.9996 29.07 34.6843C26.3444 36.3689 23.2042 37.2627 20 37.2656Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h2 className="counter"><CountUp delay={2} end={16} /></h2>
                        <span>+</span>
                      </div>
                      <p>World-wide Clients</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Commitment;
