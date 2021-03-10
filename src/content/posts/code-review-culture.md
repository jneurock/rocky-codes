---
date: 2021-03-01
excerpt:
  "I want to talk a bit about code review culture. I want to touch on commitment
  and tension but the underlying point is that I believe code review should be a
  first class part of a software engineering department."
path: "/thoughts/code-review-culture"
title: "Some Thoughts on Code Review Culture"
---

I want to talk a bit about code review culture. I want to touch on commitment
and tension but the underlying point is that I believe code review should be a
first class part of a software engineering department.

Related: Check out this post for thoughts on
[better code reviews by example](/thoughts/better-code-reviews-by-example).

### Commitment

I can assume most readers have experienced the frustration of failed commitments
from teammates or the complete lack of anyone available to review their code.
One remedy is to establish a daily or weekly order of operations. For example, I
used to encourage one of my teams to commit to code reviews first thing in the
day before cracking open their own projects.

Some sort of system is likely better than nothing and can help ensure people
aren’t left holding their
[pull requests (PRs)](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
and feeling like a pest for asking many times for
a review. If your team or organization has a problem committing to code reviews,
try carving out some time to protect it.

#### Don’t Swoop in and Disappear

If you have a helpful comment to leave on a PR, make sure you’re available for
follow up discussion. It might be ok to swoop in and comment if your concern
can be ignored but make sure to state that up front, if that’s the case.

The worse case scenario is leaving some comment that requires follow up and then
being unavailable. This can be made worse the higher your position is in your
team. A very senior developer or manager’s feedback can be taken as a blocker,
even if unintended, and being unavailable can waste a lot of time and make
people feel powerless to proceed.

### Tension

I have often experienced tension in code reviews, especially asynchronous ones,
when an author feels anxious about shipping their code quickly and a reviewer
asks for changes that may be time consuming. There could be many different
reasons for this tension but it boils down to author and reviewer not being on
the same page.

Below are some examples:

#### The author feels inward or outward pressure to ship quickly.

An author may feel pressure to ship quickly and it’s important to find out why.
If the pressure comes from within themselves, it’s good to find out how they
interpret the code review culture. Are they the only team member that feels this
way or are there others? Take the time to re-align and reassure the author that
it’s ok to take more time for code review.

If the pressure comes from another team member or some other stakeholder, take
the time to get those other people on the same page and alleviate the pressure.
One of the most unpleasant environments to develop in is one where working with
stakeholders feels adversarial.

#### Less-experienced developers can take a really long time.

Sometimes less-experienced developers take so long to develop a feature that
they bump up against or exceed an estimate or deadline. This can create a lot of
pressure to speed through a code review; however, this code probably needs the
highest level of scrutiny.

If it’s ok for a less-experienced developer to exceed estimates and deadlines, 
everyone needs to agree this is ok and everyone needs to agree that the code 
review will take a long time.

If this is not ok, less-experienced developers should not be left on their
own to take too long. Pair up or schedule frequent check-ins to keep things on
track and prevent people from floundering.

---

My hope is, after reading this, that you can answer the question “Is code
review first class in my engineering department?” and if not, apply some of the
ideas above.
