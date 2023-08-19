const textarea = document.getElementById("textarea1");

function f1(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}

function f3(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function f4(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function f5(e) {
    textarea.style.textAlign = "left";
}

function f6(e) {
    textarea.style.textAlign = "center";
}

function f7(e) {
    textarea.style.textAlign = "right";
}

function f8(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}

function f9() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function f10(e) {
    let value = e.value;
    textarea.style.color = value;
}

window.addEventListener('load', () => {
    textarea.value = "";
});

function goToAnotherPage() {
    document.body.style.transition = "transform 0.5s ease-in-out";
    document.body.style.transform = "translateX(-100%)";

    setTimeout(function () {
        window.location.href = "/Timer/timer.html"; // Replace with your target page URL
    }, 500); // Wait for the animation to finish before navigating
}

const noteTextarea = document.getElementById('note');
const saveButton = document.getElementById('save');

// Load saved note on popup open
chrome.storage.local.get('note', (data) => {
  if (data.note) {
    noteTextarea.value = data.note;
  }
});

// Save note on button click
saveButton.addEventListener('click', () => {
  const note = noteTextarea.value;
  chrome.storage.local.set({ 'note': note }, () => {
    console.log('Note saved: ' + note);
  });
})