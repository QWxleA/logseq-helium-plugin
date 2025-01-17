import "@logseq/libs";

const settings = [
  {
    key: "VideoPosition",
    title: "Edit the top position of the floated video",
    description: "Default: -3em. To move the video lower, insert a more positive number (e.g. -2em). To move the video higher, insert a more negative number (e.g. -4em)",
    type: "string",
    default: "-3em"
  },
  {
    key: "IconPosition",
    title: "Edit the right position of the balloon icon next to the floated video",
    description: "Default: -2.5em. To move the balloon icon closer to the video (toward the left), insert a more positive number (e.g. -1.5em). To move the balloon icon further away from the video (toward the right), insert a more negative number (e.g. -3.5em)",
    type: "string",
    default: "-2.5em"
  }
]
logseq.useSettingsSchema(settings);

const block_id_prefix = `div[id^='ls-block']`;
let block_uuid_start;

function startFloat(e) {
  block_uuid_start = e.uuid;
  const video_position = logseq.settings.VideoPosition;
  const icon_position = logseq.settings.IconPosition;

  // option 1: display balloon icon above the top right corner of the video
  logseq.provideUI ({
    key: "helium",
    path: `${block_id_prefix}[id$='${block_uuid_start}'] > .flex.flex-row.pr-2`,
    template: `<a class="helium" data-helium-id="${block_uuid_start}" data-on-click="stop_float" style="position:absolute; top:1.5em; right:${icon_position};">
      <svg width="2.5em" height="2.5em" viewBox="0 0 72 72" id="emoji" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="color">
          <polygon fill="#D22F27" points="33.9763,42.6906 34.0061,49.1497 34.0359,55.6089 28.1166,51.8019 22.1972,47.995 28.0868,45.3428"/>
          <circle cx="45" cy="27" r="23.0003" fill="#EA5A47"/>
          <path fill="#D22F27" d="M60.8265,10.549c-1.3409-1.3409-2.8082-2.477-4.3606-3.4175c5.3598,8.8471,4.2238,20.5254-3.4175,28.1667 s-19.3196,8.7774-28.1667,3.4175c0.9405,1.5525,2.0767,3.0197,3.4175,4.3606c8.9822,8.9822,23.5452,8.9822,32.5273,0 C69.8087,34.0942,69.8087,19.5312,60.8265,10.549z"/>
        </g>
        <g id="hair"/>
        <g id="skin"/>
        <g id="skin-shadow"/>
        <g id="line">
          <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.1216" points="34,47.2098 34.01,49.1498 34.04,55.6098 28.12,51.7998 22.2,47.9998 28.09,45.3398 30.04,44.4598"/>
          <circle cx="45" cy="27" r="23.0003" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M17.7253,65.09c0.5048,0.0395,1.0254-0.0002,1.547-0.1285c2.7035-0.6648,4.41-3.458,3.8116-6.2388"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23.1406,58.907c-0.1631-0.4794-0.2535-0.9936-0.2582-1.5307c-0.0246-2.7839,2.2596-5.1284,5.102-5.2364"/>
        </g>
      </svg>
    </a>`
  });

  // option 1: float the video
  logseq.provideStyle(`
    ${block_id_prefix}[id$='${block_uuid_start}'] > .flex.flex-row.pr-2 {
      position: sticky;
      top: ${video_position};
      z-index: 5;
      background-color: var(--ls-primary-background-color);
    }
  `);

  // option 2: display balloon icon above the top right corner of the video
  logseq.provideUI ({
    key: "helium",
    path: `${block_id_prefix}[id$='${block_uuid_start}']`,
    template: `<a class="helium" data-helium-id="${block_uuid_start}" data-on-click="stop_float" style="position:absolute; top:1.5em; right:-2.25em;">
      <svg width="2.5em" height="2.5em" viewBox="0 0 72 72" id="emoji" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="color">
          <polygon fill="#D22F27" points="33.9763,42.6906 34.0061,49.1497 34.0359,55.6089 28.1166,51.8019 22.1972,47.995 28.0868,45.3428"/>
          <circle cx="45" cy="27" r="23.0003" fill="#EA5A47"/>
          <path fill="#D22F27" d="M60.8265,10.549c-1.3409-1.3409-2.8082-2.477-4.3606-3.4175c5.3598,8.8471,4.2238,20.5254-3.4175,28.1667 s-19.3196,8.7774-28.1667,3.4175c0.9405,1.5525,2.0767,3.0197,3.4175,4.3606c8.9822,8.9822,23.5452,8.9822,32.5273,0 C69.8087,34.0942,69.8087,19.5312,60.8265,10.549z"/>
        </g>
        <g id="hair"/>
        <g id="skin"/>
        <g id="skin-shadow"/>
        <g id="line">
          <polyline fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.1216" points="34,47.2098 34.01,49.1498 34.04,55.6098 28.12,51.7998 22.2,47.9998 28.09,45.3398 30.04,44.4598"/>
          <circle cx="45" cy="27" r="23.0003" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M17.7253,65.09c0.5048,0.0395,1.0254-0.0002,1.547-0.1285c2.7035-0.6648,4.41-3.458,3.8116-6.2388"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23.1406,58.907c-0.1631-0.4794-0.2535-0.9936-0.2582-1.5307c-0.0246-2.7839,2.2596-5.1284,5.102-5.2364"/>
        </g>
      </svg>
    </a>`
  });

  // option 2: float the video
  logseq.provideStyle(`
    ${block_id_prefix}[id$='${block_uuid_start}'] {
      position: sticky;
      top: ${video_position};
      z-index: 5;
      background-color: var(--ls-primary-background-color);
    }
  `);
}

