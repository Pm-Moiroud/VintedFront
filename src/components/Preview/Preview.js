import "./preview.css";

const Preview = ({ file, setFile }) => {
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setFile();
  };
  // Just some styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    preview: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
    },
    image: { maxWidth: "25%", maxHeight: 200 },
    delete: {
      cursor: "pointer",
      color: "white",
      fontSize: "20px",
      border: "none",
      width: "20px",
      maxHeight: "20px",
      position: "absolute",
      background: "black",
      objectFit: "content",
    },
  };
  return (
    <>
      {!file ? (
        <input accept="image/*" type="file" onChange={imageChange} />
      ) : (
        <div style={styles.preview}>
          <img
            src={URL.createObjectURL(file)}
            style={styles.image}
            alt="Thumb"
          />
          <button onClick={removeSelectedImage} style={styles.delete}>
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Preview;
