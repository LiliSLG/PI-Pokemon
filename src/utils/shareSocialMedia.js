const appUrl = "https://pi-pokemon-frontend-amber.vercel.app/";

export const shareOnFacebook = (pokemon) => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    appUrl
  )}&quote=${encodeURIComponent(
    `Check out this Pokémon on my app: ${pokemon.name}!`
  )}`;
  window.open(url, "_blank");
};

export const shareOnWhatsApp = (pokemon) => {
  const text = `Check out this Pokémon on my app: ${pokemon.name}! ${appUrl}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

export const shareOnTwitter = (pokemon) => {
  const text = `Check out this Pokémon on my app: ${pokemon.name}! ${appUrl}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}`;
  window.open(url, "_blank");
};

export const shareOnInstagram = (pokemon) => {
  const text = `Check out this Pokémon on my app: ${pokemon.name}! ${appUrl}`;
  const url = `https://www.instagram.com/?caption=${encodeURIComponent(
    text
  )}&media=${encodeURIComponent(pokemon.image)}`;
  window.open(url, "_blank");
};

// const shareOnSlack = () => {
//   const payload = {
//     text: `Check out this Pokémon on my app: *${pokemon.name}*!`,
//     attachments: [
//       {
//         fallback: `${pokemon.name}: ${appUrl}`,
//         image_url: pokemon.image,
//         title: pokemon.name,
//         title_link: appUrl
//       }
//     ]
//   };

//   fetch("https://hooks.slack.com/services/YOUR_SLACK_WEBHOOK_URL", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(payload)
//   })
//     .then(response => {
//       if (response.ok) {
//         alert("Pokémon shared successfully on Slack!");
//       } else {
//         throw new Error("Failed to share Pokémon on Slack.");
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       alert("Failed to share Pokémon on Slack.");
//     });
// };

//  <h2>{pokemon.name}</h2>
// <img src={pokemon.image} alt={pokemon.name} />

// <button onClick={shareOnFacebook}>
//   <img src="/assets/socialMedia/facebook.png" alt="Facebook" />
//   Share on Facebook
// </button>

//   <button onClick={shareOnWhatsApp}>
//     <img src="/assets/socialMedia/whatsapp.png" alt="WhatsApp" />
//     Share on WhatsApp
//   </button>

//   <button onClick={shareOnSlack}>
//     <img src="/assets/socialMedia/slack.png" alt="Slack" />
//     Share on Slack
//   </button>

//   <button onClick={shareOnInstagram}>
//     <img src="/assets/socialMedia/instagram.png" alt="Instagram" />
//     Share on Instagram
//   </button>

