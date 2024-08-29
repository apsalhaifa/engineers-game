document.addEventListener("DOMContentLoaded", () => {
    const processor = document.getElementById('processor');
    const ram = document.getElementById('ram');
    const processorSlot = document.getElementById('processor-slot');
    const ramSlot = document.getElementById('ram-slot');
    const nextLevelButton = document.getElementById('next-level');
    const bgMusic = document.getElementById('bg-music');
    const dropSound = document.getElementById('component-drop-sound');
    const successSound = document.getElementById('success-sound');

    let processorPlaced = false;
    let ramPlaced = false;

    bgMusic.play();  // Start the background music when the game loads

    function handleDragStart(event) {
        event.dataTransfer.setData('text', event.target.id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const componentId = event.dataTransfer.getData('text');
        const component = document.getElementById(componentId);

        if (event.target === processorSlot && componentId === 'processor') {
            processorSlot.appendChild(component);
            processor.style.position = "absolute"; // Keep position fixed within slot
            processor.style.width = "50px"; // Maintain size after drop
            processor.style.height = "auto";
            processor.style.top = "0";
            processor.style.left = "0";
            processorPlaced = true;
            dropSound.play();  // Play sound effect when processor is placed
        } else if (event.target === ramSlot && componentId === 'ram') {
            ramSlot.appendChild(component);
            ram.style.position = "absolute"; // Keep position fixed within slot
            ram.style.width = "50px"; // Maintain size after drop
            ram.style.height = "auto";
            ram.style.top = "0";
            ram.style.left = "0";
            ramPlaced = true;
            dropSound.play();  // Play sound effect when RAM is placed
        }

        checkCompletion();
    }

    function checkCompletion() {
        if (processorPlaced && ramPlaced) {
            successSound.play();  // Play success sound when both components are placed
            nextLevelButton.disabled = false;
            nextLevelButton.classList.add('enabled');
        }
    }

    processor.addEventListener('dragstart', handleDragStart);
    ram.addEventListener('dragstart', handleDragStart);
    processorSlot.addEventListener('dragover', handleDragOver);
    processorSlot.addEventListener('drop', handleDrop);
    ramSlot.addEventListener('dragover', handleDragOver);
    ramSlot.addEventListener('drop', handleDrop);
});