function stopFloat(e) {
  let block_uuid_stop = (e?.uuid == undefined) ? e : e.uuid;
  // e.dataset.heliumId was not yet used
  // let block_uuid_stop = (e.uuid == undefined) ? e.dataset.heliumId : e.uuid;
  let plugin = parent.document.getElementById("logseq-helium-plugin--helium");
  
  // reset the display of the video
  // option 1
  logseq.provideStyle(`
    ${block_id_prefix}[id$='${block_uuid_stop}'] > .flex.flex-row.pr-2 {
      position: relative;
      top: 0;
      z-index: 0;
      background-color: none;
    }
  `);

  // option 2
  logseq.provideStyle(`
    ${block_id_prefix}[id$='${block_uuid_stop}'] {
      position: relative;
      top: 0;
      z-index: 0;
      background-color: none;
    }
  `);

  // remove the balloon icon
  if (plugin) plugin.remove();
}

const main = async () => {
  console.log("logseq-helium-plugin loaded"); 

  logseq.provideModel({
    // clicking on the balloon icon resets the block back to normal
    stop_float(e) {
      stopFloat(e);
    }
  });

  // slash command - float the video
  logseq.Editor.registerSlashCommand("🎈 Start float", async (e) => {
    startFloat(e);
  });

  // slash command - display the video as normal
  logseq.Editor.registerSlashCommand("❌ Stop float", async (e) => {
    stopFloat(e);
  });

  // right click - float the video
  logseq.Editor.registerBlockContextMenuItem("🎈 Start float", async (e) => {
    startFloat(e);
  });

  // right click - display the video as normal
  logseq.Editor.registerBlockContextMenuItem("❌ Stop float", async (e) => {
    stopFloat(e);
  });
  // disable floating block
  // this could be a toggle, if it knew how to find the only (or first)
  // video on the page (hint, hint)
  logseq.App.registerCommandPalette(
    {
      key: `logseq-helium-plugin-off`,
      label: `Disable floating (video) block`,
      keybinding: {
        mode: 'global',
        binding: 'mod+d',
      },
    },
    async () => {
      await stopFloat(stopFloat(block_uuid_start));
    }
  );
}

logseq.ready(main).catch(console.error);