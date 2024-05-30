// https://adactio.medium.com/event-target-closest-536c7498a897
// https://stackoverflow.com/questions/68837872/problem-add-click-event-on-div-elements-and-play-respective-audio-elements

// Adds the on click event to the document
document.addEventListener('click', function(event) {

    // This is basically a checker. If there's an event (which is in this case is a click) on the specified attribute 
    // (audio-file), it returns a boolean
    const target = event.target.closest('a[audio-file]');
    if (target) {

        // Here we say that after targeting or clicking the audio-file attribute, we get its URL which is embedded
        // into the HTML
        const audioUrl = target.getAttribute('audio-file');
        
        // Creates a constant of Object? audio with the previous URL
        const audio = new Audio(audioUrl);
        
        // Plays it
        audio.play();
    }
});