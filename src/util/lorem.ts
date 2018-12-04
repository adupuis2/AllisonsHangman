const text = `I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.
The other thing with Lorem Ipsum is that you have to take out its family. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words.
I know words. I have the best words. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? If Trump Ipsum weren’t my own words, perhaps I’d be dating it.
I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. Despite the constant negative ipsum covfefe. You have so many different things placeholder text has to be able to do, and I don't believe Lorem Ipsum has the stamina. When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words.
Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. This placeholder text is gonna be HUGE. If Trump Ipsum weren’t my own words, perhaps I’d be dating it. If Trump Ipsum weren’t my own words, perhaps I’d be dating it.
You could see there was text coming out of her eyes, text coming out of her wherever. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words.
I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a good decision. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't.
The best taco bowls are made in Trump Tower Grill. I love Hispanics! This placeholder text is gonna be HUGE.
The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do it. It's inappropriate. It's not nice."
You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. My placeholder text, I think, is going to end up being very good with women.
You could see there was text coming out of her eyes, text coming out of her wherever.
Lorem Ipsum is FAKE TEXT! He’s not a word hero. He’s a word hero because he was captured. I like text that wasn’t captured. Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. Be careful, or I will spill the beans on your placeholder text.
Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a good decision.
I know words. I have the best words. We have so many things that we have to do better... and certainly ipsum is one of them. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Despite the constant negative ipsum covfefe.
Lorem Ispum is a choke artist. It chokes! This placeholder text is gonna be HUGE. Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life. I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.
Be careful, or I will spill the beans on your placeholder text.
My text is long and beautiful, as, it has been well documented, are various other parts of my website. That other text? Sadly, it’s no longer a 10. Lorem Ipsum is FAKE TEXT!
You have so many different things placeholder text has to be able to do, and I don't believe Lorem Ipsum has the stamina. Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a good decision`.split(
  '\n',
);

export const getPlaceholderText = () => {
  const index = Math.floor(Math.random() * text.length);
  return text[index];
};
