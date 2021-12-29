import {rerenderEntireTree} from "../render";

let state = {
    dialogsPage: {
        dialogs: [{id: 1, name: 'Pastor J', avatar: 'https://slm-assets.secondlife.com/assets/3649954/lightbox/orange%20dragon.jpg?1306810228'},
            {id: 2, name: 'Joakin', avatar: 'https://www.thesun.co.uk/wp-content/uploads/2021/08/NINTCHDBPICT000675339240-e1629991954692.jpg'},
            {id: 3, name: 'Lautaro', avatar: 'https://besthqwallpapers.com/Uploads/18-10-2020/144256/thumb2-lautaro-martinez-2020-4k-internazionale-goal.jpg'},
            {id: 4, name: 'Marshall Bruce Mathers III', avatar: 'http://sun9-2.userapi.com/impf/8H3DA7uEYrr8aGXWqdW4ViDge53k6JGwUJGcPw/7kVvzHgqlp8.jpg?size=526x350&quality=96&sign=8a5d2e28988fba08449283070801574b&type=album'},
            {id: 5, name: 'Ansu Fati', avatar: 'https://static.toiimg.com/thumb/msid-85834469,width-1070,height-580,imgsize-39444,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'},
            {id: 6, name: 'Ekaterina', avatar: 'https://i.pinimg.com/474x/4d/25/73/4d2573613020f2d11b0f662a55a2c3a0.jpg'}],
        messages: [
            {id: 1, message: 'Hi', sender: 'Ekaterina'},
            {id: 2, message: 'How is your React-learning?', sender: 'Ekaterina'},
            {id: 3, message: 'Now I am doing homework of 34 lessom!', sender: 'Pastor J'},
            {id: 4, message: 'Oh, Cool you are doing well', sender: 'Ekaterina'},
            {id: 5, message: 'Thank you for your support. But I\'m still at the very beginning of my journey.', sender: 'Pastor J'},
            {id: 6, message: 'Okay, I\'ll meet you at the food court on Saturday', sender: 'Ekaterina'}],
        newMessageText: 'See you! ;-)',
        currentId: 7,
        currentUser: 'Pastor J'
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCounter: 88},
            {id: 2, message: 'How is your React-learning?', likeCounter: 18},
            {id: 3, message: "It's my first post!", likeCounter: 152},
            {id: 4, message: "Yo, Bro'z!", likeCounter: 202},
            {id: 5, message: "Yo, Bro'z!", likeCounter: 111}
        ],
        newPostText: 'Orange Dragon'
    },
    sideBar: {
        friends: [
            {name: 'Lautaro'},
            {name: 'Marshall Bruce Mathers III'},
            {name: 'Ekaterina'}
        ]

    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounter: 14,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export let addMessage = () => {
    let newMessage = {
        id: state.dialogsPage.currentId,
        message: state.dialogsPage.newMessageText    ,
        sender: 'Pastor J',
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.currentId++;
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export default state;