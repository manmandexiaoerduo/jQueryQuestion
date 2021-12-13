window.jQuery = function (selector) {
    const elements = document.querySelectorAll(selector);
    //api 可以操作elements
    return {
        //闭包：函数访问外部变量
        addClass(calssName) {
            console.log(elements)
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.classList.add(calssName)
            }
            console.log(this, 'this');
            console.log(api, 'api');
            console.log(this === api, 'this===api')
            return api
        }
    }
}

// Obj.fn(p1); 函数里的this就是obj
// obj.fn.call(obj,p1)