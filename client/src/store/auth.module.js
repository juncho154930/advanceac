import ApiService from "@/common/api.service";
import {
  SET_ERROR
} from "./mutations.type";
import {
	REGISTER
} from "./actions.type";

const state = {
  errors: null,
}

const actions = {
	[REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  }
}

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  }
};

export default {
  state,
	actions,
  mutations
};