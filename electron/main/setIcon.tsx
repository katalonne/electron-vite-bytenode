import os from "node:os"
export const setIcon = (mainWindow, publicFolder) => {
  switch (os.platform()) {
    case 'darwin':
      mainWindow.setIcon(`${publicFolder}/favicon.ico`);
      break;
    case 'win32':
      mainWindow.setIcon(`${publicFolder}/favicon.ico`);
      break;
    default:
      mainWindow.setIcon(`${publicFolder}/favicon.ico`);
      break;
  }
}