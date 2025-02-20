function selectHerb(herb) {
        // Only populate the input field, don't generate recipe
            document.getElementById('herbInput').value = herb;
}
 function generateRecipe() {
           const herb = document.getElementById('herbInput').value.toLowerCase();
           const resultDiv = document.getElementById('recipeResult');
       
           if (!herb || !recipes[herb]) {
               resultDiv.innerHTML = `<p>Please select one of the suggested herbs or enter a valid herb name.</p>`;
               resultDiv.style.display = 'block';
               return;
           }
       
           const recipe = recipes[herb];
           resultDiv.innerHTML = `
              
       
               <h2>${recipe.title}</h2>
                  <div style="width: 200px; height: 200px; overflow: hidden; border-radius: 10px; flex-shrink: 0;">
               <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                
               <h3>Ingredients:</h3>
               <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
               <h3>Instructions:</h3>
               <ul>${recipe.instructions.map(i => `<li>${i}</li>`).join('')}</ul>
               <div class="benefits">
                   <strong>Health Benefits:</strong> ${recipe.benefits}
               </div>
               <div class="disclaimer" style="color: red; font-weight: bold; font-size: 14px; margin: 10px 0; padding: 5px; background-color: #ffe6e6; border: 1px solid red; border-radius: 5px; text-align: center;">
                   Disclaimer: Please consult a BAMS doctor before consuming prescribed medicine.
               </div>
                
           `;
       
           resultDiv.style.display = 'block';
}
    

