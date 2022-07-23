import {
  CalendarIcon,
  CheckCircleIcon,
  InfoIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg"

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
        <div className={styles.connectyourstack}>
          <div className={styles.connectyourstack2}>
           
            <div className={styles.connectyourstack3}>
              <div className={styles.connectyourstack4}>
<p>kiran</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.connectyourstack}>
          <div>
            <div>
              <img src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/625c168b07e04cf345cd2b3d_tm-arrow-wh.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
