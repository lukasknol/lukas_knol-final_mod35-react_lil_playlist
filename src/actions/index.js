export const add_song = (song) => {
  return {
    type: 'ADD_SONG',
    payload: song,
  };
};

export const delete_song = (id) => {
  return {
    type: 'DELETE_SONG',
    payload: id,
  };
};

export const sort_songs = (value) => {
  return {
    type: 'SORT_SONGS',
    payload: value,
  };
};

export const filter_songs = (value, checked) => {
  return {
    type: 'FILTER_SONGS',
    payload: value,
    checked: checked,
  };
};

export const increment_id = () => {
  return {
    type: 'INCREMENT_ID',
    payload: 1,
  };
};

export const change_route = (value) => {
  return {
    type: 'CHANGE_ROUTE',
    payload: value,
  };
};
