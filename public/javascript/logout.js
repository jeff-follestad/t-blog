async function logout() {
  const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
      document.location.replace('/');
  }
  else {
      alert(response.statusText);
  }
}

var tiempo;

function timer() {
  tiempo = setTimeout(function(){ logout() }, 90000)
}

document.onclick = function(){ clearTimeout(tiempo)
timer()
}

timer()

document.querySelector('#logout').addEventListener('click', logout);