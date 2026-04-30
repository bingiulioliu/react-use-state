import { useState } from "react";
import styles from "../languages.module.css";

function Btn({
    buttonTitle = null,
    buttonContent = null
}) {
    const [open, setOpen] = useState(true);
    const btnClass = open ? 'btn-primary' : 'btn-secondary';

    return <>
        <button className={`btn ${btnClass}`}>{buttonTitle}</button>
    </>
    ;
}
export default Btn;
