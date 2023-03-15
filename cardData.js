const cardData = [
  {
    name: "Fyendals Spring Tunic",
    ruling:
      "\nYou cannot activate Fyendal’s Spring Tunic during the start of the turn phase (in response to the trigger), because players do not get priority during the start of turn phase.\n\u203B\n You must have at least 3 energy counters on Fyendal’s Spring Tunic to use it’s activated ability.\n\u203B\n Fyendal’s Spring Tunic’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/FyendalsSpringTunic.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Goliath Gauntlet",
    ruling:
      "\nThe attack action card does not gain go again. Goliath Gauntlet’s activated ability requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/GoliathGauntlet.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Heartened Cross Strap",
    ruling:
      "\nThe attack action card does not again go again. Heartened Cross Strap’s activated ability requires an action point to use and provides an action point from go again upon resolution.\n\u203B\n The reduction does not carry over to any additional attack actions outside of the first attack action card you play after activating Heartened Cross Strap.",
    cardImage: require("./images/HeartenedCrossStrap.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Hope Merchant’s Hood",
    ruling:
      "\nThe cards must be selected and shuffled in at the same time.\n\u203B\n Hope Merchant’s Hood’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/HopeMerchantsHood.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Snapdragon Scalers",
    ruling:
      "\nIf this is used on an attack with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.\n\u203B\n Snapdragon Scaler’s activated ability is an attack reaction. You may activate it during the reaction window when you are the attacking hero.",
    cardImage: require("./images/SnapdragonScalers.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Barraging Brawnhide",
    ruling:
      "\nDefense reactions played from arsenal and/or hand count as defending cards.",
    cardImage: require("./images/BarragingBrawnhide.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Crazy Brew",
    ruling:
      "\nYou cannot defend with Crazy Brew as it has no defense value.\n\u203B\n The ability must resolve completely. There is no window to react between letting the ability resolve and seeing which effect is applied.",
    cardImage: require("./images/CrazyBrew.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Demolition Crew",
    ruling:
      "\nYou must have at least one card in your hand with cost {r}{r} or greater for the additional cost at the time you play Demolition Crew.\n\u203B\n You may not reveal the same Demolition Crew to itself to pay for the additional cost.\n\u203B\n You can not reveal a card for the additional cost, and then pitch that same card to pay the resource of Demolition Crew. Paying resource costs happens before paying additional costs.",
    cardImage: require("./images/DemolitionCrew.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Drone of Brutality",
    ruling:
      "\nAnywhere includes all possible zones, such as from hand, or deck. This is not limited to being put into the graveyard from the combat chain.",
    cardImage: require("./images/DroneOfBrutality.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Energy Potion",
    ruling:
      "\nEnergy Potion requires an action point to play as it is an action.\n\u203B\n Energy Potion has sub-type Item, which means it stays in the arena until it is destroyed.\n\u203B\n You may not defend with Energy Potion as it does not have a defense value.\n\u203B\n You may use Energy Potion’s ability even when you are not spending any of the resources gained by it.\n\u203B\n Energy Potion’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/EnergyPotion.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Enlightened Strike",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Enlightened Strike.\n\u203B\n You choose the mode at the time you play Enlightened Strike.",
    cardImage: require("./images/EnlightenedStrike.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Flock of the Feather Walkers",
    ruling:
      "\nYou must have at least one other card in your hand with cost {r} or less to pay for the additional cost of Flock of the Feather Walkers.\n\u203B\n You may not reveal the same Flock of the Feather Walkers to itself to pay for the additional cost.\n\u203B\n The Quicken aura token remains in play until destroyed.\n\u203B\n A Quicken aura token may be represented by a small object such as a card sleeve or coin if a Quicken aura token card is not available.\n\u203B\n You can not reveal a card for the additional cost, and then pitch that same card to pay the resource of Flock of the Feather Walkers. Paying resource costs happens before paying additional costs.",
    cardImage: require("./images/FlockOfTheFeatherWalkers.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Heart of Fyendal",
    ruling:
      "\nThe green symbol on Heart of Fyendal is life.\n\u203B\n You may only have 1 Heart of Fyendal in your deck including cards in your registered 80-card pool in constructed tournaments and only 1 Heart of Fyendal in your deck in limited tournaments.\n\u203B\n You may not defend with Heart of Fyendal as it does not have a defense value.\n\u203B\n Heart of Fyendal does not have a cost value. (It is not zero.)",
    cardImage: require("./images/HeartOfFyendal.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Last Ditch Effort",
    ruling:
      "\nLast Ditch Effort checks how many cards are in your deck at the time you play it. If after you play it your deck’s size changes, the stats and go again applied to Last Ditch Effort would still remain.",
    cardImage: require("./images/LastDitchEffort.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Nimble Strike",
    ruling:
      "\nYou must decide if you are banishing a card name Nimblism at the time you play Nimble Strike.\n\u203B\n Non-attack action cards go to the graveyard after they resolve, therefore you may banish a Nimblism you played this turn.",
    cardImage: require("./images/NimbleStrike.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Nimblism",
    ruling:
      "\nThe attack action does not gain go again. Nimblism requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/Nimblism.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Potion of Strength",
    ruling:
      "\nPotion of Strength requires an action point to play as it is an action.\n\u203B\n Potion of Strength has sub-type Item, which means it stays in the arena until it is destroyed.\n\u203B\n You may not defend with Potion of Strength as it does not have a defense value.\n\u203B\n The attack does not gain go again. Potion of Strength requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/PotionOfStrength.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Pummel",
    ruling:
      "\nYou cannot play Pummel if there is not a legal target.\n\u203B\n You cannot target a weapon, only a weapon attack.",
    cardImage: require("./images/Pummel.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Razor Reflex",
    ruling:
      "\nYou cannot play Razor Reflex if there is not a legal target\n\u203B\n You cannot target a weapon, only a weapon attack.\n\u203B\n You cannot target a weapon attack with the second option.\n\u203B\n If this is used on an attack with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.",
    cardImage: require("./images/RazorReflex.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Regurgitating Slog",
    ruling:
      "\nYou must decide if you are banishing a card named Sloggism at the time you play Regurgitating Slog.\n\u203B\n Non-attack action cards go to the graveyard after it resolves, therefore you may banish a Sloggism you played this turn.",
    cardImage: require("./images/RegurgitatingSlog.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Remembrance",
    ruling:
      "\nYou may not defend with Remembrance as it does not have a defense value.\n\u203B\n You may shuffle 0, 1, 2 or 3 action cards from your graveyard into your deck.\n\u203B\n You are not required to announce your choices until the card resolves.\n\u203B\n You may only shuffle action cards from your graveyard into your deck. This includes attack actions. This excludes any card that is not an action such as equipment, resource, defense reaction, attack reaction and instant.\n\u203B\n Remembrance is an instant. You may play it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/Rememberance.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Scar for a Scar",
    ruling:
      "\nThe green symbol on Scar for a Scar is life.\n\u203B\n Scar for a Scar checks if you have less life than your opponent at the time you play it. Changes after the card has been played does not cause Scar for a Scar to gain nor lose go again.",
    cardImage: require("./images/ScarForAScar.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Sink Below",
    ruling:
      "\nSink Below can only be played in the reaction window.\n\u203B\n You must resolve Sink Below’s ability before deciding if you are defending with any additional cards in the reaction window.\n\u203B\n You cannot use Sink Below’s ability if you have no other cards in your hand. You only draw a card if you put a card from your hand on the bottom of your deck.\n\u203B\n Sink Below’s effect is optional. You may still play Sink Below if you have no other cards in your hand.",
    cardImage: require("./images/SinkBelow.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Sigil of Solace",
    ruling:
      "\nThe green symbol on Sigil of Solace is life.\n\u203B\n You may not defend with Sigil of Solace as it does not have a defense value.\n\u203B\n Sigil of Solace is an instant. You may play it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/SigilOfSolace.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Sloggism",
    ruling:
      "\nThe attack action does not gain go again. Sloggism requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/Sloggism.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Snatch",
    ruling:
      "\nThe attack is considered to have hit if it does 1 or more damage to the defending hero.",
    cardImage: require("./images/Snatch.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Tome of Fyendal",
    ruling:
      "\nThe green symbol of Tome of Fyendal is life.\n\u203B\n You can exceed your starting life total. There is no maximum life total.\n\u203B\n If you end the turn with more cards in hand than your hero’s intellect, you do not discard to your hero’s intellect (hand size). There is no maximum hand size.",
    cardImage: require("./images/TomeOfFyendal.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Unmovable",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Unmovable’s cost to play it.\n\u203B\n You may play Unmovable from your hand, however it will not get it’s bonus.",
    cardImage: require("./images/Unmovable.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Wounded Bull",
    ruling:
      "\nThe green symbol on Wounded Bull is life.\n\u203B\n Wounded Bull checks if you have less life than your opponent at the time you play it. Changes after the card has been played does not cause Wounded Bull to gain nor lose +1{p}.",
    cardImage: require("./images/WoundedBull.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Rhinar",
    ruling:
      "\nThis checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.\n\u203B\n The player who owns the card banished face down is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/Rhinar.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Romping Club",
    ruling:
      "\nThis checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.",
    cardImage: require("./images/RompingClub.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Barkbone Strapping",
    ruling:
      "\nIf the number rolled is 1, no resources would be gained.\n\u203B\n You may use Barkbone Strapping’s activated ability even when there is no cost to be paid. Barkbone Strapping’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/BarkboneStrapping.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Scabskin Leathers",
    ruling:
      "\nIf the number rolled is 1, no action points would be gained.\n\u203B\n Scabskin Leathers requires an action point to use.",
    cardImage: require("./images/ScabskinLeathers.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Alpha Rampage",
    ruling:
      "\nYou may only play Alpha Rampage in your deck if your hero is Rhinar, Reckless Rampage or Rhinar (young hero).\n\u203B\n You must have at least one other card in your hand to pay for the additional cost at the time you play Alpha Rampage.\n\u203B\n The player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/AlphaRampage.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Awakening Bellow",
    ruling:
      "\nThis card only affects Brute attack action cards. Brute weapon attack or generic attack actions do not benefit this.\n\u203B\n The player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/AwakeningBellow.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Barraging Beatdown",
    ruling:
      "\nThis card only affects Brute attacks (Brute attack action cards or Brute weapon attacks). Generic attack actions do not benefit this.\n\u203B\n The player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/BarragingBeatdown.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Bloodrush Bellow",
    ruling:
      "\nThis checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.\n\u203B\n This card only affects Brute attacks (Brute attack action cards or Brute weapon attacks). Generic attack actions do not benefit this.",
    cardImage: require("./images/BloodrushBellow.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Bone Head Barrier",
    ruling:
      "\nYou may not defend with Bone Head Barrier as it does not have a defense value.\n\u203B\n You must prevent the incoming damage, you cannot save the prevention for a future attack once Bone Head Barrier resolves.\n\u203B\n Bone Head Barrier is an instant. You may play it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/BoneHeadBarrier.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Breakneck Battery",
    ruling:
      "\nThis checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.",
    cardImage: require("./images/BreakneckBattery.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Pack Hunt",
    ruling:
      "\nThe player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/PackHunt.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Primeval Bellow",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Primeval Bellow.\n\u203B\n This card only affects Brute attacks (Brute attack action cards or Brute weapon attacks). Generic attack actions do not benefit this.\n\u203B\n You can only pitch when there is a cost to pay. You cannot pitch a card to play Primeval Bellow because it costs 0. Yes, we did this to make it awkward.",
    cardImage: require("./images/PrimevalBellow.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Reckless Swing",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Reckless Swing.\n\u203B\n This checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.\n\u203B\n The damage cannot be blocked but it can be prevented by a prevention effect.\n\u203B\n You can only pitch when there is a cost to pay. You cannot pitch a card to play Reckless Swing.",
    cardImage: require("./images/RecklessSwing.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Sand Sketched Plan",
    ruling:
      "\nYou may only play Sand Sketched Plan in your deck if your hero is Rhinar, Reckless Rampage or Rhinar (young hero).\n\u203B\n This checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.\n\u203B\n You may elect not to put a card into your hand, you still must discard and shuffle your deck after.\n\u203B\n You can only pitch when there is a cost to pay. You cannot pitch a card to cast Sand Sketched Plan.\n\u203B\n Sand Sketched Plan does not have go again. If you don’t discard a card with 6 or more power from its effect, your action phase will end unless you had two or more action points before playing Sand Sketched Plan.",
    cardImage: require("./images/SandSketchedPlan.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Savage Swing",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Savage Swing.",
    cardImage: require("./images/SavageSwing.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Smash Instinct",
    ruling:
      "\nThe player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/SmashInstinct.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Wrecker Romp",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Wrecker Romp.",
    cardImage: require("./images/WreckerRomp.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Bravo",
    ruling:
      "\nThe attack action does not gain go again. Bravo’s activated ability requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/Bravo.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Anothos",
    ruling:
      "\nAnothos checks your pitch zone constantly not just when it attacks. If the criteria is met after the attack is made, it will get the +2{p} bonus.\n\u203B\n You can only pitch when there is a cost to pay. (Bravo’s hero ability can be useful for this.)",
    cardImage: require("./images/Anothos.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Helm of Isens Peak",
    ruling:
      "\nThe blue symbol is intellect. This is your hand size (How much you draw up to at the end of turn.)\n\u203B\n You draw up to your hand size before end of turn effects wear off.\n\u203B\n Helm of Isen’s Peak requires an action point to activate. It does not have go again. Activating Helm of Isen Peak will usually end your action phase.\n\u203B\n When you defend with a card it remains on the combat chain until the chain closes, therefore you cannot defend with an equipment multiple times on the same chain link.",
    cardImage: require("./images/HelmOfIsensPeak.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Tectonic Plating",
    ruling:
      "\nA Seismic Surge is a Guardian Token - Aura with “At the beginning of your action phase, destroy Seismic Surge then the next Guardian attack action card you play this turn costs {r} less to play.",
    cardImage: require("./images/TectonicPlating.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Blessing of Deliverance",
    ruling:
      "\nThe green symbol on Blessing of Deliverance is life.\n\u203B\n Blessing of Deliverance checks the resource cost of a card (top right corner), not the pitch value.\n\u203B\n The cards stay in the same order on top of the deck as they were before they were revealed.",
    cardImage: require("./images/BlessingOfDeliverance.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Buckling Blow",
    ruling:
      "\nYou may play Buckling Blow even if defending player controls no equipment.\n\u203B\n You target the equipment at the time the hero takes 4 or more damage.\n\u203B\n The counter stays on the equipment permanently.",
    cardImage: require("./images/BucklingBlow.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Cartilage Crush",
    ruling:
      "\nThis includes all cards with card type action and all action activated abilities.",
    cardImage: require("./images/CartilageCrush.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Cranial Crush",
    ruling:
      "\nThis does not affect drawing up to your hand size since that is done during the end of turn phase.\n\u203B\n Does not stop effects that put a card into their hand from their deck.\n\u203B\n The player may still play cards that would draw cards. If they do, and would draw 1 or more cards during their action phase, instead they don’t. (The rest of the card effect still applies)",
    cardImage: require("./images/CranialCrush.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Crippling Crush",
    ruling:
      "\nYou may only play Crippling Crush in your deck if your hero is Bravo, Showstopper or Bravo (young hero)",
    cardImage: require("./images/CripplingCrush.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Crush Confidence",
    ruling: "\nThe hero’s intellect, health and hero name is unaffected.",
    cardImage: require("./images/CrushConfidence.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Debilitate",
    ruling:
      "\nIf the power of an attack would become less than 0, it is considered to be 0. However if the attack then gets a positive power modifier, it will still be under the effect of the -2{p} modifier.\n\u203B\n This affects all attacks including attack action cards and weapon attacks.",
    cardImage: require("./images/Debilitate.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Disable",
    ruling:
      "\nYou may still play Disable even if the other player does not have an arsenal.",
    cardImage: require("./images/Disable.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Emerging Power",
    ruling:
      "\nEmerging Power must be destroyed at the beginning of your action phase, it is not optional.",
    cardImage: require("./images/EmergingPower.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Forged for War",
    ruling:
      "\nForged for War must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n You may defend with an equipment if it has a defense value (0 is a value).\n\u203B\n The equipment does not need Blade Break or Battleworn to defend.",
    cardImage: require("./images/ForgedForWar.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Show Time!",
    ruling:
      "\nYou may only play Show Time! in your deck if your hero is Bravo, Showstopper or Bravo (young hero).\n\u203B\n Show Time! must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n You may elect not to put a card into your hand, you still must shuffle your deck after.",
    cardImage: require("./images/ShowTime.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Staunch Response",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Staunch Response’s cost to play it.\n\u203B\n You choose if you want to pay the additional cost at the time you play Staunch Response.\n\u203B\n The additional cost is in addition to Staunch Reponse’s normal resource cost. If you want to play Staunch Response with the bonus, it would cost {r}{r}{r}{r}{r}{r} to play.\n\u203B\n If you pay the additional cost of Staunch Response, it’s still considered to cost 2 (as printed in the top right corner of the card.)",
    cardImage: require("./images/StaunchResponse.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Stonewall Confidence",
    ruling:
      "\nStonewall Confidence must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n Stonewall Confidence modifies the defense value of all cards you control with cost 3 or greater. This includes guardian cards and generic cards.",
    cardImage: require("./images/StonewallConfidence.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Spinal Crush",
    ruling:
      "\nThe effect of Spinal Crush affects actions from any source controlled by that hero. This includes activated actions of equipment, weapons, and hero cards, and playing action cards of any type.\n\u203B\n This does not stop effects that directly gain action points outside of go again.",
    cardImage: require("./images/SpinalCrush.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Katsu",
    ruling:
      "\nYou may elect not to banish a card when searching, however you still must shuffle your deck.\n\u203B\nKatsu's hero card effect triggers only once per turn, the first time you hit with an attack action card. If you choose not to resolve the effect and you hit again later in the same turn, Katsu's hero card effect will not trigger again.",
    cardImage: require("./images/Katsu.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Harmonized Kodachi",
    ruling:
      "\nIt is possible for Harmonized Kodachi to gain go again after the attack has been declared if a card with cost 0 enters the pitch zone before the chain link resolves.\n\u203B\n You can only pitch when there is a cost to pay.\n\u203B\n You may start the game with zero, one or two Harmonized Kodachis as it is a 1-handed weapon. (We highly recommend choosing 2.)",
    cardImage: require("./images/HarmonizedKodachi.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Breaking Scales",
    ruling:
      "\nBreaking Scales can only target a card with combo.\n\u203B\n The card must have the keyword combo (displayed on a card as Combo - [text]) This does not include cards that just reference combo or have combo in the text box.",
    cardImage: require("./images/BreakingScales.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Mask of Momentum",
    ruling:
      "\nMask of Momentum does not keep track of hits in a row of the previous combat chain (If the combat chain was closed).\n\u203B\n The attack must be the third to hit in a row.\n\u203B\n The third or higher attack must be an attack action card to trigger Mask of Momentum, however the previous attacks can be any attack ie. weapon attacks.",
    cardImage: require("./images/MaskOfMomentum.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Ancestral Empowerment",
    ruling:
      "\nAncestral Empowerment can only target ninja attack action cards. This excludes weapon attacks and generic attack action cards.",
    cardImage: require("./images/AncestralEmpowerment.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Flic Flak",
    ruling:
      "\nThe card must have the keyword combo (displayed on a card as Combo - [text]) This does not include cards that just reference combo or have combo in the text box.\n\u203B\n You cannot block with Flic Flak and a combo card simultaneously as Flic Flak must be used during the reaction window and that is after the defending window. Flic Flak is good when your opponent attacks again after the attack Flic Flak defended.\n\u203B\n The effect from Flic Flak is active until either you defend with another card or the turn ends. Closing the combat chain does not turn off Flic Flak’s effect.",
    cardImage: require("./images/FlickFlack.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Hurricane Technique",
    ruling:
      "\nTIf Hurricane Technique hits and returns to your hand (because Rising Knee Thrust was the last attack), and you then immediately play Hurricane Technique again, it will not gain its combo effect (because the last attack on the combat chain was not Rising Knee Thrust - it was Hurricane Technique).",
    cardImage: require("./images/HurricaneTechnique.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Mugenshi: RELEASE",
    ruling:
      "\nYou may only play Mugenshi: RELEASE in your deck if your hero is Katsu, the Wanderer or Katsu (young hero).\n\u203B\n You may elect not to put any card(s) into your hand, you still must shuffle your deck after.",
    cardImage: require("./images/Mugenshi.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Lord of Wind",
    ruling:
      "\nYou may only play Lord of Wind in your deck if your hero is Katsu, the Wanderer or Katsu (young hero).\n\u203B\n You choose X at the time you play Lord of Wind.\n\u203B\n X can be 0.\n\u203B\n X cannot be greater than the number of legal targets ie. Surging Strikes, Whelming Gustwaves, and Mugenshi: RELEASE in your graveyard.\n\u203B\n You only shuffle your deck if you put at least one card into your deck.\n\u203B\n The “If you do, [...]” effect is an on-play triggered ability which triggers if the additional cost is played. This means it can be responded to, and it resolves before Lord of Wind resolves and becomes attacking.",
    cardImage: require("./images/LordOfWind.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Pounding Gale",
    ruling:
      "\nPounding Gale doubles the damage that is dealt to a hero after damage calculation. It does not affect the defense value of the cards blocking Pounding Gale.",
    cardImage: require("./images/PoundingGale.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Dorinthea",
    ruling:
      "\nThis ability does not give the weapon attack go again. You are still required to have an action point to attack again.\n\u203B\n This ability bypasses the “Once per Turn Action - Attack” on weapons and allows an additional attack with the same weapon\n\u203B\n This effect is mandatory, the first weapon you hit with each turn gets this effect. It cannot be saved up for a future weapon attack that turn.",
    cardImage: require("./images/Dorinthea.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Dawnblade",
    ruling:
      "\nDawnblade does not have go again nor can it attack more than once per turn. Dawnblade requires other cards to allow Dawnblade to attack more than once.\n\u203B\n A +1{p} counter is a permanent effect that increases the power of Dawnblade (until the counter is removed)",
    cardImage: require("./images/Dawnblade.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Braveforge Bracers",
    ruling:
      "\nThis only effects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.",
    cardImage: require("./images/BraveforgeBracers.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Refraction Bolters",
    ruling:
      "\nIf this is used on an attack with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.\n\u203B\n You decide if you want to destroy Refraction Bolters after the attack has hit and the damage is dealt.",
    cardImage: require("./images/RefractionBolters.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Biting Blade",
    ruling:
      "\nThe first line only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\n\u203B\n The second line affects the base power of all weapons you control. It gives a +1{p} bonus to all weapons you control, including the current attack and any additional attacks that weapon may make this turn.",
    cardImage: require("./images/BitingBlade.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Driving Blade",
    ruling:
      "\nThis only effects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.\n\u203B\n The weapon attack has go again regardless if it hits.",
    cardImage: require("./images/DrivingBlade.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Ironsong Determination",
    ruling:
      "\nTThis affects all weapon attacks from target weapon this turn not just the next attack.\n\u203B\n An attack with Dominate cannot be defended with more than 1 card from hand.",
    cardImage: require("./images/IronsongDetermination.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Ironsong Response",
    ruling:
      "\nIronsong Response has no card text if reprise is not active but can still be played. It simply won’t do anything on resolution.\n\u203B\n This only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.",
    cardImage: require("./images/IronsongResponse.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Nature’s Path Pilgrimage",
    ruling:
      "\nThe attack does not gain go again. Nature’s Path Pilgrimage requires an action point to use and provides an action point from go again upon resolution.\n\u203B\n This only affects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.\n\u203B\n The ability only triggers if you have no cards in your arsenal at the time the attack hits.\n\u203B\n You must place the card in your arsenal if it is an action. It is not optional.",
    cardImage: require("./images/NaturesPathPilgrimage.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Overpower",
    ruling:
      "\nThis only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.",
    cardImage: require("./images/Overpower.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Rout",
    ruling:
      "\nThis only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\n\u203B\n If reprise is active, you can only play Rout if there is a legal target.\n\u203B\n The defense value of a defending card removed from the chain link is not included in damage calculation.\n\u203B\n A defense reaction card that is returned to hand by Rout, can be replayed.",
    cardImage: require("./images/Rout.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Sharpen Steel",
    ruling:
      "\nThe attack does not gain go again. Sharpen Steel requires an action point to use and provides an action point from go again upon resolution.\n\u203B\n This only affects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.",
    cardImage: require("./images/SharpenSteel.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Singing Steelblade",
    ruling:
      "\nYou may only play Singing Steelblade in your deck if your hero is Dorinthea Ironsong or Dorinthea (young hero).\n\u203B\n This only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\n\u203B\n A combat chain is made up of one of more chain links. The banished card can only be played on the chain link Singing Steelblade was played.\n\u203B\n You may elect not to banish a card when searching, however you still must shuffle your deck.\n\u203B\n The card played from the banished zone goes to the graveyard upon resolution.",
    cardImage: require("./images/SingingSteelblade.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Steelblade Shunt",
    ruling:
      "\nThe damage cannot be blocked but it can be prevented by a prevention effect.",
    cardImage: require("./images/SteelbladeShunt.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Steelblade Supremacy",
    ruling:
      "\nYou may only have Steelblade Supremacy in your deck if your hero is Dorinthea Ironsong or Dorinthea (young hero).\n\u203B\n This affects all weapon attacks from target weapon this turn not just the next attack.",
    cardImage: require("./images/SteelbladeSupremacy.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Stroke of Foresight",
    ruling:
      "\nThis only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\n\u203B\n You use the reprise ability at the time the attack reaction resolves. (assuming reprise is active)\n\u203B\n If you have no cards in hand at the time you play this with reprise active, you still draw a card then immediately put the card on the top or bottom of your deck.\n\u203B\n You draw a card then immediately put a card from your hand on the top or bottom of your deck. There is no priority between drawing the card and putting a card on the top or bottom of your deck.",
    cardImage: require("./images/StrokeOfForesight.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Warrior’s Valor",
    ruling:
      "\nThis only affects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.",
    cardImage: require("./images/WarriorsValor.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Arcanite Skullcap",
    ruling:
      "\nYou may have multiple instances of arcane barrier.\n\u203B\n You must pay {r}{r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.\n\u203B\n Arcanite Skullcap always has battleworn, even if you are on higher or lower {h} than your opponent.\n\u203B\n Arcanite Skullcap gains the bonus if there is at least one opponent on less {h}. If there are multiple opponents on less {h}, arcanite skullcap still only gains the bonus once.\n\u203B\n If your {h} becomes higher or lower after defending but before damage calculation, the value of {d} will change accordingly.",
    cardImage: require("./images/ArcaniteSkullcap.webp"),
    set: "ARC",
  },
  {
    name: "Bracers of Belief",
    ruling:
      "\nIf there are no cards left in deck, the attack will not gain any power, this is because of the “If you do” clause.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/BracersOfBelief.webp"),
    set: "ARC",
  },
  {
    name: "Mage Master Boots",
    ruling:
      "\nIf this is used on a ‘non-attack’ action card with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.\n\u203B\n This is an action. It must be activated before you play the ‘non-attack’ action card.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/MageMasterBoots.webp"),
    set: "ARC",
  },
  {
    name: "Talismanic Lens",
    ruling:
      "\nTalismanic Len’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/TalismanicLens.webp"),
    set: "ARC",
  },
  {
    name: "Vest of the First Fist",
    ruling:
      "\nYou choose if you want to destroy Vest of the First Fist after the attack action hits (during chain link resolution).\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/VestOfTheFirstFist.webp"),
    set: "ARC",
  },
  {
    name: "Art of War",
    ruling:
      "\nYou must choose the modes as you play Art of War.\n\u203B\n You cannot choose the same mode more than once.\n\u203B\n You must choose two modes.\n\u203B\n Defending with an attack action card from arsenal still follows normal timing restrictions. You must defend with the card during the defending window.\n\u203B\n Cards without an attack or defense value cannot gain attack or defense.",
    cardImage: require("./images/ArtOfWar.webp"),
    set: "ARC",
  },
  {
    name: "Back Alley Breakline",
    ruling:
      "\nThe following are zones in this game: Hero, Weapon, Equipment, Chain, Pitch, Arsenal, Deck, Graveyard, Banished and Arena.\n\u203B\n It must be placed face up into a zone from your deck. Revealing it face up on top of your deck does not count as it is not put into a different zone from your deck.",
    cardImage: require("./images/BackAlleyBreakline.webp"),
    set: "ARC",
  },
  {
    name: "Chains of Eminence",
    ruling:
      "\nYou name the card when the ability resolves. Players can respond to Chains of Eminence being played, but not after the card has been named.\n\u203B\n You may still put the named card in your arsenal or reveal it to pay additional costs.\n\u203B\n Auras stay in the arena until they are destroyed.",
    cardImage: require("./images/ChainsOfEminence.webp"),
    set: "ARC",
  },
  {
    name: "Command and Conquer",
    ruling:
      "\nThe destroyed card is put into its owner’s graveyard.\n\u203B\n Chain link is different from combat chain. If another attack is played after Command and Conquer in the same combat chain, defense reactions can be played on that attack.",
    cardImage: require("./images/CommandAndConquer.webp"),
    set: "ARC",
  },
  {
    name: "Eirina's Prayer",
    ruling:
      "\nIf you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n If you are about to take arcane damage you may use arcane barrier to prevent before the prevention from Eirina's Prayer.\n\u203B\n If there is no cards in deck, Eirina’s Prayer will not get any minus as there is no pitch value to reveal, It will still prevent the next X arcane damage.\n\u203B\n The pitch value of a card is located in the top left corner.",
    cardImage: require("./images/EirinasPrayer.webp"),
    set: "ARC",
  },
  {
    name: "Enchanting Melody",
    ruling:
      "\nIf you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n If you are about to take arcane damage you may use arcane barrier to prevent first before this prevention.\n\u203B\n Loss of life does not count as being dealt damage.\n\u203B\n Enchanting Melody is a ‘non-attack’ action therefore it will prevent itself from being destroyed the turn you play it.",
    cardImage: require("./images/EnchantingMelody.webp"),
    set: "ARC",
  },
  {
    name: "Eye of Ophidia",
    ruling:
      "\nYou may not defend with this card. (It does not have a defense value)\n\u203B\n You must have a cost to pay to pitch this card. You cannot pitch this card without a cost to pay.\n\u203B\n The opt will resolve before the card or effect you pay for resolves.\nYou may only have 1 Eye of Ophidia in your deck including cards in your registered 80-card pool in constructed tournaments and only 1 Eye of Ophidia in your deck in limited tournaments.",
    cardImage: require("./images/EyeOfOphidia.webp"),
    set: "ARC",
  },
  {
    name: "Fate Foreseen",
    ruling:
      "\nFate Foreseen can only be played in the reaction step of a combat chain.\n\u203B\n Once Fate Foreseen resolves, you get to opt before deciding whether to play additional cards in the reaction step.",
    cardImage: require("./images/FateForseen.webp"),
    set: "ARC",
  },
  {
    name: "Lead the Charge",
    ruling:
      "\nIf the action has go again you will end up with 2 action points once that card resolves.\n\u203B\n An action point allows you to play action cards and action activated abilities as they require an action point to play. (Not to be confused with resource points which are used to pay costs)\n\u203B\n Lead the Charge looks at the base cost of the action card. Modifiers do not affect this.",
    cardImage: require("./images/LeadTheCharge.webp"),
    set: "ARC",
  },
  {
    name: "Life for a Life",
    ruling:
      "\nThe green symbol on Life for a Life is your hero's life.\n\u203B\n Life for a Life checks if you have less life than your opponent at the time you play it.\n\u203B\n Changes to a hero's life after the card has been played does not cause Life for a Life to gain nor lose go again.",
    cardImage: require("./images/LifeForALife.webp"),
    set: "ARC",
  },
  {
    name: "Moon Wish",
    ruling:
      "\nYou may only use Moon Wish’s alternative cost if you have a card in hand to put on top of your deck.\n\u203B\n If Moon Wish hits, you search your deck and may put a Sun Kiss into your hand. You still require an action point to play Sun Kiss.\n\u203B\n Searching your deck for Sun Kiss is not an optional effect, so even if you fail to find, or know that you have no Sun Kiss in your deck, you must still shuffle your deck.\n\u203B\n If there is an effect that increases the cost of Moon Wish, you must still pay it even if you use Moon Wish’s alternative cost.",
    cardImage: require("./images/MoonWish.webp"),
    set: "ARC",
  },
  {
    name: "Plunder Run",
    ruling:
      "\nThe first effect of Plunder Run checks on the next attack action card to hit, not the next attack action played.",
    cardImage: require("./images/PlunderRun.webp"),
    set: "ARC",
  },
  {
    name: "Pursuit of Knowledge",
    ruling:
      "\nThe blue symbol on Pursuit of Knowledge is your hero's intellect.\n\u203B\n You draw cards up to your intellect before end of turn effects end. In this case you will draw an additional card during the end phase from the intellect buff if Pursuit of Knowledge hit.",
    cardImage: require("./images/PursuitOfKnowledge.webp"),
    set: "ARC",
  },
  {
    name: "Ravenous Rabble",
    ruling:
      "\nIf there are no cards in deck, you can still play Ravenous Rabble and its {p} will be 5.",
    cardImage: require("./images/RavenousRabble.webp"),
    set: "ARC",
  },
  {
    name: "Rifting",
    ruling:
      "\nThe ‘non-attack’ action card does not need to be played straight away\n\u203B\n You may elect to still play it as normal, however if you do, you cannot play another ‘non-attack’ action card as an instant as this only applies to the next ‘non-attack’ action card.",
    cardImage: require("./images/Rifting.webp"),
    set: "ARC",
  },
  {
    name: "Rusted Relic",
    ruling:
      "\nRusted Relic requires an action point to play as it is an action card.\n\u203B\n Items stay in the arena until they are destroyed.\n\u203B\n You can have multiple instances of arcane barrier.\n\u203B\n You may not defend with Rusted Relic (from your hand) as it does not have a defense value.",
    cardImage: require("./images/RustedRelic.webp"),
    set: "ARC",
  },
  {
    name: "Sun Kiss",
    ruling:
      "\nThe green symbol on Sun Kiss is your hero's life.\n\u203B\n Sun Kiss requires an action point to play as it is an action.",
    cardImage: require("./images/SunKiss.webp"),
    set: "ARC",
  },
  {
    name: "Vigor Rush",
    ruling:
      "\nIf you play a ‘non-attack’ action card after you’ve attacked with Vigor Rush but before chain link resolution, it will gain go again.",
    cardImage: require("./images/VigorRush.webp"),
    set: "ARC",
  },
  {
    name: "Dash",
    ruling:
      "\nThe item must be chosen before you present your deck.\n\u203B\n The card is considered in your deck when counting the minimum sized deck (i.e, once your item is chosen, you can have 59 cards in deck to present in constructed or 29 cards for sealed deck/booster draft).\n\u203B\n The item starts with the appropriate counters as though it had entered the arena.\n\u203B\n You may elect to not start with an item in play.",
    cardImage: require("./images/Dash.webp"),
    set: "ARC",
  },
  {
    name: "Teklo Plasma Pistol",
    ruling:
      "\nYou may use the second ability even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n You can attack with this weapon more than once per turn provided you have the action points.",
    cardImage: require("./images/TekloPlasmaPistol.webp"),
    set: "ARC",
  },
  {
    name: "Teklo Foundry Heart",
    ruling:
      "\nYou may only activate this once, even if you have boosted multiple times in a turn.\n\u203B\n Since this is an action, the combat chain must be empty when this is activated. You may close the combat chain after your boost attack but before activating this)\n\u203B\n You may use this even if you have less than 2 cards in your deck.",
    cardImage: require("./images/TekloFoundryHeart.webp"),
    set: "ARC",
  },
  {
    name: "Achilles Accelerator",
    ruling:
      "\nAn action point allows you to play action cards and action activated abilities as they require an action point to play. (Not to be confused with resource points which are used to pay costs)\n\u203B\n The boost does not need to be successful. You can use Achilles Accelerator after banishing a non-Mechanologist card from a boost cost.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/AchillesAccelerator.webp"),
    set: "ARC",
  },
  {
    name: "Aether Sink",
    ruling:
      "\nAether Sink requires an action point to play as it is an action.\n\u203B\n You can have multiple instances of arcane barrier.\n\u203B\n You may not defend with Aether Sink (from hand) as it does not have a defense value.\n\u203B\n You must pay {r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.\n\u203B\n You may use the action even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n If you activate Aether Sink's second ability multiple times in the same turn, it will gain multiple instances of arcane barrier 2.",
    cardImage: require("./images/AetherSink.webp"),
    set: "ARC",
  },
  {
    name: "Cognition Nodes",
    ruling:
      "\nCognition Nodes requires an action point to play as it is an action.\n\u203B\n You may not defend with Cognition Nodes (from your hand) as it does not have a defense value.\n\u203B\n You may use the action ability even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n The attack still counts as an attack and a chain link on the combat chain even when it is put on the bottom of your deck.",
    cardImage: require("./images/CognitionNodes.webp"),
    set: "ARC",
  },
  {
    name: "Convection Amplifier",
    ruling:
      "\nConvection Amplifier requires an action point to play as it is an action.\n\u203B\n You may not defend with Convection Amplifier (from your hand) as it does not have a defense value.\n\u203B\n You can use the Action more than once per turn as long as it has a steam counter on it as the action is not limited to once per turn.\n\u203B\n Using this action requires an empty combat chain. You can close the combat chain after a chain link has resolved.",
    cardImage: require("./images/AetherSink.webp"),
    set: "ARC",
  },
  {
    name: "Dissipation Shield",
    ruling:
      "\nDissipation Shield requires an action point to play as it is an action.\n\u203B\n You may not defend with Dissipation Shield (from your hand) as it does not have a defense value.\n\u203B\n If you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n This can prevent any type of damage, including arcane damage.\n\u203B\n This cannot prevent loss of life.\n\u203B\n You may activate the instant ability anytime you have priority including when the trigger is on the stack.",
    cardImage: require("./images/DissipationShield.webp"),
    set: "ARC",
  },
  {
    name: "High Octane",
    ruling:
      "\nAn action point allows you to play action cards and action activated abilities as they require an action point to play. (Not to be confused with resource points which are used to pay costs)\n\u203B\n The boost does not need to be successful. You will still gain an action point if you banish a non-Mechanologist card from a boost cost.\n\u203B\n You draw a card when this card resolves, not whenever you boost a card this turn.",
    cardImage: require("./images/HighOctane.webp"),
    set: "ARC",
  },
  {
    name: "Hyper Driver",
    ruling:
      "\nHyper Driver requires an action point to play as it is an action.\n\u203B\n You may not defend with Hyper Driver (from your hand) as it does not have a defense value.\n\u203B\n The effect is not optional, you must remove a steam counter and gain {r} when you boost, including when your boost is unsuccessful.",
    cardImage: require("./images/HyperDriver.webp"),
    set: "ARC",
  },
  {
    name: "Induction Chamber",
    ruling:
      "\nInduction Chamber requires an action point to play as it is an action.\n\u203B\n You may not defend with Induction Chamber (from hand) as it does not have a defense value.\n\u203B\n You may use the action even if it already has one or more steam counters on it, however it will not put a steam counter on it.",
    cardImage: require("./images/InductionChamber.webp"),
    set: "ARC",
  },
  {
    name: "Locked and Loaded",
    ruling:
      "\nThe boost does not need to be successful. You will still opt 1 if you banish a non-Mechanologist card from a boost cost.",
    cardImage: require("./images/LockedAndLoaded.webp"),
    set: "ARC",
  },
  {
    name: "Maximum Velocity",
    ruling:
      "\nYou cannot play this card if you have not boosted 3 or more times this turn.\n\u203B\n You may still pitch or defend with this card even if you have not boosted 3 or more times this turn.",
    cardImage: require("./images/MaximumVelocity.webp"),
    set: "ARC",
  },
  {
    name: "Optekal Monocle",
    ruling:
      "\nOptekal Monocle requires an action point to play as it is an action.\n\u203B\n You may not defend with Optekal Monocle (from hand) as it does not have a defense value.\n\u203B\n You can use the action ability more than once per turn as long as it has a steam counter on it. It is not once per turn.\n\u203B\n Using this action requires an empty combat chain. You can close the combat chain after a chain link has fully resolved.",
    cardImage: require("./images/OptekalMonocle.webp"),
    set: "ARC",
  },
  {
    name: "Over Loop",
    ruling:
      "\nOver Loop still counts as an attack and a chain on the combat chain when it is put onto the bottom of your deck.\n\u203B\n Over Loop still resolves and gives you an action point if it had go again when it's put on the bottom of your deck.",
    cardImage: require("./images/HyperDriver.webp"),
    set: "ARC",
  },
  {
    name: "Pedal to the Metal",
    ruling:
      "\nIt does not need to be the next attack on the combat chain. It will still apply to the next attack even if the chain was closed in between.\n\u203B\n This affects all types of attacks including weapon attacks.",
    cardImage: require("./images/PedalToTheMedal.webp"),
    set: "ARC",
  },
  {
    name: "Pour the Mold",
    ruling:
      "\nYou may elect not to put a Mechanologist item into play when this card resolves.\n\u203B\n The cost of a card is located on the top right corner.\n\u203B\n The boost does not need to be successful. The item will still come into play with an additional steam counter on it if a non-Mechanologist card is boosted.\n\u203B\n If you have boosted, the item comes into play with an additional steam counter on it, this cannot be responded to.\n\u203B\n The item is considered to have entered the arena.",
    cardImage: require("./images/PourTheMold.webp"),
    set: "ARC",
  },
  {
    name: "Spark of Genius",
    ruling:
      "\nYou may only play Spark of Genius in your deck if your hero is Dash, Inventor Extraordinaire, or Dash (young hero).\n\u203B\n X can be 0.\n\u203B\n The value of X is 0 if it has not been defined, such as when it is in your hand.\n\u203B\n The value of X must be the same.\n\u203B\n You must pay double the cost of X. For example if you want to search for a card that cost 2, you must pay 4 for Spark of Genius.\n\u203B\n The cost of a card is located on the top right corner.\n\u203B\n The boost does not need to be successful. You will still draw a card if boost was unsuccessful.\n\u203B\n The item is considered to have entered the arena.",
    cardImage: require("./images/SparkOfGenius.webp"),
    set: "ARC",
  },
  {
    name: "Teklo Core",
    ruling:
      "\nYou may only play Teklo Core in your deck if your hero is Dash, Inventor Extraordinaire, or Dash (young hero).\n\u203B\n Teklo Core requires an action point to play as it is an action.\n\u203B\n You may not defend with Teklo Core (from hand) as it does not have a defense value.\n\u203B\n The effect is not optional. You must remove a steam counter and gain {r}{r} at the beginning of your action phase.",
    cardImage: require("./images/TekloCore.webp"),
    set: "ARC",
  },
  {
    name: "Azalea",
    ruling:
      "\nIf you have no cards in deck and you activate Azalea's hero ability, it will put the card you placed on the bottom, back into the arsenal face up.\n\u203B\n If there is no card in your arsenal when this effect resolves, you do not put the top card into your arsenal.\n\u203B\n You may activate this even when you have no card in arsenal. When it resolves you do not put the top card of your deck into your arsenal.",
    cardImage: require("./images/Azalea.webp"),
    set: "ARC",
  },
  {
    name: "Death Dealer",
    ruling:
      "\nYou cannot attack with this weapon.\n\u203B\n You may use this ability even when you have a card in your arsenal, however you cannot put an arrow card from your hand into your arsenal or draw a card.\n\u203B\n An arrow card has the subtype “arrow” and is located at the bottom middle of the card.\n\u203B\n An arrow can be played from arsenal even if it wasn’t a bow that placed it in the arsenal.\n\u203B\n This does not give the arrow go again. (The action of Death Dealer has go again)",
    cardImage: require("./images/DeathDealer.webp"),
    set: "ARC",
  },
  {
    name: "Skullbone Crosswrap",
    ruling:
      "\nTurning a face down card face up is part of the cost. You cannot use Skullbone Crosswrap if you do not have a card in arsenal or the card is not face down.\n\u203B\n A face down card is a card with the back part of the card facing up. When you put a card into your arsenal at the end of turn or with reload, the card is face down.\n\u203B\n You may have multiple instances of arcane barrier.",
    cardImage: require("./images/SkullboneCrosswrap.webp"),
    set: "ARC",
  },
  {
    name: "Bull's Eye Bracers",
    ruling:
      "\nYou may activate Bull’s Eye Bracers if you have a card in your arsenal, however it will not put an arrow into your arsenal or give anything +{p}.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/BullsEyeBracers.webp"),
    set: "ARC",
  },
  {
    name: "Endless Arrow",
    ruling:
      "\nEndless Arrow is still considered an attack that hit and a chain link on the combat chain when it's returned to your hand.\n\u203B\n Endless Arrow will still require an action point (and to be played from arsenal) if you are attempting to replay the Endless Arrow returned to your hand.",
    cardImage: require("./images/EndlessArrow.webp"),
    set: "ARC",
  },
  {
    name: "Hamstring Shot",
    ruling:
      "\nThis affects both attack action cards and weapon attacks.\n\u203B\n This does not change the base cost of the attack.\n\u203B\n If an attack has a cost reduction clause, the additional {r} from Hamstring Shot can be reduced. Effects that increase cost are applied first, then effects that reduce costs.",
    cardImage: require("./images/HamstringShot.webp"),
    set: "ARC",
  },
  {
    name: "Head Shot",
    ruling:
      "\nIt only gains the +2{p} until end of turn. If you do not attack with Head Shot on the same turn, it won’t have the bonus the following turn.\n\u203B\n Head Shot must be placed into your arsenal face up, turning a face down Head Shot in arsenal face up will not grant the bonus.",
    cardImage: require("./images/HeadShot.webp"),
    set: "ARC",
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.webp"),
    set: "ARC",
  },
  {
    name: "Rapid Fire",
    ruling:
      "\nArrows are still required to be played from arsenal, this card does not bypass that restriction.",
    cardImage: require("./images/NockTheDeathWhistle.webp"),
    set: "ARC",
  },
  {
    name: "Red in the Ledger",
    ruling:
      "\nYou may only play Red in the Ledger in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n The affected player can still play and activate instant and reaction cards as they are not actions.\n\u203B\n Multiple action points do not get around this ability. The affected player may only play or activate 1 action even if they have additional action points.\n\u203B\n Actions played as though they were an instant still count as action cards. Playing an action as though it was an instant does not get around Red in the Ledgers ability.",
    cardImage: require("./images/RedInTheLedger.webp"),
    set: "ARC",
  },
  {
    name: "Ridge Rider Shot",
    ruling:
      "\nRidge Rider Shot must be placed into your arsenal face up, turning a face down Ridge Rider Shot in arsenal face up will not grant the bonus.",
    cardImage: require("./images/RidgeRiderShot.webp"),
    set: "ARC",
  },
  {
    name: "Salvage Shot",
    ruling:
      "\nSalvage Shot is still considered an attack that hit and a chain link on the combat chain even when it is put on the bottom of your deck.\n\u203B\n Putting Salvage Shot on the bottom of your deck is not optional.",
    cardImage: require("./images/SalvageShot.webp"),
    set: "ARC",
  },
  {
    name: "Searing Shot",
    ruling:
      "\nThe green symbol on Searing Shot is a hero's life.\n\u203B\n The loss of life cannot be defended or prevented.",
    cardImage: require("./images/SearingShot.webp"),
    set: "ARC",
  },
  {
    name: "Silver the Tip",
    ruling:
      "\nIf you have a card in arsenal, Silver the Tip can still be played, however it will not do anything beyond replenishing your action point from go again.\n\u203B\n You do not look at the top 2/3/4 cards if you have a card in arsenal.\n\u203B\n You do not have to put an arrow card into your arsenal.",
    cardImage: require("./images/SilverTheTip.webp"),
    set: "ARC",
  },
  {
    name: "Take Cover",
    ruling:
      "\nYou may still play Take Cover with an arsenal in play.\n\u203B\n If you play Take Cover from your arsenal, you may reload when Take Cover resolves.\n\u203B\n Take Cover’s reload happens before damage calculation so you may play the card you reloaded from arsenal before damage calculation. For example you may reload another defense reaction and play that to the same chain link you played Take Cover.",
    cardImage: require("./images/TakeCover.webp"),
    set: "ARC",
  },
  {
    name: "Three of a Kind",
    ruling:
      "\nYou still need to pay the cost and action points to play cards out of your arsenal.\n\u203B\n You cannot play any cards except cards from arsenal, this includes cards from hand, banished zone or deck.\n\u203B\n The restriction applies to all card types. You cannot play instants or attack reactions unless they are played from your arsenal.\n\u203B\n You may still activate cards, such as weapons, equipment, hero abilities, and items.",
    cardImage: require("./images/ThreeOfAKind.webp"),
    set: "ARC",
  },
  {
    name: "Viserai",
    ruling:
      "\nViserai's hero ability is not once per turn. You can create multiple Runechants in a single turn with his ability.\n\u203B\n The non-attack action card does not have to be a Runeblade card.\n\u203B\n The following are counted as Runeblade cards: Runeblade attack action, Runeblade action, Runeblade Instant, Runeblade attack reaction and Runeblade defense reaction.",
    cardImage: require("./images/Viserai.webp"),
    set: "ARC",
  },
  {
    name: "Nebula Blade",
    ruling:
      "\nNebula Blade can only get the power bonus once per turn even if you played multiple ‘non-attack’ action cards.\n\u203B\n If you play a ‘non-attack’ action card after you’ve attacked with Nebula Blade but before it does damage, it will still get the power bonus.",
    cardImage: require("./images/NebulaBlade.webp"),
    set: "ARC",
  },
  {
    name: "Grasp of the Arknight",
    ruling:
      "\nThe cost checks how many runechant tokens you have at the time you activate it, it does not include the runechant token you are about to make.\n\u203B\n You cannot use this ability if you cannot pay the required costs. (You cannot sink resources into this if you cannot pay the full cost)",
    cardImage: require("./images/GraspOfTheArknight.webp"),
    set: "ARC",
  },
  {
    name: "Crown of Dichotomy",
    ruling:
      "\nThis requires an action point to activate. It does not have go again.\n\u203B\n You must have two legal targets in order to use this.\n\u203B\n If one of the targets becomes illegal before resolution, it will still put the other target on top of the deck.",
    cardImage: require("./images/CrownOfDichotomy.webp"),
    set: "ARC",
  },
  {
    name: "Arknight Ascendancy",
    ruling:
      "\nYou may only play Arknight Ascendancy in your deck if your hero is Viserai, Rune Blood or Viserai (young hero).\n\u203B\n Dominate means the defending player cannot defend Arknight Ascendency with more than 1 card from their hand.",
    cardImage: require("./images/ArknightAscendency.webp"),
    set: "ARC",
  },
  {
    name: "Become the Arknight",
    ruling:
      "\nYou choose the mode at the time you play the card.\n\u203B\n Discarding the card happens on resolution of the of the card. If you cannot or choose not to discard a card, the effect will not resolve.\n\u203B\n You may elect not to put a card into your hand. If you do, you still shuffle your deck.\n\u203B\n You may not discard a non-action card, such as an instant.\n\u203B\n You cannot discard more than one card.",
    cardImage: require("./images/BecomeTheArknight.webp"),
    set: "ARC",
  },
  {
    name: "Bloodspill Invocation",
    ruling:
      "\nDamage from attacks and arcane damage both count as being dealt damage.\n\u203B\n If Bloodspill Invocation triggers but is destroyed before the resolution, it will still create the tokens. This is because the clause is not tied into being destroyed. (Not an “If you do”.)",
    cardImage: require("./images/BloodspillInvocation.webp"),
    set: "ARC",
  },
  {
    name: "Mordred Tide",
    ruling:
      "\nAn additional one Runechant is created for the entire effect creating Runechants. For example if you were to make three Runechant tokens from a single effect, it would instead create four.\n\u203B\n Multiple Mordred Tide effects will result in that many additional Runechants being created.\n\u203B\n If playing Mordred Tide would trigger Viserai’s ability, it would not create an additional Runechant as Mordred Tide would not have resolved by the time Viserai’s ability has.",
    cardImage: require("./images/MordredTide.webp"),
    set: "ARC",
  },
  {
    name: "Oath of the Arknight",
    ruling:
      "\nThis affects all types of Runeblade attacks including Runeblade Weapon attacks.",
    cardImage: require("./images/OathOfTheArknight.webp"),
    set: "ARC",
  },
  {
    name: "Read the Runes",
    ruling:
      "\nRead the Runes is an action and requires an action point to play. It does not have go again.",
    cardImage: require("./images/ReadTheRunes.webp"),
    set: "ARC",
  },
  {
    name: "Reduce to Runechant",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Reduce to Runechant’s cost to play it.\n\u203B\n The Runechant Reduce to Runechant creates is not counted when calculating the reduction.\n\u203B\n Effects that increase cost are applied first, then effects that reduce costs. If a card increases the cost of Reduce to Runechant, if you control enough Runechants the cost of Reduce to Runechant can still be 0.",
    cardImage: require("./images/ReduceToRunechant.webp"),
    set: "ARC",
  },
  {
    name: "Spellblade Assault",
    ruling:
      "\nThe Runechant tokens created do not trigger or get destroyed by Spellblade Assault, as it is already played at the point the Runechant tokens are created.",
    cardImage: require("./images/SpellbladeAssault.webp"),
    set: "ARC",
  },
  {
    name: "Spellblade Strike",
    ruling:
      "\nThe Runechant token created does not trigger or get destroyed by Spellblade Strike, as it's already played at the point the Runechant token is created.",
    cardImage: require("./images/SpellbladeStrike.webp"),
    set: "ARC",
  },
  {
    name: "Tome of the Arknight",
    ruling:
      "\nIf the revealed cards do not meet the criteria, they are returned to the top of the deck in the same order.\n\u203B\n Instants, attack reactions, defense reactions and resources are not ‘non-attack’ action cards.",
    cardImage: require("./images/TomeOfTheArknight.webp"),
    set: "ARC",
  },
  {
    name: "Kano",
    ruling:
      "\nIf the card has go again you gain an action point when the card resolves. Note: You cannot gain an action point on an opponent's turn.\n\u203B\n The card is banished face up.\n\u203B\n You do not have to play the card immediately. You may play it anytime during the turn you banished it as long as you have priority.\n\u203B\n The card remains in the banished zone face up if it is not played before end of turn.",
    cardImage: require("./images/Kano.webp"),
    set: "ARC",
  },
  {
    name: "Crucible of Aetherweave",
    ruling:
      "\nYou cannot attack with this weapon.\n\u203B\n If the next card you play does not have an effect that deals arcane damage, it will not count and the next card with an effect that deals arcane damage will be affected still.\n\u203B\n You must activate this before playing the card in order for the card to gain the bonus.",
    cardImage: require("./images/CrucibleOfAetherweave.webp"),
    set: "ARC",
  },
  {
    name: "Storm Striders",
    ruling:
      "\nYou may have multiple instances of arcane barrier.\n\u203B\n You must pay {r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/StormStriders.webp"),
    set: "ARC",
  },
  {
    name: "Robe of Rapture",
    ruling:
      "\nThis requires an action to activate. This does not have go again.",
    cardImage: require("./images/RobeOfRapture.webp"),
    set: "ARC",
  },
  {
    name: "Absorb in Aether",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Absorb in Aether’s cost to play it.\n\u203B\n The card must be played during your opponent’s turn after Absorb in Aether resolves to gain the buff.\n\u203B\n You cannot play this card during your own turn or without an attack to defend during the reaction window.",
    cardImage: require("./images/AbsorbInAether.webp"),
    set: "ARC",
  },
  {
    name: "Aether Flare",
    ruling:
      "\nAether Flare does not have go again. The next card you play that benefits from this effect would require an action point or be played as an instant.\n\u203B\n If the next card you play does not have an effect that deals arcane damage, it will not gain this modifier however the next card played this turn that has an effect that deals arcane damage will still gain the bonus.",
    cardImage: require("./images/AetherFlare.webp"),
    set: "ARC",
  },
  {
    name: "Aether Spindle",
    ruling:
      "\nYou do not Opt if Aether Spindle does not deal arcane damage.\n\u203B\n You cannot respond to the ability after it has done damage but before the opt. This is because Aether Spindle does not create a trigger on dealing damage.",
    cardImage: require("./images/AetherSpindle.webp"),
    set: "ARC",
  },
  {
    name: "Blazing Aether",
    ruling:
      "\nYou may only play Blazing Aether in your deck if your hero is Kano, Dracai of Aether or Kano (young hero).",
    cardImage: require("./images/BlazingAether.webp"),
    set: "ARC",
  },
  {
    name: "Forked Lightning",
    ruling:
      "\nModifiers will affect both damage effects. For example if the next arcane damage would deal plus one, Forked Lightning would deal 3 arcane damage twice thus dealing 6 arcane damage total.\n\u203B\n Arcane barrier 1 can only stop one arcane damage from Forked Lightning, as it's considered a single source of damage.",
    cardImage: require("./images/ForkedLightning.webp"),
    set: "ARC",
  },
  {
    name: "Index",
    ruling:
      "\nYou must select one card to put on the top of your deck. (Provided there is at least one card to look at.)\n\u203B\n You can play this if there is less than the number of cards in your deck. You would look at as many as you can. For example if you only have 2 cards in deck, you would look at both of them and select one to put on the top of your deck.\n\u203B\n This is an action and requires an action point to play. Index does not have go again.",
    cardImage: require("./images/Index.webp"),
    set: "ARC",
  },
  {
    name: "Lesson in Lava",
    ruling:
      "\nYou may only play Lesson in Lava in your deck if your hero is Kano, Dracai of Aether or Kano (young hero).\n\u203B\n You must deal damage with Lesson in Lava to search your deck. You cannot search for a 0 cost if Lesson in Lava did not deal damage.\n\u203B\n You may elect not to put a card on top of your deck, you still must shuffle your deck after.\n\u203B\n The resource cost is located in the top right corner of a card.",
    cardImage: require("./images/LessonInLava.webp"),
    set: "ARC",
  },
  {
    name: "Reverberate",
    ruling:
      "\nIf you do not play the banished card, it stays in the banished zone.\n\u203B\n The resource cost is located in the top right corner of a card.",
    cardImage: require("./images/Reverberate.webp"),
    set: "ARC",
  },
  {
    name: "Sonic Boom",
    ruling:
      "\nIf you do not play the banished card, it stays in the banished zone.\n\u203B\n If the card is reduced by more than the card's resource cost, it will cost 0 to play. The cost cannot be negative.\n\u203B\n You cannot respond to the ability after it has done damage but before the rest of the card has resolved. This is because Sonic boom does not create a trigger on dealing damage.",
    cardImage: require("./images/SonicBoom.webp"),
    set: "ARC",
  },
  {
    name: "Stir the Aetherwinds",
    ruling:
      "\nThis affects the next wizard non-attack action then checks if it has an effect that deals arcane damage. Even if the next wizard non-attack action can’t do arcane damage, the damage modifier effect will not carry over.",
    cardImage: require("./images/StirTheAetherwinds.webp"),
    set: "ARC",
  },
  {
    name: "Tome of Aetherwind",
    ruling:
      "\nYou may choose the same mode more than once\n\u203B\n If you choose the first mode twice, the next card you play with an effect that deals arcane damage, instead deals that much arcane damage plus 2.\n\u203B\n Tome of Aetherwind is an action and requires an action point. It does not have go again.",
    cardImage: require("./images/TomeOfAetherwind.webp"),
    set: "ARC",
  },
  {
    name: "Benji",
    ruling:
      "\nBenji looks at the current power of the attack action, not the base power.\n\u203B\n If an attack reaction raises the power to beyond 2, the attack can then be defended by cards in hand, however since the defending window would already have been passed, the defending player would only be able to use defense reactions at this point.\n\u203B\n The +1{p} is not optional. It does affect weapon attacks.",
    cardImage: require("./images/Benji.webp"),
    set: "CRU",
  },
  {
    name: "Data Doll MKII",
    ruling:
      "\nData Doll has 3 intellect, that means you only draw up to 3 cards (instead of the more common 4) when you start the game and draw up to your intellect at the end of your turn.\n\u203B\n This is not a Once per Turn effect. Every mechanologist item with cost 2 or less that is put into your banished zone from your deck is put into the arena. This effect is not optional.",
    cardImage: require("./images/DataDoll.webp"),
    set: "CRU",
  },
  {
    name: "Ira",
    ruling:
      "\nIra, Crimson Haze now has the sub-type young. (Previous editions errata’d to “Ninja Hero - Young” [IRA001-P] [HER000-P])\n\u203B\n The second attack does not need to be in the same combat chain.\n\u203B\n The second attack can be a weapon or attack action.\n\u203B\n This ability is passive, there is no choice in the power bonus.",
    cardImage: require("./images/Ira.webp"),
    set: "CRU",
  },
  {
    name: "Kassai",
    ruling:
      "\nThis will trigger even if you only hit with one weapon attack as long as you attacked 2 or more times with weapons this turn.\n\u203B\n Attacking with the same weapon twice still counts as attacking 2 times with weapons.",
    cardImage: require("./images/Kassai.webp"),
    set: "CRU",
  },
  {
    name: "Kavdaen",
    ruling:
      "\nKavdeen is a Merchant Hero meaning his deck can only contain Merchant cards and generic cards.\n\u203B\n The green symbol on Kavdaen is life.\n\u203B\n The second clause of gaining life is checked after the first clause, therefore if the life loss causes both heroes to be the same life, then no life will be gained from the second part of the ability.",
    cardImage: require("./images/Kavdaen.webp"),
    set: "CRU",
  },
  {
    name: "Kayo",
    ruling:
      "\nThis ability is not optional.\n\u203B\n Base power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n The number is rounded down after being halved for example 7 becomes 3 and 9 becomes 4.",
    cardImage: require("./images/Kayo.webp"),
    set: "CRU",
  },
  {
    name: "Shiyana",
    ruling:
      "\nWhen Shiyana copies a hero, it does not change the amount of damage she has taken. For example, if Shiyana has taken 16 damage while at 20 life, then copies a hero that has 15 base life, she will lose the game due to having taken equal or more damage than her life.\n\u203B\n You may play the specialization cards regardless of what hero you are. You do not need to be Shiyana or the respective hero to play them. (Only to have them in your deck)\n\u203B\n This effect is mandatory. Shiyana must target a hero and become a copy of that hero. (Shiyana can target herself which would turn all her cards into Shapeshifter cards)\n\u203B\n Only Shapeshifter, Generic, and cards with the specialization keyword may be added to your deck if Shiyana is your hero.",
    cardImage: require("./images/Shiyana.webp"),
    set: "CRU",
  },
  {
    name: "Aether Conduit",
    ruling:
      "\nYou cannot attack with this weapon.\n\u203B\n You require an action point to use this action. It does not have go again.\n\u203B\n Modifiers that affect the next card you play do not effect this as Aether Conduit is an activated ability, not a card being played.",
    cardImage: require("./images/AetherConduit.webp"),
    set: "CRU",
  },
  {
    name: "Cintari Saber",
    ruling:
      "\nIf Cintari Saber is defended by multiple attack action cards it would still only gain +1{p}.\n\u203B\n You may start the game with up to two Cintari Sabers in play as they are 1H.\n\u203B\n When a card references its own card name it only affects the actual card. For example when an attack action card defends a Cintari Saber only the Cintari Saber that was defended gains +1{p] not all Cintari Sabers.",
    cardImage: require("./images/CintariSaber.webp"),
    set: "CRU",
  },
  {
    name: "Talishar, the Lost Prince",
    ruling:
      "\nYou reveal what weapon you are using at the same time you reveal equipment and present your deck. (After heroes are revealed and pre-game procedure is done).\n\u203B\n When this card is destroyed, it is sent to your graveyard.\n\u203B\n Putting the rust counter on Talishar is part of the cost.\n\u203B\n This is a Generic Weapon and any class can start with this weapon in play. (Provided it’s part of your 80 cards you submitted)",
    cardImage: require("./images/Talishar.webp"),
    set: "CRU",
  },
  {
    name: "Plasma Barrel Shot",
    ruling:
      "\nYou may use the second ability even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n Non-attack actions such as putting a steam counter on Plasma Barrel Shot requires an empty combat chain. Note: It is recommended to put a steam counter on Plasma Barrel Shot before attacking with attack actions.",
    cardImage: require("./images/PlasmaBarrelShot.webp"),
    set: "CRU",
  },
  {
    name: "Reaping Blade",
    ruling:
      "\nThe green symbol on Reaping Blade is life.\n\u203B\n This applies to all players, including the controller of Reaping Blade.\n\u203B\n If player A is on 18 life and player B is on 17 life and tries to gain 3 life, they will gain the full 3 life even though it would put them above player A’s life.\n\u203B\n Players can still play cards and effects that gain life however life would not be gained if they have more {h} than any other hero.",
    cardImage: require("./images/ReapingBlade.webp"),
    set: "CRU",
  },
  {
    name: "Mandible Claw",
    ruling:
      "\nEffects that modify the power of “cards you control” are not applied to a card discarded from hand. (Cards you control are cards in the arena, on the chain, equipment, weapons, and hero.)\n\u203B\n You may start the game with up to two Mandible Claw in play as they are 1H.",
    cardImage: require("./images/MandibleClaw.webp"),
    set: "CRU",
  },
  {
    name: "Zephyr Needle",
    ruling:
      "\nThe ability triggers at the time a card defends. If the trigger resolves but later the power of Zephyr Needle is greater than the defense value of the defending card, Zephyr Needle would still be destroyed when the combat chain closes.\n\u203B\n If the triggered ability is responded to, e.g. with an attack reaction that will make Zephyr Needle’s power greater than the defense value of the defending card, then Zephyr Needle would not be destroyed when the combat chain closes. Note: You cannot play attack reactions during the defending window.\n\u203B\n You may start the game with up to two Zephyr Needle in play as they are 1H.",
    cardImage: require("./images/ZephyrNeedle.webp"),
    set: "CRU",
  },
  {
    name: "Copper",
    ruling:
      "\nCopper is a token and is not part of your deck.\n\u203B\n You can activate as many Copper as you want per turn.\n\u203B\n Copper stays in the arena until destroyed.\nDestroying Copper is part of it’s cost.\n\u203B\n A Copper token may be represented by a small object such as a card sleeve or coin if a Copper token card is not available.",
    cardImage: require("./images/Copper.webp"),
    set: "CRU",
  },
  {
    name: "Runechant",
    ruling:
      "\nEach Runechant is its own source and therefore arcane barrier 1 can prevent arcane damage that would be dealt from multiple Runechants, provided you have the resources to pay for the prevention.\n\u203B\n Runechant is a token and is not part of your deck.\n\u203B\n The Runechant token remains in play until destroyed.\n\u203B\n When you play an attack action or attack with a weapon, you must destroy your Runechant auras if the trigger becomes a layer on the chain. It is not optional.\n\u203B\n A Runechant token may be represented by a small object such as a card sleeve or coin if a Runchant aura token card is not available.",
    cardImage: require("./images/Runechant.webp"),
    set: "ARC",
  },
  {
    name: "Quicken",
    ruling:
      "\nQuicken is a token and is not part of your deck.\n\u203B\n Quicken stays in the arena until destroyed.\n\u203B\n When you attack with an attack action card or weapon you must destroy Quicken. It is not optional.\n\u203B\n A Quicken token may be represented by a small object such as a card sleeve or coin if a Quicken token card is not available.\n\u203B\n Multiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
    cardImage: require("./images/Quicken.webp"),
    set: "WTR",
    language: "EN",
  },
  {
    name: "Zen State",
    ruling:
      "\nZen State is created by the card Find Center.\n\u203B\n Zen State is a token and is not part of your deck. (You can not put this in your deck.)\n\u203B\n Zen State prevents 1 damage each time any source would deal damage to your hero. Zen State can prevent damage from multiple different sources in the same turn.\n\u203B\n Removing a balance counter from Zen State is not optional.",
    cardImage: require("./images/ZenState.webp"),
    set: "CRU",
  },
  {
    name: "Gambler’s Gloves",
    ruling:
      "\nYou see the result of the die roll before deciding whether to use Glamber’s Gloves.\n\u203B\n If both players have a Gambler’s Gloves, the turn player decides the order of the triggers that are added to the chain.\n\u203B\n The hero that initially rolled the die is the one who rerolls it, regardless of who’s Gambler’s Gloves was used.\n\u203B\n Gambler’s Gloves can only be used to reroll a die when a card effect instructs a player to roll a 6 sided die. For example, Gambler’s Glove does not trigger if a player uses a 6 sided die to determine which card to randomly discard to Bloodrush Bellow.",
    cardImage: require("./images/GamblersGloves.webp"),
    set: "CRU",
  },
  {
    name: "Cash In",
    ruling:
      "\nYou cannot pay a portion of the alternate cost and a portion of resource cost.\n\u203B\n If you choose the alternative cost, you destroy the Coppers, Silvers or Gold as part of the cost and cannot respond to it.",
    cardImage: require("./images/CashIn.webp"),
    set: "CRU",
  },
  {
    name: "Coax a Commotion",
    ruling:
      "\nYou choose the modes after this has hit.\n\u203B\n You cannot choose the same mode twice.\n\u203B\n You may choose 0 modes.\n\u203B\n The green symbol on Coax a Commotion is life.",
    cardImage: require("./images/CoaxACommotion.webp"),
    set: "CRU",
  },
  {
    name: "Gorganian Tome",
    ruling:
      "\nYou cannot pitch Gorganian Tome as it does not have a pitch value.\n\u203B\n You cannot defend with Gorganian Tome as it does not have a defense value.\n\u203B\n Since Gorganian Tome is not in your graveyard at the time it resolves, it does not count itself.\n\u203B\n If another card’s effect needs to know Gorganian Tome's pitch value, such as Ravenous Rabble, Gorganian Tome is considered to have a pitch value of 0.",
    cardImage: require("./images/GorganianTome.webp"),
    set: "CRU",
  },
  {
    name: "Lunging Press",
    ruling: "\nYou cannot target a weapon attack with Lunging Press.",
    cardImage: require("./images/LungingPress.webp"),
    set: "CRU",
  },
  {
    name: "Promise of Plenty",
    ruling:
      "\nYou can respond to the ability by playing the card from arsenal (e.g. an instant) to make the arsenal empty before it resolves.",
    cardImage: require("./images/PromiseOfPlenty.webp"),
    set: "CRU",
  },
  {
    name: "Reinforce the Line",
    ruling:
      "\nYou can only target an attack action card that is defending. Cards that defended previous chains on the combat chain are still considered to be defending cards.\n\u203B\n You can target a defending attack action card on a previous chain link. It would not reduce the damage dealt on a chain link that has already resolved.\n\u203B\n You cannot defend with Reinforce the Line as it does not have a defense value.\n\u203B\n You can only play Reinforce the Line if there is a legal target.",
    cardImage: require("./images/ReinforceTheLine.webp"),
    set: "CRU",
  },
  {
    name: "Snag",
    ruling:
      "\nYou cannot defend with Snag as it does not have a defense value.\n\u203B\n This does not affect -{p} effects as that is not gaining {p}.\n\u203B\n You may play this anytime you have priority including in response to playing an attack action but before it resolves and becomes attacking on the combat chain.",
    cardImage: require("./images/Snag.webp"),
    set: "CRU",
  },
  {
    name: "Skullhorn",
    ruling:
      "\nIf you have no cards in your hand when this ability resolves, you will discard the card you draw.\n\u203B\n There is no priority in between drawing and discarding the card.\n\u203B\n When this card is destroyed, it is sent to your graveyard.\n\u203B\n You must pay {r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.",
    cardImage: require("./images/Skullhorn.webp"),
    set: "CRU",
  },
  {
    name: "Argh... Smash!",
    ruling:
      "\nYou choose the items after the die has been rolled.\n\u203B\n There is no priority between seeing what number is rolled and the items being destroyed. For example, a player cannot see the result of the dice then elect to use their potion’s instant effects. (Replacement effects that can impact the result of the dice still take place)\n\u203B\n If X is 0, no items would be destroyed. (As a result of rolling a 1)\n\u203B\n The number is rounded down after being halved for example 5 becomes 2 and 3 becomes 1.\n\u203B\n You can elect to destroy 0 items.",
    cardImage: require("./images/ArghSmash.webp"),
    set: "CRU",
  },
  {
    name: "Barraging Big Horn",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Barraging Big Horn.",
    cardImage: require("./images/BarragingBigHorn.webp"),
    set: "CRU",
  },
  {
    name: "Beast Within",
    ruling:
      "\nThis effect is not optional.\n\u203B\n The green symbol on Beast Within is life.\n\u203B\n If there are no cards in your deck, you still lose 1{h} and the effect repeats itself. (Resulting in losing the game.)",
    cardImage: require("./images/BeastWithin.webp"),
    set: "CRU",
  },
  {
    name: "Massacre",
    ruling:
      "\nMassacre’s effect only works when it’s discarded to a Brute attack action card.\n\u203B\n If you’ve discarded more than one 6 or more {p} card this turn, the +2{p} bonus will only apply once.",
    cardImage: require("./images/Massacre.webp"),
    set: "CRU",
  },
  {
    name: "Swing Fist, Think Later",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Swing Fist, Think Later.",
    cardImage: require("./images/SwingFistThinkLater.webp"),
    set: "CRU",
  },
  {
    name: "Crater Fist",
    ruling:
      "\nThis affects all attacks with crush not just the first.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/CraterFist.webp"),
    set: "CRU",
  },
  {
    name: "Blessing of Serenity",
    ruling:
      "\nIf you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n The prevention does not carry over, if this prevents an attack with {p} less than the amount of damage this would prevent there will be no leftover preventions.\n\u203B\n This effect is compulsory, you must prevent the next {p} damage that would be dealt to you this turn.\n\u203B\n This only affects {p} damage. Loss of life or arcane damage cannot be prevented.\n\u203B\n You cannot defend with Blessing of Serenity as it does not have a defense value.\n\u203B\n Blessing of Serenity is an instant. You may play it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/BlessingOfSerenity.webp"),
    set: "CRU",
  },
  {
    name: "Crush the Weak",
    ruling:
      "\nThis looks at the base power of the attack. If there is a modifier, the attack still can’t be played unless the modifier specifically modifies base power.\n\u203B\n Base power is the printed {p} value on the card.\n\u203B\n Cards with 3 or less base {p} can still be pitched.",
    cardImage: require("./images/CrushTheWeak.webp"),
    set: "CRU",
  },
  {
    name: "Chokeslam",
    ruling:
      "\nIf an attack action card would gain {p} it instead gains 0{p}.\n\u203B\n You can still play power modifier cards. Attack action cards would just gain 0{p}.\n\u203B\n Attack action cards can still lose {p}.",
    cardImage: require("./images/Chokeslam.webp"),
    set: "CRU",
  },
  {
    name: "Emerging Dominance",
    ruling:
      "\nEmerging Dominance must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n Emerging Dominance does not affect weapon attacks.",
    cardImage: require("./images/EmergingDominance.webp"),
    set: "CRU",
  },
  {
    name: "Mangle",
    ruling:
      "\nIf a battleworn equipment with no counters defend this and the defending hero is crushed, you cannot target the equipment as it does not have the -1{d} counter yet\n\u203B\n If an equipment has multiple -1{d} counters on it, you can target it.\n\u203B\n You must destroy an equipment if there is a legal target.",
    cardImage: require("./images/Mangle.webp"),
    set: "CRU",
  },
  {
    name: "Righteous Cleansing",
    ruling:
      "\nIf there are less than 5 cards, look at all the cards.\n\u203B\n They can be different pitch costs as long as the card name is exactly the same.\n\u203B\n The defending hero does not get to look at the cards.",
    cardImage: require("./images/RighteousCleansing.webp"),
    set: "CRU",
  },
  {
    name: "Stamp Authority",
    ruling:
      "\nThis affects all attack action cards including your own.\n\u203B\n The blue symbol on Stamp Authority is intellect (hand size).\n\u203B\n You can only pitch cards to pay for a cost. You cannot pitch for no reason.\n\u203B\n You draw cards up to your hero’s intellect before end of turn effects wear off.",
    cardImage: require("./images/StampAuthority.webp"),
    set: "CRU",
  },
  {
    name: "Viziertronic Model i",
    ruling:
      "\nYou boost the top deck of your deck first, banishing it before drawing a card and putting one back on top.\n\u203B\n You still draw a card even if the boost did not hit a mechanologist card.\n\u203B\n You must pay {r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.",
    cardImage: require("./images/ViziertronicModeli.webp"),
    set: "CRU",
  },
  {
    name: "Absorption Dome",
    ruling:
      "\nAbsorption Dome requires an action point to play as it is an action card.\n\u203B\n If you have not boosted this turn, Absorption Dome enters the arena with no stream counters and would be immediately destroyed.\n\u203B\n If you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n It is not optional, you cannot choose to take damage instead of removing steam counters and preventing the damage.\n\u203B\n This prevents all types of damage including arcane damage. This does not prevent loss of life.\n\u203B\n You cannot defend with Absorption Dome as it does not have a defense value.",
    cardImage: require("./images/AbsorptionDome.webp"),
    set: "CRU",
  },
  {
    name: "Combustible Courier",
    ruling:
      "\nThe next attack must be on the same combat chain.\n\u203B\n It does not matter if the boost is successful or not.",
    cardImage: require("./images/CombustibleCourier.webp"),
    set: "CRU",
  },
  {
    name: "High Speed Impact",
    ruling:
      "\nThe next attack must be on the same combat chain to gain dominate.\n\u203B\n It does not matter if the boost is successful or not.",
    cardImage: require("./images/HighSpeedImpact.webp"),
    set: "CRU",
  },
  {
    name: "Meganetic Shockwave",
    ruling:
      "\nIf the defending hero has less than X equipment, they must defend with all the equipment they have that can defend.\n\u203B\n Players can defend with equipment with 0 defense.\n\u203B\n If an equipment is already on the combat chain defending another attack, it cannot also be forced to defend Meganetic Shockwave.",
    cardImage: require("./images/MeganeticShockwave.webp"),
    set: "CRU",
  },
  {
    name: "Plasma Purifier",
    ruling:
      "\nPlasma Purifier requires an action point to play as it is an action card.\n\u203B\n You cannot defend with Plasma Purifier as it does not have a defense value.\n\u203B\n You may use the action even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n The pistol keeps the +1{p} until end of turn even if you attack with it multiple times.",
    cardImage: require("./images/PlasmaPurifier.webp"),
    set: "CRU",
  },
  {
    name: "Breeze Rider Boots",
    ruling:
      "\nIf you choose to use this, it will give the attack action you hit with go again if it has combo.\n\u203B\n Multiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/BreezeRiderBoots.webp"),
    set: "CRU",
  },
  {
    name: "Crane Dance",
    ruling:
      "\nYou may defend with cards that aren’t attack action cards, as normal.\n\u203B\n Base power is the printed {p} value on a card. (Located at the bottom left corner of a card)",
    cardImage: require("./images/CraneDance.webp"),
    set: "CRU",
  },
  {
    name: "Find Center",
    ruling:
      '\nThe cost of a card is located at the top right corner of a card.\n\u203B\n If a card does not have a cost, such as equipment, Find Center considers its {r} cost to be 0.\n\u203B\n Zen State is an aura with “Zen State enters the arena with 1 balance counter on it. At the beginning of your action phase, destroy Zen State unless you remove a balance counter from it."\n\u203B\n Whenever your hero would be dealt damage, prevent 1 damage that source would deal.”',
    cardImage: require("./images/FindCenter.webp"),
    set: "CRU",
  },
  {
    name: "Flood of Force",
    ruling:
      "\nIf it’s not a card with combo, it stays on top of your deck and Flood of Force does not gain +3{p} or go again.\n\u203B\n You do not have to play the card put into your hand straight away. (Or at all, it can be pitched or just remain in your hand)",
    cardImage: require("./images/FloodOfForce.webp"),
    set: "CRU",
  },
  {
    name: "Heron's Flight",
    ruling:
      "\nYou choose at the time you play this card.\n\u203B\n Heron’s Flight cannot be defended by equipment, instants, or reaction cards.\n\u203B\n Defense reactions become a defending card when played. You cannot defend Heron’s Flight with defense reactions if Crane Dance was the last attack this combat chain. (You cannot play the defense reaction)",
    cardImage: require("./images/HeronsFlight.webp"),
    set: "CRU",
  },
  {
    name: "Rushing River",
    ruling:
      "\nThere is no priority in between drawing and putting cards back on top of the deck.",
    cardImage: require("./images/RushingRiver.webp"),
    set: "CRU",
  },
  {
    name: "Whirling Mist Blossom",
    ruling:
      "\nYou may only have Whirling Mist Blossom in your deck if your hero is Ira, Crimson Haze.\n\u203B\n Whirling Mist Blossom must be the second or higher chain link to hit in a row, meaning that previous attack must have also hit.",
    cardImage: require("./images/WhirlingMistBlossom.webp"),
    set: "CRU",
  },
  {
    name: "Perch Grapplers",
    ruling:
      "\nThe arrows must be face-up at the time you play them to gain go again.\n\u203B\n Arrow is a sub-type that exists on attack actions. This is located at the bottom center of the card.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/PerchGrapplers.webp"),
    set: "CRU",
  },
  {
    name: "Feign Death",
    ruling:
      "\nYou cannot defend with Feign Death as it does not have a defense value.\n\u203B\n You cannot play this card if you have not been dealt damage this turn.\n\u203B\n Any form of damage such as {p} or arcane damage counts as damage dealt. Loss of life does not count as being dealt damage.\n\u203B\n If you have multiple damage preventions available, you choose which prevention to apply first.",
    cardImage: require("./images/FeignDeath.webp"),
    set: "CRU",
  },
  {
    name: "Increase the Tension",
    ruling:
      "\nThe attack can still be defended by defense reaction cards from arsenal and by non-defense reactions from hand.",
    cardImage: require("./images/IncreaseTheTension.webp"),
    set: "CRU",
  },
  {
    name: "Pitfall Trap",
    ruling:
      "\nThe attacking hero decides if they want to pay {r} at the time this resolves. (Before damage from the attack action is calculated)\n\u203B\n This damage cannot be defended.\n\u203B\n This damage can be prevented. This damage is not arcane damage. This must be prevented by cards that have a prevention effect.\n\u203B\n Trap cards cannot be played from hand.",
    cardImage: require("./images/PitfallTrap.webp"),
    set: "CRU",
  },
  {
    name: "Poison the Tips",
    ruling:
      "\nIf the arrow has multiple hit triggers, you pick which effect goes on the chain first when it hits.\n\u203B\n This effect is until the end of turn. You can trigger the hit effect on multiple arrows.\n\u203B\n You may elect to put no cards from your hand to your arsenal with Reload.\n\u203B\n Your arsenal must be empty to put a card into your arsenal with Reload.\n\u203B\n The defending hero selects the card to be discarded.",
    cardImage: require("./images/PoisonTheTips.webp"),
    set: "CRU",
  },
  {
    name: "Remorseless",
    ruling:
      "\nTurning a facedown card in arsenal face up does not count as putting it into your arsenal face up and therefore would not gain the effect.\n\u203B\n The green symbol on Remorseless is life.\n\u203B\n Action cards played as though they were an instant still count as playing an action card and would lose 1{h} if they were hit by Remorseless.\n\u203B\n Remorseless can still be defended by defense reactions from hand.",
    cardImage: require("./images/Remorseless.webp"),
    set: "CRU",
  },
  {
    name: "Rockslide Trap",
    ruling:
      "\nThe attacking hero decides if they want to pay {r} at the time this resolves. (Before damage from the attack action is calculated.)\n\u203B\n Trap cards cannot be played from hand.\n\u203B\n You can only target attacks with this, you cannot target a defending card that is an attack action.\n\u203B\n You can only target the attack on the current chain link. (You cannot target a defending attack action card as it’s not considered an attack).\n\u203B\n The ability is not optional, you must target an attack.",
    cardImage: require("./images/RockslideTrap.webp"),
    set: "CRU",
  },
  {
    name: "Sleep Dart",
    ruling:
      "\nThe hero loses all hero card effects and the hero loses all activated abilities, other cards with card effects or activated abilities are unaffected.",
    cardImage: require("./images/SleepDart.webp"),
    set: "CRU",
  },
  {
    name: "Tripwire Trap",
    ruling:
      "\nThe attacking hero decides if they want to pay {r} at the time this resolves. (Before damage from the attack action is calculated.)\n\u203B\n If the attacking hero does not pay {r}, Tripwire Trap prevents all effects that would trigger, including hero and equipment hit trigger effects.\n\u203B\n Trap cards cannot be played from hand.",
    cardImage: require("./images/TripwireTrap.webp"),
    set: "CRU",
  },
  {
    name: "Arknight Shard",
    ruling:
      '\nCreating a Runechant token is mandatory.\n\u203B\n You cannot defend with Arknight Shard as it does not have a defense value.\n\u203B\n You cannot pitch a card if you have no cost to pay.\n\u203B\n You may only have 1 Arknight Shard in your deck including cards in your registered 80-card pool in Classic Constructed tournaments and only 1 Arknight Shard in your deck in limited tournaments.\n\u203B\n Arknight Shard has no resource cost value.\n\u203B\n A Runechant is an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")\n\u203B\n If you pitch Arknight Shard to pay for an attack, the Runechant that it creates does not trigger from the attack (the Runechant is created after the attack action card has been played / weapon attack is activated).',
    cardImage: require("./images/ArknightShard.webp"),
    set: "CRU",
  },
  {
    name: "Bloodsheath Skeleta",
    ruling:
      '\nThe reduction is calculated at the time you play the card, not at the time Blood Skeleta’s ability resolves.\n\u203B\n When this card is destroyed, it is sent to your graveyard.\n\u203B\n You can play either attack action card or ‘non-attack’ action card in any order.\n\u203B\n Bloodsheath Skeleta’s activated ability is an instant. You may activate it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.\n\u203B\n If the card already has a cost reduction effect such as "This card costs {r} less to play for each Runechant you control.” the reduction effects will stack making it cost 2 less for each Runechant you control.',
    cardImage: require("./images/BloodsheathSkeleta.webp"),
    set: "CRU",
  },
  {
    name: "Consuming Volition",
    ruling:
      "\nIf this attack causes Runechant token(s) to deal arcane damage, this attack would gain the effect as arcane damage would have been dealt.\n\u203B\n The defending hero selects the card to be discarded.",
    cardImage: require("./images/ConsumingVolition.webp"),
    set: "CRU",
  },
  {
    name: "Dread Triptych",
    ruling:
      '\nThe Runechant token created does not trigger or get destroyed as Dread Triptych is already played at the point the Runechant token is created.\n\u203B\n If this attack causes Runechant token(s) to deal arcane damage, this attack would create a Runechant token from the second effect as arcane damage would have been dealt.\n\u203B\n Each instance of creating a Runechant token is separate. An effect that affects Runechant tokens being created, such as Modred Tide, will affect each effect of Dread Triptych .\n\u203B\n A Runechant is an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")',
    cardImage: require("./images/DreadTriptych.webp"),
    set: "CRU",
  },
  {
    name: "Meat and Greet",
    ruling:
      "\nIf this attack causes Runechant token(s) to deal arcane damage, this attack would gain the effect as arcane damage would have been dealt.",
    cardImage: require("./images/MeatAndGreet.webp"),
    set: "CRU",
  },
  {
    name: "Rattle Bones",
    ruling:
      "\nIf this is played as though it were an instant, it would not cost an action point but when it resolves you would gain an action point from go again (as long as it’s your action phase)\n\u203B\n If the attack action card is played, it would go to the graveyard afterwards (Unless an effect tells you otherwise).\n\u203B\n If the attack action is not played, it would remain in the banished zone.",
    cardImage: require("./images/RattleBones.webp"),
    set: "CRU",
  },
  {
    name: "Runeblood Barrier",
    ruling:
      '\nIf you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n You must destroy Runechants when you would be dealt damage, you cannot choose to be dealt damage instead.\n\u203B\n If you control no Runechants, you are dealt damage as normal.\n\u203B\n A Runechant is an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")',
    cardImage: require("./images/RunebloodBarrier.webp"),
    set: "CRU",
  },
  {
    name: "Sutcliffe's Research Notes",
    ruling:
      "\nThe order of the cards put on top of your deck is not known to the opponent.",
    cardImage: require("./images/SutcliffesResearchNotes.webp"),
    set: "CRU",
  },
  {
    name: "Courage of Bladehold",
    ruling:
      "\nThis applies to all your sword attacks this turn, not just the first.\n\u203B\n A sword attack is an attack with a weapon with the subtype ‘Sword’. (Located at the bottom middle of the weapon card.)\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/CourageOfBladehold.webp"),
    set: "CRU",
  },
  {
    name: "Dauntless",
    ruling:
      "\nTo defend with a defense reaction, it must be played.\n\u203B\n The additional cost can be reduced by cost reduction effects.",
    cardImage: require("./images/Dauntless.webp"),
    set: "CRU",
  },
  {
    name: "Spoils of War",
    ruling:
      '\nThe second ability affects every weapon hit this turn, not just your next attack.\n\u203B\n A Copper token is an item with "Action- {r}{r}{r}{r}, destroy Copper: Draw a card. Go again"',
    cardImage: require("./images/SpoilsOfWar.webp"),
    set: "CRU",
  },
  {
    name: "Twinning Blade",
    ruling:
      "\nThis ability does not give the weapon attack go again. You are still required to have an action point to attack again. This ability bypasses the “Once per Turn Action - Attack” on the sword attack and allows an additional attack with the same weapon.\n\u203B\n The weapon must have the sub-type ‘Sword’. (Located at the bottom middle of the weapon card.)\n\u203B\n It does not need to target an attacking sword, but must be played during the reaction step as an attacking hero. (You can target a sword while attacking with an attack action.)",
    cardImage: require("./images/TwinningBlade.webp"),
    set: "CRU",
  },
  {
    name: "Out for Blood",
    ruling:
      "\nReprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\n\u203B\n Reprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\n\u203B\n Equipment and cards from arsenal that defend an attack do not turn on reprise.\n\u203B\n The next attack can be any attack including attack action or a different weapon attack.",
    cardImage: require("./images/OutForBlood.webp"),
    set: "CRU",
  },
  {
    name: "Unified Decree",
    ruling:
      "\nReprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\n\u203B\n Reprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\n\u203B\n Equipment and cards from arsenal that defend an attack do not turn on reprise.\n\u203B\n If you do not banish the card, it stays on top of the deck.\n\u203B\n When the banished card is played, it will go to the graveyard when it resolves as normal.\n\u203B\n If you banish the card and do not play it this combat chain, it remains in the banished zone.",
    cardImage: require("./images/UnifiedDecree.webp"),
    set: "CRU",
  },
  {
    name: "Metacarpus Node",
    ruling:
      "\nYou may use this ability only once per card. You may use this ability multiple times in a turn on different cards provided you pay {r} each time.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/MetacarpusNode.webp"),
    set: "CRU",
  },
  {
    name: "Aetherize",
    ruling:
      "\nNegating an instant will prevent the card from resolving. The card will go to its owner’s graveyard and the effects of the card do not happen.\n\u203B\n Aetherize can only target instant cards, not instant activated abilities.\n\u203B\n You cannot defend with Aetherize as it does not have a defense value.",
    cardImage: require("./images/Aetherize.webp"),
    set: "CRU",
  },
  {
    name: "Chain Lightning",
    ruling:
      "\nEach defending hero decides if they want to defend the arcane damage they would take. They cannot defend the other arcane damage.\n\u203B\n Chain Lightning checks if you have played another Wizard ‘non-attack’ action card this turn at the time it resolves, not at the time you play the card.\n\u203B\n Chain Lightning counts as a card with an effect that deals arcane damage, regardless if you have played another wizard “non-attack” action card this turn or not. (e.g. if you activated Crucible of Aetherweave then play Chain Lightning, it would use up the Crucible of Aetherweave effect but deal no arcane damage.)",
    cardImage: require("./images/ChainLightning.webp"),
    set: "CRU",
  },
  {
    name: "Cindering Foresight",
    ruling:
      "\nIf the next card you play does not have an effect that deals arcane damage, it will not gain this modifier however the next card played this turn that has an effect that deals arcane damage will still gain the bonus.\n\u203B\n This card is always an action card, regardless of whether it’s your turn or not (e.g. for Kano’s hero ability.), or if it is being played as an instant.",
    cardImage: require("./images/CinderingForesight.webp"),
    set: "CRU",
  },
  {
    name: "Gaze the Ages",
    ruling:
      "\nYou cannot respond between opting and putting Gaze the Ages into your hand as you must finish resolving the card completely first.\n\u203B\n Gaze the Ages checks if you have played another Wizard ‘non-attack’ action card this turn at the time it resolves, not at the time you play the card.",
    cardImage: require("./images/GazeTheAges.webp"),
    set: "CRU",
  },
  {
    name: "Foreboding Bolt",
    ruling:
      "\nYou opt when the card resolves after damage is dealt (or prevented).",
    cardImage: require("./images/ForebodingBolt.webp"),
    set: "CRU",
  },
  {
    name: "Rousing Aether",
    ruling:
      "\nIf the next card you play does not have an effect that deals arcane damage, it will not gain this modifier however the next card played this turn that has an effect that deals arcane damage will still gain the bonus.",
    cardImage: require("./images/RousingAether.webp"),
    set: "CRU",
  },
  {
    name: "Snapback",
    ruling:
      "\nYou still pay Snapback’s resource costs as normal even when Snapback is played as though it were an instant.\n\u203B\n Snapback is still an action card when played as an instant. It just does not require an action point to play and can be played anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/Snapback.webp"),
    set: "CRU",
  },
  {
    name: "Boltyn",
    ruling:
      "\nBase power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n Putting a card into your hero’s soul does not count as charging. Only playing a card with the keyword charge and placing a card into your hero's soul this way counts as charging.\n\u203B\n All attacks you control gain +1{p} while defended by an attack action card. (This includes your weapon attacks)\n\u203B\n If the attack no longer has {p} greater than it’s base power when the ability resolves, it will not gain go again.\n\u203B\n You may use the second ability more than once per turn as it is not a Once per turn ability. You may also target the same attack more than once. Multiple instances of go again do not grant more than one action point.\n\u203B\n If the second ability has resolved, then the attack no longer has {p} greater than it’s base power, it will still have go again as it has already gained go again.",
    cardImage: require("./images/Boltyn.webp"),
    set: "MON",
  },
  {
    name: "Chane",
    ruling:
      "\nYou may use this ability even if you are not planning to use a Runeblade or Shadow action afterwards.\n\u203B\n This affects your next action including weapon attacks, action cards and action activated abilities.\n\u203B\n The Soul Shackle token is created as a part of the cost.\n\u203B\n Soul Shackle tokens stay in the arena until they are destroyed. (Soul shackles do not get destroyed when the top card of your deck is banished)\n\u203B\n Multiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
    cardImage: require("./images/Chane.webp"),
    set: "MON",
  },
  {
    name: "Dread Scythe",
    ruling:
      "\nThe arcane damage is not dependent on the attack hitting.\n\u203B\n The defending player chooses if they are taking the arcane damage first before defending the attack.\n\u203B\n Both the attack and the arcane damage count as damage by Dread Scythe and either would cause the hero dealt damage to not gain {h} during their next action phase.\n\u203B\n If a hero dealt damage by Dread Scythe would gain {h} during their next action phase they instead gain 0. (They may still play the card or activate the ability that would gain {h})",
    cardImage: require("./images/DreadScythe.webp"),
    set: "MON",
  },
  {
    name: "Galaxxi Black",
    ruling:
      "\nGalaxxi Black can only gain at most +2{p} from its ability even if you have played multiple cards from your banished zone.\n\u203B\n The ability of Galaxxi Black is continuously checking if you have played a card from your banished zone. If you play a card from the banished zone after Galaxxi Black has attacked, it gains +2{p}.",
    cardImage: require("./images/GalaxxiBlack.webp"),
    set: "MON",
  },
  {
    name: "Hatchet of Body",
    ruling:
      "\nThe +1{p} lasts until end of turn. If you attack with this weapon again it will still have the +{p}. (It can also gain another instance of +1{p} if the criteria is met)",
    cardImage: require("./images/HatchetOfBody.webp"),
    set: "MON",
  },
  {
    name: "Hatchet of Mind",
    ruling:
      "\nThe +1{p} lasts until end of turn. If you attack with this weapon again it will still have the +{p}. (It can also gain another instance of +1{p} if the criteria is met)",
    cardImage: require("./images/HatchetOfMind.webp"),
    set: "MON",
  },
  {
    name: "Hexagore, the Death Hydra",
    ruling:
      "\nThe damage it deals to you cannot be defended. It is also not arcane damage so it cannot be prevented by spellvoid or arcane barrier. The damage can be prevented by prevention effects that prevent any kind of damage.\n\u203B\n If you have more than 6 blood debt cards in your banished zone it will do you 0 damage. Having more than 6 does not cause it to deal negative damage to you.\n\u203B\n This ability triggers when you attack and resolves before the attack deals damage.\n\u203B\n Face down cards in the banished zone have no traits.",
    cardImage: require("./images/Hexagore.webp"),
    set: "MON",
  },
  {
    name: "Iris of Reality",
    ruling:
      "\nYou cannot attack with this weapon as it does not have an action that allows you to do so.\n\u203B\n You attack with the Illusionist aura, not this weapon. If you have multiple Illusionist auras you can attack with multiple in a turn provided you have the resources.",
    cardImage: require("./images/IrisOfReality.webp"),
    set: "MON",
  },
  {
    name: "Levia",
    ruling:
      "\nIt doesn't matter where the card was from before it was put into your banish zone or if the card remains in the banish zone, as long as the criteria has been met this turn.\n\u203B\n The cards only lose blood debt during the end phase. They still have blood debt during the action phase.\n\u203B\n If a card has multiple instances of blood debt, they lose all instances during the end phase. (If the criteria is met)\n\u203B\n Levia checks the last known information of the attack action card before it is put into your banished zone. For example if a 5{p} card has +1{p} from attacking, then is put into the banished zone when it hits, Levia will see this attack action as 6{p} when it is put into the banished zone. Similarly if an attack that has 6{p} base has its power reduced, Levia would not see it as 6{p}+",
    cardImage: require("./images/Levia.webp"),
    set: "MON",
  },
  {
    name: "Luminaris",
    ruling:
      "\nYou cannot attack with this weapon as it does not have an action that allows you to do so.\n\u203B\n You attack with the Illusionist aura, not this weapon. If you have multiple Illusionist auras you can attack with multiple in a turn provided you have the resources and action points.\n\u203B\n You can only pitch a card if there is a cost to be paid and there are not enough resources available to pay the cost.\n\u203B\n A yellow color strip is a card that pitches for two resources. The color strip is located at the top center of the card.",
    cardImage: require("./images/Luminaris.webp"),
    set: "MON",
  },
  {
    name: "Prism",
    ruling:
      "\nOnce per Turn applies to the current turn not the turn cycle - You can use this ability on your opponent’s turn, then use it again on your own turn. (Provided you have the resources and cards in soul)",
    cardImage: require("./images/Prism.webp"),
    set: "MON",
  },
  {
    name: "Ravenous Meataxe",
    ruling:
      "\nThere is no window to play cards or respond after drawing the card but before discarding the card. (If your hand is empty you will immediately discard the card you draw)\n\u203B\n This checks the base power of the discarded card. (The base power is located at the bottom left corner of the card)\n\u203B\n The effect triggers when you attack with Ravenous Meataxe. If this is attacking a card with Spectra you would not draw a card. Please see section 20.4 Attack Step of the comp rules for more details.",
    cardImage: require("./images/RavenousMeataxe.webp"),
    set: "MON",
  },
  {
    name: "Raydn, Duskbane",
    ruling:
      "\nYou may attack with this even if it has 0 power. (Assuming you have the action points)\n\u203B\n Even if you have charged multiple times this turn, Raydn, Duskbane only gains +3{p}.",
    cardImage: require("./images/Raydn.webp"),
    set: "MON",
  },
  {
    name: "Spectral Shield",
    ruling:
      "\nThis is not optional, if you would be dealt damage you must destroy Spectral Shield and prevent 1 damage that source would deal.\n\u203B\n If you have multiple Spectral Shields in play you choose which prevent effect to apply first. If you are taking multiple damage you must prevent all of it with Spectral Shields if able. (You would be dealt the excess damage)\n\u203B\n Loss of life is not being dealt damage and would not destroy Spectral Shield or prevent the 1 damage.",
    cardImage: require("./images/SpectralShield.webp"),
    set: "MON",
  },
  {
    name: "Soul Shackle",
    ruling:
      "\nSoul Shackle stays in the arena until it is destroyed. Banishing the top card of your deck does not destroy Soul Shackle.\n\u203B\n The effect is not optional. You must banish the top card of your deck if able.\n\u203B\n Soul Shackle is a trigger that happens at the beginning of the action phase. Players can respond to it.\n\u203B\n If you have no cards in your deck, you do not lose the game. You would not be able to banish any cards from the top of your deck but the ability would still resolve.",
    cardImage: require("./images/SoulShackle.webp"),
    set: "MON",
  },
  {
    name: "Adrenaline Rush",
    ruling:
      "\nThe green symbol on Adrenaline Rush is life.\n\u203B\n Adrenaline Rush checks if you have less life than an opponent at the time you play it. Changes after the card has been played does not cause Adrenaline Rush to gain nor lose +3{p}.",
    cardImage: require("./images/AdrenalineRush.webp"),
    set: "MON",
  },
  {
    name: "Belittle",
    ruling:
      "\nYou may search for any pitch value Minnowism as long as the name of the card is “Minnowism”.\n\u203B\n You choose whether you want to pay the additional cost at the time you play the card.\n\u203B\n If you do pay the additional cost, the ability becomes a layer on the chain when the card is played. Players can still respond to this, e.g with instants.\n\u203B\n The attack action card you reveal must have a value. (0 is a value)",
    cardImage: require("./images/Belittle.webp"),
    set: "MON",
  },
  {
    name: "Blood Drop Brocade",
    ruling:
      "\nYou can activate this anytime you have priority as long as the condition has been met. (You do not have priority during the start of turn or end phase)\n\u203B\n {p} damage is any damage done by an attack such as a weapon attack or attack action. Loss of life and arcane damage do not count as {p} damage.",
    cardImage: require("./images/BloodDropBrocade.webp"),
    set: "MON",
  },
  {
    name: "Captain’s Call",
    ruling:
      "\nYou choose the mode at the time you play Captain’s Call not at the time you play the attack action card.\n\u203B\n It will apply to the next attack action card with cost 0/1/2 or less, if you play an attack action that doesn’t meet that criteria, then one that does, the bonus will still apply to the one applicable as it is still the next attack action card with cost 0/1/2 or less you play this turn.",
    cardImage: require("./images/CaptainsCall.webp"),
    set: "MON",
  },
  {
    name: "Exude Confidence",
    ruling:
      "\nThe effect only applies when the attack is on the combat chain. Players can respond to Exude Confidence before it becomes a layer on the chain with instants.\n\u203B\n If Exude Confidence is on the combat chain and gains {p} from an effect that would then put it at greater power than the defending card(s) then the effect of Exude Confidence would become active.\n\u203B\n Exude Confidence is still considered attacking as long as it’s on the combat chain even if it’s not the current chain link. You may still use it’s instant ability as long as it’s on the combat chain.\n\u203B\n Exude Confidence does not stop defense reactions or instants that have already been played or activated. For example if there is a defense reaction defending an attack on a previous combat chain, playing Exude Confidence will not have any impact on that defense reaction.\n\u203B\n If Exude Confidence is not defended by any cards, the defending hero can’t play or activate instants or defense reactions this combat chain.\n\u203B\n You can activate Exude Confidence’s instant ability during the defending window before the defending player has a chance to use defense reactions.\n\u203B\n You may activate Exude Confidence’s instant ability as many times as you want provided you have the resources and Exude Confidence is attacking.",
    cardImage: require("./images/ExudeConfidence.webp"),
    set: "MON",
  },
  {
    name: "Frontline Scout",
    ruling:
      "\nYou look at the defending hero’s hand when Frontline Scout effects resolves. (The ability goes on the chain when the card becomes an attack on the chain.)\n\u203B\n If this attack does not resolve (For example it is attacking an aura with spectra) then you do not look at the defending hero’s hand. (You would also not gain the action point from go again.)",
    cardImage: require("./images/FrontlineScout.webp"),
    set: "MON",
  },
  {
    name: "Ironhide Helm",
    ruling:
      "\nThis does not have blade break or battleworn, it does not get destroyed unless you pay for it’s effect.\n\u203B\n You may defend with this card and elect to pay no resources, however it would not gain the +2{d}.\n\u203B\n Both players will have a chance to respond when the ability goes on the chain, however there is no priority after the resource is paid but before it gains the +2{d}.",
    cardImage: require("./images/IronhideHelm.webp"),
    set: "MON",
  },
  {
    name: "Ironhide Plate",
    ruling:
      "\nThis does not have blade break or battleworn, it does not get destroyed unless you pay for it’s effect.\n\u203B\n You may defend with this card and elect to pay no resources, however it would not gain the +2{d}.\n\u203B\n Both players will have a chance to respond when the ability goes on the chain, however there is no priority after the resource is paid but before it gains the +2{d}.",
    cardImage: require("./images/IronhidePlate.webp"),
    set: "MON",
  },
  {
    name: "Ironhide Gauntlet",
    ruling:
      "\nThis does not have blade break or battleworn, it does not get destroyed unless you pay for it’s effect.\n\u203B\n You may defend with this card and elect to pay no resources, however it would not gain the +2{d}.\n\u203B\n Both players will have a chance to respond when the ability goes on the chain, however there is no priority after the resource is paid but before it gains the +2{d}.",
    cardImage: require("./images/IronhideGauntlet.webp"),
    set: "MON",
  },
  {
    name: "Ironhide Legs",
    ruling:
      "\nThis does not have blade break or battleworn, it does not get destroyed unless you pay for it’s effect.\n\u203B\n You may defend with this card and elect to pay no resources, however it would not gain the +2{d}.\n\u203B\n Both players will have a chance to respond when the ability goes on the chain, however there is no priority after the resource is paid but before it gains the +2{d}.",
    cardImage: require("./images/IronhideLegs.webp"),
    set: "MON",
  },
  {
    name: "Memorial Ground",
    ruling:
      "\nYou cannot defend with Memorial Ground as it does not have a defense value.\n\u203B\n You must have a target in order to play this card.\n\u203B\n If the target is no longer in your graveyard when Memorial Ground resolves, it would not put the card on top of your deck.",
    cardImage: require("./images/MemorialGround.webp"),
    set: "MON",
  },
  {
    name: "Minnowism",
    ruling:
      "\nBase power is the printed {p} value on a card. (Located at the bottom left corner of a card.)",
    cardImage: require("./images/Minnowism.webp"),
    set: "MON",
  },
  {
    name: "Nourishing Emptiness",
    ruling:
      "\nThe blue symbol on Nourishing Emptiness is Intellect. At the end of your turn you draw up to your hero's intellect. (Before end of turn effects are gone)\n\u203B\n This does not count attack action cards on the combat chain such as itself as they are not in the graveyard yet.\n\u203B\n If dominate is gained while there are already 2 or more cards defending, the defending cards would not be affected. You would not be able to defend with future cards from hand.",
    cardImage: require("./images/NourishingEmptiness.webp"),
    set: "MON",
  },
  {
    name: "Out Muscle",
    ruling:
      "\nIf Out Muscle is not defended by any cards, it has go again.\n\u203B\n Go again grants the action point on chain link resolution, so if the power is changed in a way for Out Muscle to gain or lose go again, it will only be relevant when the chain link resolves and go again would grant 1 action point.",
    cardImage: require("./images/OutMuscle.webp"),
    set: "MON",
  },
  {
    name: "Pound for Pound",
    ruling:
      "\nThe green symbol on Pound for Pound is life.\n\u203B\n Pound for Pound checks if you have less life than your opponent at the time you play it. Changes after the card has been played does not cause Pound for Pound to gain or lose dominate.",
    cardImage: require("./images/PoundForPound.webp"),
    set: "MON",
  },
  {
    name: "Rally the Rearguard",
    ruling:
      "\nYou can activate Rally the Rearguard anytime you have priority as long as it is defending.\n\u203B\n You cannot activate its effect if you have no cards in hand.",
    cardImage: require("./images/RallyTheRearguard.webp"),
    set: "MON",
  },
  {
    name: "Rise Above",
    ruling:
      "\nYou cannot pay its alternative cost if you have no cards in hand.\n\u203B\n The alternative cost means you do not have to pay any resource cost for Rise Above. (It counts the whole cost not just {r})\n\u203B\n If there is an effect that increases the cost of Rise Above you must still pay it even if you use Rise Above’s alternative cost.",
    cardImage: require("./images/RiseAbove.webp"),
    set: "MON",
  },
  {
    name: "Rouse the Ancients",
    ruling:
      "\nRevealing more than 13 total {p} does not increase the {p} of Rouse the Ancients any more than 7.\n\u203B\n You can attack with Rouse the Ancients without revealing any cards. It would not gain the +7{p} or go again.\n\u203B\n You cannot reveal Rouse the Ancients to itself.",
    cardImage: require("./images/RouseTheAncients.webp"),
    set: "MON",
  },
  {
    name: "Seek Horizon",
    ruling:
      "\nYou cannot pay its additional cost if you have no cards in hand.\n\u203B\n You cannot pay its additional cost by putting Seek Horizon on top of your deck.\n\u203B\n You cannot put more than one card on top of your deck with its additional cost.",
    cardImage: require("./images/SeekHorizon.webp"),
    set: "MON",
  },
  {
    name: "Stony Woottonhog",
    ruling:
      "\nThe effect is only active while it is attacking. Defending with Stony Woottonhog will not grant +1{p} nor will it have +1{p} in any zone other than the combat chain while attacking.",
    cardImage: require("./images/StonyWoottonhog.webp"),
    set: "MON",
  },
  {
    name: "Stubby Hammerers",
    ruling:
      "\nBase power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n This does not grant the attack action cards go again. Stubby Hammerers action requires an action point and grants an action point after it resolves as its ability has go again.\n\u203B\n Stubby Hammerers does not give weapons with 3 or less power +1{p} as they are not attack action cards.",
    cardImage: require("./images/StubbyHammerers.webp"),
    set: "MON",
  },
  {
    name: "Surging Militia",
    ruling:
      "\nThis includes defense reactions. Defense reactions become a defending card when played.",
    cardImage: require("./images/SurgingMilitia.webp"),
    set: "MON",
  },
  {
    name: "Time Skippers",
    ruling:
      "\nAction points are not resource points.\n\u203B\n Time Skippers require an action point to activate. Upon resolution 2 action points are gained.",
    cardImage: require("./images/TimeSkippers.webp"),
    set: "MON",
  },
  {
    name: "Tremor of iArathael",
    ruling:
      "\nTremor of iArathael can gain at most +2{p} from its effect even if you have had multiple cards put into your banished zone this turn.\n\u203B\n The effect is continuous, if a card is put into the banished zone even after the card is played, it would still gain the +2{p}.\n\u203B\n Unless otherwise specified, a defending card’s textbox is considered empty - When defending with Tremor of iArathael it does not gain +2{p} even if a card has been put into your banished zone this turn.",
    cardImage: require("./images/TremorOfiArathael.webp"),
    set: "MON",
  },
  {
    name: "Warmonger’s Recital",
    ruling:
      "\nIf the attack is put to the bottom of your deck, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put to the bottom of your deck, the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes to the bottom of your deck, Last Known Information is used at the end of chain link resolution and you will still gain an action point.",
    cardImage: require("./images/WarmongersRecital.webp"),
    set: "MON",
  },
  {
    name: "Yinti Yanti",
    ruling:
      "\nThe effect is continuously checking if the aura is in play. When you no longer control an aura, Yinti Yanti will not have the bonus. (This is most relevant for auras that destroy itself when you play an attack action)",
    cardImage: require("./images/YintiYanti.webp"),
    set: "MON",
  },
  {
    name: "Zealous Belting",
    ruling:
      "\nBase power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n You can only pitch when there is a cost to pay.",
    cardImage: require("./images/ZealousBelting.webp"),
    set: "MON",
  },
  {
    name: "Blood Tribute",
    ruling:
      "\nYou cannot defend with Blood Tribute as it does not have a defense value.\n\u203B\n Banishing the card is not optional.\n\u203B\n The number of cards you place on top and bottom of your deck is known to your opponent, the order of the cards are not.\n\u203B\n You may put all of the cards on the top or all of the cards on the bottom if you so wish.",
    cardImage: require("./images/BloodTribute.webp"),
    set: "MON",
  },
  {
    name: "Carrion Husk",
    ruling:
      "\nPlayers do not have priority at the start of turns. Players cannot respond to Carrion Husk triggering to banish itself.\n\u203B\n The second ability checks at the start of your turn. If you fall below 13 life during your action phase, your end phase or your opponent’s turn, Carrion Husk would still stay in the arena.\n\u203B\n The green symbol on Carrion Husk is life.",
    cardImage: require("./images/CarrionHusk.webp"),
    set: "MON",
  },
  {
    name: "Consuming Aftermath",
    ruling:
      "\nYou may elect to banish no cards from your hand.\n\u203B\n You may banish a non-Shadow card from your hand, Consuming Aftermath would not gain dominate if a non-Shadow card was banished this way.\n\u203B\n You choose additional costs at the time you play the card (Pay the costs at the same time you pay the resource cost).",
    cardImage: require("./images/ConsumingAftermath.webp"),
    set: "MON",
  },
  {
    name: "Doomsday",
    ruling:
      "\nYou may only play Doomsday in your deck if your hero is Levia, Shadowborn or Levia (Young hero).\n\u203B\n You cannot defend with Doomsday as it does not have a defense value.\n\u203B\n You can only play Doomsday if there are 6 or more cards with blood debt in your banished zone. (You can still pitch Doomsday even if this criteria is not met.)\n\u203B\n Face-down cards in the banished zone have no traits and therefore do not count towards meeting the condition. Only face-up cards count.\n\u203B\n A Blasmophet, the Soul Harvester is a Token - Demon Ally.",
    cardImage: require("./images/Doomsday.webp"),
    set: "MON",
  },
  {
    name: "Blasmophet, the Soul Harvester",
    ruling:
      "\nBlasmophet is a token and does not start in your deck.\n\u203B\n When a token is destroyed it is removed from the arena.\n\u203B\n You may still banish a Shadow card from your hand even if the defending hero does not have a soul.\n\u203B\n You select the card to be banished from the defending hero’s soul.",
    cardImage: require("./images/Blasmophet.webp"),
    set: "MON",
  },
  {
    name: "Eclipse",
    ruling:
      "\nYou may only play Eclipse in your deck if your hero is Chane, Bound by Shadow or Chane (Young hero).\n\u203B\n You cannot defend with Eclipse as it does not have a defense value.\n\u203B\n You can only play Eclipse if you have played 6 or more cards with blood debt this turn. (You can still pitch Eclipse even if this criteria is not met.)\n\u203B\n You cannot play Eclipse from your banished zone if you have not met the criteria to do so.\n\u203B\n You can play Eclipse from your hand as long as you’ve met the criteria of playing 6 or more cards with blood debt this turn.\n\u203B\n An Ursur, the Soul Reaper is a Token - Demon Ally.",
    cardImage: require("./images/Eclipse.webp"),
    set: "MON",
  },
  {
    name: "Ursur, the Soul Reaper",
    ruling:
      "\nUrsur is a token and does not start in your deck.\n\u203B\n When a token is destroyed it is removed from the arena.\n\u203B\n If the hero Ursur is attacking no longer has a soul when the chain link resolves, then Ursur would not have go again and the action point would not be gained.",
    cardImage: require("./images/Ursur.webp"),
    set: "MON",
  },
  {
    name: "Ebon Fold",
    ruling:
      "\nYou may banish any card from your hand, even if it's not a shadow card. You only draw a card if the banished card is a shadow card.\n\u203B\n If you have no cards in your hand at the time the ability resolves, you will not be able to banish a card and therefore would not draw a card.\n\u203B\n If you use spellvoid 2 to prevent one arcane damage, there will be no leftover prevention.\n\u203B\n Spellvoid 2 can only prevent 2 arcane damage from a single source. It cannot prevent 2 sources of 1 arcane damage.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/EbonFold.webp"),
    set: "MON",
  },
  {
    name: "Eclipse Existence",
    ruling:
      "\nIf they do not have a card in soul, the attack would be unable to banish a card therefore they would not lose 1{h}.\n\u203B\n The green symbol on Eclipse Existence is life.\n\u203B\n They only lose 1{h} if a card is banished from their soul from Eclipse Existence’s effect. If a card if banished from their soul from another effect it will not cause them to lose 1{h}\n\u203B\n The second effect of Eclipse Existence happens as the card resolves. You must choose whether you want to banish an action card from your graveyard as soon as Eclipse Existence resolves.",
    cardImage: require("./images/EclipseExistence.webp"),
    set: "MON",
  },
  {
    name: "Guardian of the Shadowrealm",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Guardian of the Shadowrealm’s cost (2) to play it.\n\u203B\n The action ability can only be used when Guardian of the Shadowrealm is in your banished zone.\n\u203B\n The action does not have go again and requires an action point.\n\u203B\n Guardian of the Shadowrealm goes into the graveyard when the combat chain closes after it is played.",
    cardImage: require("./images/GuardianOfTheShadowrealm.webp"),
    set: "MON",
  },
  {
    name: "Howl from Beyond",
    ruling:
      "\nAction cards go into your graveyard after they resolve. (This is relevant for Shadow Brute attacks that banish cards from your graveyard as an additional cost)",
    cardImage: require("./images/HowlFromBeyond.webp"),
    set: "MON",
  },
  {
    name: "Mutated Mass",
    ruling:
      "\nYou can attack or defend with Mutated Mass even if your pitch zone is empty. 0 is a value.\n\u203B\n Mutated Mass’s base power and defense is * even when it’s in a zone that’s not the combat chain. (For example it has 6{p} in your hand if you have 3 cards with different costs in your pitch zone)\n\u203B\n Cards with no pitch value will count as cost 0 for Mutated Mass. (This is because it requires a value to be returned. This is different from when looking at if a card has cost 0.)\n\u203B\n Cards with X in it’s pitch value will have it’s X counted as 0. For example a card with cost XX counts the same as having a cost 0 in your pitch zone.\n\u203B\n Mutated Mass’s is continuously checking the pitch zone. It does not start a chain or trigger.",
    cardImage: require("./images/MutatedMass.webp"),
    set: "MON",
  },
  {
    name: "Lunartide Plunderer",
    ruling:
      "\nIf the attack is banished, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is banished, the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it is banished, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n You choose the card from their soul to banish.\n\u203B\n You still banish Lunartide Plunderer even if the hero has no soul or a card from their soul is not banished. (Since it does not target, even if the card in soul is removed when this effect resolves, Lunartide Plunderer will still be banished)\n\u203B\n Banishing Lunartide Plunderer is not optional.",
    cardImage: require("./images/LunartidePlunderer.webp"),
    set: "MON",
  },
  {
    name: "Shadow Puppetry",
    ruling:
      "\nYou choose if you want to banish the card after looking at it.\n\u203B\n If you choose not to banish the card, it remains on top of your deck.\n\u203B\n If this is used on an attack that already has go again, you will only gain 1 action point upon resolution of the attack as multiple instances of go again do not stack.",
    cardImage: require("./images/ShadowPuppetry.webp"),
    set: "MON",
  },
  {
    name: "Soul Harvest",
    ruling:
      "\nThe green symbol on Soul Harvest is life.\n\u203B\n You may only play Soul Harvest in your deck if your hero is Levia, Shadowborn Abomination, or Levia (Young hero).\n\u203B\n You may only have 1 Soul Harvest in your deck including cards in your registered 80-card pool in constructed tournaments and only 1 Soul Harvest in your deck in limited tournaments or blitz tournaments as it is Legendary.\n\u203B\n You must pay the resource cost. Soul Harvest has an additional cost not an alternative cost.\n\u203B\n You cannot banish more than 6 cards from your graveyard. You also cannot banish less than 6 cards from your graveyard.",
    cardImage: require("./images/SoulHarvest.webp"),
    set: "MON",
  },
  {
    name: "Soul Reaping",
    ruling:
      "\nYou may only play Soul Reaping in your deck if your hero is Chane, Bound by Shadow or Chane (Young hero).\n\u203B\n You may only have 1 Soul Reaping in your deck including cards in your registered 80-card pool in constructed tournaments and only 1 Soul Reaping in your deck in limited tournaments or blitz tournaments as it is Legendary.\n\u203B\n You may banish any cards from your hand. You would only gain {r} for cards with blood debt.\n\u203B\n If the hero Soul Reaping is attacking no longer has a soul when the chain link resolves, Soul Reaping wouldn’t have go again and not grant 1 action point.\n\u203B\n The “If you do, [...]” effect is an on-play triggered ability which triggers if the additional cost is played. This means it can be responded to, and it resolves before Soul Reaping resolves and becomes attacking.",
    cardImage: require("./images/SoulReaping.webp"),
    set: "MON",
  },
  {
    name: "Spew Shadow",
    ruling:
      "\nYou do not need to play the attack action straight away. You must still pay its resource costs and it will still require an action point.\n\u203B\n You can attack a non-Light hero with the attack action; it will just not gain +2{p}.\n\u203B\n If you attack a non-hero card such as an aura with Spectra or an Ally, the attack will not gain +2{p}.",
    cardImage: require("./images/SpewShadow.webp"),
    set: "MON",
  },
  {
    name: "Convulsions from the Bellows of Hell",
    ruling:
      "\nIf a card with 6 or more {p} is not banished this way this card would not affect the next attack action card you play in any way.\n\u203B\n The next attack can be any attack action card. This card does not affect weapon attacks.",
    cardImage: require("./images/Convulsions.webp"),
    set: "MON",
  },
  {
    name: "Deadwood Rumbler",
    ruling:
      "\nYou cannot defend with Deadwood Rumbler as it does not have a defense value.\n\u203B\n Nobody has priority during the resolution of an ability. For example, you cannot play or activate an ability after drawing the card but before discarding. You also cannot see what card is discarded before responding to the banish of a card in a graveyard.\n\u203B\n Banishing a card from a graveyard is mandatory. (You may banish the card you discarded)\n\u203B\n You can banish a card from any player's graveyard.",
    cardImage: require("./images/DeadwoodRumbler.webp"),
    set: "MON",
  },
  {
    name: "Deep Rooted Evil",
    ruling:
      "\nYou cannot defend with Deep Rooted Evil as it does not have a defense value.\n\u203B\n If Deep Root Evil is put into your banished zone this turn, it will count itself as it is a 6{p} card that is put into your banished zone this turn.",
    cardImage: require("./images/DeepRootedEvil.webp"),
    set: "MON",
  },
  {
    name: "Graveling Growl",
    ruling:
      "\nEven if another card allows you to play this card i.e from your banished zone, the restriction of only being able to be played if a card with 6 or more {p} has been put into your banished zone this turn still applies.",
    cardImage: require("./images/GravelingGrowl.webp"),
    set: "MON",
  },
  {
    name: "Hooves of the Shadowbeast",
    ruling:
      "\nYou choose if you want to use Hooves of the Shadowbeast’s ability at the time a card with 6 or more {p} is put into your banished zone.\n\u203B\n You can only gain action points during your action phase. (You can still use this effect during your opponent's turn, however you would not gain the action point.",
    cardImage: require("./images/HoovesOfTheShadowBeast.webp"),
    set: "MON",
  },
  {
    name: "Lady Barthimont",
    ruling:
      "\nMentors do not have a pitch value or cost and cannot be pitched or played.\n\u203B\n Mentors have their effect active when they are face up in your arsenal.\n\u203B\n You cannot arsenal a card if there is not an empty arsenal zone.\n\u203B\n You do not have to find a specialization card from your deck, you may elect to not find a card. This is because it is looking for a specific type of card and it is a hidden zone. You still must shuffle your deck.",
    cardImage: require("./images/LadyBarthimot.webp"),
    set: "MON",
  },
  {
    name: "Mark of the Beast",
    ruling:
      "\nAnywhere includes all possible zones, such as from hand, banished zone or deck. This is not limited to being put into the graveyard from the combat chain.\n\u203B\n This is a replacement effect. It does not create a trigger, the card does not enter the graveyard.",
    cardImage: require("./images/MarkOfTheBeast.webp"),
    set: "MON",
  },
  {
    name: "Pulping",
    ruling:
      "\nYou cannot defend with Pulping as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n Nobody has priority during the resolution of an ability. For example, you cannot play or activate an ability after drawing the card but before discarding.\n\u203B\n Defended by 0 cards counts as being defended by less than 2 non-equipment cards.",
    cardImage: require("./images/Pulping.webp"),
    set: "MON",
  },
  {
    name: "Shadow of Blasmophet",
    ruling:
      "\nYou cannot defend with Shadow of Blasmophet as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n Nobody has priority during the resolution of an ability. For example, you cannot play or activate an ability after drawing the card but before discarding nor can a player respond between you drawing and searching your deck. Players should respond before the ability resolves as you cannot do it during the resolution.\n\u203B\n The card this searched for must have the keyword blood debt. Cards that reference blood debt do not count unless they also have blood debt.\n\u203B\n You may elect to banish nothing, however the search is mandatory if a 6{p}+ card is discarded this way and therefore your deck must be shuffled.",
    cardImage: require("./images/ShadowOfBlasmophet.webp"),
    set: "MON",
  },
  {
    name: "Smash with Big Tree",
    ruling:
      "\nYou cannot defend with Smash wth a Big Tree as it has no defense value. (This is different than if the defense value was 0.)",
    cardImage: require("./images/SmashWithBigTree.webp"),
    set: "MON",
  },
  {
    name: "Tear Limb from Limb",
    ruling:
      "\nYou cannot defend with Tear Limb from Limb as it has no defense value.\n\u203B\n Base power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n The +X{p} gained is the base {p} of the next Brute attack action card you play this turn not the discarded card.\n\u203B\n Nobody has priority during the resolution of an ability. For example, you cannot play or activate an ability after drawing the card but before discarding.",
    cardImage: require("./images/TearLimbFromLimb.webp"),
    set: "MON",
  },
  {
    name: "Aether Ironweave",
    ruling:
      "\nEquipments go to your graveyard when they are destroyed.\n\u203B\n The action cards do not need to be played from your hand. They can be played from your banished zone or other zones (Provided it is legal to play them from there).\n\u203B\n Even if you have played more than one of each attack action and non-attack action, it will still only gain {r}{r}.",
    cardImage: require("./images/AetherIronweave.webp"),
    set: "MON",
  },
  {
    name: "Bounding Demigon",
    ruling:
      "\nYou may play this card from your hand even if you have not played a non-attack action card this turn. It would not gain the +1{p} if played from hand. (Even if you have played a non-attack action card this turn)",
    cardImage: require("./images/BoundingDemigon.webp"),
    set: "MON",
  },
  {
    name: "Dimenxxional Crossroads",
    ruling:
      "\nDimenxxional Crossroads is a non-attack action card so if you play a non-attack action card from the banished zone the same turn you played Dimenxxional Crossroads, the effect won’t trigger.\n\u203B\n The ability just checks if you have played another card of that type this turn. It does not matter if that card was played from hand or banished zone.\n\u203B\n Damage causes loss of {h}. If you take any damage during your turn such as arcane damage or lose {h} due to blood debt, Dimenxxional Crossroads will be destroyed.\n\u203B\n Players do not have priority during the end of turn. If {h} is lost during the end of your turn i.e from blood debt, no player can respond to the destroying of Dimenxxional Crossroads as you cannot have priority during the end of turn.",
    cardImage: require("./images/DimenxxionalCrossroads.webp"),
    set: "MON",
  },
  {
    name: "Dimenxxional Gateway",
    ruling:
      "\nIf it is a Shadow and a Runeblade card, you do both effects. If it is not a Shadow or a Runeblade card you do none of the effects.\n\u203B\n If there are no cards in your deck, you reveal nothing. No effects will trigger.\n\u203B\n Each opposing hero decides if they want to prevent the arcane damage they would take. They cannot prevent arcane damage that would be dealt to other heroes.\n\u203B\n In a multiplayer game, opposing heroes decide if they want to prevent arcane damage in clockwise order, starting with the player to the left of the controller of Dimenxxional Gateway. (This is for a multiplayer game only. Cards that deal damage to both players do not follow this rule in games of two players.)",
    cardImage: require("./images/DimenxxionalGateway.webp"),
    set: "MON",
  },
  {
    name: "Invert Existence",
    ruling:
      "\nYou cannot defend with Invert Existence as it does not have a defense value.\n\u203B\n You may banish any cards from an opposing hero’s graveyard, not just action cards.\n\u203B\n You cannot banish 1 card from two different graveyards. They must all be from one opposing hero’s graveyard\n\u203B\n You do not choose targets. You pick the cards when Invert Existence resolves. There is no window for priority after the cards are picked but before they are banished. I.e if you want to play a card that prevents arcane damage or gains you life, do it in response to this card. Prevention and replacement effects such as spellvoid/arcane barrier do not need to be activated in response.",
    cardImage: require("./images/InvertExistence.webp"),
    set: "MON",
  },
  {
    name: "Lord Sutcliffe",
    ruling:
      "\nMentors do not have a pitch value or cost and cannot be pitched or played.\n\u203B\n Mentors have their effect active when they are face up in your arsenal.\n\u203B\n You cannot arsenal a card if there is not an empty arsenal zone.\n\u203B\n You do not have to find a specialization card from your deck, you may elect to not find a card. This is because it is looking for a specific type of card and it is a hidden zone. You still must shuffle your deck.\n\u203B\n Lord Sutcliffe does arcane damage to all heroes, not just opposing.\n\u203B\n The turn player decides the order of replacement effects that would apply first. For example, if both players have arcane barrier, the turn player decides which replacement effect applies first and therefore who has to decide to prevent first.\n\u203B\n The triggered ability is not once per turn, if you play multiple non-attack action cards it would trigger each time.",
    cardImage: require("./images/LordSutcliffe.webp"),
    set: "MON",
  },
  {
    name: "Piercing Shadow Vise",
    ruling:
      "\nPiercing Shadow Vise’s ability is continuously checking. If you deal arcane damage after Piercing Shadow Vise is already attacking it will still gain +2{p}. This includes if it is a previous chain link or have already dealt damage. (If Piercing Shadow Vise has already dealt damage, increasing it’s {p} won’t retroactively deal any more damage)",
    cardImage: require("./images/PiercingShadowVise.webp"),
    set: "MON",
  },
  {
    name: "Rift Bind",
    ruling:
      "\nYou may still play Rift Bind from your hand. It would not gain the +X{p} if it is played from hand.\n\u203B\n You can play Rift Bind from your banished zone even if you have not played any ‘non-attack’ action cards that turn.",
    cardImage: require("./images/RiftBind.webp"),
    set: "MON",
  },
  {
    name: "Rifted Torment",
    ruling:
      "\nYou may still play Rifted Torment from your hand. It would not deal the 1 arcane damage if it is played from your hand.\n\u203B\n You may target yourself with the arcane damage.",
    cardImage: require("./images/RiftedTorment.webp"),
    set: "MON",
  },
  {
    name: "Rip Through Reality",
    ruling:
      "\nRip Through Reality is continuously checking. If you deal arcane damage while Rip Through Reality is attacking, it would still gain go again.",
    cardImage: require("./images/RipThroughReality.webp"),
    set: "MON",
  },
  {
    name: "Seeds of Agony",
    ruling:
      '\nYou choose the target you want to deal 1 arcane damage to at the time you play an attack action card with cost 0/1/2 or less.\n\u203B\n The attack action is the card that does the arcane damage.\n\u203B\n With the release of the comprehensive rules on May 4th 2021, the card text of Seeds of Agony been errata’d to “The next attack action card with cost 0/1/2 or less you play this turn gains "When you attack with this, deal 1 arcane damage to target hero.”” (Seeds of Agony is the only card in Monarch that functionally changes with the release of the comprehensive rules. Other cards do have updated text but their functionality is not affected.) The errata to Seeds of Agony is effective immediately.\n\u203B\n If you play multiple Seeds of Agony followed by an attack action card, it will have multiple instances of “When you attack with this, deal 1 arcane damage to target hero.” It will be considered multiple triggers therefore each one is it’s own source. This is relevant for preventing damage from arcane barrier. For example if you have an attack action with 2 instances of “When this attacks, deal 1 arcane damage to target hero” it will require arcane barrier 1 and two resources to fully prevent this.\n\u203B\n If you play multiple Seeds of Agony followed by an attack action card, it will have multiple instances of “When you attack with this, deal 1 arcane damage to target hero.” It will be considered multiple triggers therefore each one is it’s own source. This is relevant for preventing damage from spellvoid. For example if you have an attack action with 2 instances of “When this attacks, deal 1 arcane damage to target hero” you will not be able to prevent both with spellvoid 2. (You can use two instances of spellvoid 1 to prevent both.)',
    cardImage: require("./images/SeedsOfAgony.webp"),
    set: "MON",
  },
  {
    name: "Shadow of Ursur",
    ruling:
      "\nYou may pay the additional cost even when played from the banished zone.\n\u203B\n You may play this card without paying the additional cost. (It would not gain go again)\n\u203B\n A card must have the keyword blood debt to be banished from hand, not just reference blood debt.",
    cardImage: require("./images/ShadowOfUrsur.webp"),
    set: "MON",
  },
  {
    name: "Sonata Arcanix",
    ruling:
      "\nYou choose what you want X to be before applying cost reductions then paying the costs.\n\u203B\n X can be 0.\n\u203B\n The value of each X in Sonata Arcanix’s cost must be the same.\n\u203B\n You must pay double the cost of X. For example if you want this card to reveal 2 + 3 cards. You need to pay 4 resources.\n\u203B\n If there are less cards in your deck than the amount of cards to be revealed, you reveal your whole deck.\n\u203B\n The arcane damage is a single source of damage. For example if Sonata does 2 arcane damage you would require arcane barrier 2 (or two arcane barrier 1) to fully prevent it.",
    cardImage: require("./images/SonataArcanix.webp"),
    set: "MON",
  },
  {
    name: "Unhallowed Rites",
    ruling:
      "\nYou may still play this from your hand regardless if you’ve played a non-attack action card this turn or not.\n\u203B\n A card must have the keyword blood debt to be put on the bottom of your deck, not just reference blood debt.",
    cardImage: require("./images/UnhallowedRites.webp"),
    set: "MON",
  },
  {
    name: "Blinding Beam",
    ruling:
      "\nYou cannot defend with Blinding Beam as it does not have a defense value.\n\u203B\n You announce targets before paying costs.\n\u203B\n If the power of an attack would become less than 0, it is considered to be 0. However if the attack then gets a positive power modifier, it will still be under the effect of the -{p} modifier.",
    cardImage: require("./images/BlindingBeam.webp"),
    set: "MON",
  },
  {
    name: "Celestial Cataclysm",
    ruling:
      "\nYou cannot play this card if you don’t have at least 3 cards in your hero’s soul.",
    cardImage: require("./images/CelestialCataclysm.webp"),
    set: "MON",
  },
  {
    name: "Glisten",
    ruling:
      "\nYou can only play instants when you have priority. You do not have priority during the start of turn or the end phase. (You cannot wait until end of turn to play Glisten)\n\u203B\n You may play this card during the reaction window as you have priority during that step. (You can also play it during the defending window if you so choose)\n\u203B\n You may put all the counters on a single weapon.\n\u203B\n You pick the weapons and how many counters each gets when Glisten resolves.\n\u203B\n You may pick zero weapons and distribute zero counters.\n\u203B\n Glisten will remove all +1{p} counters on weapons at the end phase, not just those created from Glisten.\n\u203B\n You may play this on an Illusionist aura if there is a card such as Iris of Reality that makes Illusionist auras weapons. If it is no longer a weapon when it is the end phase, the +1{p} counters will not be removed.",
    cardImage: require("./images/Glisten.webp"),
    set: "MON",
  },
  {
    name: "Great Library of Solana",
    ruling:
      "\nYou may only have 1 Great Library of Solana in your deck as it is Legendary. This applies to all formats including booster draft and sealed deck.\n\u203B\n You cannot pitch Great Library of Solana, as it does not have a pitch value.\n\u203B\n Great Library of Solana uses an action point to play.\n\u203B\n Great Library of Solana is a Landmark. There can only be one Landmark in the arena at any given time. When a Landmark enters the arena while another is in the arena, the previous Landmark is destroyed and put into the graveyard.\n\u203B\n A Landmark stays on the arena after it is played. It remains in the arena until it is destroyed.\n\u203B\n The blue symbol on Great Library of Solana is intellect. At the end of your turn you draw up to your hero’s intellect. Having 2 or more cards with yellow color strips in your pitch zone in the end phase will allow you to draw up an additional card as your intellect is 1 higher.\n\u203B\n Any player can activate the action ability of Great Library of Solana, however you must pay its cost and have an action point (And have priority on your turn) to use it.\n\u203B\n The color strip is located at the top middle of a card. You can also check the top left for the pitch value. Pitch 2 = Yellow color strip.",
    cardImage: require("./images/GreatLibraryOfSolana.webp"),
    set: "MON",
  },
  {
    name: "Halo of Illumination",
    ruling:
      "\nYou may put a non-Light card into your hero’s soul, you would however not draw a card when the ability resolves.\n\u203B\n If you do not have a card in hand when the ability resolves, you will not put a card from your hand into your soul and therefore not draw a card.\n\u203B\n If you use spellvoid 2 to prevent one arcane damage, there will be no leftover prevention.\n\u203B\n Spellvoid 2 can only prevent 2 arcane damage from a single source. It cannot prevent 2 sources of 1 arcane damage.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/HaloOfIllumination.webp"),
    set: "MON",
  },
  {
    name: "Impenetrable Belief",
    ruling:
      "\nIt does not matter when the cards were put into the banished zone this turn or if they were put in there at the same time as long as three have been put into the banished zone this turn. The cards also don’t need to still be in the banished zone.\n\u203B\n If cards are put into the banished zone that would cause Impenetrable belief to gain +2[d} after it is already defending, it would still gain the bonus as the effect is continuous and not a trigger\n\u203B\n Impenetrable Belief can only get +2{d} even if more than 3 cards is banished.",
    cardImage: require("./images/ImpenetrableBelief.webp"),
    set: "MON",
  },
  {
    name: "Invigorating Light",
    ruling:
      "\nInvigorating Light checks if there is a card in your hero’s soul at the time you play it. Even if the number of cards in your soul changes before the combat chain closes, it won’t have an effect. For example, if there were no cards in your soul when you play Invigorating Light, then a card is placed into your soul before the combat chain closes, Invigorating Light would still be put into your hero’s soul when the combat chain closes.",
    cardImage: require("./images/InvigoratingLight.webp"),
    set: "MON",
  },
  {
    name: "Ray of Hope",
    ruling:
      "\nYou can still play this card against a non-Shadow hero, however it will not do anything.\n\u203B\n This affects all attacks including weapon attacks (which include attacking with an aura that is a weapon) and attack action.\n\u203B\n Ray of Hope checks if you have less {h} than an opposing Shadow hero when it resolves.",
    cardImage: require("./images/RayOfHope.webp"),
    set: "MON",
  },
  {
    name: "Seek Enlightenment",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n You must put the attack action card into your hero’s soul if it hits. It is not optional.",
    cardImage: require("./images/SeekEnlightenment.webp"),
    set: "MON",
  },
  {
    name: "Soul Food",
    ruling:
      "\nIt is not optional, you cannot keep some cards in your hand.\n\u203B\n This does not put your arsenal into your hero’s soul as the arsenal is not part of your hand.\n\u203B\n Soul Food is an action and uses an action point to play.",
    cardImage: require("./images/SoulFood.webp"),
    set: "MON",
  },
  {
    name: "Soul Shield",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Soul Shield’s cost to play it.\n\u203B\n Soul Shield only goes into your hero’s soul when the combat chain closes. The combat chain closes when the turn player either ends their turn, closes it to play a non-attack action or voluntarily closes the combat chain.\n\u203B\n If you defend with Soul Shield you must put it into your hero’s soul. It is not optional.",
    cardImage: require("./images/SoulShield.webp"),
    set: "MON",
  },
  {
    name: "Tome of Divinity",
    ruling:
      "\nYou cannot defend with Tome of Divinity as it does not have a defense value.\n\u203B\n It does not matter how the card was put into your hero’s soul nor does it matter if the card is still in your hero’s soul.\n\u203B\n You cannot choose to draw only 2 cards if a card has been put into your hero’s soul this turn.\n\u203B\n This card checks on resolution not when it is played, if a card is put into your hero’s soul before this card resolves it would draw 3 cards.",
    cardImage: require("./images/TomeOfDivinity.webp"),
    set: "MON",
  },
  {
    name: "Vestige of Sol",
    ruling:
      "\nYou still gain the resources the card you pitched generated, this card gains you an additional {r} (Provided a card has been put into your hero’s soul this turn).\n\u203B\n It does not matter how the card was put into your hero’s soul nor does it matter if the card is still in your hero’s soul.\n\u203B\n This is not a once per turn effect. Everytime you pitch a Light card this turn you would gain {r}. Provided a card has been put into your hero’s soul this turn)\n\u203B\n You cannot pitch a card if there is not a cost to be played. You cannot pitch a card for a cost if there are already sufficient resources available to you.\n\u203B\n You cannot pitch a card that has no pitch cost even if Vestige of Sol is active.\n\u203B\n ERRATA: This card text has been changed to “If a card has been put into your hero's soul this turn, whenever you pitch a Light card, instead gain that many {r} plus 1.” (This is to reflect the intentions of how the card is supposed to work). This errata is effective immediately.\n\u203B\n This is a replacement effect not a triggered effect.",
    cardImage: require("./images/VestigeOfSol.webp"),
    set: "MON",
  },
  {
    name: "Arc Light Sentinel",
    ruling:
      "\nYou cannot defend with Arc Light Sentinel as it does not have a defense value.\nYou may only play Arc Light Sentinel in your deck if your hero is Prism, Sculptor of Arc Light, or Prism (Young hero).\n\u203B\n The turn player always has priority first and can start the turn playing a card assuming they are legally able to (For example he still needs to have the resources or needs an empty chain to play an action).\n\u203B\n If an attack is already announced and attacking, playing Arc Light Sentinel does not redirect the attack to Arc Light Sentinel.\n\u203B\n The opponent may elect not to attack, however if they choose to attack they must choose Arc Light Sentinel as the target of the attack.\n\u203B\n If there are multiple Arc Light Sentinel, you can choose which one to attack. You cannot attack another target that isn’t an Arc Light Sentinel.\n\u203B\n Arc Light Sentinel only forces attacks to target it. Action cards such as ones that deal damage cannot target Arc Light Sentinel.\n\u203B\n This includes all attacks including weapon attacks and attack action cards.\n\u203B\n In multiplayer (i.e UPF) or other formats where there's a restriction on who you can attack or target, if you are not able to normally attack the player controlling Arc Light Sentinel then you are not able to attack Arc Light Sentinel as they are out of your spell range (Attack range).",
    cardImage: require("./images/ArcLightSentinel.webp"),
    set: "MON",
  },
  {
    name: "Dream Weavers",
    ruling:
      "\nOnce the card changes zone, for example, enters the graveyard after the combat chain closes, it will have phantasm again.",
    cardImage: require("./images/DreamWeavers.webp"),
    set: "MON",
  },
  {
    name: "Genesis",
    ruling:
      "\nYou cannot defend with Genesis, as it does not have a defense value.\n\u203B\n Players do not have priority at the start of turns. Players cannot respond to Genesis’s effect at the start of turn as neither players have priority during the start of turn.\n\u203B\n If it is not an Illusionist or Light card, then no Spectral Shield is created nor is a card drawn.\n\u203B\n If it is a Light Illusionist card then a Spectral Shield is created and a card is drawn.",
    cardImage: require("./images/Genesis.webp"),
    set: "MON",
  },
  {
    name: "Herald of Erudition",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfErudition.webp"),
    set: "MON",
  },
  {
    name: "Herald of Judgment",
    ruling:
      "\nYou may only play Herald of Judgment in your deck if your hero is Prism, Sculptor of Arc Light or Prism (Young hero).\n\u203B\n If the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.\n\u203B\n The defending hero can still play cards from their banished zone during your action phase.\n\u203B\n The defending hero can still activate actions on cards from their banished zone. For example a card in the banished zone with an action ability. This card only stops banished card from being played.\n\u203B\n The defending hero can still play cards from their hands.",
    cardImage: require("./images/HeraldOfJudgement.webp"),
    set: "MON",
  },
  {
    name: "Herald of Protection",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfProtection.webp"),
    set: "MON",
  },
  {
    name: "Herald of Ravages",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n You may target any hero with the 1 arcane damage, not just the defending hero.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfRavages.webp"),
    set: "MON",
  },
  {
    name: "Herald of Rebirth",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n You can only put a card with the keyword phantasm from your graveyard on top of your deck, this does not include cards that only reference phantasm.\n\u203B\n Herald of Rebirth cannot put itself to the top of your deck as it is not in the graveyard when it hits.\n\u203B\n You do not have to put a card with phantasm from your graveyard on top of your deck. Even if you elect not to, you must still put Herald of Rebirth into your hero’s soul.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfRebirth.webp"),
    set: "MON",
  },
  {
    name: "Herald of Tenacity",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfTenacity.webp"),
    set: "MON",
  },
  {
    name: "Herald of Triumph",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n Reducing the {p} of a defending attack action card has no effect on its {d} value.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfTriumph.webp"),
    set: "MON",
  },
  {
    name: "Parable of Humility",
    ruling:
      "\nYou cannot defend with Parable of Humility as it does not have a defense value.\n\u203B\n Reducing the {p} of a defending attack action card has no effect on its {d} value.\n\u203B\n This does not affect the base {p} of the attack action or affect the card when it is not attacking or defending.\n\u203B\n When a card enters a zone such as the graveyard and cares about the {p} of the card, it will use the last known information. In this case when an attack action card controlled by opposing hero enters the graveyard from the combat chain, it will count as having the -1{p}. (Only relevant for cards that care about the {p} of a card entering a zone)",
    cardImage: require("./images/ParableOfHumility.webp"),
    set: "MON",
  },
  {
    name: "Merciful Retribution",
    ruling:
      "\nYou cannot defend with Merciful Retribution as it does not have a defense value.\n\u203B\n Token aura or attack action cards you control that are destroyed will also deal 1 arcane damage to target hero. Only non-token Light cards are put into your hero’s soul.\n\u203B\n An attack action card that is put into the graveyard from the combat chain is not considered to be destroyed. Discarding an aura or attack action card is also not considered to be destroyed.\n\u203B\n Merciful Retribution triggers itself. If Merciful Retribution is destroyed, it will deal 1 arcane damage to target hero and be put into your hero’s soul as it is a Light Illusionist Aura.",
    cardImage: require("./images/MercifulRetribution.webp"),
    set: "MON",
  },
  {
    name: "Ode to Wrath",
    ruling:
      "\nYou cannot defend with Ode to Wrath as it does not have a defense value.\n\u203B\n The green symbol on Ode to Wrath is life.\n\u203B\n Loss of {h} does not count as dealing damage.\n\u203B\n A source you control includes damage from attacks such as weapon attack (Including attacking with an aura if applicable), attack action or dealing damage such as arcane damage.",
    cardImage: require("./images/OdeToWrath.webp"),
    set: "MON",
  },
  {
    name: "Phantasmaclasm",
    ruling:
      "\nYou must select a card from their hand. It is not optional.\n\u203B\n If the defending hero’s hand is empty, they will still draw a card when Phantasmaclasm’s ability resolves.\n\u203B\n Phantasmaclasm’s ability happens before the defending player has a chance to defend or play defense reactions. (And thus before it can be destroyed by phantasm)\n\u203B\n If their deck is empty, Phantasmaclasm would put the chosen card on their deck and that player would immediately redraw the same card.\n\u203B\n If this is attacking an ally, you would not look at a hero’s hand as there is no defending hero and thus no one would draw a card.",
    cardImage: require("./images/Phantasmaclasm.webp"),
    set: "MON",
  },
  {
    name: "Phantasmal Footsteps",
    ruling:
      "\nAn attack action card going into a graveyard from the combat chain is not the same as being destroyed.\n\u203B\n If you elect not to use it’s effect on the first Illusionist attack action card you control that is destroyed, you cannot use the effect for the rest of the turn.\n\u203B\n The Illusionist attack action card being destroyed does not need to be the one in the current chain link. For example if an illusionist attack action card in a previous chain link was destroyed (I.e by phantasm at a later point due to an instant or reaction) then Phantasmal Footsteps will still trigger.\n\u203B\n When you defend with Phantasmal Footsteps and pay {r} it’s defense becomes 1, even if you defend with it an additional time this turn and pay {r} it won’t add any additional {d}.\n\u203B\n Phantasmal Footsteps only changes it’s defense to 1{d}, it does not take into account or remove any -1{d} counters. If Phantasmal Footsteps has a -1{d} counter on it then its defense becomes 1{d}, it would have 0{d}.\n\u203B\n You can defend with an equipment as long as it's in the equipment zone. If the attacking player closes the chain, Phantasmal Footsteps would return to the equipment zone provided it was not destroyed by defending an attack with 6 or more {p} and thus you would be able to defend again.\n\u203B\n Phantasmal Footsteps does not have Battleworn. It will not gain a -1{d} counter from defending.\n\u203B\n Phantasmal Footsteps {d} becoming 1 lasts until end of turn. You do not have to pay {r} again if you defend with it a second time for it to have 1{d}.\n\u203B\n You cannot gain action points during your opponent’s turn. (You may still pay the {r} if an illusionist attack action is destroyed, you just would not gain the action point when it resolves)",
    cardImage: require("./images/PhantasmalFootsteps.webp"),
    set: "MON",
  },
  {
    name: "Phantasmify",
    ruling:
      "\nWhen an attack has an effect when played that would become a layer on the chain, that effect will happen before the defending window and therefore even if the attack is destroyed, the effect has already happened.\n\u203B\n When an attack action is destroyed the rest of the card effects will not resolve such as go again which rely on the chain link resolving.",
    cardImage: require("./images/Phantasmify.webp"),
    set: "MON",
  },
  {
    name: "Prismatic Shield",
    ruling:
      "\nYou cannot defend with Prismatic Shield as it does not have a defense value.",
    cardImage: require("./images/PrismaticShield.webp"),
    set: "MON",
  },
  {
    name: "Spears of Surreality",
    ruling:
      "\nIf Spears of Surreality is destroyed, the attack will not resolve and therefore you will not gain an action point from go again.",
    cardImage: require("./images/SpearsOfSurreality.webp"),
    set: "MON",
  },
  {
    name: "The Librarian",
    ruling:
      "\nMentors do not have a pitch value or cost and cannot be pitched or played.\n\u203B\n Mentors have their effect active when they are face up in your arsenal.\n\u203B\n You cannot arsenal a card if there is not an empty arsenal zone.\n\u203B\n You do not have to find a specialization card from your deck, you may elect to not find a card. This is because it is looking for a specific type of card and it is a hidden zone. You still must shuffle your deck.\n\u203B\n If you create multiple spectral shields at the same time you still only draw one card and put one lesson counter on The Librarian.",
    cardImage: require("./images/TheLibrarian.webp"),
    set: "MON",
  },
  {
    name: "Wartune Herald",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/WartuneHerald.webp"),
    set: "MON",
  },
  {
    name: "Beacon of Victory",
    ruling:
      "\nYou must have cards in your hero’s soul to banish in order to play Beacon of Victory.\n\u203B\n You can target any attack including weapon attacks and attack actions.\n\u203B\n You must have charged before this card resolves for the second effect of the card to happen. Charging after this card has resolved would not do anything.\n\u203B\n You do not have to play the card you search for straight away.",
    cardImage: require("./images/BeaconOfVictory.webp"),
    set: "MON",
  },
  {
    name: "Bolt of Courage",
    ruling:
      "\nBolt of Courage does not need to be the card to have charged for it to gain its effect. If you have charged this turn due to another card, Bolt of Courage still gains its effect.",
    cardImage: require("./images/BoltOfCourage.webp"),
    set: "MON",
  },
  {
    name: "Bolting Blade",
    ruling:
      "\nIf you’ve charged at least twice this turn, Bolting Blade will cost 0 to play.\n\u203B\n If there is an effect that increases the cost of Bolting Blade, it can be reduced by Bolting Blade’s effect. For example if there is an effect that causes Bolting Blade to cost {r}{r} more but you have charged three times, Bolting Blade will cost 0 to play.\n\u203B\n The cost of Bolting Blade is still four even if it’s cost is reduced and is played for 0 resources. This is important for cards that care about the attack action’s cost.",
    cardImage: require("./images/BoltingBlade.webp"),
    set: "MON",
  },
  {
    name: "Courageous Steelhand",
    ruling:
      "\nYou can play this card even if you have not charged this turn. It would not have any target or effect even if you charge later in the turn.\n\u203B\n Even if you have charged multiple times, the attack only gains +1/2/3{p}. Additional times charged have no effect on this card.",
    cardImage: require("./images/CourageousSteelhand.webp"),
    set: "MON",
  },
  {
    name: "Dusk Path Pilgrimage",
    ruling:
      "\nIf there are multiple effects that let your weapon attack an additional time you would be able to attack an additional time for each trigger.\n\u203B\n You must still pay resources and have the required action point to attack again. This simply bypasses the “Once per Turn” part of the attack for one attack.\n\u203B\n This only affects the next weapon attack. The +{p} does not affect or stay on the weapon.",
    cardImage: require("./images/DuskPathPilgrimage.webp"),
    set: "MON",
  },
  {
    name: "Engulfing Light",
    ruling:
      "\nEngulfing Light does not need to be the card to have charged for it to gain its effect. If you have charged this turn due to another card, Engulfing Light still gains its effect.\n\u203B\n If the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If Engulfing Light hits while charged, it must go in your hero’s soul. It is not optional.",
    cardImage: require("./images/EngulfingLight.webp"),
    set: "MON",
  },
  {
    name: "Minerva Themis",
    ruling:
      "\nMentors do not have a pitch value or cost and cannot be pitched or played.\n\u203B\n Mentors have their effect active when they are face up in your arsenal.\n\u203B\n You cannot arsenal a card if there is not an empty arsenal zone.\n\u203B\n You do not have to find a specialization card from your deck, you may elect to not find a card. This is because it is looking for a specific type of card and it is a hidden zone. You still must shuffle your deck.\n\u203B\n You can see if a weapon is 2H or 1H at the bottom middle of a card.\n\u203B\n The weapon hit does not need to be 1H for Minerva to get a counter.",
    cardImage: require("./images/MinervaThemis.webp"),
    set: "MON",
  },
  {
    name: "Lumina Ascension",
    ruling:
      "\nYou may only play Lumina Ascension in your deck if your hero is Ser Boltyn, Breaker of Dawn or Boltyn (Young hero).\n\u203B\n All weapons you control gain +1{p}, this affects the weapon not just the next weapon attack.\n\u203B\n You must put the revealed card into your hero’s soul and gain 1{h} if it is a Light card. It is not optional. You must put the card on the bottom of your deck if it is not a Light card.",
    cardImage: require("./images/LuminaAscension.webp"),
    set: "MON",
  },
  {
    name: "Plow Through",
    ruling:
      "\nThe first part of the card only affects your next weapon attack and the “if this weapon is defended by an attack action it gains +1{p} until end of turn” does not affect or stay on the weapon after you have attacked with it.\n\u203B\n The second part of the effect (If this weapon is defended by an attack action card) stays until end of turn as it gives the weapon +1{p} so if the weapon was to attack again it would still have it’s +1{p}. Note: That if it is defended again by another attack action card it would not gain an additional +1{p} as that effect was only to the weapon attack.",
    cardImage: require("./images/PlowThrough.webp"),
    set: "MON",
  },
  {
    name: "Second Swing",
    ruling:
      "\nYou may still play this card even if you have not attacked with a weapon this turn. Your next attack will not gain the power bonus. (Even if you later attack with a weapon)\n\u203B\n Your next attack does not have to be a weapon attack. Second Swing is not specific to the type of attack.",
    cardImage: require("./images/SecondSwing.webp"),
    set: "MON",
  },
  {
    name: "Spill Blood",
    ruling:
      "\nA weapon’s subtype is located at the bottom center of the card.\n\u203B\n This only affects axes. It affects both 1H and 2H axes.\n\u203B\n The effect stays on the weapon until end of turn. If you attack with the same axe multiple times in the turn, it would still maintain +2{p} and dominate.",
    cardImage: require("./images/SpillBlood.webp"),
    set: "MON",
  },
  {
    name: "Take Flight",
    ruling:
      "\nTake Flight does not need to be the card to have charged for it to gain its effect. If you have charged this turn due to another card, Take Flight will have go again.",
    cardImage: require("./images/TakeFlight.webp"),
    set: "MON",
  },
  {
    name: "V of the Vanguard",
    ruling:
      "\nYou may only play V of the Vanguard in your deck if your hero is Ser Boltyn, Breaker of Dawn or Boltyn (Young hero).\n\u203B\n You can charge any type of cards in your hand. Attacks will only get +1{p} for each Light card charged this way.\n\u203B\n Playing or using non-attack actions closes the combat chain. (They require an empty combat chain to be played)",
    cardImage: require("./images/VOfTheVanguard.webp"),
    set: "MON",
  },
  {
    name: "Korshem, Crossroads of the Elements",
    ruling:
      '\nWhen playing official Flesh and Blood events, refer to the official card text.\n\u203B\n You may only have 1 Korshem, Crossroads of the Elements in your deck as it is Legendary. This applies to all formats including booster draft and sealed deck.\n\u203B\n You cannot pitch Korshem, Crossroads of the Elements, as it does not have a pitch value.\n\u203B\n Korshem, Crossroads of the Elements is an action card. It costs an action point to play it.\n\u203B\n Korshem, Crossroads of the Elements is a Landmark. There can only be one Landmark in the arena at any given time. When a Landmark enters the arena while another is in the arena, the previous Landmark is destroyed and put into the graveyard.\n\u203B\n A Landmark stays in the arena after it is played. It remains in the arena until it is destroyed.\n\u203B\n If a card is revealed as an additional cost to play an attack action card, for example fusion, and the mode selected from Korshem is "their next attack this turn gains +1{p}", the current attack would not gain +1{p}.\n\u203B\n If more than one card is revealed from an additional cost, such as from dual fusion, or from the resolution of an effect, Korshem triggers only once, and only one mode can be chosen.\n\u203B\n When 1 or more cards are revealed as an additional cost, Korshem will trigger. When 1 or more cards are revealed as part of the resolution of an effect (from a card, activated ability, or trigger), Korshem will trigger. If a card or activated ability both revealed a card as an additional cost, and again upon resolution, Korshem would trigger twice, once when the cost is paid, and again when the effect resolves.\n\u203B\n Gaining {r} from pitching a card does not prevent Korshem from being destroyed at the end of the turn, only gaining {r}, {h}, {p}, or {d} from card effects (such as resolution, triggered, activated, and static abilities) are relevant.\n\u203B\n If you have a continuous effect that increases {p} or {d} and then play/defend with a card that the effect applies to, this does not prevent Korshem from being destroyed at the end of the turn. This is because the card comes under your control with the effect applied, and therefore the {p} or {d} has not increased while it was under your control. If the continuous effect becomes active AFTER the card comes under your control, then the {p} or {d} may increase from the effect which would prevent Korshem from being destroyed at the end of the turn.',
    cardImage: require("./images/Korshem.webp"),
    set: "ELE",
  },
  {
    name: "Briar",
    ruling:
      "\nThe first ability includes hitting with the attack action as well as dealing damage or arcane damage.\n\u203B\n If there are multiple instances of damage on an attack action it would create multiple Embodiments of Earth. (I.e “Deal 1 arcane damage. Deal 1 arcane damage.)\n\u203B\n One instance of two damage would still only create one Embodiment of Earth. (I,e Deal 2 arcane damage.)\n\u203B\n Playing a ‘non-attack’ action card as though it was an instant still counts as playing a ‘non-attack’ action card.\n\u203B\n You still create an Embodiment of Lightning token when you play your second ‘non-attack’ action card each turn even if you already control one.\nAn Embodiment of Earth token is an Elemental aura with “‘Non-attack' action cards you control have +1{d} while defending. At the beginning of your action phase, destroy Embodiment of Earth.”\n\u203B\n An Embodiment of Lightning token is an Elemental aura with “When you play an attack action card, destroy Embodiment of Lightning and the attack gains go again.”",
    cardImage: require("./images/Briar.webp"),
    set: "ELE",
  },
  {
    name: "Duskblade",
    ruling:
      "\nA +1{p} counter is a permanent effect that increases the power of Duskblade (until the counter is removed).\n\u203B\n You do not have to attack with Duskblade to prevent the +1{p} counters from being removed. You just need to have played an attack action and a ‘non-attack’ action card.",
    cardImage: require("./images/Duskblade.webp"),
    set: "ELE",
  },
  {
    name: "Lexi",
    ruling:
      "\nYou may turn a face down card face up even if it’s not a Lightning or Ice card.\n\u203B\n If you turn a card that’s Lightning and Ice you would get both effects.\nA Frostbite token is an Elemental Aura with “Cards and activated abilities you control cost an additional {r}.”",
    cardImage: require("./images/Lexi.webp"),
    set: "ELE",
  },
  {
    name: "Oldhim",
    ruling:
      "\nYou cannot pitch a card if there is not a cost to be played. You cannot pitch a card for a cost if there are already sufficient resources available to you.\n\u203B\n You must pitch the card as part of the cost to pay for the ability to gain the effect. Having an Ice or Earth card in your pitch zone that you pitched for a different cost does not grant the effect.\n\u203B\n You can pitch multiple cards to this effect. If an Earth card and an Ice card is pitched this way you would get both effects. If multiple Earth cards are pitched you would still only prevent the next 2 damage.\n\u203B\n If a card pitched is both Ice and Earth you would gain both effects.\n\u203B\n You may only activate Defense Reaction during the reaction step.\n\u203B\n The prevention lasts until the end of the turn, it does not need to prevent damage during the current chain link. You may activate the ability during the reaction step even if there is no damage that would be dealt to you.\n\u203B\n This prevents all types of damage including damage from attacks, arcane damage and damage. This does not prevent loss of life.\n\u203B\n The attacking hero picks what card from their hand goes on top of their deck.\n\u203B\n Both players can respond to the ability with reactions and instants. For example, in response to the Ice part happening, the attacking player can play the last attack reaction out of their hand.",
    cardImage: require("./images/Oldhim.webp"),
    set: "ELE",
  },
  {
    name: "Rosetta Thorn",
    ruling:
      "\nThe arcane damage is a single source of damage. For example, since Rosetta Thorn does 2 arcane damage you would require arcane barrier 2 (or two arcane barrier 1) to fully prevent it.\n\u203B\n You may still attack with Rosetta Thorn even if you have not played an attack action and a ‘non-attack’ action card this turn.",
    cardImage: require("./images/RosettaThorn.webp"),
    set: "ELE",
  },
  {
    name: "Shiver",
    ruling:
      "\nYYou may activate this during your opponent’s turn.\n\u203B\n You may activate this and not put a card from your hand into your arsenal.",
    cardImage: require("./images/Shiver.webp"),
    set: "ELE",
  },
  {
    name: "Titan’s Fist",
    ruling:
      "\nTitan’s Fist checks your pitch zone constantly, not just when it attacks. If the criteria is met after the attack is made, it will get the +1{p} bonus.\n\u203B\n The cost of a card is located on the top right corner of a card.\n\u203B\n You cannot pitch a card if there is not a cost to be played. You cannot pitch a card for a cost if there are already sufficient resources available to you.\n\u203B\n You may start the game with up to two Titan’s Fist in the arena as they are 1H weapons.",
    cardImage: require("./images/TitansFist.webp"),
    set: "ELE",
  },
  {
    name: "Voltaire, Strike Twice",
    ruling:
      "\nYou may activate this during your opponent’s turn.\n\u203B\n You may activate this and not put a card from your hand into your arsenal.\n\u203B\n Twice per Turn Instant means you can use this ability up to twice per turn.",
    cardImage: require("./images/Voltaire.webp"),
    set: "ELE",
  },
  {
    name: "Winter’s Wail",
    ruling:
      "\nYou cannot pitch a card if there is not a cost to be played. You cannot pitch a card for a cost if there are already sufficient resources available to you.\n\u203B\n You must pitch an Ice card as part of the cost to pay for the attack to gain the bonus. Having an Ice card in your pitch zone that you pitched for a different cost does not grant Winter’s Wail the bonus.\n\u203B\n You do not need to pay the entire cost with Ice cards. You can use leftover resources in addition to pitching an Ice card to pay the rest of the cost.\nYou may start the game with up to two Winter’s Wail in the arena as they are 1H weapons.\n\u203B\n A Frostbite token is an Elemental Aura with “Cards and activated abilities you control cost an additional {r}. At the beginning of your end phase or when you play a card or activate an ability, destroy Frostbite.”",
    cardImage: require("./images/WintersWail.webp"),
    set: "ELE",
  },
  {
    name: "Frostbite",
    ruling:
      "\nTriggered abilities and static abilities do not get affected by this.\n\u203B\n When determining resource cost you declare if an alternate cost is being paid, then apply effects that increase resource point costs (such as Frostbite) then apply effects that reduce resource point costs before paying for the cost.\n\u203B\n When you play a card or activate an ability, the trigger of frostbite being destroyed will be put as a layer on the chain. If the player with the Frostbite wants to respond by playing or activating another ability they would still have that Frostbite under their control so it would cost an additional {r}. (It is recommended to let the Frostbite being destroyed trigger resolve first before doing anything else).",
    cardImage: require("./images/Frostbite.webp"),
    set: "ELE",
  },
  {
    name: "Embodiment of Earth",
    ruling:
      "\nMultiple Embodiments of Earth stack. For example, if you control two Embodiment of Earth and you block with a base 2{d} non-attack action, it would have 4{d}.\n\u203B\n This affects all non-attack action cards you defend with, not just the first card you defend with.",
    cardImage: require("./images/EmbodimentOfEarth.webp"),
    set: "ELE",
  },
  {
    name: "Embodiment of Lightning",
    ruling:
      "\nMultiple Embodiment of Lightning will still be destroyed when you play an attack action card. You will only gain 1 action point upon resolution as multiple instances of go again do not stack.\n\u203B\n Weapon attacks do not trigger Embodiment of Lightning. If you attack with a weapon with an Embodiment of Lightning in play, it would not get destroyed or grant your attack go again.",
    cardImage: require("./images/EmbodimentOfLightning.webp"),
    set: "ELE",
  },
  {
    name: "Coat of Frost",
    ruling:
      "\nYou may target yourself with this ability.\n\u203B\n Both players can respond to the ability before the Frostbite token is created.",
    cardImage: require("./images/CoatOfFrost.webp"),
    set: "ELE",
  },
  {
    name: "Cracker Jax",
    ruling:
      "\nThe attack action card does not gain go again. Cracker Jax’s activated ability requires an action point to use and provides an action point from go again upon resolution.\n\u203B\n This does not affect weapon attacks.",
    cardImage: require("./images/CrackerJax.webp"),
    set: "ELE",
  },
  {
    name: "Crown of Seeds",
    ruling:
      "\nYou cannot activate Crown of Seeds if you do not have a face down card in your arsenal.\n\u203B\n The card in your arsenal must be face down for you to activate Crown of Seeds.\n\u203B\n This prevents all types of damage including damage from attacks, arcane damage and damage. This does not prevent loss of life.\n\u203B\n If you do not have any cards in your deck when you activate this, you would put your card in your arsenal to the bottom of your deck then draw the same card.",
    cardImage: require("./images/CrownOfSeeds.webp"),
    set: "ELE",
  },
  {
    name: "Deep Blue",
    ruling:
      "\nYou do not reveal the card you put on the bottom of your deck.\n\u203B\n Putting a card on the bottom of your deck from your hand is part of the cost.\n\u203B\n You cannot activate Deep Blue if there are no cards in your hand.",
    cardImage: require("./images/DeepBlue.webp"),
    set: "ELE",
  },
  {
    name: "Heart of Ice",
    ruling:
      "\nThis does not affect triggered or passive abilities.\n\u203B\n Defending with a card does not require an additional {r} as it is not played or activated.\n\u203B\n Defense reactions are played and therefore require an additional {r} when Heart of Ice is active.\n\u203B\n This affects all cards and activated abilities for opponents for the turn, not just the first one.",
    cardImage: require("./images/HeartOfIce.webp"),
    set: "ELE",
  },
  {
    name: "Honing Hood",
    ruling:
      "\nYou may use Honing Hood even if there are no cards in your arsenal.\n\u203B\n You must put a card from your hand face down into an empty arsenal zone. (Assuming you have at least one card in your hand).",
    cardImage: require("./images/HoningHood.webp"),
    set: "ELE",
  },
  {
    name: "Mark of Lightning",
    ruling:
      "\nThe effect is triggered during the defending window after the defending player has decided to defend with cards in hand, or during the reaction window when the defending player plays a defense reaction from hand.\n\u203B\n The damage is not arcane and cannot be defended with cards in hand or by arcane barrier. It can be stopped by prevention effects that prevent any kind of damage.",
    cardImage: require("./images/MarkOfLightning.webp"),
    set: "ELE",
  },
  {
    name: "New Horizon",
    ruling:
      "\nThe additional arsenal zone can be represented next to your current arsenal zone.\n\u203B\n An additional arsenal zone is considered empty until it has a card in it.\n\u203B\n Cards that destroy all cards in your arsenal would destroy both cards if you have two cards in the arsenal due to New Horizon.\n\u203B\n You cannot turn a card in your arsenal face-up unless a card instructs you to do so.",
    cardImage: require("./images/NewHorizon.webp"),
    set: "ELE",
  },
  {
    name: "Plume of Evergrowth",
    ruling:
      "\nAn Elemental card with Earth Fusion is not an Earth card.\n\u203B\n You must have a legal target to activate and resolve this effect.",
    cardImage: require("./images/PlumeOfEvergrowth.webp"),
    set: "ELE",
  },
  {
    name: "Ragamuffin’s Hat",
    ruling:
      "\nThere is no priority during the resolution of an ability. For example, you cannot play or activate an ability after drawing the card but before putting a card on the top or bottom.\n\u203B\n The ability still resolves even if you no longer have 1 card in hand at the time it resolves. (As long as you had 1 card in hand when you activated it.)\n\u203B\n Your opponent knows if you put the card on the top or bottom of your deck. (But not what the card is.)",
    cardImage: require("./images/RagamuffinsHat.webp"),
    set: "ELE",
  },
  {
    name: "Rampart of the Ram’s Head",
    ruling:
      "\nAn Off-hand goes in the second weapon zone. You cannot have a 2h and an Off-hand at the same time.\n\u203B\n You can defend with an equipment as long as it's in the equipment or weapon zone.\n\u203B\n Rampart of the Ram’s Head does not have Battleworn. It will not gain a -1{d} counter from defending.\n\u203B\n You pay the {r} after declaring all cards you are defending within the defending window.\n\u203B\n Rampart of the Ram’s Head gains +1{d} and lasts until end of turn. If it were to defend again in the same turn (For example if the combat chain closes) it would still have it’s {d}. (And the ability will trigger again and you may pay another {r}.)",
    cardImage: require("./images/Rampart.webp"),
    set: "ELE",
  },
  {
    name: "Rotten Old Buckler",
    ruling:
      "\nAn Off-hand goes in the second weapon zone. You cannot have a 2h and an Off-hand at the same time.\n\u203B\n Equipment goes to the graveyard when destroyed.",
    cardImage: require("./images/RottenOldBuckler.webp"),
    set: "ELE",
  },
  {
    name: "Runaways",
    ruling:
      "\nTYou cannot use this during a resolution of a card. For example if a card says “Deal 2 arcane damage. Deal 2 arcane damage.” you cannot take two then use this as a card must fully resolve first.\n\u203B\n This prevents all types of damage including damage from attacks, arcane damage and damage. This does not prevent loss of life.\n\u203B\n Loss of life is not the same as being dealt damage.",
    cardImage: require("./images/Runaways.webp"),
    set: "ELE",
  },
  {
    name: "Shock Charmers",
    ruling:
      "\nYou may activate Shock Charmers as many times as you have the resources for.\n\u203B\n Each instance of dealing 1 damage is separate. However it is still from a single source.\n\u203B\n This only cares about the next attack action you control that hits, if an attack action card is played after activating this but is fully defended, the next attack action card that hits this turn would still have this effect.\n\u203B\n If you use spellvoid 2 to prevent one arcane damage, there will be no left over prevention.\n\u203B\n Spellvoid 2 can only prevent 2 arcane damage from a single source. It cannot prevent 2 sources of 1 arcane damage.",
    cardImage: require("./images/ShockCharmers.webp"),
    set: "ELE",
  },
  {
    name: "Spellbound Creepers",
    ruling:
      "\nIf the non-attack action card played has go again, you will still gain an action point after it resolves even if it was played as though it was an instant. This would net gain you an action point. You can not gain action points on your opponents turn.\n\u203B\n Players do not have priority during the end phase.\n\u203B\n You do not need to do all the arcane damage in one go. Spellbind Creepers only cares about the total arcane damage dealt throughout the turn.",
    cardImage: require("./images/SpellboundCreepers.webp"),
    set: "ELE",
  },
  {
    name: "Sutcliffe's Suede Hides",
    ruling:
      "\nIf this is used on an attack with go again, you will only gain 1 action point upon chain link resolution as multiple instances of go again do not stack.",
    cardImage: require("./images/SutcliffesSuedeHides.webp"),
    set: "ELE",
  },
  {
    name: "Entwine Earth",
    ruling:
      "\nYou may play this card in any Elemental hero even if the hero does not have the essence of Earth as this is an Elemental card not an Earth card.",
    cardImage: require("./images/EntwineEarth.webp"),
    set: "ELE",
  },
  {
    name: "Entwine Ice",
    ruling:
      "\nYou may play this card in any Elemental hero even if the hero does not have the essence of Ice as this is an Elemental card not an Ice card.",
    cardImage: require("./images/EntwineIce.webp"),
    set: "ELE",
  },
  {
    name: "Entwine Lightning",
    ruling:
      "\nYou may play this card in any Elemental hero even if it does not have essence of Lightning as this is an Elemental card not a Lightning card.",
    cardImage: require("./images/EntwineLightning.webp"),
    set: "ELE",
  },
  {
    name: "Exposed to the Elements",
    ruling:
      "\nYou cannot defend with Exposed to the Elements as it does not have a defense value.\n\u203B\n You may play this card in any Elemental hero even if it does not have the essence of Earth and Ice.\n\u203B\n You may fuse this with just one card with a single Element, if you do you will only gain the fused effect of that one element.\n\u203B\n You may fuse this with just one Earth and Ice card, if you do you will gain both fused effects.\n\u203B\n You choose what card to destroy when this card resolves. The effects on the card resolve in order so you can put a -1[d} counter on a 1{d} equipment followed by the second ability.\n\u203B\n Your opponent decides if they want to pay {r}{r} before you select the equipment.",
    cardImage: require("./images/ExposedToTheElements.webp"),
    set: "ELE",
  },
  {
    name: "Fulminate",
    ruling:
      "\nYou may play this card in any Elemental hero even if it does not have the essence of Earth and Lightning.\n\u203B\n You may fuse this with just one card with a single Element, if you do you will only gain the fused effect of that one element.\n\u203B\n You may fuse this with just one Earth and Lightning card, if you do you will gain both fused effects.",
    cardImage: require("./images/Fulminate.webp"),
    set: "ELE",
  },
  {
    name: "Flashfreeze",
    ruling:
      "\nYou may play this card in any Elemental hero even if it does not have the essence of Ice and Lightning.\n\u203B\n You may fuse this with just one card with a single Element, if you do you will only gain the fused effect of that one element.\n\u203B\n You may fuse this with just one Ice and Lightning card, if you do you will gain both fused effects.\n\u203B\n The defending hero chooses whether they pay {r}{r} when the attack becomes a layer on the chain.",
    cardImage: require("./images/Flashfreeze.webp"),
    set: "ELE",
  },
  {
    name: "Invigorate",
    ruling:
      "\nIf the next attack is not fused, it would not grant the bonus. If you then later play an attack with fuse it would gain the bonus as it is the next attack you fuse this turn.",
    cardImage: require("./images/Invigorate.webp"),
    set: "ELE",
  },
  {
    name: "Rejuvenate",
    ruling:
      "\nYou may still play Rejuvenate as an action regardless if you have fused or not.",
    cardImage: require("./images/Rejuvenate.webp"),
    set: "ELE",
  },
  {
    name: "Awakening",
    ruling:
      "\nThe green symbol on Awakening refers to life.\n\u203B\n Difference refers to the difference in life. For example, if you are on higher life when you play Awakening, you will not gain any Seismic Surge tokens.\n\u203B\n A Seismic Surge token is a Guardian Aura with “At the beginning of your action phase, destroy Seismic Surge then the next Guardian attack action card you play this turn costs {r} less to play.”",
    cardImage: require("./images/Awakening.webp"),
    set: "ELE",
  },
  {
    name: "Biting Gale",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Biting Gale’s cost to play it.\n\u203B\n The attacking hero decides if they want to pay {r}{r} when biting Gale resolves (and becomes a defending card on the chain link)\n\u203B\n If you have no cards in hand, you can still elect to discard a card instead of paying {r}{r}.",
    cardImage: require("./images/BitingGale.webp"),
    set: "ELE",
  },
  {
    name: "Emerging Avalanche",
    ruling:
      "\nEmerging Avalanche must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n A Frostbite token is an Elemental Aura with “Cards and activated abilities you control cost an additional {r}.”",
    cardImage: require("./images/EmergingAvalanche.webp"),
    set: "ELE",
  },
  {
    name: "Embolden",
    ruling:
      "\nEmbolden must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n Embolden only affects Guardian attack actions. It does not affect weapon attacks or non-Guardian attack actions.\n\u203B\n A non-token aura is an aura that is not a token. (Tokens have T before the set-code at the middle bottom of the card.)",
    cardImage: require("./images/Embolden.webp"),
    set: "ELE",
  },
  {
    name: "Endless Winter",
    ruling:
      "\nYou may only play Endless Winter in your deck if your hero is Oldhim, Grandfather of Eternity or Oldhim (Young hero).\n\u203B\n If the defending hero defends with 2 cards (while Endless Winter is fused) they would create two Frostbites.\nDefense reactions become a defending card when they resolve. You would get a Frostbite token when the defense reaction becomes a defending card.\n\u203B\n Endless Winter’s second ability gives a Frostbite token after an ability is activated. This would not affect the cost of the ability.\n\u203B\n Playing a card is not the same as activating an ability. Playing a card while under Endless Winter’s effect would not create a Frostbite token.\nA Frostbite token is an Elemental Aura with “Cards and activated abilities you control cost an additional {r}.”",
    cardImage: require("./images/EndlessWinter.webp"),
    set: "ELE",
  },
  {
    name: "Entangle",
    ruling:
      "\nThis affects all attacks including attack actions and weapon attacks.",
    cardImage: require("./images/Entangle.webp"),
    set: "ELE",
  },
  {
    name: "Glacial Footsteps",
    ruling:
      "\nPlaying a defense reaction from your hand counts towards the 1 card from your hand restriction. You cannot defend with a card in your hand then play a defense reaction from your hand. (Assuming Glacial Footsteps has dominate.)",
    cardImage: require("./images/GlacialFootsteps.webp"),
    set: "ELE",
  },
  {
    name: "Mulch",
    ruling:
      "\nIf the defending hero has multiple cards in their arsenal the attacking player chooses which one is put on the bottom of their deck.",
    cardImage: require("./images/Mulch.webp"),
    set: "ELE",
  },
  {
    name: "Oaken Old",
    ruling:
      "\nYou have to reveal both an Earth and an Ice card to fuse Oaken Old.\n\u203B\n You may pay the additional cost to fuse this by revealing a single Earth and Ice card.\n\u203B\n The hero putting the two cards in their hand on the bottom of the deck chooses the order. The order is not known to other players.",
    cardImage: require("./images/OakenOld.webp"),
    set: "ELE",
  },
  {
    name: "Snow Under",
    ruling:
      "\nA Frostbite token is an Elemental Aura with “Cards and activated abilities you control cost an additional {r}.”",
    cardImage: require("./images/SnowUnder.webp"),
    set: "ELE",
  },
  {
    name: "Strength of Sequoia",
    ruling:
      "\nIf the defending hero has multiple cards in their arsenal the attacking player chooses which one is put on the bottom of their deck.",
    cardImage: require("./images/StrengthOfSequoia.webp"),
    set: "ELE",
  },
  {
    name: "Tear Asunder",
    ruling:
      "\nThis affects all Guardian attacks including Guardian weapon attacks and Guardian attack actions.\n\u203B\n The defending hero picks which 2 cards they discard.\n\u203B\n If the defending hero only has 1 card in hand, they discard their entire hand.",
    cardImage: require("./images/TearAsunder.webp"),
    set: "ELE",
  },
  {
    name: "Thump",
    ruling:
      "\nThe base power is located at the bottom left corner of a card.\n\u203B\n The defending player decides what card to discard.\n\u203B\n Thump can gain dominate during the defending window or reaction window. If cards have already defended Thump then Thump gains dominate, the defending cards would be unaffected.\n\u203B\n If Thump is defended by at least one card from hand, Thump gains dominate - the defending player would not be able to defend with any more cards from hand.",
    cardImage: require("./images/Thump.webp"),
    set: "ELE",
  },
  {
    name: "Turn Timber",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Turn Timber’s cost to play it.",
    cardImage: require("./images/TurnTimber.webp"),
    set: "ELE",
  },
  {
    name: "Bolt’n Shot",
    ruling:
      "\nThe base power is located at the bottom left corner of a card.\n\u203B\n You cannot reload if you have a card in your arsenal even if there is an additional empty arsenal spot.",
    cardImage: require("./images/BoltNShot.webp"),
    set: "ELE",
  },
  {
    name: "Blizzard Bolt",
    ruling:
      "\nThis affects any and all instances of damage this card deals including “deal 1 damage”\n\u203B\n Even if the attack deals 5 damage, it would still only create 1 Frostbite.\nIf an attack has multiple instances of dealing damage it would create multiple Frostbites. (E.g a card has “If this hits deal 1 damage” “If this hits deal 1 damage”.)\n\u203B\n This affects all attacks this turn and does not require this attack to be on the combat chain.\n\u203B\n A Frostbite token is an Elemental Aura with “Cards and activated abilities you control cost an additional {r}.”",
    cardImage: require("./images/BlizzardBolt.webp"),
    set: "ELE",
  },
  {
    name: "Buzz Bolt",
    ruling:
      "\nThis affects all attacks this turn and does not require this attack to be on the same combat chain.\n\u203B\n The attack that hits deals the 1 damage. The one damage does not cause “on-hit” to trigger but does cause “When this attack deals damage..”\n\u203B\n The damage dealt is not arcane. It cannot be defended by cards or arcane barrier. It can be prevented by cards that prevent any damage.",
    cardImage: require("./images/BuzzBolt.webp"),
    set: "ELE",
  },
  {
    name: "Chilling Icevein",
    ruling:
      "\nThis affects any and all instances of damage this card deals including “deal 1 damage”.\n\u203B\n Even if the attack deals 5 damage, it would still only trigger once.\n\u203B\n If an attack has multiple instances of dealing damage it would trigger multiple times (E.g a card has “If this hits deal 1 damage”).\n\u203B\n This affects all attacks this turn and does not require this attack to be on the combat chain.\n\u203B\n The hero dealt damage by Chilling Icevein decides if they discard a card or pay {r} when the ability resolves.\n\u203B\n If you have no cards in your hand you may still elect to discard a card instead of paying {r}.",
    cardImage: require("./images/ChillingIcevein.webp"),
    set: "ELE",
  },
  {
    name: "Cold Wave",
    ruling:
      "\nDefense Reactions are played and therefore would require an additional {r} to play. (Assuming Cold Wave was fused)\n\u203B\n This affects all attacks this turn and does not require this attack to be on the combat chain.",
    cardImage: require("./images/ColdWave.webp"),
    set: "ELE",
  },
  {
    name: "Flake Out",
    ruling:
      "\nPlaying a defense reaction from your hand counts towards the 1 card from your hand restriction. You cannot defend with a card in your hand then play a defense reaction from your hand. (Assuming Flake Out has dominate.)",
    cardImage: require("./images/FlakeOut.webp"),
    set: "ELE",
  },
  {
    name: "Frazzle",
    ruling:
      "\nMultiple instances of “deal 1 damage” will all separately be affected by this effect.\n\u203B\n If the entire damage is defended or prevented the extra damage won’t apply. For example if Frazzle is 5 power and is defended by 5 defense, the defending player would not take any damage as Frazzle did not deal any damage.\n\u203B\n This affects all attacks this turn and does not require this attack to be on the combat chain.",
    cardImage: require("./images/Frazzle.webp"),
    set: "ELE",
  },
  {
    name: "Frost Lock",
    ruling:
      "\nDefense Reactions are played and therefore would require an additional {r} to play.\n\u203B\n You cannot pitch or play cards with cost X or XX, as X is determined to be zero until it becomes a layer on the chain.\n\u203B\n You can pitch cards with no cost (such as Heart of Fyendal) as it has no cost, not zero cost.\n\u203B\n Even if the card has an additional cost i.e from frostbites, you cannot play the card if it has cost 0.\n\u203B\n If a card has a cost of 1 and it reduced to 0 for any reason, you can still play the card as it’s base cost is not 0.\n\u203B\n Defense Reactions are played. If you are under Frost Lock’s second effect you would not be able to play defense reactions with cost 0.\n\u203B\n This affects all attacks this turn and does not require this attack to be on the combat chain.\n\u203B\n The opposing heroes can respond to Frost Lock with playing cards and activated abilities. Cards and activated abilities only cost an additional {r} once Frost Lock resolves and becomes attacking on the combat chain.",
    cardImage: require("./images/FrostLock.webp"),
    set: "ELE",
  },
  {
    name: "Ice Storm",
    ruling:
      "\nYou have to reveal both, an Ice and a Lightning card to fuse Ice Storm.\n\u203B\n You may pay the additional cost to fuse this by revealing a single Ice and Lightning card.\n\u203B\n This affects any and all instances of damage this card deals including “deal 1 damage”.\n\u203B\n If the attack deals 5 damage, they would create 5 Frostbites.\n\u203B\n A Frostbite token is an Elemental Aura with “Cards and activated abilities you control cost an additional {r}.”",
    cardImage: require("./images/IceStorm.webp"),
    set: "ELE",
  },
  {
    name: "Light it Up",
    ruling:
      "\nYou may only play Light it Up in your deck if your hero is Lexi, Livewire or Lexi (Young hero).\n\u203B\n Light it Up’s first ability is a single instance of damage, even if they have multiple equipment. (For example if the defending hero controls 4 equipment, Light it Up would deal 4 damage not 4 instances of 4)\n\u203B\n Equipment on the combat chain are still considered equipment they control. (Temper and Blade Break happen when the combat chain closes).\n\u203B\n Equipment only loses activated abilities, this does not include passive or triggered abilities. (This does not make equipment lose Battleworn, Blade Break or Temper.)\n\u203B\n Light it Up only checks if damage equal to or greater than the number of equipment is dealt, it does not care about damage previously dealt by Light it Up nor does it “add” the damage dealt by different instances.",
    cardImage: require("./images/LightItUp.webp"),
    set: "ELE",
  },
  {
    name: "OverFlex",
    ruling:
      "\nYou cannot reload if you have a card in your arsenal even if there is an additional empty arsenal slot.",
    cardImage: require("./images/OverFlex.webp"),
    set: "ELE",
  },
  {
    name: "Seek and Destroy",
    ruling:
      "\nThis effect happens before you elect to arsenal a card and draw back up to your intellect.\n\u203B\n Players do not have priority during the end phase and therefore players cannot respond to this ability.",
    cardImage: require("./images/SeekAndDestroy.webp"),
    set: "ELE",
  },
  {
    name: "Snap Shot",
    ruling:
      "\nYou still need to pay the resource cost of the bow when it is activated as an instant.\n\u203B\n If a bow has not been activated yet, then Snap Shot is fused, you would choose if you would be using the bow’s original action/instant use, or the additional time use granted by Snap Shot.\n\u203B\n If the bow’s activated ability is an action and has not been activated yet, then Snap Shot is fused, and you use the bow’s original action use, it would still be an action and not an instant.",
    cardImage: require("./images/SnapShot.webp"),
    set: "ELE",
  },
  {
    name: "Bramble Spark",
    ruling:
      "\nIf Bramble Spark is fused, the next attack action you play would gain both effects.\n\u203B\n Each instance of “Deal 1 arcane damage to target hero” is separate and therefore would trigger multiple instances of dealing damage e.g Briar’s ability to make Embodiments of Earth.",
    cardImage: require("./images/BrambleSpark.webp"),
    set: "ELE",
  },
  {
    name: "Blossoming Spellblade",
    ruling:
      "\nYou have to reveal both, an Earth and a Lightning card to fuse Blossoming Spellblade.\nYou may pay the additional cost to fuse this by revealing a single Earth and Lightning card.\n\u203B\n This affects any and all instances of damage this card deals including “deal 1 (arcane) damage”.\n\u203B\n Even if the attack deals 6 damage, it would still only trigger once.\n\u203B\n If an attack has multiple instances of dealing damage it would trigger multiple times (E.g a card has “If this hits deal 1 damage” “If this hits deal 1 damage”.\n\u203B\n You choose the card to banish when the ability resolves.\n\u203B\n You do not have to play the card straight away. You can play it anytime during your turn. (You do not have priority during the end of turn.)\n\u203B\n If the non-attack action card played has go again, you will still gain an action point after it resolves even if it was played as though it was an instant. This would net gain you an action point.",
    cardImage: require("./images/BlossomingSpellblade.webp"),
    set: "ELE",
  },
  {
    name: "Explosive Growth",
    ruling:
      "\nThis affects any and all instances of damage this card deals including “deal 1 (arcane) damage”.\n\u203B\n Even if the attack deals 6 damage, it would still only trigger once.\n\u203B\n If an attack has multiple instances of dealing damage it would trigger multiple times (E.g a card has “If this hits deal 1 damage” “If this hits deal 1 damage”.\n\u203B\n The attack does arcane damage, it resolves and becomes a layer on the chain so it would gain it’s +{p} before the attack does damage. (Assuming it is fused and the arcane damage deals damage.)\n\u203B\n The second ability affects the entire combat chain and includes weapon attacks.",
    cardImage: require("./images/ExplosiveGrowth.webp"),
    set: "ELE",
  },
  {
    name: "Flicker Wisp",
    ruling:
      "\nMultiple instances of arcane damage on the same source will be affected separately. For example if a card has “Deal 1 arcane damage. Deal 1 arcane damage” both would deal 2 each.\n\u203B\n If a card deals 2 arcane damage it would require arcane barrier 2 (or arcane barrier 1 x 2) to prevent as it is from a single source.\n\u203B\n This only affects action cards, this does not include other sources such as weapons that deal arcane damage or token auras that deal arcane damage.",
    cardImage: require("./images/FlickerWisp.webp"),
    set: "ELE",
  },
  {
    name: "Force Of Nature",
    ruling:
      "\nYou may only play Force of Nature in your deck if your hero is Briar, Warden of Thorns or Briar (young hero).\n\u203B\n The base power is located at the bottom left corner of the card.",
    cardImage: require("./images/ForceOfNature.webp"),
    set: "ELE",
  },
  {
    name: "Inspire Lightning",
    ruling:
      "\nYou may still play Inspire Lightning even if you do not fuse. It would not have any effect.\n\u203B\n Inspire Lighting is a single source of arcane damage. If a card deals 2 arcane damage it would require arcane barrier 2 (or two arcane barrier 1) to prevent as it is from a single source.",
    cardImage: require("./images/InspireLightning.webp"),
    set: "ELE",
  },
  {
    name: "Rites of Lightning",
    ruling:
      "\nRites of Lightning has go again as long as you’ve dealt arcane damage this turn, it does not matter if Rites of Lightning did the damage.\n\u203B\n Rites of Lightning does not require an opposing hero to be dealt arcane damage, if you have dealt arcane damage to yourself, it would gain go again.\n\u203B\n If RItes of Lightning is fused, and deals 1 arcane damage to a hero, it would gain go again from it’s second ability.",
    cardImage: require("./images/RitesOfLightning.webp"),
    set: "ELE",
  },
  {
    name: "Rites of Replenishment",
    ruling:
      "\nYou put the non-attack action card to the bottom of your deck first, then the attack action card. (Assuming both abilities are active.)",
    cardImage: require("./images/RitesOfReplenishment.webp"),
    set: "ELE",
  },
  {
    name: "Sigil of Suffering",
    ruling:
      "\nSigil of Suffering is a defense reaction and must be played during the reaction window as the defending player.\n\u203B\n Sigil of Suffering checks if you have done arcane damage this turn, it does not need to be arcane damage done by Sigil of Suffering nor does the damage need to be dealt to an opposing hero for it to gain +1{d}.",
    cardImage: require("./images/SigilOfSuffering.webp"),
    set: "ELE",
  },
  {
    name: "Sting of Sorcery",
    ruling:
      "\nThe arcane damage is dealt by the attack action card that has the triggered ability “When you attack with this, deal 1 arcane damage to target hero.”, it is not dealt by Sting of Sorcery.\n\u203B\n Arcane damage effect is triggered and dealt when the attack action card resolves and becomes attacking, not when it is played.",
    cardImage: require("./images/StingOfSorcery.webp"),
    set: "ELE",
  },
  {
    name: "Stir the Wildwood",
    ruling:
      "\nIf you have dealt arcane damage and fused Stir the of Wildwood it gains +4{p}.",
    cardImage: require("./images/StirTheWildwood.webp"),
    set: "ELE",
  },
  {
    name: "Vela Flash",
    ruling:
      "\nIf the non-attack action card played has go again, you will still gain an action point after it resolves even if it was played as though it was an instant. This would net gain you an action point.",
    cardImage: require("./images/VelaFlash.webp"),
    set: "ELE",
  },
  {
    name: "Amulet of Earth",
    ruling:
      "\nThis affects attacking cards and defending cards you control. It does not affect cards in your hand.\n\u203B\n You cannot defend with Amulet of Earth as it does not a defense value.",
    cardImage: require("./images/AmuletOfEarth.webp"),
    set: "ELE",
  },
  {
    name: "Break Ground",
    ruling:
      "\nYou cannot play Break Ground from your arsenal and put itself on the bottom of your deck.",
    cardImage: require("./images/BreakGround.webp"),
    set: "ELE",
  },
  {
    name: "Burgeoning",
    ruling:
      "\nYou may still play Burgeoning from your hand. It would not gain the +1{p}.",
    cardImage: require("./images/Burgeoning.webp"),
    set: "ELE",
  },
  {
    name: "Channel Mount Heroic",
    ruling:
      "\nThis affects both attacking and defending attack action cards you control. (Notably when they are on the combat chain.)\n\u203B\n If Channel Mount Heroic is removed before damage is dealt, while an attack action card is still on the chain, the attack would lose the +3{p} from Channel Mount Heroic.\n\u203B\n The words “you control” means cards you own (and have not lost control of), as well as tokens and effects created by cards you control, as well as cards, tokens and effects you have gained control of, and which are in any zone that makes up the arena and not “under” another card or token such as being in your hero’s soul.\n\u203B\n This does not affect attack action cards in your hand, deck, graveyard or banished zone as it is not considered “you control” as those zones are not located in the arena.\n\u203B\n Only Earth Element cards count towards Channel Earth. Elemental cards with Earth fusion do not.",
    cardImage: require("./images/ChannelMountHeroic.webp"),
    set: "ELE",
  },
  {
    name: "Evergreen",
    ruling:
      "\nEvergreen’s effect is not optional. If it is played from the arsenal it must be put on the bottom of your deck when the chain link resolves.",
    cardImage: require("./images/Evergreen.webp"),
    set: "ELE",
  },
  {
    name: "Sow Tomorrow",
    ruling:
      "\nYou must have a target to play this card. You cannot play this card if there is not a legal target in the graveyard.",
    cardImage: require("./images/SowTommorrow.webp"),
    set: "ELE",
  },
  {
    name: "Summerwood Shelter",
    ruling:
      "\nYou can only target an attack action card that is defending. Cards that defended previous chains on the combat chain are still considered to be defending cards.\n\u203B\n You can target a defending attack action card on a previous chain link. It would not reduce the damage dealt on a chain link that has already resolved.\n\u203B\n You can only play Summerwood Shelter if there is a legal target.\n\u203B\n You cannot defend with Summerwood Shelter as it does not have a defense value.",
    cardImage: require("./images/SummerwoodShelter.webp"),
    set: "ELE",
  },
  {
    name: "Tome of Harvests",
    ruling:
      "\nYou cannot play Tome of Harvest if you do not have a card in arsenal.\n\u203B\n You cannot put Tome of Harvest from your arsenal on the bottom of your deck as you play it from your arsenal.\n\u203B\n It is possible to draw the card you put on the bottom of your deck as an additional cost if there are less than 3 cards in your deck when you play Tome of Harvest.",
    cardImage: require("./images/TomeOfHarvests.webp"),
    set: "ELE",
  },
  {
    name: "Weave Earth",
    ruling:
      "\nIf the next attack is not Earth or Elemental it will not gain the bonus, if you then play a Earth or Elemental attack this turn it will then gain the bonus.",
    cardImage: require("./images/WeaveEarth.webp"),
    set: "ELE",
  },
  {
    name: "Amulet of Ice",
    ruling:
      "\nYou cannot defend with Amulet of Ice as it does not have a defense value.\n\u203B\n You may use this on your opponent’s turn as long as you have Ice fused.\n\u203B\n You may elect to discard a card even if you have no cards in your hand. You are not forced to pay the {r}{r}.",
    cardImage: require("./images/AmuletOfIce.webp"),
    set: "ELE",
  },
  {
    name: "Blizzard",
    ruling:
      "\nThe attacking player decides whether to pay {r}{r} when Blizzard resolves.\n\u203B\n You may target a weapon attack with this.\n\u203B\n You may target an attack without go again.",
    cardImage: require("./images/Blizzard.webp"),
    set: "ELE",
  },
  {
    name: "Channel Lake Frigid",
    ruling:
      "\nThis does not affect defending with cards. (Except defense reactions.)\n\u203B\n Defense reactions are played and therefore require an additional {r} when Channel Lake Frigid is in play.\n\u203B\n This does not include triggered or passive abilities.\n\u203B\n This includes weapon attacks as they are activated abilities.\n\u203B\n Only Ice Element cards count towards Channel Ice. Elemental cards with Ice fusion do not.",
    cardImage: require("./images/ChannelLakeFrigid.webp"),
    set: "ELE",
  },
  {
    name: "Chill to the Bone",
    ruling:
      "\nA weapon attack counts as long as it is an Elemental weapon attack.",
    cardImage: require("./images/ChillToTheBone.webp"),
    set: "ELE",
  },
  {
    name: "Frost Fang",
    ruling:
      "\nThey can still elect to discard a card even if they do not have any cards in hand.",
    cardImage: require("./images/FrostFang.webp"),
    set: "ELE",
  },
  {
    name: "Ice Quake",
    ruling:
      '\nA Frostbite token is an Elemental Aura with “Cards and activated abilities you control cost an additional {r}."\n\u203B\n The second ability applies to all attacks this turn, not just the next attack.\n',
    cardImage: require("./images/IceQuake.webp"),
    set: "ELE",
  },
  {
    name: "Icy Encounter",
    ruling:
      "\nA Frostbite token is an Elemental Aura with “Cards and activated abilities you control cost an additional {r}.”",
    cardImage: require("./images/IcyEncounter.webp"),
    set: "ELE",
  },
  {
    name: "Polar Blast",
    ruling:
      "\nThe hero decides whether to pay the resource cost at the time Polar Blast resolves not at the time of the attack.\n\u203B\n You may attack a different hero than the hero you targeted even if the card was granted dominate.",
    cardImage: require("./images/PolarBlast.webp"),
    set: "ELE",
  },
  {
    name: "Weave Ice",
    ruling:
      "\nIf the next attack is not Ice or Elemental it will not gain the bonus, if you then play a Ice or Elemental attack this turn it will then gain the bonus.",
    cardImage: require("./images/WeaveIce.webp"),
    set: "ELE",
  },
  {
    name: "Winter’s Bite",
    ruling:
      "\nIf the target hero has no cards in hand they can still elect to discard a card instead of paying {r}.",
    cardImage: require("./images/WintersBite.webp"),
    set: "ELE",
  },
  {
    name: "Amulet of Lightning",
    ruling:
      "\nYou cannot defend with Amulet of Lightning as it does not have a defense value.\n\u203B\n You can target a non-attack action card with Amulet of Lightning.\n\u203B\n You can target a card that has not been Lightning fused, as long as you have Lightning fused this turn.",
    cardImage: require("./images/AmuletOfLightning.webp"),
    set: "ELE",
  },
  {
    name: "Ball Lightning",
    ruling:
      "\nThis affects all instances of damage including if an Elemental or Lightning action card gained “deal 1 damage”.\n\u203B\n Playing a non-attack action closes the combat chain, therefore Ball Lightning’s replacement effect does not apply to non-attack action cards. This does apply non-attack actions that are played as though it was an instant when the combat chain is still open.\n\u203B\n Ball Lighting does have a defense value (0 is a value) and can defend. (This is different than if there was no defense value)",
    cardImage: require("./images/BallLightning.webp"),
    set: "ELE",
  },
  {
    name: "Blink",
    ruling: "\nYou can only spend action points during your action phase.",
    cardImage: require("./images/Blink.webp"),
    set: "ELE",
  },
  {
    name: "Channel Thunder Steppe",
    ruling:
      "\nMultiple instances of go again do not stack.\n\u203B\n You can give a non-attack action go again.\n\u203B\n Only Lightning Element cards count towards Channel Lightning. Elemental cards with Lightning fusion do not.",
    cardImage: require("./images/ChannelThunderSteppe.webp"),
    set: "ELE",
  },
  {
    name: "Electrify",
    ruling:
      "\nThe attack action is the card doing the damage.\n\u203B\n The damage is not arcane damage.",
    cardImage: require("./images/Electrify.webp"),
    set: "ELE",
  },
  {
    name: "Flash",
    ruling: "\nYou may give a non-attack action card go again.",
    cardImage: require("./images/Flash.webp"),
    set: "ELE",
  },
  {
    name: "Lightning Press",
    ruling:
      "\nYou can target a defending attack action card.\n\u203B\n You cannot defend with Lightning Press as it does not have a defense value.\n\u203B\n You do not have to control the target.\n\u203B\n You can target attack action cards on previous chain links.",
    cardImage: require("./images/LightningPress.webp"),
    set: "ELE",
  },
  {
    name: "Shock Striker",
    ruling:
      "\nShock Striker is the card doing the damage.\n\u203B\n The damage is not arcane damage.",
    cardImage: require("./images/ShockStriker.webp"),
    set: "ELE",
  },
  {
    name: "Weave Lightning",
    ruling:
      "\nIf the next attack is not Lightning or Elemental it will not gain the bonus, if you then play a Lightning or Elemental attack this turn it will then gain the bonus.",
    cardImage: require("./images/WeaveLightning.webp"),
    set: "ELE",
  },
  {
    name: "Pulse of Candlehold",
    ruling:
      "\nYou may only have Pulse of Candlehold in your deck if your hero has essence of Earth and essence of Lightning. You must have both.\n\u203B\n You may pick 0, 1 or 2 targets.\n\u203B\n You choose the order of the cards on top of your deck.\n\u203B\n Your opponent does not see the order they go on top. (The cards are open information just not the order)",
    cardImage: require("./images/PulseOfCandlehold.webp"),
    set: "ELE",
  },
  {
    name: "Pulse of Isenloft",
    ruling:
      "\nYou may only have Pulse of Isenloft in your deck if your hero has essence of Earth and essence of Ice. You must have both.\n\u203B\n Since defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Pulse of Isenloft’s cost to play it.\n\u203B\n Pulse of Isenloft is a Defense Reaction not an action card. It does not get +1[d} from it’s ability.",
    cardImage: require("./images/PulseOfIsenloft.webp"),
    set: "ELE",
  },
  {
    name: "Pulse of Volthaven",
    ruling:
      "\nYou may only have Pulse of Volthaven in your deck if your hero has essence of Ice and essence of Lightning. You must have both.\n\u203B\n If the next attack is not Ice, Lightning or Elemental it will not gain the bonus, if you then play a Ice, Lightning or Elemental attack this turn it will then gain the bonus.",
    cardImage: require("./images/PulseOfVolthaven.webp"),
    set: "ELE",
  },
  {
    name: "Grandeur of Valahai",
    ruling:
      "\nA Seismic Surge is a Guardian Token - Aura with “At the beginning of your action phase, destroy Seismic Surge then the next Guardian attack action card you play this turn costs {r} less to play.”\n\u203B\n You cannot defend with Grandeur of Valahai as it has no defense property. (This is different than if it had a defense value of 0.)\n\u203B\n When you pitch Grandeur of Valahai to pay the costs for playing a card or activating an ability, the trigger it creates will resolve before that card or ability.",
    cardImage: require("./images/GrandeurOfValahai.webp"),
    set: "EVR",
  },
  {
    name: "Skull Crushers",
    ruling:
      "\nBoth triggered effects on Skull Crushers can trigger more than once per turn. If you have rolled a 5 or a 6 multiple times in a turn, the ability triggers that many times.\n\u203B\n The triggered effects both trigger on the result of a roll. If a die is rerolled (i.e. Gambler’s Gloves), only the final value is used; or if it is ignored (i.e. Ready to Roll), any ignored values are not used.\n\u203B\n If multiple dice are rolled, the triggered effects are triggered by each die rolled this way (excluding ignored rolls).\n\u203B\n The first triggered effect generates a +1{p} continuous effect that lasts until end of turn. Destroying Skull Crushers does not remove the continuous effects generated this way.\n\u203B\n Brute attacks include Brute attack action cards, Brute weapons, Brute Ally activated attacks.\n\u203B\n You cannot roll a die unless an effect instructs you to.",
    cardImage: require("./images/SkullCrushers.webp"),
    set: "EVR",
  },
  {
    name: "Swing Big",
    ruling:
      "\nAn attack is considered to have hit if it deals damage to the defending hero during the damage step of combat. Otherwise it is not considered to have hit.\n\u203B\n If Swing Big attacks a non-hero target, then the effect does not trigger and the controller of the target would not create a Quicken token.\n\u203B\n If Swing Big is not on the combat chain when the combat chain closes, the effect does not trigger.",
    cardImage: require("./images/SwingBig.webp"),
    set: "EVR",
  },
  {
    name: "Ready to Roll",
    ruling:
      "\nIf an effect would make you roll 2 dice at the same time, then you would roll 3 dice then ignore 1 result.\n\u203B\n Ready to Roll generates a replacement effect. If you have multiple replacement effects you control you choose which one to apply first. If there are multiple replacement effects from different players the turn player decides which players replacement effects apply first.\n\u203B\n Playing two Ready to Roll would result in rolling 2 additional dice and then ignoring the 2 lowest results.\n\u203B\n If there are 2 or more equal lowest results, only one of those results is ignored for each Ready to Roll.",
    cardImage: require("./images/ReadyToRoll.webp"),
    set: "EVR",
  },
  {
    name: "Rolling Thunder",
    ruling:
      "\nBrute attacks include Brute attack action cards, Brute weapons, Brute Ally activated attacks.",
    cardImage: require("./images/RollingThunder.webp"),
    set: "EVR",
  },
  {
    name: "High Roller",
    ruling:
      "\nHigh Roller does not have an effect that rolls any dice itself.\n\u203B\n The die must have been rolled due to a roll effect in the game. You cannot roll a die unless an effect requires it.\n\u203B\n If you have rolled multiple times, you can still only get the additional intimidate once.\n\u203B\n High Roller has two instances of Intimidate if the second criteria is met. No player can respond between these intimidates as no one has priority during the resolution of a card.",
    cardImage: require("./images/HighRoller.webp"),
    set: "EVR",
  },
  {
    name: "Bare Fangs",
    ruling:
      "\nYou cannot play cards or activate abilities after drawing the card but before discarding.\n\u203B\n You cannot defend with Bare Fang as it has no defense property. (This is different than if it had a defense value of 0.)",
    cardImage: require("./images/BareFangs.webp"),
    set: "EVR",
  },
  {
    name: "Wild Ride",
    ruling:
      "\nYou cannot play cards or activate abilities after drawing the card but before discarding.\n\u203B\n You cannot defend with Wild Ride as it has no defense property. (This is different than if it had a defense value of 0.)",
    cardImage: require("./images/WildRide.webp"),
    set: "EVR",
  },
  {
    name: "Bad Beats",
    ruling:
      "\nThe number must be rolled from Bad Beats, it does not count dice that have been rolled for other effects.",
    cardImage: require("./images/BadBeats.webp"),
    set: "EVR",
  },
  {
    name: "Bravo, Star of the Show",
    ruling:
      "\nYou cannot reveal cards if you cannot fulfill the entire reveal effect. For example you cannot reveal just an Ice card with nothing else.\n\u203B\n You may reveal a card to fulfill more than one criteria for example revealing a Lightning/Ice card as well as an Earth card.\n\u203B\n Bravo, Star of the Show is an Elemental Guardian with Earth, Ice and Lightning Essence. If your hero is Bravo, Star of the Show, you can have in your deck: Elemental cards, Earth Cards, Ice Cards, Lightning Cards, Elemental Guardian cards, Guardian cards and Generic cards.\n\u203B\n If an attack gains dominate, you can still defend with equipment and defense reactions played from arsenal in addition to up to 1 card from hand.\n\u203B\n If an attack gains dominate, playing a defense reaction from your hand counts towards the 1 card from your hand restriction. You cannot defend with a card in your hand then play a defense reaction from your hand.",
    cardImage: require("./images/BravoStarOfTheShow.webp"),
    set: "EVR",
  },
  {
    name: "Stalagmite, Bastion of Isenloft",
    ruling:
      "\nAn Off-hand permanent may start in one of your weapon zones. You cannot control a 2h and an Off-hand permanent at the same time. You can not control two Off-hand permanents at the same time.\n\u203B\n Equipment goes to the graveyard when destroyed.\n\u203B\n The Frostbite token is created during the defend step of combat.",
    cardImage: require("./images/Stalagmite.webp"),
    set: "EVR",
  },
  {
    name: "Valda Brightaxe",
    ruling:
      "\nValda’s hero ability triggers during any action phase, not just your own.\n\u203B\n If an attack gains dominate, you can still defend with equipment and defense reactions played from arsenal in addition to up to 1 card from hand.\n\u203B\n If an attack gains dominate, playing a defense reaction from your hand counts towards the 1 card from your hand restriction. You cannot defend with a card in your hand then play a defense reaction from your hand.",
    cardImage: require("./images/ValdaBrightaxe.webp"),
    set: "EVR",
  },
  {
    name: "Earthlore Bounty",
    ruling:
      "\nIf you draw multiple cards you would create multiple Seismic Surge tokens. e.g. draw 2 cards means you would create 2 Seismic Surge tokens.\n\u203B\n This effect triggers if you draw a card from the effect of an action card played by your opponent.",
    cardImage: require("./images/EarthloreBounty.webp"),
    set: "EVR",
  },
  {
    name: "Pulverize",
    ruling:
      "\nYou cannot trigger heave from the arsenal. Heave can only be triggered from hand.\n\u203B\n While Pulverize does create a triggered layer in the end phase, players do not have a priority window during the end phase to respond to the trigger.",
    cardImage: require("./images/Pulverize.webp"),
    set: "EVR",
  },
  {
    name: "Imposing Visage",
    ruling:
      "\nThe value of X is selected before applying cost increases and then reductions.\n\u203B\n X can be 0.\n\u203B\n The cost of the card is the total of X plus 3. E.g if I wanted to search for Emerging Power (cost of 2) with Imposing Visage, X equal 2. I would need to play Imposing Visage for a total cost of 5 resources (2+3 = 5).\n\u203B\n When an aura enters the arena from the effect of Imposing Visage, effects of that aura that trigger on entering the arena are triggered. (i.e. “When Nerves of Steel enters the arena, […]”)",
    cardImage: require("./images/ImposingVisage.webp"),
    set: "EVR",
  },
  {
    name: "Nerves of Steel",
    ruling:
      "\nThe equipment subtype “Chest” is found on the bottom center of the card.\n\u203B\n Nerves of Steel is destroyed after taking any type of damage including physical damage {p} damage, arcane damage and untyped damage. This does not include loss of life.\n\u203B\n If you defend an attack with 2 or less power with an equipment, and then the attack increases to 3 or more power, Nerves of Steel will not prevent Battleworn and Temper from triggering when the combat chain closes.\n\u203B\n If you defend an attack with 3 or more power with an equipment, and then the attack decreases to 2 or lower power, Nerves of Steel will prevent Battleworn and Temper from triggering when the combat chain closes.",
    cardImage: require("./images/NervesOfSteel.webp"),
    set: "EVR",
  },
  {
    name: "Thunder Quake",
    ruling:
      "\nYou cannot trigger heave from the arsenal. Heave can only be triggered from hand.\n\u203B\n While Thunder Quake does create a triggered layer in the end phase, players do not have a priority window during the end phase to respond to the trigger.",
    cardImage: require("./images/ThunderQuake.webp"),
    set: "EVR",
  },
  {
    name: "Macho Grande",
    ruling:
      "\nYou can still defend with equipment and defense reactions played from arsenal in addition to up to 1 card from hand.\n\u203B\n Playing a defense reaction from your hand counts towards the 1 card from your hand restriction. You cannot defend with a card in your hand then play a defense reaction from your hand.",
    cardImage: require("./images/MachoGrande.webp"),
    set: "EVR",
  },
  {
    name: "Seismic Stir",
    ruling:
      "\nA Seismic Surge is a Guardian Token - Aura with “At the beginning of your action phase, destroy Seismic Surge then the next Guardian attack action card you play this turn costs {r} less to play.”",
    cardImage: require("./images/SeismicStir.webp"),
    set: "EVR",
  },
  {
    name: "Steadfast",
    ruling:
      "\nYou may not defend with Steadfast as it does not have a defense value.\n\u203B\n The source can be any object currently in the game, typically cards or tokens, and is chosen at the time Steadfast resolves.\n\u203B\n If the chosen source deals more than one event of damage (or type of damage), the prevention effect of Steadfast applies to each of those instances. E.g. If the opponent plays Sting of Sorcery, and then attacks with Singeing Steelblade (chosen source), Steadfast will apply to both events of arcane damage AND the event of physical damage from the attack.\n\u203B\n If the chosen source has an ability that attacks (such as a weapon), Steadfast can prevent damage dealt by that source on separate chain links. E.g. If the source is Dawnblade, Steadfast can prevent a total of 6 damage across one or more attacks from the Dawnblade chosen.\n\u203B\n The effect of Steadfast prevents the incoming damage from the chosen source, and cannot be saved for a future source of damage once Steadfast resolves.\n\u203B\n Steadfast is an instant. You may play it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.\n\u203B\n Once Steadfast has prevented a total of 6/5/4 damage from the chosen source, it will no longer prevent any additional damage from that source.\n\u203B\n Loss of life is not being dealt damage and would not be prevented by Steadfast.",
    cardImage: require("./images/Steadfast.webp"),
    set: "EVR",
  },
  {
    name: "Mask of the Pouncing Lynx",
    ruling:
      "\nBase power {p} is determined by the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n An attack is considered to have hit if it deals damage during the damage step of combat.\n\u203B\n If the banished card is not played during the turn, it is still banished and will remain banished indefinitely.",
    cardImage: require("./images/MaskOfThePouncingLynx.webp"),
    set: "EVR",
  },
  {
    name: "Break Tide",
    ruling:
      "\nYou still may only play the banished card when it is legal to do so, up until the end of your next turn.\n\u203B\n If the banished card is not played, it is still banished and will remain banished indefinitely.\n\u203B\n If Break Tide has dominate, you can still defend with equipment and defense reactions played from arsenal in addition to up to 1 card from hand.\n\u203B\n Playing a defense reaction from your hand counts towards the 1 card from your hand restriction of dominate. You cannot defend with a card in your hand then play a defense reaction from your hand.",
    cardImage: require("./images/BreakTide.webp"),
    set: "EVR",
  },
  {
    name: "Spring Tidings",
    ruling:
      "\nBase power {p} is determined by the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n Spring Tidings does not count itself towards its own effect. If you control no other attack action cards on the combat chain, Spring tidings will not draw any cards.\n\u203B\n Spring Tidings does not require you to have hit with the other attack actions on the combat chain.",
    cardImage: require("./images/SpringTidings.webp"),
    set: "EVR",
  },
  {
    name: "Winds of Eternity",
    ruling:
      "\nThis triggered effect is not optional. If Hundred Winds hits you must shuffle all cards named Hundred Winds you control on this combat chain into your deck.",
    cardImage: require("./images/WindsOfEternity.webp"),
    set: "EVR",
  },
  {
    name: "Hundred Winds",
    ruling:
      "\nIt does not matter what the pitch or power of the other ‘Hundred Winds’ are on this combat chain. This card only cares about the card name of other cards on the combat chain.",
    cardImage: require("./images/HundredWinds.webp"),
    set: "EVR",
  },
  {
    name: "Ride the Tailwind",
    ruling:
      "\nBase power {p} is determined by the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n A card with “go again” can not gain another instance of “go again”, and will only grant 1 action point when it resolves.\n\u203B\n If the combat chain is closed after Ride the Tailwind is played and before another attack action card is played. The effect will not carry over to the next combat chain.",
    cardImage: require("./images/RideTheTailwind.webp"),
    set: "EVR",
  },
  {
    name: "Twin Twisters",
    ruling: "\nYou must choose a mode for Twin Twisters.",
    cardImage: require("./images/TwinTwisters.webp"),
    set: "EVR",
  },
  {
    name: "Wax On",
    ruling:
      "\nThe cost of a card is located in the top left-hand corner of the card.",
    cardImage: require("./images/WaxOn.webp"),
    set: "EVR",
  },
  {
    name: "Helm of Sharp Eye",
    ruling:
      "\nBase power {p} is determined by the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n Helm of Sharp Eye’s activated ability is an attack reaction. You may only activate it during the reaction window when you are the attacking hero.\n\u203B\n You can only activate this ability if a weapon you control has MORE than twice its base power. E.g If you can control a Dawnblade (that has a base power of 3) then in the reaction window play and resolve Razor Reflex, you are still unable to active Helm of Sharp Eye’s ability as Dawnblade currently only has a total power of 6. However, increasing the power to 2 Razor Reflex's (total power of 9) will allow you to to active Helm of Sharp Eye’s ability.\n\u203B\n Non-attack actions can only be played on an empty stack when the combat chain is closed. You cannot play non-attack actions with Helm of Sharp Eye, unless they can specifically be played as an instant.\n\u203B\n If the base power of a weapon is 0, any increase is considered greater than twice its base power.",
    cardImage: require("./images/HelmOfSharpEye.webp"),
    set: "EVR",
  },
  {
    name: "Shatter",
    ruling:
      "\n2H refers to ‘two-handed’. A weapons ‘hand’ requirement is located at the bottom-middle of your weapons cards.\n\u203B\n Shatter refers to the modified defense, not the base defense of an equipment.\n\u203B\n Shatter creates a replacement effect during damage calculation. Players can not respond to replacement effects by playing cards or activating abilities.\n\u203B\n A card that is destroyed is put into the owner’s graveyard. This includes destroyed Equipment.",
    cardImage: require("./images/Shatter.webp"),
    set: "EVR",
  },
  {
    name: "Blood on Her Hands",
    ruling:
      "\nYou may only play Blood on Her Hands in your deck if your hero is ‘Kassai’.\n1H refers to ‘one-handed’. A weapons ‘hand’ requirement is located at the bottom-middle of your weapons cards.\n\u203B\n A card with “go again” can not gain another instance of “go again”, and will only grant 1 action point when it resolves.\n\u203B\n If you choose to destroy more than 6 copper tokens to pay the additional costs for Blood on Her Hands you will not receive any additional effects.\n\u203B\n You can choose each mode zero, one or twice.\n\u203B\n If you can choose to destroy copper tokens, you MUST select that many modes (up to 6).\n\u203B\n You can choose to destroy zero copper when you play Blood on Her Hands. (You would not be able to choose any modes)\n\u203B\n If the same target 1H weapon is declared for the third mode (may attack twice this turn) it can still only attack twice that turn, it does not change it to being able to attack thrice.\n\u203B\n If target 1H weapon may attack twice this turn, and there is an effect that allows you to attack an additional time with a weapon, you may attack thrice with that weapon.",
    cardImage: require("./images/BloodOnHerHands.webp"),
    set: "EVR",
  },
  {
    name: "Oath of Steel",
    ruling:
      "\nAll +1{p} counters are removed during the end phase even ones that were not created by Oath of Steel.",
    cardImage: require("./images/OathOfSteel.webp"),
    set: "EVR",
  },
  {
    name: "Slice and Dice",
    ruling:
      "\nThis does not affect weapons that are not swords or daggers.\n\u203B\n sIf you attack with a non-sword, non-dagger weapon before you attack with a sword or dagger weapon, you do not gain the first effect. If you attack twice with a non-sword, non-dagger weapon, then you can not gain either effect this turn.",
    cardImage: require("./images/SliceAndDice.webp"),
    set: "EVR",
  },
  {
    name: "Blade Runner",
    ruling:
      "\nA card with “go again” can not gain another instance of “go again”, and will only grant 1 action point when it resolves.\n\u203B\n 1H refers to ‘one-handed’. A weapons ‘hand’ requirement is located at the bottom-middle of your weapons cards.\n\u203B\n The target weapon attack does not gain the +{p} effect. Only the subsequent weapon attack this turn can gain the +{p} effect.",
    cardImage: require("./images/BladeRunner.webp"),
    set: "EVR",
  },
  {
    name: "In the Swing",
    ruling:
      "\nYou cannot play In the Swing if you have not attacked 2 or more times with weapons this turn.",
    cardImage: require("./images/InTheSwing.webp"),
    set: "EVR",
  },
  {
    name: "Outland Skirmish",
    ruling:
      "\n1H refers to ‘one-handed’. A weapons ‘hand’ requirement is located at the bottom-middle of your weapons cards.\n\u203B\n The second criteria does not care if the weapon is 1H or 2H.",
    cardImage: require("./images/OutlandSkirmish.webp"),
    set: "EVR",
  },
  {
    name: "Dissolution Sphere",
    ruling:
      "\nYou cannot defend with Dissolution Sphere as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n If you would take 2 or more damage from an event, Dissolution Sphere would not prevent that damage and you would take the 2 damage. Dissolution sphere only prevents events that deal 1 damage.\n\u203B\n If you would take mixed damage from an event, and the total damage is greater than 2, Dissolution Sphere’s prevention effect does not apply.\n\u203B\n If you would take 2 or more damage from an event and another replacement effect reduces the damage to be dealt to 1, the Dissolution Sphere’s prevention effect does apply and prevents 1 damage.",
    cardImage: require("./images/DissolutionSphere.webp"),
    set: "EVR",
  },
  {
    name: "Micro-processor",
    ruling:
      "\nYou cannot defend with Micro-processor as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n You can use each activated ability once per turn.\n\u203B\n Activating each ability requires an action point and can only be activated on an empty combat chain. You can close the combat chain after an attack has fully resolved.",
    cardImage: require("./images/MicroProcessor.webp"),
    set: "EVR",
  },
  {
    name: "Signal Jammer",
    ruling:
      "\nYou cannot defend with Signal Jammer as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n This affects all players, including the player that controls Signal jammer.",
    cardImage: require("./images/SignalJammer.webp"),
    set: "EVR",
  },
  {
    name: "Teklo Pounder",
    ruling:
      "\nYou cannot defend with Teklo Pounder as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n The boost does not need to be successful. You will still remove a steam counter and gain +2(p) when you boost a card.\n\u203B\n The effect is not optional, you MUST remove a steam counter and gain +2(p).",
    cardImage: require("./images/TekloPounder.webp"),
    set: "EVR",
  },
  {
    name: "T-Bone",
    ruling:
      "\nIt does not matter if the boost is successful or not. If you've boosted this combat chain the defending hero must defend T-Bone with an equipment they control.\n\u203B\n T-Bone counts itself towards its effect if it was boosted when it was played.\n\u203B\n You cannot defend with equipment that is already defending on the combat chain.\n\u203B\n You can still defend with equipment with 0 defense. You cannot however defend with equipment with no defense value.",
    cardImage: require("./images/TBone.webp"),
    set: "EVR",
  },
  {
    name: "Payload",
    ruling:
      "\nIt does not matter if the boost is successful or not.If you've boosted this combat chain, Payload gains dominate.\n\u203B\n If Payload gains dominate, you can still defend with equipment and defense reactions played from arsenal in addition to up to 1 card from hand.\n\u203B\n If Payload gains dominate, playing a defense reaction from your hand counts towards the 1 card from your hand restriction. You cannot defend with a card in your hand then play a defense reaction from your hand.",
    cardImage: require("./images/Payload.webp"),
    set: "EVR",
  },
  {
    name: "Zoom In",
    ruling:
      "\nIt does not matter if the boost were successful or not you still gain the ‘Opt X’ effect.\n\u203B\n Zoom In counts itself towards its effect if it was boosted when it was played.",
    cardImage: require("./images/ZoomIn.webp"),
    set: "EVR",
  },
  {
    name: "Rotary Ram",
    ruling:
      "\nIt does not matter if the boost is successful or not. If you've boosted this turn, you must put Rotary Ram on the bottom of your deck.\n\u203B\n Rotary Ram is put to the bottom of the deck at the time its effect resolves. It does not stay in the arena.",
    cardImage: require("./images/RotaryRam.webp"),
    set: "EVR",
  },
  {
    name: "Genis Wotchuneed",
    ruling:
      "\nEach player is affected in clockwise-order starting from the turn player. Once a player has put a card from their hand on the bottom of their deck (and drawn a card), or not, the next player in clockwise-order makes their decision.\n\u203B\n Opposing players only draw from the effect if they decide to put a card from their hand on the bottom of their deck. The effect is optional and players can decide not to put a card from their hand on the bottom of their deck.",
    cardImage: require("./images/GenisWotchuneed.webp"),
    set: "EVR",
  },
  {
    name: "Silver Palms",
    ruling:
      "\nThe effect is optional, and the other player can choose not to draw a card if they have less {h} than you.",
    cardImage: require("./images/SilverPalms.webp"),
    set: "EVR",
  },
  {
    name: "Dreadbore",
    ruling:
      "\nYou cannot attack with this weapon as it does not have an attack value or an attack ability that can be activated to attack.\n\u203B\n You may use this ability even when you have a card in all your arsenal zones, however you cannot put an arrow card from your hand into your arsenal.\n\u203B\n An arrow card has the subtype “arrow” and is located at the bottom middle of the card.\n\u203B\n An arrow can be played from arsenal even if it wasn’t a bow that placed it in the arsenal.\n\u203B\n This does not give the arrow go again. (The action on Dreadbore has go again.)\n\u203B\n Defense reactions can still be played from the arsenal or other zones that are not from the hand.",
    cardImage: require("./images/Dreadbore.webp"),
    set: "EVR",
  },
  {
    name: "Battering Bolt",
    ruling:
      "\nThe green symbol on Battering Bolt is life.\n\u203B\n Action cards are not discarded. All other card types are discarded including by not limited to: Attack Reactions, Defense Reactions, Instants, Mentors etc.",
    cardImage: require("./images/BatteringBolt.webp"),
    set: "EVR",
  },
  {
    name: "Tri-shot",
    ruling:
      "\nYou still need to pay the activation costs required to activate the bow.\n\u203B\n This ability bypasses the “Once per Turn Action” (Or Twice per turn) on bows and allows 2 additional activations.",
    cardImage: require("./images/TriShot.webp"),
    set: "EVR",
  },
  {
    name: "Rain Razors",
    ruling:
      "\nYou cannot defend with Rain Razors as it has no defense value. (This is different than if the defense value was 0.)",
    cardImage: require("./images/RainRazors.webp"),
    set: "EVR",
  },
  {
    name: "Release the Tension",
    ruling:
      "\nDefense reactions can still be played from hand, or any other zone other than the arsenal.\n\u203B\n This only affects the chain link, not the entire combat chain.",
    cardImage: require("./images/ReleaseTheTension.webp"),
    set: "EVR",
  },
  {
    name: "Fatigue Shot",
    ruling:
      "\nBase power {p} is determined by the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n Modifications to the base power of a card are applied before any other non-base modifications.",
    cardImage: require("./images/FatigueShot.webp"),
    set: "EVR",
  },
  {
    name: "Timidity Point",
    ruling:
      "\nThis only stops attacks with the keyword dominate. It does not stop other keywords or effects that have similar effects to dominate but not have dominate.",
    cardImage: require("./images/TimidityPoint.webp"),
    set: "EVR",
  },
  {
    name: "Vexing Quillhand",
    ruling:
      "\nYou can only prevent one arcane damage per Arcane Barrier 1 per damage event.\n\u203B\n Players cannot respond to the prevention as it is a replacement effect.\n\u203B\n To fully prevent a card dealing 3 arcane damage, you would require three Arcane Barrier 1 and three resources to prevent it. To fully prevent 3 Runechant tokens (3 instances of 1 damage from different sources). You would require one Arcane Barrier 1 and three resources to prevent it.",
    cardImage: require("./images/VexingQuillhand.webp"),
    set: "EVR",
  },
  {
    name: "Runic Reclamation",
    ruling:
      "\nThe target aura is selected at the time the triggered effect is triggered and put onto the stack.\n\u203B\n If there is no aura that can be targeted, or the target aura is destroyed before the triggered layer resolves, you do not create a Runechant token.\n\u203B\n You cannot respond to the creation of the Runechant after the aura is destroyed as it is part of the resolution of the ability.",
    cardImage: require("./images/RunicReclamation.webp"),
    set: "EVR",
  },
  {
    name: "Swarming Gloomveil",
    ruling:
      "\nSwarming Gloomveil is continuously checking. If you create an aura while Swarming Gloomveil is attacking, it would still gain the relevant effect.\n\u203B\n If you’ve played or created 3 or more auras during the turn you attack with Swarming Gloomveil it will gain all 3 effects.\n\u203B\n Runechant tokens that are triggered and resolve before Swarming Gloomveil hits (with the 3rd effect triggered), do not gain the benefit that prevents the hero from preventing arcane damage from sources you control.\n\u203B\n Prevention effects that include the destruction of the source object, still destroy the source object but do not reduce the damage of the arcane damage event (that can’t be prevented). Prevention effects apply one at a time until there is no more damage to be prevented. E.g. If you control 3 Spectral Shields and there is 1 arcane damage that can not be prevented, all Spectral Shields will be destroyed trying and failing to prevent the arcane damage.",
    cardImage: require("./images/SwarmingGloomveil.webp"),
    set: "EVR",
  },
  {
    name: "Revel in Runeblood",
    ruling:
      "\nYou cannot respond to the destruction effect of Revel in Runeblood as neither player gains priority during the end phase.\n\u203B\n You can play Revel in Runeblood without playing an attack action card and/or another ‘non-attack’ action card this turn, however you will create no Runechants from its effect.",
    cardImage: require("./images/RevelInRuneblood.webp"),
    set: "EVR",
  },
  {
    name: "Runeblood Incantation",
    ruling:
      "\nYou are able to respond to Runeblood Incantations Runechant token generation effect as it triggers and resolves during the start of your action phase, not the start of your turn.",
    cardImage: require("./images/RunebloodIncantation.webp"),
    set: "EVR",
  },
  {
    name: "Drowning Dire",
    ruling:
      "\nDrowning Dire is continuously checking. If you create an aura while Drowning Dire is attacking, it would still gain dominate.\n\u203B\n If Drowning Dire has dominate, you can still defend with equipment and defense reactions played from arsenal in addition to up to 1 card from hand.\n\u203B\n If Drowning Dire has dominate, playing a defense reaction from your hand counts towards the 1 card from your hand restriction. You cannot defend with a card in your hand then play a defense reaction from your hand.",
    cardImage: require("./images/DrowningDire.webp"),
    set: "EVR",
  },
  {
    name: "Reek of Corruption",
    ruling:
      "\nReek of Corruption is continuously checking. If you create an aura while Reek of Corruption is attacking, it would still gain ‘ If this hits a hero, they discard a card.’\n\u203B\n The defending player can respond to the hit trigger during chain link resolution.",
    cardImage: require("./images/ReekOfCorruption.webp"),
    set: "EVR",
  },
  {
    name: "Shrill of Skullform",
    ruling:
      "\nShrill of Skullform is continuously checking, If you create an aura while Shrill of Skullform is attacking, it would still gain +3{p}",
    cardImage: require("./images/ShrillOfSkullform.webp"),
    set: "EVR",
  },
  {
    name: "Iyslander (EVR)",
    ruling:
      "\nA blue color strip is a card that has a base pitch value of 3. The color strip is located at the top center of the card.\n\u203B\n 'Non-attack' action cards played as an instant are still considered 'non-attack' action cards for the purposes of effects.\n\u203B\n You cannot gain an action point on an opponent's turn.\n\u203B\n Frostbite tokens affect cards before they are played. If you create a Frostbite in response to a player playing a card, Frostbite will not affect that card.\n\u203B\n Iyslander’s effect that creates a Frostbite token is a triggered effect that can be responded to.",
    cardImage: require("./images/Iyslander.webp"),
    set: "EVR",
  },
  {
    name: "Kraken's Aethervein",
    ruling:
      "\nYou cannot attack with this weapon as it does not have an attack value or an action that allows it to attack.\n\u203B\n Effects that modify action cards that deal arcane damage would not affect Kraken’s Aethervein as it is not an action card.",
    cardImage: require("./images/KrakensAethervein.webp"),
    set: "EVR",
  },
  {
    name: "Sigil of Parapets",
    ruling:
      "\nIf you play multiple wizard cards it would gain +2{d} multiple times.\n\u203B\n Any wizard card that is played would affect this, including wizard action cards, wizard instant cards and wizard defense reaction cards.",
    cardImage: require("./images/SigilOfParapets.webp"),
    set: "EVR",
  },
  {
    name: "Aether Wildfire",
    ruling:
      "\nThis card is an action and therefore cannot be played except for on your action phase unless another way allows you to (For example playing it as though it was an instant)\n\u203B\n This affects all action cards, not just your own. If your opponent does arcane damage to you on the same turn you have dealt damage from Aether Wildfire, their card would gain the effect too.",
    cardImage: require("./images/AetherWildfire.webp"),
    set: "EVR",
  },
  {
    name: "Scour",
    ruling:
      "\nBase cost is the printed cost value on a card. (Located at the top right corner of a card.)\n\u203B\n You cannot defend with Scour as it has no defense property. (This is different than if it had a defense value of 0.)\n\u203B\n Destroyed cards go to their owner’s graveyard. If a token is destroyed (leaves the arena), it ceases to exist.\n\u203B\n The value of X is determined at the time the card is declared to be played so that X targets can be declared and X resources can be paid.\n\u203B\n You must have a target to play Scour for any X>0. E.g. You cannot play Scour with X=4 if there are not at least 4 legal targets.",
    cardImage: require("./images/Scour.webp"),
    set: "EVR",
  },
  {
    name: "Emeritus Scolding",
    ruling:
      "\nThis card is an action and therefore cannot be played except for on your action phase unless another way allows you to (For example playing it as though it was an instant)",
    cardImage: require("./images/EmeritusScolding.webp"),
    set: "EVR",
  },
  {
    name: "Pry",
    ruling:
      "\nThis card is an action and therefore cannot be played except for on your action phase unless another way allows you to (For example playing it as though it was an instant)",
    cardImage: require("./images/Pry.webp"),
    set: "EVR",
  },
  {
    name: "Pyroglyphic Protection",
    ruling:
      "\nThis only prevents arcane damage, it does not prevent any other types of damage, including physical and untyped damage.\n\u203B\n The prevention effect applies once per damage event and only prevents damage from the arcane potion of that event. If there are multiple events of damage, Pyroglyphic Protection prevents the full 1/2/3 arcane damage from each event.",
    cardImage: require("./images/PyroglyphicProtection.webp"),
    set: "EVR",
  },
  {
    name: "Timekeeper's Whim",
    ruling:
      "\nThis card is an action and therefore cannot be played except for on your action phase unless another way allows you to (For example playing it as though it was an instant)\n\u203B\n This affects all action cards, not just your own. If your opponent does arcane damage to you on the same turn you have dealt damage from Aether Wildfire, their card would gain the effect too.",
    cardImage: require("./images/TimekeepersWhim.webp"),
    set: "EVR",
  },
  {
    name: "Crown of Reflection",
    ruling:
      "\nYou can only prevent one arcane damage per Arcane Barrier 1 per damage event.\n\u203B\n Players cannot respond to the prevention as it is a replacement effect.\n\u203B\n To fully prevent a card dealing 3 arcane damage, you would require three Arcane Barrier 1 and three resources to prevent it. To fully prevent 3 Runechant tokens (3 instances of 1 damage from different sources). You would require one Arcane Barrier 1 and three resources to prevent it.\n\u203B\n If a token Aura is destroyed by Crown of Reflection, you may put an Illusionist aura from your hand into the arena with a cost of 0. In this way tokens are assumed to have a cost of 0 because the effect assumes and requires the cost to be defined, instead being conditional on it.\n\u203B\n If the aura destroyed has a triggered effect that triggers on its own destruction (e.g. Haze Bending), that effect will trigger. If the illusionist aura you put into the arena has a triggered effect that triggers on other aura’s destruction, that effect will not trigger because it was not in the arena at the time the previous aura was destroyed.\n\u203B\n If the Aura is destroyed before the activated layer resolves as a layer on the stack, the layer fails to resolve and you do not gain the benefit of putting an aura into the arena.",
    cardImage: require("./images/CrownOfReflection.webp"),
    set: "EVR",
  },
  {
    name: "Fractal Replication",
    ruling:
      "\nIllusionist attack action cards on the combat chain include previous attacks you control and defending cards controlled by the opponent.\n\u203B\n If there are no Illusionist attack action cards on the combat chain, Fractal Replication has 0 power and 0 defense. It can still attack and defend for 0 as it does have the power and defense property.\n\u203B\n Base power {p} is determined by the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n Effects that check on play will not check for their conditions to be met.\n\u203B\n Abilities with effects that state the name of the card that the effect it is on (the source), now refer to Fractal Replication after the ability is copied (the new source).\n\u203B\n Abilities with “when you play” triggered effects are still copied by Fractal Replication, however they will not trigger as Fractal Replication is already considered to have been played.\n\u203B\n Abilities with “when you attack” triggered effects copied by Fractal Replication will trigger as they are gained before Fractal Replication becomes an attacking card.\n\u203B\n A card with “go again” can not gain another instance of “go again”, and will only grant 1 action point when it resolves.\n\u203B\n The controller of Fractal Replication gets to choose the order of its effects when they are triggered. E.g If Fractal Replication gains multiple effects that state ‘when this hits...’ the controlling player gets to choose the order in which these effects resolve.\n\u203B\n Fractal Replciation’s triggered effect is dependent on the Illusionist type. It is applied after types of objects have been determined, and gains the base abilities of an Illusionist attack action cards.\n\u203B\n Defending cards retain their abilities, but they are not considered functional. Therefore Fractal Replication still gains any defending Illusionist attack action card’s base abilities.\n\u203B\n Illusionist attack action cards that are no longer on the combat chain (such as when they are put into Soul, or back into the deck) are not considered for Fractal Replciation’s effects. Last Known Information is not applied in this case.",
    cardImage: require("./images/FractalReplication.webp"),
    set: "EVR",
  },
  {
    name: "Miraging Metamorph",
    ruling:
      "\nAuras stay in the arena until they are destroyed.\n\u203B\n The token can be represented by a small object such as a card sleeve, coin, dice or anything that is clear to your opponent.\n\u203B\n An attack action card that is put into the graveyard from the combat chain is not considered to be destroyed.\n\u203B\n A copy has the same parameters, and copyable (printed) properties, as that object it is a copy of. It does not copy any counters on, or effects specific to, the copied object.",
    cardImage: require("./images/MiragingMetamorph.webp"),
    set: "EVR",
  },
  {
    name: "Shimmers of Silver",
    ruling:
      "\nAuras stay in the arena until they are destroyed.\n\u203B\nThis effect is not a ‘may’ effect. The first illusionist aura weapon you attack with will receive a +1{p} counter on it.",
    cardImage: require("./images/ShimmersOfSilver.webp"),
    set: "EVR",
  },
  {
    name: "Haze Bending",
    ruling:
      "\nAuras stay in the arena until they are destroyed.\n\u203B\n This effect is not a ‘may’ effect. The first illusionist attack action card you attack with will lose and can't gain phantasm.\n\u203B\n If Passing Mirage enters the arena after you play the first illusionist attack action card this turn, the losing Phantasm does not apply to the second illusionist attack action card this turn.\n\u203B\n If Passing Mirage is destroyed the attack would regain Phantasm (if it had it originally).",
    cardImage: require("./images/HazeBending.webp"),
    set: "EVR",
  },
  {
    name: "Passing Mirage",
    ruling:
      "\nAuras stay in the arena until they are destroyed.\n\u203B\n The token can be represented by a small object such as a card sleeve, coin, dice or anything that is clear to your opponent.\n\u203B\n An attack action card that is put into the graveyard from the combat chain is not considered to be destroyed.\n\u203B\n A copy has the same parameters, and copyable (printed) properties, as that object it is a copy of. It does not copy any counters on, or effects specific to, the copied object.",
    cardImage: require("./images/PassingMirage.webp"),
    set: "EVR",
  },
  {
    name: "Pierce Reality",
    ruling:
      "\nAuras stay in the arena until they are destroyed.\n\u203B\n This effect is not a ‘may’ effect. The first illusionist attack action card you play will have +2{p}.\n\u203B\n If Piercing Reality enters the arena after you play the first illusionist attack action card this turn, the +2{p} does not apply to the second illusionist attack action card this turn.\n\u203B\n If Piercing Reality is destroyed the attack would no longer have +2{p}.",
    cardImage: require("./images/PierceReality.webp"),
    set: "EVR",
  },
  {
    name: "Coalescence Mirage",
    ruling:
      "\nAn attack action card that is cleared from the combat chain or a rule or effect other than “destroy” is not considered to be destroyed.\n\u203B\n If Coalescence Mirage is not in the arena when it is destroyed, its effect does not trigger because it was not functional at the time the card was destroyed.",
    cardImage: require("./images/CoalescenceMirage.webp"),
    set: "EVR",
  },
  {
    name: "Phantasmal Haze",
    ruling:
      "\nAn attack action card that is cleared from the combat chain or a rule or effect other than “destroy” is not considered to be destroyed.\n\u203B\n If Phantasmal Haze is not in the arena when it is destroyed, its effect does not trigger because it was not functional at the time the card was destroyed.",
    cardImage: require("./images/PhantasmalHaze.webp"),
    set: "EVR",
  },
  {
    name: "Veiled Intentions",
    ruling:
      "\nAn attack action card that is cleared from the combat chain or a rule or effect other than “destroy” is not considered to be destroyed.\n\u203B\n If the attack is not in the arena when it is destroyed (such as when it is on the stack), its effect does not trigger because it was not functional at the time the card was destroyed.",
    cardImage: require("./images/VeiledIntentions.webp"),
    set: "EVR",
  },
  {
    name: "Arcane Lantern",
    ruling:
      "\nYou can only prevent one arcane damage per Arcane Barrier 1 per damage event.\n\u203B\n Players cannot respond to the prevention as it is a replacement effect.\n\u203B\n To fully prevent a card dealing 3 arcane damage, you would require three Arcane Barrier 1 and three resources to prevent it. To fully prevent 3 Runechant tokens (3 instances of 1 damage from different sources). You would require one Arcane Barrier 1 and three resources to prevent it.",
    cardImage: require("./images/ArcaneLantern.webp"),
    set: "EVR",
  },
  {
    name: "Bingo",
    ruling:
      "\nIf the card revealed is not an attack action card or a ‘non attack’ action card, Bingo does not gain either ability i.e if the defending player reveals an ‘instant’ nothing would happen.\n\u203B\nIf the defending hero has no cards in hand when this hits, they will be unable to reveal a card from hand, Bingo does not gain either effect.\n\u203B\n The controller of Bingo draws the card if a non-attack action card is revealed this way, not the one who revealed the card.\n\u203B\n Bingo, Bango, Bongo!",
    cardImage: require("./images/Bingo.webp"),
    set: "EVR",
  },
  {
    name: "Firebreathing",
    ruling:
      "\nThis effect can only be activated while it is attacking. When you are defending with Fire Breathing you cannot activate its ability as it does not specify you can.\n\u203B\n You may activate Firebreathing any number of times provided you can pay the cost for it’s activation each time.",
    cardImage: require("./images/Firebreathing.webp"),
    set: "EVR",
  },
  {
    name: "Cash Out",
    ruling:
      '\nA Silver token is a generic token item with "Action- {r}{r}{r}, destroy Silver: Draw a card. Go again"\n\u203B\n You can choose to destroy no weapons, equipment and/or non-token items you control when you play Cash Out, however you will create no Silver tokens.\n\u203B\n Token permanents can be destroyed (except items), including tokens that have gained the weapon and/or equipment type. This means Illusionist auras that gain the weapon type from the effect of Iris of Reality, are legal subjects of the effect.',
    cardImage: require("./images/CashOut.webp"),
    set: "EVR",
  },
  {
    name: "Knick Knack Bric-a-brac",
    ruling:
      "\nYou may play Knick Knack without paying it’s additional cost. If you do, you only go through the process once, without any further repetitions.\n\u203B\n You may destroy any increments of Copper, Silver and Gold. However you only repeat this process for each 4/2/1. For example you could destroy 6 Copper and 3 Silver but you only get to repeat the process twice.\n\u203B\n Repeating the process means searching your deck for a card. You do not need to search for the same card nor do you need to pay Knick Knack’s resource cost again.\n\u203B\n When instructed to repeat the process X times, first resolve the process once, then repeat the process X more times, resulting in the process being completed X+1 times.\n\u203B\n In practical play, you can skip shuffling the deck between searching for cards. The only exception is when a replacement effect interacts meaningfully with any effect of the process, in which case shuffling should be performed between searches to ensure that the correct outcome is achieved.",
    cardImage: require("./images/KnickKnack.webp"),
    set: "EVR",
  },
  {
    name: "This Round's on Me",
    ruling:
      "\nThis Round’s on me affects all attacks, including attack action cards and weapon attacks.",
    cardImage: require("./images/ThisRoundsOnMe.webp"),
    set: "EVR",
  },
  {
    name: "Life of the Party",
    ruling:
      "\nLife of the Party has an optional alternative cost that you can pay by discarding Crazy Brew from your hand, or by destroying a Crazy Brew you control, not both.\n\u203B\n Effects that increase the resource cost to play Life of the Party must still be paid. The alternative cost first reduces the resource cost to 0, which is then increased by the effects.",
    cardImage: require("./images/LifeOfTheParty.webp"),
    set: "EVR",
  },
  {
    name: "High Striker",
    ruling:
      "\nThis affects all attacks including attack action cards, ally attacks, and weapon attacks.\n\u203B\n This will only affect the next attack that hits. If an attack doesn’t hit, it does not use up this effect and a later attack that hits this turn will trigger the effect.",
    cardImage: require("./images/HighStriker.webp"),
    set: "EVR",
  },
  {
    name: "Pick a Card, Any Card",
    ruling:
      '\nA Silver token is a generic token item with "Action- {r}{r}{r}, destroy Silver: Draw a card. Go again"\n\u203B\n An example of an acceptable method of randomisation would be rolling a die.\n\u203B\n You cannot record information after looking at a player\'s hand.\n\u203B\n Thrice means three more times.\n\u203B\n The player who controls Pick a Card, Any Card is the player who is instructed to do the revealing of the cards and thus triggers effects such as that on Korshem.\n\u203B\n When instructed to repeat the process X times, first resolve the process once, then repeat the process X more times, resulting in the process being completed X+1 times.',
    cardImage: require("./images/PickACard.webp"),
    set: "EVR",
  },
  {
    name: "Smashing Good Time",
    ruling:
      "\nThe cost of an item is located at the top right corner of the card.\n\u203B\n You choose the item you want to destroy at the time the trigger resolves. There is no window of priority between choosing the item and it being destroyed.\n\u203B\n This will only affect the next attack that hits. If an attack doesn’t hit, it does not use up this effect and a later attack that hits this turn will trigger the effect.",
    cardImage: require("./images/SmashingGoodTime.webp"),
    set: "EVR",
  },
  {
    name: "Even Bigger Than That",
    ruling:
      "\nPhysical damage ({p} damage) is any damage done by an attack such as a weapon attack or attack action during the damage step of combat. Loss of life, arcane damage and untyped damage do not count as {p} damage.\n\u203B\n The “damage dealt this turn” is the total damage of all types dealt this turn including arcane damage, {p} damage, and untyped damage, but does not include loss of life effects.",
    cardImage: require("./images/EvenBiggerThanThat.webp"),
    set: "EVR",
  },
  {
    name: "Amulet of Assertiveness",
    ruling:
      "\nAmulet of Assertiveness’ activated ability is an attack reaction. You may activate it during the reaction window when you are the attacking hero.\n\u203B\n An attack is considered to have hit if it deals damage during the damage step of combat.\n\u203B\n You cannot defend with Amulet of Assertiveness as it has no defense property. (This is different than if it had a defense value of 0.)\n\u203B\n If the banished card is not played during the turn it is still banished and will remain banished indefinitely.\n\u203B\n The ability will still resolve even if you have less than 4 cards in your hand on resolution of the activated layer.",
    cardImage: require("./images/AmuletOfAssertiveness.webp"),
    set: "EVR",
  },
  {
    name: "Amulet of Echoes",
    ruling:
      "\nAmulet of Echoes checks only for the same name. Cards with different color strips still count as cards with the same name.\n\u203B\n The targeted hero can respond to the activation of Amulet of Echoes and play cards from their hand before they must discard.\n\u203B\n You cannot defend with Amulet of Echoes as it has no defense property. (This is different than if it had a defense value of 0.)\n\u203B\n You can target any player, including yourself.",
    cardImage: require("./images/AmuletOfEchoes.webp"),
    set: "EVR",
  },
  {
    name: "Amulet of Havencall",
    ruling:
      "\nAmulet of Havencall’s activated ability is a defence reaction. You can only activate Amulet of Havencall during the reaction window when you are the defending hero.\n\u203B\n You cannot defend with Amulet of Havencall as it has no defense property. (This is different than if it had a defense value of 0.)\n\u203B\n You can fail to find Rally the Rearguard in your deck. Even if your deck does not contain a Rally the Rearguard, or it contains a Rally the Rearguard but you fail to find it, you must still shuffle your deck.\n\u203B\n Adding Rally the Rearguard as a defending card to the chain link is considered defending.\n\u203B\n “This chain link” refers to the current chain link of the combat chain.",
    cardImage: require("./images/AmuletOfHavencall.webp"),
    set: "EVR",
  },
  {
    name: "Amulet of Ignition",
    ruling:
      "\nAmulet of Ignition affects the next activation once. The same ability used again will not have the same cost reduction from Amulet of Ignition.\n\u203B\n You cannot defend with Amulet of Ignition as it has no defense property. (This is different than if it had a defense value of 0.)",
    cardImage: require("./images/AmuletOfIgnition.webp"),
    set: "EVR",
  },
  {
    name: "Amulet of Intervention",
    ruling:
      "\nYou cannot defend with Amulet of Intervention as it has no defense property. (This is different than if it had a defense value of 0.)\n\u203B\n This prevents all types of damage including damage from attacks, arcane damage and damage. This does not prevent loss of life.\n\u203B\n If your {h} were to increase after the activation of Amulet of Intervention the activated layer and its effect would still resolve.\n\u203B\n An attack or action card is considered to have ‘targeted’ your hero when the card is played, and ability is activated, or a triggered layer is added to the stack, announcing the target.\n\u203B\n The source would deal damage to you if the resolution of that source as a layer on the stack would produce an effect that deals damage to your hero; or if the current chain link would deal damage, during the damage step of combat (taking into account the current defending cards), to your hero. Replacement effects, including prevention effects, are not considered for this condition to be met.",
    cardImage: require("./images/AmuletOfIntervention.webp"),
    set: "EVR",
  },
  {
    name: "Amulet of Oblation",
    ruling:
      "\nYou cannot defend with Amulet of Oblation as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n You can target attack action cards that have been added as defending cards on the combat chain.\n\u203B\n You can target cards you do not own or control.",
    cardImage: require("./images/AmuletOfOblation.webp"),
    set: "EVR",
  },
  {
    name: "Clarity Potion",
    ruling:
      "\nYou cannot defend with Clarity Potion as it has no defense value. (This is different than if the defense value was 0.)",
    cardImage: require("./images/ClarityPotion.webp"),
    set: "EVR",
  },
  {
    name: "Healing Potion",
    ruling:
      "\nYou cannot defend with Healing Potion as it has no defense value. (This is different than if the defense value was 0.)",
    cardImage: require("./images/HealingPotion.webp"),
    set: "EVR",
  },
  {
    name: "Potion of Seeing",
    ruling:
      "\nYou cannot defend with Potion of Seeing as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n Looking at cards is not revealing those cards for the purposes of triggered effects.\n\u203B\n You may target yourself, in which case the effect essentially does nothing.",
    cardImage: require("./images/PotionOfSeeing.webp"),
    set: "EVR",
  },
  {
    name: "Potion of Déjà Vu",
    ruling:
      "\nYou cannot defend with Potion of Déjà Vu as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n You can choose the order the cards are put on the top of your deck.\n\u203B\n The order of the cards are not known to your opponents. (The actual cards are, just not the order)\n\u203B\n The effect is mandatory. You must put all cards in your pitch zone if you activate this ability.",
    cardImage: require("./images/PotionOfDejaVu.webp"),
    set: "EVR",
  },
  {
    name: "Potion of Ironhide",
    ruling:
      "\nYou cannot defend with Potion of Ironhide as it has no defense value. (This is different than if the defense value was 0.)",
    cardImage: require("./images/PotionOfIronhide.webp"),
    set: "EVR",
  },
  {
    name: "Potion of Luck",
    ruling:
      "\nou cannot defend with Potion of Luck as it has no defense value. (This is different than if the defense value was 0.)",
    cardImage: require("./images/PotionOfLuck.webp"),
    set: "EVR",
  },
  {
    name: "Talisman of Balance",
    ruling:
      "\nYou cannot defend with Talisman of Balance as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n This is not a “may“ effect. If you have less cards in your arsenal than an opposing hero, you must destroy Talisman of Balance and resolve its ability.",
    cardImage: require("./images/TalismanOfBalance.webp"),
    set: "EVR",
  },
  {
    name: "Talisman of Cremation",
    ruling:
      "\nYou cannot defend with Talisman of Cremation as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n This is not a “may“ effect. When you play a card from your banished zone, you must destroy Talisman of Cremation and choose a card name.",
    cardImage: require("./images/TalismanOfCremation.webp"),
    set: "EVR",
  },
  {
    name: "Talisman of Featherfoot",
    ruling:
      "\nYou cannot defend with Talisman of Featherfoot as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n This is not a “may“ effect. When an attack you control gains +1{p}, you must destroy Talisman of Featherwing.\n\u203B\n An object is considered to have gained +1{p} if it’s power increases by 1, from one game state to another.",
    cardImage: require("./images/TalismanOfFeatherfoot.webp"),
    set: "EVR",
  },
  {
    name: "Talisman of Recompense",
    ruling:
      "\nYou cannot defend with Talisman of Recompense as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n This is not a “may“ effect. If you would gain exactly one {r}, you must destroy Talisman of Recompense.",
    cardImage: require("./images/TalismanOfRecompense.webp"),
    set: "EVR",
  },
  {
    name: "Talisman of Tithes",
    ruling:
      "\nYou cannot defend with Talisman of Tithes as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n This is not a “may“ effect. If an opponent would draw 1 or more cards during your action phase, you must destroy Talisman of Tithes.\n\u203B\n If an opponent would draw 0 cards due to the replacement effect, the draw event does not occur and effects that trigger when a player draws a card do not trigger.",
    cardImage: require("./images/TalismanOfTithes.webp"),
    set: "EVR",
  },
  {
    name: "Talisman of Warfare",
    ruling:
      "\nYou cannot defend with Talisman of Warfare as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n This is not a “may“ effect. If you have dealt exactly 2 damage to an opposing hero, you must destroy Talisman of Warfare and all cards in all arsenal zones.",
    cardImage: require("./images/TalismanOfWarfare.webp"),
    set: "EVR",
  },
  {
    name: "Silver",
    ruling:
      "\nSilver is a token and is not part of your deck.\n\u203B\n Silver stays in the arena as a permanent until destroyed.\nDestroying Silver is part of it’s cost.\n\u203B\n A Silver token may be represented by a small object such as a card sleeve or coin if a Silver token card is not available.",
    cardImage: require("./images/Silver.webp"),
    set: "EVR",
  },
  {
    name: "Blood of the Dracai",
    ruling:
      "\nThe cost reduction does not apply to the card it is being pitched to pay for, as its triggered effect only resolves after that card is played, not during it being played.\n\u203B\n The cost reduction does not apply to activated abilities, such as those on Draconic weapons or equipment.\n\u203B\n You can not play or defend with Blood of the Dracai because it does not have a cost or defense property.",
    cardImage: require("./images/BloodOfTheDracai.webp"),
    set: "UPR",
  },
  {
    name: "Dromai",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n You can create more than one Ash token each turn through the triggered effect.\n\u203B\n If you have not played a red card, then attack with a dragon, if you play a red card (instant) any time up until and including the resolution step of combat, the dragon will have go again and you will gain an action point in the link step of combat.\n\u203B\n If an attacking dragon dies before the resolution step of combat (before the chain link resolves), you will not gain an action point from the go again.",
    cardImage: require("./images/Dromai.webp"),
    set: "UPR",
  },
  {
    name: "Storm of Sandikai",
    ruling:
      "\nThis weapon gives an attack ability to dragons you control. The dragons are the ones that actually attack.\n\u203B\n When a dragon (ally) attacks, your hero is not considered the attacking hero and you can not play attack reactions during the reaction step of combat.\n\u203B\n Attacking with a dragon (ally) and then playing an attack action card does not close the combat chain.\n\u203B\n Attacking with a dragon using this ability costs an action point and does not grant an action point, unless the dragon has go again.",
    cardImage: require("./images/StormOfSandikai.webp"),
    set: "UPR",
  },
  {
    name: "Silken Form",
    ruling:
      "\nYou can activate the ability of Silken Form on the same turn Quell is used to prevent damage, as the delayed triggered effect of Quell does not destroy Silken Form until the end phase.\n\u203B\n You can not activate the ability of Silken Form (and destroy it) without a target ash.\n\u203B\n Silken Form is destroyed as part of the cost of its ability, even if the target ceases to exist before the activated ability resolves.",
    cardImage: require("./images/SilkenForm.webp"),
    set: "UPR",
  },
  {
    name: "Burn Them All",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n If you attack with a dragon, then play Burn Them All, then attack with a second dragon, the second dragon attack will still trigger the effect of Burn Them All.\n\u203B\n The first triggered effect triggers when a dragon attacks (when the dragon is considered to have attacked), during the attack step of combat. It will still resolve even if the dragon ceases to exist (e.g. phantasm).\n\u203B\n You may choose not to pay the cost of banishing red cards from your graveyard. If you choose not to, it is destroyed.\n\u203B\n You can not resolve “part” of the effect of banishing red cards from your graveyard. You can not for example, only banish 1 card when there are 3 raze counters on Burn Them All.\n\u203B\n If you have 2 or more Burn Them All in the arena, each end phase trigger is resolved and paid for separately. Banishing cards for one Burn Them All, does not prevent another Burn Them All from being destroyed.",
    cardImage: require("./images/BurnThemAll.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Dracona Optimai // Dracona Optimai",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n “When this attacks” is a triggered effect that triggers when the dragon is considered to have attacked, during the attack step. It does not trigger if the combat chain closes in the layer step of combat. After it triggers, it will still resolve even if the dragon ceases to exist or the combat chain closes.\n\u203B\n If you have 2 or less cards in your deck you reveal the entire deck. You still deal damage equal to the number of red cards revealed this way.\n\u203B\n The cards are revealed before the hero or an ally they control is selected to be dealt damage.",
    cardImage: require("./images/DraconaOptimai.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Tomeltai // Tomeltai",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n “When this attacks” is a triggered effect that triggers when the dragon is considered to have attacked, during the attack step. It does not trigger if the combat chain closes in the layer step of combat. After it triggers, it will still resolve even if the dragon ceases to exist or the combat chain closes.\n\u203B\n If you only have 1 card your deck you reveal that card.\n\u203B\n Revealing cards is not optional, even if the hero does not control any equipment.\n\u203B\n If you do not reveal 1 or more red cards this way, do you do not put a -1{d} counter an equipment and you do not destroy an equipment with 0{d}.\n\u203B\n The cards are revealed before the equipment is selected and a -1{d} counter is put on it.\n\u203B\n You can put a -1{d} counter on an equipment that does not have a defense {d} property, but it will not be destroyed because it does not have 0{d}.",
    cardImage: require("./images/Tomeltai.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Dominia // Dominia",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n “When this attacks” is a triggered effect that triggers when the dragon is considered to have attacked, during the attack step. It does not trigger if the combat chain closes in the layer step of combat. After it triggers, it will still resolve even if the dragon ceases to exist or the combat chain closes.\n\u203B\n If the revealed card is not a red card, or if you have no cards in your deck to reveal, the rest of the triggered effect fails to resolve.\n\u203B\n Banishing a card",
    cardImage: require("./images/Dominia.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Azvolai // Azvolai",
    ruling:
      "\n“When this attacks” is a triggered effect that triggers when the dragon is considered to have attacked, during the attack step. It does not trigger if the combat chain closes in the layer step of combat. After it triggers, it will still resolve even if the dragon ceases to exist or the combat chain closes.",
    cardImage: require("./images/Azvolai.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Cromai // Cromai",
    ruling:
      "\n“When this attacks” is a triggered effect that triggers when the dragon is considered to have attacked, during the attack step. It does not trigger if the combat chain closes in the layer step of combat. After it triggers, it will still resolve even if the dragon ceases to exist or the combat chain closes.\n\u203B\n This triggered effect triggers when Cromai ceases to exist (such as when it flipped back to an invocation) or otherwise leaves the arena.\n\u203B\n This triggered effect only triggers once per turn. If Cromai attacks and then leaves the arena later in that turn (e.g. from phatasm), you would still only gain 1 action point in total.\n\u203B\n Gaining an action point from the triggered effect is independent of gaining an action point from go again. If Cromai also has go again, you would gain net 1 action point after attacking with it.",
    cardImage: require("./images/Cromai.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Kyloria // Kyloria",
    ruling:
      "\nHitting an ally (or anything other than a hero) with Kyloria does not trigger its effect.\n\u203B\n The triggered effect is not optional, if the hero you hit controls an item, you must gain control of an item.\n\u203B\n If the hero that was hit controls an item at the time Kyloria hits, but does not when the triggered effect resolves, you do not gain control of an item and therefore draw a card.\n\u203B\n When you gain control of an item, you retain control indefinitely until that item leaves the stack/arena or another player gains control of it from another effect.",
    cardImage: require("./images/Kyloria.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Miragai // Miragai",
    ruling:
      "\nA “dragon attack” is an attack (e.g. activated ability, attack action card) with the dragon sub-type. This does not apply to cards with “Dragon” in their name,\n\u203B\n The effect only applies to the first dragon you control that attacks each turn. If you have attacked with a dragon, then play Miragi, the next dragon you attack would not lose phantasm.\n\u203B\n Losing Phantasm this way does not prevent phantasm triggered-effects from resolving if the Phantasm has already triggered.",
    cardImage: require("./images/Miragai.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Nekria // Nekria",
    ruling:
      "\nNekria is considered to have dealt damage a damage event created by Nekria (such as an attack) causes a loss of life on a living object (e.g. a hero or ally). Nekria does not deal damage if its attack is fully defended.\n\u203B\n Nekria is considered to have been dealt damage if a damage event causes Nekria to lose life. This can be done with any type of damage (e.g. physical, arcane, untyped).\n\u203B\n Adding a -1{h} counter to Nekria, reduces its life total. If you deal 6 damage to full life Nekria, then add a -1{h} counter to it, it dies.\n\u203B\n -1{h} counters are not removed at the end of the turn when Allies life totals are reset. If Nekria has two -1{h} counters on it, its life total will be 5 when it resets at the end of the turn (7 base life - 2 from counters).\n\u203B\n Nekria’s triggered effect still triggers (and creates an Ash) even if the damage dealt kills it.",
    cardImage: require("./images/Nekria.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Ouvia // Ouvia",
    ruling:
      "\nThe triggered effect is not targeted. You do not need ash at the time you play Ouvia Invocation, only once the triggered effect of Ouvia resolves. This means you can create an ash between playing Ouvia and its triggered effect resolving, and then turn that ash into an Aether Ashwing.\n\u203B\n Players do not have priority during the start of turn, so they cannot respond to the triggered effect at the start of the turn.",
    cardImage: require("./images/Ouvia.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Themai // Themai",
    ruling:
      "\nThemai does not prevent opponents from defending, pitching, applying replacement effects (e.g. Arcane Barrier), or triggering and resolving triggered effects.\n\u203B\n Playing cards or activating abilities, involves all instant and defence reaction type cards and abilities.",
    cardImage: require("./images/Themai.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Vynserakai // Vynserakai",
    ruling:
      "\nHitting an ally (or anything other than a hero) with Vynserakai does not trigger its effect.\n\u203B\n The triggered effect creates a damage event that is seperate from the original hit. Vynserakai is considered to be the source of this damage.",
    cardImage: require("./images/Vynserakai.webp"),
    set: "UPR",
  },
  {
    name: "Invoke Yendurai // Yendurai",
    ruling:
      "\nIf Yendurai enters the arena from anything other than its invocation being resolved, it still enters the arena with an endurance counter.\n\u203B\n If Yendurai is dealt 4 or more damage, the endurance counter would be removed and the extra damage would still be dealt to Yendurai.\n\u203B\n If Yendurai is dealt 2 or less damage, the endurance counter would be removed and Yendurai does not take any damage. The remaining prevention amount does not apply to the next damage event.",
    cardImage: require("./images/Yendurai.webp"),
    set: "UPR",
  },
  {
    name: "Billowing Mirage",
    ruling:
      "\nThe transform effect is not targeted. You do not need ash at the time you play Billowing Mirage, only once the effect of Billowing Mirage resolves. This means you can create an ash between playing Billowing Mirage and its effect resolving, and then turn that ash into an Aether Ashwing.\n\u203B\n The transform effect is optional. You may choose to transform 0 ash you control.",
    cardImage: require("./images/BillowingMirage.webp"),
    set: "UPR",
  },
  {
    name: "Dunebreaker Cenipai",
    ruling:
      "\nDunebreaker Cenipai must be on the stack or in the arena (not as a defending card) for its effect to trigger from being destroyed. If it is anywhere else when it is destroyed (such as the arsenal) its effect does not trigger.",
    cardImage: require("./images/DunebreakerCenipai.webp"),
    set: "UPR",
  },
  {
    name: "Dustup",
    ruling:
      "\nThe transform effect is not targeted. You do not need ash at the time you play Dustup, only once the effect of Dustup resolves. This means you can create an ash between hitting with Dustup and its effect resolving, and then turn that ash into an Aether Ashwing.\n\u203B\n The transform effect is optional. You may choose to transform 0 ash you control.",
    cardImage: require("./images/Dustup.webp"),
    set: "UPR",
  },
  {
    name: "Embermaw Cenipai",
    ruling:
      "\nEmbermaw Cenipai must be on the stack or in the arena (not as a defending card) for its effect to trigger from being destroyed. If it is anywhere else when it is destroyed (such as the arsenal) its effect does not trigger.",
    cardImage: require("./images/EmbermawCenipai.webp"),
    set: "UPR",
  },
  {
    name: "Rake the Embers",
    ruling:
      "\nThe transform effect is not targeted. You do not need ash at the time you play Rake the Embers, only once Rake the Embers resolves. This means you can create an ash between playing Rake the Embers and it resolving, turning that ash into an Aether Ashwing.\n\u203B\n You can turn the Ash you’ve created from Rake the Embers into an Aether Ashwing.\n\u203B\n The transform effect is optional. You may choose to transform 0 ash you control.",
    cardImage: require("./images/RakeTheEmbers.webp"),
    set: "UPR",
  },
  {
    name: "Skittering Sands",
    ruling:
      "\nAether Ashwing gains the +3/2/1{p} until end of turn, not the ash.",
    cardImage: require("./images/SkitteringSands.webp"),
    set: "UPR",
  },
  {
    name: "Sand Cover",
    ruling:
      "\nWard X is not optional. If you control an ash with ward X and you would be dealt damage, the ash will be destroyed.",
    cardImage: require("./images/SandCover.webp"),
    set: "UPR",
  },
  {
    name: "Fai",
    ruling:
      "\nThe Phoenix Flame is taken from your presented deck. It is included in the minimum cards required in the deck at the start of the game. This means you could start a game with 59 cards in the deck zone for classic constructed format, or 39 in a blitz constructed format.\n\u203B\n A draconic attack becomes a chain link when it resolves as a layer on the stack and becomes attacking. This means going from the layer step of combat to the attack step of combat.\n\u203B\n You are still considered to control a (draconic) chain link, even if the attack is no longer on the combat chain. Last Information is used to determine the type of a chain link.\n\u203B\n Discounts to resource costs are applied after increases to resource costs. If an effect would increase the resource cost of Fai’s ability, the decreases would be applied last.\n\u203B\n Fai’s instant ability can be activated on the opponent’s turn, but you would not control any draconic chain links (most likely).",
    cardImage: require("./images/Fai.webp"),
    set: "UPR",
  },
  {
    name: "Searing Emberblade",
    ruling:
      "\nSearing Emberblade’s activated attacks are considered draconic.\n\u203B\n Searing Emberblade considers its own chain link for meeting its effect’s condition.",
    cardImage: require("./images/SearingEmberblade.webp"),
    set: "UPR",
  },
  {
    name: "Heat Wave",
    ruling:
      "\nYou control Phoenix Flame cards when they are on the stack or combat chain as attacks/chain links.\n\u203B\n This applies retroactively to Phoenix Flame cards on previous chain links, but does not retroactively apply the damage of those attacks.\n\u203B\n Heat Wave’s ability can be activated on the same turn Quell is used, as Quell will not destroy Heat Wave until the end of the turn.",
    cardImage: require("./images/HeatWave.webp"),
    set: "UPR",
  },
  {
    name: "Phoenix Form",
    ruling:
      "\nPhoenix Flame refers to a card with the name “Phoenix Flame”\n\u203B\n You control Phoenix Flame cards when they are on the stack or combat chain as attacks/chain links.\n\u203B\n If a Pheonix Flame card was a chain link on the combat chain but is no longer in the arena (e.g. Warmonger’s Recital), you are not considered to control that Phoenix Flame anymore.",
    cardImage: require("./images/PhoenixForm.webp"),
    set: "UPR",
  },
  {
    name: "Spreading Flames",
    ruling:
      "\nDraconic attacks include both attack action cards and activated attacks with the draconic talent.\n\u203B\n The base power of an attack is typically determined by its printed power value located at the bottom left of the card or token.\n\u203B\n A draconic chain link you control is a chain link on the combat chain created by you playing an attack action card or activating an attack ability with the talent “draconic”.\n\u203B\n Spreading Flames is considered a draconic chain link you control for the purposes of its own effect.\n\u203B\n You are still considered to control a (draconic) chain link, even if the attack is no longer on the combat chain. Last Information is used to determine the type of a chain link.",
    cardImage: require("./images/SpreadingFlames.webp"),
    set: "UPR",
  },
  {
    name: "Combustion Point",
    ruling:
      "\nYou choose the non-equipment defending card when Combustion Point resolves, not when it is played.\n\u203B\n Banishing a non-equipment defending card is optional.\n\u203B\n If a non-equipment defending card is banished, it no longer contributes its defense value to the total defense for damage calculation.",
    cardImage: require("./images/CombustionPoint.webp"),
    set: "UPR",
  },
  {
    name: "Engulfing Flamewave",
    ruling:
      "\nYou must banish the card if it is an attack action card with cost less than the number of draconic chain links you control. It is not an optional effect.\n\u203B\n If you banish a card and do not play it this turn, it remains banished.",
    cardImage: require("./images/EngulfingFlamewave.webp"),
    set: "UPR",
  },
  {
    name: "Mounting Anger",
    ruling:
      "\nBanishing a card with cost less than the number of Draconic chain links you control is optional.\n\u203B\n If you banish a card and do not play it this turn, it remains banished.\n\u203B\n A draconic chain link you control is a chain link on the combat chain created by you playing an attack action card or activating an attack ability with the talent “draconic”.\n\u203B\n Mounting Anger is considered a draconic chain link you control for the purposes of its own effect.\n\u203B\n You are still considered to control a (draconic) chain link, even if the attack is no longer on the combat chain. Last Information is used to determine the type of a chain link.",
    cardImage: require("./images/MountingAnger.webp"),
    set: "UPR",
  },
  {
    name: "Rise from the Ashes",
    ruling:
      "\nPhoenix Flame refers to a card with the name “Phoenix Flame”\n\u203B\n The return effect is optional.",
    cardImage: require("./images/RiseFromTheAshes.webp"),
    set: "UPR",
  },
  {
    name: "Brand with Cinderclaw",
    ruling:
      "\nAttacks include both attack action cards and activated attacks.\n\u203B\n The effect only applies to the next attack on the current combat chain. If the combat chain closes, the effect will not apply to any attack.",
    cardImage: require("./images/BrandWithCinderclaw.webp"),
    set: "UPR",
  },
  {
    name: "Cinderskin Devotion",
    ruling:
      "\nA draconic chain link you control is a chain link on the combat chain created by you playing an attack action card or activating an attack ability with the talent “draconic”.\n\u203B\n Cinderskin Devotion is considered a draconic chain link you control for the purposes of its own effect.\n\u203B\n You are still considered to control a (draconic) chain link, even if the attack is no longer on the combat chain. Last Information is used to determine the type of a chain link.",
    cardImage: require("./images/CinderskinDevotion.webp"),
    set: "UPR",
  },
  {
    name: "Lava Vein Loyalty",
    ruling:
      "\nA draconic chain link you control is a chain link on the combat chain created by you playing an attack action card or activating an attack ability with the talent “draconic”.\n\u203B\n Lava Vein Loyalty is considered a draconic chain link you control for the purposes of its own effect.\n\u203B\n You are still considered to control a (draconic) chain link, even if the attack is no longer on the combat chain. Last Information is used to determine the type of a chain link.",
    cardImage: require("./images/LavaVeinLoyalty.webp"),
    set: "UPR",
  },
  {
    name: "Rising Resentment",
    ruling:
      "\nBanishing a card with cost less than the number of Draconic chain links you control is optional.\n\u203B\n If you banish a card and do not play it this turn, it remains banished.\n\u203B\n A draconic chain link you control is a chain link on the combat chain created by you playing an attack action card or activating an attack ability with the talent “draconic”.\n\u203B\n Rising Resentment is considered a draconic chain link you control for the purposes of its own effect. This means you could banish a zero cost card and still play it for zero even if under an effect that increases costs by 1 (Frostbite, Channel Lake Frigid etc.).\n\u203B\n You are still considered to control a (draconic) chain link, even if the attack is no longer on the combat chain. Last Information is used to determine the type of a chain link.\n\u203B\n Discounts to resource costs are applied after increases to resource costs. If an effect would increase the resource cost of Fai’s ability, the decreases would be applied last.",
    cardImage: require("./images/RisingResentment.webp"),
    set: "UPR",
  },
  {
    name: "Searing Strike",
    ruling:
      "\nBanishing a card with cost less than the number of Draconic chain links you control is optional.\n\u203B\n If you banish a card and do not play it this turn, it remains banished.\n\u203B\n A draconic chain link you control is a chain link on the combat chain created by you playing an attack action card or activating an attack ability with the talent “draconic”.\n\u203B\n Soaring Strike is considered a draconic chain link you control for the purposes of its own effect.\n\u203B\n You are still considered to control a (draconic) chain link, even if the attack is no longer on the combat chain. Last Information is used to determine the type of a chain link.",
    cardImage: require("./images/SearingStrike.webp"),
    set: "UPR",
  },
  {
    name: "Flamescale Furnace",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n If you pitch a red card to activate Flamescale Furnace, it will be considered as a red card in the pitch when the activated ability resolves.",
    cardImage: require("./images/FlamescaleFurnace.webp"),
    set: "UPR",
  },
  {
    name: "Sash of Sandikai",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n You can not activate this card to pay for the first red card you play this turn. The card has to be considered played (and paid for) before Sash of Sandikai is activated.",
    cardImage: require("./images/SashOfSandikai.webp"),
    set: "UPR",
  },
  {
    name: "Thaw",
    ruling:
      "\nPlayers do not have priority during the start of turn phase.\n\u203B\n This triggered ability is functional while Thaw is in the graveyard and nowhere else.",
    cardImage: require("./images/Thaw.webp"),
    set: "UPR",
  },
  {
    name: "Liquefy",
    ruling:
      "\nTo play Liquefy at chain link 4 or higher, there must already be 4 chain links on the combat chain before you play this.\n\u203B\n The triggered effect given by Liquefy is not targeted. The equipment is chosen at the time the triggered effect resolves.\n\u203B\n You can put a -1{d} counter on an equipment without a {d} property, but the effect will fail to destroy it (it has to have the {d} property to be destroyed).\n\u203B\n If an equipment would have less than 0{d}, it is considered to have 0{d}.",
    cardImage: require("./images/Liquefy.webp"),
    set: "UPR",
  },
  {
    name: "Uprising",
    ruling:
      "\nDraconic attacks include both attack action cards and activated attacks with the draconic talent.\n\u203B\n The combat chain closing has no affect on this effect as it is applied to attacks this turn, not restricted to a single combat chain.",
    cardImage: require("./images/Uprising.webp"),
    set: "UPR",
  },
  {
    name: "Tome of Firebrand",
    ruling:
      "\nA draconic chain link you control is a chain link on the combat chain created by you playing an attack action card or activating an attack ability with the talent “draconic”.\n\u203B\n You are still considered to control a (draconic) chain link, even if the attack is no longer on the combat chain. Last Information is used to determine the type of a chain link.",
    cardImage: require("./images/TomeOfFirebrand.webp"),
    set: "UPR",
  },
  {
    name: "Red Hot",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n To play Red Hot as chain link 4 or higher, there must already be 3 chain links on the combat chain before you play this.\n\u203B\n If you have less than X cards in your deck, you reveal all the cards in your deck.\n\u203B\n The damage dealt by Red Hot’s triggered effect is untyped and can not be prevented by anything other than prevention effects that reduce untyped damage.\n\u203B\n You may select any target that can be dealt damage as the target of the damage, including both allies and heroes.",
    cardImage: require("./images/RedHot.webp"),
    set: "UPR",
  },
  {
    name: "Rise Up",
    ruling:
      "\nTo play Rise Up as chain link 4 or higher, there must already be 3 chain links on the combat chain before you play this.\n\u203B\n Phoenix Flame refers to a card with the name “Phoenix Flame”\n\u203B\n You control Phoenix Flame cards when they are on the stack or combat chain as attacks/chain links.\n\u203B\n If a Pheonix Flame card was a chain link on the combat chain but is no longer in the arena (e.g. Warmonger’s Recital), you are not considered to control that Phoenix Flame anymore.",
    cardImage: require("./images/RiseUp.webp"),
    set: "UPR",
  },
  {
    name: "Blaze Headlong",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n As long as you play a red card before the link step of combat, Blaze Headlong will have go again and grant you an action point.",
    cardImage: require("./images/BlazeHeadlong.webp"),
    set: "UPR",
  },
  {
    name: "Breaking Point",
    ruling:
      "\nTo play Breaking Point as chain link 4 or higher, there must already be 3 chain links on the combat chain before you play this.",
    cardImage: require("./images/BreakingPoint.webp"),
    set: "UPR",
  },
  {
    name: "Burn Away",
    ruling:
      "\nPhoenix Flame refers to a card with the name “Phoenix Flame”\n\u203B\n The additional cost is optional and does not have to be paid.\n\u203B\n The cost is part of playing the card and can not be responded to. You can not play cards or activate abilities until after the card has been played and paid for.\n\u203B\n Burn Away gains the +2{p} and go again as a triggered effect after the card has been played.",
    cardImage: require("./images/BurnAway.webp"),
    set: "UPR",
  },
  {
    name: "Flameborn Retribution",
    ruling:
      "\nThe triggered effect triggers and resolves during the defend step of combat.\n\u203B\n You must have taken damage at the time you defend with Flameborn Retribution to meet the condition. If you have not taken damage, then you defend an attack with Flameborn Retribution and are dealt damage from the attack, you would not retroactively meet the condition and be granted the effect.\n\u203B\n Phoenix Flame refers to a card with the name “Phoenix Flame”",
    cardImage: require("./images/FlamebornRetribution.webp"),
    set: "UPR",
  },
  {
    name: "Flamecall Awakening",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n Phoenix Flame refers to a card with the name “Phoenix Flame”\n\u203B\n Searching your deck (and the rest of the triggered effect) is optional.\n\u203B\n You may search your deck for a Phoenix Flame and intentionally or not fail to find one. In which case you must still shuffle your deck.",
    cardImage: require("./images/FlamecallAwakening.webp"),
    set: "UPR",
  },
  {
    name: "Inflame",
    ruling:
      "\nA red card is a card with a red color bar (usually at the top of the card).\n\u203B\n Phoenix Flame refers to a card with the name “Phoenix Flame”.",
    cardImage: require("./images/Inflame.webp"),
    set: "UPR",
  },
  {
    name: "Lava Burst",
    ruling:
      "\nTo play Lava Burst as chain link 4 or higher, there must already be 3 chain links on the combat chain before you play this.",
    cardImage: require("./images/LavaBurst.webp"),
    set: "UPR",
  },
  {
    name: "Searing Touch",
    ruling:
      "\nTo play Searing Touch as chain link 4 or higher, there must already be 3 chain links on the combat chain before you play this.\n\u203B\n You may select any target that can be dealt damage as the target of the damage, including both allies and heroes.",
    cardImage: require("./images/SearingTouch.webp"),
    set: "UPR",
  },
  {
    name: "Stoke the Flames",
    ruling:
      "\nPhoenix Flame refers to a card with the name “Phoenix Flame”\n\u203B\n Returning a Phoenix Flame is an optional effect.\n\u203B\n If there are no Phoenix Flame in your graveyard, Stoke the Flames can not gain the go again from its effect.",
    cardImage: require("./images/StokeTheFlames.webp"),
    set: "UPR",
  },
  {
    name: "Phoenix Flame",
    ruling:
      "\nPhoenix Flame is considered a card, can be included in the deck, and counts towards the number of cards in that deck.\n\u203B\n In Uprising limited formats (sealed and draft), a player may include up to 3 Phoenix Flames in the card pool (and thus their deck) even if they did not pull them from a pack. A player can not add more than 3 Phoenix Flames to a limited format deck, even if they pulled more than 3 from their packs.\n\u203B\n A draconic chain link you control is a chain link on the combat chain created by you playing an attack action card or activating an attack ability with the talent “draconic”.\n\u203B\n Phoenix Flame is considered a draconic chain link you control for the purposes of its own effect.\n\u203B\n You are still considered to control a (draconic) chain link, even if the attack is no longer on the combat chain. Last Information is used to determine the type of a chain link.",
    cardImage: require("./images/PhoenixFlame.webp"),
    set: "UPR",
  },
  {
    name: "Iyslander",
    ruling:
      "\nA blue color strip is a card that has a base pitch value of 3. The color strip is located at the top center of the card.\n\u203B\n 'Non-attack' action cards played as an instant are still considered 'non-attack' action cards for the purposes of effects.\n\u203B\n You cannot gain an action point on an opponent's turn.\n\u203B\n Frostbite tokens affect cards before they are played. If you create a Frostbite in response to a player playing a card, Frostbite will not affect that card.\n\u203B\n Iyslander’s effect that creates a Frostbite token is a triggered effect that can be responded to.",
    cardImage: require("./images/IyslanderUPR.webp"),
    set: "UPR",
  },
  {
    name: "Encase",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.\n\u203B\n A player can still defend with frozen equipment they control.\n\u203B\n Static abilities on frozen equipment and heroes are still functional and generate effects, including triggered and replacement effects.",
    cardImage: require("./images/Encase.webp"),
    set: "UPR",
  },
  {
    name: "Freezing Point",
    ruling:
      "\nYou can only target heroes as the target for the arcane damage.\n\u203B\n The value of X is determined at the time Freezing Point resolves as a card on the stack.\n\u203B\n A frozen card in arsenal is not controlled by a hero and does not count towards the value of X.",
    cardImage: require("./images/FreezingPoint.webp"),
    set: "UPR",
  },
  {
    name: "Sigil of Permafrost",
    ruling:
      "\nThis is a triggered effect that triggers the next time you deal arcane damage (including a weapon activated ability), not whether the next card you play deals arcane damage.",
    cardImage: require("./images/SigilOfPermafrost.webp"),
    set: "UPR",
  },
  {
    name: "Ice Eternal",
    ruling:
      "\nXX means X + X, for the resource cost of the card. X defaults to 0 in all cases other than when Ice Eternal is played as a card on the stack.\n\u203B\n The value of X can be declared as 0, in which case the cost of Ice Eternal would be 0.\n\u203B\n The damage dealt by Ice Eternal is calculated based on the total number of Frostbites the hero controls not just the ones made by Ice Eternal.\n\u203B\n Frostbites do not affect the cost of paying for replacement effects to prevent arcane damage (such as arcane barrier).",
    cardImage: require("./images/IceEternal.webp"),
    set: "UPR",
  },
  {
    name: "Succumb to Winter",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.\n\u203B\n The conditional effect of Succumb to Winter is not dependent on damage. If it is fused, it destroys a frozen arsenal/ally even if it doesn’t deal damage.\n\u203B\n If Succumb to Winter is fused and targets a frozen ally, it deals damage to that ally before the effect attempts to destroy it.",
    cardImage: require("./images/SuccumbToWinter.webp"),
    set: "UPR",
  },
  {
    name: "Aether Icevein",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.\n\u203B\n If a player has no cards in hand but resources available, they can still choose to discard a card instead of paying resources.",
    cardImage: require("./images/AetherIcevein.webp"),
    set: "UPR",
  },
  {
    name: "Brain Freeze",
    ruling:
      "\nThe fuse effect of Brain Freeze is not optional. You must select a card if possible.\n\u203B\n Action cards include any card with the type “Action”.\n\u203B\n The opponent can not respond between revealing their hand and you selecting a card to put on top of their deck.",
    cardImage: require("./images/BrainFreeze.webp"),
    set: "UPR",
  },
  {
    name: "Icebind",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.\n\u203B\n A frozen card in arsenal cannot be played, even if it is a defense reaction.",
    cardImage: require("./images/Icebind.webp"),
    set: "UPR",
  },
  {
    name: "Polar Cap",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.",
    cardImage: require("./images/PolarCap.webp"),
    set: "UPR",
  },
  {
    name: "Conduit of Frostburn",
    ruling:
      "\nThis effect does not apply to activated abilities that deal arcane damage (such as Waning Moon)\n\u203B\n If there are multiple frozen cards in their arsenal, you choose which one to destroy. Players may not shuffle or change the positioning of facedown arsenal cards. Players must be able to tell which one was more recent if there are multiple face-down arsenal cards.\n\u203B\n Conduit of Frostburn’s ability can be activated on the same turn Quell is used, as Quell will not destroy Conduit of Frostburn until the end of the turn.",
    cardImage: require("./images/ConduitOfFrostburn.webp"),
    set: "UPR",
  },
  {
    name: "Frost Hex",
    ruling:
      "\nIf you have multiple Frostbites in play, each Frostbite triggers (for each Frost Hex) as a separate instance of arcane damage and can all be prevented with a single instance of arcane barrier 1.\n\u203B\n Even if the Frostbite tokens are destroyed first during the end phase, the triggered effects still resolve and deal arcane damage, as triggered effects are independent of their source once they’ve been triggered.",
    cardImage: require("./images/FrostHex.webp"),
    set: "UPR",
  },
  {
    name: "Aether Hail",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.",
    cardImage: require("./images/AetherHail.webp"),
    set: "UPR",
  },
  {
    name: "Frosting",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.",
    cardImage: require("./images/Frosting.webp"),
    set: "UPR",
  },
  {
    name: "Ice Bolt",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.",
    cardImage: require("./images/IceBolt.webp"),
    set: "UPR",
  },
  {
    name: "Coronet Peak",
    ruling:
      "\nThe activated ability does not have go again and requires an action point to be activated.\n\u203B\n If the target hero has no cards in hand they can still elect to discard a card instead of paying {r}.",
    cardImage: require("./images/CoronetPeak.webp"),
    set: "UPR",
  },
  {
    name: "Glacial Horns",
    ruling:
      "\nThe hero, the card in their arsenal, and the ally they control are chosen on the resolution of the activated ability.\n\u203B\n The freeze effect is optional. You may choose to freeze 0 cards and/or allies of the chosen hero.",
    cardImage: require("./images/GlacialHorns.webp"),
    set: "UPR",
  },
  {
    name: "Channel the Bleak Expanse",
    ruling:
      "\nIf a card/ability has an additional cost that requires a player to reveal cards, the player can not play that card. If the cost is optional, the player can only play/activate that card/ability without that additional cost.\n\u203B\n If an effect instructs you to reveal a card, you do not reveal any cards and you continue as though there were no cards to reveal in the first place.\n\u203B\n If an effect instructs you to draw a card, you do not draw the card and you continue as though there were no cards to draw in the first place.\n\u203B\n If an effect instructs you to search for a card, you do not search for that card and you continue as though the search failed to find the card you were looking for.\n\u203B\n Kyloria still can’t draw cards for its owner even though it’s from an ally, it is still the hero who draws the card.\n\u203B\n Channel Bleak Expanse affects all heroes, not just opponents.\n\u203B\n Channel Bleak Expanse affects the effects of all cards and tokens and their abilities.",
    cardImage: require("./images/ChannelTheBleakExpanse.webp"),
    set: "UPR",
  },
  {
    name: "Hypothermia",
    ruling:
      "\nAttacks that just have “Go again” without being conditional, or granted by a triggered effect or otherwise, are unaffected and retain their “go again” ability. (e.g. Head Jab does not lose Go again)\n\u203B\n Hypothermia retroactively removes “go again” from attacks that have gained it from an effect. It does not retroactively remove go again from attacks that have it as a base ability (e.g. Head Jab)\n\u203B\n If Hypothermia is played after an attack gains go again, but before the link step of combat, the attack (retroactively) does not gain go again and does not give an action point during the link step.\n\u203B\n Cromai still gives you the action point as long as the once per turn triggered effect has not been triggered yet.",
    cardImage: require("./images/Hypothermia.webp"),
    set: "UPR",
  },
  {
    name: "Insidious Chill",
    ruling:
      "\nThe triggered effect of Insidious Chill resolves before the card with Ice fusion resolves.\n\u203B\n If the target hero has no cards in hand they can still elect to discard a card instead of paying {r}{r}.\n\u203B\n This is not a optional effect. Insidious Chill triggers each time you Ice fuse.\n\u203B\n This is not a once per turn effect. Insidious Chill triggers each time you Ice fuse, even in a single turn.\n\u203B\n Insidious Chill is destroyed as soon as it does not have any frost counters on it. You cannot respond to your own Ice Fuse with another Ice Fuse to gain the Insidious Chill effect if it does not have any frost counters left.",
    cardImage: require("./images/InsidiousChill.webp"),
    set: "UPR",
  },
  {
    name: "Isenhowl Weathervane",
    ruling:
      "\nThe triggered effect of Isenhowl Weathervane resolves before the card with Ice fusion resolves.",
    cardImage: require("./images/IsenhowlWeathervane.webp"),
    set: "UPR",
  },
  {
    name: "Cold Snap",
    ruling:
      "\nIf the target hero has no cards in arsenal arsenal and does not control an ally they can still elect to not pay resources.\n\u203B\n The target hero chooses if they are paying the resources first. You do not choose what you are freezing until they choose not to pay.",
    cardImage: require("./images/ColdSnap.webp"),
    set: "UPR",
  },
  {
    name: "Ghostly Touch",
    ruling:
      "\nThe triggered effect is not once per turn, you put a haunt counter on whenever an illusionist attack you control is destroyed by phantasm, even if it happens more than once per turn.\n\u203B\n The effect also triggers when an ally you control is attacking and is destroyed by phantasm.\n\u203B\n You cannot remove a haunt counter if there are none on the card.\n\u203B\n The activated ability has go again, but the attack does not.\n\u203B\n When Ghostly Touch becomes an illusionist ally with phantasm, it loses all other properties until the end of the turn. It is no longer called Ghostly Touch, does not have the types Illusionist Equipment Arms, does not have 0{d}, and does not have its card text. As such it does not trigger when an attack you control is destroyed by phantasm.",
    cardImage: require("./images/GhostlyTouch.webp"),
    set: "UPR",
  },
  {
    name: "Silent Stilettos",
    ruling:
      "\nIf an attacking ally is removed from the arena by its life total being reduced to zero or an effect that destroys it, it counts as dying.\n\u203B\n An ally is considered to be attacking when its attack ability resolves as a layer on the stack and you move from the layer step of combat to the attack step of combat.",
    cardImage: require("./images/SilentStilettos.webp"),
    set: "UPR",
  },
  {
    name: "Frightmare",
    ruling:
      "\nYou cannot play this card unless an Illusionist attack action card you control has been destroyed by phantasm this turn.\n\u203B\n You cannot defend with Frightmare as it does not have the defense property.",
    cardImage: require("./images/Frightmare.webp"),
    set: "UPR",
  },
  {
    name: "Semblance",
    ruling:
      "\nIf phantasm has already been triggered, the triggered-layers it has put onto the stack cease to exist. After Semblance has resolved, the attack can not be destroyed by its own phantasm effect.\n\u203B\n Semblance can target any Illusionist attack including allies, weapon attacks, attack action cards and even Illusionist attacks that do not have phantasm.",
    cardImage: require("./images/Semblance.webp"),
    set: "UPR",
  },
  {
    name: "Transmorgify",
    ruling:
      "\nThe base {p} of a card is typically determined by the printed {p} on the bottom left of a card. This effect overrides and sets the base power of a card, before any other modifications to the base power apply.\n\u203B\n The attack action card affected retains it’s other supertyes (classes and talents)",
    cardImage: require("./images/Transmorgify.webp"),
    set: "UPR",
  },
  {
    name: "Tiger Stripe Shuko",
    ruling:
      "\nIf a prevention effect tries to prevent damage while Tiger Stripe Shuko would stop damage from being prevented, each replacement effect will still try to do everything else other than preventing that damage. E.g. a card with Ward would still be destroyed.\n\u203B\n Players can still attempt to prevent damage (apply optional prevention effects) even when the damage cannot be prevented.\n\u203B\n An ongoing-prevention effect does not have its prevention amount reduced when the effect does not actually prevent any amount of damage.\n\u203B\n The base power of a card is determined by the printed power which is typically located at the bottom left of the card.\n\u203B\n Tiger Stripe Shuko counts the attacks played in a turn and not number of chain links. If the combat chain has been broken, but a 2 base {p} attack action card has been played, the second one will still gain the effect from Tiget Stripe Shuko.",
    cardImage: require("./images/TigerStripeShuko.webp"),
    set: "UPR",
  },
  {
    name: "Tide Flippers",
    ruling:
      "\nThe base power of a card is determined by the printed power which is typically located at the bottom left of the card.",
    cardImage: require("./images/TideFlippers.webp"),
    set: "UPR",
  },
  {
    name: "Double Strike",
    ruling:
      "\nWhen Double Strike leaves the combat chain this way, its chain link remains and is still considered there for the purposes of abilities and effects like Rupture.\n\u203B\n You still control the chain link, but do not control the card when Double Strike leaves the combat chain.\n\u203B\n The chain link resolves immediately after the damage step of combat.\n\u203B\n When Double Strike is put into the banished zone, it becomes a new object separate to its previous existence. Effects that applied to its previous existence do not continue to apply to the card, including when it is played from the banished zone.\n\u203B\n When Double Strike is put into the banished zone this way, it only loses it the triggered ability; it retains the Go again ability (for the second time you play it).",
    cardImage: require("./images/DoubleStrike.webp"),
    set: "UPR",
  },
  {
    name: "Take the Tempo",
    ruling:
      "\nTake the Tempo is considered as a hit this combat chain for the purposes of its own effect.\n\u203B\n The condition looks at hit events on the current combat chain. The hits do not have to be in a row, but they must all be on the same combat chain.\n\u203B\n The card banished this way can be played until the end of your NEXT turn, not just the current turn.",
    cardImage: require("./images/TakeTheTempo.webp"),
    set: "UPR",
  },
  {
    name: "Waning Moon",
    ruling:
      "\nThe non-attack action card needs to have been played, not resolved, before Waning Moon can be activated.\n\u203B\n If it is the opponents turn, you can not choose to deal 2 damage instead.\nYou may target your own hero.",
    cardImage: require("./images/WaningMoon.webp"),
    set: "UPR",
  },
  {
    name: "Alluvion Constellas",
    ruling:
      "\nYou may prevent arcane damage you are deal to yourself using the arcane barrier on Alluvion Constellas.\n\u203B\n If Alluvion Constellas has 4 counters on it, its ability will still trigger, the condition of less than 4 counters is checked on the resolution of the trigger on the stack. This means you can activate Alluvion Constellas after it has triggered, but before that trigger resolves in order to remove counters.\n\u203B\n You may prevent multiple events of arcane damage over the course of a turn, however only the first time would put a counter on this.\n\u203B\n You must remove 2 counters to pay the cost of activating Alluvion Constellas. If you don’t have 2 counters on it, it can not be activated.",
    cardImage: require("./images/AlluvionConstellas.webp"),
    set: "UPR",
  },
  {
    name: "Tome of Duplicity",
    ruling:
      "\nThe base {p} of a card is typically determined by the printed {p} on the bottom left of a card. This effect overrides and sets the base power of a card, before any other modifications to the base power apply.\n\u203B\n The attack action card affected retains it’s other supertyes (classes and talents)",
    cardImage: require("./images/TomeOfDuplicity.webp"),
    set: "UPR",
  },
  {
    name: "Rewind",
    ruling:
      "\nYou can only target a 'non-attack' action card that is unresolved on the stack.\n\u203B\n You may target your own non-attack action card\n\u203B\n If the card is returned to hand, its costs will need to be paid again if it is played again.\n\u203B\n When the target card is put into the players hand, it becomes a new object separate to its previous existence. Effects that applied to its previous existence do not continue to apply to the card, including cost reduction effects.",
    cardImage: require("./images/Rewind.webp"),
    set: "UPR",
  },
  {
    name: "Dampen",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.\n\u203B\n Dampen’s prevention effect is an ongoing-prevention effect, where any remaining prevention amount will apply to the next arcane damage event that turn.",
    cardImage: require("./images/Dampen.webp"),
    set: "UPR",
  },
  {
    name: "Aether Dart",
    ruling:
      "\nYou may select any target that can be dealt damage as the target of the arcane damage, including both allies and heroes.",
    cardImage: require("./images/AetherDart.webp"),
    set: "UPR",
  },
  {
    name: "Read the Ripples",
    ruling:
      "\nThe “opt 1” is performed in its entirety before the next effect. You must look at the top card, then put it to the top or bottom before you repeat the process for the next opt 1 effect.\n\u203B\n You draw the card at the beginning of the end phase. This is before you arsenal a card and draw up to your intellect. You may arsenal the card you draw if you do not already have a card in arsenal.",
    cardImage: require("./images/ReadTheRipples.webp"),
    set: "UPR",
  },
  {
    name: "Singe",
    ruling:
      "\nEffects that modify arcane damage (e.g. Crucible of Aetherweave) modifies the damage dealt to all targets by Singe.\n\u203B\n The ally targets are optional. You may choose to deal damage to 0 allies the hero controls.",
    cardImage: require("./images/Singe.webp"),
    set: "UPR",
  },
  {
    name: "Crown of Providence",
    ruling:
      "\nIf you control no arsenal or have no cards in hand and the effect fails, you do not draw a card.\n\u203B\n The triggered effect is optional. You do not have to put a card from your hand or arsenal to the bottom of your deck.",
    cardImage: require("./images/CrownOfProvidence.webp"),
    set: "UPR",
  },
  {
    name: "Helio's Mitre",
    ruling:
      "\nHelio's Mitre is considered a card, can be included in a player’s registered deck, and counts towards the number of cards in that registered deck.\n\u203B\n In Uprising limited formats (sealed and draft), a player may include up to 1 Helio's Mitre in the card pool (and start with it in play) even if they did not pull it from a pack.\n\u203B\n Helio's Mitre’s ability can be activated any number of times in a turn (as long as the cost can be paid).\n\u203B\n The source of damage must be chosen at the time the activated ability resolves. The source can not be changed after the activated ability resolves.",
    cardImage: require("./images/HeliosMitre.webp"),
    set: "UPR",
  },
  {
    name: "Erase Face",
    ruling:
      "\nErase Face affects all cards the player owns, including cards in the arena, hand, arsenal, deck, pitch zone, banished zone, graveyard, and even cards outside the game.\n\u203B\n Erase Face does not prevent a card or token from gaining class and talent types through other effects.",
    cardImage: require("./images/EraseFace.webp"),
    set: "UPR",
  },
  {
    name: "Vipox",
    ruling:
      "\nThe number of cards is determined at the time the triggered effect resolves.\n\u203B\n The loss of life cannot be prevented by prevention effects.",
    cardImage: require("./images/Vipox.webp"),
    set: "UPR",
  },
  {
    name: "That All You Got?",
    ruling:
      "\nThe power of the card is checked at the time the combat chain closes. If the power was increased after this is played but before combat chain closes to be over 2 power, That All You Got? would not draw a card.",
    cardImage: require("./images/ThatAllYouGot.webp"),
    set: "UPR",
  },
  {
    name: "Fog Down",
    ruling:
      "\nFog Down affects all heroes, not just opposing heroes.\n\u203B\n If Fog of War gained go again, it would lose go again from its own effect.\n\u203B\n Fog Down retroactively affects ‘non-attack’ action cards that have already gained go again.",
    cardImage: require("./images/FogDown.webp"),
    set: "UPR",
  },
  {
    name: "Flex",
    ruling:
      "\nIf Flex defends a phantasm card and it’s {p} is increased to 6 or more, it will destroy the phantasm attack.",
    cardImage: require("./images/Flex.webp"),
    set: "UPR",
  },
  {
    name: "Fyendal's Fighting Spirit",
    ruling:
      "\nFyendal's Fighting Spirit checks if you are lower life at the time you defend, you have not taken damage from the attack yet as damage calculation comes after.",
    cardImage: require("./images/FyendalsFightingSpirit.webp"),
    set: "UPR",
  },
  {
    name: "Sift",
    ruling:
      "\nThis effect is optional. You may choose to put 0 cards to the bottom of your deck. If you don’t draw any cards.",
    cardImage: require("./images/Sift.webp"),
    set: "UPR",
  },
  {
    name: "Strategic Planning",
    ruling:
      "\nYou draw the card at the beginning of the end phase. This is before you arsenal a card and draw up to your intellect. You may arsenal the card you draw if you do not already have a card in arsenal.\n\u203B\n You can choose an opponent’s card in their graveyard.",
    cardImage: require("./images/StrategicPlanning.webp"),
    set: "UPR",
  },
  {
    name: "Trade In",
    ruling:
      "\nThe discard effect is optional. You may choose not to do it. If you don’t you do not draw a card.",
    cardImage: require("./images/TradeIn.webp"),
    set: "UPR",
  },
  {
    name: "Oasis Respite",
    ruling:
      "\nOasis Respite’s prevention effect is an ongoing-prevention effect, where any remaining prevention amount will apply to the next damage event that turn.\n\u203B\n You do not have to target your own hero.\n\u203B\n The life gain is optional.",
    cardImage: require("./images/OasisRespite.webp"),
    set: "UPR",
  },
  {
    name: "Battleworn",
    ruling:
      "\nWhen you defend with a card it remains on the combat chain until the chain closes, therefore you cannot defend with an equipment multiple times on the same combat chain.\n\u203B\n A -1{d} counter stays on the card until the card is destroyed or the game ends.\n\u203B\n If the defense of a card that is defending is below zero, calculate as if its defense is zero.",
    set: "KEYWORD",
  },
  {
    name: "Bladebreak",
    ruling:
      "\nWhen you defend with a card it remains on the combat chain until the chain closes, therefore you cannot defend with an equipment multiple times on the same combat chain.\n\u203B\n When this card is destroyed, it is sent to your graveyard.\n\u203B\n The ability goes on the stack when the combat chain closes.",
    set: "KEYWORD",
  },
  {
    name: "Combo",
    ruling:
      "\nThe last attack does not have to have hit.\n\u203B\n Only the name of the last attack matters, other variables such as the pitch cost does not matter.\n\u203B\n You may still play the attack even if combo isn’t active.",
    set: "KEYWORD",
  },
  {
    name: "Crush",
    ruling:
      "\nCrush only checks the amount of damage dealt to the hero. Prevented damage does not count.\n\u203B\n Crush is not optional, if the card does 4 or more damage, the effect will apply.",
    set: "KEYWORD",
  },
  {
    name: "Dominate",
    ruling:
      "\nYou can still block with equipment and defense reactions played from arsenal in addition to up to 1 card from hand.\n\u203B\n Playing a defense reaction from your hand counts towards the 1 card from your hand restriction. You cannot defend with a card in your hand then play a defense reaction from your hand.",
    set: "KEYWORD",
  },
  {
    name: "Go again",
    ruling:
      "\nWhen an action with go again resolves, its controller gains 1 action point.\n\u203B\n Multiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
    set: "KEYWORD",
  },
  {
    name: "Intimidate",
    ruling:
      "\nThe player who owns the banished card may look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.\n\u203B\n You may target yourself with this ability. However you will receive the card back into your hand before drawing up to your hand size.\n\u203B\n You may target a hero with no cards in hand.\n\u203B\n If there are other banished cards that aren’t from intimidate, it is encouraged to keep intimidated cards seperate from these cards.",
    set: "KEYWORD",
  },
  {
    name: "Reprise",
    ruling:
      "\nReprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\n\u203B\n Reprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\n\u203B\n Equipment and cards from arsenal that defend an attack do not turn on reprise.",
    set: "KEYWORD",
  },
  {
    name: "Arcane Barrier",
    ruling:
      "\nYou can have multiple instances of arcane barrier, for example Nullrune Hood, Nullrune Cloak, and Nullrune Gloves.\n\u203B\n Arcane barrier can be used every time you would be dealt arcane damage. It's not limited to once per turn.\n\u203B\n Each instance of arcane barrier you control can be used 1 time only, each time a source would deal arcane damage to you. For example if a source would deal 5 arcane damage to you, and you control two cards with arcane barrier 1, you will in total be able to prevent 2 arcane damage this source would deal to you.\n\u203B\n To fully prevent a card dealing 3 arcane damage, you would require 3 arcane barrier and 3 resources to prevent it. To fully prevent the arcane damage from 3 Runechant tokens (3 instances of 1 damage), you would require 1 arcane barrier and 3 resources to prevent it.\n\u203B\n A equipment with arcane barrier does not move to the chain when arcane barrier is used.\n\u203B\n You can prevent arcane damage you would deal to yourself.\n\u203B\n Players cannot respond to the prevention. Arcane barrier is a replacement effect, not an activated or triggered ability.\n\u203B\n To fully prevent a card dealing 3 arcane damage, you would require 3 arcane barrier and 3 resources to prevent it. To fully prevent 3 runechant tokens (3 instances of 1 damage from difference sources). You would require 1 arcane barrier and 3 resources to prevent it.\n\u203B\n Preventing arcane damage does not destroy the equipment with arcane barrier (unless otherwise specified).",
    set: "KEYWORD",
  },
  {
    name: "Opt",
    ruling:
      "\nThe number of cards you place on top and bottom of your deck is known to your opponent, the order of the cards are not.\n\u203B\n You may put all of the cards on the top or all of the cards on the bottom if you wish.",
    set: "KEYWORD",
  },
  {
    name: "Boost",
    ruling:
      "\nBoost is an additional cost. You choose if you want to boost or not at the time you play the card.\n\u203B\n You may only boost once per instance of boost.\n\u203B\n You are considered to have boosted regardless of whether the boost was successful or not.",
    set: "KEYWORD",
  },
  {
    name: "Reload",
    ruling:
      "\nYou may choose to put no cards from your hand to your arsenal.\n\u203B\n Your arsenal must be empty to put a card into your arsenal.",
    set: "KEYWORD",
  },
  {
    name: "Negate",
    ruling:
      "\nNegating an instant will prevent the card from resolving. The card will go to its owner’s graveyard and the effects of the card do not happen.\n\u203B\n You can only target a card on a layer of the chain.",
    set: "KEYWORD",
  },
  {
    name: "Temper",
    ruling:
      "\nIf the equipment gains a -1{d} in a different way other than defending, it would not be destroyed even if it has 0{d}.",
    set: "KEYWORD",
  },
  {
    name: "Spectra",
    ruling:
      "\nAttacks that target a card with spectra do not resolve. Any hit triggers or effects that card has such as go again do not resolve.\n\u203B\n An attack targeting a spectra card does not resolve. It will open a combat chain and become a chain link but is destroyed when the spectra becomes a target\n\u203B\n Additional costs and resource cards still need to be paid.\n\u203B\n Attacking a spectra is not considered attacking a hero.",
    set: "KEYWORD",
  },
  {
    name: "Phantasm",
    ruling:
      "\nIf an attack action is destroyed, it does not resolve. Hit triggers and effects that require the action resolving such as go again do not resolve.\n\u203B\n Both players have priority during the defending step. Note: This is a new rule introduced with the release of Monarch.\n\u203B\n When an attack with phantasm is defended by a 6{p}+ non-Illusionist attack action, a trigger to destroy the attack is put on the chain. Players can respond to this. When it resolves it checks if the attack action still fulfills the requirements to destroy the attack.\n\u203B\n Phantasm only triggers when the game state changes from false to true. It does not trigger from true to true. (For example: if a defending card goes from 5{p} to 6{p} it will create a trigger, but a card going from 6{p} to 7{p} will not create another trigger.)",
    set: "KEYWORD",
  },
  {
    name: "Charge",
    ruling:
      "\nCharging is optional. You may play the card without charging.\n\u203B\n You may only charge up to one card unless otherwise specified.\n\u203B\n A card may not charge itself. (You cannot put the card you are playing, into your hero’s soul as a part of its own cost)\n\u203B\n The charged card is put face up under your hero.\n\u203B\n You are only considered to have charged if a card goes into your hero’s soul from a card with charge. Having a card go into your hero’s soul from another method is not the same.",
    set: "KEYWORD",
  },
  {
    name: "Blood Debt",
    ruling:
      "\nYou only lose life at the end phase. Players do not have priority during the end phase.\n\u203B\n If you have multiple cards with blood debt, you lose 1{h} for each instance of blood debt at the end of turn.\n\u203B\n Only face-up cards banished with blood debt counts and will lose you {h}. Face-down banished cards have no effects or stats.",
    set: "KEYWORD",
  },
  {
    name: "Spellvoid",
    ruling:
      "\nSpellvoid does not go on the chain as it is not a trigger. It is a replacement effect. There is no opportunity to respond after the decision to destroy the card and prevent that damage.\n\u203B\n Spellvoid is optional. You choose whether to use spellvoid or not at the time the arcane damage resolves.\n\u203B\n If a card has Spellvoid 2 but only prevents 1 arcane damage, there will not be a leftover prevention shield. Note: It can only defend arcane damage from a single source, Spellvoid 2 cannot prevent one arcane damage each from two different sources.\n\u203B\n If a card dealing arcane damage is fully prevented by spellvoid (Or in conjunction with other preventions) it would not be considered to have dealt arcane damage and would not trigger effects that rely on arcane damage being dealt.",
    set: "KEYWORD",
  },
  {
    name: "Fusion",
    ruling:
      "\nYou cannot reveal a card you are using to pitch to play the card. You pay resource costs before additional costs.\n\u203B\n You may still play the card without paying the additional cost of Fusion.\n\u203B\n You cannot reveal multiple cards to Fusion unless the card states you can (i.e a card with dual Fusion).\n\u203B\n You cannot reveal a card that does not fit the criteria i.e you cannot reveal an Ice card to a Lightning Fusion card.\n\u203B\n An Elemental card with Lightning Fusion is not a Lightning card/Element card. E.g you cannot fuse an Entwine Lightning with Entwine Lightning.\n\u203B\n Defending with a card is not the same as playing and therefore you cannot fuse while defending with a card with fusion. Note, defense reactions are played in order to defend, paying their cost to do so. You can fuse a defense reaction card that has Fusion.",
    set: "KEYWORD",
  },
  {
    name: "Channel",
    ruling:
      "\nCards with the keyword ‘Fusion’ are not classified as their respective element. E.g a card with Lightning Fusion is not considered to be a Lightning card. Therefore cannot be used to pay the cost of ‘Channel’.\n\u203B\n You choose the order of the cards you put on the bottom of your deck. The cards that are put to the bottom are open information to your opponent while the order of the cards are hidden information from your opponent.",
    set: "KEYWORD",
  },
  {
    name: "Essence",
    ruling:
      "\nAn Elemental Runeblade with essence of Earth and essence of Lightning can play with Generic cards, Elemental cards, Runeblade cards, Earth cards, Lightning cards and Elemental Runeblade cards. (Note: You cannot play with any card with the supertype Ice, as you do not have the supertype Ice or essence of Ice on your hero)\n\u203B\n Your hero must have the essence of Earth for you to play Earth cards but any Elemental hero can play Elemental cards with Earth Fusion. (You wouldn’t have any Earth cards to fuse it though)",
    set: "KEYWORD",
  },
  {
    name: "Heave",
    ruling:
      "\nHeave is a hidden triggered ability. The card must be be shown when the triggered effect is triggered for its effect to resolve.\n\u203B\n Heave triggers during the end phase of a turn. There is no priority in the phase to respond to Heave’s triggered layer.\n\u203B\n You cannot use heave from arsenal. Heave can only be used from hand.\n\u203B\n You do not need to play the card you heaved the following turn.\n\u203B\n If you decide to pay the cost, both the costs must be paid in full. You must pay the resource cost AND put the source card face up into an empty arsenal zone; you can not pay just one or the other.\n\u203B\n You cannot heave if you don’t have an empty arsenal zone.",
    set: "KEYWORD",
  },
  {
    name: "Affliction",
    ruling:
      "\nIf an object with subtype affliction enters the arena, it enters the arena under the control of an opposing hero to the player that owns the card.\n\u203B\n When the control of an object changes, it does not change the owner of an object.\n\u203B\n When an object would be sent to the graveyard, it is sent to the owner’s graveyard regardless of the current controller.",
    set: "KEYWORD",
  },
  {
    name: "Invocation",
    ruling:
      "\nIf a card with the subtype invocation resolves as a layer on the stack, it enters the arena flipped.\n\u203B\n The card face with the subtype invocation is considered the front-face for a double-faced card (DFC).\n\u203B\n When a DFC invocation is put into a zone other than the stack or the arena, it becomes a new object, and resets to using the front-face to determine its properties (e.g. when it is sent to the graveyard, a DFC will revert to being an invocation again)",
    set: "KEYWORD",
  },
  {
    name: "Quell",
    ruling:
      "\nQuell is a static ability that generates a fixed-prevention effect.\n\u203B\n The prevention effect is optional. When the effect is applied, the controller chooses whether to pay the amount. If they do, the prevention effect reduces the damage, and creates a delayed triggered-effect that destroys the source object at the beginning of the End Phase.\n\u203B\n If another prevention effect reduces a damage event to 0, the replacement condition is no longer met (damage would not be dealt), so Quell would not apply.\n\u203B\n The prevention amount applies to a single damage event. The leftover prevention amount does not apply to any future damage that would be dealt to your hero.\n\u203B\n If the damage prevention can not be applied due to an effect, the delayed triggered effect is still created as part of the replacement effect application and will still destroy the source at the beginning of the End Phase.",
    set: "KEYWORD",
  },
  {
    name: "Ward",
    ruling:
      "\nWard is a static ability that generates a fixed-prevention effect.\n\u203B\n The prevention effect is not optional. It applies whenever damage would be dealt to your hero.\n\u203B\n If another prevention effect reduces a damage event to 0, the replacement condition is no longer met (damage would not be dealt), so Ward would not apply.\n\u203B\n The prevention amount applies to a single damage event. The leftover prevention amount does not apply to any future damage that would be dealt to your hero.\n\u203B\n If the damage prevention can not be applied due to an effect, the object with Ward on it is still destroyed as part of the replacement effect application.",
    set: "KEYWORD",
  },
  {
    name: "Transform",
    ruling:
      "\nTransform is a discrete effect.\n\u203B\n To transform subject objects into a specified object, first create the specified object in the arena if it does not yet exist, then put the subjects under it.\n\u203B\n To transform objects into a token that does not exist yet, first create the token, then put the objects underneath it.\n\u203B\n To transform objects into an existing permanent, just put the objects underneath it.\n\u203B\n When used in conjunction with cards that flip (e.g. Invocations), the card is first flipped and becomes a permanent in the arena, then the transform will refer to that permanent as the specified object to transform into (the permanent to put cards under).\n\u203B\n The transform fails if there are no transform subjects, or if they can not be put under the specified object for whatever reason.",
    set: "KEYWORD",
  },
  {
    name: "Freeze",
    ruling:
      "\nFreeze is a continuous effect.\n\u203B\n An object under the effect of “freeze” is considered frozen.\n\u203B\n A frozen object can not be played and its activated abilities can not be activated until it is no longer frozen.\n\u203B\n It is recommended that frozen objects should be physically indicated by the use of a counter or token on the object, or by orienting the object in a way that clearly communicates that it is frozen.\n\u203B\n If the effect “unfreeze” applies to an object, that object is no longer frozen and the freeze effect ends.",
    set: "KEYWORD",
  },
  {
    name: "Construct",
    ruling:
      "\n If a card with the subtype construct resolves as a layer on the stack, it enters the arena flipped.\n\u203B\n The card face with the subtype construct is considered the front-face for a double-faced card (DFC).\n\u203B\n When a DFC construct is put into a zone other than the stack or the arena, it becomes a new object, and resets to using the front-face to determine its properties (e.g. when it is sent to the graveyard, a DFC will revert to being a construct again)",
    set: "KEYWORD",
  },
  {
    name: "Ephemeral",
    ruling:
      "\n Ephemeral is a static ability that generates a replacement effect.\n\u203B\n Ceasing to exist means that the object is removed from the game.\n\u203B\n If a card is removed from the game, it is not in any zone, and can no longer be interacted with. If the card was originally part of the player’s registered deck, it does not go into the player’s sideboard.",
    set: "KEYWORD",
  },
  {
    name: "Overpower",
    ruling:
      "\nOverpower is a static ability that generates a continuous effect.\n\u203B\n A player can not declare more than one defending action card against an attack with overpower.\n\u203B\n Overpower does not prevent additional action cards being added as defending cards through effects (e.g. Amulet of Havencall).",
    set: "KEYWORD",
  },
  {
    name: "Piercing X",
    ruling:
      "\nPiercing X is a static ability that generates a continuous effect.\n\u203B\n If an attack with Piercing is defended by multiple equipment, it does not gain +X{p} for each defending equipment.\n\u203B\n If an attack has multiple instances of Piercing X, each effect is evaluated and applied separately.\n\u203B\n If an attack with Piercing is no longer defended by an equipment, it loses its +X{p} bonus.",
    set: "KEYWORD",
  },
  {
    name: "Contract",
    ruling:
      "\nContract is both a label keyword and an effect keyword. As a label keyword it represents a static ability that generates a continuous effect and a triggered effect. As an effect keyword it is a continuous effect.\n\u203B\n When a player is contracted, they are given a set of instructions to complete. If they perform those instructions, they are considered to have completed the contract.\n\u203B\n Unless otherwise specified, contracts can be completed any number of times while they are active. For most cards, this means while the card is face-up in the arena on the combat chain and not defending.",
    set: "KEYWORD",
  },
  {
    name: "Emperor, Dracai of Aesir",
    ruling:
      "\nYou may have any Draconic cards, Warrior cards, Wizard cards etc. in your deck as long as they are red.\n\u203B\n When you activate Emperor, it is considered an attack and requires you to specify the attack target.\n\u203B\n Activating Emperor opens the combat chain and begins the Layer Step of combat. Activating Emperor does not close the combat chain in the link step.\nYou may fail to find Command and Conquer even if your deck contains one or more.\n\u203B\n If you fail to find Command and Conquer, you fail to attack with it and the combat chain closes. You must still shuffle, even if you fail to find Command and Conquer.\n\u203B\n Attacking with Command and Conquer this way is not considered playing Command and Conquer. If you only activate Emporer on your turn you are not considered to have played Command and Conquer for the purposes of rules and effects. E.g. effects that apply to the next attack action card you play this turn do not apply to Command and Conquer.\n\u203B\n Effects that apply specifically to Royal, Draconic, Warrior, and/or Wizard activated abilities (but not attacks) apply to Emperor’s ability.\n\u203B\n Effects that apply specifically to Royal, Draconic, Warrior, and/or Wizard attacks do not apply to the Emperor’s ability or Command and Conquer (e.g. Uprising).\n\u203B\n Effects that apply to your next attack or attacks you control, apply to the Emperor’s ability and Command and Conquer (e.g. Hamstring Shot, Out for Blood, Channel Mount Heroic).\n",
    cardImage: require("./images/Emperor.webp"),
    set: "DYN",
  },
  {
    name: "Dust From The Golden Plains",
    ruling:
      "\nWhen this resolves as a layer on the stack, it becomes a permanent in the arena under the player’s control.\n\u203B\n If a Dust from the Golden Plains is transformed into a dragon, it is put underneath that dragon and the dragon gains Phantasm unless the dragon is named Themai.\n\u203B\n While this is underneath a card, it can not be targeted by effects and is not considered to be controlled by any player.\n\u203B\n If the card on top of this is destroyed or otherwise removed from the arena, this is put into the owner’s graveyard.",
    cardImage: require("./images/DustFromTheGoldenPlains.webp"),
    set: "DYN",
  },
  {
    name: "Dust From The Red Desert",
    ruling:
      "\nWhen this resolves as a layer on the stack, it becomes a permanent in the arena under the player’s control.\n\u203B\n If a Dust from the Red Desert is transformed into a dragon, it is put underneath that dragon and the dragon gains Phantasm unless the dragon is named Vynserakai.\n\u203B\n While this is underneath a card, it can not be targeted by effects and is not considered to be controlled by any player.\n\u203B\n If the card on top of this is destroyed or otherwise removed from the arena, this is put into the owner’s graveyard.",
    cardImage: require("./images/DustFromTheRedDesert.webp"),
    set: "DYN",
  },
  {
    name: "Dust From The Shadow Crypts",
    ruling:
      "\nWhen this resolves as a layer on the stack, it becomes a permanent in the arena under the player’s control.\n\u203B\n If a Dust from the Shadow Crypts is transformed into a dragon, it is put underneath that dragon and the dragon gains Phantasm unless the dragon is named Nekria.\n\u203B\n While this is underneath a card, it can not be targeted by effects and is not considered to be controlled by any player.\nI\u203B\n f the card on top of this is destroyed or otherwise removed from the arena, this is put into the owner’s graveyard.",
    cardImage: require("./images/DustFromTheShadowCrypts.webp"),
    set: "DYN",
  },
  {
    name: "Rok",
    ruling:
      "\nYou can only announce to activate Rok if you have no cards in hand at that point in time. The number of cards in your hand is checked before you pitch for resources.\n\u203B\n If a prevention effect tries to prevent damage from Rok, each replacement effect will still try to do everything else other than preventing that damage. E.g. a card with Ward would still be destroyed.\n\u203B\n Players can still attempt to prevent damage (apply optional prevention effects) even when the damage cannot be prevented.\n\u203B\n An ongoing-prevention effect does not have its prevention amount reduced when the effect does not actually prevent any amount of damage.\n\u203B\n Rok.",
    cardImage: require("./images/Rok.webp"),
    set: "DYN",
  },
  {
    name: "Beaten Trackers",
    ruling:
      "\nIf you would discard a card with 6 or more {p} as an additional cost to play an action card, you may choose to destroy Beaten Trackers and gain the action point after the card is played - you can not use the action point gained to pay for that card.\n\u203B\n The triggered effect is optional, and the decision to destroy Beaten Trackers is made when the triggered-layer resolves on the stack.\n\u203B\n There is no priority between deciding to destroy Beaten Trackers and gaining an action point.\n\u203B\n You can only gain action points when you are the turn player. If you trigger Beaten Trackers on an opponents turn, you do not gain action points.",
    cardImage: require("./images/BeatenTrackers.webp"),
    set: "DYN",
  },
  {
    name: "Savage Beatdown",
    ruling:
      "\nYou must have discarded a card with 6+{p} before announcing that you are playing Savage Beatdown. Discarding a random card for Savage Beatdown's additional cost does not meet its own requirement to be played.\n\u203B\n You cannot play this card if you cannot discard a card to pay its additional cost.\n\u203B\n Savage Beatdown has +6{p} if the card discarded as the additional cost has 6 or more {p}.",
    cardImage: require("./images/SavageBeatdown.webp"),
    set: "DYN",
  },
  {
    name: "Skull Crack",
    ruling:
      "\nIf you would discard Skull Crack as an additional cost to play a card, you will gain the {r} after the card is played - you can not use the {r} gained to pay for that card.\n\u203B\n If you choose to discard Skull Crack, its effect does not trigger - the discard effect must specify that it is random. Choosing to use a random method to determine which card to discard does not make it a random discard.",
    cardImage: require("./images/SkullCrack.webp"),
    set: "DYN",
  },
  {
    name: "Berserk",
    ruling:
      "\nIf there are multiple Berserk effects active, each triggered-layer from each Berserk effect will resolve independently of the other. When the first Berserk trigger resolves, the card will be banished, preventing it from being banished by any additional Berserk triggers. This would result in a maximum of 1 reveal (and up to 1 draw).\n\u203B\n If the top card of your deck is not 6 or more {p}, it remains on top.\n\u203B\n If you choose to discard a card, Berserk’s effect does not trigger - the discard effect must specify that it is random. Choosing to use a random method to determine which card to discard does not make it a random discard.",
    cardImage: require("./images/Berserk.webp"),
    set: "DYN",
  },
  {
    name: "Reincarnate",
    ruling:
      "\nIf Reincarnate is banished before its trigger resolves (i.e. ordering of Berserk trigger), it is not put on the bottom of your deck.\n\u203B\n If you choose to discard Reincarnate, its effect does not trigger - the discard effect must specify that it is random. Choosing to use a random method to determine which card to discard does not make it a random discard.",
    cardImage: require("./images/Reincarnate.webp"),
    set: "DYN",
  },
  {
    name: "Blessing of Savagery",
    ruling:
      "\nBlessing of Savagery’s effect applies to any attack, including weapon attacks and attack action cards with base power of 6 or more.\n\u203B\n Blessing of Savagery’s effect applies to the next attack with 6 or more base power you control. If you have applied Blessing of Savagery's effect on an attack then that attack’s base power is then reduced below 6, Blessing of Savagery's effect will still continue to apply.",
    cardImage: require("./images/BlessingOfSavagery.webp"),
    set: "DYN",
  },
  {
    name: "Madcap Charger",
    ruling:
      "\nYou cannot play this card if you cannot discard a card to pay its additional cost.",
    cardImage: require("./images/MadcapCharger.webp"),
    set: "DYN",
  },
  {
    name: "Madcap Muscle",
    ruling:
      "\nYou cannot play this card if you cannot discard a card to pay its additional cost.",
    cardImage: require("./images/MadcapMuscle.webp"),
    set: "DYN",
  },
  {
    name: "Rumble Grunting",
    ruling:
      "\nRumble Grunting’s effect applies to any Brute attack, including weapon attacks and attack action cards.",
    cardImage: require("./images/RumbleGrunting.webp"),
    set: "DYN",
  },
  {
    name: "Yoji, Royal Protector",
    ruling:
      "\n You can only target another hero - you cannot target yourself.\n\u203B\n Yoji’s effect is a replacement effect. It does not redirect or prevent damage if there is no damage being dealt with (especially if the damage is prevented using other replacement effects).\n\u203B\n Yoji’s effect applies to hits from attacks and damage dealt through effects (including arcane damage). It does not apply to loss of life effects.",
    cardImage: require("./images/Yoji.webp"),
    set: "DYN",
  },
  {
    name: "Seasoned Saviour",
    ruling:
      "\nEquipment is equipped at the start of the game. This will trigger and resolve before either player draws their first hand for the first turn of the game. The triggered effect is not optional.\n\u203B\n If you start the game with Seasoned Saviour as your equipment, its effect triggers/resolves and you put two -1{d} counters on it before you draw your first hand.\n\u203B\n You cannot equip more than one off-hand equipment, even if you have more than one empty weapon zone.",
    cardImage: require("./images/SeasonedSaviour.webp"),
    set: "DYN",
  },
  {
    name: "Steelbraid Buckler",
    ruling:
      "\nYou cannot equip more than one off-hand equipment, even if you have more than one empty weapon zone.",
    cardImage: require("./images/SteelbraidBuckler.webp"),
    set: "DYN",
  },
  {
    name: "Buckle",
    ruling:
      "\nIf the opponent defends the attack with an equipment with Battleworn or Temper, that equipment would not gain a counter from its effect until the combat chain closes, after the hit triggered effect has resolved. The equipment must already have a -1{d} counter on it at the time the hit trigger resolves.\n\u203B\n The hit trigger is not a targeted effect. The equipment with the -1{d} counter that will be destroyed is determined when the hit trigger resolves.",
    cardImage: require("./images/Buckle.webp"),
    set: "DYN",
  },
  {
    name: "Never Yield",
    ruling:
      "\nEach conditional effect is independent of one another. You can meet the condition of none/any/all of them, generating their respective effects.\n\u203B\n Even if you do not meet any of the conditions for the effects, Never Yield is still destroyed at the start of your turn.\n\u203B\n You gain life if you have less life than each other individual hero, not just the highest life total hero or the total life total of all other heroes.\n\u203B\n You remove a -1{d} counter if control less equipment than each other individual hero, not just the hero with the most equipment or the total equipment controlled by all other heroes.",
    cardImage: require("./images/NeverYield.webp"),
    set: "DYN",
  },
  {
    name: "Shield Bash",
    ruling:
      "\nThe attacking hero may choose to discard a card to avoid being dealt 1 damage.\n\u203B\n The attacking hero can only choose to discard if they have a card in hand to discard. If they cannot discard a card (e.g. they have no cards in hand), they can not pay the cost and they will be dealt 1 damage.\n\u203B\n Shield Bash's effect does not apply to the controller of an attacking ally as they are not an attacking hero. The controller of the attacking ally will neither discard nor will be dealt damage from resolving Shield Bash.",
    cardImage: require("./images/ShieldBash.webp"),
    set: "DYN",
  },
  {
    name: "Blessing of Patience",
    ruling:
      "\nBlessing of Patience triggers and resolves during the start of turn phase. There is no priority and it can not be responded to.\n\u203B\n Target hero is determined at the time this triggers at the start of the turn, not when it is first played/put into the arena.\n\u203B\n You may target any hero, including yourself.",
    cardImage: require("./images/BlessingOfPatience.webp"),
    set: "DYN",
  },
  {
    name: "Shield Wall",
    ruling:
      "\nIf you would no longer control a Guardian off-hand after Shield Wall resolves, Shield Wall would not lose its +4{d} effect.",
    cardImage: require("./images/ShieldWall.webp"),
    set: "DYN",
  },
  {
    name: "Reinforce Steel",
    ruling:
      "\nBase {d} is derived from the value printed on the card. -1{d} counters and other effects that modified {d} do not modify the base {d} value, unless otherwise specified.",
    cardImage: require("./images/ReinforceSteel.webp"),
    set: "DYN",
  },
  {
    name: "Withstand",
    ruling:
      "\nYou may target a Guardian off-hand controlled by any player, including yourself.\n\u203B\n You must declare the target when Withstand is played.\n\u203B\n Withstands effect does not apply to the target Guardian off-hand if it is already defending. It must be played/resolved before the Guardian off-hand becomes defending to gain the effect.",
    cardImage: require("./images/Withstand.webp"),
    set: "DYN",
  },
  {
    name: "Blazen Yoroi",
    ruling:
      "\nWhile Blazen Yoroi is defending on chain link 4 or higher, it has +4{d}.",
    cardImage: require("./images/BlazenYoroi.webp"),
    set: "DYN",
  },
  {
    name: "Tearing Shuko",
    ruling:
      "\nActivating Tearing Shuko’s ability does not close the combat chain.",
    cardImage: require("./images/TearingShuko.webp"),
    set: "DYN",
  },
  {
    name: "Tiger Swipe",
    ruling:
      "\nYou only control cards that are in the arena (e.g. on the combat chain). Crouching Tigers in your banished zone are not considered under your control.\n\u203B\n Crouching Tiger is a card, and when it is created this way, it does not count towards the card limit for the format.\n\u203B\n If you do not play Crouching Tiger the turn it was created by this card's effect, it remains in the banished zone.",
    cardImage: require("./images/TigerSwipe.webp"),
    set: "DYN",
  },
  {
    name: "Mindstate of Tiger",
    ruling:
      "\nCrouching Tiger is a card, and when it is created this way, it does not count towards the card limit for the format.",
    cardImage: require("./images/MindstateOfTiger.webp"),
    set: "DYN",
  },
  {
    name: "Roar of the Tiger",
    ruling:
      "\nCrouching Tiger is a card, and when it is created this way, it does not count towards the card limit for the format.",
    cardImage: require("./images/RoarOfTheTiger.webp"),
    set: "DYN",
  },
  {
    name: "Flex Claws",
    ruling:
      "\nCrouching Tiger is a card, and when it is created this way, it does not count towards the card limit for the format.\n\u203B\n If you do not play Crouching Tiger the turn it was created by this card's effect, it remains in the banished zone.\n",
    cardImage: require("./images/FlexClaws.webp"),
    set: "DYN",
  },
  {
    name: "Blessing of Qi",
    ruling:
      "\nBlessing of Qi triggers and resolves during the start of turn phase. There is no priority and it can not be responded to.\n\u203B\n Crouching Tiger is a card, and when it is created this way, it does not count towards the card limit for the format.\n\u203B\n If you do not play Crouching Tiger the turn it was created by this card's effect, it remains in the banished zone and loses the +3/2/1{p} effect.",
    cardImage: require("./images/BlessingOfQi.webp"),
    set: "DYN",
  },
  {
    name: "Predatory Streak",
    ruling:
      "\nCrouching Tiger is a card, and when it is created this way, it does not count towards the card limit for the format.\n\u203B\n If you do not play Crouching Tiger the turn it was created by this card's effect, it remains in the banished zone.",
    cardImage: require("./images/PredatoryStreak.webp"),
    set: "DYN",
  },
  {
    name: "Crouching Tiger",
    ruling:
      "\nCrouching Tiger has no pitch property, meaning it can not be pitched to gain resources.\n\u203B\n Crouching Tiger has no defense property, meaning it can not be used to defend with.\n\u203B\n Crouching Tiger is a card. If it is created by an effect, it spawns into the game and does not count towards the card limit for the format.\n\u203B\n Crouching Tiger is NOT a token, it can be put into any zone other than the graveyard (e.g. hand/deck/banished zone etc), without ceasing to exist.",
    cardImage: require("./images/CrouchingTiger.webp"),
    set: "DYN",
  },
  {
    name: "Spirit of Erina",
    ruling:
      "\nPutting Spirit of Eirina into the arena instead of your soul is a replacement effect. There is no priority between when it would have been put into your soul and when it is put into the arena.\n\u203B\n Playing Lumina Ascension as an instant is optional. You may still declare to play Lumina Ascension as an action.\n\u203B\n If Spirit of Eirina is put into the soul because of a Charge effect, the card and you are still considered to have Charged for the purposes of game rules and effects.",
    cardImage: require("./images/SpiritOfErina.webp"),
    set: "DYN",
  },
  {
    name: "Jubeel, Spellbane",
    ruling:
      "\nThe condition of whether you control a Spellbane Aedis token is checked at the time Jubeel, Spellbane hits. If you control a Spellbane Aegis token at the time Jubeel, Spellbane hits, this effect does not trigger.",
    cardImage: require("./images/JubeelSpellbane.webp"),
    set: "DYN",
  },
  {
    name: "Merciless Battleaxe",
    ruling:
      "\nThe power of the attack itself is compared to Merciless Battleaxe’s base power. Effects that specifically increase the power of the attack, are taken into account.\n\u203B\n The attack is what gains overpower, not Merciless Battleaxe. If you attack with Merciless Battleaxe multiple times, it will not retain the overpower gained from previous attacks' with Merciless Battleaxe.\n\u203B\n “Greater” means “strictly more than”, meaning the power of the attack must be 7+{p}.",
    cardImage: require("./images/MercilessBattleaxe.webp"),
    set: "DYN",
  },
  {
    name: "Quicksilver Dagger",
    ruling:
      "\nGiving a weapon attack go again essentially gives the weapon go again and meets the condition for this effect.\n\u203B\n Quicksilver Dagger does not have base go again. It is gained by meeting a condition.",
    cardImage: require("./images/QuicksilverDagger.webp"),
    set: "DYN",
  },
  {
    name: "Cleave",
    ruling:
      "\nThe effects apply to the next axe attack only. They do not apply to any additional axe attacks made that turn.\n\u203B\n If you hit a hero, you can deal damage to an ally controlled by that hero. If you hit an ally, you can deal damage to a different ally controlled by the same hero that controls the ally you hit.",
    cardImage: require("./images/Cleave.webp"),
    set: "DYN",
  },
  {
    name: "Ironsong Pride",
    ruling:
      "\nWhen Ironsong Pride resolves as a layer on the stack (after being played), you put a +1{p} counter on target sword you control, and Ironsong Pride becomes a permanent in the arena.\n\u203B\n If Ironsong Pride is destroyed, banished, or otherwise leaves the arena (ceases to exist), its effect triggers.\n",
    cardImage: require("./images/IronsongPride.webp"),
    set: "DYN",
  },
  {
    name: "Blessing of Steel",
    ruling:
      "\nBlessing of Steel triggers and resolves during the start of turn phase. There is no priority and it can not be responded to.\n\u203B\n The effect applies to the next weapon attack only. It does not apply to any additional weapon attacks made that turn.",
    cardImage: require("./images/BlessingOfSteel.webp"),
    set: "DYN",
  },
  {
    name: "Precision Press",
    ruling:
      "\nThe effects apply to the next sword or dagger attack only. They do not apply to any additional sword or dagger attacks made that turn.",
    cardImage: require("./images/PrecisionPress.webp"),
    set: "DYN",
  },
  {
    name: "Puncture",
    ruling:
      "\nThe effects apply to the sword or dagger attack only. They do not apply to any additional sword or dagger attacks made that turn.",
    cardImage: require("./images/Puncture.webp"),
    set: "DYN",
  },
  {
    name: "Felling Swing",
    ruling:
      "\nThe effect applies to the next axe attack only. It does not apply to any additional axe attacks made that turn.",
    cardImage: require("./images/FellingSwing.webp"),
    set: "DYN",
  },
  {
    name: "Visit The Imperial Forge",
    ruling:
      "\nThis effect applies to all sword and dagger attacks this turn, not just sword and dagger attacks controlled by you.",
    cardImage: require("./images/VisitTheImperialForge.webp"),
    set: "DYN",
  },
  {
    name: "Hanabi Blaster",
    ruling:
      "\nHanabi Blaster triggers only once per turn, and only on the third time you play a card with boost.\n\u203B\n Hanabi Blaster considers when you play a card with boost, not when you boost. You do not have to pay the boost cost for any cards for it to count towards triggering the ability.\n\u203B\n There is no limit to the number of steam counters that can be put on Hanabi Blaster.",
    cardImage: require("./images/HanabiBlaster.webp"),
    set: "DYN",
  },
  {
    name: "Galvanic Bender",
    ruling:
      "\nIf Galvanic Bender is transformed into a permanent, it is put underneath that permanent which then gains the +1{p}.\n\u203B\n While Galvanic Bender is underneath a permanent, it can not be targeted by effects and is not considered to be controlled by any player (you can not defend with it).\n\u203B\n If the permanent on top of Galvanic Bender is destroyed or otherwise removed from the arena, the Galvanic Bender put into the graveyard.",
    cardImage: require("./images/GalvanicBender.webp"),
    set: "DYN",
  },
  {
    name: "Pulsewave Harpoon",
    ruling:
      "\nIt does not matter if the boost is successful or not - the number of times you've boosted this combat chain is the number of times you’ve paid for a boost cost by banishing a card.\n\u203B\n Pulsewave Harpoon counts itself towards its effect if it was boosted when it was played.\n\u203B\n The defending hero chooses which cards they reveal. If X is greater than the number of cards in their hand, they reveal their whole hand. If X is zero, no cards are revealed.\n\u203B\n The card to add to this chain link must be an action card with a {d} property. Cards that are not action cards or do not have the {d} property, can not be added as a defending card.\n\u203B\n The card chosen must be selected from the cards revealed by Pulsewave Harpoon if possible (it is not optional). If no cards are revealed, no card can be chosen.\n\u203B\n Adding a card to the chain link this way is not considered as that hero “defending” and does not trigger “when you/this defend(s)” effects.",
    cardImage: require("./images/PulsewaveHarpoon.webp"),
    set: "DYN",
  },
  {
    name: "Bios Update",
    ruling:
      "\nThe second effect is not optional. If you banish a Mechanologist item with cost 2 or less as part of paying a boost cost, it is put into the arena.\n\u203B\n The second effect lasts until the trigger condition is met or the end of the turn.",
    cardImage: require("./images/BiosUpdate.webp"),
    set: "DYN",
  },
  {
    name: "Construct Nitro Mechanoid // Nitro Mechanoid",
    ruling:
      "\nIf Construct Nitro Mechanoid does not transform ALL of the Mechanologist head, chest, arms, legs, weapon and 3 Hyper Drivers that are targeted, it negates itself and all of the targets remain unchanged.\n\u203B\n The cards that are transformed this way go underneath Nitro Mechanoid. They are not considered to be in the arena, and their abilities are not functional unless they specify otherwise.\n\u203B\n If there are no cards beneath Nitro Mechanoid, it can not attack using its activated ability.\n\u203B\n If an opponent takes control of Nitro Mechanoid, cards underneath Nitro Mechanoid remain underneath the card. If the cards that are banished to attack, they are banished to their owner’s banished zone",
    cardImage: require("./images/NitroMechanoid.webp"),
    set: "DYN",
  },
  {
    name: "Plasma Mainline",
    ruling:
      "\nPlasma Mainline’s triggered effect is optional. You may still move a steam counter from Plasma Mainline onto the Mechanologist item with cost 2, even if it does not use steam counters.",
    cardImage: require("./images/PlasmaMainline.webp"),
    set: "DYN",
  },
  {
    name: "Powder Keg",
    ruling:
      "\nA pistol is not a gun.\n\u203B\n Powder Keg’s triggered effect is optional.\n\u203B\n The defending equipment does not have to be defending the Mechanologist gun attack that has it.\n\u203B\n The equipment is chosen when the triggered effect resolves. There is no priority between destroying Powder Keg and choosing and destroying the defending equipment.",
    cardImage: require("./images/PowderKeg.webp"),
    set: "DYN",
  },
  {
    name: "Scramble Pulse",
    ruling:
      "\nThis effect only applies while Scramble Pulse is attacking on the combat chain. If it is defending or put into the deck after its chain link resolves, its effect is no longer active.\n\u203B\n This effect applies to all equipment defending this combat chain, not just equipment defending on Scramble Pulse’s chain link.\n\u203B\n Defending equipment have -1{d} when the combat chain closes. If an equipment with Temper has 0{d} after this effect is applied, when the combat chain closes, the equipment will be destroyed.",
    cardImage: require("./images/ScramblePulse.webp"),
    set: "DYN",
  },
  {
    name: "Blessing of Ingenuity",
    ruling:
      "\nBlessing of Ingenuity triggers and resolves during the start of turn phase. There is no priority and it can not be responded to.\n\u203B\n You may choose a combination of Hyper Driver cards from banished zone and graveyard to put into the arena.\n\u203B\n The part of the trigger effect that destroys Blessing of Ingenuity is not optional. The part of the effect that puts Hyper Drivers into the arena is optional. You may choose to put 0 Hyper Drivers into the arena.\n",
    cardImage: require("./images/BlessingOfIngenuity.webp"),
    set: "DYN",
  },
  {
    name: "Crankshaft",
    ruling:
      "\nYou may order the Hyper Driver’s triggered effect to resolve after Crankshaft’s triggered effect to prevent it from being destroyed due to having no steam counters on it.\n\u203B\n Crankshaft only triggers when it is banished to pay a boost cost. If it is banished in any other way, it’s effect does not trigger.",
    cardImage: require("./images/Crankshaft.webp"),
    set: "DYN",
  },
  {
    name: "Jump Start",
    ruling:
      "\nYou do not have to boost Jump Start to gain the {r} cost reduction.",
    cardImage: require("./images/JumpStart.webp"),
    set: "DYN",
  },
  {
    name: "Urgent Delivery",
    ruling:
      "\nIf you have not boosted this combat chain, you may still put a Mechanologist item from your hand with cost 0 into the arena.",
    cardImage: require("./images/UrgentDelivery.webp"),
    set: "DYN",
  },
  {
    name: "Arakni",
    ruling:
      "\nArakni’s triggered effect may trigger more than once per turn.\n\u203B\n The target opponent does not have to be the same as the target of an attack with contract.",
    cardImage: require("./images/Arakni.webp"),
    set: "DYN",
  },
  {
    name: "Spider's Bite",
    ruling:
      "\nIf a hero is hit two or more times by Spider's Bite and has not yet defended, the effects stack and the next time they defend with 1 or more attack action cards this turn, those cards have -1{d} for each time they were hit by a Spider's Bite.",
    cardImage: require("./images/SpidersBite.webp"),
    set: "DYN",
  },
  {
    name: "Blacktek Whisperers",
    ruling:
      "\n Any -1{d} counters are removed from the Blacktek Whisperers when it goes to the graveyard. If it is then equipped, it will not have any -1{d} counters on it.\n\u203B\n Blacktek Whisperers’ triggered effect triggers at the start of the turn and can not be responded to.",
    cardImage: require("./images/BlacktekWhisperers.webp"),
    set: "DYN",
  },
  {
    name: "Mask of Perdition",
    ruling:
      "\n Any -1{d} counters are removed from the Mask of Perdition when it goes to the graveyard. If it is then equipped, it will not have any -1{d} counters on it.\n\u203B\n Mask of Perdition’s triggered effect triggers at the start of the turn and can not be responded to.",
    cardImage: require("./images/MaskOfPerdition.webp"),
    set: "DYN",
  },
  {
    name: "Eradicate",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.\n\u203B\n Banishing multiple yellow cards at the same time completes this contract that many times. I.e. the contract is completed with each yellow card banished.",
    cardImage: require("./images/Eradicate.webp"),
    set: "DYN",
  },
  {
    name: "Leave No Witnesses",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.\n\u203B\n Banishing multiple red cards at the same time completes this contract that many times. I.e. the contract is completed with each red card banished.\n\u203B\n The attacking player may choose to banish 0 cards from arsenal. If they banish a card from arsenal, the card turned face-up before it is moved to the banished zone. Cards turned face up this do not count as a reveal for the purposes of game rules and effects.\n",
    cardImage: require("./images/LeaveNoWitnesses.webp"),
    set: "DYN",
  },
  {
    name: "Regicide",
    ruling:
      "\nIf all of your opponents lose the game, you win the game.\n\u203B\n Defending with Regicide does not make its triggered ability functional - you do not lose the game when the combat chain closes.\n\u203B\n The defending hero can not play defence reaction cards against Regicide if they have the same name as a card in their banished zone.\n\u203B\n You come at the king, you best not miss.\n",
    cardImage: require("./images/Regicide.webp"),
    set: "DYN",
  },
  {
    name: "Surgical Extraction",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.\n\u203B\n Banishing multiple blue cards at the same time completes this contract that many times. I.e. the contract is completed with each blue card banished. ",
    cardImage: require("./images/SurgicalExtraction.webp"),
    set: "DYN",
  },
  {
    name: "Pay Day",
    ruling:
      "\nThis condition is checked at the time Pay Day resolves. If you complete a contract later in the turn, you do not create 4 Silver tokens.",
    cardImage: require("./images/PayDay.webp"),
    set: "DYN",
  },
  {
    name: "Plunder The Poor",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.",
    cardImage: require("./images/PlunderThePoor.webp"),
    set: "DYN",
  },
  {
    name: "Rob The Rich",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.",
    cardImage: require("./images/RobTheRich.webp"),
    set: "DYN",
  },
  {
    name: "Shred",
    ruling:
      "\n If you target a defending equipment with Temper and its {d} is reduced to 0, it will be destroyed when the combat chain closes.",
    cardImage: require("./images/Shred.webp"),
    set: "DYN",
  },
  {
    name: "Annihilate The Armed",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.",
    cardImage: require("./images/AnnihilateTheArmed.webp"),
    set: "DYN",
  },
  {
    name: "Fleece The Frail",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.",
    cardImage: require("./images/FleeceTheFrail.webp"),
    set: "DYN",
  },
  {
    name: "Nix The Nimble",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.",
    cardImage: require("./images/NixTheNimble.webp"),
    set: "DYN",
  },
  {
    name: "Sack The Shifty",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.\n\u203B\n The condition that the card has base go again refers to whether the card is printed with go again or not. The card banished must simply have “go again” written in their text box, without being conditional (preceded by a condition) or having been granted by an effect.",
    cardImage: require("./images/SackTheShifty.webp"),
    set: "DYN",
  },
  {
    name: "Slay The Scholars",
    ruling:
      "\n To banish an opponent's cards, you must be the one instructed by an effect to do the banishing. If an opponent is instructed by an effect to banish a card, it does not complete the contract because YOU are not banishing an opponent’s card.\n\u203B\n This contract can be completed any number of times, as long as this is face-up in the arena.",
    cardImage: require("./images/SlayTheScholars.webp"),
    set: "DYN",
  },
  {
    name: "Cut to the Chase",
    ruling:
      "\n If there is no defending hero this chain link, you do not look at any hero’s deck.",
    cardImage: require("./images/CutToTheChase.webp"),
    set: "DYN",
  },
  {
    name: "Sandscour Greatbow",
    ruling:
      "\n The effect is optional. You may choose not to put an arrow into your arsenal.\n\u203B\n If you have no empty arsenal zones, you can not put an arrow into your arsenal (the effect simply fails).\n\u203B\n If your deck is not empty and you cannot look at the top of your deck, you can not attempt to put the top card of your deck face up in arsenal.\nAim counters are removed from objects when they are turned face down or are moved into any zone other than the stack or a zone in the arena.\n\u203B\n An aim counter has no specific rules or meaning other than being a marker for other effects to apply to the object.",
    cardImage: require("./images/SandscourGreatbow.webp"),
    set: "DYN",
  },
  {
    name: "Hornet's Sting",
    ruling:
      "\n If the damage dealt by Hornet's Sting kills an attacking Ally, the combat chain closes before the reaction step begins and any damage is dealt.",
    cardImage: require("./images/HornetsSting.webp"),
    set: "DYN",
  },
  {
    name: "Heat Seeker",
    ruling:
      "\n This triggered effect is not optional. You must put the top card of your deck into your arsenal if it is empty. If you have no empty arsenal zones, you can not put the top card of your deck into your arsenal (the effect simply fails).\n\u203B\n At the beginning of the action phase triggers before you would put a card into your arsenal from your hand.",
    cardImage: require("./images/HeatSeeker.webp"),
    set: "DYN",
  },
  {
    name: "Immobilizing Shot",
    ruling:
      "\n The affected hero can still play and activate instant and reaction cards as they are not actions.\n\u203B\n Multiple action points do not get around this ability. The affected player may only play or activate 1 attack action card and 1 'non-attack' action card even if they have additional action points.\n\u203B\n Actions played as though they were an instant still count as action cards. Playing a ‘non-attack’ action card as though it was an instant does allow the player to play more than one ‘non-attack’ action card.\n\u203B\n Multiple aim counters do not give this multiple instances of its ability.",
    cardImage: require("./images/ImmobilizingShot.webp"),
    set: "DYN",
  },
  {
    name: "Dead Eye",
    ruling:
      "\n The next arrow attack is the one that is checked for an aim counter.\n\u203B\n Multiple aim counters do not give this multiple instances of the ability.",
    cardImage: require("./images/DeadEye.webp"),
    set: "DYN",
  },
  {
    name: "Drill Shot",
    ruling:
      "\n Multiple aim counters do not give this multiple instances of piercing 1.",
    cardImage: require("./images/DrillShot.webp"),
    set: "DYN",
  },
  {
    name: "Blessing of Focus",
    ruling:
      "\n Blessing of Focus triggers and resolves during the start of turn phase. There is no priority and it can not be responded to.\n\u203B\n This triggered effect is not optional. You must put the top card of your deck into your arsenal if it is empty. If you have no empty arsenal zones, you can not put the top card of your deck into your arsenal (the effect simply fails).\n\u203B\n If your deck is not empty and you cannot reveal the top of your deck, you can not attempt to put the top card of your deck face up in arsenal.\n\u203B\n Aim counters are removed from objects when they are turned face down or are moved into any zone other than the stack or a zone in the arena.\n\u203B\n An aim counter has no specific rules or meaning other than being a marker for other effects to apply to the object.",
    cardImage: require("./images/BlessingOfFocus.webp"),
    set: "DYN",
  },
  {
    name: "Hemorrhage Bore",
    ruling:
      "\n If the hero hit has two or more cards in their arsenal, you choose which one you want to destroy when the hit trigger resolves.\n\u203B\n Multiple aim counters do not give this multiple instances of its ability.",
    cardImage: require("./images/HemorrhageBore.webp"),
    set: "DYN",
  },
  {
    name: "Long Shot",
    ruling:
      "\n Multiple aim counters do not give this multiple instances of+2{p}.",
    cardImage: require("./images/LongShot.webp"),
    set: "DYN",
  },
  {
    name: "Point The Tip",
    ruling:
      "\n Aim counters are removed from objects when they are turned face down or are moved into any zone other than the stack or a zone in the arena.\n\u203B\n An aim counter has no specific rules or meaning other than being a marker for other effects to apply to the object.",
    cardImage: require("./images/PointTheTip.webp"),
    set: "DYN",
  },
  {
    name: "Annals of Sutcliffe",
    ruling:
      "\n You may only pitch cards if there is a cost to pay. If you pitch a single card to pay for this, and there are no more resources to pay for, you can not pitch another card to gain the additional effect.\n\u203B\n You must pitch the card as part of the cost to pay to gain the additional effect. Having an attack or ‘non-attack’ action card in your pitch zone that you pitched for a different cost does not grant the additional effect.\n\u203B\n Annals of Sutcliffe does not have an attack ability or go again.",
    cardImage: require("./images/AnnalsOfSutcliffe.webp"),
    set: "DYN",
  },
  {
    name: "Cryptic Crossing",
    ruling:
      "\n You may only pitch cards if there is a cost to pay. If you pitch a single card to pay for this, and there are no more resources to pay for, you can not pitch another card to gain the additional effect.\n\u203B\n You must pitch the card as part of the cost to pay to gain the additional effect. Having an attack or ‘non-attack’ action card in your pitch zone that you pitched for a different cost does not grant the additional effect.\n\u203B\n The triggered effect only triggers once. If this deals damage to the defending hero more than once, it will not trigger any additional times.",
    cardImage: require("./images/CrypticCrossing.webp"),
    set: "DYN",
  },
  {
    name: "Diabolic Ultimatum",
    ruling:
      "\n Looming Doom still stays in play when the last counter is removed, it is only destroyed when you cannot remove a counter.\n\u203B\n There is no priority during the end phase. You can not play cards or activate abilities to gain resources (Energy Potion) or to prevent damage (Oasis Respite) during this phase. Only effects that are already active can prevent the damage (Arcane barrier, Spellvoid etc.).\n\u203B\n Runechants trigger when you play an attack action card or activate a weapon attack. They are only destroyed when that trigger resolves. You can play Looming Doom (if you can do so at instant speed) after a Runechant has triggered, but before it is destroyed by its own trigger, to use them for Looming Doom - the trigger will still resolve and deal 1 damage.",
    cardImage: require("./images/DiabolicUltimatum.webp"),
    set: "DYN",
  },
  {
    name: "Deathly Duet",
    ruling:
      "\n You may only pitch cards if there is a cost to pay. If you pitch a single card to pay for this, and there are no more resources to pay for, you can not pitch another card to gain the additional effect.\n\u203B\n You must pitch the card as part of the cost to pay to gain the additional effect. Having an attack or ‘non-attack’ action card in your pitch zone that you pitched for a different cost does not grant the additional effect.",
    cardImage: require("./images/DeathlyDuet.webp"),
    set: "DYN",
  },
  {
    name: "Blessing of Occult",
    ruling:
      "\n Blessing of Occult triggers and resolves during the start of turn phase. There is no priority and it can not be responded to.",
    cardImage: require("./images/BlessingOfOccult.webp"),
    set: "DYN",
  },
  {
    name: "Aether Slash",
    ruling:
      "\n You may only pitch cards if there is a cost to pay. If you pitch a single card to pay for this, and there are no more resources to pay for, you can not pitch another card to gain the additional effect.\n\u203B\n You must pitch the card as part of the cost to pay to gain the additional effect. Having a ‘non-attack’ action card in your pitch zone that you pitched for a different cost does not grant the additional effect.",
    cardImage: require("./images/AetherSlash.webp"),
    set: "DYN",
  },
  {
    name: "Runic Reaping",
    ruling:
      "\n You may only pitch cards if there is a cost to pay. If you pitch a single card to pay for this, and there are no more resources to pay for, you can not pitch another card to gain the additional effect.\n\u203B\n You must pitch the card as part of the cost to pay to gain the additional effect. Having an attack action card in your pitch zone that you pitched for a different cost does not grant the additional effect.",
    cardImage: require("./images/RunicReaping.webp"),
    set: "DYN",
  },
  {
    name: "Surgent Aethertide",
    ruling:
      "\n If Surgent Aethertide deals no damage, it does not grant any benefit to the first card you play each turn.\n\u203B\n If you play, but do not resolve a card with an arcane damage effect, then activate Surgent Aethertide and deal damage with it, it will retroactively apply the effect to that unresolved card.\n\u203B\n If you play and resolve a card with an arcane damage effect before activating Surgent Aethertide, it will not retroactively apply the effect and will not apply to the next card you play with an arcane damage effect.\n\u203B\n The card with the arcane damage effect does not have to target the same opposing hero that Surgent Aethertide dealt damage to in order to gain the effect.",
    cardImage: require("./images/SurgentAethertide.webp"),
    set: "DYN",
  },
  {
    name: "Seerstone",
    ruling:
      "\n Seerstone activation is not limited to once per turn. If you have additional action points (and resources) you can activate it as many times as you want.\n\u203B\n This is not an opt effect.\n\u203B\n Even if you have no cards in your deck, you must still create a Ponder token.",
    cardImage: require("./images/Seerstone.webp"),
    set: "DYN",
  },
  {
    name: "Mind Warp",
    ruling:
      "\n If they do not have any cards in their hand, they still shuffle their deck - in this case, they would not draw any cards.\n\u203B\n If they have no cards in their deck zone, they still shuffle their hand into their deck, then draw that many cards minus 1.\n\u203B\n You must deal more than that much damage (after prevention effects have been applied) for the surge condition to be met.\n\u203B\n The surge effect is not a triggered effect. There is no priority between dealing damage and the surge effect resolving.",
    cardImage: require("./images/MindWarp.webp"),
    set: "DYN",
  },
  {
    name: "Swell Tidings",
    ruling:
      "\n You must deal more than that much damage (after prevention effects have been applied) for the surge condition to be met.\n\u203B\n The surge effect is not a triggered effect. There is no priority between dealing damage and the surge effect resolving.",
    cardImage: require("./images/SwellTidings.webp"),
    set: "DYN",
  },
  {
    name: "Brainstorm",
    ruling:
      "\n If you draw multiple cards from a single effect, the ability would trigger multiple times, once for each card drawn this way. Each triggered effect can have different targets.\n\u203B\n If you play multiple Brainstorms, your hero would gain multiple instances of the triggered ability.\n\u203B\n If the hero loses their abilities due to an effect, but is not prevented from gaining abilities (e.g. Sleep Dart), it does not prevent the hero from gaining the ability from Brainstorm.\n\u203B\n Brainstorm can not typically be modified by (most) arcane damage modifiers.",
    cardImage: require("./images/Brainstorm.webp"),
    set: "DYN",
  },
  {
    name: "Aether Quickening",
    ruling:
      "\n You must deal more than that much damage (after prevention effects have been applied) for the surge condition to be met.\n\u203B\n The surge effect is not a triggered effect. There is no priority between dealing damage and the surge effect resolving.",
    cardImage: require("./images/AetherQuickening.webp"),
    set: "DYN",
  },
  {
    name: "Blessing Of Aether",
    ruling:
      "\n Blessing of Aether triggers and resolves during the start of turn phase. There is no priority and it can not be responded to.\n\u203B\n If the next card you play this turn does not have an arcane damage effect, it would still consume the effect, but to no benefit.",
    cardImage: require("./images/BlessingOfAether.webp"),
    set: "DYN",
  },
  {
    name: "Prognosticate",
    ruling:
      "\n You must deal more than that much damage (after prevention effects have been applied) for the surge condition to be met.\n\u203B\n The surge effect is not a triggered effect. There is no priority between dealing damage and the surge effect resolving.",
    cardImage: require("./images/Prognosticate.webp"),
    set: "DYN",
  },
  {
    name: "Sap",
    ruling:
      "\n You must deal more than that much damage (after prevention effects have been applied) for the surge condition to be met.\n\u203B\n The surge effect is not a triggered effect. There is no priority between dealing damage and the surge effect resolving.\n\u203B\n The surge effect is not a targeted effect. The player who played Sap determines which permanent to remove an energy counter from when Sap resolves.",
    cardImage: require("./images/Sap.webp"),
    set: "DYN",
  },
  {
    name: "Tempest Aurora",
    ruling:
      "\n If you play a card that does not have the specified cost, or does not have an arcane damage effect, it does not consume the effect.\n\u203B\n Cards with costs that include X, are considered to have the cost determined by the player that plays it. E.g. If the card has cost X, and player declares X=2 when playing the card, the card is considered to have cost 2 for the purposes of this effect.",
    cardImage: require("./images/TempestAurora.webp"),
    set: "DYN",
  },
  {
    name: "Invoke Suraya // Suraya, Archangel of Knowledge",
    ruling:
      "\n If the target Spectral Shield becomes an illegal target when this resolves (e.g. if it doesn’t exist anymore), this will not resolve and you will not gain an action point.\n\u203B\n Suraya, Archangel of Knowledge is an ally and can be the target of attacks.\n\u203B\n If Suraya, Archangel of Knowledge is destroyed while it is attacking, but before the chain link resolves, the combat chain closes.",
    cardImage: require("./images/Suraya.webp"),
    set: "DYN",
  },
  {
    name: "Celestial Kimono",
    ruling:
      "\n Celestial Kimono can only trigger once per turn, even if both a non-token permanent and Celestial Kimono are destroyed in the same turn.\n\u203B\n Celestial Kimono does not have the defense property and can not be declared as defending card.",
    cardImage: require("./images/CelestialKimono.webp"),
    set: "DYN",
  },
  {
    name: "Wave of Reality",
    ruling:
      "\n Wave of Reality does not have the defense property and can not be declared as defending card.",
    cardImage: require("./images/WaveOfReality.webp"),
    set: "DYN",
  },
  {
    name: "Phantasmal Symbiosis",
    ruling:
      "\n Phantasm only triggers when the attack defends a non-illusionist 6+ {p} attack. If a card with the chosen name defends against an attack with Phantasm, it does not trigger Phantasm even if it has 6 or more {p}.\n\u203B\n A named card being Illusionist does not remove any existing class or talent supertypes it has.",
    cardImage: require("./images/PhantasmalSymbiosis.webp"),
    set: "DYN",
  },
  {
    name: "Spectral Procession",
    ruling:
      "\n Spectral Procession’s power is defined wherever it is in the game. Outside of the game its power is considered to be 0.\n\u203B\n Spectral Procession’s power is constantly being evaluated. If you create a Spectral Shield after playing Spectral Procession, its power will increase. If you lose a Spectral Shield after playing Spectral Procession, its power will decrease.",
    cardImage: require("./images/SpectralProcession.webp"),
    set: "DYN",
  },
  {
    name: "Tome Of Aeo",
    ruling:
      "\n Tome of Aeo triggers at the beginning of your action phase. Players can play cards or activate abilities before Tome of Aeo's trigger-layer resolves off the stack.",
    cardImage: require("./images/TomeOfAeo.webp"),
    set: "DYN",
  },
  {
    name: "Blessing Of Spirits",
    ruling:
      "\n Blessing of Spirits triggers and resolves during the start of turn phase. There is no priority and it can not be responded to.",
    cardImage: require("./images/BlessingOfSpirits.webp"),
    set: "DYN",
  },
  {
    name: "Tranquil Passing",
    ruling:
      "\n A card or token with a triggered effect that has a triggering condition when it enters the arena may trigger when it returns to the arena after Tranquil Passing leaves the arena.\n\u203B\n A card banished this way returns to the arena immediately after Tranquil Passing leaves the arena. There is no priority between the two events.\n\u203B\n If you banish a token with Tranquil Passing, the token ceases to exist and does not return when Tranquil Passing leaves the arena.\n\u203B\n You may banish any target aura token (token’s typically don’t have a cost), but can only banish non-token aura tokens with the specified cost.",
    cardImage: require("./images/TranquilPassing.webp"),
    set: "DYN",
  },
  {
    name: "Spectral Prowler",
    ruling:
      "\n The condition of controlling a Spectral Shield is evaluated after Spectral Prowler is played but before it becomes attacking.\n\u203B\n If you create a Spectral Shield after Spectral Prowler is played, but before the trigger resolves, Spectral Prowler will gain go again.\n\u203B\n If you create a Spectral Shield after the trigger resolves, Spectral Prowler does not retroactively gain go again.",
    cardImage: require("./images/SpectralProwler.webp"),
    set: "DYN",
  },
  {
    name: "Spectral Rider",
    ruling:
      "\n The condition of controlling a Spectral Shield is evaluated after Spectral Rider is played but before it becomes attacking.\n\u203B\n If you create a Spectral Shield after Spectral Rider is played, but before the trigger resolves, Spectral Rider will gain overpower.\n\u203B\n If you create a Spectral Shield after the trigger resolves, Spectral Rider does not retroactively gain overpower.",
    cardImage: require("./images/SpectralRider.webp"),
    set: "DYN",
  },
  {
    name: "Crown of Dominion",
    ruling:
      "\n Equipment is equipped at the start of the game. This will trigger and resolve before either player draws their first hand for the first turn of the game. The triggered effect is not optional.\n\u203B\n Your hero is only Royal while they control Crown of Dominion. Including Crown of Dominion in your deck does not allow you to include Royal cards in the same deck (to overcome the talent/class supertype deckbuilding restrictions).\n\u203B\n If you no longer control Crown of Dominion, your hero is not considered Royal anymore.\n\u203B\n Crown of Dominion does not have the defense property and can not be declared as defending card.",
    cardImage: require("./images/CrownOfDominion.webp"),
    set: "DYN",
  },
  {
    name: "Ornate Tessen",
    ruling:
      "\n Ornate Tessen does not have the defense property and can not be declared as defending card.",
    cardImage: require("./images/OrnateTessen.webp"),
    set: "DYN",
  },
  {
    name: "Spell Fray Tiara",
    ruling:
      "\n Equipment with 0 defense still have the defense property (despite the value being 0) and can be declared as a defending card.",
    cardImage: require("./images/SpellFrayTiara.webp"),
    set: "DYN",
  },
  {
    name: "Spell Fray Cloak",
    ruling:
      "\n Equipment with 0 defense still have the defense property (despite the value being 0) and can be declared as a defending card.",
    cardImage: require("./images/SpellFrayCloak.webp"),
    set: "DYN",
  },
  {
    name: "Spell Fray Gloves",
    ruling:
      "\n Equipment with 0 defense still have the defense property (despite the value being 0) and can be declared as a defending card.",
    cardImage: require("./images/SpellFrayGloves.webp"),
    set: "DYN",
  },
  {
    name: "Spell Fray Leggings",
    ruling:
      "\n Equipment with 0 defense still have the defense property (despite the value being 0) and can be declared as a defending card.",
    cardImage: require("./images/SpellFrayLeggings.webp"),
    set: "DYN",
  },
  {
    name: "Imperial Edict",
    ruling:
      "\n All opposing heroes reveal their hands simultaneously.\n\u203B\n The named card can still be pitched, defended with, and activated.",
    cardImage: require("./images/ImperialEdict.webp"),
    set: "DYN",
  },
  {
    name: "Imperial Ledger",
    ruling:
      "\n Shuffling Imperial Ledger into the deck is part of the cost of activation.",
    cardImage: require("./images/ImperialLedger.webp"),
    set: "DYN",
  },
  {
    name: "Imperial Warhorn",
    ruling:
      "\n Heroes choose permanents in clockwise order starting with the turn player.\n\u203B\n If you choose yourself (while not Royal) you choose your own permanent that you control.\n\u203B\n All heroes choose a permanent before all of them are destroyed.\n\u203B\n Choosing the number of heroes is done when the Imperial Warhorn resolves as a layer on the stack.",
    cardImage: require("./images/ImperialWarhorn.webp"),
    set: "DYN",
  },
  {
    name: "Gold",
    ruling:
      "\n Destroying Gold is part of the cost for activating its ability.",
    cardImage: require("./images/Gold.webp"),
    set: "DYN",
  },
  {
    name: "Stealth",
    ruling:
      "\n Stealth is an ability keyword written on the text box of a card.\n\u203B\n There is no meaning to the keyword ability itself. It is used as an “empty” ability that is used by other abilities.",
    set: "KEYWORD",
  },
  {
    name: "Ponder",
    ruling:
      "\n You draw the card before you choose to arsenal a card and draw up to your hero’s intellect.",
    cardImage: require("./images/Ponder.webp"),
    set: "DYN",
  },
  {
    name: "Quiver",
    ruling:
      "\n Quiver is a subtype keyword written on the type box of a card.\n\u203B\n A quiver can be equipped in the weapon slot in addition to a 2H bow as a special exception to equip rules.\n\u203B\n Only 1 quiver can be equipped at a time, similar to off-hand equipment.\n\u203B\n A quiver occupies a weapon slot. It cannot be equipped with two 1H weapons if there are only two weapon zones.",
    set: "KEYWORD",
  },
  {
    name: "Plague Hive",
    ruling: "",
    cardImage: require("./images/PlagueHive.webp"),
    set: "OUT",
  },
  {
    name: "Uzuri",
    ruling:
      "\n You may banish any card from your hand to pay for the activation of this ability - it does not have to be an attack action card with cost 2 or less.\n\u203B\n You must have an attacking card with stealth on the active chain link to target to activate this ability. An attack with stealth on a resolved (previous) chain link is not a valid target for this effect.\n\u203B\n There is no priority between turning the banished card face-up, putting the attacking stealth card on the bottom of your deck, and putting the banished card on the chain link.\n\u203B\n If the banished card is not an attack action card with cost 2 or less, it remains face-up in the banished zone, and the attack on the active chain link remains there.\n\u203B\n All cards currently defending on the active chain link (including equipment, defense reactions etc.) remain on the active chain link as defending cards against the new attack.\n\u203B\n Effects that apply to the defending cards continue to apply to those defending cards when Uzuri ability replaces the stealth card.\n\u203B\n Effects that apply to the target card with stealth do not transfer to the card that replaces it.\n\u203B\n If a layer on the stack targets the stealth card, and then the stealth card is put to the bottom of the deck, the layer will either fail to resolve (if the stealth card was the only target of the layer), or the effect that targets the stealth card will simply fail (it does not transfer to the card that replaces it).\n\u203B\n When the banished card is put onto the chain link as an attacking card, it is not considered to be played. You do not choose targets, select modes, pay on-play costs, or trigger on-play or on-attack effects, as you normally would if you typically played/attacked with the card.",
    cardImage: require("./images/Uzuri.webp"),
    set: "OUT",
  },
  {
    name: "Arakni, Solitary Confinement",
    ruling:
      "\n Your first attack with stealth is given go again, even if it is the second or later attack in the turn (if none of the previous attacks had stealth).",
    cardImage: require("./images/ArakniSolitaryConfinement.webp"),
    set: "OUT",
  },
  {
    name: "Nerve Scalpel",
    ruling:
      "\n Reaction cards include both defense reactions and attack reactions.\n\u203B\n If two or more attack reactions are declared as defending cards at once, they would all get -1{d}.\n\u203B\n If two or more defense reactions are played, they would not all get -1{d} because each defense reaction must be resolved one at a time, and the first that resolves (and thus defends) would count as the next time, and get the -1{d}.\n\u203B\n If a hero is hit two or more times by Nerve Scalpel and has not yet defended, the effects stack and the next time they defend with 1 or more reaction cards this turn, those cards have -1{d} for each time they were hit by a Nerve Scalpel this turn.\n\u203B\n If a hero is hit by Nerve Scalpel after a defense reaction is played, but before it resolves, then that defense reaction will get -1{d} after it resolves and becomes defending.",
    cardImage: require("./images/NerveScalpel.webp"),
    set: "OUT",
  },
  {
    name: "Orbitoclast",
    ruling:
      "\n If two or more non-attack action cards are declared as defending cards at once, they would all get -1{d}.\n\u203B\n If a hero is hit two or more times by Orbitoclast and has not yet defended, the effects stack and the next time they defend with 1 or more non-attack action cards this turn, those cards have -1{d} for each time they were hit by an Orbitoclast this turn.",
    cardImage: require("./images/Orbitoclast.webp"),
    set: "OUT",
  },
  {
    name: "Scale Peeler",
    ruling:
      "\n If two or more equipment are declared as defending cards at once, they would all get -1{d}.\n\u203B\n If a hero is hit two or more times by Scale Peeler and has not yet defended, the effects stack and the next time they defend with 1 or more equipment cards this turn, those cards have -1{d} for each time they were hit by a Scale Peeler this turn.\n\u203B\n When the combat chain closes and effects like Temper trigger, the -1{d} would still apply when calculating the defense of the equipment.",
    cardImage: require("./images/ScalePeeler.webp"),
    set: "OUT",
  },
  {
    name: "Redback Shroud",
    ruling:
      "\n There is no way to generate Silver tokens in the Outsiders set. This effect in particular is designed to be combined with Silver generation effects in other sets.\n\u203B\n Redback Shroud’s activated ability is an Attack Reaction, and can only be activated in the reaction step of combat.\n\u203B\n Any -1{d} counters are removed from the Redback Shroud when it goes to the graveyard. If it is then equipped, it will not have any -1{d} counters on it.\n\u203B\n Redback Shroud's triggers and resolves during the start of turn phase. There is no priority and it can not be responded to.\n\u203B\n Decreasing the cost to play a card does not decrease the actual cost of the card for the purposes of effects that reference cost.",
    cardImage: require("./images/RedbackShroud.webp"),
    set: "OUT",
  },
  {
    name: "Infiltrate",
    ruling:
      "\n The card is banished face-up into the owner’s banished zone.\n\u203B\n You may play the card even if it does not have talents or classes that match your hero.\n\u203B\n If you play another hero’s card it is considered to be controlled by you, but still owned by the player whose deck it came from, until it becomes a new card (i.e. when it gets turned face-down or moves to a zone outside the arena).\n\u203B\n Effects that put themselves on the bottom of your deck have received errata that put them on the bottom of the “owner’s deck”. If you play a card you don’t own with this effect, it does not go on the bottom of your deck.\n\u203B\n When a card is cleared it goes to the owner’s graveyard, not the graveyard of the player that played it (e.g. after resolving or when the combat chain closes).\n\u203B\n If the card is not played by the end of your next turn, it simply remains in the banished zone.\n\u203B\n If the card is played by the hero or otherwise moved from the banished zone, before you play it, you can no longer play that card.\n\u203B\n The card must be legal to play, and you must still pay the appropriate costs to play it. E.g. if the card is an action, you must have an action point to play it on your own turn.",
    cardImage: require("./images/Infiltrate.webp"),
    set: "OUT",
  },

  {
    name: "Shake Down",
    ruling:
      "\n If Shake Down is put on the active chain link as the attacking card by Uzuri’s effect, it would have the ability because you have activated an attack reaction this chain link.\n\u203B\n When Shake Down’s ability resolves, the attacking player picks a color before the opponent reveals their hand.\n\u203B\n The controller of Shake Down chooses the color and the card that is banished based on that color.",
    cardImage: require("./images/ShakeDown.webp"),
    set: "OUT",
  },
  {
    name: "Spreading Plague",
    ruling:
      "\n X is determined to be the current number of defending cards on the active chain link at the time that Spreading Plague resolves, not when it was played, or any time after it resolves.\n\u203B\nDefending cards include equipment and resolved defense reactions on the active chain link.",
    cardImage: require("./images/SpreadingPlague.webp"),
    set: "OUT",
  },
  {
    name: "Back Stab",
    ruling:
      "\n If Back Stab is put on the active chain link as an attacking card by Uzuri's effect, Back Stab's continuous effect would only affect defense reactions that have not yet been played by the defending player. Any defense reactions already on the chain link or waiting to resolve on the stack are not affected.\n\u203B\n Back Stab does not prevent defense reaction abilities from being activated (e.g. Oldhim)",
    cardImage: require("./images/BackStab.webp"),
    set: "OUT",
  },
  {
    name: "Sneak Attack",
    ruling:
      "\n If Sneak Attack is put on the active chain link as the attacking card by Uzuri’s effect, it would have the +4{p} because you have activated an attack reaction this chain link.",
    cardImage: require("./images/SneakAttack.webp"),
    set: "OUT",
  },
  {
    name: "Isolate",
    ruling:
      "\n If Isolate is put on the active chain link as an attacking card by Uzuri's effect, Isolate's dominate effect would only affect defense reactions that have not yet been played by the defending player. Any defending cards (including defense reactions already on the chain link or waiting to resolve on the stack) are not affected.",
    cardImage: require("./images/Isolate.webp"),
    set: "OUT",
  },
  {
    name: "Malign",
    ruling:
      "\n Malign stops its damage from being prevented by prevention effects. It does not stop the defending hero from adding defending cards to the chain link.\n\u203B\n If a prevention effect tries to prevent damage from Malign, each replacement effect will still try to do everything else other than preventing that damage. E.g. a card with Ward would still be destroyed.\n\u203B\n Players can still attempt to prevent damage (apply optional prevention effects) even when the damage cannot be prevented.\n\u203B\n An ongoing-prevention effect does not have its prevention amount reduced when the effect does not actually prevent any amount of damage. E.g. Crown of Seed's ongoing-prevention effect would not have its prevention amount reduced and would still be able to prevent 1 damage later in the turn.",
    cardImage: require("./images/Malign.webp"),
    set: "OUT",
  },
  {
    name: "Mask of Many Faces",
    ruling:
      "\nThe attack action card gains the name in addition to its own name. E.g. If you name “Head Jab” and play Surging Strike, it would have both names “Head Jab” and “Surging Strike”.\n\u203B\n You may only name a card if that card exists and is legal in the format being played.\n\u203B\n Tokens are not cards, and can not be named unless there is a card with the same name.\n\u203B\n The attack action card later loses that name once it enters another zone in the arena, E.g. when the combat chain closes and the card is put in the graveyard, the gained name is lost.",
    cardImage: require("./images/MaskOfManyFaces.webp"),
    set: "OUT",
  },
  {
    name: "Cyclone Roundhouse",
    ruling:
      "\n This is a trigger that happens when players move to the reaction step. Both players have an opportunity to respond to that trigger. After that trigger resolves both players receive priority in reaction step to act before game moves to damage step.\n\u203B\n Any defending card on each chain link may be banished this way, including equipment and defense reactions.\n\u203B\n A defending card that is banished this way is no longer considered to be defending on its chain link and thus is not calculated in the total defense against an attack. Damage is not retroactively dealt to respective targets for resolved (previous) chain links.",
    cardImage: require("./images/CycloneRoundhouse.webp"),
    set: "OUT",
  },
  {
    name: "Dishonor",
    ruling:
      "\n Bonds of Ancestry must be the last attack on the combat chain for Dishonor to gain +2{p}.\n\u203B\n Surging Strike, Descendent Gustwave, and Bonds of Ancestry do not have to be in any specific order on the combat chain to meet the condition for the on-hit trigger, just that you control them when the triggered effect resolves.\n\u203B\n When a hero loses their abilities, simply treat their text box as empty.\n\u203B\n If a hero loses their abilities this way, they are not prevented from gaining abilities from other effects (e.g. Brainstorm).",
    cardImage: require("./images/Dishonor.webp"),
    set: "OUT",
  },
  {
    name: "Head Leads the Tail",
    ruling:
      "\n You may not name “Head Leads the Tail” as the effect requires you to name another card.\n\u203B\n You may only name a card if that card exists and is legal in the format being played.\n\u203B\n Tokens are not cards, and can not be named unless there is a card with the same name. Tokens (which can not be named) are distinct from token-rarity cards. E.g. You may name attack action cards like Phoenix Flame.\n\u203B\n You can name any type of card (eg: Energy Potion) but it will only get +1{p} if the named card is an attack action card.",
    cardImage: require("./images/HeadLeadstheTail.webp"),
    set: "OUT",
  },
  {
    name: "Wander With Purpose",
    ruling:
      "\n Discarding a card with cost 0 is optional. If you do, you are required to search your deck for a card with combo.\n\u203B\n You may purposefully fail to find a card with combo in your deck when searching.\n\u203B\n If you fail to find a card when searching, you do not banish any cards, but you are still required to shuffle your deck.\n\u203B\n If the card is not played by the end of the turn, it simply remains in the banished zone.\n\u203B\n There is no priority to respond between choosing whether to discard and searching your deck.",
    cardImage: require("./images/WanderWithPurpose.webp"),
    set: "OUT",
  },
  {
    name: "Visit the Floating Dojo",
    ruling:
      "\n This is not a targeted effect, you are not required to have both a Surging Strike and a card with combo in your graveyard to play this.\n\u203B\n The effect is not optional. When this resolves, if you have a Surging Strike and/or card with combo in your graveyard, you must put them on the top and/or bottom of your deck.\n\u203B\n If you only have either Surging Strike or a card with combo in your graveyard, but not both, you put the card that you have on the top or bottom of your deck. If you have neither, the effect simply fails.\n\u203B\n You may put the cards in any combination on the top and/or bottom of your deck. You are not required to put both on the top, or both on the bottom.\n\u203B\n You’re required to show your opponent the two cards you are putting into your deck. You are not required to share with them which of those cards (and what order) are put to the top and/or bottom.",
    cardImage: require("./images/VisitTheFloatingDojo.webp"),
    set: "OUT",
  },
  {
    name: "Bonds of Ancestry",
    ruling:
      "\n A card has Gustwave in its name if “Gustwave” is one of the whole words of one or more of the names of the card. If a card has no name, it does not have “Gustwave” in its name.\n\u203B\n Banishing a card from your graveyard is optional. If you do, searching your deck is mandatory.\n\u203B\n While searching, you may fail to find a card with the same name as the card that you banished. Even if you fail to find, you must shuffle your deck.\n\u203B\n If you do not play the banished card this combat chain, it remains banished.\n\u203B\n Decreasing the cost to play a card does not decrease the actual cost of the card for the purposes of effects that reference cost.",
    cardImage: require("./images/BondsOfAncestry.webp"),
    set: "OUT",
  },

  {
    name: "Recoil",
    ruling:
      "\n The player who was hit chooses the card in their hand to put on top of their deck. If they have no cards in hand, the effect simply fails.",
    cardImage: require("./images/Recoil.webp"),
    set: "OUT",
  },
  {
    name: "Spinning Wheel Kick",
    ruling:
      "\nIf Spinning Wheel Kick is played by the opponent, and its on-hit effect triggers, it is put on the bottom of your (the owner’s) deck, not the deck of the player who played it.",
    cardImage: require("./images/SpinningWheelKick.webp"),
    set: "OUT",
  },
  {
    name: "Back Heel Kick",
    ruling:
      "\n Effects that increase power are applied as events. This effect modifies that event (and thus the result of the effect) to increase the power by an additional 1.\n\u203B\n This effect increases ALL instances of effects that increase power, not just the first. If two or more effects would increase the power of Back Heel Kick by 1, then each of those effects instead increase the power by 2.\n\u203B\n Effects that apply when Back Heel Kick is played and on the stack (e.g. Come to Fight) will be affected by its ability.\n\u203B\n Effects that set or decrease power are not modified by Back Heel Kick’s effect (e.g. -2{p} would not become -1{p}).",
    cardImage: require("./images/BackHeelKick.webp"),
    set: "OUT",
  },
  {
    name: "Be Like Water",
    ruling:
      "\n The Be Like Water gains the name in addition to its own name. E.g. If you choose“Head Jab”, it would have both names “Head Jab” and “Be Like Water”.\n\u203B\n Be Like Water later loses that name once it enters another zone in the arena, E.g. when the combat chain closes and Be Like Water is put in the graveyard, the gained name is lost.",
    cardImage: require("./images/BeLikeWater.webp"),
    set: "OUT",
  },
  {
    name: "Descendent Gustwave",
    ruling:
      "\n Decreasing the cost to play a card does not decrease the actual cost of the card for the purposes of effects that reference cost.",
    cardImage: require("./images/DescendentGustwave.webp"),
    set: "OUT",
  },

  {
    name: "One-Two Punch",
    ruling: "\n The source of the 2 damage is One-Two Punch.",
    cardImage: require("./images/OneTwoPunch.webp"),
    set: "OUT",
  },
  {
    name: "Riptide",
    ruling:
      "\n The first effect triggers when the card is played from hand, but does not resolve until after the card has finished being played. You do not put a card in arsenal part-way through playing a card.\n\u203B\n The first effect resolves before the played card resolves.\n\u203B\n The second effect triggers whenever a trap you control triggers. Traps typically trigger when they resolve and become defending (e.g. “When this defends”), but may also have additional trigger conditions that must be met for the trap to trigger.\n\u203B\n Even if the trap’s triggered effect does not affect the gamestate, if the trigger condition is met and it has triggered, then Riptide’s second effect will also be triggered.\n\u203B\n Both effects can trigger any number of times each turn, as long as their trigger condition is met.",
    cardImage: require("./images/Riptide.webp"),
    set: "OUT",
  },
  {
    name: "Barbed Castaway",
    ruling:
      "\n If an effect allows you to activate a bow an additional time, you choose which ability you wish to activate an additional time when you activate the bow for that additional time. It would not allow you to activate both abilities additional times. E.g. Tri-Shot.\n\u203B\n If an effect allows you to activate the abilities of a bow an additional time, each ability on Barbed Castaway is able to be activated one additional time each. E.g. Snap Shot.\n\u203B\n Both effects of the abilities are optional. You may activate either ability without having an arrow in hand, or face down in arsenal, and the effect would simply do nothing.\n\u203B\n Turning a card face-up is not considered revealing the card or putting the card face-up in arsenal. It is simply changing its state from face-down to face-up.",
    cardImage: require("./images/BarbedCastaway.webp"),
    set: "OUT",
  },
  {
    name: "Trench of Sunken Treasure",
    ruling:
      "\n Putting the face-down card from your arsenal on the bottom of your deck is the cost for activating this ability and can not be responded to.\n\u203B\n If you have two or more face-down cards in your arsenal, you choose which card is put on the bottom of your deck.",
    cardImage: require("./images/TrenchOfSunkenTreasure.webp"),
    set: "OUT",
  },
  {
    name: "Quiver of Abyssal Depths",
    ruling:
      "\n This is not a targeted effect, you are not required to have 3 arrows with different names in your graveyard to play this.\n\u203B\n The effect is not optional. When this resolves, choose 0-3 arrows with different names in your graveyard, and shuffle them into your deck. You may choose less than the number of arrows you have with different names in your graveyard.\n\u203B\n If you choose 0 arrows for the effect, you must still shuffle your deck.",
    cardImage: require("./images/QuiverOfAbyssalDepths.webp"),
    set: "OUT",
  },
  {
    name: "Quiver of Rustling Leaves",
    ruling:
      "\n If the card revealed is not an arrow card, it remains on the top of the deck and Quiver of Rustling Leaves is NOT destroyed.\n\u203B\n If the card revealed is an arrow, but can not be put into your arsenal (e.g. if you have no empty arsenal zones), then it remains on the top of the deck and Quiver of Rustling Leaves is destroyed.\n\u203B\n You can activate Quiver of Rustling Leaves two or more times in a row by holding priority, even if the top card of the deck is an arrow. In this case, the resolution of the first will put the arrow face-up in arsenal and destroy Quiver of Rustling Leaves, the second and subsequent resolutions will still reveal the top card and attempt to put the card into arsenal if it’s an arrow.",
    cardImage: require("./images/QuiverOfRustlingLeaves.webp"),
    set: "OUT",
  },
  {
    name: "Crow's Nest",
    ruling:
      "\n If a card in arsenal is turned face-up, it is not considered to have been put face-up into your arsenal from your deck.\n\u203B\n A card can have two or more aim counters on it, but it does not have twice the number of effects.",
    cardImage: require("./images/CrowsNest.webp"),
    set: "OUT",
  },
  {
    name: "Driftwood Quiver",
    ruling:
      "\n This is not a targeted effect, you are not required to have a card in your arsenal to activate this.\n\u203B\n This effect is not optional. If you have a card in arsenal, you must put it on the bottom of your deck.\n\u203B\n If you have two or more in your arsenal, you choose which card is put on the bottom of your deck.",
    cardImage: require("./images/DriftwoodQuiver.webp"),
    set: "OUT",
  },

  {
    name: "Wayfinder's Crest",
    ruling:
      "\n This effect triggers when Wayfinder's Crest becomes a defending card, even if it is added as a defending card to the combat chain by an effect.\n\u203B\n You may target yourself with this effect. If you do, you look at the top card of your own deck.\n\u203B\n If you target an opposing hero, they do not have the privilege of looking at that card from this effect.",
    cardImage: require("./images/WayfindersCrest.webp"),
    set: "OUT",
  },
  {
    name: "Amplifying Arrow",
    ruling:
      "\n Effects that increase power are applied as events. This effect modifies that event (and thus the result of the effect) to increase the power by an additional 1.\n\u203B\n This effect increases ALL instances of effects that increase power, not just the first. If two or more effects would increase the power of Amplifying Arrow by 1, then each of those effects instead increase the power by 2.\n\u203B\n Effects that apply when Amplifying Arrow is played and on the stack (e.g. Come to Fight) will be affected by its ability.\n\u203B\n Effects that set or decrease power are not modified by Amplifying Arrow’s effect (e.g. -2{p} would not become -1{p}).",
    cardImage: require("./images/AmplifyingArrow.webp"),
    set: "OUT",
  },
  {
    name: "Barbed Undertow",
    ruling:
      "\n The choice of color is made on the resolution of the trigger.\n\u203B\n Barbed Undertow prevents the player from pitching a card with the chosen color strip. Those cards can still be played, or used to pay additional costs such as discarding or revealing.",
    cardImage: require("./images/BarbedUndertow.webp"),
    set: "OUT",
  },

  {
    name: "Buzzsaw Trap",
    ruling:
      "\n “When this defends” is an event-based trigger. The power of the attack is checked at the time this resolves and becomes a defending card (i.e. defends the attack). If the trigger condition is met only after this resolves, then this does not trigger.\n\u203B\n Any effect that increases the power of an attack is retroactively and proactively prevented by this triggered effect (e.g. gets, gains, has etc.). This typically makes the modified power of an attack equal to its base power.\n\u203B\n Counters that increase power are also prevented from modifying power by Buzzsaw Trap.",
    cardImage: require("./images/BuzzsawTrap.webp"),
    set: "OUT",
  },
  {
    name: "Collapsing Trap",
    ruling:
      "\n “When this defends” is an event-based trigger. Whether the attack has go again is checked at the time this resolves and becomes a defending card (i.e. defends the attack). If the trigger condition is met only after this resolves, then this does not trigger.\n\u203B\n If there are fewer cards in the hero’s deck than how many they would draw, they draw all of those cards.\n\u203B\n If an effect triggers whenever a card is discarded (specifically one and not “one or more”), it triggers for each card discarded this way (e.g. Rhinar).",
    cardImage: require("./images/CollapsingTrap.webp"),
    set: "OUT",
  },
  {
    name: "Spike Pit Trap",
    ruling:
      "\n“When this defends” is an event-based trigger. Whether the attacking hero has played/activated a reaction is checked at the time this resolves and becomes a defending card (i..e defends the attack). If the trigger condition is met only after this resolves, then this does not trigger.\n\u203B\n If there is no attacking hero, then this can’t trigger.\n\u203B\n If there are no cards in the attacking hero’s deck, no card is put into the graveyard, and they do not lose any life this way (i.e. X=0).",
    cardImage: require("./images/SpikePitTrap.webp"),
    set: "OUT",
  },
  {
    name: "Melting Point",
    ruling:
      "\n When the dagger is destroyed, it is put into the opponent's graveyard. It is neither put into their inventory nor does it continue to exist in the arena.",
    cardImage: require("./images/MeltingPoint.webp"),
    set: "OUT",
  },
  {
    name: "Boulder Trap",
    ruling:
      "\n “When this defends” is an event-based trigger. The power of the attack is checked at the time this resolves and becomes a defending card (i.e. defends the attack). If the trigger condition is met only after this resolves, then this does not trigger.\n\u203B\n This effect is not optional. If the opponent controls at least one equipment, you must put a -1{d} counter on one of them.\n\u203B\n You may put a -1{d} count on an equipment, even if it doesn’t have the defense property, or it would bring its defense value below zero (when actually calculated, negative defense values become 0).",
    cardImage: require("./images/BoulderTrap.webp"),
    set: "OUT",
  },
  {
    name: "Pendulum Trap",
    ruling:
      "\n “When this defends” is an event-based trigger. Whether the attacking hero has played/activated a reaction is checked at the time this resolves and becomes a defending card (i.e. defends the attack). If the trigger condition is met only after this resolves, then this does not trigger.\n\u203B\n This effect is not optional.\n\u203B\n If there are 2 or less cards in their deck, put all the cards in the deck into the graveyard.",
    cardImage: require("./images/PendulumTrap.webp"),
    set: "OUT",
  },
  {
    name: "Tarpit Trap",
    ruling:
      "\n “When this defends” is an event-based trigger. Whether the attack has go again is checked at the time this resolves and becomes a defending card (i.e. defends the attack). If the trigger condition is met only after this resolves, then this does not trigger.\n\u203B\n Go again is a resolution ability not a trigger ability. An attack with go again defended with Tarpit Trap will still grant an action point in the link step of combat.\n\u203B\n The effect is still functional on the next attack action card to hit, even if that attack is on a new combat chain.\n\u203B\n This prevents any effect that would trigger the next time an attack action card hits, including on-hit and on-damage effects. It does not prevent effects from triggering if the attack deals damage in other ways (in steps other than the damage step of combat) or subsequent times an attack action card hits.\nIf an effect would trigger, but is prevented by this, it still counts towards the number of times it would trigger. For effects that say “The next time” or “The first time” that are prevented from triggering, they won’t trigger again.",
    cardImage: require("./images/TarpitTrap.webp"),
    set: "OUT",
  },
  {
    name: "Fletch a Red Tail",
    ruling:
      "\n Red cards are cards with a red color bar on the top of the card. Cards without a color bar have no color.",
    cardImage: require("./images/FletchARedTail.webp"),
    set: "OUT",
  },
  {
    name: "Fletch a Yellow Tail",
    ruling:
      "\n Yellow cards are cards with a yellow color bar on the top of the card. Cards without a color bar have no color.",
    cardImage: require("./images/FletchAYellowTail.webp"),
    set: "OUT",
  },
  {
    name: "Fletch a Blue Tail",
    ruling:
      "\n Blue cards are cards with a blue color bar on the top of the card. Cards without a color bar have no color.",
    cardImage: require("./images/FletchABlueTail.webp"),
    set: "OUT",
  },
  {
    name: "Murkmire Grapnel",
    ruling:
      "\n Murkmire Grapnel stops its damage from being prevented by prevented effects. It does not stop the defending hero from adding defending cards to the chain link.\n\u203B\n If a prevention effect tries to prevent damage from Murkmire Grapnel, each replacement effect will still try to do everything else other than preventing that damage. E.g. a card with Ward would still be destroyed.\n\u203B\n Players can still attempt to prevent damage (apply optional prevention effects) even when the damage cannot be prevented.\n\u203B\n An ongoing-prevention effect does not have its prevention amount reduced when the effect does not actually prevent any amount of damage.",
    cardImage: require("./images/MurkmireGrapnel.webp"),
    set: "OUT",
  },

  {
    name: "Spire Sniping",
    ruling:
      "\n Spire Sniping triggers when it is put face-up in arsenal or is turned face-up in arsenal. It does not trigger if it is put face-down in arsenal.\n\u203B\n This is not an opt effect, both cards must return to the top of the deck (not bottom), but you choose the order.",
    cardImage: require("./images/SpireSniping.webp"),
    set: "OUT",
  },
  {
    name: "Widowmaker",
    ruling:
      "\n Widowmaker does not prevent defense reaction abilities from being activated (e.g. Oldhim)\n\u203B\n All cards that are defending on the chain link are considered for whether it is being defended by fewer than 2 cards, including equipment and defense reactions.",
    cardImage: require("./images/WidowMaker.webp"),
    set: "OUT",
  },

  {
    name: "Flick Knives",
    ruling:
      "\n This is a targeted effect. The dagger must be under your control and not on the active chain link for you to activate this ability.\n\u203B\n If damage is dealt, it is considered a “hit event” with the dagger considered to have hit.\n\u203B\n The dagger itself is not an attack.\n\u203B\n If the dagger hits this way, the attack on the active chain link is not considered to have hit. This is relevant for effects that are conditional only on the attack hitting (Benji, on-hit effects on the attack etc.)\n\u203B\n If the dagger hits this way, the active chain link (but not the attack) is considered to have hit. This is relevant for effects that are conditional on a chain link hitting instead of an attack hitting (e.g. Mask of Momentum, Whirling Mist Blossom, etc.)\n\u203B\n The dagger is destroyed regardless of whether it hits.\n\u203B\n When the dagger is destroyed, it is put into the graveyard. It is neither put into your inventory nor continues to exist in the arena.\n\u203B\n If both a dagger deals damage due to these effects and an attack hits in the damage step in the same active chain link, this situation does not count as two separate chain links hitting. A chain link simply hits or it doesn't.",
    cardImage: require("./images/FlickKnives.webp"),
    set: "OUT",
  },
  {
    name: "Mask of Shifting Perspectives",
    ruling:
      "\n Mask of Shifting Perspectives can be activated (in the reaction step) even if you are not currently attacking with a dagger.\n\u203B\n Mask of Shifting Perspectives must be activated and resolved during the reaction step of combat, before a dagger is considered to have hit for the effect to trigger.\n\u203B\n The effect created by Mask of Shifting Perspectives triggers every time a dagger hits this turn, not just the first time.",
    cardImage: require("./images/MaskOfShiftingPerspectives.webp"),
    set: "OUT",
  },

  {
    name: "Stab Wound",
    ruling:
      "\n If a Dagger has hit from Hurl or Flick Knives, it counts towards the number of times a dagger has hit this combat chain.\n\u203B\n This is a life loss effect. It can not be prevented by damage prevention effects.",
    cardImage: require("./images/StabWound.webp"),
    set: "OUT",
  },
  {
    name: "Concealed Blade",
    ruling:
      "\n In limited formats, you can have any number of token-rarity cards in your card pool, and therefore your inventory during a game. For Outsiders limited specifically, you have access to any number of Spider’s Bite (if you’re an Assassin hero) or Harmonized Kodachi (if you’re a Ninja hero)\n\u203B\n In constructed formats, you only have the cards you’ve registered in your card pool, and they are only in your inventory if you didn’t choose them during the start of game procedure. If there are no daggers in your inventory, this effect fails.\n\u203B\n If you do not have an empty weapon zone to equip a dagger, the effect fails.\n\u203B\n If you have a 2H weapon equipped, and only 2 weapon zones, the effect fails.",
    cardImage: require("./images/ConcealedBlade.webp"),
    set: "OUT",
  },
  {
    name: "Knives Out",
    ruling:
      "\n Knives Out can be played (in the reaction step) even if you are not currently attacking with a dagger.",
    cardImage: require("./images/KnivesOut.webp"),
    set: "OUT",
  },

  {
    name: "Bleed Out",
    ruling:
      "\nIf a Dagger has dealt damage from Hurl or Flick Knives, it counts towards the amount of damage daggers have dealt this combat chain.\n\u203B\n  Decreasing the cost to play a card does not decrease the actual cost of the card for the purposes of effects that reference cost.",
    cardImage: require("./images/BleedOut.webp"),
    set: "OUT",
  },
  {
    name: "Hurl",
    ruling:
      "\n This is a targeted effect on an attack-trigger. The dagger must be under your control when the triggered effect is added to the stack. If you do not control a dagger this triggered effect does not get added to the stack (it does not resolve).\n\u203B\n If damage is dealt, it is considered a “hit event” with the dagger considered to have hit.\n\u203B\n The dagger itself is not an attack.\n\u203B\n If the dagger hits this way, the attack on the active chain link is not considered to have hit. This is relevant for effects that are conditional only on the attack hitting (Benji, on-hit effects on the attack etc.)\n\u203B\n If the dagger hits this way, the active chain link (but not the attack) is considered to have hit. This is relevant for effects that are conditional on a chain link hitting instead of an attack hitting (e.g. Mask of Momentum, Whirling Mist Blossom, etc.)\n\u203B\n The dagger is destroyed regardless of whether it hits.\n\u203B\n When the dagger is destroyed, it is put into the graveyard. It is neither put into your inventory nor continues to exist in the arena.\n\u203B\n If both a dagger deals damage due to these effects and an attack hits in the damage step in the same active chain link, this situation does not count as two separate chain links hitting. A chain link simply hits or it doesn't.",
    cardImage: require("./images/Hurl.webp"),
    set: "OUT",
  },
  {
    name: "Mask of Malicious Manifestations",
    ruling:
      "\n Putting a card from your hand or arsenal on the bottom of your deck is part of the cost for activating this ability and can not be responded to.\n\u203B\n When you reveal cards until you reveal an attack action card, you reveal them one at a time, and stop revealing cards until the condition is met or the effect fails. The revealed cards remain revealed until your stop revealing. Revealed cards are technically in the same zone, even while being revealed.\n\u203B\n Effects that trigger when one or more cards are revealed only trigger once (e.g. Korshem), even though you’re revealing cards one at a time because it’s all part of a single reveal event.\n\u203B\n If you reveal your entire deck without revealing an attack action card, the reveal effect fails to produce a result. Nothing is put into your hand, but you still shuffle.\n\u203B\n If the card you put on the top or bottom of the deck is an attack action card, it can be revealed and put into your hand if revealed this way.",
    cardImage: require("./images/MaskOfMaliciousManifestations.webp"),
    set: "OUT",
  },
  {
    name: "Toxic Tips",
    ruling:
      "\n You choose between Frailty, Inertia, or Bloodrot Pox at the time the triggered effect resolves.",
    cardImage: require("./images/ToxicTips.webp"),
    set: "OUT",
  },
  {
    name: "Codex of Frailty",
    ruling:
      "\n A player can’t put an attack action card from their graveyard into their arsenal if they don’t have any attack action cards in their graveyard, or they don’t have any empty arsenal zones.\n\u203B\n This effect is not optional. If a player has at least one attack action card in their graveyard and an empty arsenal zone, they must put one of those cards in their arsenal.\n\u203B\n You can play this card and have no cards in hand. If you are instructed to discard and you have no cards in hand, you simply don’t discard.\n\u203B\n Players choose and put the card in their arsenal starting with the turn player and going in player turn order (clockwise) around the table. Then the players that have successfully done so, choose and discard a card starting with the turn player and in the same player order.\n\u203B\n Creating Ponder and Frailty tokens is not dependent on the preceding effects.",
    cardImage: require("./images/CodexOfFrailty.webp"),
    set: "OUT",
  },

  {
    name: "Codex of Inertia",
    ruling:
      "\n A player can’t put a card from the top of their deck into their arsenal if they don’t have any cards in their deck, or they don’t have any empty arsenal zones.\n\u203B\n This effect is not optional. If a player has at least one card in their deck and an empty arsenal zone, they must put one of those cards in their arsenal.\n\u203B\n You can play this card and have no cards in hand. If you are instructed to discard and you have no cards in hand, you simply don’t discard.\n\u203B\n Players put the card in their arsenal starting with the turn player and going in player turn order (clockwise) around the table. Then the players that have successfully done so, choose and discard a card starting with the turn player and in the same player order.\n\u203B\n Creating Ponder and Inertia tokens is not dependent on the preceding effects.",
    cardImage: require("./images/CodexOfInertia.webp"),
    set: "OUT",
  },
  {
    name: "Codex of Bloodrot",
    ruling:
      "\n A player can’t put a card from their hand into their arsenal if they don’t have any cards in hand, or they don’t have any empty arsenal zones.\n\u203B\n This effect is not optional. If a player has at least one card in their hand, and an empty arsenal zone, they must put a card into their arsenal.\n\u203B\n Players choose and put one of those cards in their arsenal starting with the turn player and going in player turn order (clockwise) around the table.\n\u203B\n Creating Ponder and Bloodrot Pox tokens is not dependent on the preceding effects.",
    cardImage: require("./images/CodexOfBloodrot.webp"),
    set: "OUT",
  },
  {
    name: "Death Touch",
    ruling:
      "\n You choose between Frailty, Inertia, or Bloodrot Pox at the time the triggered effect resolves.",
    cardImage: require("./images/DeathTouch.webp"),
    set: "OUT",
  },

  {
    name: "Toxicity",
    ruling:
      "\n Losing {h} is not considered dealing damage. Effects that prevent damage (or otherwise modify damage) do not change how much life is lost from this effect. Effects that trigger when damage is dealt do not trigger when life is lost this way.",
    cardImage: require("./images/Toxicity.webp"),
    set: "OUT",
  },

  {
    name: "Virulent Touch",
    ruling:
      "\n Virulent Touch can’t be played from hand, even if an effect allows you to. Something that can not happen takes precedence over something that can happen.\n\u203B\nVirulent Touch triggers when the chain link resolves at the beginning of the resolution step of combat (after damage is dealt).",
    cardImage: require("./images/VirulentTouch.webp"),
    set: "OUT",
  },

  {
    name: "Bloodrot Trap",
    ruling:
      "\n“When this defends” is an event-based trigger. Whether the attacking hero has played/activated a reaction is checked at the time this resolves and becomes a defending card (i..e defends the attack). If the trigger condition is met only after this resolves, then this does not trigger.\n\u203B\nIf there is no attacking hero (e.g. this is defending against an ally attack), this does not trigger.",
    cardImage: require("./images/BloodrotTrap.webp"),
    set: "OUT",
  },

  {
    name: "Frailty Trap",
    ruling:
      "\n “When this defends” is an event-based trigger. Whether the attack has go again is checked at the time this resolves and becomes a defending card (i..e defends the attack). If the trigger condition is met only after this resolves, then this does not trigger.\n\u203B\nIf there is no attacking hero (e.g. this is defending against an ally attack), this does not create a token under the opponent’s control.",
    cardImage: require("./images/FrailtyTrap.webp"),
    set: "OUT",
  },

  {
    name: "Inertia Trap",
    ruling:
      "\n “When this defends” is an event-based trigger. The power of the attack is checked at the time this resolves and becomes a defending card (i..e defends the attack). If the trigger condition is met only after this resolves, then this does not trigger.\n\u203B\nIf there is no attacking hero (e.g. this is defending against an ally attack), this does not create a token under the opponent’s control.",
    cardImage: require("./images/InertiaTrap.webp"),
    set: "OUT",
  },

  {
    name: "Vambrace of Determination",
    ruling:
      "\n Vambrace of Determination reduces the maximum amount of damage a prevention effect can prevent on a single event of damage.\n\u203B\n Vambrace of Determination’s effect applies to ANY kind of prevention effect, as long as the damage that it is preventing is {p} damage.\n\u203B\n If it is a fixed-prevention effect (e.g. “The next time you’d be dealt damage, prevent 3 of that damage.”) it would simply prevent 1 less of that damage (e.g. it would essentially become “prevent 2 of that damage”).\n\u203B\n If it is an ongoing-prevention effect (e.g. “Prevent the next 3 damage dealt to your hero.”) it would simply reduce the prevention amount (e.g. it would essentially become “Prevent the next 2 damage dealt to your hero.)\n\u203B\n Vambrace of Determination does not reduce the {d} of defending cards or their effectiveness during damage calculation in the damage step of combat.\n\u203B\n If the opponent controls multiple prevention effects that could apply to an event of {p} damage, they choose which of those effects apply first. Vambrace of Determination’s effect only applies to the first of those effects that prevent the {p} damage.",
    cardImage: require("./images/VambraceOfDetermination.webp"),
    set: "OUT",
  },

  {
    name: "Silken Gi",
    ruling:
      "\n Increases to {r} costs are applied before decreases to {r} costs. A card can not be reduced below 0{r} to play.\n\u203B\n Decreasing the cost to play a card does not decrease the actual cost of the card for the purposes of effects that reference cost.",
    cardImage: require("./images/SilkenGi.webp"),
    set: "OUT",
  },

  {
    name: "Threadbare Tunic",
    ruling:
      "\n If you have only one card in your hand costing 1{r} you can't activate this ability to gain {r} to pay for that last card. You must activate this while you have no cards in hand.",
    cardImage: require("./images/ThreadbareTunic.webp"),
    set: "OUT",
  },

  {
    name: "Amnesia",
    ruling:
      "\nPlayers own the cards that they start the game with and they own tokens that they create. This is separate to “control” where some effects have you create (and own) something under an opponent’s control (e.g. Frostbite).\n\u203B\n Effects with text that reference the card that they are on by name are unaffected. For the avoidance of doubt, any card text that references its source card name can effectively be written/read as “this”. (e.g. Down and Dirty’s text can be written as “While THIS is in your arsenal, you may defend with it.”). This does not apply to effects with text that reference cards with the same name that aren’t its source. (e.g. Spinning Wheel Kick’s text can NOT be written as “If Twin Twisters or THIS was the last attack [...]”)\n\u203B\n If a card or token does not have a name, it is not affected by effects that specify cards or tokens by name. The opponent can not target or choose cards and tokens if the effect specifies by name.\nYou can not choose “nameless” as part of a name effect.\n\u203B\n Cards retain all of their other properties, including class, talent, type, subtypes etc.",
    cardImage: require("./images/Amnesia.webp"),
    set: "OUT",
  },

  {
    name: "Down and Dirty",
    ruling:
      "\n If Down and Dirty is in your arsenal and you are the defending hero, you may declare it as a defending card during the defend step of combat. You can not add Down and Dirty during any other step of combat or if you are not a defending hero.",
    cardImage: require("./images/DownAndDirty.webp"),
    set: "OUT",
  },

  {
    name: "Give and Take",
    ruling:
      "\n Give and Take triggers once each time an action card defends it on the combat chain. If the defending hero declares two or more defending action cards during the defend step, the Give and Take triggers once for each action card.\n\u203B\n If Give and Take is added to an already active chain link as an attacking card (i.e. with Uzuri's hero ability), then existing defending action cards on the combat chain do not cause the effect to trigger.\n\u203B\n You’re required to show your opponent the cards you are putting on top your deck. You are not required to share with them the order those cards are put to the top.",
    cardImage: require("./images/GiveAndTake.webp"),
    set: "OUT",
  },

  {
    name: "Gore Belching",
    ruling:
      "\n When you reveal cards until you reveal an attack action card, you reveal them one at a time, and stop revealing cards until the condition is met or the effect fails. The revealed cards remain revealed until your stop revealing.\n\u203B\nEffects that trigger when one or more cards are revealed only trigger once (e.g. Korshem), even though you’re revealing cards one at a time because it’s all part of a single reveal event.\n\u203B\nIf you reveal your entire deck without revealing an attack action card, the reveal effect fails to produce a result. No card is banished, Gore Belching gets -7{p}, and you shuffle your deck.\n\u203B\nIf Gore Belching is added to an already active chain link as an attacking card (i.e. with Uzuri's hero ability), then the effect does not trigger. No cards are revealed, it does not get -7{p}, and you do not shuffle your deck.",
    cardImage: require("./images/GoreBelching.webp"),
    set: "OUT",
  },
  {
    name: "Burdens of the Past",
    ruling:
      "\n If the target hero has one or more defense reaction cards in their graveyard, they can’t play defense reaction cards with the same name.\n\u203B\n If a defense reaction has no name (e.g. after being hit by Amnesia), then it can still be played.",
    cardImage: require("./images/BurdensOfThePast.webp"),
    set: "OUT",
  },
  {
    name: "Humble",
    ruling:
      "\n Simply treat their hero’s text box as empty.\n\u203B\nIf a hero loses their abilities this way, they are not prevented from gaining abilities from other effects (e.g. Brainstorm).",
    cardImage: require("./images/Humble.webp"),
    set: "OUT",
  },
  {
    name: "Infectious Host",
    ruling:
      "\nRepeating means if you control an Inertia token, create an Inertia under their control, and if you control a Bloodrot Pox token, create a Bloodrot Pox under their control.\n\u203B\nIf you control all three of Frailty, Inertia, and Bloodrot Pox tokens, create one of each under the hero’s control.\n\u203B\nIf you control multiple of a token you still only create one of that token under the hero’s control.\n\u203B\nYou don’t lose control of your tokens, you simply create tokens under the control of your opponent based on what you control.",
    cardImage: require("./images/InfectiousHost.webp"),
    set: "OUT",
  },
  {
    name: "Looking for a Scrap",
    ruling:
      "\nThe card banished from the graveyard must have exactly 1{p}. This includes weapon cards (e.g. Harmonized Kodachi).\n\u203B\nWhen an attack moves into the graveyard, it becomes a “fresh version” of that card and essentially loses all of the effects (especially {p} effects) that previously applied to it.\n\u203B\nYou do not control cards in your graveyard. Effects that increase the power of your attacks or cards you control do not apply to cards in your graveyard.",
    cardImage: require("./images/LookingForAScrap.webp"),
    set: "OUT",
  },
  {
    name: "Wreck Havoc",
    ruling:
      "\nTurning a card face-up is not considered revealing the card or putting the card face-up in arsenal. It is simply changing its state from face-down to face-up.\n\u203B\nThe effect is not optional. If the hero hit has a face-down card in arsenal it must be turned face-up, and then if there is a face-up defense reaction in their arsenal, destroy it.\n\u203B\nIf there are two or more defense reactions in the hero’s arsenal, you choose which card to destroy.\n\u203B\nIf there are face-down cards in the opponent’s arsenal, no cards are turned face-up.\n\u203B\nIf there are no face-up defender reactions in the hero’s arsenal, no cards are destroyed.\n\u203B\nWreck Havoc does not prevent defense reaction abilities from being activated (e.g. Oldhim)",
    cardImage: require("./images/WreckHavoc.webp"),
    set: "OUT",
  },
  {
    name: "Cut Down to Size",
    ruling:
      "\n Cut Down to Size will trigger when it hits a hero and it will check if the hero hit has 4 or more cards in hand when the layer resolves.\n\u203B\nThe hero hit chooses what card they discard.",
    cardImage: require("./images/CutDownToSize.webp"),
    set: "OUT",
  },
  {
    name: "Feisty Locals",
    ruling:
      "\n When you reveal cards until you reveal an attack action card, you reveal them one at a time, and stop revealing cards until the condition is met or the effect fails. The revealed cards remain revealed until your stop revealing.\n\u203B\nEffects that trigger when one or more cards are revealed only trigger once (e.g. Korshem), even though you’re revealing cards one at a time because it’s all part of a single reveal event.\n\u203B\nIf you reveal your entire deck without revealing an attack action card, the reveal effect fails to produce a result. No card is banished, Gore Belching gets -7{p}, and you shuffle your deck.\n\u203B\nIf Gore Belching is added to an already active chain link as an attacking card (i.e. with Uzuri's hero ability), then the effect does not trigger. No cards are revealed, it does not get -7{p}, and you do not shuffle your deck.",
    cardImage: require("./images/FeistyLocals.webp"),
    set: "OUT",
  },
  {
    name: "Freewheeling Renegades",
    ruling:
      "\n If this is defended by two or more action cards, it still only gets -2{p} in total.",
    cardImage: require("./images/FreewheelingRenegades.webp"),
    set: "OUT",
  },
  {
    name: "Spring Load",
    ruling:
      "\nSpring Load triggers during the attack step of combat. It will check if you have no cards when the layer resolves.\n\u203B\nIf you have no cards in your hand when it resolves then you draw cards afterwards, it does not lose the +{p} effect.",
    cardImage: require("./images/SpringLoad.webp"),
    set: "OUT",
  },
  {
    name: "Scout the Periphery",
    ruling:
      "\n You may target yourself with this effect. If you do, you look at the top card of your own deck.\n\u203B\nIf you target an opposing hero, they do not have the privilege of looking at that card from this effect.",
    cardImage: require("./images/ScoutThePeriphery.webp"),
    set: "OUT",
  },
  {
    name: "Brush Off",
    ruling:
      "\n If this prevention effect applies to an event of damage, it typically prevents all of that damage. The value of the damage is determined at the time Brush Off is checked for when it is active. E.g. If you would be dealt 2 damage, Brush Off (red) would prevent 2 damage.\n\u203B\nBrush Off (blue) is only active if you would be dealt exactly 1 damage.\n\u203B\nBrush Off’s effect is applied like any other prevention effect. It is only applied to damage if the amount of damage is X or less.\n\u203B\nIf the damage amount is more than X, this effect is not applied or consumed. However, if another prevention effect would reduce this to X or less, then this effect may apply before the damage would be dealt. E.g. 7 damage, Oasis Respite (red) prevents 4 reducing it to 3 damage, Brush Off (red) prevents the rest.\n\u203B\nIf you control two or more prevention effects, and both would apply to an event of damage, you may decide which of those prevention effects to apply. If the first prevention effect would reduce the damage to 0, no more prevention effects would apply (and be consumed) to the damage event.",
    cardImage: require("./images/BrushOff.webp"),
    set: "OUT",
  },
  {
    name: "Peace of Mind",
    ruling:
      "\n After preventing damage, any remaining prevention amount does not carry-over to events where you take damage.",
    cardImage: require("./images/PeaceOfMind.webp"),
    set: "OUT",
  },
  {
    name: "Bloodrot Pox",
    ruling:
      "\n This triggers and resolves in the end phase. There is no priority and it can not be responded to.\n\u203B\nThis triggered effect resolves before choosing an arsenal card, putting pitched cards on the bottom of your deck, and drawing up to your intellect.\n\u203B\nIf there are two or more effects that trigger in the end phase, the turn player decides the order that those layers resolve.\n\u203B\nEffects that increase costs to play cards or activate abilities do not alter the cost to prevent the damage from this effect.",
    cardImage: require("./images/BloodrotPox.webp"),
    set: "OUT",
  },
  {
    name: "Frailty",
    ruling:
      "\n This triggers and resolves in the end phase. There is no priority and it can not be responded to.\n\u203B\nThis triggered effect resolves before choosing an arsenal card, putting pitched cards on the bottom of your deck, and drawing up to your intellect.\n\u203B\nIf there are two or more effects that trigger in the end phase, the turn player decides the order that those layers resolve.",
    cardImage: require("./images/Frailty.webp"),
    set: "OUT",
  },
  {
    name: "Inertia",
    ruling:
      "\n This triggers and resolves in the end phase. There is no priority and it can not be responded to.\n\u203B\nThis triggered effect resolves before choosing an arsenal card, putting pitched cards on the bottom of your deck, and drawing up to your intellect.\n\u203B\nIf there are two or more effects that trigger in the end phase, the turn player decides the order that those layers resolve.",
    cardImage: require("./images/Inertia.webp"),
    set: "OUT",
  },
];

export default cardData;
