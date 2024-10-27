const media = [
    { type: 'img', src: 'img1.jpg' },
    { type: 'img', src: 'img2.jpg' },
    { type: 'img', src: 'img3.jpg' },
    { type: 'img', src: 'img4.jpg' },
    { type: 'img', src: 'img5.jpg' },
    { type: 'img', src: 'img6.jpg' },
	{ type: 'img', src: 'img7.jpg' },
	{ type: 'img', src: 'img8.jpg' },
	{ type: 'img', src: 'img9.jpg' },
	{ type: 'img', src: 'img10.jpg' },
	{ type: 'img', src: 'img11.jpg' },
	{ type: 'img', src: 'img12.jpg' },
	{ type: 'img', src: 'img13.jpg' },
	{ type: 'img', src: 'img14.jpg' },
	{ type: 'img', src: 'img15.jpg' },
	{ type: 'img', src: 'img16.jpg' },
	{ type: 'img', src: 'img17.jpg' },
	{ type: 'img', src: 'img18.jpg' },
	{ type: 'img', src: 'img19.jpg' },
	{ type: 'img', src: 'img20.jpg' },
	{ type: 'img', src: 'img21.jpg' },
	{ type: 'img', src: 'img22.jpg' },
    { type: 'video', src: 'video1.mp4' }, // Your video file
    { type: 'video', src: 'video2.mp4' }, // Your video file
	{ type: 'video', src: 'video3.mp4' }, // Your video file
	{ type: 'video', src: 'video4.mp4' }, // Your video file
	{ type: 'video', src: 'video5.mp4' }, // Your video file
	{ type: 'video', src: 'video7.mp4' }, // Your video file
    // Add more media items as needed
];

let currentIndex = 0;

function openModal(index, mediaType) {
    currentIndex = index;
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    
    if (media[index].type === 'img') {
        modalImage.src = media[index].src;
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
    } else if (media[index].type === 'video') {
        modalVideo.src = media[index].src;
        modalVideo.style.display = 'block';
        modalImage.style.display = 'none';
        modalVideo.load(); // Load the video
    }

    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalVideo').pause(); // Pause the video when closing
    document.getElementById('modalVideo').src = ""; // Reset video source
}

function changeMedia(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = media.length - 1; // Loop to the last media
    } else if (currentIndex >= media.length) {
        currentIndex = 0; // Loop to the first media
    }
    openModal(currentIndex); // Reopen the modal with the new media
}
