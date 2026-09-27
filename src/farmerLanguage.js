import { createContext, useContext } from 'react';

// Only the Farmer Portal provides this context; other workspaces keep their current copy.
export const FarmerLanguage = createContext('en');
const pairs = `
Skip to content|मुख्य भागाकडे जा
Page language|पानाची भाषा
Sign out|बाहेर पडा
Listen|ऐका
Stop|थांबवा
Home|मुख्य पान
Demo|नमुना
Crop photo|पिकाचा फोटो
Take a photo. Get a helping hand.|फोटो काढा. मदत मिळवा.
Weather|हवामान
Plan your day|दिवसाचे नियोजन करा
My fields|माझी शेती
Fields & reports|शेती आणि अहवाल
Ask for help|मदत घ्या
Krishi Mitra|कृषी मित्र
YOUR FARM. YOUR WAY.|तुमची शेती. तुमच्या सोयीने.
A little care.|थोडी काळजी.
A better harvest.|चांगले पीक.
Welcome, Ramesh. What would you like to do?|नमस्कार रमेश. काय करायचे आहे?
Jalgaon, Maharashtra|जळगाव, महाराष्ट्र
Farm actions|शेतीची कामे
Demo farm · Saved on this device|नमुना शेती · या साधनावर जतन
Grow with confidence.|विश्वासाने शेती करा.
Dismiss notification|सूचना बंद करा
Storage is full. Changes are saved for this session only.|जागा भरली आहे. बदल फक्त आत्ताच्या सत्रात जतन होतील.
Listening is unavailable on this device.|या साधनावर वाचून ऐकवण्याची सुविधा नाही.
This voice is unavailable. Try another device voice.|हा आवाज उपलब्ध नाही. साधनावरील दुसरा आवाज वापरा.
All caught up|सर्व पाहून झाले
No cases in this view.|येथे नोंदी नाहीत.
Not assessed|अजून तपासले नाही
acres|एकर
acres ·|एकर ·
Day|दिवस
· Day|· दिवस
Crop scanner|पिकाचा फोटो
A clear photo is the first step toward understanding your crop.|पिकाचा स्पष्ट फोटो जोडा.
New crop observation|नवीन फोटो
JPG, PNG or WebP · Up to 8 MB|JPG, PNG किंवा WebP · ८ MB पर्यंत
Choose a field|शेत निवडा
Selected crop observation|निवडलेला पिकाचा फोटो
Add a photo of your crop|पिकाचा फोटो जोडा
Drag it here, or choose a file|इथे टॅप करून फोटो निवडा
Choose crop photo|पिकाचा फोटो निवडा
KB|KB
Use the local backend for image validation|जोडलेल्या सेवेत फोटो तपासा
Demonstration mode: images are recorded for review. No disease diagnosis is generated.|नमुना: फोटो तपासणीसाठी जतन होतो. रोगाचे निदान होत नाही.
Validating image…|फोटो तपासत आहे…
Observation saved|नोंद जतन झाली
Save & request review|जतन करा आणि तपासणी मागा
Observation received|फोटो मिळाला
Saved|जतन झाले
Your field officer has a new case.|अधिकाऱ्याच्या यादीत नोंद जोडली.
Awaiting human review|तज्ज्ञांच्या तपासणीची प्रतीक्षा
A better photo, a better starting point|चांगला फोटो कसा काढावा?
Get close to the affected area|बाधित भागाचा जवळून फोटो काढा
Keep the leaf or crop in focus, with the full affected area visible.|बाधित पान पूर्ण आणि स्पष्ट दिसू द्या.
Use natural light|दिवसाच्या प्रकाशात फोटो काढा
Avoid shadows, glare, and heavy filters.|सावली आणि चकाकी टाळा.
Capture the context|पिकाची माहिती नोंदवा
Note the field, crop stage, and when symptoms appeared.|शेत, पिकाची अवस्था आणि लक्षणे कधी दिसली ते नोंदवा.
Human judgment matters.|तज्ज्ञांचा सल्ला घ्या.
A photograph alone cannot establish a diagnosis. Consult a qualified local agronomist before choosing a treatment.|फक्त फोटोवरून निदान होत नाही. उपचाराआधी स्थानिक कृषितज्ज्ञांचा सल्ला घ्या.
Risk & weather|धोका आणि हवामान
Field-specific context and a three-day weather outlook.|तुमच्या शेतासाठी तीन दिवसांचा अंदाज.
Refreshing…|अंदाज आणत आहे…
Refresh sample forecast|नमुना अंदाज पुन्हा पाहा
Your field|तुमचे शेत
Illustrative forecast · Not live weather|नमुना अंदाज · सध्याचे हवामान नाही
Wet conditions need a closer look.|जास्त ओलावा आहे. शेत तपासा.
Keep an eye on changing conditions.|बदलत्या हवामानावर लक्ष ठेवा.
A good time for a routine field check.|शेताची नियमित पाहणी करा.
Start with a field observation.|शेताची पाहणी करून सुरुवात करा.
This newly added field has no risk assessment yet. Add an observation to begin a review.|या शेताची तपासणी झालेली नाही. सुरुवातीला फोटो जोडा.
Three-day outlook|तीन दिवसांचा अंदाज
Jalgaon district · Demonstration data|जळगाव जिल्हा · नमुना माहिती
rain|पाऊस
humidity|आर्द्रता
Today|आज
Tomorrow|उद्या
Day 3|तिसरा दिवस
Your next steps|पुढे काय करावे?
Observe first, then decide|आधी पाहणी करा
Check for standing water and drainage issues.|साचलेले पाणी आणि निचरा तपासा.
Look at both sides of affected leaves.|पानाच्या दोन्ही बाजू पाहा.
Record where and when symptoms appeared.|लक्षणे कधी आणि कुठे दिसली ते नोंदवा.
Discuss treatment with a qualified local expert.|उपचारासाठी कृषितज्ज्ञांना विचारा.
Record an observation|फोटो नोंदवा
Ask Krishi Mitra|कृषी मित्राला विचारा
Download to share|अहवाल डाउनलोड करा
My fields & reports|माझी शेती आणि अहवाल
Add a field|शेत जोडा
Search fields or crops|शेत किंवा पीक शोधा
Export reports|अहवाल डाउनलोड करा
No matching fields|शेत सापडले नाही
Try another field name or crop.|दुसरे शेत किंवा पीक शोधा.
Your observation log|तुमच्या नोंदी
Crop observations and their latest review status|पिकाच्या नोंदी आणि तपासणीची स्थिती
Digital field log|शेताच्या नोंदी
Review notes:|तपासणीचा सल्ला:
No observations yet. Add a photo in Crop scanner to start this field’s record.|अजून नोंदी नाहीत. पिकाचा फोटो जोडा.
Field name|शेताचे नाव
e.g. South orchard|उदा. दक्षिणेकडची बाग
Crop|पीक
Soybean|सोयाबीन
Cotton|कापूस
Wheat|गहू
Maize|मका
Other|इतर
Area (acres)|क्षेत्रफळ (एकर)
Growth stage|पिकाची अवस्था
Seedling|रोप अवस्था
Vegetative|वाढीची अवस्था
Flowering|फुलोरा
Fruiting|फळधारणा
Boll formation|बोंड धरणे
Ready to harvest|काढणीस तयार
Days since sowing|पेरणीनंतरचे दिवस
Add field|शेत जोडा
Find your next step, or prepare a question for a local expert.|विचारा. पुढचे पाऊल समजून घ्या.
Krishi Mitra views|कृषी मित्राचे पर्याय
My conversations|माझे प्रश्न
Local experts|स्थानिक तज्ज्ञ
Your field companion|तुमचा शेतीमित्र
Local demo guide · Rule-based responses|नमुना मार्गदर्शन · ठरावीक उत्तरे
Search conversations|प्रश्न शोधा
You|तुम्ही
Krishi Mitra · Demo guide|कृषी मित्र · नमुना मार्गदर्शक
No matching conversations|प्रश्न सापडले नाहीत
Try a different phrase.|वेगळे शब्द वापरा.
Ask about your fields, reports, or next steps…|तुमचा प्रश्न लिहा किंवा बोला…
Your question|तुमचा प्रश्न
Send|पाठवा
Your local support network|तुमच्या भागातील मदत
Sample expert profiles|तज्ज्ञांची नमुना माहिती
Suresh Kulkarni|सुरेश कुलकर्णी
Kisan Mitra · Crop observations & field support|किसान मित्र · पीक आणि शेतीसाठी मदत
Community support|शेतीसाठी मदत
Prepare a question with your crop and field details. Requests are saved locally in this demonstration.|शेत आणि पिकाची माहिती लिहा. नमुना विनंती या साधनावर जतन होईल.
Prepare an expert request|तज्ज्ञांसाठी प्रश्न लिहा
· Saved locally|· या साधनावर जतन
From the community|इतर शेतकऱ्यांचे प्रश्न
A sample conversation|नमुना प्रश्न
What should I capture when leaves change color?|पानांचा रंग बदलल्यास कोणता फोटो काढावा?
Photograph the whole plant and a close-up of the affected leaf. Note whether symptoms started on older or newer growth and when you first noticed them.|पूर्ण रोपाचा आणि बाधित पानाचा जवळून फोटो काढा. लक्षणे जुन्या की नवीन पानांवर दिसली आणि कधी दिसली ते नोंदवा.
Clear observations help an agronomist choose the right next question.|स्पष्ट माहितीमुळे तज्ज्ञांना मदत करता येते.
Crop, field, symptoms, and when they started…|पीक, शेत, लक्षणे आणि ती कधी दिसली…
This prepares a local request. It does not contact the expert.|विनंती या साधनावर जतन होईल. तज्ज्ञांना पाठवली जाणार नाही.
Save request|विनंती जतन करा
Start voice input|बोलायला सुरुवात करा
Stop voice input|बोलणे थांबवा
Close dialog|बंद करा
High|जास्त
Moderate|मध्यम
Low|कमी
Unknown|माहीत नाही
pending|प्रतीक्षेत
escalated|तज्ज्ञांकडे
verified|तपासलेले
resolved|पूर्ण
North field|उत्तरेकडचे शेत
Riverside plot|नदीकाठचे शेत
East meadow|पूर्वेकडचे शेत
Photo tips|फोटोसाठी सूचना
More options|आणखी पर्याय
Take photo|फोटो काढा
Choose photo|फोटो निवडा
Check local conditions before making a decision.|निर्णय घेण्याआधी स्थानिक परिस्थिती तपासा.
Your fields, in one place.|तुमच्या शेतीची माहिती एकाच ठिकाणी.
Image recorded for review|तपासणीसाठी फोटो जतन
This demo does not identify crop diseases. An expert review is required before taking treatment decisions.|या नमुन्यात रोगाचे निदान होत नाही. उपचाराआधी तज्ज्ञांकडून तपासणी करून घ्या.
Leaf discoloration — sample case|पानाचा रंग बदलला — नमुना नोंद
Routine field check|शेताची नियमित पाहणी
Sample record|नमुना नोंद
Choose a JPG, PNG, or WebP image.|JPG, PNG किंवा WebP फोटो निवडा.
Choose an image smaller than 8 MB.|८ MB पेक्षा लहान फोटो निवडा.
This image could not be opened. Please choose another photo.|हा फोटो उघडला नाही. दुसरा फोटो निवडा.
Observation saved and added to the field officer’s review queue.|नोंद जतन झाली आणि अधिकाऱ्याच्या तपासणी यादीत जोडली.
Your field has been added. Record an observation to begin its history.|शेत जोडले. आता पिकाचा फोटो नोंदवा.
Expert request saved locally. No message has been sent.|विनंती या साधनावर जतन झाली. संदेश पाठवलेला नाही.
Voice input is unavailable in this browser. You can type your question instead.|या ब्राउझरमध्ये बोलून प्रश्न विचारता येत नाही. प्रश्न लिहा.
Voice input could not start. You can type your question instead.|मायक्रोफोन सुरू झाला नाही. प्रश्न लिहा.
Demonstration forecast refreshed from the local service.|नमुना अंदाज पुन्हा आणला.
The local service is unavailable. Showing the clearly labeled sample forecast.|सेवा उपलब्ध नाही. नमुना अंदाज दाखवत आहोत.
Sample summary downloaded. You can share it with your village.|नमुना अहवाल डाउनलोड झाला. तुम्ही इतरांना दाखवू शकता.
Welcome to Krishi Mitra. I can help you navigate this demonstration, prepare a field observation, or request a local expert review. What would you like to do?|कृषी मित्रात स्वागत. फोटो नोंदवण्यासाठी किंवा तज्ज्ञांसाठी प्रश्न लिहिण्यास मदत करू शकतो. काय करायचे आहे?
Record the crop, field, growth stage, and when the symptoms started. You can upload a clear photo in Crop scanner and request a local expert review. This demo guide cannot diagnose a disease or recommend a chemical treatment.|पीक, शेत, पिकाची अवस्था आणि लक्षणे कधी दिसली ते नोंदवा. पिकाचा स्पष्ट फोटो जोडून तपासणी मागा. या नमुना मार्गदर्शकातून रोगाचे निदान किंवा औषधांचा सल्ला मिळत नाही.
Open Risk & weather to compare the sample three-day forecast for each field. The weather shown is demonstration data; check a local weather source before planning field work.|हवामान विभागात तीन दिवसांचा नमुना अंदाज पाहा. शेतातील कामाचे नियोजन करण्याआधी स्थानिक हवामान तपासा.
Open Crop scanner, choose the relevant field, and add a clear JPG, PNG, or WebP photo up to 8 MB. Save it to create a review case for the field officer.|पिकाचा फोटो विभाग उघडा. शेत निवडा आणि ८ MB पर्यंतचा स्पष्ट फोटो जोडा. जतन केल्यावर अधिकाऱ्यासाठी तपासणी नोंद तयार होईल.
My fields & reports holds your field list and observation history. Add a field there, open a field to see its log, or export the report as a file.|माझी शेती विभागात शेते आणि जुन्या नोंदी पाहा. नवीन शेत जोडा, नोंदी उघडा किंवा अहवाल डाउनलोड करा.
`;
export const marathi = Object.fromEntries(pairs.trim().split('\n').map(line => line.split('|')));
export function translate(value, language) {
  if (language !== 'mr' || typeof value !== 'string') return value;
  if (marathi[value]) return marathi[value];
  const risk = value.match(/^(High|Moderate|Low) risk( · [Ss]ample)?$/);
  if (risk) return `${marathi[risk[1]]} धोका${risk[2] ? ' · नमुना' : ''}`;
  return value;
}
export function useFarmerText() { const language = useContext(FarmerLanguage); return value => translate(value, language); }
