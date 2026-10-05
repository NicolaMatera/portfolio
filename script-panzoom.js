(function() {
    const modals = document.querySelectorAll('dialog.modal');

    modals.forEach(modal => {
        const elem = modal.querySelector('.zoomable-img');
        const wrapper = modal.querySelector('.zoom-wrapper');
        const btnZoomIn = modal.querySelector('.zoom-in-btn');
        const btnReset = modal.querySelector('.zoom-reset-btn');

        if (elem && wrapper && btnZoomIn && btnReset) {
            const panzoom = Panzoom(elem, {
                maxScale: 5,
                minScale: 1,
                contain: 'outside',
                step: 0.4
            });

            wrapper.addEventListener('wheel', panzoom.zoomWithWheel);

            btnZoomIn.addEventListener('click', () => {
                panzoom.zoomIn();
            });

            btnReset.addEventListener('click', () => {
                panzoom.reset();
            });

            modal.addEventListener('close', () => {
                setTimeout(() => {
                    panzoom.reset();
                }, 200);
            });
        }
    });
})();