   const universe = document.getElementById('universe');
    for (let i = 0; i < 1000; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.width = `${Math.random() * 2}px`;
      star.style.height = star.style.width;
      star.style.backgroundColor = 'white';
      star.style.borderRadius = '50%';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.boxShadow = `0 0 ${Math.random() * 5}px white`;
      star.style.opacity = Math.random();
      universe.appendChild(star);
    }

    function updateDateTime() {
      const now = new Date();
      document.getElementById('datetime').textContent = 
        `Current time: ${now.toLocaleTimeString()} | ${now.toLocaleDateString()}`;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    const container = document.querySelector('.container');
    let scale = 1;
    document.getElementById('zoomIn').addEventListener('click', () => {     scale *= 1.2;
      container.style.transform = `scale(${scale})`;
    });
    document.getElementById('zoomOut').addEventListener('click', () => {
      scale /= 1.2;
    container.style.transform = `scale(${scale})`;
    });

    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      container.style.transform = `scale(${scale}) rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * -10}deg)`;
    });
