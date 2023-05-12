function sim() {
    alert("Você aceitou namorar comigo! :)");
    // redireciona para um URL apos aceitar
    location.href="https://www.youtube-nocookie.com/embed/izGwDsrQ1eQ?autoplay=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1";
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
