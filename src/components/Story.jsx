import { X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom"; 
import React from "react";
import Img from "../assets/the-song.jpg";
import Img2 from "../assets/at-dawn.jpg";
import Img3 from "../assets/stare.jpg";
import { Link } from "react-router-dom";


function StoryPopup() {

  const stories = {
    dispersal: {
      image: Img,
      title: "THE DISPERSAL SONG",
      subtitle: "A Sacred Tale of the Nduwei, People of the Living Waters",
      description: [
        `Sit.
       Not too close to the fire, not too far from the dark.
       There.
        Now listen… for what I will tell you is not just a tale. It is a wound- a wound with a voice.
  
       Long ago, before maps dared name us, we were the Nduwei - the People of the Living Waters.
       And when the sea threatened to swallow our names, one voice stood firm. Not a man,
       `,
      ],
      story: [
        `THE DISPERSAL SONG
  
  A Sacred Tale of the Nduwei, People of the Living Waters
  
  Sit.
  Not too close to the fire, not too far from the dark.
  There.
  Now listen… for what I will tell you is not just a tale. It is a wound- a wound with a voice.
  
  Long ago, before maps dared name us, we were the Nduwei - the People of the Living Waters.
  And when the sea threatened to swallow our names, one voice stood firm. Not a man, not a god—but something between.
  
  His name was Tuburu-Owei:“The Spirit Who Keeps What Must Not Be Forgotten.”
  
   The Song Born
  Tuburu-Owei was born in the tide season, when moonlight turns the mangroves silver and the frogs forget to croak.
  He came out in silence—but not for lack of breath. No. His first sound was not a cry but a low and full humming like a drum beneath the earth. His mother, Beni-Amatu, called him "my son of echoes."
  
  By the time he could walk, he remembered things no one had taught him:
  
  The names of fallen warriors,
  
  The sea route of the first canoe,
  
  The secret songs of the river crabs.
  
  The elders whispered, “He is not a child. He is a vessel.”
  
  The River's Warning
  The tides turned cruel.
  Fish swam in circles. Saltwater invaded yam fields.
  Children dreamed of drowning while dry.
  
  The great ones gathered at the foot of the Ujo-Kiri baobab:
  
  Ibifa, the shell-reader
  
  Ama-Teni, the midwife who sang in three tongues
  
  Kobaro, the proverb-seer
  
  They summoned the spirits, and the answer came clear as thunder:
  
  “The land grows tired. The people must scatter.
  Let memory become a canoe. Let song become a compass.”
  
  The elders prepared for the migration. They packed drums in oilskin. Bound children in raffia.
  All would leave—all but one.
  
  The Refusal
  Tuburu-Owei stood by the tide rock, his eyes like deepwater.
  He spoke:
  
  “I will not go.
  If the tree forgets its root, it dies.
  I will remain in the soil of our beginning.
  I will hold the thread.”
  
  His sister Zowei, no older than the moon, wept.
  “Brother, who will remember you if you are gone?”
  
  He placed her palm over his heart.
  
  “When the wind hums and the fire flickers sideways, I will be there.”
  
  The River Spirit 
  That night, as the village slept in half-packed silence, Tuburu-Owei walked alone into the spirit-swamp, where the air was thick with mosquito and memory. But he did not go seeking peace—he went seeking truth.
  
  There, in the heart of the mangroves where even fireflies did not dare to shine, he met Toburu-Owei, the god whose name he bore—the spirit of Sacred Remembrance, veiled in seaweed, crowned in silence.
  
  The spirit emerged from the black water, clothed in vines and weeping shells, with three mouths—one to speak the past, one the present, and one forever sealed.
  
  “Child of chants,” the spirit said, like dripping stone, “why do you stay when your people flee?”
  
  Tuburu-Owei knelt, pressing his palm to the mud.
  
  “Because it is not the land that betrayed us.
  It is we who betrayed the land.”
  
  He spoke of secrets sold for power, of sacred oaths broken in the council of elders.
  He told of fishermen who poisoned creeks to outcatch their brothers.
  Of daughters sold to strangers in exchange for hollow wealth.
  Of tongues sharpened not for truth, but for envy.
  He told of the deep, deadly silence that followed every wrong.
  
  The spirit sighed, and the tide around them hissed.
  
  “Yes,” Toburu-Owei said.
  “The sea turned because your hearts did.
  The river recoiled not from time—but from treachery.”
  
  Then the god unsealed the third mouth, the one that had remained closed since the time before time.
  
  From it came a single sound—low, deep, older than language. It shivered Tuburu-Owei’s bones.
  
  “This is the cost of forgetting. The cost of betrayal.”
  
  “But still,” the spirit said, “not all are lost. One must remember. One must carry the root, even if the branches burn.”
  
  He held out the Gourd of Echoes, a smooth calabash bound in black rope, pulsing with faint whispers.
  
  “Take this. It holds the names, the songs, the shame.
  Guard it with your life. Speak when others fall silent.
  You are no longer just a griot.
  You are the soul that bears the wound.”
  
  And with that, the spirit sank back into the water, leaving Tuburu-Owei alone, gourd in hand, sorrow in heart, memory flooding his bones like tidewater.
  
  The Song That Would Not Die
  The Nduwei left at dawn. Canoes slid into the fog.
  Only Tuburu-Owei remained.
  
  Alone, he drummed the names.
  He fed the memory fires.
  He carved the ancestor chants into driftwood and fed them to the sea.
  
  Then, came the storm.
  
  Lightning devoured the shrine.
  The river rose, wrathful.
  But atop the sacred rock, Tuburu-Owei raised his gourd and sang:
  
  “I am the drum beneath your boat.
  I am the name behind your tongue.
  I am the story that salt will not erase!”
  
  And when the waves took him, he did not scream. He sang.
  
   The Listening
  
  To this day, when wind passes through hollow wood,
  When a child sings a song no one taught them,
  When an old woman gasps at a dream full of names she never knew—
  
  That is Tuburu-Owei.
  He is the spirit in the tide.
  The breath behind the griot.
  The keeper of your forgotten blood.
  For when you forget who you are,
  He will come singing.
  
  “I am the one who stayed.
  
  I am the one who remembers.”
       `,
      ],
    },
    dawn: {
      image: Img2,
      title: "AT DAWN, THE ANTELOPE KNOWS",
      subtitle: "A short poem",
      description: [
        `When the baobab cradles the stars,
        And watches over the savanna in silence,
        When drums lie quiet in ancestral clay-
        Waterpot drums sealed with yesterday
        The antelope stirs from  sleep,
        Its steps ,guided, `,
      ],
      story: [
        `At Dawn, the Antelope Knows….
  
  When the baobab cradles the stars,
  And watches over the savanna in silence,
  When drums lie quiet in ancestral clay-
  Waterpot drums sealed with yesterday
  The antelope stirs from  sleep,
  Its steps ,guided, its path runs deep.
  
  As the morning breeze moves slow through grass and dew
  Whispering truths the elders knew
  The antelope leaps not just to flee or roam
  But to chase the dreams that beckon to it 
  No reckless stride through morning mist
  Each hoofbeat chants an ancient nugget:
  “The one who wakes with the song of the old
  Will not stray where the shadows unfold.”
  
  So let your week rise wrapped in grace
  A sacred journey, not a race.
  With vision clear and spirit strong
  Run-yes, run
  but run with a song.
  -- - - 
  
  A special note to you:
  And may every step you take 
  Lead you closer to joy, honor, and fulfillment.`,
      ],
    },
    stare: {
      image: Img3,
      title: "WHAT IS IN A MAN'S STARE?",
      subtitle: "A short poem",
      description: [
        `In his stare:                                          
       The storms he survived, the battles he never named.                
       But look again...                                      
       It is not always defiance.                    
       It is restraint. It is ache folded into silence, and courage carved into bone.`,
      ],
      story: [
        // ... story text omitted for brevity
        `What Is in a Man’s Stare?                   
  In his stare:                                          
  The storms he survived, the battles he never named.                
  But look again...                                      
  It is not always defiance.                    
  It is restraint. It is ache folded into silence, and courage carved into bone.                                                          
  
  In a man’s stare is fire— 
  Not the kind that rages, but the kind that smolders so the roof does not fall. 
  It holds the apology he never learned to say, the dreams he buried beneath duty, the fears he carried for others, so they wouldn’t have to know. 
  
  So when a man stares, he is not always asking to be understood.                 
  He is asking: Can I be still and strong at once? Can I weep without drowning everything I built?        
  That is what is in a man’s stare.`,
      ],
    },
  };  

  const location = useLocation();
  const navigate = useNavigate();
  const { storyKey } = location.state || {};
  const story = stories[storyKey];

  // Custom hook to hide image on scroll in popup
  // eslint-disable-next-line no-unused-vars
  const [showPopupImage, setShowPopupImage] = React.useState(true);

  React.useEffect(() => {
    setShowPopupImage(true); // Reset when opening

    const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop;
      if (scrollTop > 40) {
        setShowPopupImage(false);
      } else {
        setShowPopupImage(true);
      }
    };

    const popupContent = document.getElementById("popup-story-content");
    // Remove scroll event logic since this is now a full page, not a popup
    return () => {
      if (popupContent) {
        popupContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  if (!story) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div>
          <p>Story not found.</p>
          <button
            className="bg-blue-600 text-white rounded px-4 py-2 mt-4"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // This popup will show details from the Otherbooks.jsx component.
  // You can pass the relevant book data via location.state or props.

  return (
    <div className="flex flex-col items-center bg-black min-h-screen p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl p-6 mt-8 mb-8 animate-fade-in relative">
        {/* Back button in top-left */}
        <Link to="/">
          <button className="absolute bottom-0 right-0 lg:-left-26 text-white hover:text-blue-700 font-semibold flex items-center gap-1 p-3 bg-[#E02B20] ">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back
          </button>
        </Link>
        {/* Story image */}
        {story.image && (
          <img
            src={story.image}
            alt={story.title}
            className="w-full max-h-80 object-cover rounded-md mb-6"
          />
        )}
        <h1 className="font-serif text-2xl md:text-3xl text-gray-900 mb-1">
          {story.title}
        </h1>
        <p className="italic text-gray-500 mb-4">{story.subtitle}</p>
        <div
          id="popup-story-content"
          className="text-gray-800 whitespace-pre-line leading-relaxed"
          style={{
            fontSize: "1.1rem",
          }}
        >
          {story.story}
        </div>
      </div>
    </div>
  );
}

export default StoryPopup;