import SearchAppBar from "../components/Nav";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.css";
import {useRouter} from 'next/router';
import React from 'react';

export default function Verify() {
    const router = useRouter();
    const pid = router.query.email;

    React.useEffect(() => {
        window.addEventListener('keydown', window.send =  function (ev){
            if (ev.keyCode === 13){

            }
        });

        return () => {
            window.removeEventListener('keydown', window.send);
        }
    }, []);

    return (
        <div>
            <SearchAppBar/>
            <br/> <br/>
            <center>
                <h5>Enter code that is sent to your email {pid}</h5> <br/>
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </center>
        </div>
    )
}