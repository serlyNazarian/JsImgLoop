function serrrffhhg(a, b) {
    let c;
    if (a == 1 && b == 2 || a == 2 && b == 1) {
        c = document.first.src;
        document.first.src = document.second.src;
        document.second.src = c;
    }
    if (a == 2 && b == 3 || a == 3 && b == 2) {
        c = document.second.src;
        document.second.src = document.third.src;
        document.third.src = c;
    }
    if (a == 1 && b == 3 || a == 3 && b == 1) {
        c = document.first.src;
        document.first.src = document.third.src;
        document.third.src = c;
    }
}