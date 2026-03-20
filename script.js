// =============================================
// TRANSCRIPT DATA
// =============================================
const TRANSCRIPT = [
  // INTRODUCTION (0:00 - 2:15)
  { time: 0, section: "Introduction", sectionTitle: "Introduction", type: "direction", text: "[Intro music]" },
  { time: 10, section: "Introduction", type: "host", text: "Welcome back to CodeShift, the podcast where we explore how technology is transforming the workplace one code commit at a time." },
  { time: 17, section: "Introduction", type: "host", text: "I\u2019m your host Tahasin, and in Episode 1, I broke down how AWS navigates AI from the inside. I talked to a senior engineer and a junior developer, who are both on my team, about what it\u2019s actually like to work with AI at one of the biggest tech companies on the planet." },
  { time: 33, section: "Introduction", type: "host", text: "After that episode, I kept asking myself, is that the whole story? AWS is only one type of organization. They build AI tools, they operate on a massive scale, so of course they\u2019re cautious." },
  { time: 46, section: "Introduction", type: "host", text: "What about an industry where the incentive isn\u2019t reliability, it\u2019s speed, where competitive advantage is measured in deal flow? What about private equity?" },
  { time: 56, section: "Introduction", type: "host", text: "And what about the third world I\u2019ve been living in this entire time, academia, where I\u2019m building production AI systems as a student with almost no guardrails?" },
  { time: 65, section: "Introduction", type: "host", text: "So this episode, I\u2019m comparing all three, same questions, different institutions, and one research question." },
  { time: 72, section: "Introduction", type: "host", text: "How and why do these three sectors differ in their approach to AI adoption? And what do those differences reveal about institutional priorities and risk tolerance?" },
  { time: 83, section: "Introduction", type: "host", text: "To answer that, I interviewed Jack Harnett, who leads data intelligence strategy at Brookfield Asset Management, and John Steer, an AI engineer on my team. I\u2019ll weave in my AWS interviews from Episode 1 and my own experience building AI at Northwestern." },
  { time: 99, section: "Introduction", type: "host", text: "For some quick context, McKinsey\u2019s 2025 State of AI Report says 88% of organizations use AI, but only 6% see real enterprise-level impact. The tech has spread fast, the organizational change hasn\u2019t kept up." },
  { time: 115, section: "Introduction", type: "host", text: "And Stanford\u2019s HAI AI Index found less than half of US computer science teachers feel equipped to teach AI. So there\u2019s massive adoption in industry, but there\u2019s also a massive readiness gap in education." },
  { time: 128, section: "Introduction", type: "host", text: "That tension is what this episode is about to address." },

  // AWS RECAP (2:20 - 3:20)
  { time: 140, section: "The AWS Recap", sectionTitle: "Section 1 \u2014 Big Tech: Trust First", type: "host", text: "Quick recap from Episode 1. At AWS, AI tools spread through word of mouth, not mandates. The training is mostly about what not to do. Like, don\u2019t paste code into ChatGPT and stick with internal tools." },
  { time: 154, section: "The AWS Recap", type: "host", text: "Ian, a senior engineer, told me Amazon Q underperforms compared to external models. He got flagged for using Gemini, and he raised a real concern. That AI makes it easy to generate filler. And at a company where clear thinking is very sacred, that\u2019s dangerous." },
  { time: 171, section: "The AWS Recap", type: "host", text: "A 2023 report by Gmyrek and his colleagues explains the deeper pattern. AI doesn\u2019t just automate tasks. It changes who holds power inside an organization. At AWS, where authority flows through review boards, that shift gets managed carefully. The guardrails are about accountability, not just technology." },
  { time: 192, section: "The AWS Recap", type: "host", text: "Bottom line, AWS isn\u2019t racing to be first. It\u2019s trying to be the most trusted." },
  { time: 198, section: "The AWS Recap", type: "host", text: "Keep that in mind, because Brookfield is the mirror image." },

  // BROOKFIELD (3:22 - 18:34)
  { time: 202, section: "Private Equity: Brookfield", sectionTitle: "Section 2 \u2014 Private Equity: Speed as Strategy", type: "host", text: "Brookfield manages over a trillion dollars. When Jack started six years ago, it was $600 billion. The goal in four years, $2 trillion. And they\u2019re doing it with a very lean team." },
  { time: 215, section: "Private Equity: Brookfield", type: "host", text: "Here\u2019s why that matters. When you\u2019re growing that fast with that few people, AI is existential. And Cao\u2019s research in ACM Computing Surveys confirms it. Financial institutions are built to price risk. AI fits naturally into how they already think." },
  { time: 233, section: "Private Equity: Brookfield", type: "host", text: "So when I asked Jack about how AI changed his day-to-day, here\u2019s what he said." },

  { time: 238, section: "Private Equity: Brookfield", type: "clip", text: "[CLIP: Jack on coding agents \u2014 Claude Code as implementer, Codex as reviewer, \u2018order of magnitude gain in efficiency,\u2019 spec-driven development]", speaker: "Jack Harnett" },

  { time: 359, section: "Private Equity: Brookfield", type: "host", text: "Let me unpack that. Jack doesn\u2019t just use AI. He\u2019s built a whole system. Claude Code implements, Codex reviews. He\u2019s the final check. That\u2019s not vibe coding. That\u2019s spec-driven development. It\u2019s structured and intentional." },
  { time: 373, section: "Private Equity: Brookfield", type: "host", text: "But the bigger shift was cultural." },

  { time: 377, section: "Private Equity: Brookfield", type: "clip", text: "[CLIP: Jack on IT\u2019s relationship with the business being \u2018turned on its head\u2019]", speaker: "Jack Harnett" },

  { time: 416, section: "Private Equity: Brookfield", type: "host", text: "For decades, IT was the department people avoided. But now the business can\u2019t stop asking what AI can do. That inversion is massive." },
  { time: 427, section: "Private Equity: Brookfield", type: "host", text: "And it\u2019s exactly what Gmyrek\u2019s research describes. AI changes who holds power. In finance, that power stays with capital decision makers. And at AWS, it\u2019s distributed through review processes. Again, same tech, different architecture." },
  { time: 444, section: "Private Equity: Brookfield", type: "host", text: "Jack compared this moment to the iPhone and people clinging to BlackBerries." },

  { time: 450, section: "Private Equity: Brookfield", type: "clip", text: "[CLIP: Jack on the \u2018iPhone moment\u2019]", speaker: "Jack Harnett" },

  { time: 508, section: "Private Equity: Brookfield", type: "host", text: "That anecdote says everything about institutional behavior. At AWS, the company decides which tools employees can use. At Brookfield, employees decided for the company. And instead of cracking down, leadership recognized the signal. People want this. So let\u2019s make it official and make it safe." },
  { time: 528, section: "Private Equity: Brookfield", type: "host", text: "That\u2019s a fundamentally different relationship between an organization and its technology. So how do they prepare people? John nailed it." },

  { time: 538, section: "Private Equity: Brookfield", type: "clip", text: "[CLIP: John on \u2018exposure therapy\u2019 \u2014 give people tools, let adoption emerge]", speaker: "John Steer" },

  { time: 597, section: "Private Equity: Brookfield", type: "host", text: "That phrase, exposure therapy, tells you a lot. It assumes people are capable. It assumes the tool is intuitive enough to learn by doing. Compare that to AWS, where the instinct is to train on the risks first and grant access second. One culture trusts the individual, the other trusts the process. And both are rational. They just optimize for different things." },
  { time: 621, section: "Private Equity: Brookfield", type: "host", text: "And this connects to a January 2026 HBR article. Match your AI strategy to your organization\u2019s reality. The argument is simple. AI strategies only work when they fit the existing culture. Brookfield\u2019s tool-first approach works because they\u2019re wired for speed. AWS\u2019s governance-first works because they demand reliability. It\u2019s institutional DNA." },
  { time: 647, section: "Private Equity: Brookfield", type: "host", text: "But access without governance is chaos. And Brookfield knows that. Jack had two non-negotiables. Human review on everything and every output must be citable." },

  { time: 660, section: "Private Equity: Brookfield", type: "clip", text: "[CLIP: Jack on halting Total IQ because it lacked citation features]", speaker: "Jack Harnett" },

  { time: 768, section: "Private Equity: Brookfield", type: "host", text: "Jack pulled the plug on a tool people wanted because it couldn\u2019t show its work. That\u2019s not a company without principles. That\u2019s a company with different principles. AWS governs at the point of entry. Brookfield governs at the point of decision." },
  { time: 785, section: "Private Equity: Brookfield", type: "host", text: "Now, is Brookfield moving too fast? Let\u2019s hear what Jack and John have to say about this." },

  { time: 792, section: "Private Equity: Brookfield", type: "clip", text: "[CLIP: Jack on the VC mindset \u2014 more failures than successes, but a few 100x gains]", speaker: "Jack Harnett" },

  { time: 829, section: "Private Equity: Brookfield", type: "clip", text: "[CLIP: John \u2014 \u2018the opportunity cost of not trying is significantly higher than trying and failing\u2019]", speaker: "John Steer" },

  { time: 869, section: "Private Equity: Brookfield", type: "host", text: "Notice how different that logic is from AWS? At Amazon, a failed project at scale can take down a service millions of people depend on. The cost of failure is catastrophic, so you have to move carefully. At Brookfield, with a private deployment footprint and a lean team, the math flips." },
  { time: 892, section: "Private Equity: Brookfield", type: "host", text: "And McKinsey\u2019s data backs this up. 50% of AI high performers are fundamentally restructuring their workflows. It\u2019s not about the tool. It\u2019s about whether the organization is willing to change around it." },
  { time: 902, section: "Private Equity: Brookfield", type: "host", text: "One last thing on Brookfield. John introduced a framing I can\u2019t stop thinking about." },

  { time: 909, section: "Private Equity: Brookfield", type: "clip", text: "[CLIP: John on AI as scalability for thinking \u2014 code scales processes, AI scales reasoning]", speaker: "John Steer" },

  { time: 960, section: "Private Equity: Brookfield", type: "host", text: "That distinction matters more than it sounds. For decades, the only things you could scale in a business were repetitive, rule-based tasks. Write the code, run it a million times. But judgment, synthesis, that\u2019s always required a human sitting down and thinking." },
  { time: 979, section: "Private Equity: Brookfield", type: "host", text: "What John is describing is the removal of that constraint. For a firm like Brookfield, where analytical capacity directly determines deal velocity, that\u2019s not a marginal improvement. It\u2019s a structural shift in what\u2019s possible, especially for white-collar work." },
  { time: 996, section: "Private Equity: Brookfield", type: "host", text: "And Cao\u2019s research confirms this. It\u2019s exactly how finance adopts technology. Not as a novelty, as a mechanism to compress decision cycles. That\u2019s what Brookfield is building with their platform BRELabs." },
  { time: 1012, section: "Private Equity: Brookfield", type: "host", text: "But there are risks. Jack\u2019s biggest concern isn\u2019t AI being wrong. It\u2019s AI having too much access." },

  { time: 1021, section: "Private Equity: Brookfield", type: "clip", text: "[CLIP: Jack on agents accessing data beyond what a user is authorized to see]", speaker: "Jack Harnett" },

  { time: 1104, section: "Private Equity: Brookfield", type: "host", text: "At AWS, the nightmare is shipping code you don\u2019t understand. At Brookfield, it\u2019s an agent surfacing a deal you weren\u2019t supposed to know about. Different industries, different nightmares." },

  // ACADEMIA (18:37 - 23:48)
  { time: 1117, section: "Academia", sectionTitle: "Section 3 \u2014 Academia: Freedom Without a Playbook", type: "host", text: "Okay, corporate giants covered. Now, academia. And honestly, this is where things get messy." },
  { time: 1125, section: "Academia", type: "host", text: "At Northwestern, I took CS 338 and built a production AI agent for Argon Labs. No policies, no training, no sign-off. Just, here\u2019s the problem, go build. Exhilarating, and honestly kind of terrifying." },
  { time: 1142, section: "Academia", type: "host", text: "UNESCO\u2019s 2023 guidance on generative AI explains why. Academic institutions don\u2019t answer to shareholders. They answer to principles. Intellectual freedom, scholarly integrity, things of that sort. And because every discipline is affected differently, there\u2019s no single playbook." },
  { time: 1163, section: "Academia", type: "host", text: "Some professors embraced AI, others banned it. Enforcement, the honor system. When I brought all this up with Jack, his reaction was strong." },

  { time: 1176, section: "Academia", type: "clip", text: "[CLIP: Jack on the Idiocracy analogy \u2014 your brain is like a muscle, AI dependency is a massive risk]", speaker: "Jack Harnett" },

  { time: 1300, section: "Academia", type: "host", text: "The joke lands, but the point is serious. Cognitive development requires struggle. If students outsource their thinking, they don\u2019t build the muscle they need when the tools fail." },
  { time: 1312, section: "Academia", type: "host", text: "Stanford\u2019s data makes this concrete. Less than half of U.S. computer science teachers feel ready to teach AI. It\u2019s very evident that the institutions supposed to prepare us have their own readiness gap." },
  { time: 1327, section: "Academia", type: "host", text: "And John saw both sides." },

  { time: 1335, section: "Academia", type: "clip", text: "[CLIP: John on education needing to embrace AI, but acknowledging it\u2019s making people less capable at independent reasoning]", speaker: "John Steer" },

  { time: 1403, section: "Academia", type: "host", text: "And that\u2019s the paradox. AI is extraordinary for learning. But it can hollow out learning too, if students stop doing the hard cognitive work." },
  { time: 1413, section: "Academia", type: "host", text: "I call this the accountability gap. Corporate environments have backstops. Human review at Brookfield, code review at AWS. Academia has grades. And grades can\u2019t tell the difference between deep understanding and deep prompting." },

  // ANALYSIS + CONVERGENCE (23:48 - 26:20)
  { time: 1428, section: "Analysis", sectionTitle: "Section 4 \u2014 Where It All Comes Together", type: "host", text: "Alright, so let me bring it all together with three key contrasts." },
  { time: 1434, section: "Analysis", type: "host", text: "First, governance. AWS governs at entry. Which tools can you use? Brookfield governs at output. Is the result verifiable? Academia governs at assessment. Did you learn? The HBR article nails this. AI strategies only work when they match the institution\u2019s existing structure." },
  { time: 1458, section: "Analysis", type: "host", text: "Second, speed. AWS is deliberate. Slightly inferior tool over a data leak. Brookfield is aggressive. Can\u2019t move fast enough. Academia, well, that depends on the professor." },
  { time: 1475, section: "Analysis", type: "host", text: "Third, what keeps them up at night? AWS fears code they don\u2019t understand. Brookfield fears data leaking across boundaries. Academia fears something more fundamental. That the next generation won\u2019t be able to think." },
  { time: 1496, section: "Analysis", type: "host", text: "Now, here\u2019s my thesis. And it\u2019s evolved a lot since I started this project. These sectors look different today, but I believe they\u2019re converging." },
  { time: 1506, section: "Analysis", type: "host", text: "The concerns already overlap. Brookfield needs security. That\u2019s AWS\u2019s domain. AWS needs speed. That\u2019s Brookfield\u2019s strength. Both need workforce development. And that\u2019s the challenge academia has been wrestling with from the beginning." },
  { time: 1523, section: "Analysis", type: "host", text: "And the regulatory pressure is real. Stanford\u2019s report shows 59 new US AI regulations in 2024 alone. That\u2019s more than double the prior year. The governance frameworks are coming whether these sectors want them or not." },
  { time: 1540, section: "Analysis", type: "host", text: "This is even more true nowadays because the government has recently just forced Anthropic and OpenAI to let them use their models. Which means even more regulation." },
  { time: 1552, section: "Analysis", type: "host", text: "UNESCO\u2019s guidance reminds us of something crucial. If we don\u2019t develop critical thinking alongside AI proficiency, every industry inherits a workforce that\u2019s technically productive, but intellectually shallow. That\u2019s a problem that transcends any single sector." },
  { time: 1569, section: "Analysis", type: "host", text: "As AI gets more capable, these sectors will converge under shared governance. Not because they want to, but because the stakes will demand it." },

  // CONCLUSION (26:29 - 28:10)
  { time: 1589, section: "Conclusion", sectionTitle: "Conclusion", type: "direction", text: "[Outro music fades in]" },
  { time: 1591, section: "Conclusion", type: "host", text: "So here\u2019s where I\u2019ll leave you. AI adoption is not a single story. It\u2019s about institutional structure. How organizations balance risk, liability, speed, incentives. And those structures shape everything. Who gets access, what gets reviewed, and what we\u2019re willing to get wrong." },
  { time: 1610, section: "Conclusion", type: "host", text: "At AWS, I learned that trust is a long game. That the most sustainable adoption comes from governance, not hype." },
  { time: 1619, section: "Conclusion", type: "host", text: "At Brookfield, I learned that speed is a strategy. That private equity\u2019s ROI-driven culture creates a different risk calculus. One that can actually accelerate responsible adoption." },
  { time: 1633, section: "Conclusion", type: "host", text: "And at Northwestern, I learned that the hardest challenge isn\u2019t deploying AI. It\u2019s preserving the human capacity that AI is supposed to augment." },
  { time: 1644, section: "Conclusion", type: "host", text: "The people who will thrive aren\u2019t the ones that use AI the most. Or resist it the hardest. They\u2019re the ones who understand what the technology can and can\u2019t do. And who never stop asking what it should do." },
  { time: 1660, section: "Conclusion", type: "host", text: "The revolution is here. It just looks different depending on where you\u2019re standing. And the more we understand those differences, the better equipped we are to shape what comes next." },
  { time: 1673, section: "Conclusion", type: "host", text: "I\u2019m Tahasin Shadat, and this has been CodeShift. Thanks for listening to both episodes. Keep building, keep learning, and never stop shifting. I\u2019ll see you guys in Season 2." },
  { time: 1690, section: "Conclusion", type: "direction", text: "[Outro music fades out]" },
];

