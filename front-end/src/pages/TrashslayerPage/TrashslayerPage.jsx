import "./TrashslayerPage.css";
import { Navbar } from "../../components/Navbar";
import Button from '@mui/material/Button';

import { TRASHSLAYER_CONTENT } from "../../constants";

const { background, name, desc, downloadLink, tutorialLink } = TRASHSLAYER_CONTENT;

export const TrashslayerPage = () => {
  return (
    <div className="trashslayer-page">
        <Navbar />
        <div className="trashslayer-title">
          <h1 className="trashslayer-name">{name}</h1>
          <p>{desc}</p>
          <div className="trashslayer-button">
            <Button variant="contained" color="success" onClick={() => window.open(downloadLink, "_blank")}>Download</Button>
            <Button variant="outlined" color="success" onClick={() => window.open(tutorialLink, "_blank")}>Tutorial</Button>
          </div> 
        </div>
        <div className="trashslayer-blur"></div>
        <img className="trashslayer-background" src={background} alt="" />
    </div>
  )
}
