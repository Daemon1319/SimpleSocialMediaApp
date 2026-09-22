# Simple Social Media App

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**

```bash
   git clone https://github.com/Daemon1319/SimpleSocialMediaApp.git
```

2. **Navigate into the project folder**

```bash
   cd SimpleSocialMediaApp
```

3. **Install the dependencies**

```bash
   npm install
```

4. **Start the development server**

```bash
   npm run dev
```

5. Open your browser and go to the local URL shown in the terminal (usually `http://localhost:5173`).

## Features

- **Username entry** – Enter a username when you first open the app. This name is used as the author of any posts you create.
- **Create posts** – You can post:
  - Text only
  - Image only
  - Both text and image
- **Image preview** – See a preview of the image before posting, with the option to remove it.
- **Search posts** – Filter posts by content or author name.
- **Sort posts** – Sort by newest or oldest.
- **Edit & delete your own posts** – Only posts created with the same username as the one you entered can be edited or deleted.
- **Default posts** – The app comes with some pre-loaded posts so you can see how everything works right away.

## Important Notes

- This app does not use a database or localStorage. All data lives only in the browser's memory.
- Refreshing the page will reset everything back to the original default posts.
- If you enter a username that matches one of the default posts' authors, you will be able to edit or delete those posts. They will still return to their original state after a refresh.
