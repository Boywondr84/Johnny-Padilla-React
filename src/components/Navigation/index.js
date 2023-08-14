function NavHeaders() {
    // Open Club Dates Modal
    document.addEventListener('DOMContentLoaded', () => {
        // Functions to open and close a modal
        function openModal($el) {
            $el.classList.add('is-active');
        }

        function closeModal($el) {
            $el.classList.remove('is-active');
        }

        function closeAllModals() {
            (document.querySelectorAll('.modal') || []).forEach(($modal) => {
                closeModal($modal);
            });
        }

        // Add a click event on buttons to open a specific modal
        (document.querySelectorAll('.club-modal-trigger') || []).forEach(($trigger) => {
            const modal = $trigger.dataset.target;
            const $target = document.getElementById(modal);

            $trigger.addEventListener('click', () => {
                openModal($target);
            });
        });

        // Add a click event on various child elements to close the parent modal
        (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
            const $target = $close.closest('.modal');

            $close.addEventListener('click', () => {
                closeModal($target);
            });
        });

        // Add a keyboard event to close all modals
        document.addEventListener('keydown', (event) => {
            const e = event || window.event;

            if (e.keyCode === 27) { // Escape key
                closeAllModals();
            }
        });
    });

    return (
                <div className="navigation">
                    <div className="nav-bar-item">
                        <ul><a href="#home">Home</a></ul>
                    </div>
                    <div className="nav-bar-item">
                        <ul><a href="#live">Live</a></ul>
                    </div>
                    <div className="nav-bar-item">
                        <ul><a href="#meet">Meet</a></ul>
                    </div>
                    <div className="nav-bar-item">
                        <a href="#listen">Listen</a>
                    </div>
                    <div className="nav-bar-item">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
    )
}

export default NavHeaders;