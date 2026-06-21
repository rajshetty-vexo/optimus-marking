import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Youtube } from "lucide-react";


interface TestimonialSlide {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  videoUrl: string;
}

// EDIT HERE: add/update client quote, name, role, photo path, and YouTube link
const testimonials: TestimonialSlide[] = [
  {
    id: "raj-shetty",
    quote:
      "Since switching to Optimus Marking, our line hasn't stopped once for a coding issue. Setup was quick, the print quality is spot-on, and their team is always one call away.",
    name: "Raj Shetty",
    role: "CEO of Tesla",
    initials: "RS",
    photo: "",
    videoUrl: "https://youtu.be/gHKYAKukxTM?si=0lrdv-gnI8LoKmme",
  },
  {
    id: "anita-pillai",
    quote:
      "Their team understood our packaging line constraints from day one. The coding accuracy has been flawless across every single batch since.",
    name: "Anita Pillai",
    role: "Plant Head, Wellness Foods Pvt Ltd",
    initials: "AP",
    photo: "",
    videoUrl: "https://youtu.be/FVbTAAkdLZo?si=1fg_fe5OI8K8Isfc",
  },
  {
    id: "sandeep-kulkarni",
    quote:
      "We switched three vendors before Optimus. This is the first system that hasn't given us a single downtime call in six months.",
    name: "Sandeep Kulkarni",
    role: "Operations Manager, Sunrise Beverages",
    initials: "SK",
    photo: "",
    videoUrl: "https://youtu.be/T94TRShkPz0?si=TiY96ZhtMEhusASq",
  },
  {
    id: "meera-joshi",
    quote:
      "Installation was done in a single shift with zero production loss. Support has been quick every single time we've needed them.",
    name: "Meera Joshi",
    role: "Quality Head, Nova Pharma Pack",
    initials: "MJ",
    photo: "",
    videoUrl: "https://youtu.be/JCj-iH-LGrs?si=B5fTTAebZQyoXEwQ",
  },
  {
    id: "vikram-rao",
    quote:
      "The print clarity on our cartons improved instantly, and the machine just runs — no babysitting needed, even on our busiest shifts.",
    name: "Vikram Rao",
    role: "Director, Apex FMCG Solutions",
    initials: "VR",
    photo: "",
    videoUrl: "https://youtu.be/TDRKfyfZRKw?si=BTrGN8UEp-S_7uSC",
  },
];

const AUTOPLAY_MS = 8000;

// ── YouTube IFrame API helpers (module scope, shared across renders) ──
let ytApiReady = false;
let ytApiCallbacks: Array<() => void> = [];

function loadYouTubeAPI(cb: () => void) {
  if (ytApiReady) {
    cb();
    return;
  }
  ytApiCallbacks.push(cb);
  if (!document.getElementById("youtubeIframeApiScript")) {
    const tag = document.createElement("script");
    tag.id = "youtubeIframeApiScript";
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  }
  window.onYouTubeIframeAPIReady = () => {
    ytApiReady = true;
    ytApiCallbacks.forEach((fn) => fn());
    ytApiCallbacks = [];
  };
}

function parseYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("?")[0];
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const m = u.pathname.match(/\/embed\/([^/?]+)/);
    if (m) return m[1];
  } catch {
    // ignore malformed URLs
  }
  return null;
}

