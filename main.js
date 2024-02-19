/*
 * Code from https://stackoverflow.com/a/38796843/
 * @AI-ien
 */
async function getWeb(aUrl) {
    const response = await fetch(aUrl);
    const contents = await response.text();
    return contents;
}

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

getWeb("https://raw.githubusercontent.com/AI-ien/macos-titlebar/main/gtk.css").then((data) => {
    var macosBarStyle = document.createElement("style");
    macosBarStyle.innerHTML = data.replaceAll('assets/', 'https://raw.githubusercontent.com/AI-ien/macos-titlebar/main/assets/');
    document.head.appendChild(macosBarStyle);
});
