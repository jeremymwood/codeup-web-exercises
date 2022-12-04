`use strict`;

// while (/*condition*/) {
//     // body
// }

// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536


function multiplyI(start,factor){
    let i = start;
    while (i <= factor){
        console.log(i);
        i*=2;
    }
}

multiplyI(2,100000000);