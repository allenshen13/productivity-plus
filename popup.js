document.addEventListener('DOMContentLoaded', () => {

    const textarea = document.getElementById("textarea1");
    const saveButton = document.getElementById('save');
  
    document.getElementById('font-size').addEventListener('change', (e) => f1(e.target));
    document.querySelector('.second button:nth-child(1)').addEventListener('click', (e) => f2(e.target));
    document.querySelector('.second button:nth-child(2)').addEventListener('click', (e) => f3(e.target));
    document.querySelector('.second button:nth-child(3)').addEventListener('click', (e) => f4(e.target));
    document.querySelector('.third button:nth-child(1)').addEventListener('click', (e) => f5(e.target));
    document.querySelector('.third button:nth-child(2)').addEventListener('click', (e) => f6(e.target));
    document.querySelector('.third button:nth-child(3)').addEventListener('click', (e) => f7(e.target));
    document.querySelector('.fourth button:nth-child(1)').addEventListener('click', (e) => f8(e.target));
    document.querySelector('.fourth button:nth-child(2)').addEventListener('click', f9);
    document.querySelector('.fourth input[type=color]').addEventListener('change', (e) => f10(e.target));
  
    document.getElementById('slideButton').addEventListener('click', goToAnotherPage);



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


// Load saved note on popup open
chrome.storage.local.get('note', (data) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else if (data.note) {
      textarea.value = data.note;
    }
  });
  

// Save note on button click
saveButton.addEventListener('click', () => {
  const note = textarea.value;
  chrome.storage.local.set({ 'note': note }, () => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log('Note saved: ' + note);
    }
  });
  
})


});