const recipes = {
    'neem' : {
        title: 'Neem Detox Drink',
        image:'https://static.toiimg.com/photo/68670559.cms',
        ingredients: ['10-15 neem leaves', '1 liter water', '1 tsp honey (optional)'],
        instructions: ['Boil neem leaves in water for 10 minutes', 'Strain and let it cool', 'Drink 50ml every morning'],
        benefits: 'Purifies blood, boosts immunity, and improves skin health'
    },
    'turmeric': {
        title: 'Golden Healing Paste',
        image:'https://lloydspharmacy.com/cdn/shop/articles/Turmeric.jpg?height=430&v=1624027015',
        ingredients: ['1/2 cup turmeric powder', '1/2 cup water', '1 tsp black pepper', '1/4 cup coconut oil'],
        instructions: ['Mix turmeric and water in pan', 'Cook on low heat for 7-8 minutes', 'Add black pepper and coconut oil', 'Store in glass jar'],
        benefits: 'Anti-inflammatory, wound healing, and arthritis relief'
    },
    'ginger': {
        title: 'Ginger Digestive Tonic',
        image:'https://i.herbalreality.com/wp-content/uploads/2020/12/21125509/Ginger-roots-plant-1200x960.jpg',
        ingredients: ['1 cup fresh ginger', '2 cups water', '1 lemon juice', '1 tsp honey'],
        instructions: ['Boil sliced ginger in water for 15 mins', 'Strain and add lemon juice', 'Add honey before drinking'],
        benefits: 'Aids digestion, reduces nausea, and fights cold'
    },
    'black pepper': {
        title: 'Pepper Immunity Booster',
        image:'https://th.bing.com/th/id/OIP.xgTOBjcGhi9X7x6oQvcg3wHaE6?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 tsp black pepper powder', '1 tsp honey', '1 cup warm water'],
        instructions: ['Mix pepper powder in warm water', 'Add honey and stir well', 'Drink every morning'],
        benefits: 'Improves metabolism, enhances nutrient absorption'
    },
    'amla': {
        title: 'Amla Rejuvenation Mix',
        image:'https://www.healthifyme.com/blog/wp-content/uploads/2021/11/Amla.jpg',
        ingredients: ['2 fresh amla', '1 cup water', '1/2 tsp cumin powder'],
        instructions: ['Blend amla with water', 'Strain and add cumin powder', 'Drink on empty stomach'],
        benefits: 'Rich in Vitamin C, hair health, and anti-aging'
    },
    'aloe vera': {
        title: 'Aloe Vera Skin Gel',
        image:'https://th.bing.com/th/id/OIP.pTjZmNTL0ojuBHcez8z1XAHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 large aloe vera leaf', '5 drops tea tree oil', '1 tsp vitamin E oil'],
        instructions: ['Extract gel from aloe leaf', 'Mix with oils', 'Store in refrigerator'],
        benefits: 'Soothes burns, moisturizes skin, reduces acne'
    },
    'holy basil': {
        title: 'Holy Basil Immunity Tea',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['10 fresh holy basil leaves', '1 cup water', '1 tsp honey'],
        instructions: ['Boil leaves in water for 5 minutes', 'Strain and add honey', 'Drink twice daily'],
        benefits: 'Boosts immunity, reduces stress, respiratory support'
    },
    'lavender': {
        title: 'Lavender Relaxation Blend',
        image:'https://th.bing.com/th/id/OIP.iRtssbpJtmjFYmNDWQW9OgHaFj?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',

        ingredients: ['2 tbsp dried lavender flowers', '1 cup coconut oil', '10 drops lavender essential oil'],
        instructions: ['Infuse flowers in warm coconut oil for 2 hours', 'Strain and add essential oil', 'Use for massage or aromatherapy'],
        benefits: 'Reduces anxiety, promotes sleep, skin nourishment'
    },
    'cardamom': {
        title: 'Cardamom Digestive Aid',
        image:'https://th.bing.com/th/id/OIP.u3DPiQts-PIMBqODQ7-yeQHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['5 cardamom pods', '1 cup water', '1/2 tsp fennel seeds'],
        instructions: ['Crush cardamom pods and boil with water', 'Add fennel seeds and steep for 5 minutes', 'Strain and drink after meals'],
        benefits: 'Aids digestion, freshens breath, improves metabolism'
    },
    'black cumin': {
        title: 'Black Cumin Immunity Oil',
        image:'https://th.bing.com/th/id/OIP.iD12UH5Qbt3uNYp4qnTm9gHaE7?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1/4 cup black cumin seeds', '1 cup olive oil'],
        instructions: ['Lightly toast cumin seeds', 'Infuse in olive oil for 48 hours', 'Strain and store in dark bottle'],
        benefits: 'Boosts immunity, anti-inflammatory, respiratory health'
    },
    'ashwagandha': {
        title: 'Ashwagandha Energy Powder',
        image:'https://www.liveayurved.com/images/medicinal-plants/ashwagandha.jpg',
        ingredients: ['100g ashwagandha root powder', '1 tsp cinnamon', '1/2 tsp nutmeg'],
        instructions: ['Mix all powders thoroughly', 'Store in airtight container', 'Take 1/2 tsp with milk daily'],
        benefits: 'Reduces stress, increases energy, improves cognitive function'
    },
    'garlic': {
        title: 'Garlic Immunity Syrup',
        image:'https://th.bing.com/th/id/OIP.dQ7oBkXYd_yLeaHV1mN0SwHaGH?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['10 garlic cloves', '1 cup honey', '1 lemon (juiced)'],
        instructions: ['Crush garlic and mix with honey', 'Add lemon juice and let sit for 24 hours', 'Take 1 tsp daily'],
        benefits: 'Fights infections, lowers cholesterol, antioxidant rich'
    },
    'peppermint': {
        title: 'Peppermint Digestive Tea',
        image:'https://th.bing.com/th/id/OIP.8lPmzMB8dKozAlDflHaLvAHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 tbsp fresh peppermint leaves', '1 cup boiling water', '1 tsp honey'],
        instructions: ['Steep leaves in hot water for 5-7 minutes', 'Strain and add honey', 'Drink after meals'],
        benefits: 'Soothes stomach, relieves headaches, reduces nausea'
    },
    'cinnamon': {
        title: 'Cinnamon Blood Sugar Control',
        image:'https://th.bing.com/th/id/OIP.0o84407rUfhcbFPVLytXVAHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 cinnamon stick', '1 cup hot water', '1/2 tsp turmeric'],
        instructions: ['Steep cinnamon in hot water for 10 minutes', 'Add turmeric and mix well', 'Drink every morning'],
        benefits: 'Regulates blood sugar, anti-inflammatory, improves circulation'
    },
    'licorice': {
         title: 'Licorice Throat Soother',
         image:'https://th.bing.com/th/id/OIP.S_u-9RplyVhC_Kx8NUExwwHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
         instructions: ['Mix licorice powder in warm water', 'Add ghee and stir well', 'Gargle 2-3 times daily'],
         ingredients: ['1 tsp licorice root powder', '1 cup warm water', '1 tsp ghee'],
         benefits: 'Soothes sore throat, reduces acidity, adrenal support'
    },
    'brahmi': {
        title: 'Brahmi Memory Tonic',
        image:'https://www.liveayurved.com/images/medicinal-plants/brahmi.jpg',
        ingredients: ['5 fresh brahmi leaves', '1/2 cup yogurt', '1 tsp honey'],
        instructions: ['Blend leaves with yogurt', 'Strain and add honey', 'Consume every morning'],
        benefits: 'Improves memory, reduces anxiety, enhances cognitive function'
    },
    'pigeon pea': {
        title: 'Pigeon Pea Immunity Tonic',
        image:'https://th.bing.com/th/id/OIP.snbPz_1dJU72t4fP5VGnlQHaE8?w=221&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 cup pigeon pea leaves', '2 cups water', '1 teaspoon honey'],
         instructions: [
            'Boil the leaves in water for 10 minutes',
            'Strain and mix with honey',
            'Drink warm'
            ],
            benefits: 'Boosts immunity and aids digestion'
    },
    'agaru': {
        title: 'Agarwood Respiratory Drink',
        image:'https://www.liveayurved.com/images/medicinal-plants/agar.jpg',
        ingredients: ['1 teaspoon agarwood powder', '1 cup warm water', '1 teaspoon honey'],
        instructions: ['Mix agarwood powder in warm water','Add honey and consume once daily'],
        benefits: 'Used for respiratory issues and stress relief'
    },
    'aklari': {
        title: 'Lodoicea Energy Booster',
        image:'https://c7.alamy.com/comp/B0YY8R/coco-de-mer-lodoicea-maldivica-in-the-seychelles-B0YY8R.jpg',
        ingredients: ['1 tablespoon Lodoicea maldivica seed powder', '1 glass warm milk'],
        instructions: [
            'Mix seed powder in warm milk',
            'Drink before bedtime'
        ],
        benefits: 'Enhances stamina and energy levels'
    },
    'aparajita': {
        title: 'Butterfly Pea Brain Tonic',
        image:'https://www.liveayurved.com/images/medicinal-plants/aparajita.jpg',
        ingredients: ['10 blue butterfly pea flowers', '2 cups water', '1 teaspoon lemon juice'],
        instructions: [
            'Boil flowers in water for 5 minutes',
            'Strain, add lemon juice, and drink'
        ],
        benefits: 'Improves brain function and reduces anxiety'
    },
    'atmagupta': {
        title: 'Mucuna Nervous System Support',
        image:'https://i.etsystatic.com/22413233/r/il/323fb3/4069368040/il_1080xN.4069368040_2ebn.jpg',
        ingredients: ['1 teaspoon mucuna seed powder', '1 glass warm milk'],
        instructions: [
            'Mix seed powder in warm milk',
            'Drink daily'
        ],
        benefits: 'Supports nervous system health'
    },
    'bilva': {
        title: 'Bael Digestive Drink',
        image:'https://www.liveayurved.com/images/medicinal-plants/bilva.jpg',
        ingredients: ['1 ripe bael fruit', '1 cup water', '1 teaspoon honey'],
        instructions: [
            'Mash bael fruit',
            'Mix with water, strain, add honey, and drink'
        ],
        benefits: 'Aids digestion and treats diarrhea'
    },
    'campaka': {
        title: 'Champak Skin & Relaxation Infusion',
        image:'https://www.liveayurved.com/images/medicinal-plants/champaka.jpg',
        ingredients: ['5 champak flowers', '2 cups water'],
        instructions: [
            'Boil flowers in water for 10 minutes',
            'Strain and use as a face wash or drink'
        ],
        benefits: 'Used for skin care and relaxation'
    },
    'cinca': {
        title: 'Tamarind Detox Drink',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['2 tablespoons tamarind pulp', '1 glass warm water', '1 teaspoon jaggery'],
        instructions: [
            'Mix tamarind pulp and jaggery in warm water',
            'Drink'
        ],
        benefits: 'Aids digestion and detoxifies the body'
    },
    'dadima': {
        title: 'Pomegranate Heart Booster',
        image:'https://www.liveayurved.com/images/medicinal-plants/Dadima.jpg',
        ingredients: ['1 cup pomegranate seeds', '1 teaspoon black salt'],
        instructions: [
            'Blend pomegranate seeds',
            'Strain the juice, add black salt, and drink'
        ],
        benefits: 'Boosts heart health and improves digestion'
    },
    'devadaru': {
        title: 'Cedarwood Pain Relief Drink',
        image:'https://www.liveayurved.com/images/medicinal-plants/Devadaru.jpg',
        ingredients: ['1 teaspoon cedarwood powder', '1 cup warm water'],
        instructions: [
            'Mix cedarwood powder in warm water',
            'Consume once daily'
        ],
        benefits: 'Relieves joint pain and respiratory issues'
    },
    'dhattura': {
        title: 'Datura Pain Relief Balm',
        image:'hhttps://www.liveayurved.com/images/medicinal-plants/Dhattura.jpg',
        ingredients: ['5 Datura leaves', '2 tbsp mustard oil', '1 tsp turmeric powder'],
        instructions: [
            'Crush the Datura leaves into a paste.',
            'Mix with mustard oil and turmeric powder.',
            'Heat the mixture slightly and apply it externally on the affected area.'
        ],
        benefits: 'Pain relief and respiratory issues'
    },
    'durva': {
        title: 'Dūrvā Wound Healing Tonic',
        image:'hhttps://www.liveayurved.com/images/medicinal-plants/durva.jpg',
        ingredients: ['1 handful fresh Dūrvā grass', '1 tsp honey'],
        instructions: [
            'Crush Dūrvā grass to extract the juice.',
            'Mix with honey and consume twice a day.'
        ],
        benefits: 'Wound healing and blood purification'
    },
    'gambhari': {
        title: 'Gambhārī Immunity Booster',
        image:'https://www.liveayurved.com/images/medicinal-plants/Gambhari.jpg',
        ingredients: ['2 tbsp Gambhārī bark', '1 cup water', '1 tsp honey'],
        instructions: [
            'Boil Gambhārī bark in water for 10 minutes.',
            'Strain the liquid and let it cool.',
            'Add honey and drink once daily.'
        ],
        benefits: 'Boosting immunity and treating fever'
    },
    'iksu': {
        title: 'Sugarcane Digestive Drink',
        image:'https://www.liveayurved.com/images/medicinal-plants/Ikshu.jpg',
        ingredients: ['1 cup fresh sugarcane juice', '1 tsp ginger juice'],
        instructions: [
            'Mix sugarcane juice with ginger juice.',
            'Consume immediately for best results.'
        ],
        benefits: 'Improving digestion and energy levels'
    },
    'kadali': {
        title: 'Banana Stomach Soother',
        image:'https://www.liveayurved.com/images/medicinal-plants/kadali.jpg',
        ingredients: ['1 ripe banana', '1 tsp honey'],
        instructions: [
            'Mash the banana and mix with honey.',
            'Consume once a day to soothe the stomach.'
        ],
        benefits: 'Soothing stomach ulcers and aiding digestion'
    },
    'karcura': {
        title: 'Curcuma Digestive Tonic',
        image:'https://www.liveayurved.com/images/medicinal-plants/karchura.jpg',
        ingredients: ['1 tbsp dried Curcuma zedoaria powder', '1 cup warm water', '1 tsp honey (optional)'],
        instructions: [
            'Mix the dried Curcuma zedoaria powder in warm water.',
            'Add honey for taste.',
            'Drink once daily to aid digestion and reduce inflammation.'
        ],
        benefits: 'Digestive aid and anti-inflammatory'
    },
    'kasturilatika': {
        title: 'Hibiscus Stress Relief Drink',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['2 tbsp dried Hibiscus abelmoschus seeds', '1 cup milk', '1 tsp sugar or jaggery'],
        instructions: [
            'Soak the seeds overnight.',
            'Blend with milk and sweetener.',
            'Drink daily to promote vitality and reduce stress.'
        ],
        benefits: 'Aphrodisiac and stress relief'
    },
    'kataka': {
        title: 'Kataka Detox Water',
        image:'https://www.liveayurved.com/images/medicinal-plants/kataka.png',
        ingredients: ['5 seeds of Strychnos potatorum', '2 cups water'],
        instructions: [
            'Crush the seeds and soak in water overnight.',
            'Strain and drink the purified water in the morning for detoxification.'
        ],
        benefits: 'Water purification and detoxification'
    },
    'kharjura': {
        title: 'Date Energy Booster',
        image:'https://www.liveayurved.com/images/medicinal-plants/kharjura.jpg',
        ingredients: ['5 dates (Phoenix dactylifera)', '1 cup warm milk', '1/2 tsp cardamom powder'],
        instructions: [
            'Blend dates with warm milk and cardamom powder.',
            'Drink daily for increased energy and improved iron levels.'
        ],
        benefits: 'Energy booster and anemia remedy'
    },
    'krsnasariva': {
        title: 'Blood Purifying Herbal Tea',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['2 tbsp dried Cryptolepis buchananii root powder', '1 cup hot water', '1 tsp honey'],
        instructions: [
            'Steep the root powder in hot water for 10 minutes.',
            'Strain and mix with honey.',
            'Drink once daily to cleanse the blood and promote healthy skin.'
        ],
        benefits: 'Skin healing and blood purification'
    },
    'kunduru': {
        title: 'Boswellia Joint Pain Relief Balm',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['2 tbsp Boswellia serrata resin powder', '1/4 cup coconut oil', '1 tbsp beeswax', '5 drops peppermint essential oil'],
        instructions: [
            'Melt the coconut oil and beeswax in a double boiler.',
            'Stir in the Boswellia serrata resin powder until well blended.',
            'Remove from heat and add peppermint essential oil.',
            'Pour into a small container and let it cool before use.'
        ],
        benefits: 'Joint pain relief'
    },
    'kunkuma': {
        title: 'Saffron Skin Brightening Mask',
        image:'https://www.liveayurved.com/images/medicinal-plants/kumkuma.jpg',
        ingredients: ['5-6 saffron strands', '2 tbsp yogurt', '1 tsp honey'],
        instructions: [
            'Soak saffron strands in yogurt for 15 minutes.',
            'Mix in honey and blend well.',
            'Apply the mask evenly on the face.',
            'Leave it on for 20 minutes before rinsing with lukewarm water.'
        ],
        benefits: 'Skin brightening and rejuvenation'
    },
    'kusmanda': {
        title: 'Cooling Ash Gourd Drink',
        image:'https://www.liveayurved.com/images/medicinal-plants/kushmanda.jpg',
        ingredients: ['1 cup ash gourd juice', '1 tsp lemon juice', '1 tbsp honey', 'A pinch of black salt'],
        instructions: [
            'Blend ash gourd and strain the juice.',
            'Mix with lemon juice, honey, and black salt.',
            'Stir well and serve chilled.'
        ],
        benefits: 'Cooling effect and hydration'
    },
    'madayanti': {
        title: 'Henna Hair Strengthening Pack',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1/2 cup henna powder', '2 tbsp amla powder', '1 tbsp yogurt', 'Water as needed'],
        instructions: [
            'Mix henna and amla powder in a bowl.',
            'Add yogurt and enough water to make a smooth paste.',
            'Apply to hair and scalp, leaving it on for 1-2 hours.',
            'Rinse thoroughly with water.'
        ],
        benefits: 'Strengthens hair and promotes growth'
    },
    'mahanimba': {
        title: 'Chinaberry Anti-Dandruff Rinse',
        image:'https://www.liveayurved.com/images/medicinal-plants/mahanimba.jpg',
        ingredients: ['Handful of Mahānimba leaves', '2 cups water'],
        instructions: [
            'Boil Mahānimba leaves in water for 10 minutes.',
            'Let the decoction cool and strain it.',
            'Use as a final hair rinse after shampooing.'
        ],
        benefits: 'Reduces dandruff and promotes scalp health'
    },
    'mandukaparni': {
        title: 'Centella Brain Boost Tea',
        image:'https://www.liveayurved.com/images/medicinal-plants/mandukaparni.jpg',
        ingredients: ['1 cup fresh Centella asiatica leaves', '2 cups water', '1 tsp honey (optional)'],
        instructions: [
            'Wash the leaves thoroughly.',
            'Boil the water and add the leaves.',
            'Simmer for 10-15 minutes.',
            'Strain and let it cool.',
            'Add honey if desired and drink twice a day.'
        ],
        benefits: 'Enhances cognitive function and relieves anxiety'
    },
    'mayakku': {
        title: 'Oak Gall Mouth Rinse',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['2 pieces galls of Quercus infectoria', '1 cup water'],
        instructions: [
            'Crush the galls into small pieces.',
            'Boil in water for 10 minutes.',
            'Strain and let it cool.',
            'Use as a mouth rinse twice daily.'
        ],
        benefits: 'Used for treating oral ulcers and infections'
    },
    'mudgaparni': {
        title: 'Herbal Digestive Tea',
        image:'https://www.liveayurved.com/images/medicinal-plants/mudgaparni.jpg',
        ingredients: ['1 tsp dried Vigna trilobata leaves', '1 cup hot water'],
        instructions: [
            'Steep the dried leaves in hot water for 10 minutes.',
            'Strain and drink warm, once daily.'
        ],
        benefits: 'Improves digestion and relieves bloating'
    },
    'munditika': {
        title: 'Herbal Skin Healing Oil',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 tsp dried Sphaeranthus indicus flowers', '2 tbsp coconut oil'],
        instructions: [
            'Crush the dried flowers into a fine powder.',
            'Mix with coconut oil and let it infuse overnight.',
            'Apply to affected skin areas once or twice daily.'
        ],
        benefits: 'Treats skin disorders and promotes wound healing'
    },
    'nyagrodhajata': {
        title: 'Nyagrodhajaṭā Diabetes Control Drink',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['2 pieces Banyan tree aerial roots', '1 cup water'],
        instructions: [
            'Clean and chop the aerial roots into small pieces.',
            'Boil in water for 15 minutes.',
            'Strain and drink once daily.'
        ],
        benefits: 'Helps control diabetes and promotes skin health.'
    },
    'nimbu': {
        title: 'Nimbu Detox Drink',
        image:'https://www.liveayurved.com/images/medicinal-plants/nimba.jpg',
        ingredients: ['1 fresh lemon', '1 cup warm water', '1 teaspoon honey (optional)', 'A pinch of black salt'],
        instructions: [
            'Squeeze the lemon juice into a cup of warm water.',
            'Add honey and black salt, then stir well.',
            'Drink it on an empty stomach in the morning for best results.'
        ],
        benefits: 'Detox drink for digestion.'
    },
    'nirgundi': {
        title: 'Nirguṇḍī Pain Relief Oil',
        image:'https://www.liveayurved.com/images/medicinal-plants/nirgundi.jpg',
        ingredients: ['100g Nirguṇḍī leaves', '200ml coconut oil', '1 teaspoon turmeric powder'],
        instructions: [
            'Wash and dry the Nirguṇḍī leaves.',
            'Heat coconut oil in a pan and add the leaves.',
            'Add turmeric powder and let it simmer for 10-15 minutes.',
            'Strain the oil and store it in a bottle.',
            'Apply to affected areas for pain relief.'
        ],
        benefits: 'Provides relief from pain and inflammation.'
    },
    'palasa': {
        title: 'Palāśa Skin Healing Paste',
        image:'https://www.liveayurved.com/images/medicinal-plants/palasha.jpg',
        ingredients: ['2 tablespoons Palāśa flower powder', '1 tablespoon sandalwood powder', 'Rosewater (as needed)'],
        instructions: [
            'Mix Palāśa flower powder and sandalwood powder in a bowl.',
            'Add rosewater gradually to form a smooth paste.',
            'Apply to affected skin areas and leave for 20 minutes.',
            'Rinse with cold water.'
        ],
        benefits: 'Supports skin healing and rejuvenation.'
    },
    'parpata': {
        title: 'Parpaṭa Herbal Detox Tea',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 teaspoon dried Parpaṭa leaves', '1 cup boiling water', '1 teaspoon honey (optional)'],
        instructions: [
            'Add dried Parpaṭa leaves to a cup of boiling water.',
            'Let it steep for 5-7 minutes.',
            'Strain the tea and add honey if desired.',
            'Drink warm for detox benefits.'
        ],
        benefits: 'Aids in detoxification and cleansing of the body.'
    },
    'patala': {
        title: 'Pāṭalā Respiratory Relief Decoction', 
        image:'https://www.liveayurved.com/images/medicinal-plants/patala.jpg',
        ingredients: ['1 tablespoon dried Pāṭalā bark', '2 cups water', '1 teaspoon ginger juice', 'Honey (to taste)'],
        instructions: [
            'Boil Pāṭalā bark in 2 cups of water until it reduces to half.',
            'Strain the liquid and add ginger juice.',
            'Add honey if desired.',
            'Drink warm for respiratory relief.'
        ],
        benefits: 'Supports respiratory health and reduces congestion.'
    },
    'pattanga': {
        title: 'Pattaṅga Blood Purification Drink',
        image:'https://www.liveayurved.com/images/medicinal-plants/patranga.jpg',
        ingredients: ['1 tbsp Sappan wood chips', '2 cups water', '1 tsp honey (optional)'],
        instructions: [
            'Boil the sappan wood chips in water for 10-15 minutes until the water turns reddish.',
            'Strain the liquid and allow it to cool.',
            'Add honey if desired and consume warm.'
        ],
        benefits: 'Supports blood purification and improves skin health.'
    },
    'pippali': {
        title: 'Pippalī Respiratory & Digestion Aid',
        image:'https://www.liveayurved.com/images/medicinal-plants/pippali.jpg',
        ingredients: ['1/2 tsp Pippali powder', '1 cup warm milk', '1 tsp honey'],
        instructions: [
            'Mix Pippali powder with warm milk.',
            'Stir well and add honey.',
            'Consume once daily for respiratory benefits.'
        ],
        benefits: 'Aids in digestion and supports respiratory health.'
    },
    'plaksa': {
        title: 'Plakṣa Anti-inflammatory Wash',
        image:'https://www.liveayurved.com/images/medicinal-plants/plaksha.jpg',
        ingredients: ['Fresh Plakṣa leaves', '1 cup water'],
        instructions: [
            'Crush fresh Plakṣa leaves and boil in water for 5 minutes.',
            'Let the decoction cool and use it to wash wounds or apply as a poultice.'
        ],
        benefits: 'Anti-inflammatory properties and aids wound healing.'
    },
    'priyala': {
        title: 'Priyāla Brain Tonic',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 tbsp Priyala seed powder', '1 cup warm milk', '1 tsp sugar or honey'],
        instructions: [
            'Mix Priyala seed powder with warm milk.',
            'Add sugar or honey for taste.',
            'Consume daily for cognitive and energy benefits.'
        ],
        benefits: 'Boosts brain function and energy levels.'
    },
    'priyangu': {
        title: 'Priyaṅgu Immunity Booster Tea',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 tsp Priyaṅgu powder', '1 cup hot water', '1 tsp honey'],
        instructions: [
            'Mix Priyaṅgu powder in hot water.',
            'Let it steep for 5 minutes.',
            'Add honey and drink while warm.'
        ],
        benefits: 'Helps reduce fever and strengthens immunity.'
    },
    'prsniparni': {
        title: 'Pṛśniparṇī Respiratory & Wound Healing Decoction',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['10g dried Pṛśniparṇī leaves', '500ml water', '1 tsp honey'],
        instructions: [
            'Boil the dried leaves in water for 15 minutes.',
            'Strain the decoction.',
            'Add honey for taste and consume twice a day.'
        ],
        benefits: 'Aids in treating respiratory disorders, wounds, and inflammation.'
    },
    'puskara': {
        title: 'Puṣkara Respiratory Support Drink',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['5g Puṣkara root powder', '1 cup warm milk', '1 tsp honey'],
        instructions: [
            'Mix the root powder with warm milk.',
            'Stir well and add honey.',
            'Drink once daily before bedtime.'
        ],
        benefits: 'Beneficial for respiratory ailments like asthma and bronchitis.'
    },
    'rudraksa': {
        title: 'Rudrākṣa Stress Relief Infusion',
        image:'https://m.media-amazon.com/images/I/71rz9sMUYQL._SL1000_.jpg',
        ingredients: ['5 Rudrākṣa seeds', '1 cup warm water'],
        instructions: [
            'Soak Rudrākṣa seeds in warm water overnight.',
            'Drink the infused water in the morning on an empty stomach.'
        ],
        benefits: 'Used for stress relief and improving concentration'
    },
    'sarja': {
        title: 'Sarja Wound Healing Balm',
        image:'https://www.liveayurved.com/images/medicinal-plants/sarja.jpg',
        ingredients: ['10g Sarja resin', '2 tbsp coconut oil'],
        instructions: [
            'Melt the Sarja resin and mix it with coconut oil.',
            'Apply the mixture to affected areas for faster healing.'
        ],
        benefits: 'Helps in wound healing and skin infections'
    },
    'satavari': {
        title: 'Śatāvarī Immunity Boosting Milk',
        image:'https://www.liveayurved.com/images/medicinal-plants/shatavari.jpg',
        ingredients: ['1 tbsp Śatāvarī powder', '1 cup warm milk', '1 tsp honey'],
        instructions: [
            'Mix the Śatāvarī powder in warm milk.',
            'Add honey for taste.',
            'Consume daily before bedtime.'
        ],
        benefits: 'Supports female reproductive health and boosts immunity'
    },
    'sigru': {
        title: 'Śigru Immunity Booster Drink',
        image:'https://www.liveayurved.com/images/medicinal-plants/shigru.jpg',
        ingredients: ['1 cup fresh Moringa leaves', '1 teaspoon honey', '1 cup warm water'],
        instructions: [
            'Wash the Moringa leaves thoroughly.',
            'Blend the leaves with warm water until smooth.',
            'Strain the mixture and add honey.',
            'Drink once daily for best results.'
        ],
        benefits: 'Boosts immunity and reduces inflammation'
    },
    'srngataka': {
        title: 'Śṛṅgāṭaka Digestive Drink',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['1 cup Trapa natans (Water Chestnut) flour', '1 glass milk', '1 teaspoon sugar'],
        instructions: [
            'Mix the Trapa natans flour with milk.',
            'Heat the mixture on low flame while stirring.',
            'Add sugar and let it simmer for 5 minutes.',
            'Consume warm as a nutritious drink.'
        ],
        benefits: 'Enhances digestion and treats urinary disorders'
    },
    'sruvavrksa': {
        title: 'Sruvavṛkṣa Pain Relief Oil',
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ['Fresh Flacourtia indica leaves', '1 teaspoon turmeric', '1 cup warm coconut oil'],
        instructions: [
            'Crush the leaves into a paste.',
            'Mix with turmeric and warm coconut oil.',
            'Apply the paste to affected areas for pain relief.'
        ],
        benefits: 'Aids in pain relief and anti-inflammatory effects'
    },
    'tulasi': {
        title: 'Tulasī Herbal Tea',
        image:'https://www.liveayurved.com/images/medicinal-plants/tulsi.jpg',
        ingredients: ['10 fresh tulasi leaves', '1 teaspoon honey', '1 cup hot water', '1/2 teaspoon grated ginger'],
        instructions: [
            'Boil the water and add tulasi leaves and grated ginger.',
            'Let it steep for 5 minutes.',
            'Strain the tea into a cup.',
            'Add honey and stir well.',
            'Drink warm to soothe throat infections and boost immunity.'
        ],
        benefits: 'Helps with throat infections and boosts immunity'
    },
    'yava': {
        title: 'Yava Digestive Beverage',
        image:'https://www.liveayurved.com/images/medicinal-plants/yava.jpg',
        ingredients: ['Barley grains (1 cup)', 'Water (3 cups)', 'Lemon juice (1 tbsp)', 'Honey (1 tbsp)'],
        instructions: [
            'Soak the barley grains overnight.',
            'Boil in water until soft.',
            'Strain and mix the liquid with lemon juice and honey.',
            'Drink as a cooling and digestive beverage.'
        ],
        benefits: 'Used for improving digestion and weight management'
    },
    
        'Agnimantha': {
            title: "Agnimantha Digestive Beverage",
            image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ["Agnimantha bark (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Boil Agnimantha bark in water for 10-15 minutes.",
                "Strain the liquid.",
                "Mix with lemon juice and honey.",
                "Drink warm for digestive benefits."
            ],
            benefits: "Supports digestion and helps with inflammation."
        },
        'Ambasthaki': {
            title: "Ambaṣṭhakī Digestive Beverage",
            image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ["Ambaṣṭhakī leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Boil Ambaṣṭhakī leaves in water for 10 minutes.",
                "Strain and let it cool slightly.",
                "Mix with lemon juice and honey.",
                "Consume warm or chilled."
            ],
            benefits: "Aids digestion and detoxifies the body."
        },
        'Amrata': {
            title: "Āmrāta Digestive Beverage",
            image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ["Āmrāta fruit pulp (1/2 cup)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Blend Āmrāta pulp with water.",
                "Strain to remove fiber.",
                "Mix with lemon juice and honey.",
                "Drink fresh as a digestive aid."
            ],
            benefits: "Helps with digestion and boosts immunity."
        },
        'Apamarga': {
            title: "Apāmārga Digestive Beverage",
            image:'https://www.liveayurved.com/images/medicinal-plants/Apamarga.jpg',
            ingredients: ["Apāmārga seeds (1 tsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Soak Apāmārga seeds overnight.",
                "Boil in water for 10 minutes.",
                "Strain and mix with lemon juice and honey.",
                "Drink warm for detoxification."
            ],
            benefits: "Cleanses the digestive system and removes toxins."
        },
        'Aralu': {
            title: "Aralu Digestive Beverage",
            image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ["Aralu bark (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Boil Aralu bark in water for 10-15 minutes.",
                "Strain and let it cool slightly.",
                "Mix with lemon juice and honey.",
                "Consume warm."
            ],
            benefits: "Supports digestion and relieves bloating."
        },
        'Arka': {
            title: "Arka Digestive Beverage",
            image:'https://www.liveayurved.com/images/medicinal-plants/arka.jpg',
            ingredients: ["Arka leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Boil Arka leaves in water for 10 minutes.",
                "Strain the liquid.",
                "Mix with lemon juice and honey.",
                "Drink warm for digestive benefits."
            ],
            benefits: "Promotes gut health and detoxification."
        },
        'Asana': {
            title: "Asana Digestive Beverage",
            image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ["Asana bark (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Boil Asana bark in water for 15 minutes.",
                "Strain and let it cool slightly.",
                "Mix with lemon juice and honey.",
                "Consume warm or chilled."
            ],
            benefits: "Improves digestion and helps in detoxification."
        },
      'Asthisamhrta': {
            title: "Asthisaṁhṛta Digestive Beverage",
            image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ["Asthisaṁhṛta leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Boil Asthisaṁhṛta leaves in water for 10 minutes.",
                "Strain and let it cool slightly.",
                "Mix with lemon juice and honey.",
                "Drink warm."
            ],
            benefits: "Supports bone health and aids digestion."
        },
        'bharangi': {
            title: "Bhāraṅgī Digestive Beverage",
            image:'https://www.liveayurved.com/images/medicinal-plants/bharangi.jpg',
            ingredients: ["Bhāraṅgī root (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Boil Bhāraṅgī root in water for 10 minutes.",
                "Strain the liquid.",
                "Mix with lemon juice and honey.",
                "Drink warm for respiratory and digestive benefits."
            ],
            benefits: "Supports digestion and respiratory health."
        },
        'Bijapura': {
            title: "Bījapūra Digestive Beverage",
            image:'https://www.liveayurved.com/images/medicinal-plants/bijapura.jpg',
            ingredients: ["Bījapūra fruit juice (1/2 cup)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
            instructions: [
                "Blend Bījapūra fruit with water.",
                "Strain to remove fiber.",
                "Mix with lemon juice and honey.",
                "Drink fresh as a digestive aid."
            ],
            benefits: "Helps with digestion and strengthens immunity."
        },
        'Bimbi': {
title: "Bimbī Digestive Beverage",
image:'https://www.liveayurved.com/images/medicinal-plants/bimbi.jpg',
ingredients: ["Bimbī leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
instructions: [
    "Boil Bimbī leaves in water for 10 minutes.",
    "Strain the liquid.",
    "Mix with lemon juice and honey.",
    "Drink warm for digestive benefits."
],
benefits: "Aids digestion and supports gut health."
},
'Cangeri': {
title: "Cāṅgerī Digestive Beverage",
image:'https://www.liveayurved.com/images/medicinal-plants/Changeri.jpg',
ingredients: ["Cāṅgerī leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
instructions: [
    "Boil Cāṅgerī leaves in water for 10 minutes.",
    "Strain and let it cool slightly.",
    "Mix with lemon juice and honey.",
    "Consume warm."
],
benefits: "Supports digestion and relieves bloating."
},
'Cirabilva': {
title: "Cirabilva Digestive Beverage",
image:'https://www.liveayurved.com/images/medicinal-plants/chirabilva.jpg',
ingredients: ["Cirabilva bark (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
instructions: [
    "Boil Cirabilva bark in water for 15 minutes.",
    "Strain and mix with lemon juice and honey.",
    "Drink warm."
],
benefits: "Improves digestion and detoxifies the body."
},
'Danti': {
title: "Dantī Digestive Beverage",
image:'https://www.liveayurved.com/images/medicinal-plants/Danti.jpg',
ingredients: ["Dantī root (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
"instructions": [
    "Boil Dantī root in water for 10 minutes.",
    "Strain and mix with lemon juice and honey.",
    "Drink as a cooling and digestive beverage."
],
benefits: "Helps digestion and reduces inflammation."
},
'Draksa': {
title: "Drākṣā Digestive Beverage",
image:'https://www.liveayurved.com/images/medicinal-plants/Draksha.jpg',
ingredients: ["Drākṣā (raisins) (1/2 cup)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
instructions: [
    "Soak Drākṣā overnight in water.",
    "Blend and strain the liquid.",
    "Mix with lemon juice and honey.",
    "Drink chilled or warm."
],
benefits: "Supports digestion and enhances energy levels."
},
'Eranda': {
title: "Eraṇḍa Digestive Beverage",
image:'https://www.liveayurved.com/images/medicinal-plants/Eranda.jpg',
ingredients: ["Eraṇḍa seeds (1 tsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
instructions: [
    "Soak Eraṇḍa seeds overnight.",
    "Boil in water for 10 minutes.",
    "Strain and mix with lemon juice and honey.",
    "Drink warm for digestion."
],
benefits: "Aids digestion and relieves constipation."
},
'Gojihva': {
title: "Gojihvā Digestive Beverage",
image:'https://www.liveayurved.com/images/medicinal-plants/Gojihva.jpg',
ingredients: ["Gojihvā leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
instructions: [
    "Boil Gojihvā leaves in water for 10 minutes.",
    "Strain and mix with lemon juice and honey.",
    "Drink warm."
],
benefits: "Improves digestion and reduces bloating."
},
'Granthiparni': {
title: "Granthiparṇī Digestive Beverage",
image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
ingredients: ["Granthiparṇī leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
instructions: [
    "Boil Granthiparṇī leaves in water for 10 minutes.",
    "Strain and let it cool slightly.",
    "Mix with lemon juice and honey.",
    "Consume warm."
],
benefits: "Supports gut health and detoxification."
},
'Hamsapadi': {
title: "Haṁsapadī Digestive Beverage",
image:'https://www.liveayurved.com/images/medicinal-plants/hamsapadi.jpg',
ingredients: ["Haṁsapadī root (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
instructions: [
    "Boil Haṁsapadī root in water for 10 minutes.",
    "Strain and mix with lemon juice and honey.",
    "Drink warm."
],
benefits: "Promotes digestion and relieves stomach discomfort."
},
'Hapusa': {
title: "Hapuṣā Digestive Beverage",
 image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
ingredients: ["Hapuṣā bark (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
instructions: [
    "Boil Hapuṣā bark in water for 15 minutes.",
    "Strain and mix with lemon juice and honey.",
    "Drink warm."
],
benefits: "Aids digestion and helps in detoxification."
},
'Indravaruni': {
    title: "Indravāruṇī Digestive Beverage",
    image:'https://www.liveayurved.com/images/medicinal-plants/Indravaruni.jpg',
    ingredients: ["Indravāruṇī root (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Boil Indravāruṇī root in water for 15 minutes.",
        "Strain and mix with lemon juice and honey.",
        "Drink warm for digestion and detoxification."
    ],
    benefits: "Aids digestion and helps in detoxification."
},
'Indrayava': {
    title: "Indrayava Digestive Beverage",
    image:'https://www.liveayurved.com/images/medicinal-plants/Indrayava.jpg',
    ingredients: ["Indrayava seeds (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Boil Indrayava seeds in water for 10 minutes.",
        "Strain and mix with lemon juice and honey.",
        "Consume warm."
    ],
    benefits: "Supports gut health and reduces bloating."
},
'isvari': {
    title: "Īśvarī Digestive Beverage",
    image:'https://www.liveayurved.com/images/medicinal-plants/ishvari.jpg',
    ingredients: ["Īśvarī leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Boil Īśvarī leaves in water for 10 minutes.",
        "Strain and mix with lemon juice and honey.",
        "Drink warm for digestive relief."
    ],
    benefits: "Improves digestion and boosts metabolism."
},
'Jati': {
    title: "Jātī Digestive Beverage",
    image:'https://www.liveayurved.com/images/medicinal-plants/Jati.jpg',
    ingredients: ["Jātī flowers (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Boil Jātī flowers in water for 10 minutes.",
        "Strain and mix with lemon juice and honey.",
        "Drink warm."
    ],
    benefits: "Aromatic and beneficial for digestion."
},
'Kakajangha': {
    title: "Kākajaṅghā Digestive Beverage",
    image:'https://th.bing.com/th/id/OIP.4bZAaCZ3vITmSgTzLcIlHAHaD4?w=343&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    ingredients: ["Kākajaṅghā root (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Boil Kākajaṅghā root in water for 15 minutes.",
        "Strain and mix with lemon juice and honey.",
        "Drink warm for digestive relief."
    ],
    benefits: "Supports digestion and gut health."
},
'Kakanasika': {
    title: "Kākanāsikā Digestive Beverage",
    image:'https://th.bing.com/th/id/OIP.4bZAaCZ3vITmSgTzLcIlHAHaD4?w=343&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    ingredients: ["Kākanāsikā leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Boil Kākanāsikā leaves in water for 10 minutes.",
        "Strain and mix with lemon juice and honey.",
        "Drink warm."
    ],
    benefits: "Helps with digestion and improves gut flora."
},
'Kakoli': {
    title: "Kākolī Digestive Beverage",
    image:'https://www.liveayurved.com/images/medicinal-plants/Kakoli.jpg',
    ingredients: ["Kākolī root (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Boil Kākolī root in water for 15 minutes.",
        "Strain and mix with lemon juice and honey.",
        "Drink warm."
    ],
    benefits: "Aids digestion and promotes gut health."
},
'Kamala': {
    title: "Kamala Digestive Beverage",
    image:'https://th.bing.com/th/id/R.f08843ebc5b4c04ded58a21f4e7c46c4?rik=p%2fvTNH7ung05Rg&riu=http%3a%2f%2fwww.phytoimages.siu.edu%2fCUBIC_IMAGES%2fphytoimages%2fpelserpb%2f6_26_14%2f26jun14%2fDSC_0183.jpg&ehk=Q1F54pPyQnomofnv3ASXKWF%2fDYSLzkZOBOWkZdzIKmM%3d&risl=&pid=ImgRaw&r=0',
    ingredients: ["Kamala petals (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Boil Kamala petals in water for 10 minutes.",
        "Strain and mix with lemon juice and honey.",
        "Consume warm."
    ],
    benefits: "Supports digestion and soothes the stomach."
},
'Karavira': {
    title: "Karavīra Digestive Beverage",
    image:'https://www.liveayurved.com/images/medicinal-plants/karavira.jpg',
    ingredients: ["Karavīra leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Boil Karavīra leaves in water for 10 minutes.",
        "Strain and mix with lemon juice and honey.",
        "Drink warm."
    ],
    benefits: "Helps with digestion and reduces bloating."
},
'Karamarda': {
    title: "Karamarda Digestive Beverage",
    image:'https://th.bing.com/th/id/OIP.0vCQtwdQFNZOvH4ntwMfKAHaEs?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    ingredients: ["Karamarda fruit (1/2 cup)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
    instructions: [
        "Blend Karamarda fruit with water.",
        "Strain to remove fiber.",
        "Mix with lemon juice and honey.",
        "Drink fresh as a digestive aid."
    ],
    benefits: "Supports digestion and boosts immunity."
},
    'Masura': {
        title: "Masūra Digestive Beverage",
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ["Masūra (red lentils) (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Soak Masūra overnight.",
            "Boil in water until soft.",
            "Strain and mix with lemon juice and honey.",
            "Drink warm for digestive support."
        ],
        benefits: "Supports digestion and provides protein."
    },
    'Mudga': {
        title: "Mudga Digestive Beverage",
        image:'https://www.liveayurved.com/images/medicinal-plants/mudga.jpg',
        ingredients: ["Mudga (green gram) (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Soak Mudga overnight.",
            "Boil in water until soft.",
            "Strain and mix with lemon juice and honey.",
            "Drink warm for digestive aid."
        ],
        benefits: "Improves digestion and provides nourishment."
    },
    'Mulaka': {
        title: "Mūlaka Digestive Beverage",
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ["Mūlaka (radish) juice (1/2 cup)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Extract Mūlaka juice.",
            "Mix with water, lemon juice, and honey.",
            "Consume fresh."
        ],
        benefits: "Aids digestion and detoxifies the body."
    },
    'Musta': {
        title: "Mustā Digestive Beverage",
        image:'https://www.liveayurved.com/images/medicinal-plants/musta.jpg',
        ingredients: ["Mustā root (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Boil Mustā root in water for 15 minutes.",
            "Strain and mix with lemon juice and honey.",
            "Drink warm."
        ],
        benefits: "Supports digestion and relieves bloating."
    },
    'Nagavalli': {
        title: "Nāgavallī Digestive Beverage",
        image:'https://th.bing.com/th/id/OIP.tT0-uma468spDGJVZf1G4AHaIS?w=173&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ["Nāgavallī leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Boil Nāgavallī leaves in water for 10 minutes.",
            "Strain and mix with lemon juice and honey.",
            "Drink warm for digestive relief."
        ],
        benefits: "Improves digestion and supports gut health."
    },
    'Narikela': {
        title: "Nārikela Digestive Beverage",
        image:'https://www.liveayurved.com/images/medicinal-plants/narikela.jpg',
        ingredients: ["Nārikela (coconut water) (1 cup)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Mix Nārikela with lemon juice and honey.",
            "Drink chilled."
        ],
        benefits: "Hydrates and improves digestion."
    }, 
    'sakhotaka': {
        title: "Śākhoṭaka Digestive Beverage",
        image:'https://www.liveayurved.com/images/medicinal-plants/shakhotaka.jpg',
        ingredients: ["Śākhoṭaka bark (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Boil Śākhoṭaka bark in water for 15 minutes.",
            "Strain and mix with lemon juice and honey.",
            "Drink warm."
        ],
        benefits: "Aids digestion and relieves gastric discomfort."
    },
    'salaparni': {
        title: "Śālaparṇī Digestive Beverage",
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ["Śālaparṇī leaves (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Boil Śālaparṇī leaves in water for 10 minutes.",
            "Strain and mix with lemon juice and honey.",
            "Drink warm for digestive support."
        ],
        benefits: "Supports digestion and reduces bloating."
    },
    'sali': {
        title: "Śāli Digestive Beverage",
        image:'https://th.bing.com/th/id/OIP.LNq8DvNt3o503sGvLuXqqwAAAA?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ["Śāli rice (1/2 cup)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Boil Śāli rice in water until soft.",
            "Strain and mix the liquid with lemon juice and honey.",
            "Drink warm for digestive benefits."
        ],
        benefits: "Gentle on the stomach and promotes digestion."
    },
    'salmali': {
        title: "Śālmalī Digestive Beverage",
        image:'https://th.bing.com/th/id/OIP.Y8A6gxGxWfjVGF_urMW0kwHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ingredients: ["Śālmalī flowers (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
       instructions: [
            "Boil Śālmalī flowers in water for 10 minutes.",
            "Strain and mix with lemon juice and honey.",
            "Drink warm."
        ],
        benefits: "Cooling and soothing for digestion."
    },
    'sana': {
        title: "Śaṇa Digestive Beverage",
        image:'https://th.bing.com/th/id/OIP.t3usYQ5qOmXwYoMPK-vEGwHaFj?rs=1&pid=ImgDetMain',
        ingredients: ["Śaṇa seeds (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Soak Śaṇa seeds overnight.",
            "Blend with water, strain, and mix with lemon juice and honey.",
            "Drink fresh."
        ],
        benefits: "Supports digestion and overall gut health."
    },
    'sara': {
        title: "Śara Digestive Beverage",
        image:'https://truelyf.com/wp-content/uploads/2020/09/Cheraunji-nut.jpg',
        ingredients: ["Śara root (1 tbsp)", "Water (3 cups)", "Lemon juice (1 tbsp)", "Honey (1 tbsp)"],
        instructions: [
            "Boil Śara root in water for 15 minutes.",
            "Strain and mix with lemon juice and honey.",
            "Drink warm."
        ],
        benefits: "Helps with digestion and detoxification."
    }     
};
