/*
 * Code from https://stackoverflow.com/a/38796843/
 */

window.playSound = function(url, loop) {
    var ourAudio = document.createElement('audio'); // Create a audio element using the DOM
    ourAudio.style.display = "none"; // Hide the audio element
    ourAudio.src = url; // Set resource to our URL
    ourAudio.autoplay = true; // Automatically play sound
    ourAudio.loop = loop;
    ourAudio.onended = function() {
      if(!loop) this.remove(); // Remove when played.
    };
    document.body.appendChild(ourAudio);
};