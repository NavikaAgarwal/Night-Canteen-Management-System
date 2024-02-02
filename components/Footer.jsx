import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES!<br />FRESHLY PREPARED<br />
            TASTY DISHES<br />
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CATCH US AT</h1>
          <p className={styles.text}>
            Central Dinning Facility Building,
            <br /> IIT Indore,
            <br /> Khandwa Road, Simrol,Indore
            <br /> (602) 867-1010
          </p>
          {/* <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p> */}
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY TO SATURDAY
            <br /> 11:00Pm – 2:00AM
          </p>
          {/* <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
