const filterInVideos = (data, property,value) => {
    return data.filter((obj) => obj[property] === value);
  };


export default filterInVideos