import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { year: 2018, percentage1: 45, percentage2: 65 },
  { year: 2019, percentage1: 62, percentage2: 78 },
  { year: 2020, percentage1: 78, percentage2: 90 },
  { year: 2021, percentage1: 55, percentage2: 75 },
  { year: 2022, percentage1: 88, percentage2: 92 },
  { year: 2023, percentage1: 72, percentage2: 85 },
];

const WhyChooseSection = () => {

  return (
    <div className="why-choose-section mb-130" style={{marginTop : '4rem'}}>
      <div className="container-fluid one pl--95">
        <div className="row g-xl-4 gy-5">
          <div className="col-xl-7 pr--95">
            <div className="choose-content">
              <div className="section-title1 two mb-50">
                <span>WHY CHOOSE INDENTA SOLUTIONS</span>
                {/* <h2>
                  Business consulting is a professional service provided by
                  individuals or firms to help organizations improve.
                </h2> */}
              </div>
              <div className="sulution-approach">
                {/* <h3>Key Solution Approach :</h3> */}
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <path d="M12.1223 3.19025C12.163 3.23089 12.1953 3.27917 12.2174 3.33232C12.2394 3.38548 12.2508 3.44246 12.2508 3.5C12.2508 3.55755 12.2394 3.61453 12.2174 3.66768C12.1953 3.72084 12.163 3.76911 12.1223 3.80975L5.99725 9.93475C5.95661 9.9755 5.90833 10.0078 5.85518 10.0299C5.80203 10.0519 5.74505 10.0633 5.6875 10.0633C5.62996 10.0633 5.57298 10.0519 5.51982 10.0299C5.46667 10.0078 5.41839 9.9755 5.37775 9.93475L2.31525 6.87225C2.2331 6.7901 2.18695 6.67868 2.18695 6.5625C2.18695 6.44632 2.2331 6.3349 2.31525 6.25275C2.3974 6.1706 2.50882 6.12445 2.625 6.12445C2.74118 6.12445 2.8526 6.1706 2.93475 6.25275L5.6875 9.00638L11.5028 3.19025C11.5434 3.14951 11.5917 3.11719 11.6448 3.09513C11.698 3.07307 11.755 3.06172 11.8125 3.06172C11.87 3.06172 11.927 3.07307 11.9802 3.09513C12.0333 3.11719 12.0816 3.14951 12.1223 3.19025Z"></path>
                    </svg>{" "}
                    Expertise and Experience
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <path d="M12.1223 3.19025C12.163 3.23089 12.1953 3.27917 12.2174 3.33232C12.2394 3.38548 12.2508 3.44246 12.2508 3.5C12.2508 3.55755 12.2394 3.61453 12.2174 3.66768C12.1953 3.72084 12.163 3.76911 12.1223 3.80975L5.99725 9.93475C5.95661 9.9755 5.90833 10.0078 5.85518 10.0299C5.80203 10.0519 5.74505 10.0633 5.6875 10.0633C5.62996 10.0633 5.57298 10.0519 5.51982 10.0299C5.46667 10.0078 5.41839 9.9755 5.37775 9.93475L2.31525 6.87225C2.2331 6.7901 2.18695 6.67868 2.18695 6.5625C2.18695 6.44632 2.2331 6.3349 2.31525 6.25275C2.3974 6.1706 2.50882 6.12445 2.625 6.12445C2.74118 6.12445 2.8526 6.1706 2.93475 6.25275L5.6875 9.00638L11.5028 3.19025C11.5434 3.14951 11.5917 3.11719 11.6448 3.09513C11.698 3.07307 11.755 3.06172 11.8125 3.06172C11.87 3.06172 11.927 3.07307 11.9802 3.09513C12.0333 3.11719 12.0816 3.14951 12.1223 3.19025Z"></path>
                    </svg>{" "}
                    Client-Centric Approach
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <path d="M12.1223 3.19025C12.163 3.23089 12.1953 3.27917 12.2174 3.33232C12.2394 3.38548 12.2508 3.44246 12.2508 3.5C12.2508 3.55755 12.2394 3.61453 12.2174 3.66768C12.1953 3.72084 12.163 3.76911 12.1223 3.80975L5.99725 9.93475C5.95661 9.9755 5.90833 10.0078 5.85518 10.0299C5.80203 10.0519 5.74505 10.0633 5.6875 10.0633C5.62996 10.0633 5.57298 10.0519 5.51982 10.0299C5.46667 10.0078 5.41839 9.9755 5.37775 9.93475L2.31525 6.87225C2.2331 6.7901 2.18695 6.67868 2.18695 6.5625C2.18695 6.44632 2.2331 6.3349 2.31525 6.25275C2.3974 6.1706 2.50882 6.12445 2.625 6.12445C2.74118 6.12445 2.8526 6.1706 2.93475 6.25275L5.6875 9.00638L11.5028 3.19025C11.5434 3.14951 11.5917 3.11719 11.6448 3.09513C11.698 3.07307 11.755 3.06172 11.8125 3.06172C11.87 3.06172 11.927 3.07307 11.9802 3.09513C12.0333 3.11719 12.0816 3.14951 12.1223 3.19025Z"></path>
                    </svg>{" "}
                    Innovative Solutions
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <path d="M12.1223 3.19025C12.163 3.23089 12.1953 3.27917 12.2174 3.33232C12.2394 3.38548 12.2508 3.44246 12.2508 3.5C12.2508 3.55755 12.2394 3.61453 12.2174 3.66768C12.1953 3.72084 12.163 3.76911 12.1223 3.80975L5.99725 9.93475C5.95661 9.9755 5.90833 10.0078 5.85518 10.0299C5.80203 10.0519 5.74505 10.0633 5.6875 10.0633C5.62996 10.0633 5.57298 10.0519 5.51982 10.0299C5.46667 10.0078 5.41839 9.9755 5.37775 9.93475L2.31525 6.87225C2.2331 6.7901 2.18695 6.67868 2.18695 6.5625C2.18695 6.44632 2.2331 6.3349 2.31525 6.25275C2.3974 6.1706 2.50882 6.12445 2.625 6.12445C2.74118 6.12445 2.8526 6.1706 2.93475 6.25275L5.6875 9.00638L11.5028 3.19025C11.5434 3.14951 11.5917 3.11719 11.6448 3.09513C11.698 3.07307 11.755 3.06172 11.8125 3.06172C11.87 3.06172 11.927 3.07307 11.9802 3.09513C12.0333 3.11719 12.0816 3.14951 12.1223 3.19025Z"></path>
                    </svg>{" "}
                    Strong Partnerships
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <path d="M12.1223 3.19025C12.163 3.23089 12.1953 3.27917 12.2174 3.33232C12.2394 3.38548 12.2508 3.44246 12.2508 3.5C12.2508 3.55755 12.2394 3.61453 12.2174 3.66768C12.1953 3.72084 12.163 3.76911 12.1223 3.80975L5.99725 9.93475C5.95661 9.9755 5.90833 10.0078 5.85518 10.0299C5.80203 10.0519 5.74505 10.0633 5.6875 10.0633C5.62996 10.0633 5.57298 10.0519 5.51982 10.0299C5.46667 10.0078 5.41839 9.9755 5.37775 9.93475L2.31525 6.87225C2.2331 6.7901 2.18695 6.67868 2.18695 6.5625C2.18695 6.44632 2.2331 6.3349 2.31525 6.25275C2.3974 6.1706 2.50882 6.12445 2.625 6.12445C2.74118 6.12445 2.8526 6.1706 2.93475 6.25275L5.6875 9.00638L11.5028 3.19025C11.5434 3.14951 11.5917 3.11719 11.6448 3.09513C11.698 3.07307 11.755 3.06172 11.8125 3.06172C11.87 3.06172 11.927 3.07307 11.9802 3.09513C12.0333 3.11719 12.0816 3.14951 12.1223 3.19025Z"></path>
                    </svg>{" "}
                    Personalized Service
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <path d="M12.1223 3.19025C12.163 3.23089 12.1953 3.27917 12.2174 3.33232C12.2394 3.38548 12.2508 3.44246 12.2508 3.5C12.2508 3.55755 12.2394 3.61453 12.2174 3.66768C12.1953 3.72084 12.163 3.76911 12.1223 3.80975L5.99725 9.93475C5.95661 9.9755 5.90833 10.0078 5.85518 10.0299C5.80203 10.0519 5.74505 10.0633 5.6875 10.0633C5.62996 10.0633 5.57298 10.0519 5.51982 10.0299C5.46667 10.0078 5.41839 9.9755 5.37775 9.93475L2.31525 6.87225C2.2331 6.7901 2.18695 6.67868 2.18695 6.5625C2.18695 6.44632 2.2331 6.3349 2.31525 6.25275C2.3974 6.1706 2.50882 6.12445 2.625 6.12445C2.74118 6.12445 2.8526 6.1706 2.93475 6.25275L5.6875 9.00638L11.5028 3.19025C11.5434 3.14951 11.5917 3.11719 11.6448 3.09513C11.698 3.07307 11.755 3.06172 11.8125 3.06172C11.87 3.06172 11.927 3.07307 11.9802 3.09513C12.0333 3.11719 12.0816 3.14951 12.1223 3.19025Z"></path>
                    </svg>{" "}
                    Transparency
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <path d="M12.1223 3.19025C12.163 3.23089 12.1953 3.27917 12.2174 3.33232C12.2394 3.38548 12.2508 3.44246 12.2508 3.5C12.2508 3.55755 12.2394 3.61453 12.2174 3.66768C12.1953 3.72084 12.163 3.76911 12.1223 3.80975L5.99725 9.93475C5.95661 9.9755 5.90833 10.0078 5.85518 10.0299C5.80203 10.0519 5.74505 10.0633 5.6875 10.0633C5.62996 10.0633 5.57298 10.0519 5.51982 10.0299C5.46667 10.0078 5.41839 9.9755 5.37775 9.93475L2.31525 6.87225C2.2331 6.7901 2.18695 6.67868 2.18695 6.5625C2.18695 6.44632 2.2331 6.3349 2.31525 6.25275C2.3974 6.1706 2.50882 6.12445 2.625 6.12445C2.74118 6.12445 2.8526 6.1706 2.93475 6.25275L5.6875 9.00638L11.5028 3.19025C11.5434 3.14951 11.5917 3.11719 11.6448 3.09513C11.698 3.07307 11.755 3.06172 11.8125 3.06172C11.87 3.06172 11.927 3.07307 11.9802 3.09513C12.0333 3.11719 12.0816 3.14951 12.1223 3.19025Z"></path>
                    </svg>{" "}
                    Comprehensive Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="mission-img">
              <img src="assets/img/whychooseindenta.png" alt="" />
            </div>
          </div>
          {/* <div className="col-xl-5 d-flex align-items-end">
            <div className="garph-content">
              <div className="graph-chart">
                <ResponsiveContainer width="100%" height={450}>
                  <BarChart
                    width={700}
                    height={350}
                    data={data}
                  //   margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="percentage1" fill="#789FC0" name="Consulting Rate">
                      <LabelList dataKey="percentage1" position="top" />
                    </Bar>
                    <Bar dataKey="percentage2" fill="#324662" name="Consulting percentage" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
