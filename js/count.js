export function animateCounter(target, duration = 2000, onUpdate) {
    let start = 0;
    let startTime = performance.now();

    function updateCounter(currentTime) {
        let elapsed = currentTime - startTime;
        let progress = elapsed / duration;

        if (progress > 1) progress = 1;

        let value = Math.round(target * (1 - Math.pow(1 - progress, 3)));
        
        onUpdate(value);

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}
