var gifter = ['Amon',
            'Amrita',
            'Carlos',
            'Chad',
            'Eddie',
            'Grayson',
            'JD',
            'Joshua',
            'Kimo',
            'Lynna',
            'Nilasha',
            'Rene',
            'Sammantha',
            'Sarah',
            'Taisei',
            'Tika',
            'Vy',
            'Wyatt'];

var recieve = ['Joshua Almario he/him',
              'Lynna (she/her)',
              'Eddie he/him',
              'Nilasha she/her',
              'Vy Nguyen (she/her)',
              'Amrita Vinjamury, she/her',
              'Sammantha Garcia (she/her/hers)',
              'Rene He/Him',
              'amon any pronouns',
              'Kimo They/Them',
              'Chad Ferguson/ he/him/his',
              'Taisei Clemens (He/Him)',
              'Wyatt Hsu he him',
              'Carlos Herrera / He/Him',
              'Grayson Appell, he him',
              'JD (They/Them)',
              'tika she/her',
              'Sarah (she/her)'];

var shopper = [
  'I am fascinated with crows and plague doctors! There are some plague doctor plushies at Games of Berkeley that I’ve been meaning to get *hint hint*',
  'I love cooking, eating out, boba, reading, watching movies, and trying out fun and interesting snacks!',
  'Interests include reading manga, watching movies, going to concerts, and playing video games. I have been recently into collecting Mangas, specifically dandadan, chainsaw man or spy x family. ',
  'Paint by numbers, legos, biking, the color blue, baking',
  'Hi! I cook very often and would love any cookware. In particular, I could use a microplane, baking sheet/pan, an electric/hand whisk, a baking cooling rack, measuring cups (dry/liquid/cup are fine), or a metal colander! I have been meaning to get a microwavable eye mask for when I sleep, so that would be lovely too. I also spend a lot of time on my laptop so I would appreciate a laptop stand (macbook 14 inch) or a keyboard wrist rest. Besides that, I like floral candles and in terms of food, love lifesaver gummies, sour patch watermelon candies, and tea packs. If any of those are hard, a nintendo eshop card can be found pretty much anywhere and would be totally cool as well! Hope that is helpful and I appreciate it so much! Thank you!',
  'I love to watch movies and tv ( a lot of sitcoms like friends, new girl, schitts creek, etc), I love to yap, I love arts and crafts, and I love reading mystery or romance novels. I love eating chips, especially jalapeno or spicy ones,  sour punch straw bites, and chocolate covered fruits.',
  'Fuzzy socks, mugs, gift card for bookstore or jamba juice', 
  'Coffee, Zelda, Steam games, Nintendo games, Falafel Boy, Sushi',
  'i hate food. i would love a gift that makes my life slightly more convenient or maybe a book that some smart person wrote about some STEM or economics subject',
  'Food is a good gift! I am down for anything. Allergies (Mangos, Dairy, Walnuts) Also anything bird related is cute.',
  'In my free time during the winter, I like going snowboarding as much as possible! Maybe a pair of warm socks or something like that would be great. In terms of food and treats, gift cards for any places like in n out, chick-fil-a, pizza places, smoothie places, etc is another option!',
  'Something I would like as a gift is a very nice 0.5 mechanical pencil and some lead to go with it.',  
  'I like sports, music, programming (obviously), cooking',
  'I love LEGOS, NASCAR, and Cal or Niners merch! In terms of eat/drink, I like trying new things, especially uncommon snacks/drinks you cant find in a normal store. I like to play video games, watch sports, read, and cook. If you are having figuring out a gift, I also love Takis and regular snacks as well. I appreciate a bunch of snacks the same way I appreciate anything else because its the giving that matters, not the gift!',
  'I love the mountains and gummy bears',
  'Music: Taylor Swift, Janelle Monae, Underscores. Video games: (ALL horror games, Outlast Trials, The Sims, Night in the Woods, Stardew Valley, Fortnite). I love Frankenstein. I enjoy jokes more than anything, so any level of unnecessarily obscure or convoluted humor would also make me so happy!',
  'i love to paint, draw, do crafts and read. fav snacks are chips and dark chocolate.', 
  'rabbit toys, boba (matcha <3 ) (not from plentea plz), VBUCKS B), Gojo/Jujutsu Kaisen, pokemon go, Shiny Ditto'
];

               
var food = ['N/A',
           'None',
           'Vegang (vegan)',
           'N/a',
           'I am allergic to all nuts and typically avoid foods with high soybean or sesame content. Thanks!',
           'vegetarian',
           'N/A',
           'No',
           'vegetarian allergic to pineapple',
           '(Mangos, Dairy, Walnuts)',
           'No',
           'No',
           'No',
           'N/A',
           'No',
           'Vegan',
           'vegetarian',
           'a little sensitive to pork' ];





var pass = [
  'HLE34',
  'B2SX3',
  'PCKPR',
  '8PHNX',
  'Y9S6G',
  'B4X9B',
  'AQXKL',
  'TEQ5A',
  'ZBPJD',
  '9BBNC',
  '3P2HV',
  'UM35K',
  'KSSBP',
  'LD43G',
  'Q2XBB',
  '7PMLR',
  'T4XBB',
  'PYSB1'
];

function answer() {
	var username = document.getElementById('name').value
	var password = document.getElementById('password').value
  // var X = document.getElementById("textName");
  

  

	for(var i = 0; i < gifter.length; i++) {
		if(username == gifter[i] && password == pass[i]) {
      document.body.innerHTML = document.body.innerHTML.replace('XXXX', gifter[i]);
      document.body.innerHTML = document.body.innerHTML.replace('YYYY', recieve[i]);
      document.body.innerHTML = document.body.innerHTML.replace('ZZZZ', shopper[i]);
      document.body.innerHTML = document.body.innerHTML.replace('UUUU', food[i]);
			textName.style.display = "block";
      enter.style.display = "none";
			return
		} 
  }
  alert("Error: Name and password do not match. The password is case sensitive. Please try again!");
}
  
