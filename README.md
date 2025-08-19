# Event Manager

A modern, feature-rich event management application built with **Next-Forge Turbo template** ,**Next.js**, **TypeScript**, **Zustand** also **localstorage**, and **React Hook Form**.

## ✨ Features

### Core Functionality
- ✅ **Add Events** - Create events with name and date validation
- ✅ **Event List** - Clean, organized display of all events
- ✅ **Delete Events** - Remove events with confirmation
- ✅ **Form Validation** - Real-time validation with error messages
- ✅ **TypeScript** - Full type safety throughout the application

### Bonus Features
- ✅ **Real-time Search** - Filter events by name instantly
- ✅ **localStorage Persistence** - Events survive page refreshes
- ✅ **Responsive Design** - Perfect on desktop, tablet, and mobile
- ✅ **Fast Performance** - Client-side only, no API dependencies

## 🛠️ Tech Stack

- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type-safe development
- **Zustand** - Lightweight state management with persistence
- **React Hook Form** - Elegant form handling and validation
- **Vanilla CSS** - Custom styling with modern CSS features
- **Next-Forge Turbo** - Monorepo setup with Turborepo + pnpm

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arnavggupta/pycray-assignment.git
   cd event-man
   ```

2. **Install root dependencies**
   ```bash
   pnpm install
   ```

3. **Navigate to the web app**
   ```bash
   cd apps/web
   ```

4. **Install web app dependencies**
   ```bash
   pnpm install
   ```

5. **Start the development server**
   ```bash
   pnpm run dev
   ```

6. **Open the application**
   ```bash
   🌐 http://localhost:3001/events
   ```

## 📱 How to Use

### Adding Events
1. Navigate to `http://localhost:3001/events`
2. Fill in the **Event Name** (required)
3. Select an **Event Date** (required)
4. Click **"Add Event"** to save

### Managing Events
- **Search Events**: Use the search bar to filter by event name
- **View Events**: All events display with formatted dates
- **Delete Events**: Click the red "Delete" button to remove any event
- **Automatic Save**: All changes are saved to localStorage instantly

## 🏗️ Project Structure

```
📁 Repository Root
├── apps/
│   └── web/                    # Main Next.js application
│       ├── app/
│       │   ├── events/
│       │   │   ├── stores/
│       │   │   │   └── eventStore.ts  # Zustand store with persistence
│       │   │   └── page.tsx           # 🎯 Main events page (/events)
│       │   ├── globals.css     # Global styles (Vanilla CSS)
│       │   └── layout.tsx      # Root layout
│       ├── components/
│       │   ├── EventForm.tsx   # Add event form with validation
│       │   ├── EventLists.tsx   # Event display and management
│       │   └── SearchBar.tsx   # Real-time search functionality
│       └── package.json        # Web app dependencies
├── packages/                   # Shared packages (if any)
├── package.json               # Root dependencies
├── pnpm-workspace.yaml       # Workspace configuration
└── turbo.json                # Turborepo configuration
```


## 🌐 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+  
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📸 Screenshots

**Main Events Page (`/events`)**
<img width="1919" height="779" alt="image" src="https://github.com/user-attachments/assets/dee3d268-f7bf-472d-8277-bf9bf688ab48" />
<img width="1737" height="614" alt="image" src="https://github.com/user-attachments/assets/ef342582-2cf7-4889-9921-e4f0e43d5bf8" />
<img width="1615" height="579" alt="image" src="https://github.com/user-attachments/assets/17a4fbbe-b9f7-4445-8286-90fffd19c9e4" />




## 📞 Support

If you encounter any issues:

1. **Check Node.js version** - Ensure you're using Node.js 18+
2. **Clear cache** - Delete `node_modules` and `.next`, then reinstall
3. **Port conflicts** - The app runs on `localhost:3001`


**My mail id** : arnavgupta295@gmail.com
**Phone**      : 7297822698


