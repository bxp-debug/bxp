document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (tabButtons.length === 0 || tabPanels.length === 0) {
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            
            const targetPanelId = button.dataset.tab;
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});