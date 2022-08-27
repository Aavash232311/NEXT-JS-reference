import SearchAppBar from "./components/Nav";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from "react";


export default function Restaurant() {

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log("Sub")
    }

    const browseButton = {
        border: "1px solid black",
        marginRight: "5px",
        height: "35px",
        borderRadius: "5px",
        width: "60px"
    }

    const coverPhoto = React.useRef(null);
    const Photo = React.useRef(null);

    const coverName = React.useRef(null);
    const profileName = React.useRef(null);

    const imagePreviewInput = (event, refs, name) => {
        let dom = event.currentTarget;
        refs.current.src = URL.createObjectURL(dom.files[0]);
        name.current.value = dom.files[0].name;

    }

    return (
        <div>
            <SearchAppBar/> <br/>
            <center>
                <div className={styles.form_frame}>
                    <form onSubmit={handleSubmit} style={{height: "100%"}} className="shadow p-3 mb-5 bg-white rounded">
                        <br/>
                        <h5>
                            Grow your restaurant
                        </h5> <br/>
                        <div className={styles.add_restaurant_trim_width}>
                            <input placeholder="restaurant name" type="text" className="form-control"/> <br/>
                            <input placeholder="restaurant contact number" className="form-control" type="text"/> <br/>
                            <input type="text" placeholder="restaurant slogan" className="form-control"/> <br/>
                            <input type="text" placeholder="restaurant address" className="form-control"/> <br/>
                            <input type="text" placeholder="restaurant type" className="form-control"/> <br/>
                            <span>restaurant logo</span>
                            <hr/>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label htmlFor="profileImage">
                                        <div style={browseButton}>Browse</div>
                                    </label>
                                </div>
                                <input ref={coverName} disabled type="text" name="temp1" className="form-control" placeholder=""
                                       aria-label=""
                                       aria-describedby="basic-addon1"/>
                            </div>
                            <hr style={{visibility: "hidden"}}/>
                            <div className="card" style={{width: "100%", height: "250px", overflow: "auto"}}>
                                <img ref={Photo} src="" alt=""/>
                            </div>
                            <hr style={{visibility: "hidden"}}/>
                            <span>restaurant cover photo</span>
                            <hr/>
                            <div style={{display: "none"}}>
                                <input accept="image/*" onInput={(ev) => {
                                    imagePreviewInput(ev, Photo, coverName)
                                }} id="profileImage" type="file" name="profileImage"/>
                                <input accept="image/*" onInput={(ev) => {
                                    imagePreviewInput(ev, coverPhoto, profileName)
                                }} id="coverImage" type="file" name="coverImage"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label htmlFor="coverImage">
                                        <div style={browseButton}>Browse</div>
                                    </label>
                                </div>
                                <input ref={profileName} name="temp2" disabled type="text" className="form-control" placeholder=""
                                       aria-label=""
                                       aria-describedby="basic-addon1"/>
                            </div>
                            <hr style={{visibility: "hidden"}}/>
                            <div className="card" style={{width: "100%", height: "250px", overflow: "auto"}}>
                                <img ref={coverPhoto} src="" alt=""/>
                            </div>
                            <hr style={{visibility: "hidden"}}/>
                            <span>Active delivery time </span> <br/> <br/>
                            <table className="table">
                                <tbody>
                                <tr>
                                    <th>Sunday</th>
                                    <th>
                                        <TextField
                                            id="sunday_from"
                                            label="from"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                        <TextField
                                            id="sunday_to"
                                            label="to"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>Monday</th>
                                    <th>
                                        <TextField
                                            id="monday_from"
                                            label="from"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                        <TextField
                                            id="monday_to"
                                            label="to"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>Tuesday</th>
                                    <th>
                                        <TextField
                                            id="tuesday_from"
                                            label="from"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                        <TextField
                                            id="tuesday_to"
                                            label="to"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>Wednesday</th>
                                    <th>
                                        <TextField
                                            id="wednesday_from"
                                            label="from"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                        <TextField
                                            id="wednesday_to"
                                            label="to"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>Thursday</th>
                                    <th>
                                        <TextField
                                            id="thursday_from"
                                            label="from"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                        <TextField
                                            id="thursday_to"
                                            label="to"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>Friday</th>
                                    <th>
                                        <TextField
                                            id="friday_from"
                                            label="from"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                        <TextField
                                            id="friday_to"
                                            label="to"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>Saturday</th>
                                    <th>
                                        <TextField
                                            id="saturday_from"
                                            label="from"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                        <TextField
                                            id="satudrday_to"
                                            label="to"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            sx={{width: 150}}
                                        />
                                    </th>
                                </tr>
                                </tbody>
                            </table>
                            <br/>
                            <Button type="submit" sx={{width: "100%"}} variant="outlined">Save</Button>
                        </div>
                    </form>
                </div>
            </center>
        </div>
    )
}