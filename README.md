# Code Editor

A browser-based modern code editor inspired by VS Code and Cursor, built entirely using HTML, CSS, and JavaScript to strengthen frontend fundamentals and understand how real editors work internally.

---

# Features

## Current Features
- Modern dark editor UI
- Sidebar layout
- Multiple file tabs
- Virtual file system
- Dynamic line numbers
- Scroll synchronization
- Custom TAB indentation
- Auto indentation on Enter
- Persistent content per tab
- Responsive editor layout

---

# Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No external libraries or frameworks used.

---

# Project Goal

The goal of this project is to understand:
- DOM manipulation
- Event-driven architecture
- Keyboard handling
- Editor rendering systems
- State management
- UI synchronization
- Real-world frontend architecture

---

# Project Structure

```text
project/
│
├── index.html
├── style.css
└── main.js

# Architecture Overview

App
├── Sidebar
├── Main
│   ├── Tabs
│   └── Editor Container
│       ├── Line Numbers
│       └── Text Area

Functional Requirements

* Real-time code editing
* File switching system
* Dynamic line number generation
* Keyboard shortcut handling
* Auto indentation support
* Scroll synchronization

⸻

Non-Functional Requirements

* Fast typing performance
* Clean architecture
* Scalable structure
* Maintainable codebase
* Responsive UI
* Smooth editor interactions

⸻

How It Works

1. Virtual File System

A JavaScript object stores content for each tab.
const files = {
  "index.js": "",
  "style.css": "",
  "main.js": ""
};

2. Line Number Engine

Line numbers are generated dynamically based on textarea content.

⸻

3. Keyboard Engine

Custom keyboard handling is implemented using:

* keydown
* input
* scroll

events.

⸻

4. Auto Indentation

The editor:

* inserts spaces on TAB
* preserves indentation on Enter
* detects { for smart indentation

⸻

Learning Outcomes

This project helped in understanding:

* Event listeners
* DOM APIs
* Cursor positioning
* Text manipulation
* Scroll synchronization
* UI state management
* Interactive frontend systems

⸻

Future Improvements

* Syntax highlighting
* Auto closing brackets
* File explorer system
* Theme customization
* Minimap
* Search functionality
* Command palette
* Real file handling
* Code execution support
* Monaco-like rendering system



Author - Vaibhav