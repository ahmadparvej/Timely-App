import {
  AtSignIcon,
  CalendarIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  InfoIcon,
  RepeatClockIcon,
  SettingsIcon,
  SunIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";

const HomePart1 = () => {
  return (
    <div>
      <div className={styles.part1}>
        <div className={styles.part1_left}>
          <div className={styles.part1_left1}>
            <h1>Timely </h1>
            <span> time tracking software</span>
          </div>
          <div className={styles.part1_left2}>
            <h2>Say hello to</h2>
            <span>automatic time tracking</span>
          </div>
          <div className={styles.part1_leftp1}>
            <p>
              Timely automates company time tracking, so you and your team can
              focus on the work that matters.
            </p>
          </div>
          <div className={styles.part1_left_input}>
            <input type="email" placeholder="Enter your work email" />{" "}
            <input type="submit" value={"Start my free trial"} />
          </div>
          <div className={styles.flexmain}>
            <div className={styles.flex}>
              <img
                width="13px"
                height="13px"
                src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57e4188a2912_Icon.svg"
                alt=""
              />
              <p className={styles.part1_leftp2}>
                Trusted by 5000+ businesses globally
              </p>
            </div>
            <div className={styles.flex}>
              <img
                width="17px"
                height="13px"
                src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57c62c8a28e4_thumb-down.svg"
                alt=""
              />
              <p className={styles.part1_leftp2}>
                Free 14-day trial--No credit cards needed
              </p>
            </div>
            <div className={styles.flex}>
              <img
                width="20px"
                height="13px"
                src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57f43e8a2916_light-bulb.svg"
                alt=""
              />
              <p className={styles.part1_leftp2}>
                Reduce time tracking admin by 75%
              </p>
            </div>
          </div>
        </div>
        <div className="part1-right">
          <img
            width={"510px"}
            height={"540px"}
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.part2}>
        <div className={styles.part21}>
          <img
            width="55px"
            height="54px"
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39954ae48af5bf_brainp.svg"
            alt=""
          />
          <h3>Automate your time tracking</h3>
        </div>
        <div className={styles.part22}>
          <p>
            Forget timers, note taking and manual input—Timely can track time
            spent in every web and desktop app automatically for you. Get a
            precise daily record of all the time you spend in documents,
            meetings, emails, websites and video calls with zero effort.
            <span>It’s all 100% private to you.</span>
          </p>
          <Link to="/">How it all works</Link>
        </div>
        <div className={styles.part23}>
          <img
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951ee48af5c4_arr.svg"
            alt=""
          />
        </div>
        <div className={styles.part24}>
          <div>
            <TimeIcon boxSize={6} color={"#722FD3"} />
            <h4>Track time</h4>
            <p>Get the complete picture of your work day with zero effort.</p>
            <Link to="/">Automate time tracking</Link>
          </div>
          <div>
            <CalendarIcon boxSize={6} color={"#722FD3"} />
            <h4>Track projects</h4>
            <p>Get the complete picture of your work day with zero effort.</p>
            <Link to="/">Run smarter projects</Link>
          </div>
          <div>
            <InfoIcon boxSize={6} color={"#722FD3"} />
            <h4>Track teams</h4>
            <p>Get the complete picture of your work day with zero effort.</p>
            <Link to="/">Lead happier teams</Link>
          </div>
        </div>
        <div className={styles.part25}>
          <div className={styles.part251}>
            <img src={img1} alt="" />
            <div className={styles.part252}>
              <h3>Save hours on time tracking</h3>
              <p>
                Timely’s simple UI and automatic time tracking have helped other
                companies reduce timesheet admin by 75%. With flexible options
                for logging time, your team can manage timesheets in the way
                that makes most sense to them.
              </p>
            </div>
          </div>
          <div className={styles.part251}>
            <div className={styles.part253}>
              <h3>Capture every billable detail</h3>
              <p>
                By capturing every second of your work day, Timely stops
                billable time from falling through the cracks. Report and
                invoice clients transparently, and use accurate company time
                data to improve project rates and budgets.
              </p>
            </div>
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ed7f0de764464efc1bda_Frame%201340.png"
              alt=""
            />
          </div>
          <div className={styles.part251}>
            <img src={img2} alt="" />
            <div className={styles.part254}>
              <h3>Empower your people</h3>
              <p>
                Timely’s gorgeous design, intuitive controls and fierce
                protection of individual privacy make it a time tracking tool
                that people actually enjoy using. Empower your team to manage
                their own productivity, and stay on top of performance,
                wellbeing and workload without compromising anyone’s trust
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.connectyourstack}>
          <div className={styles.connectyourstack2}>
            <div className={styles.connectyourstack3}>
              <div className={styles.connectyourstack4}>
                <p>kiran</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles.trusted}>
          <div className={styles.trusted1}>
            <div className={styles.trusted12}>
              <SunIcon boxSize={55} />
              <h3>Trusted by 5000+ businesses globally</h3>
              <p>
                Whether you have hundreds of colleagues or none at all, with
                Timely size doesn’t matter. We help businesses of all sizes
                access the benefits of automatic time tracking, with flexible
                subscription plans that scale to meet your needs.
              </p>
            </div>
            <div className={styles.trusted2}>
              <div className={styles.trusted21}>
                <SunIcon />
                <Link to="/">Specialist departments in corporates</Link>
              </div>
              <div className={styles.trusted21}>
                <SettingsIcon />
                <Link to="/">International firms and agency groups</Link>
              </div>
              <div className={styles.trusted21}>
                <ExternalLinkIcon />
                <Link to="/">Small businesses and startups</Link>
              </div>
              <div className={styles.trusted21}>
                <AtSignIcon />
                <Link to="/">Consultants and freelancers</Link>
              </div>
              <div className={styles.trusted21}>
                <RepeatClockIcon />
                <Link to="/">Inter-organizational partnership</Link>
              </div>
            </div>
            <div className={styles.trusted3main}>
              <div className={styles.trusted3}>
                <div className={styles.trusted31}>
                  <img
                    src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39956f438af4f5_global.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.trusted32main}>
                  <div className={styles.trusted32}>
                    <h3>
                      “Timely is helping our organization transform time
                      tracking from a chore to a simple review process.”
                    </h3>
                    <img
                      src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39952ab78af332_grant-thornton-vector-logo.svg"
                      alt=""
                    />
                    <p>
                      See how <strong>Grant Thornton </strong> leverages
                      Timely’s automation to increase time tracking accuracy and
                      efficiency across its Legal and Finance, Tax and
                      Regulatory, and IT departments.
                    </p>
                    <Link to="/">Grant Thornton case study</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.awards}>
          <div className={styles.awards1}>
            <div>
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b36657dfae2feee178fee9_TimeTracking_MomentumLeader_Leader.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader.svg"
                alt=""
              />
            </div>
            <div>
              <img
                className={styles.awardsbigimg}
                styles="width:150px;"
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995b0a08af4da_loveus.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3668136276388dc2815e8_TimeTracking_HighPerformer_Mid-Market_HighPerformer.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3668136276388dc2815e8_TimeTracking_HighPerformer_Mid-Market_HighPerformer.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.try}>
          <div className={styles.try1}>
            <h2>Try <span>Timely</span> for free!</h2>
            <p>
              Discover the power of Timely's automated time tracking with a
              14-day free trial
            </p>
            <div className={styles.part1_left_input}>
              <input type="email" placeholder="Enter your work email" />{" "}
              <input type="submit" value={"Start my free trial"} />
            </div>
            <div className={styles.try2}>
              <div className={styles.flex}>
                <img
                  width="13px"
                  height="13px"
                  src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57e4188a2912_Icon.svg"
                  alt=""
                />
                <p className={styles.part1_leftp2}>
                  Trusted by 5000+ businesses globally
                </p>
              </div>
              <div className={styles.flex}>
                <img
                  width="17px"
                  height="13px"
                  src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57c62c8a28e4_thumb-down.svg"
                  alt=""
                />
                <p className={styles.part1_leftp2}>
                  Free 14-day trial--No credit cards needed
                </p>
              </div>
              <div className={styles.flex}>
                <img
                  width="20px"
                  height="13px"
                  src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57f43e8a2916_light-bulb.svg"
                  alt=""
                />
                <p className={styles.part1_leftp2}>
                  Reduce time tracking admin by 75%
                </p>
              </div>
            </div>
          </div>
          <div className={styles.try3}>
              <p>20 people or more? </p>
              <Link to="/"> Get a personalized introduction to Timely</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
