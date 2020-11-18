function fun1(callback) {
    console.log('func1 called');
    setTimeout(callback,4);
}

function fun2() {
    console.log('func2 called');
}

function func3() {
    console.log('func3 called');
}

function func4(callback) {
    console.log('func4 called');
    setTimeout(callback,2);
}

function func5() {
    console.log('func5 called');
}

function func6() {
    console.log('func6 called');
}

fun1( () => {
    func3();
    func4( () => {
        func6();
    });
    func5(); 
});

fun2();