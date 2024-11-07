// Windows 98 Theme Interactions and Animations

document.addEventListener('DOMContentLoaded', () => {
  // Simulate Windows 98 button press effect
  const buttons = document.querySelectorAll('.win98-button');
  buttons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
      e.target.style.borderTopColor = '#808080';
      e.target.style.borderLeftColor = '#808080';
      e.target.style.borderRightColor = '#FFFFFF';
      e.target.style.borderBottomColor = '#FFFFFF';
    });
    button.addEventListener('mouseup', (e) => {
      e.target.style.borderTopColor = '#FFFFFF';
      e.target.style.borderLeftColor = '#FFFFFF';
      e.target.style.borderRightColor = '#808080';
      e.target.style.borderBottomColor = '#808080';
    });
    button.addEventListener('mouseleave', (e) => {
      e.target.style.borderTopColor = '#FFFFFF';
      e.target.style.borderLeftColor = '#FFFFFF';
      e.target.style.borderRightColor = '#808080';
      e.target.style.borderBottomColor = '#808080';
    });
  });

  // Draggable Window Functionality
  const windows = document.querySelectorAll('.win98-window');
  windows.forEach(windowEl => {
    const titleBar = windowEl.querySelector('.win98-title-bar');
    if (titleBar) {
      titleBar.addEventListener('mousedown', startDragging);
    }
  });

  function startDragging(e) {
    const window = e.target.closest('.win98-window');
    const startX = e.clientX - window.offsetLeft;
    const startY = e.clientY - window.offsetTop;

    function dragWindow(e) {
      window.style.position = 'absolute';
      window.style.left = `${e.clientX - startX}px`;
      window.style.top = `${e.clientY - startY}px`;
    }

    function stopDragging() {
      document.removeEventListener('mousemove', dragWindow);
      document.removeEventListener('mouseup', stopDragging);
    }

    document.addEventListener('mousemove', dragWindow);
    document.addEventListener('mouseup', stopDragging);
  }

  // Startup Sound Simulation (optional)
  function playStartupSound() {
    const audio = new Audio('/assets/windows98-startup.mp3');
    audio.play().catch(error => {
      console.warn('Could not play startup sound:', error);
    });
  }

  // Taskbar Clock Simulation
  function updateTaskbarClock() {
    const clockElement = document.querySelector('.win98-taskbar-clock');
    if (clockElement) {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      clockElement.textContent = `${hours}:${minutes}`;
    }
  }

  // Update clock every minute
  setInterval(updateTaskbarClock, 60000);
  updateTaskbarClock(); // Initial call

  // Window Minimize/Maximize/Close Functionality
  const windowControls = document.querySelectorAll('.win98-window-control');
  windowControls.forEach(control => {
    control.addEventListener('click', (e) => {
      const action = e.target.dataset.action;
      const window = e.target.closest('.win98-window');

      switch(action) {
        case 'minimize':
          window.style.display = 'none';
          break;
        case 'maximize':
          if (window.classList.contains('maximized')) {
            window.classList.remove('maximized');
            window.style.width = '';
            window.style.height = '';
            window.style.top = '';
            window.style.left = '';
          } else {
            window.classList.add('maximized');
            window.style.width = '100%';
            window.style.height = '100%';
            window.style.top = '0';
            window.style.left = '0';
          }
          break;
        case 'close':
          window.remove();
          break;
      }
    });
  });

  // Optional: Startup Sound
  // Uncomment the line below if you want to play a startup sound
  // playStartupSound();
});

// Contextmenu simulation for Windows 98 style right-click menus
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  const contextMenu = document.createElement('div');
  contextMenu.classList.add('win98-context-menu');
  
  // Example menu items - customize as needed
  const menuItems = [
    { label: 'New', action: () => console.log('New') },
    { label: 'Open', action: () => console.log('Open') },
    { label: 'Properties', action: () => console.log('Properties') }
  ];

  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.textContent = item.label;
    menuItem.addEventListener('click', item.action);
    contextMenu.appendChild(menuItem);
  });

  contextMenu.style.position = 'absolute';
  contextMenu.style.left = `${e.pageX}px`;
  contextMenu.style.top = `${e.pageY}px`;
  
  document.body.appendChild(contextMenu);

  // Remove context menu when clicking elsewhere
  function removeContextMenu(event) {
    if (!contextMenu.contains(event.target)) {
      document.body.removeChild(contextMenu);
      document.removeEventListener('click', removeContextMenu);
    }
  }

  document.addEventListener('click', removeContextMenu);
});
