import styles from '../styles/Home.module.css';
import { Rating } from "@mui/material";
import TypewriterComponent from "typewriter-effect";

function Home() {
    return (
        <>
            <div className={styles.mainText}>
                <h1>PCO Dark Mode:</h1>
                <div className={styles.space}></div>
                <h1>
                    <TypewriterComponent
                        options={{
                            strings: [
                                "The ultimate way to experience PCO is in dark mode.",
                                "Because your eyes deserve a break.",
                                "Dark mode for the people, by the people.",
                                "Because dark mode is the future."
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50
                        }}
                    />
                </h1>
            </div>

            <div className={styles.rating}>
                <Rating size={"large"} name="read-only" value={5} readOnly />
            </div>
        </>
    );
}

export default Home;
