const AddSongForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="Type in song title..."
          name="title"
          required
        />
        <input
          type="text"
          placeholder="Type in artist name..."
          name="artist"
          required
        />

        <select name="genre">
          <option value="none">-- Genre --</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Blues">Blues</option>
          <option value="Jazz">Jazz</option>
          <option value="Hiphop">Hiphop</option>
        </select>

        <select name="rating">
          <option value="none">-- Rate song --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button>Add song</button>
      </form>
    </div>
  );
};

export default AddSongForm;
