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
                <ul><a href="index.html">Home</a></ul>
            </div>
            <div className="nav-bar-item">
                <button class="club-modal-trigger" data-target="modal-club">Club Dates</button>
                <div id="modal-club" class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div class="box">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Venue</th>
                                        <th>Time</th>
                                        <th>Tickets</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>04/09/23</td>
                                        <td>Blue Note, NYC</td>
                                        <td>9:00pm</td>
                                        <td><a href="https://www.bluenotejazz.com/nyc/shows/?eid=12950925"
                                                method="get" target="_blank" rel="noreferrer" class="button" id="get-tickets">Get Tickets</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ul>Meet & Greet</ul>
                <ul>Recordings</ul>
            </div>
        </div>
    )
}

export default NavHeaders;