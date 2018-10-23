export default () =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(["Notif1", "Notif2", "Notif3"]), 6000); // Get the result in 6"
  });
