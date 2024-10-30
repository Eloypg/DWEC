function sumTo(n) {
    for(let i = 0; i < n; i++){
        return n + sumTo(n - 1);
    }
}

console.log(100);