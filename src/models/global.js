export default {
  namespace: 'global',
  state: {
    userInfo: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname == '/') {
          dispatch({ type: 'getData' });
        }
      });
    },
  },
  effects: {
    *getData({ payload }, { put, call }) {
      yield put({
        type: 'changeUserInfo',
        payload: { id: 1, name: 'qsb' },
      });
    },
  },
  reducers: {
    changeUserInfo(state, { payload }) {
      state.userInfo = payload;
    },
  },
};
