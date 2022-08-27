import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import SearchAppBar from "./components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles.first_stage_site_wrapper}>
                <SearchAppBar/>
                <div>
                    <div className={styles.slogan}>
                        <center>
          <span className={styles.slogan_text}>
            Food portal on your screen
          </span>
                            <div className={styles.search}>
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <input placeholder="search restaurants" type="text" className="form-control"/>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            <hr style={{visibility: "hidden"}}/>
            <div className={styles.second_block}>]
                <center>
                    <div className={styles.add_restaurant}><br/>
                        <center>
                            <h5>
                                Highlights
                            </h5>
                        </center>
                    </div>
                </center>
            </div>
        </div>
    );
}
