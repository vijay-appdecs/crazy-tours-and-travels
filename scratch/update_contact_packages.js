const fs = require('fs');
let content = fs.readFileSync('contact.html', 'utf8');

const oldBlock = /<label class="wf-form-label" for="contact-dest">Where to\?<\/label>[\s\S]*?<\/select>/;

const newBlock = `<label class="wf-form-label" for="contact-dest">Select Package / Destination</label>
            <select id="contact-dest" class="wf-form-select">
              <option value="custom">Custom Trip / Not Sure Yet</option>
              <optgroup label="Kerala Packages">
                <option value="kerala-honeymoon-4d3n">Kerala Honeymoon Package (4D/3N)</option>
                <option value="kerala-honeymoon-5d4n">Kerala Deluxe Honeymoon Package (5D/4N)</option>
                <option value="kerala-jatayu-honeymoon-6d5n">Kerala Couple & Jatayu Package (6D/5N)</option>
                <option value="kerala-varkala-honeymoon-6d5n">Kerala & Varkala Cliff Honeymoon (6D/5N)</option>
                <option value="kerala-bachelor-4d3n">Kerala Bachelor Group Tour (4D/3N)</option>
              </optgroup>
              <optgroup label="Kullu-Manali & Kasol Packages">
                <option value="manali-family-3d2n">Kullu-Manali Family Special (3D/2N)</option>
                <option value="manali-honeymoon-3d2n">Kullu-Manali Honeymoon Package (3D/2N)</option>
                <option value="kasol-manali-camping-4d3n">Kasol & Manali Riverside Camping (4D/3N)</option>
                <option value="manali-family-snow-5d4n">Manali Family Snow & Solang Valley (5D/4N)</option>
                <option value="manali-adventure-escape-5d4n">Manali Adventure & Rohtang Pass (5D/4N)</option>
                <option value="manali-bachelors-3d2n">Manali Bachelors Group Package (3D/2N)</option>
              </optgroup>
              <optgroup label="Kashmir Packages">
                <option value="kashmir-romantic-couple-4d3n">Kashmir Romantic Couple & Honeymoon (4D/3N)</option>
                <option value="kashmir-winter-group-4d3n">Kashmir Valley Group Expedition (4D/3N)</option>
                <option value="kashmir-sonmarg-couple-5d4n">Kashmir Grand Sonmarg Expedition (5D/4N)</option>
                <option value="kashmir-paradise">Kashmir Paradise: Srinagar, Gulmarg & Pahalgam (6D/5N)</option>
              </optgroup>
              <optgroup label="Goa Packages">
                <option value="goa-romantic-honeymoon-4d3n">Goa Luxury Romantic Honeymoon (4D/3N)</option>
                <option value="goa-bachelors-party-4d3n">Goa Bachelors Beach & Nightlife Bash (4D/3N)</option>
                <option value="goa-grand-family-heritage-5d4n">Goa Grand Heritage & Waterfalls (5D/4N)</option>
                <option value="goa-south-goa-serenity-4d3n">South Goa Serenity & Beach Resort (4D/3N)</option>
              </optgroup>
              <optgroup label="Ladakh Packages">
                <option value="ladakh-high-pass-odyssey-7d6n">Ladakh High Pass Odyssey: Nubra & Pangong (7D/6N)</option>
              </optgroup>
            </select>`;

content = content.replace(oldBlock, newBlock);
fs.writeFileSync('contact.html', content, 'utf8');
console.log('Contact packages updated successfully!');
console.log('Contains Italy:', content.includes('Italy'));
console.log('Contains Kerala Honeymoon:', content.includes('Kerala Honeymoon'));