// Fetches the same official thumbnail YouTube itself uses for a video,
// falling back to img.youtube.com if the oEmbed call fails.
function fetchThumbnail(videoId: string): Promise<string> {
  return fetch(
    `https://www.youtube.com/oembed?url=${encodeURIComponent(
      `https://www.youtube.com/watch?v=${videoId}`
    )}&format=json`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((data) => {
      if (data?.thumbnail_url) return data.thumbnail_url as string;
      return probeFallbackThumb(videoId);
    })
    .catch(() => probeFallbackThumb(videoId));
}

function probeFallbackThumb(videoId: string): Promise<string> {
  return new Promise((resolve) => {
    const probe = new Image();
    probe.onload = () => {
      const isGenericGray = probe.naturalWidth === 120 && probe.naturalHeight === 90;
      resolve(
        isGenericGray
          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      );
    };
    probe.onerror = () => resolve(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    probe.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  });
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const ClientAvatar = ({
  photo,
  initials,
  name,
}: {
  photo?: string;
  initials: string;
  name: string;
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const showPhoto = photo && !imgFailed;

  return (
    <div className="w-[108px] sm:w-32 aspect-[0.866] hexagon-clip bg-orange flex-shrink-0">
      <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] mx-auto mt-[1px] aspect-[0.866] hexagon-clip bg-navy flex items-center justify-center overflow-hidden">
        {showPhoto ? (
          <img
            src={photo}
            alt={name}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-primary-foreground font-display font-bold text-lg">
            {initials}
          </span>
        )}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({});

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const playerRef = useRef<any>(null);
  const videoHostRef = useRef<HTMLDivElement | null>(null);

  // Pre-fetch real YouTube thumbnails for every slide on mount.
  useEffect(() => {
    testimonials.forEach((slide) => {
      const videoId = parseYouTubeId(slide.videoUrl);
      if (!videoId) return;
      fetchThumbnail(videoId).then((src) => {
        setThumbnails((prev) => ({ ...prev, [slide.id]: src }));
      });
    });
  }, []);

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopInlinePlayer = () => {
    if (playerRef.current?.destroy) playerRef.current.destroy();
    playerRef.current = null;
    setPlayingId(null);
  };

  const goTo = (index: number) => {
    stopInlinePlayer();
    setActive(index);
    startAutoplay();
  };

  const playInline = (slide: TestimonialSlide) => {
    const videoId = parseYouTubeId(slide.videoUrl);
    if (!videoId) return;
    if (playingId === slide.id) return;

    stopAutoplay();
    stopInlinePlayer();
    setPlayingId(slide.id);
  };

  // Once the host div for the active inline player exists, mount the YT player.
  useEffect(() => {
    if (!playingId) return;
    const slide = testimonials.find((s) => s.id === playingId);
    const videoId = slide ? parseYouTubeId(slide.videoUrl) : null;
    if (!videoId || !videoHostRef.current) return;

    loadYouTubeAPI(() => {
      if (!videoHostRef.current) return;
      playerRef.current = new window.YT.Player(videoHostRef.current, {
        width: "100%",
        height: "100%",
        videoId,
        playerVars: { autoplay: 1, mute: 0, playsinline: 1, rel: 0 },
        events: {
          onStateChange: (e: any) => {
            if (e.data === window.YT.PlayerState.ENDED) {
              stopInlinePlayer();
              setActive((prev) => (prev + 1) % testimonials.length);
              startAutoplay();
            }
          },
        },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playingId]);

  const handleMouseEnter = () => stopAutoplay();
  const handleMouseLeave = () => {
    if (!playingId) startAutoplay();
  };

  const current = testimonials[active];

  return (
    <section
      id="testimonials"
      className="py-24 bg-muted/30 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          {/* Text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-orange text-sm font-display font-semibold tracking-widest uppercase">
                In Their Words
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-foreground leading-tight">
                Hear It Straight From Our Clients
              </h2>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="mt-6"
              >
                <div className="flex items-center gap-4 mb-5">
                  <ClientAvatar
                    photo={current.photo}
                    initials={current.initials}
                    name={current.name}
                  />
                  <div>
                    <div className="font-display font-bold text-foreground text-base">
                      {current.name}
                    </div>
                    <div className="text-orange text-xs font-display font-semibold uppercase tracking-widest mt-0.5">
                      {current.role}
                    </div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground italic leading-relaxed">
                  "{current.quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Video column */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative w-full aspect-video rounded-xl overflow-hidden bg-navy shadow-hex transition-transform duration-300 hover:-translate-y-1"
              >
                {playingId === current.id ? (
                  <div ref={videoHostRef} className="absolute inset-0" />
                ) : (
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label="Play client video testimonial"
                    onClick={() => playInline(current)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        playInline(current);
                      }
                    }}
                    className="absolute inset-0 cursor-pointer bg-cover bg-center"
                    style={{
                      backgroundImage: thumbnails[current.id]
                        ? `url(${thumbnails[current.id]})`
                        : undefined,
                    }}
                  >
                    {/* Gradient overlay for badge legibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/20 to-navy/55" />

                    {/* Channel badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
                      <div className="w-7 h-7 rounded-full bg-navy border-2 border-orange flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-display font-bold text-[10px]">
                          OM
                        </span>
                      </div>
                      <span className="text-primary-foreground text-xs font-display font-semibold">
                        Optimus Marking
                      </span>
                    </div>

                    {/* Play button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 aspect-[0.866] hexagon-clip bg-orange flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                      <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                    </div>

                    {/* Watch badge */}
                    <div className="absolute bottom-3.5 right-3.5 bg-navy/85 text-primary-foreground text-xs font-display font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 z-10">
                      <Youtube className="w-3.5 h-3.5" />
                      Watch on YouTube
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((slide, index) => (
            <button
              key={slide.id}
              aria-label={`Go to client ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-5 bg-orange" : "w-2 bg-border hover:bg-orange/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;