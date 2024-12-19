const generateBtn = document.getElementById('generateBtn');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

// Array of quotes to choose from
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  }
];

// Function to generate a random quote
function generateQuote() {
  // Get random index from quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Animate quote text and author
  quoteText.textContent = `"${randomQuote.text}"`;
  authorText.textContent = `- ${randomQuote.author}`;

  // Reset the animation by removing and adding the class
  quoteText.style.animation = 'none';
  authorText.style.animation = 'none';
  
  // Trigger reflow (force animation)
  quoteText.offsetHeight; // trigger reflow
  authorText.offsetHeight; // trigger reflow

  // Reapply animation
  quoteText.style.animation = 'fadeInUp 1s ease-out forwards';
  authorText.style.animation = 'fadeInUp 1.2s ease-out forwards';
  authorText.style.animationDelay = '0.3s';
}

// Event listener to generate a new quote when the button is clicked
generateBtn.addEventListener('click', generateQuote);

// Generate a quote on page load
generateQuote();
