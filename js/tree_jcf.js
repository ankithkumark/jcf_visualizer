// Scale Tree to Fit Container seamlessly
function fitTree() {
    const wrapper = document.getElementById('tree-wrapper');
    const tree = document.getElementById('tree');

    // Reset to measure natural size
    tree.style.transform = 'none';

    // Calculate available scaling ratios
    const scaleX = (wrapper.clientWidth - 20) / tree.scrollWidth;
    const scaleY = (wrapper.clientHeight - 20) / tree.scrollHeight;

    // Scale down to fit, never scale up past 1
    const scale = Math.min(scaleX, scaleY, 1);
    tree.style.transform = `scale(${scale})`;
}

window.addEventListener('load', fitTree);
window.addEventListener('resize', fitTree);