function createStore() {
    let state;

    function dispatch(action) {
        state = reducer(state, action);
        render();
    };

    function getState() {
        return state;
    }

    return { dispatch, getState };
}

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return { count: state.count + 1 };

        case 'DECREASE_COUNT':
            return { count: state.count - 1 };

        case 'RESET_COUNT':
            return { count: state.count = 0 };

        default:
            return state;
    }
};


function render() {
    let container = document.getElementById('container');
    container.textContent = store.getState().count;
};

let store = createStore(reducer)
store.dispatch({ type: '@@INIT' })
let button = document.getElementById('button');

button.addEventListener('click', function() {
    setInterval(increaseByOne, 1000);
})

function increaseByOne() {
    store.dispatch({ type: 'INCREASE_COUNT' })
}

button2.addEventListener('click', function() {
    store.dispatch({ type: 'DECREASE_COUNT' });
})

button3.addEventListener('click', function() {
    store.dispatch({ type: 'RESET_COUNT' });
})