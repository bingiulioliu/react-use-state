import { useState } from "react";
import styles from "../languages.module.css";

function Paragraph ({
    pTitle = 'Paragraph Title',
    pParagraph = 'Paragraph Paragraph'
}) {
    return <>
        <div>
            <h2>{pTitle}</h2>
            <p>{pParagraph}</p>
        </div>
    </>
}

export default Paragraph