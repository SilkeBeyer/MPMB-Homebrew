/**	-INFORMATION-
	Content: 	A homebrew Background "Prisoner of War"
	Date: 		04-18-2019
	Sheet: 		12.999
	Author:		u/Pallas_Wapiti
*/

/*	-OVERVIEW-

	Name: Prisoner of War
	
	Skills: Two from: 	Deception
						Insight
						Investigation
						Medicine
						Perception
						Sleight of Hand
						Stealth
						Survival
						
	Items: 		Pouch with Coins (5GP)
				Clothes, Torn
				Makeshift Knife
				Message from another Prisoner
	
	Tools:		(1) Artisan's Tool
	
	Languages:	(1)
	
	Lifestyle: 	Wretched
	
	Feature: Inside Knowledge
*/	

var iFileName = "Homebrew Background - Prisoner of War.js"; 

RequiredSheetVersion(12.999); 
		
BackgroundList["prisoner of war"] = { 

	regExpSearch : 	/prisoner of war/i, 	

	name : 			"Prisoner of War", 

	source : 		["HB", 0], 
	
	skillstxt : 	"Choose two from Deception, Insight, Investigation, Medicine, Perception, Sleight of Hand, Stealth, and Survival.", 

	gold : 			5, 	

	equipleft : [ 	
				["Message from a fellow prisoner", "", ""], 
				], 	

	equipright : [ 
				["Clothing, Torn", "1", 3],
				["Makeshift Knife", "1", 5],
				["Pouch (with coins)", "", 1],
				],

	feature : 	"Inside Knowledge", 

	trait : 	[
				"I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
				"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
				"I pocket anything I see that might have some value.",
				"I feel tremendous empathy for all who suffer.",
				"I'm haunted by memories of war. I can't get the images of violence out of my mind.",
				"I'm always polite and respectful.",
				"I hide scraps of food and trinkets away in my pockets.",
				"I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms." 
				], 

	ideal : 	[
				["Charity", "Charity: I always try to help those in need, no matter what the personal cost. (Good)" ],
				["Freedom", "Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)" ],
				["People", "People: I'm loyal to my friends, not to anyideals, and everyone else can take a trip down the Styx for all I care. (Neutral)" ],
				["Might", "Might: If I become strong, I can take what I want--what I deserve. (Evil)" ],
				["Live and Let Live", "Live and Let Live: Meddling in the affairs of others only causes trouble. (Neutral)" ],
				["Tradition", "Tradition: The stories, legends, and songs of the past must never be forgotten.(Lawful)" ], 
				], 

	bond : 		[
				"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
				"I have a family, but I have no idea where they are. One day, I hope to see them again.",
				"I protect those who cannot protect themselves.",
				"No one else is going to have to endure the hardships I've been through.",
				"Everything I do is for the common people.",
				"Someone I loved died because of a mistake I made. That will never happen again." 
				], 

	flaw : 		[
				"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
				"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
				"Now that I've returned to the world, I enjoy its delights a little too much.",
				"I follow orders, even if I think they're wrong.",
				"My hatred of my enemies is blind and unreasoning.",
				"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it." 
				],  

	toolProfs :		[["Artisan's Tool", 1]], 

	languageProfs :	[1], 
	
	lifestyle : "wretched", 	
	};

BackgroundFeatureList["inside knowledge"] = {  
	description :	"You know the one's who took your freedom. You know their way of life, their weaknesses and maybe even their language. You can use this knowledge to pass as one of them (if your appearance doesn't betray you). Maybe you have contact in their ranks of a benevolent ally? Or maybe you escped and know a secret passage. Work with your DM to figure out, what knowledge you have from your time in bondage.", 
	
	source :		["HB", 1], 		
	};