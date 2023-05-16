

export const initialState = {  //원본 초기값

    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: 'kim',
            },
            content: 'first',
            Images: [{
                src: 'http://gimg.gilbut.co.kr/BK001958/rn_view_BN001958.jpg',
            }, {
                src: 'http://gimg.gilbut.co.kr/BK001958/rn_view_BN001958.jpg',
            }],
            Comments: [{

            }]
        }
    ],
    imagePaths: [

    ],
    postAdded:false,

};

const ADD_POST = 'ADD_POST';
export const addPost = {
    type : ADD_POST,
}

const dummyPost = {
    id : 2,
    content : 'dummy',
    User:{
        id : 1,
        nickname : 'zero',
    },
    Images:[],
    Comments:[],

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],    //dummyPost 제일 앞에 추가해야함(순서중요) 게시글쓰자마자 제일 위에   
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer