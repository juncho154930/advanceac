import Axios from 'axios';

const RESOURCE_NAME = '/todo';

export default {
  getAll() {
    return Axios.get(RESOURCE_NAME);
  },
};
