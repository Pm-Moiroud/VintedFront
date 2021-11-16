const Preview = ({ file, setFile }) => {
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setFile();
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    preview: {
      marginTop: 30,
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    image: { maxWidth: "25%", maxHeight: 200 },
    delete: {
      cursor: "pointer",
      marginLeft: "100px",
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
        <>
          <label for="files" class="btn-add-file">
            Clique ici pour ajouter une photo
          </label>
          <input
            id="files"
            style={{ display: "none" }}
            accept="image/*"
            type="file"
            onChange={imageChange}
          />
        </>
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
