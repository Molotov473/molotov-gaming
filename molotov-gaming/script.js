/*
  EDIT YOUR LINKS HERE:
  Replace each example URL with the exact URL of your profile.
  Example: https://kick.com/YOUR_USERNAME
*/
const PROFILE_LINKS = {
  kick: "https://kick.com/molotov0-06",
  twitch: "https://www.twitch.tv/molotov0_0",
  instagram: "https://www.instagram.com/molotov0_06/",
  x: "https://x.com/molotov0_0"
};

document.querySelectorAll("[data-platform]").forEach((card) => {
  const platform = card.dataset.platform;
  if (PROFILE_LINKS[platform]) card.href = PROFILE_LINKS[platform];
});

document.getElementById("year").textContent = new Date().getFullYear();

/*
  LIVE STATUS:
  This static version cannot securely check live status by itself.
  It shows a clear placeholder and links to your Kick channel.
  Real automatic status needs an official API and usually a small
  server/proxy so private API credentials are not exposed in the browser.
*/
const liveTitle = document.getElementById("live-title");
const liveCopy = document.getElementById("live-copy");
const liveButton = document.getElementById("live-button");

liveTitle.textContent = "STREAM STATUS";
liveCopy.textContent = "Tap below to check the channel for the latest live status.";
liveButton.href = PROFILE_LINKS.kick;
