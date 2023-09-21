const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="res-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
