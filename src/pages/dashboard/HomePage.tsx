import { TextField } from "@mui/material";


const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="txt-wrapper">
          <span className="span-text">Let's Practice English</span>
          <p className="p-text">
            Tap voice icon, listen, type sentence, submit to check result.
          </p>
        </div>
        <div className="form-group">
          <form>
            <label htmlFor="name">
              <i className="fa fa-volume-up"></i>
            </label>
            <TextField
              id="name"
              className="inp"
              placeholder="Kindly type out what you are currently listening to."
              type="text"
              name="name"
              autoComplete="off"
            />
            <div className="btn-wrapper">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="login-wrapper">
          <p className="p-login">
            If you encounter any problems on the website, please{" "}
            <a href="#">contact</a>
          </p>
        </div>
      </div>

      <div className="result-container">
        <span className="div-orange">Final Result:</span>
        <p className="result">
          The weather can be unpredictable and impact daily life.
        </p>
      </div>
    </>
  );
};

export default HomePage;
