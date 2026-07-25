import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { services } from "@/data/services";
import { pricingServices } from "@/data/pricing";
import { faqItems } from "@/data/faq";
import { teamMembers } from "@/data/team";

// ---------------------------------------------------------------------------
// Business info the bot knows about. Edit these if your contact
// details or business hours change.
// ---------------------------------------------------------------------------
const CONTACT_EMAIL = "contact@digitaldreamsit.in";
const CONTACT_PHONE = "+91 6355816866";
const BUSINESS_HOURS = "Monday to Saturday, 9:00 AM - 6:00 PM IST";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

interface Intent {
  keywords: string[];
  getAnswer: () => string;
}

// ---------------------------------------------------------------------------
// Knowledge base — built from the site's real data files so it always
// reflects what's actually on the site.
// ---------------------------------------------------------------------------
function buildIntents(): Intent[] {
  const intents: Intent[] = [
    {
      keywords: ["hello", "hi", "hey", "greetings"],
      getAnswer: () =>
        "Hi there! I'm the Digital Dreams IT assistant. Ask me about our services, pricing, portfolio, team, or how to get in touch.",
    },
    {
      keywords: ["service", "services", "offer", "what do you do", "what can you do"],
      getAnswer: () => {
        const list = services.map((s) => `• ${s.title} — ${s.description}`).join("\n");
        return `We offer the following services:\n${list}\n\nAsk me about any one of these for more detail (e.g. "tell me about app development").`;
      },
    },
    {
      keywords: ["contact", "email", "phone", "reach", "call", "number"],
      getAnswer: () =>
        `You can reach us at:\nEmail: ${CONTACT_EMAIL}\nPhone: ${CONTACT_PHONE}\n\nOr use the Contact page to send us your project details directly.`,
    },
    {
      keywords: ["hour", "open", "timing", "available"],
      getAnswer: () => `Our business hours are ${BUSINESS_HOURS}.`,
    },
    {
      keywords: ["price", "pricing", "cost", "how much", "budget", "quote"],
      getAnswer: () => {
        const list = pricingServices
          .map((service) => {
            const tiers = service.tiers
              .map((t) => `${t.name}: starting at $${t.basePrice.toLocaleString()}`)
              .join(", ");
            return `• ${service.name} — ${tiers}`;
          })
          .join("\n");
        return `Here's a quick overview of our pricing:\n${list}\n\nAll prices are starting points — custom requirements may affect the final quote. Visit our Pricing page for full tier details, or contact us for a personalized quote.`;
      },
    },
    {
      keywords: ["team", "who works", "founder", "ceo", "staff", "employees"],
      getAnswer: () => {
        const list = teamMembers.map((m) => `• ${m.name} — ${m.role}`).join("\n");
        return `Meet our team:\n${list}\n\nYou can see full bios and LinkedIn profiles on our About page.`;
      },
    },
    {
      keywords: ["portfolio", "work", "project", "examples", "case stud"],
      getAnswer: () =>
        "You can browse our full portfolio and case studies on the site, covering web development, mobile apps, software, design, and marketing projects. Want details on a specific type of project?",
    },
  ];

  // Add each service as its own intent (e.g. "app development", "cyber security")
  services.forEach((service) => {
    intents.push({
      keywords: [service.title.toLowerCase(), ...service.title.toLowerCase().split(" ")],
      getAnswer: () =>
        `${service.title}: ${service.detailedDescription}\n\nKey features:\n${service.features
          .map((f) => `• ${f}`)
          .join("\n")}`,
    });
  });

  // Add every FAQ as its own intent, matched by keywords pulled from the question
  faqItems.forEach((faq) => {
    const words = faq.question
      .toLowerCase()
      .replace(/[?.,]/g, "")
      .split(" ")
      .filter((w) => w.length > 3); // skip short filler words
    intents.push({
      keywords: words,
      getAnswer: () => faq.answer,
    });
  });

  return intents;
}

const INTENTS = buildIntents();

const SUGGESTIONS = [
  "What services do you offer?",
  "What are your prices?",
  "How can I contact you?",
  "Tell me about your team",
];

function findAnswer(userInput: string): string {
  const input = userInput.toLowerCase();
  let bestMatch: Intent | null = null;
  let bestScore = 0;

  for (const intent of INTENTS) {
    let score = 0;
    for (const keyword of intent.keywords) {
      if (keyword.length > 2 && input.includes(keyword)) {
        score += keyword.length; // longer/more specific keyword matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = intent;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.getAnswer();
  }

  return `I'm not totally sure about that one. You can ask me about our services, pricing, portfolio, or team — or reach a real person at ${CONTACT_EMAIL} / ${CONTACT_PHONE}.`;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: "Hi! I'm the Digital Dreams IT assistant. Ask me anything about our services, pricing, portfolio, or team.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: Date.now(), role: "user", text: trimmed };
    const botMsg: Message = { id: Date.now() + 1, role: "bot", text: findAnswer(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-8 right-8 z-40" data-testid="chatbot-widget">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[28rem] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 flex flex-col">
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">Digital Dreams IT Assistant</p>
              <p className="text-white/80 text-xs">Ask me anything</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-white/90 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-white/10 text-slate-200 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="p-3 border-t border-white/10 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
              data-testid="input-chatbot-message"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 transition-colors flex-shrink-0"
              data-testid="button-chatbot-send"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cyan-500 shadow-lg hover:shadow-xl transition-shadow ml-auto"
        aria-label="Open chat assistant"
        data-testid="button-chatbot-toggle"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
