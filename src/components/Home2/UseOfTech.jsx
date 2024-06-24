import Link from "next/link";
import React from "react";

const SolutionSection = () => {
  return (
    <div className="solution-section mb-10" style={{padding : '2rem'}}>
      <div className="container-fluid one">
        <div className="row g-4">
          <div className="col-lg-2 d-flex justify-content-lg-center">
            <div className="sub-title">
              <span>USE OF TECHNOLOGY</span>
            </div>
          </div>
        <div className="col-lg-9" style={{marginLeft : '2rem'}}>
            <div className="row">
              <div className="col-lg-12 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-start justify-content-between mb-60">
                <div className="section-title1 one">
                  <h2>
                    Technology plays a crucial role in our operations, enabling us to provide our clients with more efficient, effective, and convenient financial solutions.
                  </h2>
                </div>
                {/* <Link legacyBehavior href="/services">
                  <a className="explore-btn">
                    Explore Area
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
                      />
                    </svg>
                  </a>
                </Link> */}
              </div>
              <div className="col-lg-12 d-flex align-items-center position-relative">
                <div className="row g-4 justify-content-start">
                  <div className="col-xxl-3 col-lg-4 col-sm-6">
                    <div className="eg-card-2 style-2">
                      <div className="sl-no">
                        <h3>01</h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                        >
                          <path d="M30 53.3344C29.6946 53.3344 29.4546 53.0944 29.4546 52.7889C29.4546 52.4835 29.6946 52.2435 30 52.2435C42.2618 52.2435 52.2436 42.2616 52.2436 29.9998C52.2436 17.738 42.2618 7.75619 30 7.75619C29.6946 7.75619 29.4546 7.51619 29.4546 7.21074C29.4546 6.90528 29.6946 6.66528 30 6.66528C42.8836 6.66528 53.3346 17.1162 53.3346 29.9998C53.3346 36.1853 50.88 42.1198 46.5055 46.4944C42.1309 50.8907 36.1964 53.3453 30 53.3344Z" />
                          <path d="M30 48.8835C29.6946 48.8835 29.4546 48.6435 29.4546 48.338C29.4546 48.0326 29.6946 47.7926 30 47.7926C39.8073 47.7926 47.7927 39.8071 47.7927 29.9998C47.7927 20.1926 39.8073 12.2071 30 12.2071C29.6946 12.2071 29.4546 11.9671 29.4546 11.6617C29.4546 11.3562 29.6946 11.1162 30 11.1162C40.4182 11.1162 48.8836 19.5926 48.8836 29.9998C48.8836 40.4071 40.4182 48.8835 30 48.8835Z" />
                          <path d="M30 44.4435C29.6946 44.4435 29.4546 44.2035 29.4546 43.898C29.4546 43.5926 29.6946 43.3526 30 43.3526C37.3746 43.3526 43.3527 37.3744 43.3527 29.9999C43.3527 22.6253 37.3746 16.658 30 16.658C29.6946 16.658 29.4546 16.418 29.4546 16.1126C29.4546 15.8071 29.6946 15.5671 30 15.5671C37.9636 15.5671 44.4436 22.0471 44.4436 30.0108C44.4436 37.9744 37.9636 44.4435 30 44.4435Z" />
                          <path d="M30 57.7744C14.6618 57.7744 2.22546 45.3381 2.22546 29.9999C2.22546 29.6944 2.46546 29.4544 2.77091 29.4544H20.5527C20.8582 29.4544 21.0982 29.6944 21.0982 29.9999C21.0982 34.9199 25.0909 38.9017 30 38.9017C34.9091 38.9017 38.9018 34.909 38.9018 29.9999C38.9018 25.0799 34.92 21.0981 30 21.0981C29.6945 21.0981 29.4545 20.8581 29.4545 20.5526C29.4545 20.2472 29.6945 20.0072 30 20.0072C35.52 20.0072 39.9927 24.4799 39.9927 29.9999C39.9927 35.5199 35.52 39.9926 30 39.9926C24.6873 39.9926 20.3127 35.8472 20.0182 30.5453H3.31637C3.61091 45.0108 15.4691 56.6835 30 56.6835C44.7164 56.6835 56.6836 44.7163 56.6836 29.9999C56.6836 15.2835 44.7164 3.31625 30 3.31625C29.6945 3.31625 29.4545 3.07625 29.4545 2.7708C29.4545 2.46534 29.6945 2.22534 30 2.22534C45.3382 2.22534 57.7745 14.6726 57.7745 30.0108C57.7745 37.3744 54.8509 44.4435 49.6364 49.6472C44.4436 54.8617 37.3745 57.7962 30 57.7744Z" />
                          <path d="M30 35.5526C29.6946 35.5526 29.4546 35.3126 29.4546 35.0071C29.4546 34.7016 29.6946 34.4616 30 34.4616C32.4655 34.4616 34.4618 32.4653 34.4618 30.0107C34.4618 27.5453 32.4655 25.5489 30.0109 25.5489C29.7055 25.5489 29.4655 25.3089 29.4655 25.0035C29.4655 24.698 29.7055 24.458 30.0109 24.458C33.0764 24.458 35.5636 26.9453 35.5636 29.9998C35.5527 33.0653 33.0655 35.5526 30 35.5526Z" />
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Advanced Analytics</h5>
                        <p>
                          We leverage advanced analytics tools to analyze market trends and customer data, allowing us to provide our clients with more personalized and targeted financial advice.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-sm-6">
                    <div className="eg-card-2 style-2">
                      <div className="sl-no">
                        <h3>02</h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                        >
                          <path d="M17.6768 11.1353L16.3065 9.03891L18.7166 7.65105L19.8422 9.88664L17.6768 11.1353ZM29.9916 7.48254V4.98047L27.2168 5.13199L27.4909 7.6193L29.9916 7.48254ZM24.7774 8.0884L24.1999 5.65242L21.5304 6.44414L22.3772 8.79949L24.7774 8.0884ZM35.3914 5.56441L32.6437 5.11969L32.3821 7.60699L34.8533 8.00766L35.3914 5.56441ZM9.255 21.1405L6.95004 20.1559L5.99836 22.7678L8.39859 23.4911L9.255 21.1405ZM11.8707 16.596L9.85934 15.1056L8.3277 17.4243L10.493 18.6825L11.8707 16.596ZM7.7673 26.169L5.2984 25.7463L4.98047 28.5047L7.48113 28.6513L7.7673 26.169ZM15.4649 12.7747L13.8502 10.864L11.8264 12.7673L13.642 14.4898L15.4649 12.7747ZM50.5835 20.8083L52.8713 19.787L51.5944 17.3168L49.4337 18.5873L50.5835 20.8083ZM40.9066 7.4727L38.335 6.40254L37.503 8.76281L39.8128 9.72551L40.9066 7.4727ZM52.5166 31.0433L55.0195 31.1557L54.995 28.3826L52.4946 28.5413L52.5166 31.0433ZM52.1518 25.8122L54.6134 25.3504L53.9477 22.6505L51.5525 23.3835L52.1518 25.8122ZM49.8813 14.7855L48.0707 12.677L46.2625 14.4093L47.8946 16.3077L49.8813 14.7855ZM45.8222 10.6075L43.5735 8.97293L42.2133 11.0742L44.2391 12.5452L45.8222 10.6075ZM42.5631 48.6962L43.9601 50.7731L46.1793 49.097L44.5597 47.1888L42.5631 48.6962ZM32.7954 52.3441L33.1036 54.829L35.8443 54.333L35.262 51.8994L32.7954 52.3441ZM37.8946 51.0956L38.7731 53.4388L41.3223 52.3196L40.187 50.089L37.8946 51.0956ZM46.5488 45.2855L48.3888 46.9861L50.1604 44.8457L48.1465 43.3601L46.5488 45.2855ZM47.5301 30C47.5301 39.6707 39.6758 47.5137 29.9916 47.5137C20.3071 47.5137 12.4528 39.6707 12.4528 30C12.4528 20.3295 20.3071 12.4863 29.9916 12.4863C39.6757 12.4863 47.5301 20.3295 47.5301 30ZM45.0245 30C45.0245 21.7221 38.2809 14.9883 29.9916 14.9883C21.702 14.9883 14.9584 21.722 14.9584 30C14.9584 38.278 21.702 45.0118 29.9916 45.0118C38.2809 45.0118 45.0245 38.278 45.0245 30ZM51.6698 36.2159L54.0799 36.9049L54.6966 34.1927L52.2253 33.7773L51.6698 36.2159ZM49.644 41.0511L51.8264 42.2802L53.0573 39.7879L50.7499 38.8082L49.644 41.0511ZM8.41559 36.5627L6.01793 37.2909L6.97465 39.9004L9.27703 38.9109L8.41559 36.5627ZM11.8707 47.2767L13.8991 49.1776L15.5088 47.2597L13.6812 45.5494L11.8707 47.2767ZM27.2779 54.8755L29.9914 55.0195V52.5176L27.547 52.3856L27.2779 54.8755ZM7.48594 31.4025L4.98527 31.5564L5.30824 34.3148L7.77727 33.8873L7.48594 31.4025ZM10.52 41.3639L8.35699 42.6295L9.89613 44.9459L11.905 43.4482L10.52 41.3639ZM16.3579 50.9954L18.7705 52.3759L19.8961 50.1402L17.7232 48.8966L16.3579 50.9954ZM21.5893 53.578L24.2586 54.3622L24.8312 51.9263L22.4284 51.2202L21.5893 53.578Z" />
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Digital Platforms</h5>
                        <p>
                          Our digital platforms enable clients to access their accounts, track transactions, and communicate with our team from anywhere, at any time, providing them with greater convenience and flexibility.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-sm-6">
                    <div className="eg-card-2 style-2">
                      <div className="sl-no">
                        <h3>03</h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                        >
                          <path d="M34.6988 57.5756C34.5063 57.5759 34.3184 57.517 34.1606 57.4069L22.8994 49.5187C22.7756 49.4324 22.6745 49.3173 22.6047 49.1835C22.5349 49.0497 22.4985 48.9009 22.4985 48.75C22.4985 48.5991 22.5349 48.4503 22.6047 48.3165C22.6745 48.1827 22.7756 48.0676 22.8994 47.9813L34.1606 40.0912C34.3011 39.9923 34.466 39.9338 34.6374 39.9222C34.8088 39.9107 34.98 39.9464 35.1325 40.0255C35.285 40.1047 35.4128 40.2242 35.502 40.371C35.5911 40.5178 35.6382 40.6863 35.6381 40.8581V44.9906H38.4375C40.8985 44.9958 43.3335 44.4874 45.5869 43.4981C45.8148 43.3996 46.0724 43.395 46.3037 43.4852C46.535 43.5754 46.7215 43.7532 46.8225 43.98C46.9215 44.2079 46.9264 44.4656 46.8362 44.6971C46.7459 44.9286 46.5678 45.115 46.3406 45.2156C43.8431 46.3106 41.1844 46.8656 38.4356 46.8656H34.6969C34.4482 46.8656 34.2098 46.7669 34.034 46.591C33.8582 46.4152 33.7594 46.1768 33.7594 45.9281V42.66L25.0706 48.75L33.7613 54.8363V51.555C33.7613 51.3064 33.86 51.0679 34.0358 50.8921C34.2117 50.7163 34.4501 50.6175 34.6988 50.6175H38.4375C48.2588 50.6175 56.25 42.6263 56.25 32.805V25.3125C56.25 25.0639 56.3488 24.8254 56.5246 24.6496C56.7004 24.4738 56.9389 24.375 57.1875 24.375C57.4361 24.375 57.6746 24.4738 57.8504 24.6496C58.0262 24.8254 58.125 25.0639 58.125 25.3125V32.8069C58.125 43.6631 49.2938 52.4944 38.4375 52.4944H35.6363V56.6381C35.6368 56.7614 35.6128 56.8835 35.5659 56.9975C35.519 57.1114 35.4499 57.215 35.3628 57.3021C35.2756 57.3893 35.1721 57.4583 35.0581 57.5053C34.9441 57.5522 34.822 57.5761 34.6988 57.5756Z" />
                          <path d="M48.8156 42.1875C48.8156 41.6719 49.2375 41.25 49.7531 41.25C50.2687 41.25 50.6906 41.6719 50.6906 42.1875C50.6906 42.7031 50.2687 43.125 49.7531 43.125C49.5046 43.1245 49.2665 43.0256 49.0907 42.8499C48.915 42.6742 48.8161 42.436 48.8156 42.1875ZM20.3137 56.8369C20.1491 56.8374 19.9873 56.7941 19.845 56.7113L13.3556 52.9631C11.1124 51.6759 9.14658 49.9567 7.57185 47.905C5.99712 45.8533 4.8447 43.5098 4.18124 41.01C3.50453 38.5134 3.3301 35.9072 3.66805 33.3427C4.006 30.7781 4.84961 28.3061 6.14999 26.07L7.55061 23.6438L3.95999 21.5719C3.81212 21.4856 3.69064 21.3606 3.60866 21.2103C3.52669 21.06 3.48734 20.8902 3.49487 20.7192C3.50239 20.5482 3.55651 20.3825 3.65138 20.24C3.74624 20.0975 3.87824 19.9836 4.03311 19.9106L16.4962 14.1019C16.6329 14.0388 16.7827 14.0095 16.9331 14.0164C17.0835 14.0233 17.23 14.0662 17.3603 14.1416C17.4906 14.2169 17.6009 14.3225 17.6818 14.4494C17.7628 14.5762 17.8121 14.7207 17.8256 14.8706L19.0275 28.5675C19.0436 28.7387 19.0121 28.911 18.9365 29.0654C18.8609 29.2198 18.7442 29.3503 18.5991 29.4426C18.4541 29.5349 18.2864 29.5854 18.1145 29.5884C17.9426 29.5915 17.7732 29.5471 17.625 29.46L14.0437 27.3938L12.6431 29.82C11.4089 31.9495 10.6324 34.3129 10.3631 36.7594C10.3321 37.0049 10.2067 37.2287 10.0135 37.3834C9.8203 37.5381 9.57449 37.6115 9.32811 37.5881C9.20573 37.5746 9.08722 37.5371 8.97934 37.4778C8.87145 37.4184 8.77632 37.3384 8.69936 37.2423C8.6224 37.1462 8.56513 37.0359 8.53081 36.9176C8.4965 36.7994 8.48581 36.6755 8.49936 36.5531C8.79936 33.8419 9.64686 31.26 11.0212 28.8844L12.8906 25.6463C13.0153 25.4313 13.22 25.2745 13.4601 25.2102C13.7001 25.1459 13.9558 25.1793 14.1712 25.3031L17.0044 26.9381L16.0762 16.3669L6.45749 20.85L9.29999 22.4906C9.51423 22.616 9.67029 22.8209 9.7342 23.0607C9.79811 23.3006 9.7647 23.5559 9.64124 23.7713L7.77186 27.0094C6.59669 29.0327 5.83435 31.2689 5.52893 33.5887C5.2235 35.9085 5.38106 38.2659 5.99249 40.5244C6.59222 42.7866 7.63465 44.9075 9.05945 46.7642C10.4842 48.6209 12.2631 50.1766 14.2931 51.3413L19.1269 54.1331L19.1662 54.1538L20.7825 55.0894C20.9603 55.193 21.099 55.3522 21.1774 55.5425C21.2557 55.7328 21.2693 55.9435 21.216 56.1423C21.1626 56.341 21.0454 56.5167 20.8824 56.6423C20.7193 56.7678 20.5195 56.8362 20.3137 56.8369Z" />
                          <path d="M9.88497 40.2113C10.0462 40.3039 10.1763 40.4424 10.2588 40.609C10.3413 40.7757 10.3725 40.963 10.3484 41.1474C10.3243 41.3318 10.246 41.5049 10.1235 41.6448C10.0009 41.7846 9.83965 41.885 9.66003 41.9331C9.48041 41.9812 9.29056 41.975 9.1145 41.9151C8.93845 41.8552 8.78413 41.7445 8.67108 41.5968C8.55803 41.4492 8.49134 41.2713 8.47946 41.0858C8.46758 40.9002 8.51104 40.7153 8.60435 40.5544C8.72937 40.3398 8.93413 40.1834 9.174 40.1191C9.41387 40.0548 9.66942 40.088 9.88497 40.2113ZM49.4343 27.12C49.2976 27.1199 49.1626 27.0898 49.0387 27.0319L36.5775 21.2232C36.4221 21.1507 36.2895 21.037 36.1943 20.8945C36.099 20.7519 36.0446 20.586 36.0371 20.4147C36.0295 20.2434 36.0691 20.0733 36.1515 19.923C36.2339 19.7726 36.3559 19.6477 36.5043 19.5619L40.0837 17.4957L38.6831 15.0694C37.4564 12.9355 35.7987 11.0804 33.8156 9.62253C33.3975 9.31503 33.3075 8.72815 33.6168 8.3119C33.9262 7.89565 34.515 7.8094 34.9256 8.11315C37.118 9.72318 38.9502 11.7732 40.305 14.1319L42.1743 17.37C42.2364 17.4765 42.2768 17.5942 42.2931 17.7164C42.3094 17.8386 42.3014 17.9628 42.2695 18.0818C42.2376 18.2009 42.1825 18.3124 42.1072 18.41C42.032 18.5077 41.9382 18.5895 41.8312 18.6507L39 20.2857L48.6168 24.7669L49.5431 14.1975L46.7025 15.8382C46.4869 15.9615 46.2314 15.9946 45.9915 15.9303C45.7516 15.866 45.5469 15.7096 45.4218 15.495L43.5525 12.2569C42.3876 10.2269 40.8316 8.44809 38.9746 7.02359C37.1175 5.59908 34.9963 4.55716 32.7337 3.95815C30.4753 3.346 28.1178 3.18807 25.7979 3.49351C23.478 3.79894 21.2418 4.56168 19.2187 5.73753L14.3718 8.5369C14.3648 8.54197 14.3572 8.54636 14.3493 8.55003L12.7312 9.48378C12.5172 9.58981 12.2709 9.61037 12.0423 9.54127C11.8137 9.47217 11.62 9.31859 11.5006 9.11178C11.3812 8.90496 11.345 8.66043 11.3995 8.42791C11.4539 8.19538 11.5949 7.99233 11.7937 7.86003L18.285 4.11378C20.521 2.81406 22.9927 1.97097 25.5569 1.63335C28.1211 1.29572 30.7268 1.47028 33.2231 2.1469C35.7237 2.80909 38.068 3.96099 40.1202 5.53583C42.1723 7.11067 43.8915 9.07714 45.1781 11.3213L46.5787 13.7475L50.1675 11.6757C50.3159 11.59 50.485 11.5467 50.6563 11.5504C50.8276 11.5542 50.9947 11.6048 51.1392 11.6968C51.2838 11.7888 51.4004 11.9187 51.4764 12.0723C51.5523 12.2259 51.5847 12.3974 51.57 12.5682L50.3681 26.265C50.3475 26.4985 50.2402 26.7157 50.0673 26.874C49.8945 27.0322 49.6687 27.12 49.4343 27.12Z" />
                          <path d="M31.0612 7.48499C30.9544 7.55122 30.8354 7.59529 30.7113 7.6146C30.5871 7.63391 30.4603 7.62806 30.3384 7.59739C30.2166 7.56673 30.1021 7.51188 30.0019 7.4361C29.9016 7.36033 29.8176 7.26517 29.7549 7.15629C29.6922 7.04741 29.652 6.92703 29.6367 6.8023C29.6214 6.67757 29.6313 6.55104 29.6659 6.43023C29.7005 6.30942 29.759 6.19679 29.838 6.09905C29.917 6.0013 30.0148 5.92043 30.1256 5.86124C30.3403 5.7466 30.5912 5.71995 30.8252 5.78694C31.0592 5.85392 31.258 6.00928 31.3795 6.22018C31.501 6.43107 31.5358 6.68096 31.4764 6.917C31.417 7.15304 31.2681 7.35673 31.0612 7.48499Z" />
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Automation</h5>
                        <p>
                          We use automation technologies to streamline our processes, reducing the time and effort required for routine tasks and allowing us to focus more on providing personalized service to our clients.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-sm-6">
                    <div className="eg-card-2 style-2">
                      <div className="sl-no">
                        <h3>04</h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                        >
                          <g>
                            <path d="M30.0972 2.0979C22.7923 2.0979 16.8497 8.03863 16.8497 15.3445C16.8497 22.6494 22.7923 28.592 30.0972 28.592C37.4022 28.592 43.3447 22.6494 43.3447 15.3445C43.3457 8.0414 37.4013 2.0979 30.0972 2.0979ZM30.0972 26.7512C23.809 26.7512 18.6933 21.6336 18.6933 15.3472C18.6933 9.05994 23.809 3.94418 30.0972 3.94418C36.3864 3.94418 41.5012 9.05994 41.5012 15.3472C41.5022 21.6336 36.3882 26.7512 30.0972 26.7512ZM13.2475 57.9011C20.5524 57.9011 26.495 51.9613 26.495 44.6545C26.495 37.3505 20.5524 31.408 13.2475 31.408C5.94257 31.408 0 37.3505 0 44.6545C0 51.9595 5.94165 57.9011 13.2475 57.9011ZM13.2475 33.2487C19.5357 33.2487 24.6515 38.3654 24.6515 44.6536C24.6515 50.9382 19.5357 56.0567 13.2475 56.0567C6.95927 56.0567 1.84352 50.9391 1.84352 44.6536C1.84352 38.3654 6.95835 33.2487 13.2475 33.2487ZM46.7534 31.4052C39.4476 31.4052 33.5059 37.3478 33.5059 44.6536C33.5059 51.9595 39.4476 57.9002 46.7534 57.9002C54.0583 57.9002 60 51.9595 60 44.6536C60.0018 37.3505 54.0574 31.4052 46.7534 31.4052ZM46.7534 56.0576C40.4661 56.0576 35.3494 50.9419 35.3494 44.6545C35.3494 38.3691 40.4661 33.2515 46.7534 33.2515C53.0398 33.2515 58.1565 38.3691 58.1565 44.6545C58.1583 50.9428 53.0416 56.0576 46.7534 56.0576Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Security Measures</h5>
                        <p>
                          We employ state-of-the-art security measures to protect our client's sensitive information, ensuring that their data are safe and secure at all times.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-sm-6">
                    <div className="eg-card-2 style-2">
                      <div className="sl-no">
                        <h3>05</h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                        >
                          <g>
                            <path d="M30.0972 2.0979C22.7923 2.0979 16.8497 8.03863 16.8497 15.3445C16.8497 22.6494 22.7923 28.592 30.0972 28.592C37.4022 28.592 43.3447 22.6494 43.3447 15.3445C43.3457 8.0414 37.4013 2.0979 30.0972 2.0979ZM30.0972 26.7512C23.809 26.7512 18.6933 21.6336 18.6933 15.3472C18.6933 9.05994 23.809 3.94418 30.0972 3.94418C36.3864 3.94418 41.5012 9.05994 41.5012 15.3472C41.5022 21.6336 36.3882 26.7512 30.0972 26.7512ZM13.2475 57.9011C20.5524 57.9011 26.495 51.9613 26.495 44.6545C26.495 37.3505 20.5524 31.408 13.2475 31.408C5.94257 31.408 0 37.3505 0 44.6545C0 51.9595 5.94165 57.9011 13.2475 57.9011ZM13.2475 33.2487C19.5357 33.2487 24.6515 38.3654 24.6515 44.6536C24.6515 50.9382 19.5357 56.0567 13.2475 56.0567C6.95927 56.0567 1.84352 50.9391 1.84352 44.6536C1.84352 38.3654 6.95835 33.2487 13.2475 33.2487ZM46.7534 31.4052C39.4476 31.4052 33.5059 37.3478 33.5059 44.6536C33.5059 51.9595 39.4476 57.9002 46.7534 57.9002C54.0583 57.9002 60 51.9595 60 44.6536C60.0018 37.3505 54.0574 31.4052 46.7534 31.4052ZM46.7534 56.0576C40.4661 56.0576 35.3494 50.9419 35.3494 44.6545C35.3494 38.3691 40.4661 33.2515 46.7534 33.2515C53.0398 33.2515 58.1565 38.3691 58.1565 44.6545C58.1583 50.9428 53.0416 56.0576 46.7534 56.0576Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Innovation</h5>
                        <p>
                          We are constantly exploring new technologies and innovations to enhance our services and provide our clients with the best possible experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-xxl-3 col-lg-4 col-sm-6">
                    <div className="eg-card-2 style-2">
                      <div className="sl-no">
                        <h3>05</h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M53.7864 29.4154C53.6419 29.414 53.5029 29.3595 53.3959 29.2622C53.2889 29.165 53.2215 29.0318 53.2064 28.888C52.6815 23.2037 50.1855 17.8818 46.1505 13.8436C42.1156 9.80549 36.7957 7.30528 31.1118 6.77584C30.9662 6.75043 30.8356 6.67125 30.7457 6.55399C30.6558 6.43674 30.6133 6.28999 30.6266 6.14286C30.6399 5.99572 30.708 5.85895 30.8174 5.75968C30.9268 5.66041 31.0695 5.6059 31.2172 5.60695C37.1725 6.15956 42.7471 8.77693 46.9762 13.006C51.2053 17.2351 53.8227 22.8097 54.3753 28.765C54.3826 28.8459 54.373 28.9274 54.3473 29.0045C54.3215 29.0815 54.2801 29.1524 54.2256 29.2127C54.1711 29.2729 54.1048 29.3213 54.0307 29.3546C53.9566 29.388 53.8765 29.4057 53.7952 29.4066L53.7864 29.4154ZM28.8267 56.8359C14.677 56.8359 3.16391 45.3228 3.16391 31.1731C3.16391 24.731 5.55442 18.579 9.90479 13.8331C14.2002 9.13787 20.0909 6.21136 26.4274 5.62453C26.576 5.62103 26.7204 5.67387 26.8317 5.77243C26.943 5.87099 27.0128 6.00798 27.0273 6.15592C27.0418 6.30385 26.9997 6.45178 26.9097 6.57002C26.8196 6.68826 26.6881 6.76806 26.5417 6.79341C20.4576 7.3332 14.7982 10.1387 10.6849 14.6541C6.57159 19.1694 4.30449 25.0651 4.3328 31.1731C4.33978 37.6671 6.92262 43.8932 11.5146 48.4852C16.1066 53.0772 22.3327 55.66 28.8267 55.667C34.9347 55.6953 40.8304 53.4282 45.3457 49.3149C49.8611 45.2016 52.6666 39.5422 53.2064 33.4581C53.2318 33.3126 53.311 33.1819 53.4282 33.0921C53.5455 33.0022 53.6922 32.9597 53.8394 32.9729C53.9865 32.9862 54.1233 33.0543 54.2225 33.1637C54.3218 33.2731 54.3763 33.4159 54.3753 33.5636C53.787 39.9016 50.8571 45.7927 46.1579 50.0862C41.412 54.4366 35.26 56.8359 28.8267 56.8359Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M51.5629 31.7532H31.1733C31.0306 31.7357 30.8993 31.6666 30.8041 31.5589C30.7088 31.4513 30.6563 31.3125 30.6563 31.1688C30.6563 31.025 30.7088 30.8863 30.8041 30.7786C30.8993 30.671 31.0306 30.6019 31.1733 30.5843H51.5629C51.7056 30.6019 51.8369 30.671 51.9321 30.7786C52.0274 30.8863 52.08 31.025 52.08 31.1688C52.08 31.3125 52.0274 31.4513 51.9321 31.5589C51.8369 31.6666 51.7056 31.7357 51.5629 31.7532ZM28.774 53.9533C28.6178 53.9533 28.468 53.8913 28.3576 53.7808C28.2472 53.6704 28.1852 53.5206 28.1852 53.3645V51.8528C28.175 51.7701 28.1825 51.6861 28.2072 51.6064C28.232 51.5268 28.2733 51.4533 28.3286 51.3909C28.3838 51.3284 28.4517 51.2784 28.5277 51.2442C28.6038 51.2099 28.6862 51.1922 28.7696 51.1922C28.853 51.1922 28.9354 51.2099 29.0115 51.2442C29.0875 51.2784 29.1554 51.3284 29.2106 51.3909C29.2659 51.4533 29.3072 51.5268 29.332 51.6064C29.3567 51.6861 29.3642 51.7701 29.354 51.8528V53.3645C29.354 53.6897 29.0904 53.9533 28.774 53.9533ZM28.774 48.7944C28.6193 48.7944 28.4709 48.7336 28.3607 48.625C28.2505 48.5165 28.1875 48.369 28.1852 48.2143V46.7027C28.175 46.6199 28.1825 46.5359 28.2072 46.4563C28.232 46.3767 28.2733 46.3032 28.3286 46.2407C28.3838 46.1783 28.4517 46.1283 28.5277 46.094C28.6038 46.0598 28.6862 46.042 28.7696 46.042C28.853 46.042 28.9354 46.0598 29.0115 46.094C29.0875 46.1283 29.1554 46.1783 29.2106 46.2407C29.2659 46.3032 29.3072 46.3767 29.332 46.4563C29.3567 46.5359 29.3642 46.6199 29.354 46.7027V48.2143C29.354 48.5395 29.0904 48.7944 28.774 48.7944ZM28.774 43.6442C28.6193 43.6443 28.4709 43.5834 28.3607 43.4749C28.2505 43.3664 28.1875 43.2188 28.1852 43.0642V41.5526C28.175 41.4698 28.1825 41.3858 28.2072 41.3062C28.232 41.2265 28.2733 41.153 28.3286 41.0906C28.3838 41.0281 28.4517 40.9781 28.5277 40.9439C28.6038 40.9096 28.6862 40.8919 28.7696 40.8919C28.853 40.8919 28.9354 40.9096 29.0115 40.9439C29.0875 40.9781 29.1554 41.0281 29.2106 41.0906C29.2659 41.153 29.3072 41.2265 29.332 41.3062C29.3567 41.3858 29.3642 41.4698 29.354 41.5526V43.0642C29.354 43.3806 29.0904 43.6442 28.774 43.6442ZM28.774 38.4941C28.6193 38.4941 28.4709 38.4333 28.3607 38.3248C28.2505 38.2162 28.1875 38.0687 28.1852 37.9141V36.4024C28.175 36.3196 28.1825 36.2357 28.2072 36.156C28.232 36.0764 28.2733 36.0029 28.3286 35.9404C28.3838 35.878 28.4517 35.828 28.5277 35.7937C28.6038 35.7595 28.6862 35.7418 28.7696 35.7418C28.853 35.7418 28.9354 35.7595 29.0115 35.7937C29.0875 35.828 29.1554 35.878 29.2106 35.9404C29.2659 36.0029 29.3072 36.0764 29.332 36.156C29.3567 36.2357 29.3642 36.3196 29.354 36.4024V37.9141C29.354 38.2304 29.0904 38.4941 28.774 38.4941ZM28.8267 29.4155C28.7494 29.4155 28.6728 29.4002 28.6014 29.3706C28.5299 29.341 28.465 29.2977 28.4103 29.243C28.3557 29.1883 28.3123 29.1234 28.2827 29.052C28.2531 28.9805 28.2379 28.9039 28.2379 28.8266V8.43698C28.2379 8.28081 28.2999 8.13104 28.4103 8.02061C28.5208 7.91018 28.6706 7.84814 28.8267 7.84814C28.9829 7.84814 29.1327 7.91018 29.2431 8.02061C29.3535 8.13104 29.4156 8.28081 29.4156 8.43698V28.8266C29.4156 29.1518 29.1519 29.4155 28.8267 29.4155Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.8267 4.33271C28.3605 4.33271 27.9134 4.51789 27.5838 4.84753C27.2542 5.17717 27.069 5.62425 27.069 6.09043C27.069 6.55661 27.2542 7.0037 27.5838 7.33333C27.9134 7.66297 28.3605 7.84816 28.8267 7.84816C29.2929 7.84816 29.74 7.66297 30.0696 7.33333C30.3992 7.0037 30.5844 6.55661 30.5844 6.09043C30.5844 5.62425 30.3992 5.17717 30.0696 4.84753C29.74 4.51789 29.2929 4.33271 28.8267 4.33271ZM28.8267 9.02584C28.0482 9.02584 27.3016 8.71657 26.7511 8.16608C26.2006 7.61558 25.8913 6.86895 25.8913 6.09043C25.8913 5.31192 26.2006 4.56528 26.7511 4.01479C27.3016 3.46429 28.0482 3.15503 28.8267 3.15503C29.6052 3.15503 30.3519 3.46429 30.9024 4.01479C31.4528 4.56528 31.7621 5.31192 31.7621 6.09043C31.7621 6.86895 31.4528 7.61558 30.9024 8.16608C30.3519 8.71657 29.6052 9.02584 28.8267 9.02584ZM28.8267 29.4155C28.3605 29.4155 27.9134 29.6007 27.5838 29.9303C27.2542 30.2599 27.069 30.707 27.069 31.1732C27.069 31.6394 27.2542 32.0865 27.5838 32.4161C27.9134 32.7457 28.3605 32.9309 28.8267 32.9309C29.2929 32.9309 29.74 32.7457 30.0696 32.4161C30.3992 32.0865 30.5844 31.6394 30.5844 31.1732C30.5844 30.707 30.3992 30.2599 30.0696 29.9303C29.74 29.6007 29.2929 29.4155 28.8267 29.4155ZM28.8267 34.0998C28.4283 34.1216 28.0296 34.062 27.655 33.9246C27.2805 33.7871 26.9378 33.5748 26.6481 33.3005C26.3583 33.0261 26.1275 32.6956 25.9698 32.3291C25.8121 31.9626 25.7307 31.5678 25.7307 31.1688C25.7307 30.7698 25.8121 30.375 25.9698 30.0085C26.1275 29.642 26.3583 29.3115 26.6481 29.0371C26.9378 28.7628 27.2805 28.5505 27.655 28.413C28.0296 28.2756 28.4283 28.216 28.8267 28.2378C29.5763 28.2789 30.2817 28.6056 30.7978 29.1507C31.3139 29.6959 31.6016 30.4181 31.6016 31.1688C31.6016 31.9195 31.3139 32.6417 30.7978 33.1869C30.2817 33.732 29.5763 34.0587 28.8267 34.0998ZM53.9007 29.4155C53.4345 29.4155 52.9874 29.6007 52.6578 29.9303C52.3281 30.2599 52.143 30.707 52.143 31.1732C52.143 31.6394 52.3281 32.0865 52.6578 32.4161C52.9874 32.7457 53.4345 32.9309 53.9007 32.9309C54.3669 32.9309 54.8139 32.7457 55.1436 32.4161C55.4732 32.0865 55.6584 31.6394 55.6584 31.1732C55.6584 30.707 55.4732 30.2599 55.1436 29.9303C54.8139 29.6007 54.3669 29.4155 53.9007 29.4155ZM53.9007 34.0998C53.5152 34.0992 53.1336 34.0227 52.7777 33.8747C52.4218 33.7266 52.0985 33.5099 51.8263 33.2369C51.5541 32.964 51.3384 32.64 51.1914 32.2837C51.0444 31.9273 50.9691 31.5455 50.9697 31.16C50.9702 30.7745 51.0467 30.3929 51.1948 30.037C51.3428 29.6811 51.5595 29.3578 51.8325 29.0857C52.1055 28.8135 52.4294 28.5977 52.7858 28.4508C53.1422 28.3038 53.524 28.2284 53.9095 28.229C54.688 28.229 55.4346 28.5383 55.9851 29.0888C56.5356 29.6393 56.8449 30.3859 56.8449 31.1644C56.8449 31.9429 56.5356 32.6896 55.9851 33.24C55.4346 33.7905 54.6792 34.0998 53.9007 34.0998ZM8.14705 31.8148H6.63541C6.47924 31.8148 6.32946 31.7527 6.21904 31.6423C6.10861 31.5319 6.04657 31.3821 6.04657 31.2259C6.04657 31.0698 6.10861 30.92 6.21904 30.8096C6.32946 30.6991 6.47924 30.6371 6.63541 30.6371H8.14705C8.30322 30.6371 8.453 30.6991 8.56342 30.8096C8.67385 30.92 8.73589 31.0698 8.73589 31.2259C8.73589 31.3821 8.67385 31.5319 8.56342 31.6423C8.453 31.7527 8.30322 31.8148 8.14705 31.8148ZM13.2972 31.8148H11.7768C11.6206 31.8148 11.4708 31.7527 11.3604 31.6423C11.25 31.5319 11.1879 31.3821 11.1879 31.2259C11.1879 31.0698 11.25 30.92 11.3604 30.8096C11.4708 30.6991 11.6206 30.6371 11.7768 30.6371H13.2884C13.4446 30.6371 13.5943 30.6991 13.7048 30.8096C13.8152 30.92 13.8772 31.0698 13.8772 31.2259C13.8772 31.3821 13.8152 31.5319 13.7048 31.6423C13.5943 31.7527 13.4446 31.8148 13.2884 31.8148H13.2972ZM18.4473 31.8148H16.9357C16.7795 31.8148 16.6297 31.7527 16.5193 31.6423C16.4089 31.5319 16.3468 31.3821 16.3468 31.2259C16.3468 31.0698 16.4089 30.92 16.5193 30.8096C16.6297 30.6991 16.7795 30.6371 16.9357 30.6371H18.4473C18.6035 30.6371 18.7533 30.6991 18.8637 30.8096C18.9741 30.92 19.0362 31.0698 19.0362 31.2259C19.0362 31.3821 18.9741 31.5319 18.8637 31.6423C18.7533 31.7527 18.6035 31.8148 18.4473 31.8148ZM23.5975 31.8148H22.0858C21.9297 31.8148 21.7799 31.7527 21.6695 31.6423C21.559 31.5319 21.497 31.3821 21.497 31.2259C21.497 31.0698 21.559 30.92 21.6695 30.8096C21.7799 30.6991 21.9297 30.6371 22.0858 30.6371H23.5975C23.7536 30.6371 23.9034 30.6991 24.0138 30.8096C24.1243 30.92 24.1863 31.0698 24.1863 31.2259C24.1863 31.3821 24.1243 31.5319 24.0138 31.6423C23.9034 31.7527 23.7536 31.8148 23.5975 31.8148Z"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Implementation</h5>
                        <p>
                          Develop a detailed plan outlining the steps,
                          resources.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-sm-6">
                    <div className="eg-card-2 style-2">
                      <div className="sl-no">
                        <h3>06</h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={60}
                          height={60}
                          viewBox="0 0 60 60"
                        >
                          <g>
                            <path d="M30 0.703125C38.3203 0.703125 45.8203 3.98438 51.2109 9.25781C56.6016 14.5312 60 21.9141 60 30C60 38.0859 56.6016 45.4688 51.2109 50.7422C45.8203 56.0156 38.3203 59.2969 30 59.2969C21.6797 59.2969 14.1797 56.0156 8.78906 50.7422C3.39844 45.4688 0 38.0859 0 30C0 21.9141 3.39844 14.5312 8.78906 9.25781C14.1797 3.98438 21.6797 0.703125 30 0.703125ZM50.2734 10.3125C45 5.15625 37.8516 2.10938 30 2.10938C22.1484 2.10938 15 5.15625 9.72656 10.3125C4.57031 15.3516 1.40625 22.2656 1.40625 30C1.40625 37.7344 4.57031 44.6484 9.72656 49.6875C15 54.8438 22.1484 57.8906 30 57.8906C37.8516 57.8906 45 54.8438 50.2734 49.6875C55.4297 44.6484 58.5938 37.7344 58.5938 30C58.5938 22.2656 55.4297 15.3516 50.2734 10.3125Z" />
                            <path d="M30 5.74219C29.6484 5.74219 29.2969 5.97656 29.2969 6.32812C29.2969 6.79688 29.6484 7.03125 30 7.03125H46.5234C46.875 7.03125 47.2266 6.79688 47.2266 6.32812C47.2266 5.97656 46.875 5.74219 46.5234 5.74219H30ZM30 11.6016C29.6484 11.6016 29.2969 11.9531 29.2969 12.3047C29.2969 12.6562 29.6484 13.0078 30 13.0078H52.9688C53.4375 13.0078 53.6719 12.6562 53.6719 12.3047C53.6719 11.9531 53.4375 11.6016 52.9688 11.6016H30ZM30 17.4609C29.6484 17.4609 29.2969 17.8125 29.2969 18.1641C29.2969 18.5156 29.6484 18.8672 30 18.8672H56.7188C57.0703 18.8672 57.4219 18.5156 57.4219 18.1641C57.4219 17.8125 57.0703 17.4609 56.7188 17.4609H30ZM30 23.4375C29.6484 23.4375 29.2969 23.6719 29.2969 24.1406C29.2969 24.4922 29.6484 24.7266 30 24.7266H58.7109C59.0625 24.7266 59.4141 24.4922 59.4141 24.1406C59.4141 23.6719 59.0625 23.4375 58.7109 23.4375H30ZM30 29.2969C29.6484 29.2969 29.2969 29.6484 29.2969 30C29.2969 30.3516 29.6484 30.7031 30 30.7031H59.2969C59.6484 30.7031 60 30.3516 60 30C60 29.6484 59.6484 29.2969 59.2969 29.2969H30ZM30 35.2734C29.6484 35.2734 29.2969 35.5078 29.2969 35.8594C29.2969 36.3281 29.6484 36.5625 30 36.5625H58.7109C59.0625 36.5625 59.4141 36.3281 59.4141 35.8594C59.4141 35.5078 59.0625 35.2734 58.7109 35.2734H30ZM30 41.1328C29.6484 41.1328 29.2969 41.4844 29.2969 41.8359C29.2969 42.1875 29.6484 42.5391 30 42.5391H56.7188C57.0703 42.5391 57.4219 42.1875 57.4219 41.8359C57.4219 41.4844 57.0703 41.1328 56.7188 41.1328H30ZM30 46.9922C29.6484 46.9922 29.2969 47.3438 29.2969 47.6953C29.2969 48.0469 29.6484 48.3984 30 48.3984H52.9688C53.4375 48.3984 53.6719 48.0469 53.6719 47.6953C53.6719 47.3438 53.4375 46.9922 52.9688 46.9922H30ZM30 52.9688C29.6484 52.9688 29.2969 53.2031 29.2969 53.6719C29.2969 54.0234 29.6484 54.2578 30 54.2578H46.5234C46.875 54.2578 47.2266 54.0234 47.2266 53.6719C47.2266 53.2031 46.875 52.9688 46.5234 52.9688H30Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="content">
                        <h5>Documentation</h5>
                        <p>
                          The consulting engagement, including reports,
                          analysis.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="right-shape">
                  <img src="assets/img/home2/shape-01.png" alt="" />
                </div>
                <div className="company-logo">
                  <h2>Indenta Solution</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
