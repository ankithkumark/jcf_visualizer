import { collectionData } from './data_jcf.js';

document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('click', (e) => {
        e.stopPropagation();

        // Manage active node state
        document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        const id = node.getAttribute('data-id');
        const data = collectionData[id];
        const panel = document.getElementById('details-panel');

        if (data) {
            const badgeClass = data.type === 'Interface' ? 'interface-badge' : 'class-badge';

            panel.innerHTML = `
                <div class="fade-in">
                    <h1 style="margin-top:0; font-size: 1.8em; color: var(--text-main);">${id}</h1>
                    <div class="badge ${badgeClass}">${data.type}</div>
                    
                    <p style="font-size: 1.05em; color: var(--text-desc);">${data.description}</p>
                    
                    ${data.complexity !== 'N/A' ? `
                    <div class="time-complexity">
                        <h3 style="margin-top: 0; color: var(--accent); font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px;">⏱️ Time Complexity</h3>
                        <p>${data.complexity}</p>
                    </div>
                    ` : ''}
                    
                    <div class="cp-tips">
                        <h3>💡 Competitive Programming Tip</h3>
                        <p>${data.cpTip}</p>
                    </div>
                </div>
            `;
        }
    });
});