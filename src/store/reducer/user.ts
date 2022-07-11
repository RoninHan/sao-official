const initialState = {
    name: '123',  //示例
};

// 2.创建reducer，💥 不解构action
export default function userReducer(state = initialState, action: any) {
    switch (action.type) {
        default:
        return state;
    }
}