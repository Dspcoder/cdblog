import { React, useState, useEffect } from 'react';
import './index.scss';
import PubSub from 'pubsub-js';

const Sx = () => {
    const [arr, setarr] = useState([]);

    useEffect(() => {
        PubSub.subscribe('lbUrl', (_, data) => {
            setarr({ arr: data });
        });
    }, []);
    let son = document.getElementsByClassName('son')[0];
    let ul = document.getElementsByClassName('ul')[0];
    let father = document.getElementsByClassName('father')[0];
    let li = document.getElementsByClassName('li');
    let left = document.getElementsByClassName('left')[0];
    let right = document.getElementsByClassName('right')[0];

    son.style.width = 600 * arr.length + 'px';

    for (let i = 0; i < arr.length; i++) {
        son.innerHTML += `<img src="${arr[i]}" alt="">`;
        ul.innerHTML += `<span class="li">${i}</span>`;
    }

    function add() {
        son.style.left = i * -father.offsetWidth + 'px';
        //全部的小圆点删除类名
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove('big');
        }
        li[i].classList.add('big');
    }

    let i = 0; //图片和小圆点的下标

    let stop = setInterval(move, 1000);

    function move() {
        if (i === li.length) {
            i = 0;
        }
        // son.style.left=i*-600+"px";
        add();

        i++;
    }

    //3.鼠标移入father盒子，停止自动轮播
    father.onmouseenter = function () {
        clearInterval(stop);
    };

    father.onmouseleave = function () {
        stop = setInterval(move, 1000);
    };

    //-----------按钮点击事件----------------
    right.onclick = function () {
        if (i === li.length) {
            i = 0;
        }
        // son.style.left=i*-600+"px";
        add();

        i++;
        console.log(i);
    };

    left.onclick = function () {
        i--;
        if (i === -1) {
            i = li.length - 1;
        }
        // son.style.left=i*-600+"px";
        add();
        console.log(i);
    };

    //7.小圆点
    // for (let x = 0; x < li.length; x++) {

    //     li[x].onclick = function () {
    //         i = li[x].innerText * 1;
    //         add();

    //     }

    // }
    PubSub.subscribe('lbUrl', (_, data) => {
        this.setState({ arr2: data });
    });
    return (
        <div class='father'>
            <div class='son'></div>
            <div class='left'>&lt;</div>
            <div class='right'>&gt;</div>
            <div class='ul'></div>
        </div>
    );
};

export default Sx;
