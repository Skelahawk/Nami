document.addEventListener('DOMContentLoaded', function() {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  yesBtn.addEventListener('click', function() {
    alert("Great Choice! Let's begin by me saying that I love you more than what this world can offer!");
  });

  noBtn.addEventListener('click', function() {
    alert("That's okay! Have a great day!");
  });
});
