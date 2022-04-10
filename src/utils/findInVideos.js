
const findInVideos = (data, property,value) => {
    return data.find((obj) => obj[property] === value);
  };


export default findInVideos