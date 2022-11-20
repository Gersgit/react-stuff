import { Model, Button } from "./Ui/Ui";

const ErrorModel = ({ errorModelState }) => {
  return (
    <Model>
      <div className="backdrop">
        <div className="modal">
          <div className="header">
            <h2>Invalid Input</h2>
          </div>
          <div className="content">
            <p>
              Please enter a valid name and age (
              {errorModelState.openErrorModel.msg})
            </p>
          </div>
          <div className="actions">
            <Button
              onClick={() =>
                errorModelState.setOpenErrorModel({ open: false, msg: "" })
              }
            >
              Okay
            </Button>
          </div>
        </div>
      </div>
    </Model>
  );
};

export default ErrorModel;
