async function sendMessage() {
  let msg = document.getElementById("input").value;
  if (!msg) return;

  // Show user message
  document.getElementById("chat").innerHTML += "<b>You:</b> " + msg + "<br>";

  // Call backend
  let res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  let data = await res.json();
  document.getElementById("chat").innerHTML += "<b>Bot:</b> " + data.reply + "<br>";
  document.getElementById("input").value = "";
}
