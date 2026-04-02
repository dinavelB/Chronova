import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chronova - Time Management System for Virtual Assistants" },
    {
      name: "description",
      content:
        "Efficient time tracking and project management for Virtual Assistants. Solve timezone issues, manage multiple tasks, and boost productivity.",
    },
  ];
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 450);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-5");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground bg-custom-image">
      {/* Hero Section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 relative bg-linear-to-br from-primary/10 via-accent/5 to-secondary/10 opacity-0 translate-y-5 transition-all duration-700"
        data-reveal
      >
        {loaded ? (
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-sm">
              Chronova
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8 font-medium">
              Time Management System for Virtual Assistants
            </p>
            <p className="text-lg text-white mb-12 max-w-2xl mx-auto font-medium">
              A Project/Task management web app built for Virtual Assistants
              around the world. Transfoming messy and untracked work into
              organized and trackable results. Chronova solves management
              problem, time management, and unrecorded work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/auth/register"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-8 py-3 text-lg font-medium text-card-foreground shadow-sm hover:bg-muted hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-300"
              >
                Login
              </a>
              <a
                href="/auth/register"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow-sm hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-300"
              >
                Try Chronova
              </a>
            </div>
          </div>
        ) : (
          <div className="relative max-w-4xl mx-auto text-center space-y-4">
            <div className="mx-auto h-12 w-40 rounded bg-muted/40 animate-pulse" />
            <div className="mx-auto h-8 w-96 rounded bg-muted/40 animate-pulse" />
            <div className="mx-auto h-16 w-full max-w-xl rounded bg-muted/40 animate-pulse" />
            <div className="flex justify-center gap-4">
              <div className="h-12 w-36 rounded bg-muted/40 animate-pulse" />
              <div className="h-12 w-36 rounded bg-muted/40 animate-pulse" />
            </div>
          </div>
        )}
      </section>

      {/* Problems Section */}

      <section
        className="py-24 px-4 sm:px-6 lg:px-8 bg-muted opacity-0 translate-y-5 transition-all duration-700 overflow-hidden"
        data-reveal
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Chronova solves
          </h2>
          <div className="relative">
            {/* Gradient overlays for fade effect on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />

            {/* Infinite scroll container */}
            <div className="overflow-hidden">
              <div className="animate-infinite-scroll flex gap-8">
                {/* First set of cards */}
                <div className="text-center bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[280px]">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-primary hover:text-accent transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Time Management
                  </h3>
                  <p className="text-muted-foreground">
                    Struggling to track time spent on various tasks and projects
                    efficiently.
                  </p>
                </div>

                <div className="text-center bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[280px]">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-primary hover:text-accent transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Timezone Challenges
                  </h3>
                  <p className="text-muted-foreground">
                    Coordinating across different time zones creates confusion
                    and delays.
                  </p>
                </div>

                <div className="text-center bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[280px]">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-primary hover:text-accent transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Project Management
                  </h3>
                  <p className="text-muted-foreground">
                    Overseeing multiple projects simultaneously leads to missed
                    deadlines.
                  </p>
                </div>

                <div className="text-center bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[280px]">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-primary hover:text-accent transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Multiple Tasks
                  </h3>
                  <p className="text-muted-foreground">
                    Juggling numerous tasks makes it hard to prioritize and stay
                    organized.
                  </p>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="text-center bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[280px]">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-primary hover:text-accent transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Time Management
                  </h3>
                  <p className="text-muted-foreground">
                    Struggling to track time spent on various tasks and projects
                    efficiently.
                  </p>
                </div>

                <div className="text-center bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[280px]">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-primary hover:text-accent transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Timezone Challenges
                  </h3>
                  <p className="text-muted-foreground">
                    Coordinating across different time zones creates confusion
                    and delays.
                  </p>
                </div>

                <div className="text-center bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[280px]">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-primary hover:text-accent transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Project Management
                  </h3>
                  <p className="text-muted-foreground">
                    Overseeing multiple projects simultaneously leads to missed
                    deadlines.
                  </p>
                </div>

                <div className="text-center bg-card p-6 rounded-lg shadow-lg border-2 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 min-w-[280px]">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-primary hover:text-accent transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Multiple Tasks
                  </h3>
                  <p className="text-muted-foreground">
                    Juggling numerous tasks makes it hard to prioritize and stay
                    organized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/5 opacity-0 translate-y-5 transition-all duration-700"
        data-reveal
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-lg border-2 border-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 hover:bg-accent/30 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-primary hover:text-primary transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Smart Idle Detection
              </h3>
              <p className="text-muted-foreground mb-6">
                Detects user activity through mouse and keyboard interactions
                via browser extension. Automatically pauses timers when idle to
                ensure accurate time tracking.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg border-2 border-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 hover:bg-accent/30 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-primary hover:text-primary transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Comprehensive Task Timers
              </h3>
              <p className="text-muted-foreground mb-6">
                Detailed timers for each task including time in, time out, and
                breaks/pauses. All activities are recorded for precise
                productivity analysis.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg border-2 border-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 hover:bg-accent/30 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-primary hover:text-primary transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Intelligent Date Detection
              </h3>
              <p className="text-muted-foreground mb-6">
                Automatically identifies overdue tasks and those nearing
                deadlines. Helps prioritize work and meet project timelines.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg border-2 border-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 hover:bg-accent/30 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-primary hover:text-primary transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Secure Authentication
              </h3>
              <p className="text-muted-foreground mb-6">
                User registration with OTP verification, secure login/logout,
                and stateless authentication using cookies valid for 1 day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-white/10 backdrop-blur-md py-24 px-4 sm:px-6 lg:px-8 bg-primary text-background opacity-0 translate-y-5 transition-all duration-700"
        data-reveal
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Time Management?
          </h2>
          <p className="text-xl text-white mb-8">
            Join Virtual Assistants worldwide who are boosting their
            productivity with Chronova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/auth/register"
              className="inline-flex items-center justify-center rounded-md border border-background bg-transparent px-8 py-3 text-lg font-medium text-background shadow-sm hover:bg-background hover:text-foreground hover:scale-105 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-foreground transition-all duration-300"
            >
              Login
            </a>
            <a
              href="/auth/register"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-background px-8 py-3 text-lg font-medium text-foreground shadow-sm hover:bg-muted hover:scale-105 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-foreground transition-all duration-300"
            >
              Try Chronova
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
