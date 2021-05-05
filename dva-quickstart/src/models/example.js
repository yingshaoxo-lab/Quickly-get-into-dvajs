
export default {

  namespace: 'example',

  state: {
    number: 7
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *change({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'do' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    do(state, action) {
      state.number += 1
      return { ...state, ...action.payload };
    },
  },

};
