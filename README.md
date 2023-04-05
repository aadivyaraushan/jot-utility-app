# When you install this app, please pin it to the taskbar immediately.

## Jot

Jot is an always-on-top minimalist utility app which helps organise your thoughts, store ideas, etc - sort of like an always-on-top text file.

### Installation

Install the app with the setup.exe file in the latest release.

### Features

- Automatic saves of anything you put in the app
- Minimalist design
- Dark mode and light mode
- Always-on-top

### Technologies

- The app is built with *vanilla HTML/JS*, *tailwind-css* and *Electron*. This app is my first project with Electron and I’m using it largely to learn Electron.
- *Electron-store* is used for the auto-saving/local storage feature. This was simplest and most secure possible way to implement local storage. There are other libraries which offer more features but those features aren’t necessary for a use-case this simple.
- *Electron forge* is used for packaging/publishing. The squirrel-windows installer that comes with this library is really user-friendly and offers automatic updates, so I thought it would be appropriate.

### Potential future features

- A markdown editor embedded in the app

### License

This app uses the MIT License. It’s completely open to contributions from anyone.

### Inspiration

The app was inspired by Cal Newport’s concept of a “working-memory.txt” file in which he stores any ideas and organises his thoughts. I was really frustrated by how most quick-capture tools aren’t accessible immediately and I tried to fix that with this app.

