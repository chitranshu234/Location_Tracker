# 📍 LocationTracker

A React Native mobile application built with Expo that tracks and displays the user's real-time location on an interactive map.

## 🎥 Video Preview

Watch the app in action: [Click here to watch the demo](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)


## ✨ Features

- **Real-time Location Tracking** - Continuously monitors and updates user's position
- **Interactive Map** - Displays location on a fully interactive map with zoom and pan
- **Live Marker** - Shows user's exact position with an animated marker
- **Coordinate Display** - Shows precise latitude and longitude coordinates
- **Permission Handling** - Gracefully requests and manages location permissions
- **Smooth Animations** - Map smoothly follows user movement
- **Beautiful UI** - Modern, polished interface with loading states and error handling

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo Go app installed on your mobile device
- Expo CLI (installed automatically with npx)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd LocationTracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Run the app:**
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)
   - Or press `a` for Android emulator
   - Or press `i` for iOS simulator

## 📱 How It Works

1. **Permission Request**: When the app launches, it requests location permission from the user
2. **Permission Denied**: If denied, displays a friendly error message with instructions
3. **Loading State**: Shows a loading screen while fetching initial location
4. **Map Display**: Once permission is granted, displays an interactive map centered on user's location
5. **Live Updates**: Continuously updates the marker position as the user moves (checks every 1 second or 1 meter of movement)
6. **Coordinate Display**: Shows real-time latitude and longitude at the bottom of the screen

## 📂 Project Structure

```
LocationTracker/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ErrorScreen.js   # Permission denied screen
│   │   ├── Header.js        # App header component
│   │   ├── LoadingScreen.js # Loading state screen
│   │   ├── LocationCard.js  # Coordinates display card
│   │   └── MapContainer.js  # Map view component
│   ├── constants/           # App constants
│   │   └── locationConfig.js # Location tracking configuration
│   ├── hooks/               # Custom React hooks
│   │   └── useLocation.js   # Location tracking logic
│   └── styles/              # Styling files
│       ├── commonStyles.js  # Shared styles
│       ├── errorStyles.js   # Error screen styles
│       ├── loadingStyles.js # Loading screen styles
│       └── mapStyles.js     # Map container styles
├── App.js                   # Main app component
├── app.json                 # Expo configuration
└── package.json             # Dependencies and scripts
```

## 🔧 Key Technologies

- **React Native** - Mobile app framework
- **Expo** - Development platform and toolchain
- **expo-location** - Location tracking API
- **react-native-maps** - Interactive map component

## 📋 Requirements Checklist

- ✅ Asks for location permission on app load
- ✅ Handles permission denial with clear messaging
- ✅ Displays interactive map when permission is granted
- ✅ Centers map on user's current location
- ✅ Shows marker at user's exact position
- ✅ Updates marker in real-time as user moves

## ⚙️ Configuration

Location tracking settings can be modified in `src/constants/locationConfig.js`:

```javascript
accuracy: Location.Accuracy.BestForNavigation  // GPS accuracy level
timeInterval: 1000                             // Update every 1 second
distanceInterval: 1                            // Or every 1 meter moved
```

## 🎨 Customization

### Modify Map Appearance
Edit `src/components/MapContainer.js` to change:
- Map type (standard, satellite, hybrid)
- Zoom level (latitudeDelta, longitudeDelta)
- Marker color and style
- Compass and scale visibility

### Update UI Colors
Modify styles in `src/styles/` directory to customize:
- Color scheme
- Card designs
- Loading animations
- Error messages

## 🐛 Troubleshooting

### App won't start
```bash
# Clear cache and restart
npx expo start -c
```

### Location not updating
- Ensure location services are enabled on your device
- Check that the app has location permissions in device settings
- Try moving outdoors for better GPS signal

### Map not displaying
- Verify internet connection (maps require data)
- Check that `react-native-maps` is properly installed

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

---


