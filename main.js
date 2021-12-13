const api =jQuery('#test') //不返回元素，返回api对象
api.addClass('red')
   .addClass('blue') //遍历所有刚才获取的元素，增加red
   .addClass('green')