// =============================================
// GAME QUOTES (unlocked at height milestones)
// =============================================
const GAME_QUOTES = [
  { height: 150, text: "Welcome back to CodeShift, the podcast where we explore how technology is transforming the workplace one code commit at a time.", source: "Tahasin Shadat" },
  { height: 400, text: "AI isn\u2019t just a technical upgrade. It\u2019s reshaping how engineers are judged, how trust gets built, and what it even means to be an expert.", source: "Tahasin \u2014 Episode 1" },
  { height: 700, text: "AWS isn\u2019t racing to be first in AI. It\u2019s trying to be the most trusted.", source: "Tahasin Shadat \u2014 Episode 1" },
  { height: 1000, text: "I simply am not writing code manually anymore. The most effective workflow is using coding agents.", source: "Jack Harnett \u2014 Brookfield" },
  { height: 1400, text: "We discovered people were using ChatGPT because they were expensing it on the corporate card.", source: "Jack Harnett \u2014 Brookfield" },
  { height: 1800, text: "We\u2019re in the iPhone moment when people were hanging on to BlackBerry.", source: "Jack Harnett \u2014 Brookfield" },
  { height: 2200, text: "It\u2019s like exposure therapy. People need to just use these tools and they\u2019ll learn.", source: "John Steer \u2014 Brookfield" },
  { height: 2700, text: "Code scales deterministic processes. AI scales reasoning. That literally couldn\u2019t be scaled before.", source: "John Steer \u2014 Brookfield" },
  { height: 3200, text: "Jack pulled the plug on a tool people wanted because it couldn\u2019t show its work. AWS governs at entry. Brookfield governs at decision.", source: "Tahasin Shadat" },
  { height: 3800, text: "If you don\u2019t develop your brain, it\u2019s not going to develop. The reliance on AI tools is pervasive.", source: "Jack Harnett \u2014 Brookfield" },
  { height: 4500, text: "The opportunity cost of not trying is significantly higher than trying and failing.", source: "John Steer \u2014 Brookfield" },
  { height: 5200, text: "Education needs to embrace AI, not fight it. But it\u2019s probably making us less capable at reasoning independently.", source: "John Steer \u2014 Brookfield" },
  { height: 6000, text: "The people who will thrive aren\u2019t the ones who use AI the most, or the ones who resist it the hardest.", source: "Tahasin Shadat" },
  { height: 7000, text: "The revolution is here. It just looks different depending on where you\u2019re standing.", source: "Tahasin Shadat" },
  { height: 8000, text: "Keep building, keep learning, and never stop shifting. I\u2019ll see you guys in Season 2.", source: "Tahasin Shadat" },
];

