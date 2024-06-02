// https://adactio.medium.com/event-target-closest-536c7498a897
// https://stackoverflow.com/questions/68837872/problem-add-click-event-on-div-elements-and-play-respective-audio-elements

// Adds the on click event to the document
document.addEventListener('click', function(event) {

    // This is basically a checker. If there's an event (which is in this case is a click) on the specified attribute 
    // (data-audio-file), it returns a boolean
    const target = event.target.closest('a[data-audio-file]');
    if (target) {

        event.preventDefault(); // Prevents normal behaviour of # (scrolling up)

        // Here we say that after targeting or clicking the audio-file attribute, we get its URL which is embedded
        // into the HTML
        const audioUrl = target.getAttribute('data-audio-file');
        
        // Creates a constant of Object? audio with the previous URL
        const audio = new Audio(audioUrl);
        
        // Plays it
        audio.play();
    }
});

/*
Instead of a link, I could also use a src="relativepath" but the HTML code would have to change to a src
attribute and also here to a "a[src]"
*/