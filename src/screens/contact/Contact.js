import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Contact() {

  return (
    <div className="contact-container">
      <div className="heading-container">
        <div className="heading">Contact</div>
        <div className="sub-heading">__Get in touch__</div>
      </div>

      <div className="form-section">
        <form className="contact-form">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField className="inputFields" label="Email" variant="outlined" />
          <TextField
            className="form-input"
            label="Subject"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            className="form-textarea"
            label="Message"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            required
            color="success"
          />
          <Button
           variant="contained"
          //  type='submit'
          >
            Primary
          </Button>
        </form>
      </div>
    </div>
  );
}
