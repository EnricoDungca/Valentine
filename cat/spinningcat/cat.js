(function () {

    // --- AUDIO ---
    var audio = document.createElement('audio');
    audio.src = 'https://raw.githubusercontent.com/orlyjamie/spinningcat/main/cat.mp3';
    audio.loop = true;
    audio.volume = 1;
    document.body.appendChild(audio);

    // Start audio on first user interaction
    function enableAudio() {
        audio.play().catch(() => {});
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('keydown', enableAudio);
    }
    document.addEventListener('click', enableAudio);
    document.addEventListener('keydown', enableAudio);

    // --- NEON OVERLAY ---
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#00ff0000';
    overlay.style.zIndex = '9998';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none'; 
    overlay.style.transition = 'opacity 0.2s';
    document.body.appendChild(overlay);

    // --- CAT SPAWNER ---
    function spawnCatGif() {
        var gif = document.createElement('img');
        gif.src = 'https://raw.githubusercontent.com/orlyjamie/spinningcat/main/cat.gif';
        gif.style.position = 'fixed';
        gif.style.zIndex = '9999';
        gif.style.height = '15rem';
        gif.style.width = '15rem';
        gif.style.top = Math.random() * (window.innerHeight - 150) + 'px';
        gif.style.left = Math.random() * (window.innerWidth - 150) + 'px';
        gif.style.animation = 'spin 7s linear infinite';
        document.body.appendChild(gif);

        setTimeout(() => gif.remove(), 10000);
    }

    setInterval(spawnCatGif, 500);

    // --- FLASH ---
    function flashScreen() {
        overlay.style.opacity = '1';
        setTimeout(() => overlay.style.opacity = '0', 200);
    }

    // --- ANIMATIONS ---
    setTimeout(() => {
        var style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes spin-all {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            body * {
                animation: spin-all 5s linear infinite;
            }
        `;
        document.head.appendChild(style);

        setInterval(flashScreen, 2000);
    }, 3500);

})();
