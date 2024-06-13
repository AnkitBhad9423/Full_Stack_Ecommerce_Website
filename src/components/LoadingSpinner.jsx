const LoadingSpinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center spinner">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        ></div>
      </div>
      <center>
        <span className="visuallly-hidden">Loading...</span>
      </center>
    </>
  );
};

export default LoadingSpinner;
