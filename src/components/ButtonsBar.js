const ButtonsBar = (props) => {
  return (
    <div className="buttonsbar">
      <label>
        Sort by:
        <select name="sort" onChange={props.handleSort}>
          <option value="none">Oldest first</option>
          <option value="latest">Newest first</option>
          <option value="song-az">Song title A-Z</option>
          <option value="song-za">Song title Z-A</option>
          <option value="artist-az">Artist A-Z</option>
          <option value="artist-za">Artist Z-A</option>
          <option value="rating-highlow">Rating high « low</option>
          <option value="rating-lowhigh">Rating low » high</option>
        </select>
      </label>
      <div className="filters">
        <label>
          Only show genre:
          <input
            type="checkbox"
            onChange={props.handleFilter}
            value="Pop"
          ></input>
          Pop
        </label>
        <label>
          <input
            type="checkbox"
            onChange={props.handleFilter}
            value="Rock"
          ></input>
          Rock
        </label>
        <label>
          <input
            type="checkbox"
            onChange={props.handleFilter}
            value="Blues"
          ></input>
          Blues
        </label>
        <label>
          <input
            type="checkbox"
            onChange={props.handleFilter}
            value="Jazz"
          ></input>
          Jazz
        </label>
        <label>
          <input
            type="checkbox"
            onChange={props.handleFilter}
            value="Hiphop"
          ></input>
          Hiphop
        </label>
      </div>
      <button onClick={props.changeRoute}>About me</button>
    </div>
  );
};

export default ButtonsBar;
