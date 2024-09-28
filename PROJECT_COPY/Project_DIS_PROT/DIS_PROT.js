// Toggle visibility for proactive details
document.getElementById('proactiveInfo').addEventListener('click', function() {
    const details = document.getElementById('proactiveDetails');
    details.classList.toggle('hidden');
});

// Toggle visibility for crisis response details
document.getElementById('crisisInfo').addEventListener('click', function() {
    const details = document.getElementById('crisisDetails');
    details.classList.toggle('hidden');
});

// Toggle visibility for post-disaster recovery details
document.getElementById('recoveryInfo').addEventListener('click', function() {
    const details = document.getElementById('recoveryDetails');
    details.classList.toggle('hidden');
});
