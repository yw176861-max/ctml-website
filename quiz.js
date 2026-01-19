function scoreQuiz() {
  const key = {
    q1: "b",  // dual channels
    q2: "c",  // limited capacity
    q3: "a",  // active processing
    q4: "b",  // coherence
    q5: "c",  // signaling
    q6: "a",  // redundancy
    q7: "b",  // spatial contiguity
    q8: "c",  // temporal contiguity
    q9: "a",  // segmenting
    q10:"b"   // modality
  };

  let score = 0;
  let total = Object.keys(key).length;

  for (const q in key) {
    const picked = document.querySelector(`input[name="${q}"]:checked`);
    if (picked && picked.value === key[q]) score++;
  }

  const pct = Math.round((score / total) * 100);
  const box = document.getElementById("resultBox");
  box.innerHTML = `<b>Your score:</b> ${score}/${total} (${pct}%).<br/>
  <span>Tip:</span> Review “12 Principles” and try again if you scored below 70%.`;
}

function resetQuiz(){
  document.getElementById("quizForm").reset();
  document.getElementById("resultBox").textContent = "Result will appear here after you submit.";
}
