window.onload = function () {
    //获取最外层容器
    const container = document.querySelector('.swiper-container')
    //获取轮播图容器
    const wrapper = document.querySelector('.swiper-wrapper')

    const bannerWidth = container.offsetWidth
    //开始的位置
    //开始时轮播图的位置
    let startLeft;
    let start;
    //触摸时的位置
    let touch;

    //移动时的位置
    let move;

    //移动的距离
    // let distance

    // 是否移动
    let isMove = false;

    //轮播图初始位置
    let left = -375;

    //当前轮播图下标
    let currentIndex = 1;

    let distance = bannerWidth / 3;
    container.addEventListener('touchstart', function (e) {
        //触摸时的位置
        if (isMove) return
        startLeft = wrapper.getBoundingClientRect().left
        start = touch = e.changedTouches[0].clientX
        // console.log(e.changedTouches[0].clientX)
        // start = touch
        wrapper.style.transition = `none`


    })

    container.addEventListener('touchmove', function (e) {
        if (isMove) return
        //移动时的位置
        move = e.changedTouches[0].clientX
        let distance = move - touch
        const position = wrapper.getBoundingClientRect().left

        wrapper.style.left = left + distance + 'px'

        // console.log(wrapper.offsetLeft)


        touch = move
        left = left + distance

        // if (wrapper.offsetLeft>= 0) {
        //     // wrapper.getBoundingClientRect().left = 0
        //     // wrapper.style.left=0
        //     return
        // }
    })

    container.addEventListener('touchend', function (e) {
        if (isMove) return
        // console.log(startLeft)
        //移动时的位置
        const end = e.changedTouches[0].clientX

        wrapper.style.transition = 'left 0.5s'
        isMove = true;
        setTimeout(() => {
            isMove = false;
            left = wrapper.getBoundingClientRect().left
            if (currentIndex === 0) {
                currentIndex = 8;
                wrapper.style.transition = 'none'
                wrapper.style.left = `${-currentIndex * bannerWidth}px`
            }
            if (currentIndex === 9) {
                currentIndex = 1;
                wrapper.style.transition = 'none'
                wrapper.style.left = `${-currentIndex * bannerWidth}px`
            }

        }, 500)
        if (Math.abs(end - start) > distance) {
            if ((end - start) > 0) {
                currentIndex--

            } else {
                currentIndex++
            }

        }
        wrapper.style.transition = 'left 0.5s'
        wrapper.style.left = `${-currentIndex * bannerWidth}px`
        console.log(currentIndex, 'currentIndex')
        console.log(wrapper.style.left)

        // console.log(container.offsetWidth)
        // console.log(Math.abs(end - start))

    })

}