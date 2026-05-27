import { useEffect, useMemo, useState } from 'react';

const localStorageKey = 'nlc-testimonial-comments';
const initialComments = [
  {
    name: 'Aisha Gurung',
    role: 'Property Investor',
    date: '2026-05-12',
    quote: 'I appreciated the real estate support and detailed process explanations. They helped us secure the best outcome with smart legal counsel.',
  },
  {
    name: 'Ramesh Thapa',
    role: 'Business Owner',
    date: '2026-05-08',
    quote: 'The corporate law team delivered excellent contract and compliance advice. They are responsive, thorough, and deeply knowledgeable.',
  },
  {
    name: 'Sushma Shrestha',
    role: 'Individual Client',
    date: '2026-05-03',
    quote: 'National Legal Counsel guided me through a family law matter with confidence and compassion. Their professionalism made the process easy to understand.',
  },
];

function Testimonials() {
  const [comments, setComments] = useState(() => {
    try {
      const stored = localStorage.getItem(localStorageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn('Unable to load comments from localStorage', error);
    }
    return initialComments;
  });
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(localStorageKey, JSON.stringify(comments));
    } catch (error) {
      console.warn('Unable to save comments to localStorage', error);
    }
  }, [comments]);

  const sortedComments = useMemo(
    () => [...comments].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [comments],
  );

  const topThreeComments = sortedComments.slice(0, 3);
  const latestTenComments = sortedComments.slice(0, 10);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setComments((prev) => [
      {
        name: name.trim(),
        role: 'Client Review',
        quote: comment.trim(),
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
    setName('');
    setComment('');
    setShowComments(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand-300 hover-zoom">Testimonials</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl hover-zoom-text">Client Reviews that Reflect Trust</h2>
        <p className="mt-5 text-dark-400 hover-zoom-text">
          Real feedback from clients who received dedicated legal support, strategic guidance, and trusted representation.
        </p>
      </div>

      <div className="mt-12 grid gap-10 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-8 rounded-[2rem] border border-dark-700/70 bg-dark-900/80 p-10 shadow-soft hover-lift hover-glow transition-all duration-500">
          <div className="grid gap-6 md:grid-cols-3">
            {topThreeComments.map((review, idx) => (
              <div key={`${review.name}-${review.date}-${idx}`} className="rounded-[1.5rem] border border-dark-700/60 bg-dark-950 p-6 transition-all duration-300 hover:border-brand-500/50 hover:bg-dark-900/95">
                <p className="text-base leading-7 text-dark-200">"{review.quote}"</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-dark-400">{review.role}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-dark-400">{formatDate(review.date)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-dark-700/60 bg-dark-950 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-300">Latest comments</p>
            <p className="mt-4 text-dark-400">The top 3 latest client comments appear here, and you can load the latest 10 in the full list.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-dark-700/70 bg-dark-900/80 p-8 shadow-soft hover-lift hover-glow transition-all duration-500">
          <h3 className="text-2xl font-semibold text-white">Share Your Experience</h3>
          <p className="mt-3 text-dark-400">Leave a comment with your name and tell us about your experience with the firm.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-dark-200" htmlFor="review-name">Name</label>
              <input
                id="review-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-2xl border border-dark-700 bg-dark-950 px-4 py-3 text-white outline-none transition focus:border-brand-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-dark-200" htmlFor="review-comment">Comment</label>
              <textarea
                id="review-comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                className="h-32 w-full rounded-2xl border border-dark-700 bg-dark-950 px-4 py-3 text-white outline-none transition focus:border-brand-300"
                placeholder="Write your review here"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-brand-300 px-6 py-3 text-sm font-semibold text-dark-950 transition hover:bg-brand-200"
            >
              Submit Review
            </button>
          </form>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => setShowComments((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-brand-300 bg-transparent px-6 py-3 text-sm font-semibold text-brand-300 transition hover:bg-brand-300/10"
            >
              {showComments ? 'Hide latest comments' : `View all comments (${latestTenComments.length})`}
            </button>

            {showComments && (
              <div className="mt-6 space-y-4">
                {latestTenComments.map((review, idx) => (
                  <div key={`${review.name}-${review.date}-${idx}`} className="rounded-3xl border border-dark-700 bg-dark-950 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-dark-200">"{review.quote}"</p>
                        <p className="mt-4 text-sm text-dark-400">{formatDate(review.date)}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4 text-sm text-dark-400 sm:flex-row sm:items-end">
                      <div>
                        <p className="font-semibold text-white">{review.name}</p>
                        <p>{review.role}</p>
                      </div>
                      <span className="rounded-full bg-dark-800 px-3 py-1 text-xs uppercase tracking-[0.18em] text-dark-400">#{idx + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
