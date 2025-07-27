const urlParams = new URLSearchParams(window.location.search);
const mood = urlParams.get("mood");

if (mood) {
  const dbRef = firebase.firestore().collection("moods").doc(mood);
  dbRef.get().then((doc) => {
    if (doc.exists) {
      const data = doc.data();

      // Capitalize first letter or convert ID to readable text
      const prettyTitle = data.title || mood.replace(/(^|\s)(\S)/g, (t) => t.toUpperCase());

      document.getElementById("mood-title").innerText = `You’re Feeling ${prettyTitle}`;
      document.getElementById("mood-message").innerText = data.message;

      if (data.image) {
        const img = document.getElementById("mood-image");
        img.src = data.image;
        img.style.display = "block";
      }

      if (data.audio) {
        const audio = document.getElementById("mood-audio");
        audio.src = data.audio;
        audio.style.display = "block";
      }
    } else {
      document.getElementById("mood-title").innerText = "Mood not found!";
    }
  });
}