// =============================================
// UTILITY
// =============================================
function scrollToEl(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? '0' : ''}${sec}`;
}

// =============================================
// NAVIGATION
// =============================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 600) {
    nav.classList.add('visible');
  } else {
    nav.classList.remove('visible');
  }

  // Update active nav link
  const sections = ['home', 'listen', 'explore', 'climb'];
  let current = 'home';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 300) current = id;
  }
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// =============================================
// PODCAST PLAYER — REAL AUDIO
// =============================================
const audio = new Audio('assets/episode2.mp3');
audio.preload = 'metadata';

let isPlaying = false;
let activeLineIndex = -1;
const speeds = [1, 1.25, 1.5, 2];
let speedIndex = 0;

// Build transcript HTML
function buildTranscript() {
  const container = document.getElementById('transcriptContent');
  let currentSection = '';
  let html = '';

  TRANSCRIPT.forEach((line, i) => {
    if (line.sectionTitle && line.section !== currentSection) {
      currentSection = line.section;
      const parts = line.sectionTitle.split(' \u2014 ');
      html += `<div class="transcript-section-header">${parts[0] || ''}</div>`;
      html += `<div class="transcript-section-title">${parts[1] || parts[0]}</div>`;
    }

    if (line.type === 'direction') {
      html += `<div class="transcript-line" data-index="${i}" data-time="${line.time}" style="font-style:italic; color:var(--text-dim); font-family:var(--font-display); font-size:14px;">${line.text}</div>`;
    } else if (line.type === 'clip') {
      html += `<div class="transcript-line clip-marker" data-index="${i}" data-time="${line.time}"><span class="speaker">${line.speaker || 'Interview Clip'}</span>${line.text}</div>`;
    } else {
      html += `<div class="transcript-line" data-index="${i}" data-time="${line.time}">${line.text}</div>`;
    }
  });

  container.innerHTML = html;

  // Click to seek
  container.querySelectorAll('.transcript-line').forEach(el => {
    el.addEventListener('click', () => {
      const t = parseFloat(el.dataset.time);
      audio.currentTime = t;
      if (!isPlaying) togglePlay();
    });
  });
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
}

audio.addEventListener('play', () => {
  isPlaying = true;
  document.getElementById('playBtn').innerHTML = '&#10074;&#10074;';
  document.getElementById('playerBar').style.display = 'block';
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  document.getElementById('playBtn').innerHTML = '&#9654;';
});

audio.addEventListener('ended', () => {
  isPlaying = false;
  document.getElementById('playBtn').innerHTML = '&#9654;';
});

audio.addEventListener('timeupdate', () => {
  updatePlayer();
});

audio.addEventListener('loadedmetadata', () => {
  document.getElementById('playerTimeTotal').textContent = formatTime(audio.duration);
});

function updatePlayer() {
  const currentTime = audio.currentTime;
  const duration = audio.duration || 1;

  document.getElementById('playerTimeElapsed').textContent = formatTime(currentTime);
  document.getElementById('playerTimeTotal').textContent = formatTime(duration);
  document.getElementById('progressFill').style.width = (currentTime / duration * 100) + '%';

  // Find active line
  let newActive = -1;
  for (let i = TRANSCRIPT.length - 1; i >= 0; i--) {
    if (currentTime >= TRANSCRIPT[i].time) { newActive = i; break; }
  }

  if (newActive !== activeLineIndex) {
    activeLineIndex = newActive;

    // Update section label
    if (newActive >= 0) {
      document.getElementById('playerSectionLabel').textContent = TRANSCRIPT[newActive].section;
    }

    // Highlight
    document.querySelectorAll('.transcript-line').forEach(el => el.classList.remove('active'));
    if (newActive >= 0) {
      const activeLine = document.querySelector(`.transcript-line[data-index="${newActive}"]`);
      if (activeLine) {
        activeLine.classList.add('active');
        activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
}

function seekAudio(e) {
  const bar = document.getElementById('progressBar');
  const rect = bar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  audio.currentTime = pct * (audio.duration || 0);
}

// Allow drag-to-seek on progress bar
(function() {
  let dragging = false;
  const bar = () => document.getElementById('progressBar');
  document.addEventListener('mousedown', (e) => {
    if (e.target.closest('#progressBar')) {
      dragging = true;
      seekAudio(e);
    }
  });
  document.addEventListener('mousemove', (e) => {
    if (dragging) seekAudio(e);
  });
  document.addEventListener('mouseup', () => { dragging = false; });
})();

function cycleSpeed() {
  speedIndex = (speedIndex + 1) % speeds.length;
  audio.playbackRate = speeds[speedIndex];
  document.getElementById('speedBtn').textContent = speeds[speedIndex] + 'x';
}

// =============================================
// SCROLL STORY (INTERSECTION OBSERVER)
// =============================================
function initScrollStory() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.2, rootMargin: '-50px' });

  document.querySelectorAll('.story-panel').forEach(panel => observer.observe(panel));
}

// =============================================
// GAME AUDIO — Lo-fi beat + SFX via Web Audio API
// =============================================
let audioCtx = null;
let beatInterval = null;
let beatNodes = []; // track all scheduled nodes for cleanup
let masterGain = null;

function ensureAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

// --- SFX ---
function playJumpSfx() {
  const ctx = ensureAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(440, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
  osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.12);
  gain.gain.setValueAtTime(0.09, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
  osc.connect(gain).connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.14);
}

function playLandSfx() {
  const ctx = ensureAudioCtx();
  // Short thump
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(120, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.06);
  gain.gain.setValueAtTime(0.15, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  osc.connect(gain).connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.08);
}

function playQuoteSfx() {
  const ctx = ensureAudioCtx();
  // Warm ascending chime: Cmaj7 arpeggio
  [523.25, 659.25, 783.99, 987.77].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    const t = ctx.currentTime + i * 0.12;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.08, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.6);
  });
}

function playFallSfx() {
  const ctx = ensureAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(300, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.35);
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
  osc.connect(gain).connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.35);
}

// --- Lo-fi beat ---
function createNoiseBuffer(ctx, duration) {
  const sr = ctx.sampleRate;
  const len = sr * duration;
  const buf = ctx.createBuffer(1, len, sr);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

function playKick(ctx, time, out) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, time);
  osc.frequency.exponentialRampToValueAtTime(30, time + 0.12);
  gain.gain.setValueAtTime(0.35, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);
  osc.connect(gain).connect(out);
  osc.start(time); osc.stop(time + 0.2);
}

function playHihat(ctx, time, out, noiseBuf) {
  const src = ctx.createBufferSource();
  src.buffer = noiseBuf;
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass'; hp.frequency.value = 7000;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.06, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);
  src.connect(hp).connect(gain).connect(out);
  src.start(time); src.stop(time + 0.04);
}

function playSnare(ctx, time, out, noiseBuf) {
  // Noise burst
  const src = ctx.createBufferSource();
  src.buffer = noiseBuf;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass'; bp.frequency.value = 3000; bp.Q.value = 0.8;
  const nGain = ctx.createGain();
  nGain.gain.setValueAtTime(0.12, time);
  nGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
  src.connect(bp).connect(nGain).connect(out);
  src.start(time); src.stop(time + 0.1);
  // Tonal body
  const osc = ctx.createOscillator();
  const oGain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(200, time);
  osc.frequency.exponentialRampToValueAtTime(100, time + 0.06);
  oGain.gain.setValueAtTime(0.12, time);
  oGain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);
  osc.connect(oGain).connect(out);
  osc.start(time); osc.stop(time + 0.08);
}

function playChord(ctx, time, out) {
  // Lo-fi Rhodes-style pad — Cm7: C4, Eb4, G4, Bb4
  [261.63, 311.13, 392.00, 466.16].forEach(freq => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    // Slight detune for warmth
    osc.detune.value = (Math.random() - 0.5) * 12;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.025, time + 0.05);
    gain.gain.setValueAtTime(0.025, time + 1.6);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.9);
    osc.connect(gain).connect(out);
    osc.start(time); osc.stop(time + 2);
  });
}

function scheduleBeatBar(ctx, startTime, out, noiseBuf, barIndex) {
  const BPM = 75;
  const eighth = 60 / BPM / 2; // duration of one eighth note

  // Alternate between Cm7 and Fm7 chords every 2 bars
  const chordSet = (barIndex % 4 < 2)
    ? [261.63, 311.13, 392.00, 466.16]  // Cm7
    : [174.61, 220.00, 261.63, 329.63]; // Fm7 (lower voicing)

  // Play chord pad
  chordSet.forEach(freq => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.detune.value = (Math.random() - 0.5) * 10;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.02, startTime + 0.05);
    gain.gain.setValueAtTime(0.02, startTime + eighth * 7);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + eighth * 8);
    osc.connect(gain).connect(out);
    osc.start(startTime); osc.stop(startTime + eighth * 8 + 0.1);
  });

  for (let step = 0; step < 8; step++) {
    const t = startTime + step * eighth;
    // Kick on 1, 4, 6 (boom-bap feel)
    if (step === 0 || step === 3 || step === 5) playKick(ctx, t, out);
    // Snare on 2 and 6
    if (step === 2 || step === 6) playSnare(ctx, t, out, noiseBuf);
    // Hihats on every eighth note, quieter on offbeats
    playHihat(ctx, t, out, noiseBuf);
  }

  // Melodic note — simple pentatonic riff that changes per bar
  const pentatonic = [261.63, 293.66, 349.23, 392.00, 466.16]; // C Eb F G Bb
  const noteIdx = barIndex % pentatonic.length;
  const melTime = startTime + eighth * [0, 3, 5, 2, 4][barIndex % 5];
  const melOsc = ctx.createOscillator();
  const melGain = ctx.createGain();
  melOsc.type = 'triangle';
  melOsc.frequency.value = pentatonic[noteIdx] * 2; // octave up
  melOsc.detune.value = (Math.random() - 0.5) * 8;
  melGain.gain.setValueAtTime(0, melTime);
  melGain.gain.linearRampToValueAtTime(0.035, melTime + 0.02);
  melGain.gain.exponentialRampToValueAtTime(0.001, melTime + eighth * 2);
  melOsc.connect(melGain).connect(out);
  melOsc.start(melTime); melOsc.stop(melTime + eighth * 2);

  return eighth * 8; // bar duration
}

let beatBarIndex = 0;
let nextBarTime = 0;

function startAmbientMusic() {
  const ctx = ensureAudioCtx();
  if (beatInterval) return;

  masterGain = ctx.createGain();
  masterGain.gain.value = 0;
  masterGain.gain.linearRampToValueAtTime(0.7, ctx.currentTime + 2);

  // Lo-fi filter on the master
  const lpf = ctx.createBiquadFilter();
  lpf.type = 'lowpass';
  lpf.frequency.value = 2500;
  lpf.Q.value = 0.5;
  masterGain.connect(lpf).connect(ctx.destination);

  const noiseBuf = createNoiseBuffer(ctx, 0.5);
  beatBarIndex = 0;
  nextBarTime = ctx.currentTime + 0.1;

  // Schedule bars ahead of time
  beatInterval = setInterval(() => {
    if (!audioCtx) { clearInterval(beatInterval); beatInterval = null; return; }
    // Keep 2 bars scheduled ahead
    while (nextBarTime < ctx.currentTime + 4) {
      const barDur = scheduleBeatBar(ctx, nextBarTime, masterGain, noiseBuf, beatBarIndex);
      nextBarTime += barDur;
      beatBarIndex++;
    }
  }, 200);

  // Kick off first scheduling immediately
  const barDur = scheduleBeatBar(ctx, nextBarTime, masterGain, noiseBuf, beatBarIndex);
  nextBarTime += barDur;
  beatBarIndex++;
}

function stopAmbientMusic() {
  if (masterGain && audioCtx) {
    masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);
  }
  if (beatInterval) {
    setTimeout(() => {
      clearInterval(beatInterval);
      beatInterval = null;
      masterGain = null;
    }, 2000);
  }
}

// =============================================
// CLIMBING GAME — IMPROVED
// =============================================
let gameRunning = false;
let gameCanvas, gameCtx;
let player, platforms, camera;
let particles = [];
let unlockedQuotes = new Set();
let quoteTimeout = null;
let bestHeight = 0;
let lastCheckpointY = 0;

const GRAVITY = 0.5;
const JUMP_POWER = 11.5;
const MOVE_SPEED = 4.5;
const MOVE_ACCEL = 0.6;
const MOVE_FRICTION = 0.78;
const AIR_FRICTION = 0.92;
const PLATFORM_COUNT = 250;
const COYOTE_TIME = 8; // frames of grace period after leaving platform

function startGame() {
  document.getElementById('gameIntro').style.display = 'none';
  const container = document.getElementById('gameContainer');
  container.classList.add('active');
  gameCanvas = document.getElementById('gameCanvas');
  gameCtx = gameCanvas.getContext('2d');
  resizeCanvas();
  initGame();
  gameRunning = true;
  startAmbientMusic();
  requestAnimationFrame(gameLoop);
}

function resizeCanvas() {
  gameCanvas.width = gameCanvas.parentElement.clientWidth;
  gameCanvas.height = gameCanvas.parentElement.clientHeight;
}

function initGame() {
  const W = gameCanvas.width;
  player = {
    x: W / 2, y: 60, vx: 0, vy: 0,
    width: 24, height: 32, onGround: false,
    maxHeight: 0, coyoteFrames: 0, facingRight: true,
    squash: 1, // for squash/stretch animation
  };

  camera = { y: 0 };
  particles = [];
  unlockedQuotes = new Set();
  lastCheckpointY = 0;
  platforms = [];

  // Ground platform
  platforms.push({ x: 0, y: 0, w: W, h: 40, color: '#1a1a2e', isGround: true, isCheckpoint: false });

  // Generate platforms going upward with guaranteed reachability
  let lastY = 0;
  let lastX = W / 2;

  for (let i = 0; i < PLATFORM_COUNT; i++) {
    const yGap = 55 + Math.random() * 55; // vertical gap between platforms
    const y = lastY + yGap;
    const w = 80 + Math.random() * 100;

    // Ensure next platform is reachable horizontally from the last one
    // Add center-bias so platforms don't drift to one side
    const maxHorizReach = 220;
    const centerPull = (W / 2 - lastX) * 0.3; // pull toward center
    let x = lastX + centerPull + (Math.random() - 0.5) * maxHorizReach * 2;
    x = Math.max(10, Math.min(W - w - 10, x));

    const heightMeters = Math.floor(y * 0.6);
    const isCheckpoint = GAME_QUOTES.some(q => Math.abs(q.height - heightMeters) < 25);

    // Moving platforms every ~8 platforms at higher heights
    const isMoving = !isCheckpoint && i > 10 && i % 8 === 0;

    platforms.push({
      x, y, w, h: 14,
      origX: x,
      color: isCheckpoint ? '#7b2fff' : `hsl(${220 + (i * 7) % 40}, 50%, ${15 + (i * 3) % 10}%)`,
      isCheckpoint,
      isMoving,
      moveRange: isMoving ? 60 + Math.random() * 80 : 0,
      moveSpeed: isMoving ? 0.008 + Math.random() * 0.008 : 0,
      movePhase: Math.random() * Math.PI * 2,
    });
    lastY = y;
    lastX = x + w / 2;
  }

  // Input handling
  window._gameKeys = {};
  window._gameKeyHandler = (e) => {
    window._gameKeys[e.key] = true;
    if ((e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') &&
        (player.onGround || player.coyoteFrames > 0)) {
      player.vy = JUMP_POWER;
      player.onGround = false;
      player.coyoteFrames = 0;
      player.squash = 1.3;
      spawnParticles(player.x, player.y, 5, '#00d4ff');
      playJumpSfx();
      e.preventDefault();
    }
  };
  window._gameKeyUpHandler = (e) => { window._gameKeys[e.key] = false; };

  window.addEventListener('keydown', window._gameKeyHandler);
  window.addEventListener('keyup', window._gameKeyUpHandler);

  gameCanvas.onmousedown = (e) => {
    const rect = gameCanvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickWorldY = (gameCanvas.height - (e.clientY - rect.top)) + camera.y;

    if (player.onGround || player.coyoteFrames > 0) {
      // Jump toward click
      const dx = clickX - player.x;
      player.vx = Math.sign(dx) * Math.min(Math.abs(dx) * 0.03, MOVE_SPEED);
      player.vy = JUMP_POWER;
      player.onGround = false;
      player.coyoteFrames = 0;
      player.squash = 1.3;
      spawnParticles(player.x, player.y, 5, '#00d4ff');
      playJumpSfx();
    }
  };
}

function spawnParticles(x, y, count, color) {
  for (let i = 0; i < count; i++) {
    particles.push({
      x, y,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 1,
      life: 1,
      decay: 0.02 + Math.random() * 0.03,
      size: 2 + Math.random() * 3,
      color
    });
  }
}

function restartGame() {
  const container = document.getElementById('gameContainer');
  container.classList.remove('active');
  document.getElementById('gameIntro').style.display = 'flex';
  gameRunning = false;
  stopAmbientMusic();
  document.getElementById('gameQuote').classList.remove('show');
  if (window._gameKeyHandler) {
    window.removeEventListener('keydown', window._gameKeyHandler);
    window.removeEventListener('keyup', window._gameKeyUpHandler);
  }
}

let gameTime = 0;
function gameLoop() {
  if (!gameRunning) return;
  gameTime++;
  updateGame();
  renderGame();
  requestAnimationFrame(gameLoop);
}

function updateGame() {
  const W = gameCanvas.width;
  const H = gameCanvas.height;
  const keys = window._gameKeys || {};

  // Update moving platforms
  for (const p of platforms) {
    if (p.isMoving) {
      p.x = p.origX + Math.sin(gameTime * p.moveSpeed + p.movePhase) * p.moveRange;
    }
  }

  // Horizontal movement with acceleration
  const onGround = player.onGround;
  const friction = onGround ? MOVE_FRICTION : AIR_FRICTION;

  if (keys['ArrowLeft'] || keys['a'] || keys['A']) {
    player.vx -= MOVE_ACCEL;
    player.facingRight = false;
  } else if (keys['ArrowRight'] || keys['d'] || keys['D']) {
    player.vx += MOVE_ACCEL;
    player.facingRight = true;
  } else {
    player.vx *= friction;
  }

  // Clamp horizontal speed
  player.vx = Math.max(-MOVE_SPEED, Math.min(MOVE_SPEED, player.vx));
  if (Math.abs(player.vx) < 0.1) player.vx = 0;

  // Gravity
  player.vy -= GRAVITY;

  // Update position
  player.x += player.vx;
  player.y += player.vy;

  // Screen wrap horizontal
  if (player.x < -player.width) player.x = W;
  if (player.x > W + player.width) player.x = -player.width;

  // Coyote time
  if (player.coyoteFrames > 0) player.coyoteFrames--;

  // Collision with platforms (only when falling)
  const wasOnGround = player.onGround;
  player.onGround = false;
  if (player.vy <= 0) {
    for (const p of platforms) {
      const platTop = p.y + p.h;
      if (player.x + player.width / 2 > p.x && player.x - player.width / 2 < p.x + p.w) {
        if (player.y <= platTop && player.y >= p.y && (player.y - player.vy) >= platTop - 5) {
          player.y = platTop;
          if (player.vy < -6) {
            player.squash = 0.6; // squash on hard landing
            spawnParticles(player.x, player.y, 3, '#7b2fff');
            playLandSfx();
          }
          player.vy = 0;
          player.onGround = true;

          // Carry player on moving platforms
          if (p.isMoving) {
            const newX = p.origX + Math.sin((gameTime + 1) * p.moveSpeed + p.movePhase) * p.moveRange;
            player.x += (newX - p.x) * 0.8;
          }
          break;
        }
      }
    }
  }

  // Set coyote time when leaving a platform
  if (wasOnGround && !player.onGround && player.vy <= 0) {
    player.coyoteFrames = COYOTE_TIME;
  }

  // Squash/stretch animation recovery
  player.squash += (1 - player.squash) * 0.15;

  // Fall off bottom - respawn at last checkpoint
  if (player.y < camera.y - 200) {
    player.y = lastCheckpointY + 42;
    player.x = W / 2;
    player.vy = 0;
    player.vx = 0;
    camera.y = Math.max(0, lastCheckpointY - H * 0.3);
    spawnParticles(player.x, player.y, 10, '#ff6b35');
    playFallSfx();
  }

  // Track max height
  const height = Math.max(0, Math.floor(player.y * 0.6));
  if (height > player.maxHeight) player.maxHeight = height;
  if (player.maxHeight > bestHeight) bestHeight = player.maxHeight;
  document.getElementById('gameHeight').textContent = `HEIGHT: ${player.maxHeight}m`;

  // Camera smoothly follows player
  const targetCamY = Math.max(0, player.y - H * 0.4);
  camera.y += (targetCamY - camera.y) * 0.08;

  // Update checkpoint
  for (const p of platforms) {
    if (p.isCheckpoint && player.onGround) {
      const platTop = p.y + p.h;
      if (Math.abs(player.y - platTop) < 2 &&
          player.x > p.x && player.x < p.x + p.w) {
        if (p.y > lastCheckpointY) {
          lastCheckpointY = p.y;
        }
      }
    }
  }

  // Check quote unlocks
  for (const q of GAME_QUOTES) {
    if (height >= q.height && !unlockedQuotes.has(q.height)) {
      unlockedQuotes.add(q.height);
      showGameQuote(q);
    }
  }

  // Update particles
  particles = particles.filter(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy -= 0.05;
    p.life -= p.decay;
    return p.life > 0;
  });
}

function showGameQuote(q) {
  const overlay = document.getElementById('gameQuote');
  document.getElementById('gameQuoteText').textContent = '\u201C' + q.text + '\u201D';
  document.getElementById('gameQuoteSource').textContent = '\u2014 ' + q.source;
  overlay.classList.add('show');
  playQuoteSfx();
  clearTimeout(quoteTimeout);
  quoteTimeout = setTimeout(() => overlay.classList.remove('show'), 5000);
}

function renderGame() {
  const W = gameCanvas.width;
  const H = gameCanvas.height;
  const ctx = gameCtx;

  const toScreenY = (wy) => H - (wy - camera.y);

  // Clear with gradient that shifts with height
  const heightPct = Math.min(1, camera.y / 8000);
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  const r = Math.floor(4 + heightPct * 6);
  const g = Math.floor(4 + heightPct * 2);
  const b = Math.floor(10 + heightPct * 20);
  bgGrad.addColorStop(0, `rgb(${r},${g},${b})`);
  bgGrad.addColorStop(1, `rgb(${r+6},${g+6},${b+14})`);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Stars background (parallax layers)
  for (let layer = 0; layer < 3; layer++) {
    const parallax = 0.02 + layer * 0.02;
    const alpha = 0.06 + layer * 0.04;
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    for (let i = 0; i < 40; i++) {
      const sx = ((i + layer * 40) * 137.5 + 50) % W;
      const sy = (((i + layer * 40) * 231.7 + camera.y * parallax) % (H + 400)) - 200;
      const size = layer === 2 ? 2 : 1;
      ctx.fillRect(sx, sy, size, size);
    }
  }

  // Height markers
  ctx.font = '11px Courier New';
  ctx.fillStyle = 'rgba(255,255,255,0.05)';
  for (let h = 0; h < 10000; h += 100) {
    const wy = h / 0.6;
    const sy = toScreenY(wy);
    if (sy > -20 && sy < H + 20) {
      ctx.fillText(h + 'm', 10, sy - 4);
      ctx.fillRect(40, sy, W - 40, 0.5);
    }
  }

  // Platforms
  for (const p of platforms) {
    const sy = toScreenY(p.y + p.h);
    if (sy + p.h < -60 || sy > H + 60) continue;

    ctx.save();

    // Platform shadow
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(p.x + 3, sy + p.h + 3, p.w, 4);

    // Checkpoint glow
    if (p.isCheckpoint) {
      ctx.shadowColor = '#7b2fff';
      ctx.shadowBlur = 25;
    }

    // Moving platform glow
    if (p.isMoving) {
      ctx.shadowColor = '#00d4ff';
      ctx.shadowBlur = 10;
    }

    // Platform body with rounded corners
    ctx.fillStyle = p.color;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(p.x, sy, p.w, p.h, 4);
    } else {
      ctx.rect(p.x, sy, p.w, p.h);
    }
    ctx.fill();

    ctx.shadowBlur = 0;

    // Platform top highlight
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(p.x + 2, sy, p.w - 4, 2);

    // Moving platform indicator
    if (p.isMoving) {
      ctx.fillStyle = 'rgba(0,212,255,0.3)';
      const dotX = p.x + p.w / 2;
      ctx.beginPath();
      ctx.arc(dotX - 8, sy + p.h / 2, 2, 0, Math.PI * 2);
      ctx.arc(dotX, sy + p.h / 2, 2, 0, Math.PI * 2);
      ctx.arc(dotX + 8, sy + p.h / 2, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    if (p.isCheckpoint) {
      // Glowing checkpoint orb
      const orbY = sy - 14;
      const orbX = p.x + p.w / 2;
      const pulse = Math.sin(gameTime * 0.06) * 0.3 + 0.7;

      ctx.fillStyle = `rgba(123,47,255,${0.2 * pulse})`;
      ctx.beginPath();
      ctx.arc(orbX, orbY, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(123,47,255,${0.5 * pulse})`;
      ctx.beginPath();
      ctx.arc(orbX, orbY, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(200,170,255,${0.8 * pulse})`;
      ctx.beginPath();
      ctx.arc(orbX, orbY, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  // Particles
  for (const p of particles) {
    const sy = toScreenY(p.y);
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, sy, p.size * p.life, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Player
  const py = toScreenY(player.y + player.height);
  const px = player.x - player.width / 2;
  const squashX = 1 / player.squash;
  const squashY = player.squash;

  ctx.save();
  ctx.translate(player.x, py + player.height);
  ctx.scale(squashX, squashY);
  ctx.translate(-player.x, -(py + player.height));

  // Player glow
  const gradient = ctx.createRadialGradient(player.x, py + player.height / 2, 0, player.x, py + player.height / 2, 40);
  gradient.addColorStop(0, 'rgba(0,212,255,0.15)');
  gradient.addColorStop(1, 'transparent');
  ctx.fillStyle = gradient;
  ctx.fillRect(player.x - 40, py - 8, 80, player.height + 16);

  // Player body
  ctx.fillStyle = '#00d4ff';
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(px, py + 12, player.width, player.height - 12, 5);
  } else {
    ctx.rect(px, py + 12, player.width, player.height - 12);
  }
  ctx.fill();

  // Player head
  ctx.beginPath();
  ctx.arc(player.x, py + 8, 10, 0, Math.PI * 2);
  ctx.fill();

  // Headphones
  ctx.strokeStyle = '#7b2fff';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(player.x, py + 4, 13, Math.PI, 0);
  ctx.stroke();
  ctx.fillStyle = '#7b2fff';
  ctx.fillRect(player.x - 15, py + 2, 6, 9);
  ctx.fillRect(player.x + 9, py + 2, 6, 9);

  // Eyes (look in movement direction)
  ctx.fillStyle = '#06060e';
  const eyeOffset = player.facingRight ? 1 : -1;
  ctx.fillRect(player.x - 4 + eyeOffset, py + 6, 3, 3);
  ctx.fillRect(player.x + 2 + eyeOffset, py + 6, 3, 3);

  ctx.restore();

  // Jump trail
  if (player.vy > 3) {
    for (let t = 1; t <= 4; t++) {
      const trailY = toScreenY(player.y - t * 6);
      ctx.fillStyle = `rgba(0,212,255,${0.12 - t * 0.025})`;
      ctx.beginPath();
      ctx.arc(player.x, trailY, 8 - t * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

window.addEventListener('resize', () => {
  if (gameCanvas) resizeCanvas();
});

// =============================================
// INIT
// =============================================
window.addEventListener('DOMContentLoaded', () => {
  buildTranscript();
  initScrollStory();

  // "Listen Now" hero button and "The Listen" mode card start playback
  const heroBtn = document.getElementById('heroListenBtn');
  const modeBtn = document.getElementById('modeListenBtn');
  function startPlaybackOnClick() {
    // Let the anchor scroll happen, then start audio after a short delay
    setTimeout(() => {
      document.getElementById('playerBar').style.display = 'block';
      if (!isPlaying) {
        audio.play();
      }
    }, 600);
  }
  if (heroBtn) heroBtn.addEventListener('click', startPlaybackOnClick);
  if (modeBtn) modeBtn.addEventListener('click', startPlaybackOnClick);

  // Show player bar when scrolling to listen section
  const listenObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.getElementById('playerBar').style.display = 'block';
      }
    });
  }, { threshold: 0.1 });
  listenObserver.observe(document.getElementById('transcriptContainer'));

  // Stop game music when scrolling away from the climb section
  const climbObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && gameRunning) {
        stopAmbientMusic();
      } else if (entry.isIntersecting && gameRunning) {
        startAmbientMusic();
      }
    });
  }, { threshold: 0.05 });
  climbObserver.observe(document.getElementById('climb'));
});
